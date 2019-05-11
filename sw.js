importScripts('assets/sw-toolbox.js');

toolbox.precache(['index.html'],['manifest.json']);

toolbox.router.default = toolbox.cacheFirst;

self.addEventListener("install", function(event) {
  console.log('SW: Installing service worker');
});