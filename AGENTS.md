# AGENTS.md

## Workflow
- PRs target `develop` branch.
- Setup: `pnpm install`
- Dev server: `pnpm exec just serve` (generators + Vocs on :5173)
- Build/verify: `pnpm run docs:build` then `pnpm run docs:preview`
- Lint: `just lint` (cspell + markdownlint on `docs/pages/**/*.mdx`)
- Devcontainer: `.devcontainer/devcontainer.json` (pre-installs pnpm/Node/tools)

## Content Structure
- New/expanded pages: Copy `docs/pages/config/template.mdx`
- Frontmatter required:
  ```
  title: "Page Title | Security Alliance"
  description: "140-160 chars, keywords/action verbs"
tags:
  - Engineer/Developer
  - Security Specialist
  - Operations & Strategy
contributors:
  - role: wrote
    users: [username]
  - role: reviewed
    users: []
  - role: fact-checked
    users: []
  ```
- Sidebar: Update `vocs.config.tsx` items; `dev: true` for WIP (hides on main site)
- **Never edit**: `index.mdx` files (auto-generated via utils)
- Images: `/img-bot` + GitHub img URLs in PR comment → auto-S3 via workflow
- Generators run on build: tags, indexes, mermaid, printables, certs

## Conventions Agents Miss
- Explain: Non-technical first → technical depth
- Language: Direct/technical, no 1st person ("implement X" not "I suggest")
- Playbooks/templates: Top `> 🔑 **Key Takeaway**:` (<40 words summary)
- Sections: Practical guidance (steps/checklist), Why important (incidents), Pitfalls/examples, Cheat sheet, Further reading
- Tech details: Balanced (detailed for AWS/Cloudflare/etc., generic timeless principles)
- Links: Descriptive; Resources section; relative internal paths
- Frontmatter precision: title: "Page | Security Alliance" (&lt;60 chars or "| SEAL"), description: 140-160 chars (action verbs/keywords like tool names/attacks/standards), add self to contributors (roles: wrote/reviewed/fact-checked) + update docs/pages/config/contributors.json
- Style: American English; objective/explanatory tone (no simplifications); introduce acronyms; future-proof; no full-AI content (grammar ok); mermaid; images via PR comments → S3 (/img-bot)
- New pages: MUST update vocs.config.tsx sidebar items (dev: true for WIP)
- WIP pages: Add stub notice &gt; ⚠️ Stub/in progress, help contribute/expand

## Commits/PRs
- Sign: `git commit -S`; amend unsigned via rebase/edit/amend-S/continue; force-push
- Pre-PR: Build + preview locally; update contributors.json if new
- CI enforces: Spellcheck comments PRs, mdlint, preview deploys, vocs-config reminders
- Unsigned commits fix: git rebase -i HEAD~N; pick→edit; git commit --amend -S --no-edit &amp;&amp; git rebase --continue (repeat); git push --force; verify git log --show-signature
