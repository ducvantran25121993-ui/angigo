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
  getDocsFromServer,
} from 'firebase/firestore';

setLogLevel('silent');

// Silence benign internal Firestore gRPC idle stream disconnection messages
const isBenignNotice = (args: any[]) => {
  try {
    for (const a of args) {
      if (!a) continue;
      const s = typeof a === 'string' ? a : (a.message || a.stack || (typeof a === 'object' ? JSON.stringify(a) : String(a)));
      if (
        typeof s === 'string' &&
        (s.includes('Disconnecting idle stream') ||
         s.includes('Timed out waiting for new targets') ||
         (s.includes('GrpcConnection') && s.includes('CANCELLED')) ||
         (s.includes('@firebase/firestore') && s.includes('idle stream')))
      ) {
        return true;
      }
    }
  } catch {}
  return false;
};
const filterIdleStreamError = (originalFn: (...args: any[]) => void) => {
  return (...args: any[]) => {
    if (isBenignNotice(args)) {
      return; // Benign internal gRPC connection cleanup, ignore
    }
    originalFn.apply(console, args);
  };
};
console.error = filterIdleStreamError(console.error);
console.warn = filterIdleStreamError(console.warn);

if (typeof process !== 'undefined' && process.stderr && typeof process.stderr.write === 'function') {
  const origStderrWrite = process.stderr.write.bind(process.stderr);
  (process.stderr as any).write = function (chunk: any, encoding?: any, callback?: any): boolean {
    const str = typeof chunk === 'string' ? chunk : chunk?.toString() || '';
    if (
      str.includes('Disconnecting idle stream') ||
      str.includes('Timed out waiting for new targets') ||
      (str.includes('GrpcConnection') && str.includes('CANCELLED')) ||
      (str.includes('@firebase/firestore') && str.includes('idle stream'))
    ) {
      if (typeof callback === 'function') callback();
      return true;
    }
    return origStderrWrite(chunk, encoding, callback);
  };
}

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
        experimentalAutoDetectLongPolling: true,
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
  _clientQuotaCooldownUntil = 0;
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem('angigio_rest_posts_cache_v1');
      localStorage.removeItem('angigio_rest_deleted_cache_v1');
      localStorage.removeItem('angigio_rest_manifest_cache_v1');
      localStorage.removeItem('angigio_rest_quota_cooldown_v1');
    } catch {}
  }
}

/**
 * Save / Update a post in Cloud Firestore
 */
