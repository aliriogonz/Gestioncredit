// Kill-switch: reemplaza al antiguo Service Worker offline de GestiónCredit.
// Limpia sus cachés y se desregistra para que los navegadores que ya lo
// instalaron vuelvan a servir siempre la versión web actualizada.

function isWorkboxCacheForThisRegistration(name) {
  return name.startsWith("gestioncredit-");
}

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) =>
  event.waitUntil(
    (async () => {
      try {
        const cacheNames = await caches.keys();
        const appCaches = cacheNames.filter(isWorkboxCacheForThisRegistration);
        await Promise.allSettled(appCaches.map((name) => caches.delete(name)));
        await self.clients.claim();
        const windowClients = await self.clients.matchAll({ type: "window" });
        await Promise.allSettled(windowClients.map((client) => client.navigate(client.url)));
      } finally {
        await self.registration.unregister();
      }
    })(),
  ),
);
