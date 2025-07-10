# Security Frameworks content repository

Official repository to the Security Frameworks by SEAL. This repository contains the entire structure and contents of the frameworks. Feel free to suggest from new categories to grammar corrections. Collaboration is open to everyone. **This is a work in progress.**

If you want to know more about the frameworks or take a peek at the live book go to the following branches: [Main](frameworks.securityalliance.org), [Development](frameworks.securityalliance.dev).

## Quick installation and local setup

1. `gh repo clone security-alliance/frameworks`
2. `git checkout develop`
3. `cargo install mdbook mdbook-admonish`
4. `./serve.sh`

## Collaboration

There are currently several ways to collaborate:

1. Using the "Suggest an edit" button on any page to make quick edits
2. Contributing to a specific framework through its dedicated branch
3. Forking the repository and creating a pull request to the develop branch
4. Commenting directly on the deployed version

> ⚠️ Please sign and verify every commit. If you've accidentally created unsigned
> commits in your history, you can resolve them by setting up [signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification#gpg-commit-signature-verification)
> on github and re-writing your history using the below commands.
>
> ```
> git pull origin develop
> git reset --soft develop
> git commit -s -m "Commit Message"
> git push --force
> ```

### Framework-specific branches

Before contributing, check if there's a [Steward](src/contribute/stewards.md) for the specific framework you're interested in, and reach out. We usually have separate branches pre-develop for frameworks with stewards.

The naming convention is `fw_framework_name`, for example `fw_opsec`, `fw_community_mgmt`. Ideally, you'll fork these framework-specific branches, as they typically have more updated information than what's available in the develop branch.

After making your changes:

1. Submit a PR to the framework-specific branch and let the steward know
2. After reviews, a PR can be submitted from the framework branch to the develop branch

If there's no specific branch created, that framework is still "headless," which means you can become its steward! See more in the [Stewards](src/contribute/stewards.md) section.

### Comments

To comment on the live version of the book under development, you will need to log in to your Vercel account. Please visit [this link](https://frameworks-git-develop-seal-frameworks.vercel.app/?_vercel_share=zOI0Q3riUfDv1Lq1IylFz2hXQzYPcmLp), which includes a read access token. A floating window will appear at the bottom, and you'll be ready to go.

### Pull requests

1. Fork the repository. Click on the "Fork" button at the top right corner of the page.
2. Clone the forked repository to your local machine. Open your terminal or command prompt.
   `git clone https://github.com/your-username/frameworks.git`
3. Check if there's a framework-specific branch you should be working on. If yes, use that branch instead of develop.
4. Otherwise, make sure you're in the develop branch:
   `git checkout develop`
5. Inside the folder create a new branch based on the appropriate branch:
   `git checkout -b your-feature-branch`
6. Make your changes.
7. If adding new pages, consider adding appropriate tags in the frontmatter. Example:

```
---
tags:
  - Engineer/Developer
  - Security Specialist
  - Devops
  - SRE
---
```

8. If adding significant content, add attribution using the contributors system (see [using-contributors.md](src/config/using-contributors.md)).
9. Make sure your changes don't break anything by testing it in the local setup:
   `./serve.sh`
10. Commit your changes:
    `git add .`
11. Commit the changes with a descriptive message:
    `git commit -S -m "Fixing typos and improving readability on XXX section"`
12. Push the changes to your forked repository:
    `git push origin your-feature-branch`
13. Create a pull request. Go to your forked repository on GitHub. You should see a "Compare & pull request" button. Click on it. Provide a descriptive title and description for your pull request.
14. Click on the "Create pull request" button.
15. Wait for review. Once your pull request is approved, and no more changes are needed, we will merge it into the appropriate branch.
16. Congratulations! Your changes are now part of the security frameworks!

## Editor area

Editors merge PRs and push suggestions to the main branch which will be reflected on the live book.

1. `git checkout main`
2. `git fetch origin develop`
3. `git merge origin/develop`
4. Manually merge files, solve conflicts and add a description.

- Using the `serve.sh` script instead of mdBook `serve` command is needed to be able to see properly the local deployment.