export async function savePostToFirestore(post: BlogPost, oldSlug?: string): Promise<void> {
  const cleanSlug = (post.slug || post.id || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '').slice(0, 150);
  const docId = cleanSlug.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
  const path = `posts/${docId}`;

  const rawCover = String(post.coverImage || '').trim();
  const safeCover = rawCover.length <= 490000 ? rawCover : '/images/an-gi-cho-do-ngan.jpg';
  const rawAvatar = String(post.author?.avatar || 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=160&auto=format&fit=crop&q=80').trim();
  const safeAvatar = rawAvatar.length <= 10000 ? rawAvatar : 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=160&auto=format&fit=crop&q=80';
  const rawTags = Array.isArray(post.tags) ? post.tags.join(', ') : String(post.tags || '');

  const payload = {
    id: cleanSlug,
    slug: cleanSlug,
    title: String(post.title || '').trim().slice(0, 300),
    excerpt: String(post.excerpt || '').trim().slice(0, 1000),
    content: String(post.content || '').slice(0, 490000),
    htmlContent: String(post.htmlContent || '').slice(0, 490000),
    coverImage: safeCover,
    category: String(post.category || 'Gợi Ý Thực Đơn').trim().slice(0, 100),
    tags: rawTags.slice(0, 500),
    authorName: String(post.author?.name || 'Bếp Trưởng Hôm Nay Ăn Gì').trim().slice(0, 100),
    authorRole: String(post.author?.role || 'Bếp Trưởng & Chuyên Gia Ẩm Thực').trim().slice(0, 100),
    authorAvatar: safeAvatar,
    publishDate: String(post.publishDate || new Date().toLocaleDateString('vi-VN')).trim().slice(0, 50),
    readTime: String(post.readTime || '5 phút đọc').trim().slice(0, 50),
    featured: Boolean(post.featured),
    updatedAt: String(post.updatedAt || new Date().toISOString()).slice(0, 100),
    revision: Math.max(Number(post.revision || 1), 1),
    adminSaved: true,
    seoTitle: String(post.seoTitle || '').trim().slice(0, 200),
    seoDescription: String(post.seoDescription || '').trim().slice(0, 350),
    focusKeyword: String(post.focusKeyword || '').trim().slice(0, 120),
    noIndex: Boolean(post.noIndex),
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
 * Write compact 1-read manifest document at /meta/blog_sync so visitors load all post metadata
 * and deletedSlugs in 1 single Firestore read unit instead of scanning entire collections.
 */
export async function syncBlogManifestToFirestore(
  posts: BlogPost[],
  deletedSlugs: string[] = []
): Promise<boolean> {
  try {
    const deletedSet = new Set<string>();
    const cleanDeleted: string[] = [];
    for (const raw of deletedSlugs) {
      const clean = String(raw || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      if (clean && !deletedSet.has(clean)) {
        deletedSet.add(clean);
        cleanDeleted.push(clean);
      }
      if (cleanDeleted.length >= 900) break;
    }

    const compactPosts: Record<string, any>[] = [];
    const seenSlugs = new Set<string>();
    for (const p of posts) {
      if (!p || (!p.slug && !p.id)) continue;
      const cleanSlug = String(p.slug || p.id || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      const cleanId = String(p.id || p.slug || cleanSlug).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      if (!cleanSlug || deletedSet.has(cleanSlug) || deletedSet.has(cleanId) || seenSlugs.has(cleanSlug)) continue;
      seenSlugs.add(cleanSlug);

      const rawCover = String(p.coverImage || '');
      const safeCover =
        rawCover && rawCover.length <= 2048
          ? rawCover
          : 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=80';

      compactPosts.push({
        id: cleanId.slice(0, 150),
        slug: cleanSlug.slice(0, 150),
        title: String(p.title || '').slice(0, 300),
        excerpt: String(p.excerpt || '').slice(0, 500),
        coverImage: safeCover,
        category: String(p.category || 'Gợi Ý Thực Đơn').slice(0, 100),
        tags: Array.isArray(p.tags) ? p.tags.slice(0, 15).map((t) => String(t).slice(0, 60)) : [],
        authorName: String(p.author?.name || 'Bếp Trưởng Hôm Nay Ăn Gì').slice(0, 100),
        authorRole: String(p.author?.role || 'Bếp Trưởng & Chuyên Gia Ẩm Thực').slice(0, 100),
        authorAvatar: String(
          p.author?.avatar && p.author.avatar.length <= 2048
            ? p.author.avatar
            : 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=160&auto=format&fit=crop&q=80'
        ),
        publishDate: String(p.publishDate || '').slice(0, 50),
        readTime: String(p.readTime || '5 phút đọc').slice(0, 50),
        featured: Boolean(p.featured),
        relatedDishIds: Array.isArray(p.relatedDishIds) ? p.relatedDishIds.slice(0, 20) : [],
        oldSlug: p.oldSlug ? String(p.oldSlug).slice(0, 150) : '',
        updatedAt: String(p.updatedAt || new Date().toISOString()).slice(0, 100),
        revision: Math.max(Number(p.revision || 0), p.adminSaved ? 1 : 0),
        adminSaved: Boolean(p.adminSaved),
        seoTitle: p.seoTitle ? String(p.seoTitle).trim().slice(0, 200) : '',
        seoDescription: p.seoDescription ? String(p.seoDescription).trim().slice(0, 350) : '',
        focusKeyword: p.focusKeyword ? String(p.focusKeyword).trim().slice(0, 120) : '',
        noIndex: Boolean(p.noIndex),
      });
      if (compactPosts.length >= 450) break;
    }

    await setDoc(doc(db, 'meta', 'blog_sync'), {
      version: Math.floor(Date.now()),
      updatedAt: new Date().toISOString(),
      deletedSlugs: cleanDeleted,
      posts: compactPosts,
    });
    invalidateClientFirestoreCache();
    return true;
  } catch (error) {
    console.warn('Firestore syncBlogManifest error:', error);
    return false;
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
    const snapshot = await getDocsFromServer(collection(db, path)).catch(() => getDocs(collection(db, path)));
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
export async function recordDeletedPostInFirestore(slugOrId: string): Promise<boolean> {
  const clean = String(slugOrId).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
  if (!clean) return false;
  const docId = clean.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
  invalidateClientFirestoreCache();
  try {
    await setDoc(doc(db, 'deleted_posts', docId), {
      slugOrId: clean,
      deletedAt: new Date().toISOString(),
    });
    return true;
  } catch (error) {
    console.warn('Firestore recordDeletedPost error:', error);
    return false;
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

export interface FirestorePostsFetchMeta {
  posts: BlogPost[];
  ok: boolean;
  quotaExceeded: boolean;
  errorMessage?: string;
}

/**
 * Safe manifest writer: prevents accidentally wiping existing cloud posts in /meta/blog_sync
 * if the admin browser failed to read Firestore (e.g. 429 quota or 2s timeout).
 */
export async function syncBlogManifestSafely(
  posts: BlogPost[],
  deletedSlugs: string[] = [],
  cloudReadWasOk = false
): Promise<boolean> {
  if (cloudReadWasOk) {
    return syncBlogManifestToFirestore(posts, deletedSlugs);
  }
  try {
    const manifestSnap = await getDocFromServer(doc(db, 'meta', 'blog_sync'));
    if (!manifestSnap.exists()) {
      return syncBlogManifestToFirestore(posts, deletedSlugs);
    }
    const existingData = manifestSnap.data() || {};
    const existingDeleted = Array.isArray(existingData.deletedSlugs) ? existingData.deletedSlugs : [];
    const mergedDeleted = Array.from(
      new Set(
        [...existingDeleted, ...deletedSlugs]
          .map((s) => String(s || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, ''))
          .filter(Boolean)
      )
    );
    const deletedSet = new Set(mergedDeleted);
    const existingPosts: BlogPost[] = Array.isArray(existingData.posts) ? existingData.posts : [];
    const mergedMap = new Map<string, BlogPost>();
    for (const ep of existingPosts) {
      const k = String(ep?.slug || ep?.id || '').toLowerCase().trim();
      if (k && !deletedSet.has(k)) mergedMap.set(k, ep);
    }
    for (const np of posts) {
      const k = String(np?.slug || np?.id || '').toLowerCase().trim();
      if (!k || deletedSet.has(k)) continue;
      const prev = mergedMap.get(k);
      if (!prev || Number(np.revision || 0) >= Number(prev.revision || 0)) {
        mergedMap.set(k, np);
      }
    }
    return syncBlogManifestToFirestore(Array.from(mergedMap.values()), mergedDeleted);
  } catch (err) {
    console.warn('Skipped unsafe manifest overwrite because existing /meta/blog_sync could not be verified:', err);
    return false;
  }
}

/**
 * Get all posts from Cloud Firestore with read status metadata
 */
export async function getPostsFromFirestoreWithMeta(forceRefresh = false): Promise<FirestorePostsFetchMeta> {
  const now = Date.now();
  if (!forceRefresh && _clientPostsCache && now - _clientPostsCacheTime < CLIENT_FIRESTORE_CACHE_TTL) {
    return { posts: _clientPostsCache, ok: true, quotaExceeded: false };
  }
  if (now < _clientQuotaCooldownUntil) {
    return {
      posts: _clientPostsCache || [],
      ok: false,
      quotaExceeded: true,
      errorMessage: 'Quota exceeded (cooldown)',
    };
  }
  const path = 'posts';
  try {
    const snapshot = await getDocsFromServer(collection(db, path)).catch(() => getDocs(collection(db, path)));
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
        seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
        seoDescription: data.seoDescription ? String(data.seoDescription) : undefined,
        focusKeyword: data.focusKeyword ? String(data.focusKeyword) : undefined,
        noIndex: Boolean(data.noIndex),
      });
    });
    _clientPostsCache = posts;
    _clientPostsCacheTime = now;
    return { posts, ok: true, quotaExceeded: false };
  } catch (error: any) {
    const msg = String(error?.message || error || '');
    const isQuota = msg.includes('Quota') || error?.code === 'resource-exhausted' || msg.includes('429');
    if (isQuota) {
      _clientQuotaCooldownUntil = Date.now() + CLIENT_QUOTA_COOLDOWN_MS;
      console.warn('Firestore read quota reached. Falling back gracefully to server/cached posts.');
    } else {
      console.warn('Firestore getPosts error:', msg);
    }
    return {
      posts: _clientPostsCache || [],
      ok: false,
      quotaExceeded: isQuota,
      errorMessage: msg,
    };
  }
}

/**
 * Get all posts from Cloud Firestore
 */
export async function getPostsFromFirestore(forceRefresh = false): Promise<BlogPost[]> {
  const meta = await getPostsFromFirestoreWithMeta(forceRefresh);
  return meta.posts;
}

/**
 * Get a single post from Cloud Firestore by slug or ID (efficient: uses only 1 read unit)
 */
export async function getSinglePostFromFirestore(slugOrId: string): Promise<BlogPost | null> {
  const clean = String(slugOrId).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
  if (!clean) return null;
  const docId = clean.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);

  try {
    let snap = await getDocFromServer(doc(db, 'posts', docId)).catch(() => getDoc(doc(db, 'posts', docId)));
    if (!snap.exists() && clean !== docId) {
      snap = await getDocFromServer(doc(db, 'posts', clean)).catch(() => getDoc(doc(db, 'posts', clean)));
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
        seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
        seoDescription: data.seoDescription ? String(data.seoDescription) : undefined,
        focusKeyword: data.focusKeyword ? String(data.focusKeyword) : undefined,
        noIndex: Boolean(data.noIndex),
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
export async function deletePostFromFirestore(postIdOrSlug: string, aliases: string[] = []): Promise<boolean> {
  const clean = String(postIdOrSlug).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
  const allIdentifiers = Array.from(new Set([clean, ...aliases.map((a) => a.toLowerCase().trim().replace(/^\//, '').replace(/\/$/, ''))].filter(Boolean)));
  let deletedRecordSaved = false;

  // 1. Record all identifiers into deleted_posts FIRST (write-only, works even if daily read quota is 429)
  for (const id of allIdentifiers) {
    const ok = await recordDeletedPostInFirestore(id);
    if (ok) deletedRecordSaved = true;
  }

  // 2. Delete direct document IDs from posts collection
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

  // 3. Best-effort sweep query on posts collection with fast timeout (never blocks deletion if read quota is reached)
  try {
    const snapshot = await Promise.race([
      getDocs(collection(db, 'posts')),
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error('Firestore sweep timeout')), 2500)),
    ]);
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

  invalidateClientFirestoreCache();
  return deletedRecordSaved;
}

/**
 * Authentication Helpers for Admin
 */
export const ADMIN_EMAILS = [
  'ducvantran25121993@gmail.com',
  'tranduc474@gmail.com',
] as const;

export function isAllowedAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  const normalized = email.trim().toLowerCase();
  return ADMIN_EMAILS.includes(normalized as (typeof ADMIN_EMAILS)[number]);
}

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export async function loginWithGoogle(): Promise<User> {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;
  if (!user.emailVerified || !isAllowedAdminEmail(user.email)) {
    await signOut(auth).catch(() => {});
    const err = new Error(
      `Tài khoản ${user.email || 'này'} không có quyền quản trị viên.`
    ) as Error & { code?: string };
    err.code = 'auth/unauthorized-admin';
    throw err;
  }
  return user;
}

export async function logoutUser(): Promise<void> {
  await signOut(auth);
}

export { onAuthStateChanged };
export type { User };

