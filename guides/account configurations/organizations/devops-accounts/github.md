<div align="center"> <img src="../../../images/guides/github.svg" alt="Github Logo" width="64" height="64"> <h2><a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a> Configuration Guide</h2> </div>

## Repository Settings

#### General Settings
- [ ]  General > Danger Zone > Repository visibility > **Private**
- [ ]  Collaborators and teams > Review access and remove any unnecessary
    - [ ]  Ensure there are no more than 3 admins

#### Branch Protection
- [ ]  Branches > Branch protection rules > For each branch that triggers automated deployments, set the following protections:
    - Protect matching branches > Require a pull request before merging
        - Require approvals > **2+** recommended
    - Rules applied to everyone including administrators > Allow force pushes > **Off**

#### Repository Rules
- Rules > Rulesets > New ruleset > New branch ruleset:
    - [ ]  **Name**: EnforceSignedCommits
        - **Targets**: All branches
        - **Rules**:
            - Require signed commits > **On**
    - [ ]  **Name**: BlockForcePushes
        - **Targets**: All branches
        - **Rules**:
            - Block force pushes > **On**

#### Actions Security
- Actions >
    - [ ]  Actions permissions > Set minimum permissions needed
        - **Disable actions** - if not needed
        - **Allow organization actions and reusable workflows** - if only internal actions are used
        - **Allow organization, and select non-organization, actions and reusable workflows** - if external actions are used
    - [ ]  Fork pull request workflows > Run workflows from fork pull requests > **Off**
    - [ ]  Workflow permissions > **Read repository contents and packages permissions**
        - [ ]  Allow Github Actions to create and approve pull requests > **Off**
    - [ ]  Access > **Not accessible**

#### Security Features
- [ ]  Webhooks > Review webhooks and delete any unnecessary or overly permissive
- [ ]  Pages > Branch > **None** (to disable)
- Code security >
    - [ ]  Dependency graph > **Enabled**
    - [ ]  Dependabot alerts > **Enabled**
    - [ ]  Dependabot security updates > **Disabled**
    - [ ]  Grouped security updates > **Disabled**
    - [ ]  Dependabot version updates > **Disabled**
    - [ ]  Access to alerts > No additional users (only admins)

#### Access Control
- [ ]  Deploy keys > Remove all [[1]](#deploy-keys-warning)
- [ ]  Secrets and variables > Review secrets and variables and remove any unnecessary
- [ ]  GitHub Apps > Installed GitHub Apps > Review configurations and uninstall any unnecessary
    - [ ]  Review permissions are appropriate and that repository access is scoped only to relevant repositories

## Organization Settings

#### Member Privileges
- Member privileges >
    - [ ]  Base permissions > Any other than **Admin**
    - [ ]  Repository creation > Public > **Off**
    - [ ]  Repository forking > Allow forking of private repositories > **Off**
    - [ ]  Projects base permissions > Any other than **Admin**
    - [ ]  Integration access requests > Allow integration requests from outside collaborators > **Off**
    - Admin repository permissions >
        - [ ]  Allow members to change repository visibilities for this organization > **Off**
        - [ ]  Allow members to delete or transfer repositories for this organization > **Off**
        - [ ]  Allow repository administrators to delete issues for this organization > **Off**
    - [ ]  Member team permissions > Allow members to create teams > **Off**

#### Organization Rules
- Repository > Rulesets > New ruleset > New branch ruleset: [[2]](#enterprise-features)
    - [ ]  **Name**: EnforceSignedCommits
        - **Targets > Target repositories**: All branches
        - **Rules > Branch rules**:
            - Require signed commits > **On**
    - [ ]  **Name**: BlockForcePushes
        - **Targets > Target repositories**: All branches
        - **Rules > Branch rules**:
            - Block force pushes > **On**

#### Project and Actions Settings
- [ ]  Planning > Projects > Allow members to change project visibilities for this organization > **Off**
- Actions > General >
    - Policies > **All repositories**
        - [ ]  **Allow organization actions and reusable workflows** or **Allow organization, and select non-organization, actions and reusable workflows**
    - [ ]  Approval for running fork pull request workflows from contributors > **Require approval for all external contributors**
    - [ ]  Fork pull request workflows in private repositories > Run workflows from fork pull requests > **On**
    - [ ]  Workflow permissions > **Read repository contents and packages permissions**
        - [ ]  Allow GitHub Actions to create and approve pull requests > **Off**

#### Security and Access
- [ ]  Webhooks > Review and remove any unnecessary
    - [ ]  For each webhook, ensure SSL verification is enabled
- [ ]  Packages > Package creation > Public > **Disabled**
- Authentication security >
    - [ ]  Require two-factor authentication for everyone in the organization. > **On**
        - [ ]  Only allow secure two-factor methods > **On**
- [ ]  Deploy keys > **Disabled**

#### Code Security Configuration
- Code security > Configurations > New configuration:
    - Dependency graph and Dependabot >
        - [ ]  Dependency graph > **Enabled**
        - [ ]  Dependabot alerts > **Enabled**
    - [ ]  Code scanning > Default setup > **Enabled**
    - [ ]  Secret scanning >
        - [ ]  Alerts > **Enabled**
        - [ ]  Validity checks > **Disabled**
        - [ ]  Non-provider patterns > **Enabled**
        - [ ]  Push protection > **Enabled**
    - [ ]  Policy >
        - [ ]  Use as default for newly created repositories > **All repositories**
        - [ ]  Enforce configurations > **Enforce**
    - [ ]  **Save configuration** and **Apply to > All repositories**

#### Access Management
- [ ]  Secrets and variables > Review secrets and variables and remove any unnecessary
- [ ]  GitHub Apps > Installed GitHub Apps > Review configurations and uninstall any unnecessary
    - [ ]  Review permissions are appropriate and that repository access is scoped only to relevant repositories
- [ ]  OAuth app policy > Review policies and edit/deny any unnecessary
- Personal access tokens >
    - [ ]  **Restrict access via fine-grained personal access tokens**
    - [ ]  **Require administrator approval**
    - [ ]  **Restrict access via personal access tokens (classic)**
    - [ ]  **Enroll** [[3]](#audit-logs)

---

## Notes

### <a id="deploy-keys-warning"></a>[1] Deploy Keys Warning
Do not use deploy keys, they are possession-based access tokens that are a significant security risk. Use [GitHub Apps](https://docs.github.com/en/apps/overview) instead.

### <a id="enterprise-features"></a>[2] Enterprise Features
This is only available if you have a GitHub Enterprise plan. If you do not, you can set these same rules at the repo level instead.

### <a id="audit-logs"></a>[3] Audit Logs
It is recommended to regularly review audit logs for your organization at Logs > Audit log.
