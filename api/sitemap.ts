import fs from 'node:fs';
import path from 'node:path';

interface FirebaseAppletConfig {
  projectId: string;
  firestoreDatabaseId: string;
  apiKey: string;
}

let cachedConfig: FirebaseAppletConfig | null = null;
let cachedBaseSitemap: string | null = null;

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

function getBaseSitemapXml(): string {
  if (cachedBaseSitemap) return cachedBaseSitemap;
  const candidates = [
    path.join(process.cwd(), 'dist', 'sitemap-base.xml'),
    path.join(process.cwd(), 'public', 'sitemap.xml'),
    path.resolve('dist', 'sitemap-base.xml'),
    path.resolve('public', 'sitemap.xml'),
  ];
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) {
        cachedBaseSitemap = fs.readFileSync(p, 'utf-8');
        return cachedBaseSitemap;
      }
    } catch {}
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
</urlset>
`;
}

function escapeXml(unsafe: string): string {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
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

async function fetchManifestFromFirestore(): Promise<{
  ok: boolean;
  posts: Array<Record<string, any>>;
  deletedSlugs: string[];
}> {
  const cfg = getFirebaseConfig();
  if (!cfg) return { ok: false, posts: [], deletedSlugs: [] };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 3000);
  try {
    const url = `https://firestore.googleapis.com/v1/projects/${cfg.projectId}/databases/${cfg.firestoreDatabaseId}/documents/meta/blog_sync?key=${encodeURIComponent(cfg.apiKey)}`;
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) {
      return { ok: false, posts: [], deletedSlugs: [] };
    }
    const rawDoc = await res.json();
    const fields = rawDoc?.fields || {};
    const rawDeleted = decodeFirestoreValue(fields.deletedSlugs);
    const rawPosts = decodeFirestoreValue(fields.posts);

    const deletedSlugs: string[] = Array.isArray(rawDeleted)
      ? rawDeleted
          .map((s) => String(s || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, ''))
          .filter(Boolean)
      : [];

    const posts: Array<Record<string, any>> = Array.isArray(rawPosts)
      ? rawPosts.filter((p) => p && typeof p === 'object')
      : [];

    return { ok: true, posts, deletedSlugs };
  } catch {
    return { ok: false, posts: [], deletedSlugs: [] };
  } finally {
    clearTimeout(timer);
  }
}

function mergeManifestIntoSitemap(
  baseXml: string,
  manifestPosts: Array<Record<string, any>>,
  deletedSlugs: string[]
): string {
  const excludedSlugs = new Set<string>(deletedSlugs);
  for (const p of manifestPosts) {
    if (p.noIndex) {
      const s = String(p.slug || p.id || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      if (s) excludedSlugs.add(s);
    }
  }

  let xml = baseXml;

  // Strip deleted or noIndex URL entries from base sitemap
  if (excludedSlugs.size > 0) {
    xml = xml.replace(/<url>[\s\S]*?<\/url>\s*/g, (urlBlock) => {
      const locMatch = urlBlock.match(/<loc>\s*https:\/\/angigio\.com\/([^<\s]+)\s*<\/loc>/i);
      if (locMatch) {
        const urlSlug = locMatch[1].toLowerCase().trim().replace(/\/$/, '');
        if (excludedSlugs.has(urlSlug)) {
          return '';
        }
      }
      return urlBlock;
    });
  }

  // Collect existing <loc> URLs so we don't duplicate entries
  const existingLocs = new Set<string>();
  const locRegex = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  let match: RegExpExecArray | null;
  while ((match = locRegex.exec(xml)) !== null) {
    existingLocs.add(match[1].trim().replace(/\/+$/, ''));
  }

  // Build new <url> blocks for active manifest posts not yet in base sitemap
  const appendedEntries: string[] = [];
  for (const p of manifestPosts) {
    if (p.noIndex) continue;
    const cleanSlug = String(p.slug || p.id || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
    if (!cleanSlug || excludedSlugs.has(cleanSlug)) continue;

    const loc = `https://angigio.com/${cleanSlug}`;
    if (existingLocs.has(loc)) continue;
    existingLocs.add(loc);

    const lastmodRaw = p.updatedAt ? String(p.updatedAt).split('T')[0] : '';
    const lastmod = /^\d{4}-\d{2}-\d{2}$/.test(lastmodRaw)
      ? lastmodRaw
      : new Date().toISOString().split('T')[0];

    const rawImage = String(
      p.coverImage || 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&auto=format&fit=crop&q=80'
    );
    const imageLoc = rawImage.startsWith('http')
      ? rawImage
      : `https://angigio.com${rawImage.startsWith('/') ? '' : '/'}${rawImage}`;
    const imageTitle = escapeXml(String(p.title || cleanSlug));

    appendedEntries.push(`  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
    <image:image>
      <image:loc>${escapeXml(imageLoc)}</image:loc>
      <image:title>${imageTitle}</image:title>
    </image:image>
  </url>`);
  }

  if (appendedEntries.length > 0 && xml.includes('</urlset>')) {
    xml = xml.replace('</urlset>', `${appendedEntries.join('\n')}\n</urlset>`);
  }

  return xml;
}

export default async function handler(_req: any, res: any) {
  const baseXml = getBaseSitemapXml();
  const manifest = await fetchManifestFromFirestore();

  if (!manifest.ok) {
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600');
    return res.status(200).send(baseXml);
  }

  const dynamicXml = mergeManifestIntoSitemap(baseXml, manifest.posts, manifest.deletedSlugs);
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=86400');
  return res.status(200).send(dynamicXml);
}
