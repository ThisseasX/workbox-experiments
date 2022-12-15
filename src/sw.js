import { precacheAndRoute } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';
import { registerRoute } from 'workbox-routing';
import { BroadcastUpdatePlugin } from 'workbox-broadcast-update';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

self.skipWaiting();
clientsClaim();

registerRoute(
  'http://localhost:5000/dog',
  new StaleWhileRevalidate({
    plugins: [new BroadcastUpdatePlugin()],
  }),
);
