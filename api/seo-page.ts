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

function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeSafeUrl(rawUrl: string, allowDataImage = false): string {
  const trimmed = String(rawUrl || '')
    .replace(/&amp;/gi, '&')
    .trim();
  if (!trimmed) return '#';
  const lower = trimmed.toLowerCase();
  if (lower.startsWith('javascript:') || lower.startsWith('vbscript:')) {
    return allowDataImage ? '' : '#';
  }
  if (lower.startsWith('data:')) {
    if (allowDataImage && /^data:image\/(png|jpe?g|webp|gif);base64,/i.test(trimmed)) {
      return trimmed;
    }
    return allowDataImage ? '' : '#';
  }
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
    return trimmed;
  }
  if (
    trimmed.startsWith('#') ||
    trimmed.startsWith('./') ||
    trimmed.startsWith('../') ||
    lower.startsWith('https://') ||
    lower.startsWith('http://')
  ) {
    return trimmed;
  }
  return allowDataImage ? '' : '#';
}

function renderInlineMarkdown(text: string, fallbackAlt: string): string {
  const placeholders: string[] = [];
  let work = String(text || '');

  work = work.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (_m, alt, url) => {
    const safeSrc = sanitizeSafeUrl(url, true);
    if (!safeSrc) return '';
    const safeAlt = escapeHtml(String(alt || '').trim() || fallbackAlt);
    const idx = placeholders.length;
    placeholders.push(`<img src="${escapeHtml(safeSrc)}" alt="${safeAlt}" loading="lazy" decoding="async" />`);
    return `\u0000PH_${idx}\u0000`;
  });

  work = work.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (_m, label, url) => {
    const safeHref = sanitizeSafeUrl(url, false);
    const formattedLabel = escapeHtml(String(label || ''))
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');
    const idx = placeholders.length;
    placeholders.push(`<a href="${escapeHtml(safeHref)}">${formattedLabel}</a>`);
    return `\u0000PH_${idx}\u0000`;
  });

  let escaped = escapeHtml(work)
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,!?:;]|$)/g, '$1<em>$2</em>')
    .replace(/`([^`\n]+)`/g, '<code>$1</code>');

  return escaped.replace(/\u0000PH_(\d+)\u0000/g, (_m, idx) => placeholders[Number(idx)] || '');
}

const ALLOWED_HTML_TAGS = new Set([
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'br',
  'hr',
  'strong',
  'b',
  'em',
  'i',
  'u',
  's',
  'ul',
  'ol',
  'li',
  'blockquote',
  'table',
  'thead',
  'tbody',
  'tr',
  'th',
  'td',
  'figure',
  'figcaption',
  'section',
  'article',
  'aside',
  'div',
  'span',
  'code',
  'pre',
  'a',
  'img',
]);

function extractHtmlAttr(attrs: string, name: string): string | null {
  const re = new RegExp(`(?:^|\\s)${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i');
  const m = attrs.match(re);
  if (!m) return null;
  return m[1] ?? m[2] ?? m[3] ?? '';
}

