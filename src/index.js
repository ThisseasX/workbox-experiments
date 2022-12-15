import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  new Workbox('./sw.js').register();

  navigator.serviceWorker.addEventListener('message', async ({ data }) => {
    if (data.meta === 'workbox-broadcast-update') {
      const { cacheName, updatedURL } = data.payload;

      const cache = await caches.open(cacheName);
      const response = await cache.match(updatedURL);
      const json = await response.json();

      document.querySelector('body').innerHTML = `<pre><code>${JSON.stringify(
        json,
      )}</code></pre>`;
    }
  });
}

document.querySelector('body').innerText = 'Loading...';

fetch('http://localhost:5000/dog')
  .then((x) => x.json())
  .then((x) => {
    document.querySelector('body').innerHTML = `<pre><code>${JSON.stringify(
      x,
    )}</code></pre>`;
  });
