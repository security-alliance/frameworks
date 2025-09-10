<!-- 
This file is a duplicate of the CONTRIBUTE.md at the root level. 

Both files contain the same content: the root-level file is there to be highlighted in the repository dashboard, 
while this copy is used to render the content on the website. 

⚠️ If you make updates here, make sure to update the root CONTRIBUTE.md as well, and vice versa, 
so both stay in sync.
-->

# **Contributing Guidelines**

The SEAL Security Framework is an open and collaborative project. Whether you are part of the Security Alliance or not, we welcome your contributions! Help us to build the documentation and improve security in the blockchain ecosystem.

This handbook is designed for easy collaboration and automatic deployment through continuous integration. If you'd like to join our effort, feel free to fix typos, contribute new sections, or propose enhancements.

**Before contributing, please read our [Code of Conduct](https://github.com/security-alliance/frameworks/blob/develop/CODE_OF_CONDUCT.md)** to ensure that all interactions remain respectful, inclusive, and constructive.

Join our [Discord](https://discord.gg/securityalliance) server, let others know what you are working on in the ‘frameworks-reviewers’ group channel and collaborate with other contributors writing about related topics.

## Live Versions

The source code for the Security Frameworks is hosted on GitHub: [github.com/security-alliance/frameworks](https://github.com/security-alliance/frameworks).

- The **main branch** powers the stable Frameworks website (https://frameworks.securityalliance.org/) with reviewed and finalized content.
- The **development branch** (https://frameworks.securityalliance.dev/) contains ongoing updates, new sections, and draft content.

When contributing, **please submit your Pull Requests to the development branch**. Once changes are reviewed and approved, they will be merged into the **main branch** for publication on the stable site.

## Ways to Contribute

There are several ways to contribute, depending on your preference and the scope of your changes. First, check existing PRs or branches to make sure your work has not been previously ****submitted**.**

### 1. Quick Edits

- Use the **“Contribute today!”** button at the bottom of any page
- Make minor fixes like typos, formatting, or small clarifications
- Changes go through GitHub’s web interface without requiring local setup

### 2. Add a New Section or Expand an Existing One

All contributions should follow this workflow:

1. **Fork the repository** to your own GitHub account.
2. **Follow the `template.mdx` page** when creating or expanding content. It contains pre-defined components and structure required for consistency in MDX files.
3. **Make your changes** in MDX (typos, improvements, or new content) on your fork.
4. **Open a Pull Request (PR) against the `develop` branch** of this repository. Once submitted, you can see the deployment through Vercel’s automation and make any final adjustments.
5. **Notify reviewers** by tagging a steward or maintainer, or by requesting reviews directly in your PR.
6. Once reviewed and approved, your changes will be merged into `develop`.
7. Periodically, reviewed content from `develop` is merged into `main` for the stable site.

If you’re interested in a framework that doesn’t currently have an active steward, you can **become one yourself**. See the [Stewards guide](/docs/pages/contribute
/stewards) for details on responsibilities and how to get started.

**⚠️ Please sign and verify all commits.** (If you have unsigned commits, follow the “Fixing Unsigned Commits” section below to update them)

## Development Environment Setup

Choose the development approach that works best for you:

### Option A: DevContainer with VSCode (Recommended)

The easiest way to get started is using our pre-configured devcontainer with VSCode:

1. **Prerequisites**: VSCode with [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
2. **Open the project**: VSCode will detect the devcontainer configuration
3. **Reopen in container**: Command Palette (Ctrl+Shift+P) → "Dev Containers: Reopen in Container"
4. **Start developing**: All tools are pre-installed and ready to use

### Option B: DevContainer CLI Only (No VSCode Required)

**Using DevContainer CLI:**

- Install [DevContainer CLI](https://github.com/devcontainers/cli)

```bash
git clone <https://github.com/security-alliance/frameworks.git>
cd frameworks && git checkout develop
devcontainer up --workspace-folder .
devcontainer exec --workspace-folder . bash
# Get the IP address of the container, by running `hostname -I | awk '{print $1}'`. Should be printed automatically in the terminal after the creation as well
# Inside container: npx just serve
# Access the docs at http://<IP>:5173

```

### Option C: Local Installation

If you prefer to install dependencies locally on your machine:

**Prerequisites:**

- Node.js (v18 or later) and npm (for running Vocs locally)
- [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) (For linting markdown files)
- [GNU Aspell](https://sourceforge.net/projects/aspell/) (For spell checking) - Note: For macOS you can use [Homebrew](https://brew.sh/) to install aspell. Just run `brew install aspell`.
- [Docker](https://docs.docker.com/get-docker/) (Optional: For running the devcontainer)
- [GitHub CLI](https://cli.github.com/) (Optional: For using `gh` to interact with GitHub)

**Setup:**

1. Install all prerequisites listed above
2. Clone the repository:
    
    ```bash
    git clone <https://github.com/security-alliance/frameworks.git>
    cd frameworks && git checkout develop
    ```
    
3. **Install Node.js dependencies:**

```bash
npm install
```

1. Start the local development server

```bash
npx just serve
```

**(Optional) Authenticate with GitHub CLI**: The GitHub CLI (`gh`) is already preinstalled in the devcontainer. You can authenticate by running `gh auth login` in the terminal, making it easy to interact with GitHub directly from your development environment.

# Fixing Unsigned Commits

If you accidentally made unsigned commits in your fork, you’ll need to rewrite them so they show as **Verified** before opening a PR.

## 1. Rebase your recent commits

- Understand how many commits you have to fix
- Run this command, replacing `N` with the number of commits to go back (starting from the latest one):

```bash
git rebase -i HEAD~N
```

---

## 2. Mark commits to fix

In the editor that opens:

- Change `pick` → `edit` for each unsigned commit.
- Save and exit.

---

## 3. Re-sign each commit

For each commit you’re editing:

```bash
git commit --amend -S --no-edit
git rebase --continue
```

Repeat until all commits are re-signed.

---

## 4. Push your changes

Since history was rewritten, you need to **force-push**:

```bash
git push --force
```

---

## 5. Verify

Check locally:

```bash
git log --show-signature
```

Or look at your branch on GitHub — commits should show a green **Verified** badge.

## Contributor Tasks Beyond Content Changes

When contributing to the Security Frameworks, there are several additional responsibilities to ensure your updates integrate smoothly into the site and maintain proper structure:

### 1. Page Tags

- Assign appropriate tags at the top of your pages in the frontmatter to help categorize content by role, topic, or skill level:

```yaml
---
tags:
  - Engineer/Developer
  - Security Specialist
---

```

- Proper tagging makes your contribution discoverable and filterable on the site.

### 2. Contributors Metadata

- Add yourself and other relevant contributors to the page frontmatter:

```yaml
---
contributors:
  - role: wrote
    users: [your-github-username]
  - role: reviewed
    users: [reviewer1, reviewer2]
---

```

- Contributors are **managed centrally**:
    1. **Contributor database:** `docs/pages/config/contributors.json`
    2. **Usage guide:** `docs/pages/config/using-contributors.mdx`
- This helps track contributions and ensures proper attribution for edits and reviews.

### 3. Sidebar / Navigation

Because of how we handle the `.org` and `.dev` domains in different branches, when contributing **new pages** you must also **update `vocs.config.ts`** so that the page appears in the site’s sidebar. For content still in review, remember to set `dev: true`.

Example of a category with multiple pages:

```tsx
{
  text: 'Monitoring',       // Category name visible in the sidebar
  collapsed: false,
  dev: true,                // Indicates this category is in development
  items: [
    { text: 'Overview', link: '/monitoring/README', dev: true },  // Example page
    { text: 'Guidelines', link: '/monitoring/guidelines', dev: true },
    { text: 'Thresholds', link: '/monitoring/thresholds', dev: true },
  ]
},

```

This ensures that new content appears correctly in the site’s navigation for readers on the `.dev` site while staying hidden from the stable `.org` site until ready.

## Style Guide

Wiki pages follow standard MDX.

The audience of this wiki is technical and the content should reflect that. There are many guides on technical and documentation writing you can learn from, for example you can check [this lecture](https://www.youtube.com/watch?v=vtIzMaLkCaM) to get started.

### Writing Guidelines

- Write in an objective, explanatory tone; avoid unnecessary simplifications.
- Use concise sentences and break down complex ideas with bullet points, tables, images, or block-quotes.
- Always link your resources and verify them
- Introduce acronyms and technical jargon before using them.
- Web3 changes fast, write the content to be as much future proof as possible
- Do **not** submit content fully generated by AI, however we recommend using it to fix grammar or phrasing
- Consider tutorials or hands-on guides for practical steps.
- Use visualizations (mermaid, diagrams, tables) to clarify concepts.
- Add recommended reading or dependencies at the top of a page if relevant.
- Focus on delivering credible, formal, technical content without unnecessary high-level introductions; use examples, comparisons, or anecdotes to clarify complex topics.
- You can use mermaid diagrams for visualizations

### Content Standardization

- Use **American English** consistently.
- Follow consistent terminology, capitalization, and nomenclature (see [Ethereum.org style guide](https://ethereum.org/contributing/style-guide/content-standardization)).
- Usage of images and visualizations is encouraged. If you are using an image created by a third party, make sure its license allows it and provide link to the original. For creating your own visualizations, we suggest [excalidraw.com](https://github.com/excalidraw/excalidraw).
- Feel free to use [emojis](https://docsify.js.org/#/emoji?id=emoji) or [icons](https://icongr.am/fontawesome) where it fits, for example in block-quotes.

### Linking Resources

- Prefer descriptive names for external links (e.g., `inevitableeth.com` instead of “this wiki”).
- Avoid overwhelming readers with too many inline links; consider a **Resources** section at the bottom.
- Use relative paths for internal links and heading IDs for specific sections.
- Provide archived mirrors or snapshots for important external references.

### In-Page Notices

- Use block-quote notices at the top of pages for context.
- **Incomplete pages** should include a stub notice:

> ⚠️ This article is still in progress. Help the framework by contributing and expanding it.
> 

---

## Anything else?

This page is also open for contributions! Suggest improvements to our style and guidelines in the github repo.

## About this page

Originally inspired by the [Ethereum Protocol Fellows](https://github.com/eth-protocol-fellows/protocol-studies)
