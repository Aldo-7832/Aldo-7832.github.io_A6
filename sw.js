self.addEventListener('install', (event)=>{
    console.log('SW: Instalado');
    const respCache = caches.open('cache-app-shell').then((cache)=>{
        return cache.addAll([
            '/',
            './index.html',
            './js/app.js',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js',
            'https://code.jquery.com/jquery-3.6.1.slim.min.js',
            'https://reqres.in/api/users?page=2',
            './js/post.js'
        ]);
    });
    event.waitUntil(respCache);
});

//only cache
self.addEventListener('fetch', (event)=>{
    console.log(event);
    const respCache = caches.match(event.request);
    event.respondWith(respCache);
});