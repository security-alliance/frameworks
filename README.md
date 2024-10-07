# Security Frameworks content repository
Official repository to the Security Frameworks by SEAL. This repository contains the entire
structure and contents of the frameworks. Feel free to suggest from new categories to grammar
corrections. Collaboration is open to everyone. **This is a work in progress.**

If you want to know more about the frameworks or take a peek at the live book go to the following
branches below: [Main](https://seal-frameworks.vercel.app/),
[Development](https://frameworks-git-develop-seal-frameworks.vercel.app/?_vercel_share=zOI0Q3riUfDv1Lq1IylFz2hXQzYPcmLp).

Production will be at [frameworks.securityalliance.org](https://frameworks.securityalliance.org),
but not yet available.

## Quick installation and local setup
1. `gh repo clone security-alliance/frameworks`
2. `git checkout develop`
3. `cargo install mdbook mdbook-admonish mdbook-catppuccin`
4. `./serve.sh`

## Collaboration
There are currently two ways to collaborate. The first one is by logging from your vercel account
and commenting directly on the deployed version of the book, and the second one is by forking the
repository and creating a pull request.

### Comments
To comment on the live version of the book under development, you will need to log in to your Vercel account. Please visit [this link](https://frameworks-git-develop-seal-frameworks.vercel.app/?_vercel_share=zOI0Q3riUfDv1Lq1IylFz2hXQzYPcmLp), which includes a read access token. A floating window will appear at the bottom, and you'll be ready to go.

### Pull requests
1. Fork the repository by clicking on the "Fork" button at the top-right corner of the page.
2. Clone the forked repository to your local machine. Open your terminal or command prompt and run: `git clone https://github.com/your-username/frameworks.git`
3. Make sure you're in the develop branch: `git checkout develop`
4. Create a feature branch from develop: `git checkout -b develop-{feature}`
5. Make your changes.
6. Make sure your changes don't break anything by testing it locally ([see above](#quick-installation-and-local-setup)): `./serve.sh`.
7. Commit the changes with a descriptive message: `git commit -am "Fixing typos and improving readability on XXX section"`
8. Push the changes to your forked repository: `git push origin develop-{feature}`
9. Create a pull request. Go to your forked repository on GitHub. Click on the "Compare & pull request" button in the top-right. Provide a descriptive title and description for your pull request.
10. Click on the "Create pull request" button.
11. Wait for review. Once your pull request is approved, and no more changes are needed, we will merge it into the main repository.
12. Congratulations! Your changes are now part of the Security Frameworks!

# Editor area
Editors merge PRs and push suggestions to the main branch which will be reflected on the live book.
1. `git checkout main`
2. `git fetch origin develop`
3. `git merge origin/develop`
4. Manually merge files, solve conflicts and add a description.

## caveats
- Using the `serve.sh` script instead of mdBook `serve` command is needed to be able to see properly the local deployment.