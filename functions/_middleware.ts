interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response>; };
}

export async function onRequest(context: {
  request: Request;
  env: Env;
  next: () => Promise<Response>;
}): Promise<Response> {
  const { request, env, next } = context;
  const url = new URL(request.url);

  if (url.pathname.endsWith('.md') && !url.pathname.startsWith('/assets/md/')) {
    const assetUrl = new URL(`/assets/md${url.pathname}`, url.origin);
    const asset = await env.ASSETS.fetch(new Request(assetUrl, request));
    if (asset.ok) {
      return new Response(asset.body, {
        status: 200,
        headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
      });
    }
  }

  return next();
}
