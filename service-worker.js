// v5: bundle.js/index.html/version.json are now NETWORK-ONLY — never read
// from or written to any cache. This trades away offline support for the
// app's actual code (icons/manifest still cache normally) in exchange for
// updates always reaching the device immediately, no matter what. Given how
// persistently this got stuck before, that trade is worth it.
const CACHE_VERSION = "v5";
const CACHE_NAME = `tarok-scorebook-${CACHE_VERSION}`;
const CACHED_ASSETS = ["./manifest.json", "./icon-192.png", "./icon-512.png"];
const NETWORK_ONLY = ["./", "./index.html", "./bundle.js", "./version.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CACHED_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const isNetworkOnly =
    NETWORK_ONLY.some((p) => url.pathname.endsWith(p.replace("./", "/"))) ||
    event.request.mode === "navigate";

  if (isNetworkOnly) {
    // straight to the network, every single time — no cache read, no cache
    // write. If there's truly no connection this will fail and the app
    // won't load, but it can never again get silently stuck on stale code.
    event.respondWith(fetch(event.request));
    return;
  }

  // static assets (icons, manifest): cache-first is fine, they rarely change
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => cached);
    })
  );
});
