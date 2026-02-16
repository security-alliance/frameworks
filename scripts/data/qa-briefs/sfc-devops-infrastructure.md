# QA Brief: sfc-devops-infrastructure

## YOUR TASK

Verify the evaluation claims below. For each control with refs:
1. Read the ACTUAL page content (provided below)
2. Read the control's FULL baselines
3. Check: does the page ACTUALLY meet the baselines claimed in "baselinesMet"?
4. Check: are the "baselinesMissed" correct (is there content that was overlooked)?
5. Check: is the coverage rating ("full"/"partial") justified?

Be STRICT. If the evaluator was too generous, downgrade. If they missed coverage, upgrade.

## EVALUATION CLAIMS TO VERIFY (10 controls with refs)

### di-1.1.4: Development Tools Approval
**Full baselines:**
  1. Evaluation criteria cover IDEs, extensions, plugins, AI-powered tools, and third-party services
  2. Extensions and plugins obtained only from official repositories
  3. AI tools assessed for data privacy risks (does the tool send code to third parties for training or analytics?)
  4. Approved tool list maintained; unapproved tools restricted
  5. Regular reviews of installed tools to identify unused or unrecognized items

**Evaluator's assessment:**
- **/devsecops/integrated-development-environments**  — **partial**
  Met: Extensions and plugins obtained only from official repositories (mentions 'trusted sources')
  Missed: Evaluation criteria cover IDEs, extensions, plugins, AI-powered tools, and third-party services; AI tools assessed for data privacy risks; Approved tool list maintained; unapproved tools restricted; Regular reviews of installed tools
**Gaps:** Evaluation criteria cover IDEs, extensions, plugins, AI-powered tools, and third-party services; AI tools assessed for data privacy risks; Approved tool list maintained; unapproved tools restricted; Regular reviews of installed tools to identify unused or unrecognized items

### di-2.1.1: Repository Security
**Full baselines:**
  1. Role-based access control with least-privilege permissions
  2. Branch protection rules enforced on main/production branches
  3. Signed commits required for all code changes
  4. Multi-party code review required for merges to protected branches
  5. MFA required for all repository members
  6. Repository access reviewed periodically

**Evaluator's assessment:**
- **/secure-software-development/secure-code-repositories-version-control** → Best Practices for Secure Code Repositories — **full**
  Met: Role-based access control with least-privilege permissions; Branch protection rules enforced on main/production branches; Signed commits required for all code changes; Multi-party code review required for merges; MFA required for all repository members
  Missed: Repository access reviewed periodically (audit logs mentioned but not periodic access reviews)
**Gaps:** Repository access reviewed periodically

### di-2.1.2: Secret Scanning
**Full baselines:**
  1. Automated scanning for committed secrets (API keys, private keys, credentials) in all repositories
  2. Pre-commit hooks deployed to prevent secrets from being committed in the first place
  3. Remediation procedures for discovered secrets (immediate rotation, revocation)
  4. Scanning integrated into CI/CD pipeline

**Evaluator's assessment:**
- **/devsecops/continuous-integration-continuous-deployment**  — **partial**
  Met: CI/CD pipeline checks for leaked credentials (partial: automated scanning); Scanning integrated into CI/CD pipeline
  Missed: Pre-commit hooks deployed to prevent secrets from being committed; Remediation procedures for discovered secrets (immediate rotation, revocation)
**Gaps:** Pre-commit hooks deployed to prevent secrets from being committed in the first place; Remediation procedures for discovered secrets (immediate rotation, revocation)

### di-2.1.4: Dependency and Supply Chain Security
**Full baselines:**
  1. Packages obtained from official repositories and trusted sources only
  2. Package names verified against typosquatting patterns before installation
  3. Dependencies scanned for known vulnerabilities before deployment
  4. Dependency version pinning enforced to prevent automatic updates to compromised versions
  5. Regular dependency audits for outdated or vulnerable components
  6. Changelog reviewed for dependency updates to verify expected functionality

**Evaluator's assessment:**
- **/supply-chain/dependency-awareness** → Best Practices for Dependency Awareness — **partial**
  Met: Packages obtained from official repositories and trusted sources only; Dependencies scanned for known vulnerabilities before deployment; Regular dependency audits for outdated or vulnerable components
  Missed: Package names verified against typosquatting patterns before installation; Dependency version pinning enforced to prevent automatic updates; Changelog reviewed for dependency updates to verify expected functionality
