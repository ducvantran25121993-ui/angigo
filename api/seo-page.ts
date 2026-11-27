import fs from 'node:fs';
import path from 'node:path';

interface FirebaseAppletConfig {
  projectId: string;
  firestoreDatabaseId: string;
  apiKey: string;
}

let cachedConfig: FirebaseAppletConfig | null = null;
let cachedBaseHtml: string | null = null;
let cachedBlogBaseHtml: string | null = null;
let cachedRedirectAliases: Record<string, string> | null = null;

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

async function getBlogBaseHtml(): Promise<string | null> {
  if (cachedBlogBaseHtml) return cachedBlogBaseHtml;
  const candidates = [
    path.join(process.cwd(), 'dist', 'blog-base.html'),
    path.join(process.cwd(), 'dist', 'blog.html'),
    path.resolve('dist', 'blog-base.html'),
  ];
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) {
        cachedBlogBaseHtml = fs.readFileSync(p, 'utf-8');
        return cachedBlogBaseHtml;
      }
    } catch {}
  }
  return null;
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

function getRedirectAliases(): Record<string, string> {
  if (cachedRedirectAliases) return cachedRedirectAliases;
  const candidates = [
    path.join(process.cwd(), 'dist', 'redirect-aliases.json'),
    path.resolve('dist', 'redirect-aliases.json'),
  ];
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) {
        const parsed = JSON.parse(fs.readFileSync(p, 'utf-8'));
        if (parsed && typeof parsed === 'object') {
          cachedRedirectAliases = parsed as Record<string, string>;
          return cachedRedirectAliases;
        }
      }
    } catch {}
  }
  cachedRedirectAliases = {};
  return cachedRedirectAliases;
}

const INTERNAL_LINK_REWRITES: Record<string, string> = {
  '/mon-ngon-tu-thit-ba-chi': '/thit-ba-chi-lam-mon-gi-ngon',
  '/blog/mon-ngon-tu-thit-ba-chi': '/thit-ba-chi-lam-mon-gi-ngon',
  '/mon-ngon-tu-thit-bam': '/thit-bam-lam-mon-gi-ngon',
  '/blog/mon-ngon-tu-thit-bam': '/thit-bam-lam-mon-gi-ngon',
  '/cach-nau-com-bo-xao-can-toi': '/cach-lam-com-bo-xao-can-toi',
};

