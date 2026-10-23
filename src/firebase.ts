import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  initializeFirestore,
  setLogLevel,
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  deleteDoc,
  getDocFromServer,
} from 'firebase/firestore';

setLogLevel('silent');
import firebaseConfig from '../firebase-applet-config.json';
import { BlogPost } from './data/blogPosts';

// Initialize Firebase App
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

/* CRITICAL: The app will break without firebaseConfig.firestoreDatabaseId */
export const db = (() => {
  try {
    return initializeFirestore(
      app,
      {
        experimentalForceLongPolling: true,
      },
      firebaseConfig.firestoreDatabaseId
    );
  } catch (_e) {
    return getFirestore(app, firebaseConfig.firestoreDatabaseId);
  }
})();
export const auth = getAuth(app);

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Test connection helper (on-demand only to conserve Firestore read quota)
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase connection: client appears offline, using cached or fallback storage.');
    }
  }
}

let _clientPostsCache: BlogPost[] | null = null;
let _clientPostsCacheTime = 0;
let _clientDeletedCache: string[] | null = null;
let _clientDeletedCacheTime = 0;
let _clientQuotaCooldownUntil = 0;
const CLIENT_FIRESTORE_CACHE_TTL = 2 * 60 * 1000; // 2 minutes
const CLIENT_QUOTA_COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes cooldown if quota exceeded

export function invalidateClientFirestoreCache() {
  _clientPostsCache = null;
  _clientPostsCacheTime = 0;
  _clientDeletedCache = null;
  _clientDeletedCacheTime = 0;
}

/**
 * Save / Update a post in Cloud Firestore
 */
