
// console.info('Service worker disabled for development, will be generated at build time.');

self.addEventListener('fetch', event => {

    // console.log(event)

    if (event.request.url.includes('.css')) {
        event.respondWith(null)
    } else {
        event.respondWith(fetch(event.request));
    }
});