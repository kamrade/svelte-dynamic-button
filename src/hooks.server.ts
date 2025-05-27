// src/hooks.server.ts
export const handle = async ({ event, resolve }) => {
  if (event.url.pathname === '/.well-known/appspecific/com.chrome.devtools.json') {
    return new Response('{}', {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return resolve(event);
};