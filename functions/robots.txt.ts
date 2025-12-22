export function onRequest(context: { env: { CF_PAGES_BRANCH?: string; }; }) {
  const branch = context.env.CF_PAGES_BRANCH;
  const isMain = branch === 'main';

  // Build the robots.txt content
  const body = isMain
    ? `User-agent: *
Allow: /`
    : `User-agent: *
Disallow: /`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}