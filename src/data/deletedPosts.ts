export const LOCAL_STORAGE_DELETED_POSTS = 'angigio_deleted_posts';

export function getDeletedPostSlugs(): Set<string> {
  const set = new Set<string>();
  if (typeof window === 'undefined') return set;
  if ((window as any).__ANGIGIO_DELETED_POSTS__ instanceof Set) {
    return new Set((window as any).__ANGIGIO_DELETED_POSTS__);
  }
  // 1. Check window.__INITIAL_DELETED_POSTS__ injected by server for instant zero-latency multi-device sync
  if (Array.isArray((window as any).__INITIAL_DELETED_POSTS__)) {
    (window as any).__INITIAL_DELETED_POSTS__.forEach((s: any) => {
      const clean = String(s).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
      if (clean) set.add(clean);
    });
  }
  // 2. Read from localStorage
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_DELETED_POSTS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        parsed.forEach((s) => set.add(String(s).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '')));
      }
    }
  } catch {}
  (window as any).__ANGIGIO_DELETED_POSTS__ = set;
  return set;
}

export function recordDeletedPostSlugLocal(slugOrId: string): void {
  if (typeof window === 'undefined') return;
  try {
    const clean = String(slugOrId).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
    const current = getDeletedPostSlugs();
    current.add(clean);
    (window as any).__ANGIGIO_DELETED_POSTS__ = current;
    localStorage.setItem(LOCAL_STORAGE_DELETED_POSTS, JSON.stringify(Array.from(current)));
  } catch {}
}

export function removeDeletedPostSlugLocal(slugOrId: string): void {
  if (typeof window === 'undefined') return;
  try {
    const clean = String(slugOrId).toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
    const current = getDeletedPostSlugs();
    current.delete(clean);
    (window as any).__ANGIGIO_DELETED_POSTS__ = current;
    localStorage.setItem(LOCAL_STORAGE_DELETED_POSTS, JSON.stringify(Array.from(current)));
  } catch {}
}
