import fs from 'node:fs';
import path from 'node:path';

interface FirebaseAppletConfig {
  projectId: string;
  firestoreDatabaseId: string;
  apiKey: string;
}

let cachedConfig: FirebaseAppletConfig | null = null;
let cachedBaseHtml: string | null = null;

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

async function getBaseHtml(req: any): Promise<string> {
  if (cachedBaseHtml) return cachedBaseHtml;
  const candidates = [
    path.join(process.cwd(), 'dist', 'index.html'),
    path.join(process.cwd(), 'index.html'),
    path.resolve('dist', 'index.html'),
  ];
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) {
        cachedBaseHtml = fs.readFileSync(p, 'utf-8');
        return cachedBaseHtml;
      }
    } catch {}
  }

  try {
    const host = req?.headers?.['x-forwarded-host'] || req?.headers?.host || 'angigio.com';
    const proto = req?.headers?.['x-forwarded-proto'] || 'https';
    const fallbackRes = await fetch(`${proto}://${host}/index.html`);
    if (fallbackRes.ok) {
      const html = await fallbackRes.text();
      if (html.includes('<div id="root">')) {
        cachedBaseHtml = html;
        return html;
      }
    }
  } catch {}

  return '<!doctype html><html lang="vi"><head><meta charset="UTF-8" /><title>Hôm Nay Ăn Gì</title></head><body><div id="root"></div></body></html>';
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

function mapFirestorePost(docId: string, fields: Record<string, any>): Record<string, any> {
  const data: Record<string, any> = {};
  for (const [k, v] of Object.entries(fields || {})) {
    data[k] = decodeFirestoreValue(v);
  }
  const slug = String(data.slug || docId)
    .toLowerCase()
    .trim()
    .replace(/^\//, '')
    .replace(/\/$/, '');

  return {
    id: data.id || docId,
    slug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    content: data.content || '',
    htmlContent: data.htmlContent || data.contentHtml || undefined,
    coverImage:
      data.coverImage ||
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&auto=format&fit=crop&q=80',
    category: data.category || 'Gợi Ý Thực Đơn',
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
      role: data.authorRole || 'Chuyên gia Ẩm thực & Dinh dưỡng',
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
    seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
    seoDescription: data.seoDescription ? String(data.seoDescription) : undefined,
    focusKeyword: data.focusKeyword ? String(data.focusKeyword) : undefined,
    noIndex: Boolean(data.noIndex),
  };
}

async function fetchSinglePostFromFirestore(slug: string): Promise<Record<string, any> | null> {
  const cfg = getFirebaseConfig();
  if (!cfg || !slug) return null;

  const base = `https://firestore.googleapis.com/v1/projects/${cfg.projectId}/databases/${cfg.firestoreDatabaseId}/documents`;
  const docId = slug.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
  const candidates = docId !== slug ? [docId, slug] : [docId];

  for (const id of candidates) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);
    try {
      const url = `${base}/posts/${encodeURIComponent(id)}?key=${encodeURIComponent(cfg.apiKey)}`;
      const res = await fetch(url, { signal: controller.signal });
      if (res.status === 429 || res.status === 403) {
        return null;
      }
      if (res.ok) {
        const json = await res.json();
        if (json?.fields) {
          const nameParts = String(json.name || '').split('/');
          const resolvedId = nameParts[nameParts.length - 1] || id;
          return mapFirestorePost(resolvedId, json.fields);
        }
      }
    } catch {
      // Ignore transient/timeout errors and fall back to base SPA HTML
    } finally {
      clearTimeout(timer);
    }
  }
  return null;
}

