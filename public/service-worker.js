const cacheName = 'metronome';

const files = [
  '/',
  '/icon.png',
  '/index.css',
  '/index.js',
  '/lib/audio.js',
  '/lib/createTick.js',
  '/lib/Metronome.js',
  '/lib/MetronomeElement.js',
  '/lib/NoiseBuffer.js',
  '/lib/WhiteNoiseNode.js',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(cacheName).then((cache) => {
    return cache.addAll(files);
  }));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((response) => {
    return response || fetch(event.request);
  }));
});
