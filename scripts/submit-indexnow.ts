import fs from 'node:fs';
import path from 'node:path';

const ALLOWED_HOST = 'angigio.com';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const DEFAULT_KEY_FILENAME = 'ce0d7a94729144969b522dacce411a38.txt';

function resolveKey(): string {
  const envKey = String(process.env.INDEXNOW_KEY || '').trim();
  if (/^[a-zA-Z0-9-]{8,128}$/.test(envKey)) return envKey;

  const keyPath = path.resolve(process.cwd(), 'public', DEFAULT_KEY_FILENAME);
  if (!fs.existsSync(keyPath)) {
    throw new Error(`Không tìm thấy file key IndexNow tại public/${DEFAULT_KEY_FILENAME}`);
  }
  const key = fs.readFileSync(keyPath, 'utf-8').trim();
  if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) {
    throw new Error('Nội dung file key IndexNow không hợp lệ.');
  }
  return key;
}

function normalizeUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const candidate = trimmed.startsWith('/') ? `https://${ALLOWED_HOST}${trimmed}` : trimmed;
  try {
    const u = new URL(candidate);
    if (u.protocol !== 'https:' || u.hostname.toLowerCase() !== ALLOWED_HOST) return null;
    u.hash = '';
    return u.toString();
  } catch {
    return null;
  }
}

function loadSitemapUrls(): string[] {
  const sitemapPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    throw new Error('Không tìm thấy public/sitemap.xml. Hãy chạy npm run build trước.');
  }
  const xml = fs.readFileSync(sitemapPath, 'utf-8');
  const set = new Set<string>();
  for (const m of xml.matchAll(/<loc>(.*?)<\/loc>/gi)) {
    const safe = normalizeUrl(m[1]);
    if (safe) set.add(safe);
  }
  return Array.from(set);
}

async function main() {
  const key = resolveKey();
  const keyLocation = `https://${ALLOWED_HOST}/${key}.txt`;

  const cliArgs = process.argv.slice(2).filter(Boolean);
  const rawUrls = cliArgs.length > 0 ? cliArgs : loadSitemapUrls();
  const urlList = Array.from(new Set(rawUrls.map(normalizeUrl).filter((u): u is string => Boolean(u)))).slice(0, 10000);

  if (urlList.length === 0) {
    console.error('Không có URL hợp lệ thuộc https://angigio.com để gửi.');
    process.exit(1);
  }

  console.log(`Đang gửi ${urlList.length} URL lên IndexNow (${INDEXNOW_ENDPOINT})...`);
  const resp = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: ALLOWED_HOST,
      key,
      keyLocation,
      urlList,
    }),
  });

  const text = await resp.text().catch(() => '');
  console.log(`IndexNow HTTP ${resp.status} ${resp.statusText}${text ? ` — ${text}` : ''}`);
  if (resp.status !== 200 && resp.status !== 202) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Lỗi gửi IndexNow:', err?.message || err);
  process.exit(1);
});
