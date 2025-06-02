self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('apm-v1').then(cache =>
      cache.addAll([
        './',
        './index.html',
        './APM-Guidebook.pdf',
        './icon.png'
      ])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});