import fs from 'node:fs';
import path from 'node:path';

const ALLOWED_HOST = 'angigio.com';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const DEFAULT_KEY_FILENAME = 'ce0d7a94729144969b522dacce411a38.txt';
const ADMIN_EMAILS = new Set([
  'ducvantran25121993@gmail.com',
  'tranduc474@gmail.com',
]);

interface FirebaseAppletConfig {
  projectId: string;
  firestoreDatabaseId: string;
  apiKey: string;
}

let cachedFirebaseConfig: FirebaseAppletConfig | null = null;

function getFirebaseConfig(): FirebaseAppletConfig | null {
  if (cachedFirebaseConfig) return cachedFirebaseConfig;
  const candidates = [
    path.join(process.cwd(), 'firebase-applet-config.json'),
    path.resolve('firebase-applet-config.json'),
  ];
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) {
        const parsed = JSON.parse(fs.readFileSync(p, 'utf-8'));
        if (parsed?.projectId && parsed?.apiKey) {
          cachedFirebaseConfig = parsed;
          return cachedFirebaseConfig;
        }
      }
    } catch {}
  }
  return null;
}

function resolveIndexNowKey(): string | null {
  const envKey = String(process.env.INDEXNOW_KEY || '').trim();
  if (/^[a-zA-Z0-9-]{8,128}$/.test(envKey)) {
    return envKey;
  }

  const keyFileCandidates = [
    path.join(process.cwd(), 'public', DEFAULT_KEY_FILENAME),
    path.join(process.cwd(), 'dist', DEFAULT_KEY_FILENAME),
    path.resolve('public', DEFAULT_KEY_FILENAME),
    path.resolve('dist', DEFAULT_KEY_FILENAME),
  ];
  for (const p of keyFileCandidates) {
    try {
      if (fs.existsSync(p)) {
        const content = fs.readFileSync(p, 'utf-8').trim();
        if (/^[a-zA-Z0-9-]{8,128}$/.test(content)) {
          return content;
        }
      }
    } catch {}
  }
  return null;
}

async function verifyAdminBearerToken(authHeader: unknown): Promise<{ ok: boolean; email?: string; error?: string }> {
  if (typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
    return { ok: false, error: 'Thiếu token xác thực quản trị viên.' };
  }
  const idToken = authHeader.slice(7).trim();
  if (!idToken || idToken.length < 20) {
    return { ok: false, error: 'Token xác thực không hợp lệ.' };
  }

  const cfg = getFirebaseConfig();
  if (!cfg?.apiKey) {
    return { ok: false, error: 'Không tìm thấy cấu hình Firebase xác thực.' };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);
  try {
    const resp = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(cfg.apiKey)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
        signal: controller.signal,
      }
    );
    if (!resp.ok) {
      return { ok: false, error: 'Phiên đăng nhập quản trị đã hết hạn hoặc không hợp lệ.' };
    }
    const data: any = await resp.json().catch(() => null);
    const user = Array.isArray(data?.users) ? data.users[0] : null;
    const email = String(user?.email || '').trim().toLowerCase();
    const verified = Boolean(user?.emailVerified);
    if (!email || !verified || !ADMIN_EMAILS.has(email)) {
      return { ok: false, error: 'Tài khoản này không có quyền gửi IndexNow.' };
    }
    return { ok: true, email };
  } catch {
    return { ok: false, error: 'Không thể xác minh phiên đăng nhập quản trị.' };
  } finally {
    clearTimeout(timer);
  }
}

function normalizeAllowedUrl(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;

  const candidate = trimmed.startsWith('/') ? `https://${ALLOWED_HOST}${trimmed}` : trimmed;
  try {
    const parsed = new URL(candidate);
    if (parsed.protocol !== 'https:' || parsed.hostname.toLowerCase() !== ALLOWED_HOST) {
      return null;
    }
    parsed.hash = '';
    return parsed.toString();
  } catch {
    return null;
  }
}

function readSitemapUrls(): string[] {
  const candidates = [
    path.join(process.cwd(), 'dist', 'sitemap-base.xml'),
    path.join(process.cwd(), 'public', 'sitemap.xml'),
    path.resolve('dist', 'sitemap-base.xml'),
    path.resolve('public', 'sitemap.xml'),
  ];

  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) {
        const xml = fs.readFileSync(p, 'utf-8');
        const urls: string[] = [];
        for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/gi)) {
          const safeUrl = normalizeAllowedUrl(match[1]);
          if (safeUrl) urls.push(safeUrl);
        }
        if (urls.length > 0) {
          return Array.from(new Set(urls));
        }
      }
    } catch {}
  }
  return [];
}

export default async function handler(req: any, res: any) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, message: 'Method Not Allowed' });
  }

  const authCheck = await verifyAdminBearerToken(req.headers?.authorization);
  if (!authCheck.ok) {
    return res.status(401).json({ ok: false, message: authCheck.error || 'Unauthorized' });
  }

  const key = resolveIndexNowKey();
  if (!key) {
    return res.status(500).json({ ok: false, message: 'Chưa cấu hình file khóa xác thực IndexNow.' });
  }

  let body: any = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ ok: false, message: 'Dữ liệu JSON không hợp lệ.' });
    }
  }
  if (!body || typeof body !== 'object') {
    body = {};
  }

  const mode = body.mode === 'sitemap' ? 'sitemap' : 'urls';
  const rawList: unknown[] = Array.isArray(body.urls)
    ? body.urls
    : Array.isArray(body.urlList)
      ? body.urlList
      : typeof body.url === 'string'
        ? [body.url]
        : [];

  const urlSet = new Set<string>();
  if (mode === 'sitemap') {
    for (const u of readSitemapUrls()) {
      urlSet.add(u);
    }
  }
  for (const item of rawList) {
    const safeUrl = normalizeAllowedUrl(item);
    if (safeUrl) urlSet.add(safeUrl);
  }

  const urlList = Array.from(urlSet).slice(0, 10000);
  if (urlList.length === 0) {
    return res.status(400).json({
      ok: false,
      message: 'Không có URL hợp lệ nào thuộc https://angigio.com để gửi IndexNow.',
    });
  }

  const keyLocation = `https://${ALLOWED_HOST}/${key}.txt`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    const upstream = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: ALLOWED_HOST,
        key,
        keyLocation,
        urlList,
      }),
      signal: controller.signal,
    });

    const ok = upstream.status === 200 || upstream.status === 202;
    const responseText = await upstream.text().catch(() => '');

    return res.status(ok ? 200 : 502).json({
      ok,
      status: upstream.status,
      submittedCount: urlList.length,
      keyLocation,
      sampleUrls: urlList.slice(0, 5),
      message: ok
        ? `Đã gửi thành công ${urlList.length} URL lên IndexNow (HTTP ${upstream.status}).`
        : `IndexNow trả về mã ${upstream.status}${responseText ? `: ${responseText.slice(0, 140)}` : ''}`,
    });
  } catch (err: any) {
    return res.status(502).json({
      ok: false,
      submittedCount: 0,
      message: err?.name === 'AbortError' ? 'Kết nối tới IndexNow bị quá thời gian chờ.' : 'Không thể kết nối tới máy chủ IndexNow.',
    });
  } finally {
    clearTimeout(timer);
  }
}
