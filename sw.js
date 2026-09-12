/**
 * Service worker BioKonkurs — umożliwia działanie aplikacji w pełni offline po pierwszym
 * wczytaniu oraz instalację jako aplikacja (PWA) na telefonie/komputerze.
 *
 * Strategia: cache-first. Lista plików do zbuforowania jest wyliczana automatycznie
 * na podstawie tagów <script src> / <link href> w index.html, więc nie trzeba jej
 * ręcznie aktualizować przy dodawaniu nowych plików treści — wystarczy podbić CACHE_NAME
 * przy większej aktualizacji, żeby wymusić ponowne pobranie wszystkiego.
 */
'use strict';

var CACHE_NAME = 'biokonkurs-cache-v3';

var EXTRA_URLS = ['./', './index.html', './manifest.webmanifest', './sw.js'];

function collectAssetUrls(html) {
  var urls = [];
  var re = /(?:src|href)="([^"]+\.(?:js|css))"/g;
  var match;
  while ((match = re.exec(html))) {
    urls.push(match[1]);
  }
  return urls;
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    fetch('./index.html', { cache: 'no-store' })
      .then(function (res) { return res.text(); })
      .then(function (html) {
        var assetUrls = collectAssetUrls(html);
        var iconUrls = [
          'assets/icons/icon-192.png',
          'assets/icons/icon-512.png',
          'assets/icons/icon-maskable-512.png',
          'assets/icons/apple-touch-icon.png',
          'assets/icons/favicon-32.png',
        ];
        var allUrls = EXTRA_URLS.concat(assetUrls, iconUrls);
        return caches.open(CACHE_NAME).then(function (cache) {
          return Promise.all(
            allUrls.map(function (url) {
              return cache.add(url).catch(function (err) {
                console.warn('[sw] nie udało się zbuforować', url, err);
              });
            })
          );
        });
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (names) {
        return Promise.all(
          names
            .filter(function (name) { return name !== CACHE_NAME; })
            .map(function (name) { return caches.delete(name); })
        );
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var request = event.request;
  var url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request).then(function (cached) {
      if (cached) return cached;
      return fetch(request)
        .then(function (response) {
          if (response && response.ok) {
            var copy = response.clone();
            caches.open(CACHE_NAME).then(function (cache) {
              cache.put(request, copy);
            });
          }
          return response;
        })
        .catch(function () {
          if (request.mode === 'navigate') return caches.match('./index.html');
        });
    })
  );
});
