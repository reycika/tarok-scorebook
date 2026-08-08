// Bump this version string every time bundle.js/index.html change so old
// caches get discarded automatically — this is what makes updates actually
// reach installed phones instead of getting stuck on a stale cached copy.
const CACHE_VERSION = "v3";
const CACHE_NAME = `tarok-scorebook-${CACHE_VERSION}`;
const APP_SHELL = [
  "./",
  "./index.html",
  "./bundle.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];
// files that should always be fetched fresh first (fall back to cache only
// when offline) so a GitHub update shows up the next time you have a signal
const NETWORK_FIRST = ["./", "./index.html", "./bundle.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
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
  const path = "." + url.pathname.replace(/^\/[^/]*/, "") || "./";
  const isAppShellCore =
    NETWORK_FIRST.some((p) => url.pathname.endsWith(p.replace("./", "/"))) ||
    event.request.mode === "navigate";

  if (isAppShellCore) {
    // network-first: always try to get the latest version; only fall back
    // to the cached copy if there's no connection
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
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
