const CACHE = 'upsc-v5';
const FILES = [
  './index.html',
  './course.html',
  './topics.html',
  './subjects.html',
  './schedule.html',
  './answers.html',
  './current-affairs.html',
  './scores.html',
  './notes.html',
  './css/style.css',
  './js/storage.js',
  './js/schedules.js',
  './js/topics.js',
  './js/dashboard.js',
  './data/syllabus.js',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