function normalizeInternalHref(raw: string): string {
  const trimmed = String(raw || '').trim();
  const absMatch = trimmed.match(/^(https?:\/\/angigio\.com)(\/[^?#]*)(.*)$/i);
  if (absMatch) {
    const cleanPath = absMatch[2].replace(/\/+$/, '').toLowerCase();
    const mapped = INTERNAL_LINK_REWRITES[cleanPath];
    if (mapped) return `${absMatch[1]}${mapped}${absMatch[3] || ''}`;
  } else if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
    const qIdx = trimmed.search(/[?#]/);
    const pathPart = (qIdx >= 0 ? trimmed.slice(0, qIdx) : trimmed).replace(/\/+$/, '').toLowerCase();
    const suffix = qIdx >= 0 ? trimmed.slice(qIdx) : '';
    const mapped = INTERNAL_LINK_REWRITES[pathPart];
    if (mapped) return `${mapped}${suffix}`;
  }
  return trimmed;
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
    return allowDataImage ? trimmed : normalizeInternalHref(trimmed);
  }
  if (
    trimmed.startsWith('#') ||
    trimmed.startsWith('./') ||
    trimmed.startsWith('../') ||
    lower.startsWith('https://') ||
    lower.startsWith('http://')
  ) {
    return allowDataImage ? trimmed : normalizeInternalHref(trimmed);
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
    .replace(/<link\s+rel="image_src"\s+href=".*?"\s*\/?>/i, `<link rel="image_src" href="${escapeXml(fullImageUrl)}" />`)
    .replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i, `<meta property="og:title" content="${safeTitle}" />`)
    .replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i, `<meta property="og:description" content="${safeDesc}" />`)
    .replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i, `<meta property="og:image" content="${escapeXml(fullImageUrl)}" />`)
    .replace(/<meta\s+property="og:image:alt"\s+content=".*?"\s*\/?>/i, `<meta property="og:image:alt" content="${safeImageAlt}" />`)
    .replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${safeTitle}" />`)
    .replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${safeDesc}" />`)
    .replace(/<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:url" content="${canonicalUrl}" />`)
    .replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:image" content="${escapeXml(fullImageUrl)}" />`)
    .replace(/<meta\s+name="twitter:image:alt"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:image:alt" content="${safeImageAlt}" />`)
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

  const graphNodes: Record<string, any>[] = [
    {
      '@type': 'BlogPosting',
      '@id': `${canonicalUrl}#article`,
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://angigio.com/#website',
        name: 'Hôm Nay Ăn Gì',
        url: 'https://angigio.com/',
      },
      inLanguage: 'vi-VN',
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
  ];

  if (Array.isArray(post.faqs) && post.faqs.length > 0) {
    graphNodes.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: post.faqs
        .filter((f: any) => f && f.question && f.answer)
        .map((f: any) => ({
          '@type': 'Question',
          name: String(f.question),
          acceptedAnswer: {
            '@type': 'Answer',
            text: String(f.answer),
          },
        })),
    });
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': graphNodes,
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

const EXPLICIT_301_REDIRECTS: Record<string, string> = {
  '/cac-mon-canh-thit-heo-thanh-mat': '/thit-heo-nau-canh-gi-ngon-goi-y-12-mon-canh-de-nau',
  '/thit-heo-nau-canh-gi-ngon': '/thit-heo-nau-canh-gi-ngon-goi-y-12-mon-canh-de-nau',
  '/canh-thit-heo-ngon': '/thit-heo-nau-canh-gi-ngon-goi-y-12-mon-canh-de-nau',
  '/blog/cac-mon-canh-thit-heo-thanh-mat': '/thit-heo-nau-canh-gi-ngon-goi-y-12-mon-canh-de-nau',
  '/blog/thit-heo-nau-canh-gi-ngon': '/thit-heo-nau-canh-gi-ngon-goi-y-12-mon-canh-de-nau',
  '/blog/canh-thit-heo-ngon': '/thit-heo-nau-canh-gi-ngon-goi-y-12-mon-canh-de-nau',
  '/blog/thit-heo-nau-canh-gi-ngon-goi-y-12-mon-canh-de-nau': '/thit-heo-nau-canh-gi-ngon-goi-y-12-mon-canh-de-nau',
  '/mon-ngon-tu-thit-ba-chi': '/thit-ba-chi-lam-mon-gi-ngon',
  '/thit-ba-chi-lam-mon-gi-ngon-10-mon-ngon-tu-thit-ba-chi': '/thit-ba-chi-lam-mon-gi-ngon',
  '/thit-ba-roi-lam-mon-gi-ngon': '/thit-ba-chi-lam-mon-gi-ngon',
  '/mon-ngon-tu-thit-ba-roi': '/thit-ba-chi-lam-mon-gi-ngon',
  '/blog/mon-ngon-tu-thit-ba-chi': '/thit-ba-chi-lam-mon-gi-ngon',
  '/blog/thit-ba-chi-lam-mon-gi-ngon': '/thit-ba-chi-lam-mon-gi-ngon',
  '/mon-ngon-tu-thit-bam': '/thit-bam-lam-mon-gi-ngon',
  '/thit-heo-xay-lam-mon-gi-ngon': '/thit-bam-lam-mon-gi-ngon',
  '/mon-ngon-tu-thit-heo-xay': '/thit-bam-lam-mon-gi-ngon',
  '/blog/mon-ngon-tu-thit-bam': '/thit-bam-lam-mon-gi-ngon',
  '/blog/thit-bam-lam-mon-gi-ngon': '/thit-bam-lam-mon-gi-ngon',
  '/cach-nau-com-bo-xao-can-toi': '/cach-lam-com-bo-xao-can-toi',
  '/cach-nau-com-bo-xao-can-toi-thom-ngon-dam-da-chuan-quan': '/cach-lam-com-bo-xao-can-toi',
  '/cach-lam-com-bo-xao-can-toi-thom-ngon-dam-da-chuan-quan': '/cach-lam-com-bo-xao-can-toi',
  '/com-bo-xao-can-toi': '/cach-lam-com-bo-xao-can-toi',
};

const AI_ADVISOR_FAQS: Array<{ question: string; answer: string }> = [
  {
    question: 'Trợ lý gợi ý món ăn dựa vào những thông tin gì?',
    answer:
      'Trợ lý sẽ lắng nghe thời điểm trong ngày (bữa sáng, trưa hay tối), mức tiền bạn muốn chi, cảm xúc hiện tại của bạn, thời tiết bên ngoài và cả những mong muốn riêng như thích ăn thanh đạm, ăn chay hay hạn chế đồ dầu mỡ.',
  },
  {
    question: 'Món ăn được gợi ý có dễ tìm mua trên các app giao hàng không?',
    answer:
      'Rất dễ tìm! Toàn bộ hơn 160 món ăn trong danh sách đều là những món ăn quen thuộc, phổ biến khắp mọi ngõ phố Việt Nam. Kèm theo mỗi món luôn có sẵn nút mở nhanh ShopeeFood, GrabFood hoặc BeFood để bạn đặt ngay.',
  },
  {
    question: 'Dùng trợ lý gợi ý món ăn có mất phí hay bắt buộc đăng ký không?',
    answer:
      'Hoàn toàn miễn phí và không cần đăng ký tài khoản! Bạn có thể thoải mái hỏi và nhận gợi ý món ăn bao nhiêu lần tùy thích mỗi ngày mà không bị làm phiền bởi quảng cáo.',
  },
  {
    question: 'Nếu mình bị dị ứng đồ ăn hay ăn chay thì trợ lý có giúp được không?',
    answer:
      "Chắc chắn có! Bạn chỉ cần gõ yêu cầu như 'mình không ăn được hải sản', 'hôm nay mình ăn chay' hay 'không ăn cay', trợ lý sẽ tự động chọn lọc những món an toàn và thơm ngon nhất cho bạn.",
  },
  {
    question: 'Trợ lý có biết mình ở thành phố nào để gợi ý đúng món địa phương không?',
    answer:
      'Có! Bạn có thể chọn nhanh tỉnh/thành phố trên thanh menu hoặc cho phép định vị. Trợ lý sẽ ưu tiên những món ăn mang nét đặc sắc và các quán ngon đúng điệu quanh nơi bạn sinh sống.',
  },
  {
    question: 'Nếu muốn tự nấu cơm tại nhà thì có xem được nguyên liệu không?',
    answer:
      'Có sẵn luôn! Mỗi món ăn đều có ghi rõ nguyên liệu chính, mức calo ước tính và mẹo nhỏ khi ăn giúp bạn dễ dàng ghé chợ mua đồ và vào bếp nấu bữa cơm ấm cúng cho gia đình.',
  },
];

function injectAiAdvisorSeo(baseHtml: string): string {
  const canonicalUrl = 'https://angigio.com/ai-goi-y-mon-an';
  const title = 'Trợ Lý AI Gợi Ý Món Ăn - Chọn Món Ngon Theo Gu & Đặt Ship Gần Bạn | Ăn Gì Giờ';
  const desc =
    'Gợi ý món ăn thông minh và gần gũi: Chọn món ngon mỗi ngày theo tâm trạng, thời tiết, ngân sách và sở thích ăn uống. Tự động kết nối quán ngon gần bạn.';
  const keywords =
    'trợ lý ai món ăn, ai gợi ý món ăn, hôm nay ăn gì ai, gợi ý món ăn thông minh, tìm món theo thời tiết, tìm món theo tâm trạng, đặt món giao tận nơi';
  const imageUrl = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=80';
  const imageAlt = 'Trợ Lý AI Gợi Ý Món Ăn Chuẩn Vị - Hôm Nay Ăn Gì';

  const aiSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description: desc,
        inLanguage: 'vi-VN',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://angigio.com/#website',
          name: 'Hôm Nay Ăn Gì',
          url: 'https://angigio.com/',
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Trợ Lý Gợi Ý Món Ăn - Hôm Nay Ăn Gì',
        operatingSystem: 'Web, iOS, Android',
        applicationCategory: 'FoodAndDrinkApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'VND',
        },
        description: 'Người bạn đồng hành giải đáp câu hỏi Hôm nay ăn gì mỗi ngày theo tâm trạng, thời tiết và ngân sách.',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Trang Chủ', item: 'https://angigio.com/' },
          { '@type': 'ListItem', position: 2, name: 'Trợ Lý Gợi Ý Món Ăn', item: canonicalUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: AI_ADVISOR_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  const faqHtml = AI_ADVISOR_FAQS.map(
    (faq, idx) =>
      `<article style="padding: 1rem 1.125rem; background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 0.75rem;">
        <h3 style="font-size: 1rem; font-weight: 700; color: #1c1917; margin: 0 0 0.4rem 0;">${idx + 1}. ${escapeHtml(faq.question)}</h3>
        <p style="font-size: 0.925rem; color: #57534e; margin: 0; line-height: 1.65;">${escapeHtml(faq.answer)}</p>
      </article>`
  ).join('\n');

  const bodyHtml = `<main id="prerender-content" style="max-width: 58rem; margin: 2rem auto; padding: 0 1rem; font-family: 'Be Vietnam Pro', system-ui, sans-serif; color: #1c1917; line-height: 1.7;">
        <nav aria-label="Breadcrumb" style="font-size: 0.85rem; color: #78716c; margin-bottom: 1rem;">
          <a href="/" style="color: #ea580c; text-decoration: none;">Trang chủ</a> &rsaquo;
          <span>Trợ Lý AI Gợi Ý Món Ăn</span>
        </nav>
        <header style="margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e7e5e4;">
          <h1 style="font-size: 1.9rem; font-weight: 800; line-height: 1.3; margin: 0 0 0.9rem 0; color: #0c0a09;">Trợ Lý AI Gợi Ý Món Ăn - Chọn Món Ngon Theo Gu &amp; Đặt Ship Gần Bạn</h1>
          <p style="color: #44403c; font-size: 1rem; line-height: 1.7; margin: 0 0 0.85rem 0;">
            Mỗi ngày cứ đến bữa trưa hay bữa tối, câu hỏi quen thuộc nhất mà ai trong chúng ta cũng từng băn khoăn là: <strong>&ldquo;Hôm nay ăn gì bây giờ?&rdquo;</strong>. Thay vì lướt app giao đồ ăn hàng chục phút mà vẫn chưa chốt được, Trợ Lý AI Gợi Ý Món Ăn của <strong>Hôm Nay Ăn Gì</strong> sẽ lắng nghe đúng tâm trạng, thời tiết, ngân sách và nguyên liệu bạn thích để đề xuất ngay những món Việt chuẩn vị nhất.
          </p>
          <p style="color: #57534e; font-size: 0.95rem; line-height: 1.65; margin: 0 0 1.25rem 0;">
            Hỗ trợ gợi ý nhanh từ kho hơn 160+ món ăn 3 miền Bắc – Trung – Nam, từ cơm nhà bình dân 35.000đ, bún phở nóng hổi ngày mưa, thực đơn Eat Clean ít calo đến lẩu nướng tụ tập bạn bè, kèm liên kết mở nhanh ShopeeFood, GrabFood, BeFood hoặc xem công thức tự nấu tại nhà.
          </p>
        </header>
        <section style="margin-bottom: 2rem;">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #0c0a09; margin: 0 0 0.75rem 0;">5 Tiêu Chí Giúp Trợ Lý AI Hiểu Đúng Khẩu Vị Của Bạn</h2>
          <ol style="padding-left: 1.25rem; margin: 0; color: #44403c; display: grid; gap: 0.65rem;">
            <li><strong>Tâm trạng &amp; năng lượng hôm nay:</strong> Mệt mỏi cần tô phở bò nóng hổi hồi sức, hay vui vẻ cuối tuần tụ tập cùng bún đậu, lẩu riêu cua bắp bò.</li>
            <li><strong>Tiết trời nắng nóng hay mưa se lạnh:</strong> Trưa hè oi ả ưu tiên canh chua thanh mát, gỏi cuốn; chiều mưa rả rích chọn món kho đậm đà hoặc lẩu ấm bụng.</li>
            <li><strong>Ngân sách chi tiêu thực tế:</strong> Gợi ý chính xác suất cơm bình dân 35.000đ – 55.000đ, combo văn phòng hoặc bữa tiệc gia đình 150.000đ – 300.000đ.</li>
            <li><strong>Chế độ ăn uống &amp; dị ứng riêng:</strong> Dễ dàng lọc món Eat Clean, ăn chay mùng một rằm, ít dầu mỡ, không cay hoặc tránh hải sản.</li>
            <li><strong>Địa điểm quán ngon gần khu vực:</strong> Ưu tiên món phổ biến dễ tìm tại Hà Nội, TP.HCM, Đà Nẵng, Hải Phòng, Cần Thơ để đặt giao nhanh còn nóng hổi.</li>
          </ol>
        </section>
        <section style="margin-bottom: 2rem;">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #0c0a09; margin: 0 0 0.75rem 0;">6 Kịch Bản &amp; Câu Hỏi Mẫu Bạn Có Thể Nhờ Trợ Lý Tư Vấn</h2>
          <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 0.75rem;">
            <li style="padding: 0.9rem 1rem; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem;"><strong>Bữa trưa văn phòng ngày mưa (50k–60k):</strong> <em>&ldquo;Trưa nay trời mưa se lạnh, ví còn khoảng 50k–60k, ăn gì cho ấm bụng mà tỉnh táo làm việc chiều?&rdquo;</em> &rarr; Gợi ý Cơm niêu bò sốt tiêu đen hoặc Bún bò Huế.</li>
            <li style="padding: 0.9rem 1rem; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem;"><strong>Bữa tối nhẹ bụng, ít dầu mỡ:</strong> <em>&ldquo;Tối nay muốn ăn thanh đạm, nhiều rau xanh, ít calo để dễ tiêu và ngủ ngon.&rdquo;</em> &rarr; Gợi ý Gỏi cuốn tôm thịt, Salad ức gà áp chảo hoặc Canh chua cá lóc.</li>
            <li style="padding: 0.9rem 1rem; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem;"><strong>Tụ tập hội bạn 4 người cuối tuần:</strong> <em>&ldquo;Tối thứ 7 nhóm 4 người muốn ăn gì lai rai vui vẻ tầm 120k mỗi người.&rdquo;</em> &rarr; Gợi ý Lẩu riêu cua bắp bò, Lẩu gà lá é hoặc Nướng ngói.</li>
            <li style="padding: 0.9rem 1rem; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem;"><strong>Mở tủ lạnh còn thịt heo chưa biết nấu gì:</strong> <em>&ldquo;Trong tủ đang có thịt băm và sườn non, gợi ý giúp mình món canh thanh ngọt dễ nấu.&rdquo;</em> &rarr; Xem ngay bộ <a href="/thit-heo-nau-canh-gi-ngon-goi-y-12-mon-canh-de-nau" style="color: #ea580c;">12 món canh thịt heo dễ nấu</a>.</li>
            <li style="padding: 0.9rem 1rem; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem;"><strong>Chống ngán ngày nắng nóng:</strong> <em>&ldquo;Mấy hôm nay ngán đồ chiên kho quá, có món gì chua ngọt đổi vị dễ ăn không?&rdquo;</em> &rarr; Khám phá gợi ý <a href="/an-gi-cho-do-ngan-goi-y-mon-ngon-doi-vi-de-an-cho-ca-nha" style="color: #ea580c;">ăn gì cho đỡ ngán đổi vị cả nhà</a>.</li>
            <li style="padding: 0.9rem 1rem; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem;"><strong>Ngày ăn chay / Eat Clean lành mạnh:</strong> <em>&ldquo;Hôm nay mình ăn chay, không ăn hành tỏi, gợi ý 3 món đủ đạm thực vật.&rdquo;</em> &rarr; Đậu hũ sốt cà chua nấm rơm, Bún chả giò chay, Canh chua nấm đậu hũ.</li>
          </ul>
        </section>
        <section style="margin-bottom: 2rem;">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #0c0a09; margin: 0 0 0.75rem 0;">Hướng Dẫn 3 Bước Dùng Trợ Lý AI Chọn Món Nhanh</h2>
          <ol style="padding-left: 1.25rem; margin: 0; color: #44403c; display: grid; gap: 0.5rem;">
            <li><strong>Bước 1 – Chia sẻ nhu cầu bữa ăn:</strong> Chọn nhanh thẻ gợi ý sẵn (bữa trưa, bữa tối, tiết kiệm, trời mưa, ăn nhẹ) hoặc nhập tự nhiên mong muốn của bạn.</li>
            <li><strong>Bước 2 – Nhận phân tích &amp; 3–5 món chuẩn gu:</strong> Hệ thống gợi ý ngay món phù hợp kèm mô tả hương vị, mức calo tham khảo và lý do hợp bối cảnh.</li>
            <li><strong>Bước 3 – Đặt ship hoặc xem công thức tự nấu:</strong> Nhấn mở quán gần bạn trên ShopeeFood, GrabFood, BeFood hoặc bấm xem công thức nấu tại nhà chi tiết từng bước.</li>
          </ol>
        </section>
        <section style="margin-bottom: 2rem;">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #0c0a09; margin: 0 0 0.85rem 0;">Câu Hỏi Thường Gặp Về Trợ Lý AI Gợi Ý Món Ăn (FAQ)</h2>
          <section style="display: grid; gap: 0.75rem;">
            ${faqHtml}
          </section>
        </section>
        <footer style="padding-top: 1.25rem; border-top: 1px solid #e7e5e4; font-size: 0.92rem; color: #57534e;">
          <p style="margin: 0 0 0.5rem 0;"><strong>Khám phá thêm trên Hôm Nay Ăn Gì:</strong></p>
          <nav aria-label="Liên kết nội bộ" style="display: flex; flex-wrap: wrap; gap: 0.75rem 1.25rem;">
            <a href="/" style="color: #ea580c;">Tarot Ẩm Thực 12 Cung Hoàng Đạo</a>
            <a href="/vong-quay" style="color: #ea580c;">Vòng Quay Ăn Gì Trong 3 Giây</a>
            <a href="/lich-an-theo-tuan" style="color: #ea580c;">Lịch Ăn Theo Tuần 7 Ngày</a>
            <a href="/mon-ngon" style="color: #ea580c;">Thực Đơn 160+ Món Ngon</a>
            <a href="/cach-nau-mon-ngon" style="color: #ea580c;">Công Thức Nấu Món Ngon</a>
            <a href="/quan-ngon" style="color: #ea580c;">Top Quán Ngon Gần Bạn</a>
            <a href="/blog" style="color: #ea580c;">Blog Ẩm Thực &amp; Mẹo Nhà Bếp</a>
          </nav>
        </footer>
      </main>`;

  let html = replaceHomepageGraphWithSiteIdentity(baseHtml)
    .replace(/<title>.*?<\/title>/i, `<title>${escapeXml(title)}</title>`)
    .replace(/<meta\s+name="title"\s+content=".*?"\s*\/?>/i, `<meta name="title" content="${escapeXml(title)}" />`)
    .replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/i, `<meta name="description" content="${escapeXml(desc)}" />`)
    .replace(/<meta\s+name="keywords"\s+content=".*?"\s*\/?>/i, `<meta name="keywords" content="${escapeXml(keywords)}" />`)
    .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<link\s+rel="image_src"\s+href=".*?"\s*\/?>/i, `<link rel="image_src" href="${imageUrl}" />`)
    .replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i, `<meta property="og:title" content="${escapeXml(title)}" />`)
    .replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i, `<meta property="og:description" content="${escapeXml(desc)}" />`)
    .replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i, `<meta property="og:image" content="${imageUrl}" />`)
    .replace(/<meta\s+property="og:image:alt"\s+content=".*?"\s*\/?>/i, `<meta property="og:image:alt" content="${escapeXml(imageAlt)}" />`)
    .replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${escapeXml(title)}" />`)
    .replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${escapeXml(desc)}" />`)
    .replace(/<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:url" content="${canonicalUrl}" />`)
    .replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:image" content="${imageUrl}" />`)
    .replace(/<meta\s+name="twitter:image:alt"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:image:alt" content="${escapeXml(imageAlt)}" />`);

  html = html.replace(
    '</head>',
    `    <script id="ai-advisor-jsonld" type="application/ld+json">\n${JSON.stringify(aiSchema, null, 2)}\n    </script>\n  </head>`
  );

  if (html.includes('<div id="root">')) {
    html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">\n      ${bodyHtml}\n    </div>`);
  }

  return html;
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

function renderBlogCardLi(post: Record<string, any>): string {
  const cleanSlug = String(post.slug || post.id || '')
    .toLowerCase()
    .trim()
    .replace(/^\//, '')
    .replace(/\/$/, '');
  const title = String(post.title || cleanSlug).trim();
  const excerpt = String(post.excerpt || '').trim();
  const category = String(post.category || 'Cẩm Nang Ẩm Thực').trim();
  const publishDate = String(post.publishDate || '').trim();
  const metaText = [category, publishDate].filter(Boolean).join(' • ');

  return `<li data-blog-slug="${escapeHtml(cleanSlug)}" style="padding: 1rem 1.125rem; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.85rem;">
            <article>
              ${metaText ? `<p style="font-size: 0.78rem; color: #78716c; margin: 0 0 0.3rem 0;">${escapeHtml(metaText)}</p>` : ''}
              <h3 style="font-size: 1.08rem; font-weight: 700; margin: 0 0 0.4rem 0; line-height: 1.4;">
                <a href="/${escapeHtml(cleanSlug)}" style="color: #0c0a09; text-decoration: none;">${escapeHtml(title)}</a>
              </h3>
              ${excerpt ? `<p style="font-size: 0.9rem; color: #57534e; margin: 0 0 0.5rem 0; line-height: 1.6;">${escapeHtml(excerpt)}</p>` : ''}
              <p style="font-size: 0.85rem; margin: 0;"><a href="/${escapeHtml(cleanSlug)}" style="color: #ea580c; font-weight: 600; text-decoration: none;">Đọc chi tiết &rarr;</a></p>
            </article>
          </li>`;
}

async function renderDynamicBlogPageHtml(baseHtml: string): Promise<string> {
  const [blogBaseHtml, manifest] = await Promise.all([
    getBlogBaseHtml(),
    fetchManifestFromFirestore(),
  ]);

  if (blogBaseHtml) {
    if (!manifest.ok) {
      return blogBaseHtml;
    }

    const excludedSlugs = new Set<string>(manifest.deletedSlugs);
    const activeManifestPosts: Array<Record<string, any>> = [];
    const activeManifestBySlug = new Map<string, Record<string, any>>();

    for (const p of manifest.posts) {
      const s = String(p.slug || p.id || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      if (!s) continue;
      if (p.noIndex) {
        excludedSlugs.add(s);
        continue;
      }
      if (excludedSlugs.has(s) || activeManifestBySlug.has(s)) continue;
      activeManifestBySlug.set(s, { ...p, slug: s });
      activeManifestPosts.push({ ...p, slug: s });
    }

    const listMatch = blogBaseHtml.match(/<ul\s+id="blog-ssr-list"[^>]*>([\s\S]*?)<\/ul>/i);
    if (listMatch) {
      const existingLis: Array<{ slug: string; html: string }> = [];
      const liRegex = /<li\s+data-blog-slug="([^"]+)"[\s\S]*?<\/li>/gi;
      let m: RegExpExecArray | null;
      while ((m = liRegex.exec(listMatch[1])) !== null) {
        const liSlug = String(m[1] || '').toLowerCase().trim();
        if (!liSlug || excludedSlugs.has(liSlug) || activeManifestBySlug.has(liSlug)) {
          continue;
        }
        existingLis.push({ slug: liSlug, html: m[0] });
      }

      const freshLis = activeManifestPosts.map(renderBlogCardLi);
      const totalCount = freshLis.length + existingLis.length;
      const mergedListBody = [...freshLis, ...existingLis.map((item) => item.html)].join('\n');

      let updated = blogBaseHtml.replace(
        /<ul\s+id="blog-ssr-list"([^>]*)>[\s\S]*?<\/ul>/i,
        `<ul id="blog-ssr-list"$1>\n            ${mergedListBody}\n          </ul>`
      );
      updated = updated.replace(
        /Tất Cả Bài Viết &amp; Cẩm Nang Nấu Ăn \(\d+ bài viết\)/,
        `Tất Cả Bài Viết &amp; Cẩm Nang Nấu Ăn (${totalCount} bài viết)`
      );
      return updated;
    }

    return blogBaseHtml;
  }

  // Emergency fallback if dist/blog-base.html wasn't bundled
  const canonicalUrl = 'https://angigio.com/blog';
  const title = 'Blog Ẩm Thực - Cẩm Nang Món Ngon & Mẹo Bếp | Ăn Gì Giờ';
  const desc =
    'Khám phá Blog Ẩm Thực chia sẻ cẩm nang nấu ăn chuẩn vị, mẹo vặt nhà bếp, gợi ý thực đơn gia đình, kiến thức dinh dưỡng và văn hóa ẩm thực Việt Nam.';
  const excluded = new Set<string>(manifest.deletedSlugs);
  const cards = manifest.posts
    .filter((p) => {
      const s = String(p.slug || p.id || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      return Boolean(s && !p.noIndex && !excluded.has(s));
    })
    .map(renderBlogCardLi)
    .join('\n');

  const fallbackBody = `<main id="prerender-content" style="max-width: 60rem; margin: 2rem auto; padding: 0 1rem; font-family: 'Be Vietnam Pro', system-ui, sans-serif; color: #1c1917; line-height: 1.7;">
        <header style="margin-bottom: 1.75rem; padding-bottom: 1.25rem; border-bottom: 1px solid #e7e5e4;">
          <h1 style="font-size: 1.9rem; font-weight: 800; line-height: 1.3; margin: 0 0 0.75rem 0;">Blog Ẩm Thực - Cẩm Nang Món Ngon &amp; Bí Quyết Nấu Nướng</h1>
          <p style="color: #57534e; margin: 0;">${escapeHtml(desc)}</p>
        </header>
        <ul id="blog-ssr-list" style="list-style: none; padding: 0; margin: 0; display: grid; gap: 1rem;">
          ${cards}
        </ul>
      </main>`;

  let html = replaceHomepageGraphWithSiteIdentity(baseHtml)
    .replace(/<title>.*?<\/title>/i, `<title>${escapeXml(title)}</title>`)
    .replace(/<meta\s+name="title"\s+content=".*?"\s*\/?>/i, `<meta name="title" content="${escapeXml(title)}" />`)
    .replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/i, `<meta name="description" content="${escapeXml(desc)}" />`)
    .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:url" content="${canonicalUrl}" />`);

  if (html.includes('<div id="root">')) {
    html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">\n      ${fallbackBody}\n    </div>`);
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
  const normalizedRoute = cleanPath.toLowerCase();

  // Explicit 301 consolidation redirects (single-hop even for /blog/* paths)
  const explicitTarget = EXPLICIT_301_REDIRECTS[normalizedRoute];
  if (explicitTarget) {
    res.setHeader('Location', explicitTarget);
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    return res.status(301).end();
  }

  const redirectAliases = getRedirectAliases();

  // 301 Redirect /blog/:slug -> canonical /:slug in a single hop
  if (normalizedRoute.startsWith('/blog/') && normalizedRoute.length > 6) {
    const cleanSlug = normalizedRoute.slice(6).replace(/^\/+/, '').replace(/\/+$/, '');
    if (cleanSlug) {
      const candidate = `/${cleanSlug}`;
      const target = EXPLICIT_301_REDIRECTS[candidate] || redirectAliases[candidate] || candidate;
      res.setHeader('Location', target);
      res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
      return res.status(301).end();
    }
  }

  // 301 Redirect legacy /cach-nau-mon-ngon/:slug -> canonical /:slug in a single hop
  if (normalizedRoute.startsWith('/cach-nau-mon-ngon/') && normalizedRoute.length > 19) {
    const cleanSlug = normalizedRoute.slice(19).replace(/^\/+/, '').replace(/\/+$/, '');
    if (cleanSlug) {
      const candidate = `/${cleanSlug}`;
      const target = EXPLICIT_301_REDIRECTS[candidate] || redirectAliases[candidate] || candidate;
      res.setHeader('Location', target);
      res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
      return res.status(301).end();
    }
  }

  // 301 Redirect all build-time alias routes (replaces <meta http-equiv="refresh">)
  const aliasTarget = redirectAliases[normalizedRoute];
  if (aliasTarget && aliasTarget !== normalizedRoute) {
    res.setHeader('Location', aliasTarget);
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    return res.status(301).end();
  }

  const baseHtml = await getBaseHtml(req);

  if (normalizedRoute === '/blog') {
    const blogHtml = await renderDynamicBlogPageHtml(baseHtml);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600');
    return res.status(200).send(blogHtml);
  }

  if (normalizedRoute === '/ai-goi-y-mon-an') {
    const aiHtml = injectAiAdvisorSeo(baseHtml);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).send(aiHtml);
  }

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

    // Fallback to bundled custom_blog_posts.json when Firestore is temporarily rate-limited/unavailable
    const localCandidates = [
      path.join(process.cwd(), 'dist', 'custom_blog_posts.json'),
      path.join(process.cwd(), 'public', 'custom_blog_posts.json'),
    ];
    for (const lp of localCandidates) {
      try {
        if (fs.existsSync(lp)) {
          const arr = JSON.parse(fs.readFileSync(lp, 'utf-8'));
          if (Array.isArray(arr)) {
            const matched = arr.find(
              (p: any) => p && String(p.slug || p.id || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '') === slug
            );
            if (matched) {
              const seoHtml = injectPostSeo(baseHtml, matched);
              res.setHeader('Content-Type', 'text/html; charset=utf-8');
              res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=86400');
              return res.status(200).send(seoHtml);
            }
          }
          break;
        }
      } catch {}
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
