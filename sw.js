const CACHE_NAME = "photobox-offline-v1";
const ASSETS = ["./", "./index.html", "./manifest.json"];

// Simpan file ke memori HP saat pertama kali dibuka
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

// Ambil dari memori HP saat offline
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
