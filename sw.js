const VERSION = 'v1'

const precache = async () => {
  const cache = await caches.open(VERSION)
  return cache.addAll([
    // '/',
    // '/index.html',
    // '/assets/index.css',
    // '/assets/BigBuckBunny.mp4',
    // '/assets/js/index.js',
    // '/assets/js/MediaPlayer.js',
    // '/assets/js/plugins/',
    // '/assets/js/plugins/AutoPlay.js',
    // '/assets/js/plugins/AutoPause.js',
  ])
}

const cachedResponse = async request => {
  const cache = await caches.open(VERSION)
  const response = await cache.match(request)

  return response || fetch(request)
}

const updateCache = async request => {
  const cache = await caches.open(VERSION)
  const response = await fetch(request)
  return cache.put(request, response)
}

self.addEventListener('install', event => {
  event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
  const request = event.request

  if (request.method !== 'GET') {
    return
  }

  event.respondWith(cachedResponse(request))

  event.waitUntil(updateCache(request))
})