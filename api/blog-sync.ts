import fs from 'node:fs';
import path from 'node:path';

interface FirebaseAppletConfig {
  projectId: string;
  firestoreDatabaseId: string;
  apiKey: string;
}

let cachedConfig: FirebaseAppletConfig | null = null;

function getFirebaseConfig(): FirebaseAppletConfig | null {
  if (cachedConfig) return cachedConfig;
  const candidates = [
    path.join(process.cwd(), 'firebase-applet-config.json'),
    path.resolve('firebase-applet-config.json'),
  ];
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) {
        const parsed = JSON.parse(fs.readFileSync(p, 'utf-8'));
        if (parsed?.projectId && parsed?.firestoreDatabaseId && parsed?.apiKey) {
          cachedConfig = parsed;
          return cachedConfig;
        }
      }
    } catch {}
  }
  return null;
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

export default async function handler(_req: any, res: any) {
  const cfg = getFirebaseConfig();
  if (!cfg) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=60');
    return res.status(200).json({ exists: false, posts: [], deletedSlugs: [] });
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 3500);

  try {
    const url = `https://firestore.googleapis.com/v1/projects/${cfg.projectId}/databases/${cfg.firestoreDatabaseId}/documents/meta/blog_sync?key=${encodeURIComponent(cfg.apiKey)}`;
    const upstream = await fetch(url, { signal: controller.signal });

    if (upstream.status === 429 || upstream.status === 403) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
      return res.status(200).json({ exists: false, quotaLimited: true, posts: [], deletedSlugs: [] });
    }

    if (upstream.status === 404) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=1800');
      return res.status(200).json({ exists: false, posts: [], deletedSlugs: [] });
    }

    if (!upstream.ok) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.setHeader('Cache-Control', 'public, s-maxage=60');
      return res.status(200).json({ exists: false, posts: [], deletedSlugs: [] });
    }

    const doc = await upstream.json();
    const fields = doc?.fields || {};
    const rawDeleted = decodeFirestoreValue(fields.deletedSlugs);
    const rawPosts = decodeFirestoreValue(fields.posts);
    const version = Number(decodeFirestoreValue(fields.version) || 0);
    const updatedAt = String(decodeFirestoreValue(fields.updatedAt) || '');

    const deletedSlugs: string[] = Array.isArray(rawDeleted)
      ? Array.from(
          new Set(
            rawDeleted
              .map((s: any) => String(s || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, ''))
              .filter(Boolean)
          )
        )
      : [];

    const posts = Array.isArray(rawPosts) ? rawPosts.filter((p: any) => p && typeof p === 'object') : [];

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=120, s-maxage=1800, stale-while-revalidate=86400');
    return res.status(200).json({
      exists: true,
      version,
      updatedAt,
      deletedSlugs,
      posts,
    });
  } catch {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=60');
    return res.status(200).json({ exists: false, posts: [], deletedSlugs: [] });
  } finally {
    clearTimeout(timer);
  }
}