export async function savePostToFirestore(post: BlogPost, oldSlug?: string): Promise<void> {
  const cleanSlug = (post.slug || post.id || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
  const docId = cleanSlug.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
  const path = `posts/${docId}`;
  
  const payload = {
    id: cleanSlug,
    slug: cleanSlug,
    title: post.title || '',
    excerpt: post.excerpt || '',
    content: post.content || '',
    htmlContent: post.htmlContent || '',
    coverImage: post.coverImage || '',
    category: post.category || 'Gợi Ý Thực Đơn',
    tags: Array.isArray(post.tags) ? post.tags.join(', ') : (post.tags || ''),
    authorName: post.author?.name || 'Bếp Trưởng Hôm Nay Ăn Gì',
    authorRole: post.author?.role || 'Bếp Trưởng & Chuyên Gia Ẩm Thực',
    authorAvatar: post.author?.avatar || 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=160&auto=format&fit=crop&q=80',
    publishDate: post.publishDate || new Date().toLocaleDateString('vi-VN'),
    readTime: post.readTime || '5 phút đọc',
    featured: Boolean(post.featured),
    updatedAt: post.updatedAt || new Date().toISOString(),
    revision: Number(post.revision || 1),
    adminSaved: true,
  };

  try {
    await setDoc(doc(db, 'posts', docId), payload);
    invalidateClientFirestoreCache();

    // If slug was renamed, delete old document from Firestore so there are no duplicates
    if (oldSlug) {
      const cleanOldSlug = String(oldSlug).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      const oldDocId = cleanOldSlug.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
      if (oldDocId && oldDocId !== docId) {
        await deleteDoc(doc(db, 'posts', oldDocId)).catch(() => {});
        if (cleanOldSlug !== oldDocId) {
          await deleteDoc(doc(db, 'posts', cleanOldSlug)).catch(() => {});
        }
      }
      await removeDeletedPostFromFirestore(cleanOldSlug).catch(() => {});
    }

    // Remove from deleted_posts if it was previously marked deleted
    await removeDeletedPostFromFirestore(docId).catch(() => {});
    if (cleanSlug && cleanSlug !== docId) {
      await removeDeletedPostFromFirestore(cleanSlug).catch(() => {});
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

/**
 * Get all deleted post slugs/IDs from Cloud Firestore for global multi-device sync
 */
export async function getDeletedPostsFromFirestore(): Promise<string[]> {
  const now = Date.now();
  if (_clientDeletedCache && now - _clientDeletedCacheTime < CLIENT_FIRESTORE_CACHE_TTL) {
    return _clientDeletedCache;
  }
  if (now < _clientQuotaCooldownUntil) {
    return _clientDeletedCache || [];
  }
  const path = 'deleted_posts';
  try {
    const snapshot = await getDocs(collection(db, path));
    const list: string[] = [];
    snapshot.forEach((d) => {
      const data = d.data();
      const slugOrId = (data.slugOrId || d.id || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      if (slugOrId) list.push(slugOrId);
      const docClean = d.id.toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      if (docClean && !list.includes(docClean)) list.push(docClean);
    });
    _clientDeletedCache = list;
    _clientDeletedCacheTime = now;
    return list;
  } catch (error: any) {
    const isQuota = error?.message?.includes('Quota') || error?.code === 'resource-exhausted';
    if (isQuota) {
      _clientQuotaCooldownUntil = Date.now() + CLIENT_QUOTA_COOLDOWN_MS;
    } else {
      console.warn('Firestore getDeletedPosts error:', error);
    }
    return _clientDeletedCache || [];
  }
}

/**
 * Record a deleted post slug or ID into Cloud Firestore
 */
export async function recordDeletedPostInFirestore(slugOrId: string): Promise<void> {
  const clean = String(slugOrId).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
  if (!clean) return;
  const docId = clean.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
  invalidateClientFirestoreCache();
  try {
    await setDoc(doc(db, 'deleted_posts', docId), {
      slugOrId: clean,
      deletedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.warn('Firestore recordDeletedPost error:', error);
  }
}

/**
 * Remove a post slug or ID from deleted_posts in Cloud Firestore (when restored/re-saved)
 */
export async function removeDeletedPostFromFirestore(slugOrId: string): Promise<void> {
  const clean = String(slugOrId).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
  if (!clean) return;
  const docId = clean.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
  invalidateClientFirestoreCache();
  try {
    await deleteDoc(doc(db, 'deleted_posts', docId)).catch(() => {});
    if (clean !== docId) {
      await deleteDoc(doc(db, 'deleted_posts', clean)).catch(() => {});
    }
  } catch (error) {
    console.warn('Firestore removeDeletedPost error:', error);
  }
}

/**
 * Get all posts from Cloud Firestore
 */
export async function getPostsFromFirestore(forceRefresh = false): Promise<BlogPost[]> {
  const now = Date.now();
  if (!forceRefresh && _clientPostsCache && now - _clientPostsCacheTime < CLIENT_FIRESTORE_CACHE_TTL) {
    return _clientPostsCache;
  }
  if (now < _clientQuotaCooldownUntil) {
    return _clientPostsCache || [];
  }
  const path = 'posts';
  try {
    const snapshot = await getDocs(collection(db, path));
    const posts: BlogPost[] = [];
    const EXCLUDED_BLOG_SLUGS = new Set(['cach-lam-com-suon-nuong-mat-ong', 'com-tam-suon-bi-cha']);
    snapshot.forEach((d) => {
      const data = d.data();
      const pSlug = (data.slug || d.id || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      const pId = (data.id || d.id || '').toLowerCase().trim();
      if (EXCLUDED_BLOG_SLUGS.has(pSlug) || EXCLUDED_BLOG_SLUGS.has(pId)) {
        return;
      }
      posts.push({
        id: data.id || d.id,
        slug: data.slug || d.id,
        title: data.title || '',
        excerpt: data.excerpt || '',
        content: data.content || '',
        htmlContent: data.htmlContent || data.contentHtml || '',
        coverImage: data.coverImage || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=80',
        category: (data.category as BlogPost['category']) || 'Gợi Ý Thực Đơn',
        tags: typeof data.tags === 'string' ? data.tags.split(',').map((t: string) => t.trim()) : (data.tags || []),
        author: {
          name: data.authorName || 'Bếp Trưởng Hôm Nay Ăn Gì',
          role: data.authorRole || 'Bếp Trưởng & Chuyên Gia Ẩm Thực',
          avatar: data.authorAvatar || 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=160&auto=format&fit=crop&q=80',
        },
        publishDate: data.publishDate || '',
        readTime: data.readTime || '5 phút đọc',
        featured: Boolean(data.featured),
        updatedAt: data.updatedAt || new Date().toISOString(),
        revision: Number(data.revision || 1),
        adminSaved: true,
      });
    });
    _clientPostsCache = posts;
    _clientPostsCacheTime = now;
    return posts;
  } catch (error: any) {
    const isQuota = error?.message?.includes('Quota') || error?.code === 'resource-exhausted';
    if (isQuota) {
      _clientQuotaCooldownUntil = Date.now() + CLIENT_QUOTA_COOLDOWN_MS;
      console.warn('Firestore read quota reached. Falling back gracefully to server/cached posts.');
    } else {
      console.warn('Firestore getPosts error:', error?.message || error);
    }
    return _clientPostsCache || [];
  }
}

/**
 * Get a single post from Cloud Firestore by slug or ID (efficient: uses only 1 read unit)
 */
export async function getSinglePostFromFirestore(slugOrId: string): Promise<BlogPost | null> {
  const clean = String(slugOrId).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
  if (!clean) return null;
  const docId = clean.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);

  try {
    let snap = await getDoc(doc(db, 'posts', docId));
    if (!snap.exists() && clean !== docId) {
      snap = await getDoc(doc(db, 'posts', clean));
    }

    if (snap.exists()) {
      const data = snap.data();
      return {
        id: data.id || snap.id,
        slug: data.slug || snap.id,
        title: data.title || '',
        excerpt: data.excerpt || '',
        content: data.content || '',
        htmlContent: data.htmlContent || data.contentHtml || '',
        coverImage: data.coverImage || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=80',
        category: (data.category as BlogPost['category']) || 'Gợi Ý Thực Đơn',
        tags: typeof data.tags === 'string' ? data.tags.split(',').map((t: string) => t.trim()) : (data.tags || []),
        author: {
          name: data.authorName || 'Bếp Trưởng Hôm Nay Ăn Gì',
          role: data.authorRole || 'Bếp Trưởng & Chuyên Gia Ẩm Thực',
          avatar: data.authorAvatar || 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=160&auto=format&fit=crop&q=80',
        },
        publishDate: data.publishDate || '',
        readTime: data.readTime || '5 phút đọc',
        featured: Boolean(data.featured),
        updatedAt: data.updatedAt || new Date().toISOString(),
        revision: Number(data.revision || 1),
        adminSaved: true,
      };
    }
  } catch (error: any) {
    console.warn('Firestore single post fetch warning:', error?.message || error);
  }
  return null;
}

/**
 * Delete a post from Cloud Firestore permanently and record into deleted_posts
 */
export async function deletePostFromFirestore(postIdOrSlug: string, aliases: string[] = []): Promise<void> {
  const clean = String(postIdOrSlug).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
  const allIdentifiers = Array.from(new Set([clean, ...aliases.map((a) => a.toLowerCase().trim().replace(/^\//, '').replace(/\/$/, ''))].filter(Boolean)));

  // 1. Delete documents from posts collection
  for (const id of allIdentifiers) {
    const docId = id.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
    try {
      await deleteDoc(doc(db, 'posts', docId)).catch(() => {});
      if (id !== docId) {
        await deleteDoc(doc(db, 'posts', id)).catch(() => {});
      }
    } catch (error) {
      console.warn('Firestore delete error for doc', docId, error);
    }
  }

  // 2. Query posts collection to delete any documents where slug or id matches
  try {
    const snapshot = await getDocs(collection(db, 'posts'));
    for (const d of snapshot.docs) {
      const data = d.data();
      const pSlug = (data.slug || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      const pId = (data.id || '').toLowerCase().trim();
      if (allIdentifiers.includes(pSlug) || allIdentifiers.includes(pId) || allIdentifiers.includes(d.id)) {
        await deleteDoc(doc(db, 'posts', d.id)).catch(() => {});
      }
    }
  } catch (queryErr) {
    console.warn('Firestore sweep delete warning:', queryErr);
  }

  // 3. Record all identifiers into deleted_posts collection for multi-device sync
  for (const id of allIdentifiers) {
    await recordDeletedPostInFirestore(id);
  }
}

/**
 * Authentication Helpers for Admin
 */
export const googleProvider = new GoogleAuthProvider();

export async function loginWithGoogle(): Promise<User> {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
}

export async function logoutUser(): Promise<void> {
  await signOut(auth);
}

export { onAuthStateChanged };
export type { User };

