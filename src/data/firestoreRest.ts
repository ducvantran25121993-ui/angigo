import firebaseConfig from '../../firebase-applet-config.json';
import type { BlogPost } from './blogPosts';

const FIRESTORE_REST_BASE = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/${firebaseConfig.firestoreDatabaseId}/documents`;
const API_KEY = firebaseConfig.apiKey;

const EXCLUDED_BLOG_SLUGS = new Set(['cach-lam-com-suon-nuong-mat-ong', 'com-tam-suon-bi-cha']);

let _restPostsCache: BlogPost[] | null = null;
let _restPostsCacheTime = 0;
let _restDeletedCache: string[] | null = null;
let _restDeletedCacheTime = 0;
let _restManifestCache: BlogSyncManifestResult | null = null;
let _restManifestCacheTime = 0;
let _restQuotaCooldownUntil = 0;

export interface BlogSyncManifestResult {
  exists: boolean;
  posts: BlogPost[];
  deletedSlugs: string[];
  version?: number;
}

const REST_CACHE_TTL_MS = 2 * 60 * 1000; // 2 minutes
const REST_QUOTA_COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes cooldown on 429/quota
const LS_POSTS_CACHE_KEY = 'angigio_rest_posts_cache_v1';
const LS_DELETED_CACHE_KEY = 'angigio_rest_deleted_cache_v1';
const LS_MANIFEST_CACHE_KEY = 'angigio_rest_manifest_cache_v1';
const LS_COOLDOWN_KEY = 'angigio_rest_quota_cooldown_v1';

function getQuotaCooldownUntil(): number {
  let until = _restQuotaCooldownUntil;
  try {
    const raw = localStorage.getItem(LS_COOLDOWN_KEY);
    if (raw) {
      const parsed = Number(raw);
      if (Number.isFinite(parsed) && parsed > until) until = parsed;
    }
  } catch {}
  return until;
}

function setQuotaCooldown(): void {
  const until = Date.now() + REST_QUOTA_COOLDOWN_MS;
  _restQuotaCooldownUntil = until;
  try {
    localStorage.setItem(LS_COOLDOWN_KEY, String(until));
  } catch {}
}

function readLocalCache<T>(key: string, maxAgeMs: number): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.ts === 'number' && Date.now() - parsed.ts < maxAgeMs) {
      return parsed.data as T;
    }
  } catch {}
  return null;
}

function writeLocalCache<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify({ ts: Date.now(), data }));
  } catch {}
}

export function invalidateFirestoreRestCache(): void {
  _restPostsCache = null;
  _restPostsCacheTime = 0;
  _restDeletedCache = null;
  _restDeletedCacheTime = 0;
  _restManifestCache = null;
  _restManifestCacheTime = 0;
  try {
    localStorage.removeItem(LS_POSTS_CACHE_KEY);
    localStorage.removeItem(LS_DELETED_CACHE_KEY);
    localStorage.removeItem(LS_MANIFEST_CACHE_KEY);
  } catch {}
}

function isAutomatedCrawler(): boolean {
  if (typeof navigator === 'undefined') return true;
  const ua = navigator.userAgent || '';
  return /bot|crawl|spider|slurp|baidu|yandex|sogou|ahrefs|semrush|mj12|dotbot|petal|gptbot|bytespider|claudebot|anthropic|ccbot|headless|lighthouse/i.test(
    ua
  );
}

function decodeFirestoreValue(val: any): any {
  if (!val || typeof val !== 'object') return undefined;
  if ('stringValue' in val) return val.stringValue;
  if ('booleanValue' in val) return Boolean(val.booleanValue);
  if ('integerValue' in val) return Number(val.integerValue);
  if ('doubleValue' in val) return Number(val.doubleValue);
  if ('timestampValue' in val) return val.timestampValue;
  if ('nullValue' in val) return null;
  if ('arrayValue' in val) {
    const arr = Array.isArray(val.arrayValue?.values) ? val.arrayValue.values : [];
    return arr.map(decodeFirestoreValue);
  }
  if ('mapValue' in val) {
    const out: Record<string, any> = {};
    const fields = val.mapValue?.fields || {};
    for (const [k, v] of Object.entries(fields)) {
      out[k] = decodeFirestoreValue(v);
    }
    return out;
  }
  return undefined;
}

function decodeFirestoreDoc(doc: any): { docId: string; data: Record<string, any> } | null {
  if (!doc || !doc.name) return null;
  const parts = String(doc.name).split('/');
  const docId = parts[parts.length - 1] || '';
  const data: Record<string, any> = {};
  const fields = doc.fields || {};
  for (const [k, v] of Object.entries(fields)) {
    data[k] = decodeFirestoreValue(v);
  }
  return { docId, data };
}

function mapDocToBlogPost(docId: string, data: Record<string, any>): BlogPost {
  return {
    id: data.id || docId,
    slug: data.slug || docId,
    title: data.title || '',
    excerpt: data.excerpt || '',
    content: data.content || '',
    htmlContent: data.htmlContent || data.contentHtml || '',
    coverImage:
      data.coverImage ||
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=80',
    category: (data.category as BlogPost['category']) || 'Gợi Ý Thực Đơn',
    tags:
      typeof data.tags === 'string'
        ? data.tags
            .split(',')
            .map((t: string) => t.trim())
            .filter(Boolean)
        : Array.isArray(data.tags)
          ? data.tags
          : [],
    author: {
      name: data.authorName || 'Bếp Trưởng Hôm Nay Ăn Gì',
      role: data.authorRole || 'Bếp Trưởng & Chuyên Gia Ẩm Thực',
      avatar:
        data.authorAvatar ||
        'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=160&auto=format&fit=crop&q=80',
    },
    publishDate: data.publishDate || '',
    readTime: data.readTime || '5 phút đọc',
    featured: Boolean(data.featured),
    relatedDishIds: Array.isArray(data.relatedDishIds) ? data.relatedDishIds : [],
    updatedAt: data.updatedAt || new Date().toISOString(),
    revision: Number(data.revision || 1),
    adminSaved: true,
  };
}

/**
 * 1-Read Manifest Reader (/meta/blog_sync):
 * Fetches compact post metadata + deletedSlugs in a single Firestore read unit (~95% read quota reduction).
 */
export async function fetchBlogSyncManifestViaFirestoreRest(
  forceRefresh = false
): Promise<BlogSyncManifestResult> {
  if (isAutomatedCrawler()) {
    return { exists: false, posts: [], deletedSlugs: [] };
  }
  const now = Date.now();
  if (!forceRefresh && _restManifestCache && now - _restManifestCacheTime < REST_CACHE_TTL_MS) {
    return _restManifestCache;
  }
  if (!forceRefresh) {
    const localCached = readLocalCache<BlogSyncManifestResult>(LS_MANIFEST_CACHE_KEY, REST_CACHE_TTL_MS);
    if (localCached && localCached.exists) {
      _restManifestCache = localCached;
      _restManifestCacheTime = now;
      return localCached;
    }
  }
  if (now < getQuotaCooldownUntil()) {
    return _restManifestCache || { exists: false, posts: [], deletedSlugs: [] };
  }

  try {
    const url = `${FIRESTORE_REST_BASE}/meta/blog_sync?key=${encodeURIComponent(API_KEY)}`;
    const res = await fetch(url);
    if (res.status === 429 || res.status === 403) {
      setQuotaCooldown();
      return _restManifestCache || { exists: false, posts: [], deletedSlugs: [] };
    }
    if (res.status === 404) {
      return { exists: false, posts: [], deletedSlugs: [] };
    }
    if (!res.ok) {
      return _restManifestCache || { exists: false, posts: [], deletedSlugs: [] };
    }

    const rawDoc = await res.json();
    const decoded = decodeFirestoreDoc(rawDoc);
    if (!decoded) {
      return { exists: false, posts: [], deletedSlugs: [] };
    }

    const data = decoded.data;
    const deletedSlugs: string[] = [];
    if (Array.isArray(data.deletedSlugs)) {
      for (const s of data.deletedSlugs) {
        const clean = String(s || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
        if (clean && !deletedSlugs.includes(clean)) deletedSlugs.push(clean);
      }
    }
    const deletedSet = new Set(deletedSlugs);

    const posts: BlogPost[] = [];
    if (Array.isArray(data.posts)) {
      for (const rawItem of data.posts) {
        if (!rawItem || typeof rawItem !== 'object') continue;
        const pSlug = String(rawItem.slug || rawItem.id || '')
          .toLowerCase()
          .trim()
          .replace(/^\//, '')
          .replace(/\/$/, '');
        const pId = String(rawItem.id || rawItem.slug || '').toLowerCase().trim();
        if (!pSlug && !pId) continue;
        if (
          deletedSet.has(pSlug) ||
          deletedSet.has(pId) ||
          EXCLUDED_BLOG_SLUGS.has(pSlug) ||
          EXCLUDED_BLOG_SLUGS.has(pId)
        ) {
          continue;
        }
        const mapped = mapDocToBlogPost(pSlug || pId, rawItem);
        mapped.content = '';
        mapped.htmlContent = '';
        mapped.isMetadataOnly = true;
        if (rawItem.oldSlug) mapped.oldSlug = String(rawItem.oldSlug);
        posts.push(mapped);
      }
    }

    const result: BlogSyncManifestResult = {
      exists: true,
      posts,
      deletedSlugs,
      version: Number(data.version || 0),
    };
    _restManifestCache = result;
    _restManifestCacheTime = Date.now();
    writeLocalCache(LS_MANIFEST_CACHE_KEY, result);
    return result;
  } catch {
    return _restManifestCache || { exists: false, posts: [], deletedSlugs: [] };
  }
}

/**
 * Lightweight zero-SDK Firestore REST reader for normal blog visitors.
 * Allows reading newly published admin posts on any device without loading 528 KB vendor-firebase.js.
 */
export async function fetchPostsViaFirestoreRest(forceRefresh = false): Promise<BlogPost[]> {
  if (isAutomatedCrawler()) return [];
  const now = Date.now();
  if (!forceRefresh && _restPostsCache && now - _restPostsCacheTime < REST_CACHE_TTL_MS) {
    return _restPostsCache;
  }
  if (!forceRefresh) {
    const localCached = readLocalCache<BlogPost[]>(LS_POSTS_CACHE_KEY, REST_CACHE_TTL_MS);
    if (localCached) {
      _restPostsCache = localCached;
      _restPostsCacheTime = now;
      return localCached;
    }
  }
  if (now < getQuotaCooldownUntil()) {
    return _restPostsCache || [];
  }

  try {
    const posts: BlogPost[] = [];
    let pageToken = '';
    let pages = 0;

    do {
      const tokenParam = pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : '';
      const url = `${FIRESTORE_REST_BASE}/posts?pageSize=100${tokenParam}&key=${encodeURIComponent(API_KEY)}`;
      const res = await fetch(url);
      if (res.status === 429 || res.status === 403) {
        setQuotaCooldown();
        return _restPostsCache || [];
      }
      if (!res.ok) {
        return _restPostsCache || [];
      }
      const json = await res.json();
      const docs = Array.isArray(json.documents) ? json.documents : [];
      for (const rawDoc of docs) {
        const decoded = decodeFirestoreDoc(rawDoc);
        if (!decoded) continue;
        const { docId, data } = decoded;
        const pSlug = String(data.slug || docId || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
        const pId = String(data.id || docId || '').toLowerCase().trim();
        if (EXCLUDED_BLOG_SLUGS.has(pSlug) || EXCLUDED_BLOG_SLUGS.has(pId)) continue;
        posts.push(mapDocToBlogPost(docId, data));
      }
      pageToken = json.nextPageToken || '';
      pages += 1;
    } while (pageToken && pages < 5);

    _restPostsCache = posts;
    _restPostsCacheTime = Date.now();
    writeLocalCache(LS_POSTS_CACHE_KEY, posts);
    return posts;
  } catch {
    return _restPostsCache || [];
  }
}

export async function fetchSinglePostViaFirestoreRest(slugOrId: string): Promise<BlogPost | null> {
  if (isAutomatedCrawler()) return null;
  const clean = String(slugOrId).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
  if (!clean || EXCLUDED_BLOG_SLUGS.has(clean) || Date.now() < getQuotaCooldownUntil()) return null;

  const docId = clean.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
  const candidates = docId !== clean ? [docId, clean] : [docId];

  for (const id of candidates) {
    try {
      const url = `${FIRESTORE_REST_BASE}/posts/${encodeURIComponent(id)}?key=${encodeURIComponent(API_KEY)}`;
      const res = await fetch(url);
      if (res.status === 429 || res.status === 403) {
        setQuotaCooldown();
        return null;
      }
      if (res.ok) {
        const rawDoc = await res.json();
        const decoded = decodeFirestoreDoc(rawDoc);
        if (decoded) {
          const pSlug = String(decoded.data.slug || decoded.docId || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
          const pId = String(decoded.data.id || decoded.docId || '').toLowerCase().trim();
          if (EXCLUDED_BLOG_SLUGS.has(pSlug) || EXCLUDED_BLOG_SLUGS.has(pId)) return null;
          return mapDocToBlogPost(decoded.docId, decoded.data);
        }
      }
    } catch {
      // Try next candidate
    }
  }
  return null;
}

export async function fetchDeletedPostsViaFirestoreRest(forceRefresh = false): Promise<string[]> {
  if (isAutomatedCrawler()) return [];
  const now = Date.now();
  if (!forceRefresh && _restDeletedCache && now - _restDeletedCacheTime < REST_CACHE_TTL_MS) {
    return _restDeletedCache;
  }
  if (!forceRefresh) {
    const localCached = readLocalCache<string[]>(LS_DELETED_CACHE_KEY, REST_CACHE_TTL_MS);
    if (localCached) {
      _restDeletedCache = localCached;
      _restDeletedCacheTime = now;
      return localCached;
    }
  }
  if (now < getQuotaCooldownUntil()) {
    return _restDeletedCache || [];
  }

  try {
    const url = `${FIRESTORE_REST_BASE}/deleted_posts?pageSize=200&key=${encodeURIComponent(API_KEY)}`;
    const res = await fetch(url);
    if (res.status === 429 || res.status === 403) {
      setQuotaCooldown();
      return _restDeletedCache || [];
    }
    if (!res.ok) {
      return _restDeletedCache || [];
    }
    const json = await res.json();
    const docs = Array.isArray(json.documents) ? json.documents : [];
    const list: string[] = [];
    for (const rawDoc of docs) {
      const decoded = decodeFirestoreDoc(rawDoc);
      if (!decoded) continue;
      const slugOrId = String(decoded.data.slugOrId || decoded.docId || '')
        .toLowerCase()
        .trim()
        .replace(/^\//, '')
        .replace(/\/$/, '');
      if (slugOrId && !list.includes(slugOrId)) list.push(slugOrId);
      const docClean = decoded.docId.toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      if (docClean && !list.includes(docClean)) list.push(docClean);
    }
    _restDeletedCache = list;
    _restDeletedCacheTime = Date.now();
    writeLocalCache(LS_DELETED_CACHE_KEY, list);
    return list;
  } catch {
    return _restDeletedCache || [];
  }
}
