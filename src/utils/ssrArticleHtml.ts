export function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function sanitizeSafeUrl(rawUrl: string, allowDataImage = false): string {
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
  if (
    trimmed.startsWith('/') &&
    !trimmed.startsWith('//')
  ) {
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

  // Extract Markdown images ![alt](url)
  work = work.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (_m, alt, url) => {
    const safeSrc = sanitizeSafeUrl(url, true);
    if (!safeSrc) return '';
    const safeAlt = escapeHtml(String(alt || '').trim() || fallbackAlt);
    const idx = placeholders.length;
    placeholders.push(`<img src="${escapeHtml(safeSrc)}" alt="${safeAlt}" loading="lazy" />`);
    return `\u0000PH_${idx}\u0000`;
  });

  // Extract Markdown links [label](url)
  work = work.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (_m, label, url) => {
    const safeHref = sanitizeSafeUrl(url, false);
    const formattedLabel = escapeHtml(String(label || ''))
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');
    const idx = placeholders.length;
    placeholders.push(`<a href="${escapeHtml(safeHref)}">${formattedLabel}</a>`);
    return `\u0000PH_${idx}\u0000`;
  });

  // Escape remaining raw HTML characters safely
  let escaped = escapeHtml(work);

  // Basic inline formatting
  escaped = escaped
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,!?:;]|$)/g, '$1<em>$2</em>')
    .replace(/`([^`\n]+)`/g, '<code>$1</code>');

  // Restore placeholders
  return escaped.replace(/\u0000PH_(\d+)\u0000/g, (_m, idx) => placeholders[Number(idx)] || '');
}

const ALLOWED_TAGS = new Set([
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

function extractAttr(attrs: string, name: string): string | null {
  const re = new RegExp(`(?:^|\\s)${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i');
  const m = attrs.match(re);
  if (!m) return null;
  return m[1] ?? m[2] ?? m[3] ?? '';
}