**Gaps:** Package names verified against typosquatting patterns before installation; Dependency version pinning enforced to prevent automatic updates to compromised versions; Changelog reviewed for dependency updates to verify expected functionality

### di-3.1.1: Pipeline Security Controls
**Full baselines:**
  1. Pipeline configuration changes require multi-party approval
  2. Separate service accounts with minimal permissions used for pipeline execution
  3. Manual deployment by humans restricted; deployments automated through controlled pipelines
  4. Pipeline and build configurations version-controlled and reviewed
  5. Builds are deterministic with strict dependency sets

**Evaluator's assessment:**
- **/devsecops/continuous-integration-continuous-deployment**  — **partial**
  Met: Builds are deterministic with strict dependency sets; Strict access controls for CI/CD pipelines (partial: limits who can modify)
  Missed: Pipeline configuration changes require multi-party approval; Separate service accounts with minimal permissions used for pipeline execution; Manual deployment by humans restricted; deployments automated through controlled pipelines; Pipeline and build configurations version-controlled and reviewed
**Gaps:** Pipeline configuration changes require multi-party approval; Separate service accounts with minimal permissions used for pipeline execution; Manual deployment by humans restricted; deployments automated through controlled pipelines; Pipeline and build configurations version-controlled and reviewed

### di-3.1.3: Security Testing Integration
**Full baselines:**
  1. Static analysis (SAST) tools integrated into CI/CD pipeline
  2. Dependency vulnerability scanning automated in CI/CD
  3. Security scan results reviewed before deployment approval
  4. Testing and validation performed in staging environments before production deployment

**Evaluator's assessment:**
- **/devsecops/continuous-integration-continuous-deployment**  — **partial**
  Met: Static analysis and dependency scanning integrated into CI/CD; PR testing must pass before merging (implies review)
  Missed: Security scan results reviewed before deployment approval (not explicitly stated); Testing and validation performed in staging environments before production deployment
- **/devsecops/security-testing**  — **partial**
  Met: SAST tools integrated into CI/CD pipeline
  Missed: Dependency vulnerability scanning automated in CI/CD (DAST mentioned, not dependency scanning); Security scan results reviewed before deployment approval; Testing and validation performed in staging environments before production
**Gaps:** Security scan results reviewed before deployment approval; Testing and validation performed in staging environments before production deployment

### di-4.1.1: Infrastructure as Code
**Full baselines:**
  1. All infrastructure defined and managed through code (e.g., Terraform, CloudFormation)
  2. Infrastructure changes deployed through automated pipelines, no manual steps required
  3. Infrastructure changes require multi-party approval
  4. IaC security scanning performed before deployment

**Evaluator's assessment:**
- **/security-automation/infrastructure-as-code**  — **partial**
  Met: All infrastructure defined and managed through code; IaC security scanning performed before deployment
  Missed: Infrastructure changes deployed through automated pipelines, no manual steps required; Infrastructure changes require multi-party approval
**Gaps:** Infrastructure changes deployed through automated pipelines, no manual steps required; Infrastructure changes require multi-party approval

### di-4.1.2: Infrastructure Access Controls
**Full baselines:**
  1. Individual accounts with MFA required; no shared accounts
  2. Privileged access is time-limited and requires multi-party approval (JIT access)
  3. Day-to-day operations use minimum necessary permissions (read-only where possible)
  4. Break-glass accounts established for emergency access with individual accountability
  5. Break-glass usage triggers immediate alerts to the entire team and requires post-incident review
  6. All access activities logged and monitored

**Evaluator's assessment:**
- **/secure-software-development/secure-code-repositories-version-control** → Best Practices for Secure Code Repositories — **partial**
  Met: Individual accounts with MFA required (for repositories); Role-based access control (minimum necessary permissions); All access activities logged and monitored (audit logs)
  Missed: Privileged access is time-limited and requires multi-party approval (JIT access); Break-glass accounts established for emergency access; Break-glass usage triggers immediate alerts and requires post-incident review
**Gaps:** Privileged access is time-limited and requires multi-party approval (JIT access); Break-glass accounts established for emergency access with individual accountability; Break-glass usage triggers immediate alerts to entire team and requires post-incident review