function injectPostSeo(baseHtml: string, post: Record<string, any>): string {
  const canonicalPath = `/${post.slug}`;
  const canonicalUrl = `https://angigio.com${canonicalPath}`;
  const effectiveTitle = (post.seoTitle && post.seoTitle.trim()) || `${post.title} | Blog Ẩm Thực Hôm Nay Ăn Gì`;
  const effectiveDesc = (post.seoDescription && post.seoDescription.trim()) || post.excerpt || '';
  const tagsList: string[] = Array.isArray(post.tags) ? post.tags : [];
  if (post.focusKeyword && !tagsList.some((t) => t.toLowerCase() === String(post.focusKeyword).toLowerCase())) {
    tagsList.unshift(String(post.focusKeyword));
  }
  const effectiveKeywords = tagsList.join(', ');
  const rawImage = String(post.coverImage || '/images/default-dish.jpg');
  const fullImageUrl = rawImage.startsWith('http') ? rawImage : `https://angigio.com${rawImage.startsWith('/') ? '' : '/'}${rawImage}`;

  const safeTitle = escapeXml(effectiveTitle);
  const safeDesc = escapeXml(effectiveDesc);
  const safeKeywords = escapeXml(effectiveKeywords);
  const safeImageAlt = escapeXml(post.title || effectiveTitle);

  const publishedTime = post.updatedAt || '2026-09-28T08:00:00+07:00';
  const modifiedTime = post.updatedAt || '2026-09-30T00:00:00+07:00';
  const cleanArtTitle = String(post.title || effectiveTitle).replace(/\s*\|\s*(?:Hôm Nay Ăn Gì|Ăn Gì Giờ|Blog.*)$/i, '').trim();

  let html = baseHtml
    .replace(/<title>.*?<\/title>/i, `<title>${safeTitle}</title>`)
    .replace(/<meta\s+name="title"\s+content=".*?"\s*\/?>/i, `<meta name="title" content="${safeTitle}" />`)
    .replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/i, `<meta name="description" content="${safeDesc}" />`)
    .replace(/<meta\s+name="keywords"\s+content=".*?"\s*\/?>/i, `<meta name="keywords" content="${safeKeywords}" />`)
    .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i, `<meta property="og:title" content="${safeTitle}" />`)
    .replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i, `<meta property="og:description" content="${safeDesc}" />`)
    .replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i, `<meta property="og:image" content="${escapeXml(fullImageUrl)}" />`)
    .replace(/<meta\s+property="og:image:alt"\s+content=".*?"\s*\/?>/i, `<meta property="og:image:alt" content="${safeImageAlt}" />`)
    .replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${safeTitle}" />`)
    .replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${safeDesc}" />`)
    .replace(/<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:url" content="${canonicalUrl}" />`)
    .replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:image" content="${escapeXml(fullImageUrl)}" />`)
    .replace(
      /<meta\s+property="og:type"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:type" content="article" />\n    <meta property="article:published_time" content="${escapeXml(publishedTime)}" />\n    <meta property="article:modified_time" content="${escapeXml(modifiedTime)}" />\n    <meta property="article:author" content="${escapeXml(post.author?.name || 'Hôm Nay Ăn Gì')}" />\n    <meta property="article:section" content="${escapeXml(post.category || 'Bí quyết ẩm thực')}" />`
    );

  if (post.noIndex) {
    html = html
      .replace(/<meta\s+name="robots"\s+content=".*?"\s*\/?>/i, `<meta name="robots" content="noindex, nofollow" />`)
      .replace(/<meta\s+name="googlebot"\s+content=".*?"\s*\/?>/i, `<meta name="googlebot" content="noindex, nofollow" />`)
      .replace(/<meta\s+name="bingbot"\s+content=".*?"\s*\/?>/i, `<meta name="bingbot" content="noindex, nofollow" />`);
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}#article`,
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://angigio.com/#website',
          name: 'Hôm Nay Ăn Gì',
          url: 'https://angigio.com/',
        },
        headline: cleanArtTitle,
        description: effectiveDesc,
        image: [fullImageUrl],
        datePublished: publishedTime,
        dateModified: modifiedTime,
        author: {
          '@type': 'Person',
          name: post.author?.name || 'Bếp Trưởng Hôm Nay Ăn Gì',
          jobTitle: post.author?.role || 'Chuyên gia ẩm thực',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Hôm Nay Ăn Gì',
          url: 'https://angigio.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://angigio.com/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Trang chủ',
            item: 'https://angigio.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog Ẩm Thực',
            item: 'https://angigio.com/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: cleanArtTitle,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  // Strip any stale __INITIAL_CUSTOM_POSTS__ and inject ONLY this single post
  html = html.replace(/\s*<script>window\.__INITIAL_CUSTOM_POSTS__\s*=[\s\S]*?<\/script>/g, '');
  const singlePostScript = JSON.stringify([post]).replace(/</g, '\\u003c');
  html = html.replace(
    '</head>',
    `    <script id="blog-post-jsonld" type="application/ld+json">\n${JSON.stringify(articleSchema, null, 2)}\n    </script>\n    <script>window.__INITIAL_CUSTOM_POSTS__ = ${singlePostScript};</script>\n  </head>`
  );

  // Inject clean semantic article header + body snippet inside #root for crawlers
  const bodyRaw = String(post.htmlContent || post.content || '');
  const snippet = bodyRaw.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 2200);
  const crawlerHeader = `<header id="prerender-content" style="max-width: 56rem; margin: 2rem auto; padding: 0 1rem; font-family: 'Be Vietnam Pro', system-ui, sans-serif; color: #1c1917;"><h1 style="font-size: 1.75rem; font-weight: 800; line-height: 1.3; margin-bottom: 0.75rem; color: #0c0a09;">${escapeXml(post.title || cleanArtTitle)}</h1><p style="color: #57534e; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.25rem;">${safeDesc}</p><article><div>${escapeXml(snippet)}</div></article><div style="margin-top: 1.5rem; font-size: 0.8rem; color: #a8a29e;">Đang tải giao diện bài viết...</div></header>`;

  if (html.includes('<div id="root">')) {
    html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">\n      ${crawlerHeader}\n    </div>`);
  }

  return html;
}

export default async function handler(req: any, res: any) {
  const rawQueryPath = Array.isArray(req?.query?.path) ? req.query.path[0] : req?.query?.path;
  let pathname = rawQueryPath ? String(rawQueryPath) : '';
  if (!pathname) {
    try {
      pathname = new URL(req?.url || '/', 'https://angigio.com').pathname;
    } catch {
      pathname = '/';
    }
  }
  const cleanPath = ('/' + pathname.replace(/^\/+/, '')).replace(/\/+$/, '') || '/';
  const baseHtml = await getBaseHtml(req);

  // Never index or cache /admin
  if (cleanPath === '/admin' || cleanPath.startsWith('/admin/')) {
    const adminHtml = baseHtml
      .replace(/<meta\s+name="robots"\s+content=".*?"\s*\/?>/i, `<meta name="robots" content="noindex, nofollow" />`)
      .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="https://angigio.com/admin" />`);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    return res.status(200).send(adminHtml);
  }

  const slug = cleanPath.replace(/^\//, '').replace(/^blog\//i, '').toLowerCase().trim();
  if (slug) {
    const post = await fetchSinglePostFromFirestore(slug);
    if (post) {
      const seoHtml = injectPostSeo(baseHtml, post);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=86400');
      return res.status(200).send(seoHtml);
    }
  }

  const fallbackUrl = `https://angigio.com${cleanPath}`;
  const cleanFallback = baseHtml
    .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="${escapeXml(fallbackUrl)}" />`)
    .replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, `<meta property="og:url" content="${escapeXml(fallbackUrl)}" />`)
    .replace(/<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:url" content="${escapeXml(fallbackUrl)}" />`);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600');
  return res.status(200).send(cleanFallback);
}
