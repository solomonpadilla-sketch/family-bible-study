// Offline support: precache the app shell, then stale-while-revalidate for same-origin + Google Fonts.
const CACHE = 'fbs-v9';
const ASSETS = ['./', 'index.html', 'daily.js', 'weekly.js', 'kids.js', 'memory.js', 'specials.js',
  'manifest.json', 'favicon.svg', 'favicon-32.png', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  // cache:'reload' bypasses the HTTP cache so a new SW never precaches stale files
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const sameOrigin = url.origin === location.origin;
  const isFont = url.hostname.endsWith('googleapis.com') || url.hostname.endsWith('gstatic.com');
  if (!sameOrigin && !isFont) return; // bible-api etc. handled by the app's own localStorage cache
  e.respondWith(
    caches.open(CACHE).then(async c => {
      const cached = await c.match(e.request);
      // cache:'no-cache' revalidates with the server so background updates are never HTTP-cache-stale
      const fresh = fetch(e.request, { cache: 'no-cache' }).then(res => {
        if (res && res.ok) c.put(e.request, res.clone());
        return res;
      }).catch(() => cached);
      return cached || fresh;
    })
  );
});