### di-4.1.3: Backup and Disaster Recovery
**Full baselines:**
  1. Critical systems have automated backup procedures
  2. Disaster recovery plan documented with recovery time and recovery point objectives defined
  3. Backup and recovery procedures tested regularly
  4. Backups stored independently of primary infrastructure

**Evaluator's assessment:**
- **/secure-software-development/secure-code-repositories-version-control** → Secure Version Control Practices — **partial**
  Met: Regular backups of code repository; Backups stored independently (secure, offsite location)
  Missed: Critical systems have automated backup procedures; Disaster recovery plan documented with RTO and RPO defined; Backup and recovery procedures tested regularly
**Gaps:** Critical systems have automated backup procedures (beyond just code repos); Disaster recovery plan documented with recovery time and recovery point objectives defined; Backup and recovery procedures tested regularly

### di-4.1.4: Cloud Security Monitoring
**Full baselines:**
  1. Cloud security configurations continuously monitored for drift and unauthorized changes
  2. Administrative actions trigger alerts
  3. Cloud provider security notifications subscribed to and promptly reviewed
  4. Comprehensive logging enabled (e.g., CloudTrail, Azure Monitor, Google Cloud Logging)
  5. Multi-cloud strategies considered to reduce single-provider dependency

**Evaluator's assessment:**
- **/infrastructure/cloud** → Cloud Infrastructure — **partial**
  Met: Cloud security configurations monitored (comprehensive logging, monitoring, threat detection); Administrative actions trigger alerts (real-time incident response); Comprehensive logging enabled (AWS CloudTrail, Azure Monitor, Google Cloud Logging)
  Missed: Cloud provider security notifications subscribed to and promptly reviewed; Multi-cloud strategies considered to reduce single-provider dependency
**Gaps:** Cloud provider security notifications subscribed to and promptly reviewed; Multi-cloud strategies considered to reduce single-provider dependency

## FALSE-NEGATIVE CHECK (5 controls marked "no coverage")

Verify these truly have no relevant framework page. If any page below partially covers them, note it.

### di-1.1.1: DevOps Security Owner
**Baselines:** Accountability scope covers policy maintenance, security reviews, access control oversight, pipeline governance, and incident escalation

### di-1.1.2: DevOps Security Policy
**Baselines:** Policy covers environment standards, access controls, deployment procedures, code management, and supply chain security; Accessible to all developers and infrastructure operators; Reviewed at least annually and after significant changes (security incidents, technology shifts, organizational restructuring)

### di-1.1.3: Development Environment Isolation
**Baselines:** Development activities performed in containerized or virtualized environments; Each code repository has its own isolated environment to prevent cross-contamination; Production credentials not accessible from development environments (+2 more)

### di-2.1.3: External Contributor Review
**Baselines:** Additional approvers required for all external code contributions; Code contributions tracked; unexpected changes flagged (e.g., commit rewrites, unprompted edits); External collaborators restricted to minimum necessary repository permissions (+1 more)

### di-3.1.2: Secrets Management
**Baselines:** Dedicated secrets management system used (not environment variables in plain text); Secrets never stored in source code or unencrypted configuration files; Production secrets not directly accessible by humans (+2 more)

---

## FRAMEWORK PAGES (7 pages)

### PAGE: /devsecops/continuous-integration-continuous-deployment

# Continuous Integration and Continuous Deployment (CI/CD)




Continuous Integration and Continuous Deployment are there to ensure good code quality and create rapid and secure
deployments. Some best practices are:

1. Ensure every PR undergoes CI testing (e.g., GitHub Actions) that must pass before merging. CI tests should at least
  include unit tests, integration tests, and checks for known vulnerabilities in dependencies.
2. The CI/CD pipeline should check for misconfigurations and leaked credentials.
3. Produce deterministic builds with a strict set of dependencies and/or a build container that can reliably produce the
  same results on different machines.
4. Integrate security scanning tools to detect vulnerabilities in code and dependencies during the CI process.
5. Use isolated environments for building and testing to prevent contamination between different stages of the pipeline.
6. Implement strict access controls for CI/CD pipelines to limit who can modify the pipeline configurations.

---

---

### PAGE: /devsecops/integrated-development-environments

# Integrated Development Environments (IDEs)




Integrated Development Environments (IDEs) are essential tools for developers, but they also need to be secured.
Consider implementing the following best practices:

