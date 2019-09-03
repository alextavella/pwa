self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open('my-pwa-cache').then((cache) =>
      // Try the cache
      cache.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((response) => {
          if (response.status === 404) {
            return caches.match('/404.html');
          }
          cache.put(event.request, response.clone());
          return response;
        });
      }).catch(() => {
        cache.match('/offline.html');
      })),
  );
});