function sanitizeHtmlFragment(rawHtml: string, fallbackAlt: string): string {
  let work = String(rawHtml || '')
    .replace(/<(script|style|iframe|object|embed|form|noscript|svg|math)[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<(script|style|iframe|object|embed|form|input|textarea|button|meta|link|base)[^>]*\/?>/gi, '')
    .replace(/^>\s+(.*)$/gm, '<blockquote>$1</blockquote>')
    .replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
    .replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1" />')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/<h1(\b[^>]*)>/gi, '<h2$1>')
    .replace(/<\/h1>/gi, '</h2>');

  work = work.replace(/<\/?([a-zA-Z0-9-]+)([^>]*)>/g, (full, rawTag, attrs) => {
    const tag = String(rawTag).toLowerCase();
    const isClosing = full.startsWith('</');
    if (!ALLOWED_HTML_TAGS.has(tag)) return '';
    if (isClosing) {
      if (tag === 'br' || tag === 'hr' || tag === 'img') return '';
      return `</${tag}>`;
    }
    if (tag === 'br') return '<br />';
    if (tag === 'hr') return '<hr />';
    if (tag === 'img') {
      const src = sanitizeSafeUrl(extractHtmlAttr(attrs, 'src') || '', true);
      if (!src) return '';
      const altVal = (extractHtmlAttr(attrs, 'alt') || '').trim() || fallbackAlt;
      const titleVal = (extractHtmlAttr(attrs, 'title') || '').trim();
      const titleAttr = titleVal ? ` title="${escapeHtml(titleVal)}"` : '';
      return `<img src="${escapeHtml(src)}" alt="${escapeHtml(altVal)}"${titleAttr} loading="lazy" decoding="async" />`;
    }
    if (tag === 'a') {
      const href = sanitizeSafeUrl(extractHtmlAttr(attrs, 'href') || '', false);
      const titleVal = (extractHtmlAttr(attrs, 'title') || '').trim();
      const targetVal = (extractHtmlAttr(attrs, 'target') || '').trim();
      const relVal = (extractHtmlAttr(attrs, 'rel') || '').trim();
      let out = `<a href="${escapeHtml(href)}"`;
      if (titleVal) out += ` title="${escapeHtml(titleVal)}"`;
      if (targetVal === '_blank') {
        out += ` target="_blank" rel="${escapeHtml(relVal || 'noopener noreferrer')}"`;
      } else if (relVal) {
        out += ` rel="${escapeHtml(relVal)}"`;
      }
      return `${out}>`;
    }
    return `<${tag}>`;
  });

  return work.trim();
}

function markdownToSemanticHtml(markdown: string, fallbackAlt: string): string {
  const normalized = String(markdown || '').replace(/\u00a0/g, ' ').replace(/\r\n/g, '\n');
  const lines = normalized.split('\n');
  const chunks: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith(':::tip') || trimmed.startsWith(':::callout')) {
      const tipLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith(':::')) {
        if (lines[i].trim()) tipLines.push(lines[i].trim());
        i++;
      }
      chunks.push(
        `<aside><p><strong>💡 Mẹo Nấu Ngon Từ Bếp Trưởng:</strong></p>${tipLines
          .map((tl) => `<p>${renderInlineMarkdown(tl, fallbackAlt)}</p>`)
          .join('')}</aside>`
      );
      continue;
    }

    if (trimmed.startsWith('|') && trimmed.includes('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().includes('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      i--;
      const parseCells = (row: string) =>
        row
          .replace(/^\|/, '')
          .replace(/\|$/, '')
          .split('|')
          .map((c) => c.trim());
      const firstCells = parseCells(tableLines[0]);
      const hasSep = tableLines.length > 1 && /^\|?(\s*[-:]+\s*\|?)+$/.test(tableLines[1]);
      const headRow = hasSep ? firstCells : [];
      const bodyRows = (hasSep ? tableLines.slice(2) : tableLines).map(parseCells);
      const thead =
        headRow.length > 0
          ? `<thead><tr>${headRow.map((h) => `<th>${renderInlineMarkdown(h, fallbackAlt)}</th>`).join('')}</tr></thead>`
          : '';
      const tbody = `<tbody>${bodyRows
        .map((r) => `<tr>${r.map((c) => `<td>${renderInlineMarkdown(c, fallbackAlt)}</td>`).join('')}</tr>`)
        .join('')}</tbody>`;
      chunks.push(`<table>${thead}${tbody}</table>`);
      continue;
    }

    if (trimmed === '---' || trimmed === '***') {
      chunks.push('<hr />');
      continue;
    }

    if (trimmed.startsWith('#### ')) {
      chunks.push(`<h4>${renderInlineMarkdown(trimmed.slice(5), fallbackAlt)}</h4>`);
      continue;
    }
    if (trimmed.startsWith('### ')) {
      chunks.push(`<h3>${renderInlineMarkdown(trimmed.slice(4), fallbackAlt)}</h3>`);
      continue;
    }
    if (trimmed.startsWith('## ')) {
      chunks.push(`<h2>${renderInlineMarkdown(trimmed.slice(3), fallbackAlt)}</h2>`);
      continue;
    }
    if (trimmed.startsWith('# ')) {
      chunks.push(`<h2>${renderInlineMarkdown(trimmed.slice(2), fallbackAlt)}</h2>`);
      continue;
    }

    if (trimmed.startsWith('> ')) {
      const bqLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('> ')) {
        bqLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      i--;
      chunks.push(
        `<blockquote>${bqLines.map((l) => `<p>${renderInlineMarkdown(l, fallbackAlt)}</p>`).join('')}</blockquote>`
      );
      continue;
    }

    if (/^[-*+]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*+]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*+]\s+/, ''));
        i++;
      }
      i--;
      chunks.push(`<ul>${items.map((it) => `<li>${renderInlineMarkdown(it, fallbackAlt)}</li>`).join('')}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      i--;
      chunks.push(`<ol>${items.map((it) => `<li>${renderInlineMarkdown(it, fallbackAlt)}</li>`).join('')}</ol>`);
      continue;
    }

    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)$/);
    if (imgMatch) {
      const safeSrc = sanitizeSafeUrl(imgMatch[2], true);
      if (safeSrc) {
        const alt = imgMatch[1].trim() || fallbackAlt;
        chunks.push(
          `<figure><img src="${escapeHtml(safeSrc)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" />${
            imgMatch[1].trim() ? `<figcaption>${escapeHtml(imgMatch[1].trim())}</figcaption>` : ''
          }</figure>`
        );
      }
      continue;
    }

    if (/^<(?:div|table|blockquote|ul|ol|h[1-6]|p|figure|section|aside)\b/i.test(trimmed)) {
      const htmlLines = [line];
      while (i + 1 < lines.length && lines[i + 1].trim() !== '' && !lines[i + 1].trim().startsWith('#')) {
        i++;
        htmlLines.push(lines[i]);
      }
      const sanitized = sanitizeHtmlFragment(htmlLines.join('\n'), fallbackAlt);
      if (sanitized) chunks.push(sanitized);
      continue;
    }

    const pLines: string[] = [trimmed];
    while (
      i + 1 < lines.length &&
      lines[i + 1].trim() !== '' &&
      !/^(?:#{1,4}\s|>\s|[-*+]\s|\d+\.\s|---|\*\*\*|\||:::|<)/.test(lines[i + 1].trim())
    ) {
      i++;
      pLines.push(lines[i].trim());
    }
    chunks.push(`<p>${renderInlineMarkdown(pLines.join(' '), fallbackAlt)}</p>`);
  }

  return chunks.join('\n');
}

function buildFullArticleSsrHtml(post: Record<string, any>, fullImageUrl: string): string {
  const cleanTitle = String(post.title || 'Blog Ẩm Thực Hôm Nay Ăn Gì').trim();
  const desc = String(post.excerpt || '').trim();
  const hasRichHtml =
    Boolean(post.htmlContent && String(post.htmlContent).trim()) ||
    Boolean(post.content && /<[a-z][\s\S]*>/i.test(post.content) && !post.content.trim().startsWith('#'));

  const bodyHtml = hasRichHtml
    ? sanitizeHtmlFragment(String(post.htmlContent || post.content || ''), cleanTitle)
    : markdownToSemanticHtml(String(post.content || ''), cleanTitle);

  const rawImg = String(post.coverImage || '').trim();
  const showCoverImg = Boolean(rawImg && !rawImg.startsWith('data:'));
  const tags = Array.isArray(post.tags) ? post.tags.filter(Boolean) : [];
  const metaBits = [
    post.category ? `<span>${escapeHtml(post.category)}</span>` : '',
    post.author?.name ? `<span>Tác giả: ${escapeHtml(post.author.name)}</span>` : '',
    post.publishDate ? `<span>${escapeHtml(post.publishDate)}</span>` : '',
    post.readTime ? `<span>${escapeHtml(post.readTime)}</span>` : '',
  ]
    .filter(Boolean)
    .join(' • ');

  return `<article id="prerender-content" style="max-width: 56rem; margin: 2rem auto; padding: 0 1rem; font-family: 'Be Vietnam Pro', system-ui, sans-serif; color: #1c1917; line-height: 1.7;">
        <nav aria-label="Breadcrumb" style="font-size: 0.85rem; color: #78716c; margin-bottom: 1rem;">
          <a href="/" style="color: #ea580c; text-decoration: none;">Trang chủ</a> &rsaquo;
          <a href="/blog" style="color: #ea580c; text-decoration: none;">Blog Ẩm Thực</a> &rsaquo;
          <span>${escapeHtml(cleanTitle)}</span>
        </nav>
        <header style="margin-bottom: 1.5rem;">
          ${metaBits ? `<div style="font-size: 0.85rem; color: #78716c; margin-bottom: 0.5rem;">${metaBits}</div>` : ''}
          <h1 style="font-size: 1.85rem; font-weight: 800; line-height: 1.3; margin: 0 0 0.75rem 0; color: #0c0a09;">${escapeHtml(cleanTitle)}</h1>
          ${desc ? `<p style="color: #57534e; font-size: 1rem; line-height: 1.65; margin: 0 0 1.25rem 0;">${escapeHtml(desc)}</p>` : ''}
          ${
            showCoverImg && fullImageUrl
              ? `<figure style="margin: 0 0 1.5rem 0;"><img src="${escapeHtml(fullImageUrl)}" alt="${escapeHtml(cleanTitle)}" fetchpriority="high" decoding="async" style="width: 100%; max-height: 480px; object-fit: cover; border-radius: 1rem;" /></figure>`
              : ''
          }
        </header>
        <section class="article-body">
          ${bodyHtml}
        </section>
        <footer style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e7e5e4; font-size: 0.9rem; color: #57534e;">
          ${tags.length > 0 ? `<p>Chủ đề: ${tags.map((t: string) => `#${escapeHtml(t)}`).join(', ')}</p>` : ''}
          <p><a href="/blog" style="color: #ea580c;">Xem thêm bài viết Blog Ẩm Thực</a> | <a href="/" style="color: #ea580c;">Gợi ý Hôm Nay Ăn Gì</a></p>
        </footer>
      </article>`;
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

type FirestorePostLookupResult =
  | { status: 'found'; post: Record<string, any> }
  | { status: 'not_found' }
  | { status: 'unavailable' };

const KNOWN_APP_ROUTES = new Set([
  '/',
  '/vong-quay',
  '/lich-an-theo-tuan',
  '/ai-goi-y-mon-an',
  '/mon-ngon',
  '/do-uong-an-vat',
  '/am-thuc-vung-mien',
  '/thuc-don-moi-ngay',
  '/cach-nau-mon-ngon',
  '/gioi-thieu',
  '/lien-he',
  '/chinh-sach-bao-mat',
  '/dieu-khoan-su-dung',
  '/blog',
  '/quan-ngon',
]);

function replaceHomepageGraphWithSiteIdentity(html: string): string {
  const siteIdentityGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://angigio.com/#organization',
        name: 'Hôm Nay Ăn Gì',
        url: 'https://angigio.com/',
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://angigio.com/#logo',
          url: 'https://angigio.com/logo.png',
          width: 1024,
          height: 1024,
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://angigio.com/#website',
        url: 'https://angigio.com/',
        name: 'Hôm Nay Ăn Gì',
        publisher: {
          '@id': 'https://angigio.com/#organization',
        },
      },
    ],
  };

  return html.replace(
    /<script(?:\s+id="home-seo-jsonld")?\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script id="site-identity-jsonld" type="application/ld+json">\n${JSON.stringify(siteIdentityGraph, null, 2)}\n    </script>`
  );
}