1. Ensure IDEs are configured securely, with plugins and extensions only installed from trusted sources. Some IDEs have
  features that allow for automated execution of files in folders. Use restricted mode if you don't fully trust a project.
2. Keep IDEs and their plugins/extensions up-to-date to protect against vulnerabilities.
3. Integrate static code analysis tools within the IDE to catch security issues early in the development process.
4. Configure IDEs to follow the principle of least privilege, limiting access to sensitive information and systems.
5. Ensure that potential development environments are isolated from production environments.

---

---

### PAGE: /devsecops/security-testing

# Security Testing




Security testing is a crucial part of the DevSecOps process, as it helps identify vulnerabilities early on so that they
can be taken care of before they become an issue in production.

1. Integrate SAST tools into the CI/CD pipeline to analyze source code for vulnerabilities.
2. Use DAST tools to test running applications for security issues.
3. Combine SAST and DAST approaches with IAST tools for comprehensive security testing.
4. Implement fuzz testing to discover security vulnerabilities by inputting random data.

---

---

### PAGE: /infrastructure/cloud

# Cloud Infrastructure




Securing your cloud infrastructure could be considered as important as securing your decentralized application, as a lot
of users will be interacting with your dapp through the cloud provider. Some best practices to consider are:

1. Implement strict access controls and identity management to ensure that only authorized individuals can interact with
cloud resources. Use role-based access control (RBAC) and multi-factor authentication (MFA).
2. Encrypt data both in transit and at rest. Use managed encryption keys or bring your own keys (BYOK) for enhanced
security.
3. Configure virtual private clouds (VPCs), implement firewalls, and monitor network traffic to protect against
unauthorized access and threats.
4. Set up comprehensive logging, monitoring, and threat detection systems to identify and respond to security incidents
in real-time. Use services like AWS CloudTrail, Azure Monitor, and Google Cloud Logging.
5. Implement high availability, data backup, and disaster recovery plans to protect against service disruptions. Use
automated fail-over and replication strategies.
6. Ensure compliance with regulatory requirements (e.g., GDPR, MiCA).

## Cloud Provider Hardening Guides

All cloud providers have hardening guides that provide step-by-step instructions and best practices for securing cloud
infrastructure:

