<div align="center">
  <h1>Secure Deployments & Infrastructure Guide</h1>
  <p><em>Secure CI/CD pipelines and cloud access control management </em></p>
</div>

---

## Overview

When managing cloud servers, hosting infrastructure, and deployment pipelines, it's important to carefully manage permissions to restrict privileged actions from being abused. You also want to be able to respond to critical security and availability events without these restrictions limiting you. Whether you have a dedicated infrastructure engineer or you self manage your servers, you can employ a formal approach to keep your infrastructure secure while allowing you to rapidly respond when needed.

---

## Normal Operations

💡 **Day-to-day infrastructure and cloud operations should be as controlled as possible to prevent and mitigate potential abuse.**

### Access Control Principles

**Automated Actions**
- [ ] Regular deployment permissions should be confined to only automated service accounts running on locked down cloud compute instances
- [ ] Permission to perform deployment and infrastructure change operations must not be granted to any humans
- [ ] If manual actions need to be taken for unique situations, provision access via peer-review JIT access requests or break-glass accounts
- [ ] All infrastructure should be defined in Infrastructure-As-Code (IaC) definitions (e.g. Terraform) in order to support hands-off infrastructure management

**Minimum Permissions**
- [ ] DevOps operators should have the minimum possible permissions to perform their daily duties
- [ ] Grant read-only permissions to monitor assets and assess needed changes
- [ ] Implement least-privilege access across all infrastructure components
- [ ] High levels of permission should only be granted on a temporary basis with enough time only to complete privileged tasks

**Ticket-Based Just-In-Time(JIT) Access Control**
- [ ] **Mandatory Multi-party Approval**: All state-changing operations should require a peer reviewed and approved work order ticket via a system like Jira, Linear, Monday, etc.
- [ ] **Reviewers**: Tickets should be configured to require at least two approvals from separate reviewers (not the implementer). Reviewers should scrutinize the requested permissions against the work to be done and ensure it is the absolute minimum required
- [ ] **Temporary Access**: Temporary permissions should be granted to the implementer for the minimum window required to perform the work. Access should be automatically revoked after the window of time for the change has passed
- [ ] **Scoped Permissions**: Grant only the absolute minimum set of permissions required for the specific changes

**JIT Platforms and Setup**
* AWS:
	* https://aws.amazon.com/blogs/mt/introducing-just-in-time-node-access-using-aws-systems-manager/
	* https://aws.amazon.com/blogs/security/temporary-elevated-access-management-with-iam-identity-center/
* GCP:
	* https://googlecloudplatform.github.io/jit-groups/
* Okta:
	* https://www.okta.com/products/privileged-access/

### Change Management Process

**Testing & Validation**
- [ ] **Dev/Staging First**: Test all changes in development/staging environments before releasing to production against security invariants
- [ ] **Post-Implementation Verification**: Approvers should verify changes after implementation where possible (e.g. on-chain contract deployment state matches what was expected)
- [ ] **Documentation**: Maintain detailed records of all infrastructure changes with the ability to quickly roll back if needed

**Scheduled Changes**
- [ ] **Designated Hours**: Schedule tickets for implementation during specific time windows
- [ ] **Alert System**: Set up monitoring and alerting for any changes that occur outside of those hours

---

## Emergency Response

💡 **Some changes must be made in response to emergency events. The procedure for typical changes will likely be too restrictive in these cases, requiring the option to use a break-glass account to bypass these restrictions when absolutely needed.**

### Break-Glass Account Setup

**Account Architecture**
- [ ] **Individual Accounts**: Each necessary user should have individual break-glass accounts tied to their identity
- [ ] **Service-Specific**: Each service (cloud infra, GitHub, deployment runners, etc.) requires an individual break-glass account
- [ ] **No Bundling**: Avoid bundling via SSO or reused credentials. Each account must be isolated from other break-glass capabilities to reduce impact of usage
- [ ] **Scoped Privileges**: Use elevated permissions but restricted where sensible (e.g., write access to existing assets without full admin privileges)

**Access Control**
- [ ] **Password Manager Vault**: Control access to credentials via password manager vault
- [ ] **Secure Storage**: Implement secure credential storage and retrieval mechanisms. Triple-factor authentication should be used (password, TOPT code or passkey, and biometric verification)

### Post-Usage Procedures

**Immediate Response**
- [ ] **Team Alerts**: Usage of account or credential access should trigger an alarm to the whole team
- [ ] **Post-Mortem Required**: Mandatory post-mortem write-up for any break-glass usage with checks for abuse
- [ ] **Credential Rotation**: Rotate break-glass account credentials after each use
- [ ] **Account Re-provisioning**: Completely tear down and re-provision accounts after each usage

### Response Controls & Trade-offs

**Automated Triggers**
- [ ] **Alarm Integration**: Consider requiring automated triggers (e.g., uptime alarms, forced deployments, ongoing hacks) to be alarming for enabling break-glass access where feasible
- [ ] **Monitoring Integration**: Connect break-glass access to existing monitoring and alerting systems, with their own dedicated channel or at least a high severity that cannot be neglected or suppressed

**Multi-Party Controls**
- [ ] **Two-Party Authorization**: Require multi-party review when instant response time is not absolutely needed and slight coordination delays could be tolerated 
- [ ] **Challenge Periods**: Consider implementing access delay periods (e.g., 15-30 minutes) to allow veto by other users
- [ ] **Escalation Procedures**: Define clear escalation paths for different emergency scenarios. All sensitive manual operations should be well justified

**Incident Response Planning**
- [ ] **Run-Books**: Establish incident response run-books for common scenarios to enable rapid response and reduce the need for privileged access
- [ ] **Permission Modeling**: Model required permissions for each break-glass account. The accounts should be minimally permissive while still allowing recovery and response actions (e.g. rolling back to previous compute images, but not allowing new compute images be force deployed)