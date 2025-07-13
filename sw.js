const CACHE_NAME = 'synapse-horror-v1.0.1';
const urlsToCache = [
  './',
  './index.html',
  './Icon.png',
  './manifest.json',
  'https://unpkg.com/tone@15.0.4/build/Tone.js',
  'https://cdn.tailwindcss.com'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('SYNAPSE: Caching app files');
        return cache.addAll(urlsToCache.map(url => new Request(url, {cache: 'reload'})));
      })
      .catch(err => {
        console.log('SYNAPSE: Cache failed:', err);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('SYNAPSE: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip external resources that cause CORS issues
  const url = new URL(event.request.url);
  if (url.hostname === 'storage.googleapis.com') {
    return; // Let the browser handle these requests directly
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          // Add to cache for future use
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            })
            .catch(err => console.log('Cache put failed:', err));
          
          return response;
        }).catch(err => {
          console.log('Fetch failed:', err);
          // If both cache and network fail, return offline page for documents
          if (event.request.destination === 'document') {
            return caches.match('./index.html');
          }
          // For other resources, return a basic response to avoid console errors
          return new Response('Resource not available offline', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        });
      })
      .catch(err => {
        console.log('Cache match failed:', err);
        return new Response('Cache error', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      })
  );
});

// Handle background sync for save data
self.addEventListener('sync', event => {
  if (event.tag === 'save-game-data') {
    event.waitUntil(syncGameData());
  }
});

async function syncGameData() {
  // This would sync game saves to a server if implemented
  console.log('SYNAPSE: Syncing game data...');
}

// Handle push notifications (for future features)
self.addEventListener('push', event => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: './Icon.png',
      badge: './Icon.png',
      vibrate: [200, 100, 200],
      tag: 'synapse-notification'
    };
    
    event.waitUntil(
      self.registration.showNotification('SYNAPSE', options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('./')
  );
});
