if ('serviceWorker' in navigator) {
 	window.addEventListener('load', function() {
   		navigator.serviceWorker.register('sw.js').then(
     		function(registration) {
       			console.log('ServiceWorker registration successful with scope: ', registration.scope); 
       		},
     		function(err) {
       			console.err('ServiceWorker registration failed: ', err);
     		}
     	);
 	});
}