export function sanitizeHtmlFragment(rawHtml: string, fallbackAlt: string): string {
  let work = String(rawHtml || '');

  // Strip dangerous block tags and self-closing tags completely
  work = work
    .replace(/<(script|style|iframe|object|embed|form|noscript|svg|math)[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<(script|style|iframe|object|embed|form|input|textarea|button|meta|link|base)[^>]*\/?>/gi, '');

  // Convert mixed markdown idioms inside rich HTML (aligned with BlogPage.tsx)
  work = work
    .replace(/^>\s+(.*)$/gm, '<blockquote>$1</blockquote>')
    .replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
    .replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1" />')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');

  // Demote any <h1> in body to <h2> so page preserves a single semantic <h1>
  work = work
    .replace(/<h1(\b[^>]*)>/gi, '<h2$1>')
    .replace(/<\/h1>/gi, '</h2>');

  // Sanitize tags and attributes
  work = work.replace(/<\/?([a-zA-Z0-9-]+)([^>]*)>/g, (full, rawTag, attrs) => {
    const tag = String(rawTag).toLowerCase();
    const isClosing = full.startsWith('</');
    if (!ALLOWED_TAGS.has(tag)) {
      return '';
    }
    if (isClosing) {
      if (tag === 'br' || tag === 'hr' || tag === 'img') return '';
      return `</${tag}>`;
    }
    if (tag === 'br') return '<br />';
    if (tag === 'hr') return '<hr />';
    if (tag === 'img') {
      const src = sanitizeSafeUrl(extractAttr(attrs, 'src') || '', true);
      if (!src) return '';
      const altVal = (extractAttr(attrs, 'alt') || '').trim() || fallbackAlt;
      const titleVal = (extractAttr(attrs, 'title') || '').trim();
      const titleAttr = titleVal ? ` title="${escapeHtml(titleVal)}"` : '';
      return `<img src="${escapeHtml(src)}" alt="${escapeHtml(altVal)}"${titleAttr} loading="lazy" />`;
    }
    if (tag === 'a') {
      const href = sanitizeSafeUrl(extractAttr(attrs, 'href') || '', false);
      const titleVal = (extractAttr(attrs, 'title') || '').trim();
      const targetVal = (extractAttr(attrs, 'target') || '').trim();
      const relVal = (extractAttr(attrs, 'rel') || '').trim();
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

export function markdownToSemanticHtml(markdown: string, fallbackAlt: string): string {
  const normalized = String(markdown || '').replace(/\u00a0/g, ' ').replace(/\r\n/g, '\n');
  const lines = normalized.split('\n');
  const chunks: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Callout box :::tip ... :::
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

    // Markdown table
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

    // Horizontal rule
    if (trimmed === '---' || trimmed === '***') {
      chunks.push('<hr />');
      continue;
    }

    // Headings (preserve single <h1> for article headline)
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

    // Blockquote
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

    // Unordered list
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

    // Ordered list
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

    // Standalone image ![alt](src)
    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)$/);
    if (imgMatch) {
      const safeSrc = sanitizeSafeUrl(imgMatch[2], true);
      if (safeSrc) {
        const alt = imgMatch[1].trim() || fallbackAlt;
        chunks.push(
          `<figure><img src="${escapeHtml(safeSrc)}" alt="${escapeHtml(alt)}" loading="lazy" />${
            imgMatch[1].trim() ? `<figcaption>${escapeHtml(imgMatch[1].trim())}</figcaption>` : ''
          }</figure>`
        );
      }
      continue;
    }

    // Inline raw HTML block line
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

    // Paragraph (combine consecutive plain lines)
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

export function renderArticleBodySemanticHtml(post: {
  title?: string;
  content?: string;
  htmlContent?: string;
}): string {
  const fallbackAlt = String(post.title || 'Món ngon Hôm Nay Ăn Gì').trim();
  const hasRichHtml =
    Boolean(post.htmlContent && String(post.htmlContent).trim()) ||
    Boolean(post.content && /<[a-z][\s\S]*>/i.test(post.content) && !post.content.trim().startsWith('#'));

  if (hasRichHtml) {
    const raw = String(post.htmlContent || post.content || '');
    return sanitizeHtmlFragment(raw, fallbackAlt);
  }
  return markdownToSemanticHtml(String(post.content || ''), fallbackAlt);
}

export function buildFullArticleSsrHtml(post: {
  slug?: string;
  title?: string;
  excerpt?: string;
  content?: string;
  htmlContent?: string;
  coverImage?: string;
  category?: string;
  publishDate?: string;
  readTime?: string;
  tags?: string[];
  author?: { name?: string };
}): string {
  const cleanTitle = String(post.title || 'Blog Ẩm Thực Hôm Nay Ăn Gì').trim();
  const desc = String(post.excerpt || '').trim();
  const bodyHtml = renderArticleBodySemanticHtml(post);
  const rawImg = String(post.coverImage || '').trim();
  const showCoverImg = rawImg && !rawImg.startsWith('data:');
  const fullImgUrl = rawImg.startsWith('http')
    ? rawImg
    : rawImg
      ? `https://angigio.com${rawImg.startsWith('/') ? '' : '/'}${rawImg}`
      : '';

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
            showCoverImg && fullImgUrl
              ? `<figure style="margin: 0 0 1.5rem 0;"><img src="${escapeHtml(fullImgUrl)}" alt="${escapeHtml(cleanTitle)}" style="width: 100%; max-height: 480px; object-fit: cover; border-radius: 1rem;" /></figure>`
              : ''
          }
        </header>
        <section class="article-body">
          ${bodyHtml}
        </section>
        <footer style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e7e5e4; font-size: 0.9rem; color: #57534e;">
          ${tags.length > 0 ? `<p>Chủ đề: ${tags.map((t) => `#${escapeHtml(t)}`).join(', ')}</p>` : ''}
          <p><a href="/blog" style="color: #ea580c;">Xem thêm bài viết Blog Ẩm Thực</a> | <a href="/" style="color: #ea580c;">Gợi ý Hôm Nay Ăn Gì</a></p>
        </footer>
      </article>`;
}
