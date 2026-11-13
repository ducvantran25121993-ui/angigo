export type SeoCheckStatus = 'pass' | 'warn' | 'fail';

export interface SeoCheckItem {
  id: string;
  label: string;
  status: SeoCheckStatus;
  detail: string;
  points: number;
  maxPoints: number;
}

export interface SeoAnalysisResult {
  score: number;
  rating: 'good' | 'ok' | 'needs-improvement';
  ratingLabel: string;
  checks: SeoCheckItem[];
  wordCount: number;
  keywordCount: number;
  keywordDensity: number;
  headingCount: number;
  imageCount: number;
  internalLinkCount: number;
  effectiveTitle: string;
  effectiveDescription: string;
}

export interface SeoAnalyzerInput {
  title: string;
  seoTitle?: string;
  slug: string;
  excerpt: string;
  seoDescription?: string;
  focusKeyword?: string;
  htmlContent: string;
  coverImage?: string;
  noIndex?: boolean;
}

function normalizeVietnamese(str: string): string {
  return String(str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function toSlugForm(str: string): string {
  return normalizeVietnamese(str).replace(/\s+/g, '-');
}

function stripTags(html: string): string {
  return String(html || '')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function countOccurrences(haystack: string, needle: string): number {
  if (!haystack || !needle) return 0;
  let count = 0;
  let idx = 0;
  while ((idx = haystack.indexOf(needle, idx)) !== -1) {
    count += 1;
    idx += Math.max(needle.length, 1);
  }
  return count;
}

export function analyzePostSeo(input: SeoAnalyzerInput): SeoAnalysisResult {
  const rawTitle = (input.title || '').trim();
  const effectiveTitle = (input.seoTitle || '').trim() || (rawTitle ? `${rawTitle} | Hôm Nay Ăn Gì` : '');
  const effectiveDescription = (input.seoDescription || '').trim() || (input.excerpt || '').trim();
  const keywordRaw = (input.focusKeyword || '').trim();
  const normKeyword = normalizeVietnamese(keywordRaw);
  const slugKeyword = toSlugForm(keywordRaw);
  const cleanSlug = (input.slug || '').toLowerCase().trim();
  const html = input.htmlContent || '';

  const plainText = stripTags(html);
  const words = plainText ? plainText.split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;

  const normBody = normalizeVietnamese(plainText);
  const normFirstPara = normalizeVietnamese(words.slice(0, 140).join(' '));
  const normTitle = normalizeVietnamese(effectiveTitle);
  const normDesc = normalizeVietnamese(effectiveDescription);

  const headingMatches = Array.from(html.matchAll(/<h([2-3])[^>]*>([\s\S]*?)<\/h\1>/gi));
  const headingCount = headingMatches.length;
  const headingHasKeyword =
    Boolean(normKeyword) &&
    headingMatches.some((m) => normalizeVietnamese(stripTags(m[2])).includes(normKeyword));

  const imgMatches = Array.from(html.matchAll(/<img\b[^>]*>/gi));
  const imageCount = imgMatches.length + (input.coverImage ? 1 : 0);
  const imgsWithoutAlt = imgMatches.filter((m) => !/\balt\s*=\s*["'][^"']+["']/i.test(m[0])).length;

  const linkMatches = Array.from(html.matchAll(/<a\b[^>]*href\s*=\s*["']([^"']+)["'][^>]*>/gi));
  const internalLinkCount = linkMatches.filter((m) => {
    const href = (m[1] || '').trim();
    return href.startsWith('/') || href.includes('angigio.com');
  }).length;

  const keywordCount = normKeyword ? countOccurrences(normBody, normKeyword) : 0;
  const keywordWords = normKeyword ? normKeyword.split(/\s+/).filter(Boolean).length : 0;
  const keywordDensity =
    wordCount > 0 && keywordCount > 0
      ? Number((((keywordCount * Math.max(keywordWords, 1)) / wordCount) * 100).toFixed(2))
      : 0;

  const checks: SeoCheckItem[] = [];

  // 1. Focus keyword configured (10 pts)
  if (!normKeyword) {
    checks.push({
      id: 'focus-keyword',
      label: 'Từ khóa chính (Focus Keyword)',
      status: 'warn',
      detail: 'Chưa nhập từ khóa chính để chấm điểm chuẩn Yoast/RankMath.',
      points: 3,
      maxPoints: 10,
    });
  } else {
    checks.push({
      id: 'focus-keyword',
      label: 'Từ khóa chính (Focus Keyword)',
      status: 'pass',
      detail: `Đang tối ưu cho từ khóa "${keywordRaw}".`,
      points: 10,
      maxPoints: 10,
    });
  }

  // 2. SEO Title length & keyword (15 pts)
  const titleLen = effectiveTitle.length;
  const titleHasKw = normKeyword ? normTitle.includes(normKeyword) : false;
  if (titleLen >= 35 && titleLen <= 65 && (!normKeyword || titleHasKw)) {
    checks.push({
      id: 'seo-title',
      label: 'Tiêu đề SEO (SEO Title)',
      status: 'pass',
      detail: `Độ dài chuẩn (${titleLen}/65 ký tự)${normKeyword ? ' và có chứa từ khóa chính' : ''}.`,
      points: 15,
      maxPoints: 15,
    });
  } else if (titleLen >= 20 && titleLen <= 75) {
    checks.push({
      id: 'seo-title',
      label: 'Tiêu đề SEO (SEO Title)',
      status: 'warn',
      detail:
        normKeyword && !titleHasKw
          ? `Độ dài ${titleLen} ký tự nhưng chưa chứa từ khóa "${keywordRaw}".`
          : `Độ dài ${titleLen} ký tự (tốt nhất từ 40–65 ký tự để không bị cắt trên Google).`,
      points: 9,
      maxPoints: 15,
    });
  } else {
    checks.push({
      id: 'seo-title',
      label: 'Tiêu đề SEO (SEO Title)',
      status: 'fail',
      detail: titleLen === 0 ? 'Chưa có tiêu đề bài viết.' : `Độ dài ${titleLen} ký tự (nên nằm trong khoảng 40–65 ký tự).`,
      points: 3,
      maxPoints: 15,
    });
  }

  // 3. Meta Description length & keyword (15 pts)
  const descLen = effectiveDescription.length;
  const descHasKw = normKeyword ? normDesc.includes(normKeyword) : false;
  if (descLen >= 115 && descLen <= 165 && (!normKeyword || descHasKw)) {
    checks.push({
      id: 'meta-desc',
      label: 'Mô tả Meta Description',
      status: 'pass',
      detail: `Độ dài tối ưu (${descLen}/160 ký tự)${normKeyword ? ' và có chứa từ khóa chính' : ''}.`,
      points: 15,
      maxPoints: 15,
    });
  } else if (descLen >= 70 && descLen <= 200) {
    checks.push({
      id: 'meta-desc',
      label: 'Mô tả Meta Description',
      status: 'warn',
      detail:
        normKeyword && !descHasKw
          ? `Độ dài ${descLen} ký tự nhưng nên chèn thêm từ khóa "${keywordRaw}".`
          : `Độ dài ${descLen} ký tự (chuẩn nhất từ 120–160 ký tự).`,
      points: 9,
      maxPoints: 15,
    });
  } else {
    checks.push({
      id: 'meta-desc',
      label: 'Mô tả Meta Description',
      status: 'fail',
      detail: descLen === 0 ? 'Chưa có Meta Description / tóm tắt bài viết.' : `Độ dài ${descLen} ký tự (cần khoảng 120–160 ký tự).`,
      points: 2,
      maxPoints: 15,
    });
  }

  // 4. URL Slug check (10 pts)
  const slugOkLen = cleanSlug.length > 0 && cleanSlug.length <= 75;
  const slugHasKw = slugKeyword ? cleanSlug.includes(slugKeyword) : false;
  if (slugOkLen && (!slugKeyword || slugHasKw)) {
    checks.push({
      id: 'url-slug',
      label: 'Đường dẫn URL (Slug)',
      status: 'pass',
      detail: `URL ngắn gọn (${cleanSlug.length} ký tự)${slugKeyword ? ' và chứa từ khóa chính' : ''}.`,
      points: 10,
      maxPoints: 10,
    });
  } else if (cleanSlug.length > 0) {
    checks.push({
      id: 'url-slug',
      label: 'Đường dẫn URL (Slug)',
      status: 'warn',
      detail:
        slugKeyword && !slugHasKw
          ? `URL /${cleanSlug} chưa chứa từ khóa "${slugKeyword}".`
          : `URL hơi dài (${cleanSlug.length} ký tự, nên dưới 75 ký tự).`,
      points: 5,
      maxPoints: 10,
    });
  } else {
    checks.push({
      id: 'url-slug',
      label: 'Đường dẫn URL (Slug)',
      status: 'fail',
      detail: 'Chưa có đường dẫn URL.',
      points: 0,
      maxPoints: 10,
    });
  }

  // 5. Word count (15 pts)
  if (wordCount >= 600) {
    checks.push({
      id: 'word-count',
      label: 'Độ dài nội dung',
      status: 'pass',
      detail: `${wordCount} từ — bài viết chuyên sâu, rất tốt cho SEO.`,
      points: 15,
      maxPoints: 15,
    });
  } else if (wordCount >= 300) {
    checks.push({
      id: 'word-count',
      label: 'Độ dài nội dung',
      status: 'warn',
      detail: `${wordCount} từ — đạt mức tối thiểu, nên bổ sung lên ≥ 600 từ để cạnh tranh top Google.`,
      points: 9,
      maxPoints: 15,
    });
  } else {
    checks.push({
      id: 'word-count',
      label: 'Độ dài nội dung',
      status: 'fail',
      detail: `${wordCount} từ — nội dung còn quá mỏng (nên từ 600 từ trở lên).`,
      points: 3,
      maxPoints: 15,
    });
  }

  // 6. Keyword in intro & density (10 pts)
  if (!normKeyword) {
    checks.push({
      id: 'keyword-body',
      label: 'Từ khóa trong mở bài & mật độ',
      status: 'warn',
      detail: 'Nhập Từ khóa chính để kiểm tra mật độ và đoạn mở đầu.',
      points: 4,
      maxPoints: 10,
    });
  } else {
    const inIntro = normFirstPara.includes(normKeyword);
    if (inIntro && keywordDensity >= 0.4 && keywordDensity <= 2.8) {
      checks.push({
        id: 'keyword-body',
        label: 'Từ khóa trong mở bài & mật độ',
        status: 'pass',
        detail: `Có ở đoạn mở đầu, xuất hiện ${keywordCount} lần (mật độ ${keywordDensity}%).`,
        points: 10,
        maxPoints: 10,
      });
    } else if (keywordDensity > 3.5) {
      checks.push({
        id: 'keyword-body',
        label: 'Từ khóa trong mở bài & mật độ',
        status: 'warn',
        detail: `Mật độ ${keywordDensity}% hơi cao (${keywordCount} lần), tránh nhồi nhét từ khóa.`,
        points: 5,
        maxPoints: 10,
      });
    } else {
      checks.push({
        id: 'keyword-body',
        label: 'Từ khóa trong mở bài & mật độ',
        status: keywordCount > 0 ? 'warn' : 'fail',
        detail: !inIntro
          ? `Nên đưa "${keywordRaw}" vào đoạn mở bài (150 từ đầu) — hiện mật độ ${keywordDensity}%.`
          : `Từ khóa xuất hiện ít (${keywordCount} lần, ${keywordDensity}%), nên đạt 0.5%–2.5%.`,
        points: keywordCount > 0 ? 5 : 1,
        maxPoints: 10,
      });
    }
  }

  // 7. Heading structure H2/H3 (10 pts)
  if (headingCount >= 2 && (!normKeyword || headingHasKeyword)) {
    checks.push({
      id: 'headings',
      label: 'Cấu trúc tiêu đề phụ (H2, H3)',
      status: 'pass',
      detail: `Có ${headingCount} thẻ H2/H3 chia mục rõ ràng${normKeyword ? ' và có chứa từ khóa' : ''}.`,
      points: 10,
      maxPoints: 10,
    });
  } else if (headingCount >= 1) {
    checks.push({
      id: 'headings',
      label: 'Cấu trúc tiêu đề phụ (H2, H3)',
      status: 'warn',
      detail:
        normKeyword && !headingHasKeyword
          ? `Đã có ${headingCount} thẻ H2/H3 nhưng nên chèn từ khóa chính vào ít nhất 1 thẻ H2.`
          : 'Nên có từ 2 thẻ H2/H3 trở lên để bài dễ đọc và Google dễ hiểu cấu trúc.',
      points: 6,
      maxPoints: 10,
    });
  } else {
    checks.push({
      id: 'headings',
      label: 'Cấu trúc tiêu đề phụ (H2, H3)',
      status: 'fail',
      detail: 'Chưa có thẻ tiêu đề phụ H2 hoặc H3 trong nội dung.',
      points: 0,
      maxPoints: 10,
    });
  }

  // 8. Images & Alt text (8 pts)
  if (imageCount >= 2 && imgsWithoutAlt === 0) {
    checks.push({
      id: 'images',
      label: 'Hình ảnh & Thẻ Alt SEO',
      status: 'pass',
      detail: `${imageCount} hình ảnh (gồm ảnh bìa) và đầy đủ mô tả Alt.`,
      points: 8,
      maxPoints: 8,
    });
  } else if (imageCount >= 1) {
    checks.push({
      id: 'images',
      label: 'Hình ảnh & Thẻ Alt SEO',
      status: 'warn',
      detail:
        imgsWithoutAlt > 0
          ? `Có ${imgsWithoutAlt} ảnh trong bài chưa điền thuộc tính alt mô tả.`
          : 'Nên chèn thêm ít nhất 1 ảnh minh họa trực tiếp vào nội dung bài viết.',
      points: 5,
      maxPoints: 8,
    });
  } else {
    checks.push({
      id: 'images',
      label: 'Hình ảnh & Thẻ Alt SEO',
      status: 'fail',
      detail: 'Bài viết chưa có hình ảnh minh họa.',
      points: 0,
      maxPoints: 8,
    });
  }

  // 9. Internal links (7 pts)
  if (internalLinkCount >= 2) {
    checks.push({
      id: 'internal-links',
      label: 'Liên kết nội bộ (Internal Links)',
      status: 'pass',
      detail: `Có ${internalLinkCount} liên kết nội bộ tới bài viết/công thức khác.`,
      points: 7,
      maxPoints: 7,
    });
  } else if (internalLinkCount === 1) {
    checks.push({
      id: 'internal-links',
      label: 'Liên kết nội bộ (Internal Links)',
      status: 'warn',
      detail: 'Mới có 1 liên kết nội bộ; nên thêm 2–3 link sang món ăn hoặc bài liên quan.',
      points: 4,
      maxPoints: 7,
    });
  } else {
    checks.push({
      id: 'internal-links',
      label: 'Liên kết nội bộ (Internal Links)',
      status: 'fail',
      detail: 'Chưa có liên kết nội bộ nào trỏ tới công thức hoặc bài viết khác.',
      points: 0,
      maxPoints: 7,
    });
  }

  const totalPoints = checks.reduce((sum, c) => sum + c.points, 0);
  const totalMax = checks.reduce((sum, c) => sum + c.maxPoints, 0);
  const rawScore = totalMax > 0 ? Math.round((totalPoints / totalMax) * 100) : 0;
  const score = input.noIndex ? Math.min(rawScore, 40) : rawScore;

  const rating: SeoAnalysisResult['rating'] =
    score >= 75 ? 'good' : score >= 50 ? 'ok' : 'needs-improvement';
  const ratingLabel =
    input.noIndex
      ? 'Đang bật NoIndex'
      : rating === 'good'
        ? 'Chuẩn SEO Tốt'
        : rating === 'ok'
          ? 'SEO Khá (Cần tối ưu thêm)'
          : 'SEO Chưa Tốt';

  return {
    score,
    rating,
    ratingLabel,
    checks,
    wordCount,
    keywordCount,
    keywordDensity,
    headingCount,
    imageCount,
    internalLinkCount,
    effectiveTitle,
    effectiveDescription,
  };
}
