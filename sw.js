/* ng service worker.
   - App shell: precached, versioned by CACHE_VERSION (stamped at deploy by scripts/stamp-sw.mjs).
   - Content (content/**, data/**): stale-while-revalidate so notes, plan and practice work offline once opened.
   - CDN libraries (KaTeX, marked, DOMPurify): cache-first, they are version-pinned.
   - PDFs: cache-first on first open.
   Updates: the new worker waits; the page shows "New version available" and posts SKIP_WAITING. */
const CACHE_VERSION = 'dev';
const SHELL = `ng-shell-${CACHE_VERSION}`;
const CONTENT = 'ng-content-v1';
const LIBS = 'ng-libs-v1';
const PDFS = 'ng-pdfs-v1';
const KEEP = new Set([SHELL, CONTENT, LIBS, PDFS]);

const SHELL_FILES = [
  './', './index.html', './manifest.webmanifest',
  './styles/tokens.css', './styles/base.css', './styles/layout.css', './styles/components.css', './styles/print.css',
  './app/main.js', './app/router.js', './app/store.js', './app/data.js', './app/ui.js', './app/icons.js', './app/theme.js', './app/pwa.js', './app/markdown.js',
  './app/views/index.js', './app/views/today.js', './app/views/classes.js', './app/views/subject.js', './app/views/chapter.js',
  './app/views/practice.js', './app/views/progress.js', './app/views/plan.js', './app/views/more.js',
  './assets/icons/icon-192.png', './assets/icons/icon-512.png', './assets/icons/favicon.svg',
  './data/classes.json', './data/index.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL);
    // Add one by one so a single missing file doesn't fail the whole install.
    await Promise.all(SHELL_FILES.map((f) => cache.add(new Request(f, { cache: 'reload' })).catch((e) => console.warn('[sw] precache miss', f, e))));
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if (!KEEP.has(key)) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

const sameOrigin = (url) => url.origin === self.location.origin;
const scopePath = new URL(self.registration.scope).pathname;

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  // CDN libraries: cache-first
  if (url.hostname === 'cdn.jsdelivr.net') { event.respondWith(cacheFirst(request, LIBS)); return; }
  if (!sameOrigin(url)) return;

  const path = url.pathname.startsWith(scopePath) ? url.pathname.slice(scopePath.length) : url.pathname;

  // Navigations: serve the cached shell (hash routing means one HTML document)
  if (request.mode === 'navigate') { event.respondWith(shellFirst(request)); return; }
  if (path.endsWith('.pdf')) { event.respondWith(cacheFirst(request, PDFS)); return; }
  if (path.startsWith('content/') || path.startsWith('data/')) { event.respondWith(staleWhileRevalidate(request, CONTENT)); return; }
  // Everything else in the shell: cache, falling back to network (and cache it for next time)
  event.respondWith(cacheFirst(request, SHELL));
});

async function shellFirst(request) {
  const cache = await caches.open(SHELL);
  const cached = await cache.match('./index.html');
  if (cached) {
    // refresh in the background so the next launch has the latest shell
    fetch(request).then((res) => { if (res.ok) cache.put('./index.html', res.clone()); }).catch(() => {});
    return cached;
  }
  try { return await fetch(request); } catch { return offlinePage(); }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request, { ignoreSearch: true });
  if (cached) return cached;
  try {
    const res = await fetch(request);
    if (res.ok || res.type === 'opaque') cache.put(request, res.clone());
    return res;
  } catch (e) {
    return new Response('', { status: 504, statusText: 'offline' });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request, { ignoreSearch: true });
  const network = fetch(request).then((res) => { if (res.ok) cache.put(request, res.clone()); return res; }).catch(() => null);
  if (cached) { network.catch(() => {}); return cached; }
  const res = await network;
  return res || new Response(JSON.stringify({ error: 'offline' }), { status: 504, headers: { 'Content-Type': 'application/json' } });
}

function offlinePage() {
  return new Response(`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline · ng</title>
  <style>body{font-family:-apple-system,system-ui,sans-serif;background:#F2F2F7;color:#111;display:grid;place-items:center;height:100vh;margin:0;text-align:center;padding:1rem}@media(prefers-color-scheme:dark){body{background:#0E0F13;color:#F2F2F7}}</style>
  <div><h1>You're offline</h1><p>Open ng once while online and it will work offline after that.</p></div>`, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}
