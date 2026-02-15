# CLAUDE.md — SEAL Security Frameworks

## Project

MDX documentation site built with [Vocs](https://vocs.dev) (Vite + React). Content lives in `docs/pages/`, components in `components/`.

## Build & Verify

```bash
pnpm install
pnpm run docs:build    # full build — MUST pass before pushing
pnpm run docs:dev      # local preview at localhost:5173
npx cspell "docs/**/*.mdx"  # spellcheck
```

Build pipeline: generate-tags → generate-indexes → mermaid-wrapper → generate-printables → generate-cert-data → vocs build. All steps must succeed.

## Content

- **Template:** every MDX page must follow `docs/pages/config/template.mdx`
- **Frontmatter (required):** `title`, `description` (140-160 chars, SEO-focused), `tags`, `contributors`
- **Valid tags:** Security Specialist · Operations & Strategy · Community & Marketing · HR · Engineer/Developer · SEAL/Initiative · Certifications · SFC
- **Imports:** match component import path depth to file location (`../` count matters)
- **Key Takeaway:** `> 🔑 **Key Takeaway**:` format, max 40 words, immediately after the H1 heading
- **Close every page** with `</TagProvider>` then `<ContributeFooter />`
- **Links:** use relative `.mdx` links for cross-references within the repo

## Writing Style

- Practitioner voice — no fluff, no marketing language
- Specific and actionable: tool names, setting paths, concrete steps
- Tables, checklists, and code blocks over prose where possible
- Cross-reference existing pages to avoid duplication
- Match the tone and depth of neighboring pages in the same section

## Certifications (SFC)

Cert pages use YAML frontmatter with a `cert:` array defining sections and controls. Each control needs `id`, `title`, `description`, and optional `baselines`. See any `sfc-*.mdx` file for the schema.

Cert contributions require stricter review — see `docs/pages/certs/contributions.mdx`.

## Git

- **Target branch:** `develop` (not `main`)
- New content pages: add `dev: true` in the sidebar entry in `vocs.config.ts`
- One logical change per commit, imperative mood messages

## Quality Checklist

Before pushing, verify:

- [ ] `pnpm run docs:build` passes cleanly
- [ ] All URLs and cross-references resolve
- [ ] Frontmatter matches template (title, description, tags, contributors)
- [ ] No content duplication — link to existing pages instead
- [ ] Spellcheck passes or new terms added to cspell config