async function fetchSinglePostFromFirestore(slug: string): Promise<FirestorePostLookupResult> {
  const cfg = getFirebaseConfig();
  if (!cfg || !slug) return { status: 'unavailable' };

  const base = `https://firestore.googleapis.com/v1/projects/${cfg.projectId}/databases/${cfg.firestoreDatabaseId}/documents`;
  const docId = slug.replace(/[^a-zA-Z0-9_\-]/g, '-').slice(0, 120);
  const candidates = docId !== slug ? [docId, slug] : [docId];

  let sawNotFound = false;
  for (const id of candidates) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);
    try {
      const url = `${base}/posts/${encodeURIComponent(id)}?key=${encodeURIComponent(cfg.apiKey)}`;
      const res = await fetch(url, { signal: controller.signal });
      if (res.status === 429 || res.status === 403) {
        return { status: 'unavailable' };
      }
      if (res.status === 404) {
        sawNotFound = true;
        continue;
      }
      if (res.ok) {
        const json = await res.json();
        if (json?.fields) {
          const nameParts = String(json.name || '').split('/');
          const resolvedId = nameParts[nameParts.length - 1] || id;
          return { status: 'found', post: mapFirestorePost(resolvedId, json.fields) };
        }
      }
    } catch {
      return { status: 'unavailable' };
    } finally {
      clearTimeout(timer);
    }
  }
  return sawNotFound ? { status: 'not_found' } : { status: 'unavailable' };
}

