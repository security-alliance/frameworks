export function onRequest(context: { env: { CF_PAGES_BRANCH?: string; }; }) {
  const branch = context.env.CF_PAGES_BRANCH;
  const isMain = branch === 'main';

  const body = isMain
    ? `# As a condition of accessing this website, you agree to abide by the following
# content signals:

# (a) If a content-signal = yes, you may collect content for the corresponding
#     use.
# (b) If a content-signal = no, you may not collect content for the
#     corresponding use.
# (c) If the website operator does not include a content signal for a
#     corresponding use, the website operator neither grants nor restricts
#     via content signal with respect to the corresponding use.

# The content signals and their meanings are:

# search:   building a search index and providing search results (e.g., returning
#           hyperlinks and short excerpts from your website's contents). Search does not
#           include providing AI-generated search summaries.
# ai-input: inputting content into one or more AI models (e.g., retrieval
#           augmented generation, grounding, or other real-time taking of content for
#           generative AI search answers).
# ai-train: training or fine-tuning AI models.

# ANY RESTRICTIONS EXPRESSED VIA CONTENT SIGNALS ARE EXPRESS RESERVATIONS OF
# RIGHTS UNDER ARTICLE 4 OF THE EUROPEAN UNION DIRECTIVE 2019/790 ON COPYRIGHT
# AND RELATED RIGHTS IN THE DIGITAL SINGLE MARKET.

User-agent: *
Allow: /

User-agent: Amazonbot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: meta-externalagent
Disallow: /
`
    : `User-agent: *
Disallow: /
`;

  return new Response(body + '\n', {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