- **AWS**: [Security, Identity, and Compliance](https://aws.amazon.com/architecture/security-identity-compliance/)
- **Azure**:
[Best Practices and Patterns](https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns)
- **GCP**: [Security Best Practices](https://cloud.google.com/security/best-practices)

## Open Source Tools

To aid with vulnerability detection and compliance, you could consider using the following open-source tools:

- **CloudSploit**: [CloudSploit](https://github.com/aquasecurity/cloudsploit)
- **Prowler**: [Prowler](https://github.com/prowler-cloud/prowler)
- **S3Scanner (AWS)**: [S3Scanner](https://github.com/sa7mon/S3Scanner)
- **Zeus (AWS)**: [Zeus](https://github.com/DenizParlak/Zeus)

---

---

### PAGE: /secure-software-development/secure-code-repositories-version-control

# Secure Code Repositories and Version Control




Managing secure code repositories and having version control practices helps protect your project from unauthorized
access and ensuring the integrity of your project.

## Best Practices for Secure Code Repositories

1. **Access Control**
   - Implement strict access controls to limit who can view, modify, and commit code.
   - Use role-based access control (RBAC) to grant permissions based on the user's role within the organization.

2. **Multi-Factor Authentication (MFA)**
   - Require MFA for all users accessing the code repository to add an extra layer of security.
   - Use hardware tokens or authentication apps for stronger security.

3. **Branch Protection**
   - Enable branch protection rules to prevent unauthorized changes to critical branches such as main/master.
   - Require code reviews and approvals by another person before changes can be merged into the main/master branch.

4. **Audit Logs**
   - Enable audit logging to track all activities within the repository.
   - Regularly review logs to detect any suspicious activities or unauthorized access attempts.

## Secure Version Control Practices

1. **Commit Signing**
   - Require developers to sign their commits with GPG keys to verify the authenticity of the code changes.
   - Enforce commit signing policies in the version control system.

2. **Regular Backups**
   - Regularly back up the code repository to prevent data loss.
   - Store backups in a secure, offsite location.

3. **Continuous Integration/Continuous Deployment (CI/CD)**
   - Integrate security checks into the CI/CD pipeline to automatically scan code for vulnerabilities.
   - Ensure that only tested and approved code is deployed to production.

---

---

### PAGE: /security-automation/infrastructure-as-code

# Infrastructure as Code




Infrastructure as Code (IaC) is the managing and provisioning computing infrastructure through machine-readable
definition files, rather than manual  configuration or interactive configuration tools. Automating security within IaC
helps ensure that infrastructure is configured securely and consistently.

## Benefits of Automating Security in IaC

1. **Consistency**
   - Ensures that infrastructure is provisioned and configured consistently across environments.
   - Reduces the risk of configuration drift and security misconfigurations.

2. **Scalability**
   - Enables scalable deployment of secure infrastructure.
   - Simplifies management of large-scale environments.

3. **Version Control**
   - Treats infrastructure configurations as code, allowing version control and change tracking.
   - Facilitates rollback to previous configurations if issues arise.

## Best Practices for Secure IaC

1. **Use Trusted Modules**
   - Use trusted and verified modules or templates for infrastructure provisioning.
   - Avoid using unverified or outdated modules that may contain vulnerabilities.

2. **Implement Least Privilege**
   - Ensure that infrastructure components have the minimum necessary permissions.
   - Use role-based access control (RBAC) to manage permissions.

3. **Automate Security Scans**
   - Integrate security scanning tools into the IaC pipeline to automatically detect and remediate vulnerabilities.
   - Use tools like Checkov, tfsec, and Terrascan to scan Terraform configurations for security issues.

4. **Encrypt Sensitive Data**
   - Encrypt sensitive data at rest and in transit within the infrastructure.
   - Use managed encryption services provided by cloud providers.

5. **Regularly Update IaC Templates**
   - Keep IaC templates and modules up to date with the latest security patches and best practices.
   - Regularly review and update configurations to address new security threats.

## Tools for Automating Security in IaC

1. **Terraform**
   - A widely used IaC tool that allows for the automated provisioning of infrastructure across various cloud providers.
   - Supports integration with security scanning tools like tfsec and Checkov.

2. **AWS CloudFormation**
   - An IaC service provided by AWS for modeling and setting up AWS resources.
   - Supports AWS Config rules for automated compliance checks.

3. **Azure Resource Manager (ARM) Templates**
   - IaC templates for deploying and managing Azure resources.
   - Integrates with Azure Policy for enforcing security policies.

4. **Ansible**
   - An open-source automation tool for configuration management and application deployment.
   - Supports security roles and playbooks for automating security configurations.

---

---

### PAGE: /supply-chain/dependency-awareness

# Dependency Awareness




Dependency awareness is the practice of understanding and managing all the external libraries, frameworks, and
components that a software project relies on. Dependencies can introduce vulnerabilities and risks, which means it's
important to keep track of them and ensure they are secure.

## Importance of Dependency Awareness

1. **Security Risks**
   - Dependencies can contain vulnerabilities that may be exploited by threat actors.

2. **Compliance**
   - Ensuring that dependencies comply with licensing and regulatory requirements is essential to avoid legal issues.

3. **Maintainability**
   - Understanding dependencies and their impact on the project will help understand if it's possible to update a
   dependency used by your application.

## Best Practices for Dependency Awareness

1. **Use Dependency Management Tools**
   - Leverage tools that can automatically track and manage dependencies. Examples include:
     - **Web2:**
       - **Snyk:** Monitors and fixes vulnerabilities in dependencies.
       - **Dependabot:** Automatically updates dependencies in GitHub projects.
     - **Solidity:**
       - **Ethlint:** Analyzes and lints Solidity code, including dependencies.
       - **MythX:** Scans for vulnerabilities in smart contract dependencies.

2. **Regularly Update Dependencies**
   - Regularly update dependencies to the latest secure versions after verifying them.

3. **Monitor for Vulnerabilities**
   - Continuously monitor dependencies for known vulnerabilities using tools like Snyk, npm audit, and GitHub Security
   Alerts.

4. **Audit Dependencies**
   - Perform regular audits of dependencies to ensure they are necessary and secure. Remove unused or outdated
   dependencies.

5. **Use Trusted Sources**
   - Only use dependencies from trusted and reputable sources. Avoid using unverified or poorly maintained libraries.

---

---