function injectPostSeo(baseHtml: string, post: Record<string, any>): string {
  const canonicalPath = `/${post.slug}`;
  const canonicalUrl = `https://angigio.com${canonicalPath}`;
  const effectiveTitle = (post.seoTitle && post.seoTitle.trim()) || `${post.title} | Blog Ẩm Thực Hôm Nay Ăn Gì`;
  const effectiveDesc = (post.seoDescription && post.seoDescription.trim()) || post.excerpt || '';
  const tagsList: string[] = Array.isArray(post.tags) ? [...post.tags] : [];
  if (post.focusKeyword && !tagsList.some((t) => t.toLowerCase() === String(post.focusKeyword).toLowerCase())) {
    tagsList.unshift(String(post.focusKeyword));
  }
  const effectiveKeywords = tagsList.join(', ');
  const rawImage = String(post.coverImage || '/images/default-dish.jpg');
  const fullImageUrl = rawImage.startsWith('http')
    ? rawImage
    : rawImage.startsWith('data:')
      ? 'https://angigio.com/images/default-dish.jpg'
      : `https://angigio.com${rawImage.startsWith('/') ? '' : '/'}${rawImage}`;

  const safeTitle = escapeXml(effectiveTitle);
  const safeDesc = escapeXml(effectiveDesc);
  const safeKeywords = escapeXml(effectiveKeywords);
  const safeImageAlt = escapeXml(post.title || effectiveTitle);

  const publishedTime = post.updatedAt || '2026-09-28T08:00:00+07:00';
  const modifiedTime = post.updatedAt || '2026-09-30T00:00:00+07:00';
  const cleanArtTitle = String(post.title || effectiveTitle).replace(/\s*\|\s*(?:Hôm Nay Ăn Gì|Ăn Gì Giờ|Blog.*)$/i, '').trim();

  const plainBodyWords = String(post.htmlContent || post.content || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  let html = replaceHomepageGraphWithSiteIdentity(baseHtml)
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
      `<meta property="og:type" content="article" />\n    <meta property="article:published_time" content="${escapeXml(publishedTime)}" />\n    <meta property="article:modified_time" content="${escapeXml(modifiedTime)}" />\n    <meta property="article:author" content="${escapeXml(post.author?.name || 'Hôm Nay Ăn Gì')}" />\n    <meta property="article:section" content="${escapeXml(post.category || 'Bí quyết ẩm thực')}" />${tagsList
        .slice(0, 6)
        .map((t) => `\n    <meta property="article:tag" content="${escapeXml(t)}" />`)
        .join('')}`
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
        wordCount: plainBodyWords > 0 ? plainBodyWords : undefined,
        keywords: effectiveKeywords || undefined,
        articleSection: post.category || 'Bí quyết ẩm thực',
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

  html = html.replace(/\s*<script>window\.__INITIAL_CUSTOM_POSTS__\s*=[\s\S]*?<\/script>/g, '');
  const singlePostScript = JSON.stringify([post]).replace(/</g, '\\u003c');
  html = html.replace(
    '</head>',
    `    <script id="blog-post-jsonld" type="application/ld+json">\n${JSON.stringify(articleSchema, null, 2)}\n    </script>\n    <script>window.__INITIAL_CUSTOM_POSTS__ = ${singlePostScript};</script>\n  </head>`
  );

  // Full WordPress-grade semantic article HTML (<h1>, <h2>, <h3>, <p>, <ul>, <ol>, <blockquote>, <table>, <img>, <a>)
  const fullSemanticArticleHtml = buildFullArticleSsrHtml(post, fullImageUrl);
  if (html.includes('<div id="root">')) {
    html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">\n      ${fullSemanticArticleHtml}\n    </div>`);
  }

  return html;
}

function buildNotFoundHtml(baseHtml: string): string {
  const title = 'Không tìm thấy trang (404) | Hôm Nay Ăn Gì';
  const desc = 'Nội dung bạn tìm kiếm không tồn tại hoặc đã bị gỡ bỏ. Khám phá thêm hàng trăm món ngon và bí quyết nấu ăn tại Hôm Nay Ăn Gì.';
  let html = replaceHomepageGraphWithSiteIdentity(baseHtml)
    .replace(/<title>.*?<\/title>/i, `<title>${escapeXml(title)}</title>`)
    .replace(/<meta\s+name="title"\s+content=".*?"\s*\/?>/i, `<meta name="title" content="${escapeXml(title)}" />`)
    .replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/i, `<meta name="description" content="${escapeXml(desc)}" />`)
    .replace(/<meta\s+name="robots"\s+content=".*?"\s*\/?>/i, `<meta name="robots" content="noindex, nofollow" />`)
    .replace(/<meta\s+name="googlebot"\s+content=".*?"\s*\/?>/i, `<meta name="googlebot" content="noindex, nofollow" />`)
    .replace(/<meta\s+name="bingbot"\s+content=".*?"\s*\/?>/i, `<meta name="bingbot" content="noindex, nofollow" />`)
    .replace(/\s*<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, '');

  const notFoundBody = `<main id="prerender-content" style="max-width: 44rem; margin: 4rem auto; padding: 0 1.25rem; font-family: 'Be Vietnam Pro', system-ui, sans-serif; text-align: center; color: #1c1917;">
        <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 0.75rem;">404 — Không tìm thấy nội dung</h1>
        <p style="color: #57534e; line-height: 1.6; margin-bottom: 1.5rem;">${escapeHtml(desc)}</p>
        <p><a href="/" style="color: #ea580c; font-weight: 600;">Về trang chủ Hôm Nay Ăn Gì</a> • <a href="/blog" style="color: #ea580c; font-weight: 600;">Xem Blog Ẩm Thực</a></p>
      </main>`;

  if (html.includes('<div id="root">')) {
    html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">\n      ${notFoundBody}\n    </div>`);
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

  // 301 Redirect /blog/:slug -> /:slug to eliminate duplicate URLs
  if (cleanPath.toLowerCase().startsWith('/blog/') && cleanPath.length > 6) {
    const cleanSlug = cleanPath.slice(6).replace(/^\/+/, '').replace(/\/+$/, '').toLowerCase();
    if (cleanSlug) {
      res.setHeader('Location', `/${cleanSlug}`);
      res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
      return res.status(301).end();
    }
  }

  const baseHtml = await getBaseHtml(req);

  if (cleanPath === '/admin' || cleanPath.startsWith('/admin/')) {
    const adminHtml = replaceHomepageGraphWithSiteIdentity(baseHtml)
      .replace(/<meta\s+name="robots"\s+content=".*?"\s*\/?>/i, `<meta name="robots" content="noindex, nofollow" />`)
      .replace(/<meta\s+name="googlebot"\s+content=".*?"\s*\/?>/i, `<meta name="googlebot" content="noindex, nofollow" />`)
      .replace(/<meta\s+name="bingbot"\s+content=".*?"\s*\/?>/i, `<meta name="bingbot" content="noindex, nofollow" />`)
      .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="https://angigio.com/admin" />`);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    return res.status(200).send(adminHtml);
  }

  const normalizedRoute = cleanPath.toLowerCase();
  const slug = normalizedRoute.replace(/^\//, '').trim();

  if (slug && !KNOWN_APP_ROUTES.has(normalizedRoute)) {
    const lookup = await fetchSinglePostFromFirestore(slug);
    if (lookup.status === 'found') {
      const canonicalSlug = String(lookup.post.slug || '').toLowerCase().trim();
      if (canonicalSlug && canonicalSlug !== slug) {
        res.setHeader('Location', `/${canonicalSlug}`);
        res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=86400');
        return res.status(301).end();
      }
      const seoHtml = injectPostSeo(baseHtml, lookup.post);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=86400');
      return res.status(200).send(seoHtml);
    }

    if (lookup.status === 'not_found') {
      const notFoundHtml = buildNotFoundHtml(baseHtml);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
      return res.status(404).send(notFoundHtml);
    }
  }

  const fallbackUrl = `https://angigio.com${cleanPath === '/' ? '/' : cleanPath}`;
  let cleanFallback = cleanPath === '/' ? baseHtml : replaceHomepageGraphWithSiteIdentity(baseHtml);
  cleanFallback = cleanFallback
    .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="${escapeXml(fallbackUrl)}" />`)
    .replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, `<meta property="og:url" content="${escapeXml(fallbackUrl)}" />`)
    .replace(/<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:url" content="${escapeXml(fallbackUrl)}" />`);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600');
  return res.status(200).send(cleanFallback);
}
