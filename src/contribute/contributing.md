# Contribute to the Security Framework

The Security Framework is an open and collaborative project. Whether you are part of the Security Alliance or not, we welcome your contributions! Help us to build the documentation and improve security in the ecosystem.

This mdBook-style handbook is designed for easy collaboration and automatic deployment through continuous integration. If you'd like to join our effort, feel free to fix typos, contribute new sections, or propose enhancements.

On each page, you will find a "Suggest an edit" button at the top-right corner. Clicking this sends you to the GitHub.com where you can suggest edits using their web interface.

If you want to contribute in a more organized manner, please read below.

## Contributing

Before you start editing, adding or removing content, please read the [code of conduct](https://github.com/security-alliance/frameworks/blob/develop/CODE_OF_CONDUCT.md) and make yourself familiar with the overall structure.

The source is hosted in github repository at [github.com/security-alliance/frameworks](https://github.com/security-alliance/frameworks).

The content of the Frameworks main website (.org) comes from the `main` branch, and when contributing to several frameworks, or generic changes, we would like you to open a PR into the `development` branch (.dev)

> ⚠️ Please sign and verify every commit.

Once a new update is warranted, the content from `development` is merged into `main`.

### Framework-specific branches and Stewards

To understand how to contribute, follow this process:

1. **Check for a framework-specific branch**: First, check if there's a [Steward](./stewards.md) for the specific framework you're interested in, and reach out. We usually have separate branches pre-develop for frameworks with stewards. Their naming convention is `fw_framework_name`, for example `fw_opsec`, `fw_community_mgmt` - the naming should be intuitive. For more information about stewards and their responsibilities, see the [Stewards](./stewards.md) section.

2. **Fork the right branch**: Ideally, you will fork these framework-specific branches, since they will probably have more updated information than what's available in the develop branch.

3. **Submit PR to framework specific branch**: Once you have your suggestions, submit a PR and let the steward or maintainer know you're ready for a review. Feel free to assign reviewers as well. Once submited, you'll be able to see the deployment through Vercel's automation and make any final fixes.

4. **Submit PR to develop**: After reviews, a steward, a maintainer, or even yourself can submit a PR from the framework specific branch to the develop branch.

5. **Become a steward**: If there's no specific branch created, then that framework is still "headless," which means you can become its steward! See more in the [Stewards](./stewards.md) section.

### Development Environment Setup

Choose the development approach that works best for you:

#### Option A: DevContainer with VSCode (Recommended)

The easiest way to get started is using our pre-configured devcontainer with VSCode:

1. **Prerequisites**: VSCode with [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
2. **Open the project**: VSCode will detect the devcontainer configuration
3. **Reopen in container**: Command Palette (Ctrl+Shift+P) → "Dev Containers: Reopen in Container"
4. **Start developing**: All tools are pre-installed and ready to use

#### Option B: DevContainer CLI Only (No VSCode Required)

**Using DevContainer CLI:**
- Install [DevContainer CLI](https://github.com/devcontainers/cli)
```bash
git clone https://github.com/security-alliance/frameworks.git
cd frameworks && git checkout develop
devcontainer up --workspace-folder .
devcontainer exec --workspace-folder . bash
# Get the IP address of the container, by running `hostname -I | awk '{print $1}'`. Should be printed automatically in the terminal after the creation as well
# Inside container: just serve
# Access the mdBook at http://<IP>:3000
```

#### Option C: Local Installation

If you prefer to install dependencies locally on your machine:

**Prerequisites:**
- [Rust/cargo](https://www.rust-lang.org/tools/install) (For building/serving mdBook)
- [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) (For linting markdown files)
- [GNU Aspell](https://sourceforge.net/projects/aspell/) (For spell checking) - Note: For macOs you can use [Homebrew](https://brew.sh/) to install aspell. Just run `brew install aspell`.
- [just](https://github.com/casey/just) (For running commands)
- [Docker](https://docs.docker.com/get-docker/) (Optional: For running the devcontainer)
- [GitHub CLI](https://cli.github.com/) (Optional: For using `gh` to interact with GitHub)

**Setup:**
1. Install all prerequisites listed above
2. Clone the repository:
   ```bash
   git clone https://github.com/security-alliance/frameworks.git
   cd frameworks && git checkout develop
   ```
3. Start the development server:
   ```bash
   just serve
   ```



**(Optional) Authenticate with GitHub CLI**: The GitHub CLI (`gh`) is already preinstalled in the devcontainer. You can authenticate by running `gh auth login` in the terminal, making it easy to interact with GitHub directly from your development environment.

### Local Development with mdBook

If you want to locally experiment with mdBook, you can run `just serve` which will automatically run mdBook when installed, serving the project for local viewing.

### Handling the Summary

Because of how we handle the `.org` and `.dev` domains in different branches, the main outline in `src/SUMMARY.md` is generated on the fly, based on `config/SUMMARY.develop|main`. You'll notice both differ - in `.org` we only publish reviewed frameworks, while in `.dev` we include most everything.

If you need to modify the outline for a framework, please make sure to update it accordingly in `config/SUMMARY.develop`.

You may explore existing issues or open a new one for missing content, although a PR is preferred. If you identify missing or unfinished content, feel free to open a PR. First, check existing PRs or branches to make sure your work is not redundant.

### Attribution and Tags

Most pages have tags below the heading and a way to add attribution and filtering.

#### Page Tags

Tags like "Community Manager", "SRE", etc. help categorize content and make it discoverable. To add tags to your page, include them in the frontmatter:

```markdown
---
tags:
  - Engineer/Developer
  - Security Specialist
  - Devops
  - SRE
---
```

Tags are currently in an exploratory phase. They are displayed at the top of each page and are also used for filtering and navigation throughout the site.

#### Attribution

Contributors are managed through a centralized system:

1. There's a contributor 'database' at `src/config/contributors.json`, where you add contributors or get their information from.

2. The file `src/config/using-contributors.md` contains all the information needed to understand how to add them to your pages.

To add contributors to a page, you can use frontmatter as shown in the using-contributors guide:

```markdown
---
title: Your Page Title
contributors:
  - role: wrote
    users: [mattaereal, charlie_dev]
  - role: reviewed
    users: [fredriksvantes, zedt3ster]
---
```

### Structure and collaboration

The book is supposed to cover all important parts of security for web3 projects.
For contributors, we recommend focusing on specific topics contained in corresponding pages. It's best to own a single topic and work out all the details. Create a new page and add the category to the sidebar if it's not there yet. Join the [discord server](https://discord.gg/securityalliance), let others know what you are working on in the group channel and collaborate with other contributors writing about related topics. If you are working with multiple people on a significant piece of content, you can have a dedicated branch in the repo for easier coordination.

## Style guide

Wiki pages follow standard [Markdown](https://rust-lang.github.io/mdBook/format/markdown.html) with some extensions by [mdBook](https://rust-lang.github.io/mdBook/format/markdown.html).

The audience of this wiki is technical and the content should reflect that. There are many guides on technical and documentation writing you can learn from, for example you can check [this lecture](https://www.youtube.com/watch?v=vtIzMaLkCaM) to get started.

Here are main guidelines to follow when writing this wiki:

- Write in an objective, clear and explanatory tone
- Avoid unnecessary simplifications, describe the technical reality
- Avoid using too long and complex sentences or paragraphs
  - Use concise and clear statements
  - Break down your text using block-quotes, bullet points or images
- Always link your resources and verify them
- Use bullet points or tables for topics which require enumerating
- Highlight keywords to support scanning and skimming through the article
- Provide visualizations to explain the topic better
- When using acronyms or a technical jargon, make sure to introduce it first
- Web3 is changing fast, write the content to be as much future proof as possible
- Don't use LLMs to generate the text
  - We don't accept texts fully generated by AI, however we recommend using it to fix grammar or phrasing
- Consider creating tutorials and hands-on guides documenting technical steps
- Add recommended reading at the top, point to topics which are dependencies of yours
- You can use mermaid diagrams for visualizations

Goal is to produce a credible neutral text which is formal, well-structured, and maintains a clear progression of ideas. The content should be purely technical and shouldn't waste space on introducing high level/well known concepts. Introductory topics are necessary and can use comparisons, historical anecdotes, and concrete examples to make complex concepts more accessible.

### Content standardization

The wiki uses American English over British spelling. Terminology, capitalization and nomenclature should match across all pages. Use [Ethereum.org guide](https://ethereum.org/contributing/style-guide/content-standardization) for the reference.

Usage of images and visualizations is encouraged. If you are using an image created by a third party, make sure its license allows it and provide link to the original. For creating your own visualizations, we suggest [excalidraw.com](https://github.com/excalidraw/excalidraw).

Feel free to use [emojis](https://docsify.js.org/#/emoji?id=emoji) or [icons](https://icongr.am/fontawesome) where it fits, for example in block-quotes.

### Linking resources

When adding an external link, you can use it directly in the text or on the bottom of the page in "Resources" section.

When linking resources use descriptive names, such as [inevitableeth.com](https://inevitableeth.com/) instead of generic phrases like [this wiki](https://inevitableeth.com/).

Don't overwhelm reader with too many resources within the text.

When linking a page within this framework, use a relative path and if it references specific topic within the page, use a link to heading IDs.

For other important links, add a section on the bottom of the page with list of resources. Resources should have a name or short description with a link and alternative link to its archived mirror. We strongly suggest adding a link to the latest snapshot from archive.org.

### In-page notices

We use block-quote notices at the top of the page to provide readers with appropriate context regarding the content of the page.

#### Incomplete pages

Pages with minimal content which need more work to cover the topic need to include a notice:

> ⚠️ This article is a [stub](https://en.wikipedia.org/wiki/Wikipedia:Stub), help the framework by [contributing](/contribute/contributing.md) and expanding it.

## Anything else?

This page is also opened for contributors! Suggest improvements to our style and guidelines in the github repo.

## About this page

Originally based from the [Ethereum Protocol Fellows](https://github.com/eth-protocol-fellows/protocol-studies)
