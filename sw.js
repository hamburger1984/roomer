const CACHE_NAME = "roomer-v13";
const urlsToCache = [
  "/",
  "/index.html",
  "/floorplans.html",
  "/furniture.html",
  "/styles.css",
  "/app.js",
  "/i18n.js",
  "/manifest.json",
  "/libs/pdf-3.11.174.min.js",
  "/libs/pdf.worker-3.11.174.min.js",
  "/icons/favicon.ico",
  "/icons/favicon-16x16.png",
  "/icons/favicon-32x32.png",
  "/icons/apple-touch-icon.png",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

// Install service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
  );
  self.skipWaiting();
});

// Activate service worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      // Was this an upgrade from an older cache version? If so, the page the
      // user is looking at may be a stale document; refresh it once after we
      // take control so a broken cached page heals itself.
      const hadOldCache = cacheNames.some((name) => name !== CACHE_NAME);

      await Promise.all(
        cacheNames.map((name) =>
          name !== CACHE_NAME ? caches.delete(name) : null,
        ),
      );

      await self.clients.claim();

      if (hadOldCache) {
        const clients = await self.clients.matchAll({ type: "window" });
        clients.forEach((client) => {
          if (typeof client.navigate === "function") {
            client.navigate(client.url);
          }
        });
      }
    })(),
  );
});

// Fetch strategy:
//  - HTML / navigations: network-first so page updates are always picked up.
//  - Everything else: cache-first for fast offline loads.
self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const accept = request.headers.get("accept") || "";
  const isNavigation =
    request.mode === "navigate" || accept.includes("text/html");

  if (isNavigation) {
    event.respondWith(
      // no-store so a normal reload (not only a hard reload) always revalidates
      // the document instead of reusing the browser's HTTP cache.
      fetch(request, { cache: "no-store" })
        .then((response) => {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match("/index.html")),
        ),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(request).then((response) => {
        // Cache new requests
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseToCache);
        });
        return response;
      });
    }),
  );
});
