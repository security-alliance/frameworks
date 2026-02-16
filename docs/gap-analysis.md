# SEAL Certs ↔ Frameworks Gap Analysis (Verified)

_Generated 2026-02-16 — LLM-verified coverage assessment_

## Summary

| Metric | Count | % |
|--------|-------|---|
| Total controls | 111 | 100% |
| ✅ Full coverage (≥1 full ref) | 22 | 20% |
| ⚠️ Partial coverage only | 69 | 62% |
| ❌ No coverage | 20 | 18% |
| Gap baselines (total) | 247 | — |

## sfc-devops-infrastructure (0✅ 11⚠️ 4❌)

### ❌ di-1.1.1: DevOps Security Owner


**Gaps (1):**
- ❌ Accountability scope covers policy maintenance, security reviews, access control oversight, pipeline governance, and incident escalation

### ❌ di-1.1.2: DevOps Security Policy


**Gaps (3):**
- ❌ Policy covers environment standards, access controls, deployment procedures, code management, and supply chain security
- ❌ Accessible to all developers and infrastructure operators
- ❌ Reviewed at least annually and after significant changes

### ⚠️ di-1.1.3: Development Environment Isolation

🟡 **[/devsecops/integrated-development-environments](/devsecops/integrated-development-environments)**  (partial)
- Met: See QA notes: Evaluator missed coverage. IDE page states 'Ensure that potential development environments are isolated from production environments' (addresses baseline about production credential isolation). CI/CD 

**Gaps (5):**
- ❌ Development activities performed in containerized or virtualized environments
- ❌ Each code repository has its own isolated environment to prevent cross-contamination
- ❌ Production credentials not accessible from development environments
- ❌ Separate accounts or profiles for development vs. privileged operations
- ❌ Code execution sandboxed to prevent host system compromise

### ⚠️ di-1.1.4: Development Tools Approval

🟡 **[/devsecops/integrated-development-environments](/devsecops/integrated-development-environments)**  (partial)
- Met: Extensions and plugins obtained only from official repositories (mentions 'trusted sources')
- Missed: Evaluation criteria cover IDEs, extensions, plugins, AI-powered tools, and third-party services; AI tools assessed for data privacy risks; Approved tool list maintained; unapproved tools restricted; Regular reviews of installed tools

**Gaps (4):**
- ❌ Evaluation criteria cover IDEs, extensions, plugins, AI-powered tools, and third-party services
- ❌ AI tools assessed for data privacy risks
- ❌ Approved tool list maintained; unapproved tools restricted
- ❌ Regular reviews of installed tools to identify unused or unrecognized items

### ⚠️ di-2.1.1: Repository Security

🟡 **[/secure-software-development/secure-code-repositories-version-control](/secure-software-development/secure-code-repositories-version-control)** → Best Practices for Secure Code Repositories (partial)
- Met: Role-based access control with least-privilege permissions; Branch protection rules enforced on main/production branches; Signed commits required for all code changes; Multi-party code review required for merges; MFA required for all repository members
- Missed: Repository access reviewed periodically (audit logs mentioned but not periodic access reviews)

**Gaps (1):**
- ❌ Repository access reviewed periodically

### ⚠️ di-2.1.2: Secret Scanning

🟡 **[/devsecops/continuous-integration-continuous-deployment](/devsecops/continuous-integration-continuous-deployment)**  (partial)
- Met: CI/CD pipeline checks for leaked credentials (partial: automated scanning); Scanning integrated into CI/CD pipeline
- Missed: Pre-commit hooks deployed to prevent secrets from being committed; Remediation procedures for discovered secrets (immediate rotation, revocation)

**Gaps (2):**
- ❌ Pre-commit hooks deployed to prevent secrets from being committed in the first place
- ❌ Remediation procedures for discovered secrets (immediate rotation, revocation)

### ❌ di-2.1.3: External Contributor Review


**Gaps (4):**
- ❌ Additional approvers required for all external code contributions
- ❌ Code contributions tracked; unexpected changes flagged
- ❌ External collaborators restricted to minimum necessary repository permissions
- ❌ CI/CD pipelines do not automatically execute for external contributor PRs without approval

### ⚠️ di-2.1.4: Dependency and Supply Chain Security

🟡 **[/supply-chain/dependency-awareness](/supply-chain/dependency-awareness)** → Best Practices for Dependency Awareness (partial)
- Met: Packages obtained from official repositories and trusted sources only; Dependencies scanned for known vulnerabilities before deployment; Regular dependency audits for outdated or vulnerable components
- Missed: Package names verified against typosquatting patterns before installation; Dependency version pinning enforced to prevent automatic updates; Changelog reviewed for dependency updates to verify expected functionality

**Gaps (3):**
- ❌ Package names verified against typosquatting patterns before installation
- ❌ Dependency version pinning enforced to prevent automatic updates to compromised versions
- ❌ Changelog reviewed for dependency updates to verify expected functionality

### ⚠️ di-3.1.1: Pipeline Security Controls

🟡 **[/devsecops/continuous-integration-continuous-deployment](/devsecops/continuous-integration-continuous-deployment)**  (partial)
- Met: Builds are deterministic with strict dependency sets; Strict access controls for CI/CD pipelines (partial: limits who can modify)
- Missed: Pipeline configuration changes require multi-party approval; Separate service accounts with minimal permissions used for pipeline execution; Manual deployment by humans restricted; deployments automated through controlled pipelines; Pipeline and build configurations version-controlled and reviewed

**Gaps (4):**
- ❌ Pipeline configuration changes require multi-party approval
- ❌ Separate service accounts with minimal permissions used for pipeline execution
- ❌ Manual deployment by humans restricted; deployments automated through controlled pipelines
- ❌ Pipeline and build configurations version-controlled and reviewed

### ❌ di-3.1.2: Secrets Management


**Gaps (5):**
- ❌ Dedicated secrets management system used (not environment variables in plain text)
- ❌ Secrets never stored in source code or unencrypted configuration files
- ❌ Production secrets not directly accessible by humans
- ❌ Pipeline secrets accessible only by service accounts
- ❌ Secret rotation schedule defined; rotation triggered immediately after suspected compromise

### ⚠️ di-3.1.3: Security Testing Integration

🟡 **[/devsecops/continuous-integration-continuous-deployment](/devsecops/continuous-integration-continuous-deployment)**  (partial)
- Met: Static analysis and dependency scanning integrated into CI/CD; PR testing must pass before merging (implies review)
- Missed: Security scan results reviewed before deployment approval (not explicitly stated); Testing and validation performed in staging environments before production deployment
🟡 **[/devsecops/security-testing](/devsecops/security-testing)**  (partial)
- Met: SAST tools integrated into CI/CD pipeline
- Missed: Dependency vulnerability scanning automated in CI/CD (DAST mentioned, not dependency scanning); Security scan results reviewed before deployment approval; Testing and validation performed in staging environments before production

**Gaps (2):**
- ❌ Security scan results reviewed before deployment approval
- ❌ Testing and validation performed in staging environments before production deployment

### ⚠️ di-4.1.1: Infrastructure as Code

🟡 **[/security-automation/infrastructure-as-code](/security-automation/infrastructure-as-code)**  (partial)
- Met: All infrastructure defined and managed through code; IaC security scanning performed before deployment
- Missed: Infrastructure changes deployed through automated pipelines, no manual steps required; Infrastructure changes require multi-party approval

**Gaps (2):**
- ❌ Infrastructure changes deployed through automated pipelines, no manual steps required
- ❌ Infrastructure changes require multi-party approval

### ⚠️ di-4.1.2: Infrastructure Access Controls

🟡 **[/secure-software-development/secure-code-repositories-version-control](/secure-software-development/secure-code-repositories-version-control)** → Best Practices for Secure Code Repositories (partial)
- Met: Individual accounts with MFA required (for repositories); Role-based access control (minimum necessary permissions); All access activities logged and monitored (audit logs)
- Missed: Privileged access is time-limited and requires multi-party approval (JIT access); Break-glass accounts established for emergency access; Break-glass usage triggers immediate alerts and requires post-incident review

**Gaps (3):**
- ❌ Privileged access is time-limited and requires multi-party approval (JIT access)
- ❌ Break-glass accounts established for emergency access with individual accountability
- ❌ Break-glass usage triggers immediate alerts to entire team and requires post-incident review

### ⚠️ di-4.1.3: Backup and Disaster Recovery

🟡 **[/secure-software-development/secure-code-repositories-version-control](/secure-software-development/secure-code-repositories-version-control)** → Secure Version Control Practices (partial)
- Met: Regular backups of code repository; Backups stored independently (secure, offsite location)
- Missed: Critical systems have automated backup procedures; Disaster recovery plan documented with RTO and RPO defined; Backup and recovery procedures tested regularly

**Gaps (3):**
- ❌ Critical systems have automated backup procedures (beyond just code repos)
- ❌ Disaster recovery plan documented with recovery time and recovery point objectives defined
- ❌ Backup and recovery procedures tested regularly

### ⚠️ di-4.1.4: Cloud Security Monitoring

🟡 **[/infrastructure/cloud](/infrastructure/cloud)** → Cloud Infrastructure (partial)
- Met: Cloud security configurations monitored (comprehensive logging, monitoring, threat detection); Administrative actions trigger alerts (real-time incident response); Comprehensive logging enabled (AWS CloudTrail, Azure Monitor, Google Cloud Logging)
- Missed: Cloud provider security notifications subscribed to and promptly reviewed; Multi-cloud strategies considered to reduce single-provider dependency

**Gaps (2):**
- ❌ Cloud provider security notifications subscribed to and promptly reviewed
- ❌ Multi-cloud strategies considered to reduce single-provider dependency

## sfc-dns-registrar (4✅ 7⚠️ 5❌)

### ❌ dns-1.1.1: Domain Security Owner


**Gaps (1):**
- ❌ Accountability scope covers policy maintenance, security reviews, renewal management, access control oversight, and incident escalation

### ❌ dns-1.1.2: Domain Inventory and Documentation


**Gaps (2):**
- ❌ Registry includes domain name, ownership, purpose, expiration date, registrar, DNS record configurations, security settings (DNSSEC, CAA), and registrar account configurations
- ❌ Accessible to relevant team members

### ❌ dns-2.1.1: Domain Classification and Compliance


**Gaps (4):**
- ❌ Classification considers criticality, financial exposure, and operational impact
- ❌ Domains where users may transact funds or that are external-facing classified at the highest tier
- ❌ Each classification maps to specific security requirements (DNSSEC, locks, monitoring frequency, access controls)
- ❌ Compliance verified at least annually through configuration review against documented standards

### ✅ dns-2.1.2: Enterprise Registrar Security Requirements

🟢 **[/infrastructure/domain-and-dns-security/registrar-and-locks](/infrastructure/domain-and-dns-security/registrar-and-locks)** → Choosing a Secure Registrar (full)
- Met: Registrar supports registry locks (server-level EPP locks); Registrar supports hardware security key MFA (FIDO2/WebAuthn); Registrar has no history of social engineering vulnerabilities; Due diligence includes checking ICANN compliance notices

### ⚠️ dns-3.1.1: Registrar Access Control

🟡 **[/infrastructure/domain-and-dns-security/registrar-and-locks](/infrastructure/domain-and-dns-security/registrar-and-locks)** → Access Control Best Practices (partial)
- Met: Hardware security key MFA (FIDO2/WebAuthn) required for all accounts; Access reviews conducted at least annually (mentions quarterly)
- Missed: Documented who is authorized, how access is granted/revoked, and role-based permissions (mentions but doesn't teach HOW to document); Access revoked promptly when no longer needed (not actionably addressed)

**Gaps (2):**
- ❌ Documented procedures for who is authorized, how access is granted/revoked, and role-based permissions implementation
- ❌ Prompt access revocation procedures when no longer needed

### ⚠️ dns-3.1.2: Dedicated Domain Security Contact Email

🟡 **[/infrastructure/domain-and-dns-security/registrar-and-locks](/infrastructure/domain-and-dns-security/registrar-and-locks)** → Dedicated Security Contact Email (partial)
- Met: Hosted on a different domain than any domain it's responsible for; Not a personal email address; Used exclusively for domain security purposes
- Missed: Alias that notifies multiple people (not explicitly stated)

**Gaps (1):**
- ❌ Alias that notifies multiple people

### ❌ dns-3.1.3: Change Management for Domain Operations


**Gaps (4):**
- ❌ Covers transfers, deletions, nameserver changes, and DNS record modifications
- ❌ Relevant team members notified before critical changes
- ❌ All changes logged
- ❌ Critical changes verified through out-of-band confirmation with the registrar

### ⚠️ dns-4.1.1: DNS Security Standards

🟡 **[/infrastructure/domain-and-dns-security/dnssec-and-email](/infrastructure/domain-and-dns-security/dnssec-and-email)** → DNSSEC Implementation (partial)
- Met: DNSSEC enabled and validated on all critical domains; CAA records configured to restrict certificate issuance
- Missed: TTL policies documented with rationale; Standards applied consistently based on domain classification

**Gaps (2):**
- ❌ TTL policies documented with rationale
- ❌ Standards applied consistently based on domain classification

### ⚠️ dns-4.1.2: Email Authentication Standards

🟡 **[/infrastructure/domain-and-dns-security/dnssec-and-email](/infrastructure/domain-and-dns-security/dnssec-and-email)** → Email Security Configuration (partial)
- Met: SPF, DKIM, and DMARC configured for all domains that send email; DMARC policy set to reject for domains actively sending email; DMARC aggregate reports (rua) monitored and reviewed; MTA-STS configured where supported; Domains that don't send email have SPF/DMARC records that reject all

### ✅ dns-4.1.3: Domain Lock Implementation

🟢 **[/infrastructure/domain-and-dns-security/registrar-and-locks](/infrastructure/domain-and-dns-security/registrar-and-locks)** → Registry Lock (EPP Lock) (full)
- Met: Registry locks (server-level EPP locks) enabled for critical domains; Transfer locks enabled on all domains; Lock status verified periodically (mentions EPP status codes)

### ❌ dns-4.1.4: TLS Certificate Lifecycle Management


**Gaps (4):**
- ❌ Covers issuance, renewal, and revocation procedures
- ❌ Certificates tracked with expiration alerts
- ❌ Automated renewal where possible
- ❌ Revocation procedures documented for compromised certificates

### ⚠️ dns-5.1.1: Domain and DNS Monitoring

🟡 **[/infrastructure/domain-and-dns-security/monitoring-and-alerting](/infrastructure/domain-and-dns-security/monitoring-and-alerting)** → DNS Record Monitoring (partial)
- Met: DNS record monitoring covers NS, A/AAAA, MX, TXT/SPF/DMARC, CAA, DNSSEC, TTL changes; Registration monitoring covers lock status, registrar settings, nameserver delegation; Critical alerts trigger immediate investigation; Monitoring infrastructure not dependent on domains being monitored
- Missed: Alerting and escalation paths documented (mentioned but not detailed HOW to document)

**Gaps (1):**
- ❌ Detailed guidance on documenting alerting and escalation paths

### ✅ dns-5.1.2: Certificate Transparency Monitoring

🟢 **[/infrastructure/domain-and-dns-security/monitoring-and-alerting](/infrastructure/domain-and-dns-security/monitoring-and-alerting)** → Certificate Transparency Monitoring (full)
- Met: Subscribed to a CT monitoring service that alerts on new certificate issuance; Alerts reviewed and unauthorized certificates investigated promptly; Wildcard certificates flagged if not expected

### ✅ dns-5.1.3: Domain Expiration Prevention

🟢 **[/infrastructure/domain-and-dns-security/registrar-and-locks](/infrastructure/domain-and-dns-security/registrar-and-locks)** → Domain Expiration Protection (full)
- Met: Auto-renewal enabled on all domains; Calendar reminders at 90, 60, 30, and 7 days before expiration; Payment methods verified current; Backup person designated for renewal responsibility

### ⚠️ dns-6.1.1: Alerting and Emergency Contacts

🟡 **[/infrastructure/domain-and-dns-security/monitoring-and-alerting](/infrastructure/domain-and-dns-security/monitoring-and-alerting)** → Setting Up Alerts (partial)
- Met: Alerting system in place to notify stakeholders when potential compromise detected; Communication plan for warning users (status page, social media)
- Missed: Emergency contacts pre-documented (registrar security, SEAL 911, legal) - partially in overview but not comprehensive

**Gaps (1):**
- ❌ Comprehensive emergency contact documentation including registrar security team, SEAL 911, and legal counsel

### ⚠️ dns-6.1.2: Domain Incident Response Plan

🟡 **[/infrastructure/domain-and-dns-security/monitoring-and-alerting](/infrastructure/domain-and-dns-security/monitoring-and-alerting)** → Incident Response Plan (partial)
- Met: Covers registrar account compromise, DNS hijacking, unauthorized transfers; Emergency registry lock activation procedures; Procedures for regaining control of compromised domains; Post-recovery validation (DNS records verified, credentials reset, logs reviewed)
- Missed: Plan tested at least annually

**Gaps (1):**
- ❌ Plan tested at least annually (can be combined with broader IR drills)

## sfc-incident-response (0✅ 10⚠️ 2❌)

### ❌ ir-1.1.1: IR Team and Role Assignments


**Gaps (6):**
- ❌ Incident commander (with designated backup) who coordinates response, assigns tasks, and makes time-sensitive decisions
- ❌ Subject matter experts identified for key domains (smart contracts, infrastructure, security) who can analyze attacks and prepare response strategies
- ❌ Scribe role defined for real-time incident documentation
- ❌ Communications personnel designated for public information sharing and record-keeping
- ❌ Legal support available with procedures for reviewing response actions, whitehat engagement, and public communications
- ❌ Decision makers defined for high-stakes decisions (system shutdown, public disclosure, fund recovery)

### ⚠️ ir-1.1.2: Stakeholder Coordination and Contacts

🟡 **[/multisig-for-protocols/emergency-procedures](/multisig-for-protocols/emergency-procedures)** → Emergency Contact Information (partial)
- Met: External expertise contacts (Security team mentioned); Escalation order documented (template includes escalation to Security team)
- Missed: Internal coordination procedures between technical and operational teams; External protocol contacts for dependencies; Legal counsel and PR contacts; Infrastructure vendor support contacts; Contact list reviewed quarterly
🟡 **[/incident-management/playbooks/seal-911-war-room-guidelines](/incident-management/playbooks/seal-911-war-room-guidelines)** → Key Roles (partial)
- Met: Internal coordination procedures (role assignments for Operations, Protocol Lead, Web/Infrastructure Lead, External Communicator); External expertise contacts (SEAL 911, security researchers); Escalation order (implicit in role structure)
- Missed: External protocol contacts for dependencies; Legal counsel and PR contacts (communications mentioned but not specific contacts); Infrastructure vendor support contacts; Contact list reviewed quarterly
🟡 **[/wallet-security/secure-multisig-best-practices](/wallet-security/secure-multisig-best-practices)** → Communication & Documentation (partial)
- Met: Internal coordination (signers must notify multisig participants of incidents)
- Missed: External protocol contacts; External expertise contacts; Legal counsel and PR contacts; Infrastructure vendor contacts; Contact list reviewed quarterly; Escalation order for P1 incidents

**Gaps (4):**
- ❌ External protocol contacts for protocols you depend on and protocols that depend on you
- ❌ Legal counsel and communications/PR contacts with specific documented procedures
- ❌ Infrastructure vendor support contacts and escalation procedures
- ❌ Contact list reviewed at least quarterly and after team changes

### ⚠️ ir-2.1.1: Monitoring Coverage

🟡 **[/infrastructure/domain-and-dns-security/monitoring-and-alerting](/infrastructure/domain-and-dns-security/monitoring-and-alerting)** → DNS Record Monitoring (partial)
- Met: Monitoring coverage for critical systems (DNS/domain infrastructure); Credential exposure detection (mentioned in Certificate Transparency monitoring); Organizational account monitoring (domain/DNS as critical organizational asset); Monitoring coverage documented (what to watch for is documented)
- Missed: 24/7 monitoring with after-hours procedures; Credential and secret exposure in code repositories and dark web
🟡 **[/monitoring/guidelines](/monitoring/guidelines)** → Best Practices (partial)
- Met: Monitoring objectives defined (critical metrics); Monitoring coverage documented (define what to monitor)
- Missed: 24/7 monitoring capabilities with after-hours procedures; Credential and secret exposure detection; Organizational account monitoring; Known gaps documented

**Gaps (3):**
- ❌ 24/7 monitoring capabilities with procedures for after-hours alert handling
- ❌ Credential and secret exposure detection including dark web monitoring, breach database scanning, and secret scanning in code repositories
- ❌ Organizational account monitoring including social media accounts and websites monitored for unauthorized access or compromise

### ⚠️ ir-2.1.2: Alerting, Paging, and Escalation

🟡 **[/multisig-for-protocols/emergency-procedures](/multisig-for-protocols/emergency-procedures)** → Immediate Actions (partial)
- Met: Triage and classification procedures (assess scope, escalate); Management notification for high-severity (contact Security team); Escalation paths (Emergency notification template with escalation)
- Missed: Automated alerting configured; Alerts include embedded triage guidance; Time-based escalation triggers; Redundant paging systems; On-call schedules maintained; Backup procedures when on-call unreachable

**Gaps (6):**
- ❌ Automated alerting configured for security events and operational issues
- ❌ Alerts include embedded triage guidance for distinguishing true incidents from false positives
- ❌ Time-based escalation triggers if initial responder doesn't acknowledge within defined window
- ❌ Redundant paging systems with documented failover procedures
- ❌ On-call schedules maintained with adequate coverage for operational needs
- ❌ Backup procedures when on-call personnel are unreachable

### ❌ ir-2.1.3: Logging Integrity and Retention


**Gaps (5):**
- ❌ Log retention periods defined for security, infrastructure, and cloud provider logs
- ❌ Retention adequate for forensic analysis (consider regulatory requirements and typical investigation timelines)
- ❌ Tamper-evident logging for security-relevant events including access logs, alerting system logs, and infrastructure logs
- ❌ Alerts triggered if logs are altered, deleted, or if monitoring/logging is disabled
- ❌ Log sources documented — what's captured and where it's stored

### ⚠️ ir-3.1.1: Response Playbooks

🟡 **[/multisig-for-protocols/emergency-procedures](/multisig-for-protocols/emergency-procedures)** → Key Compromise (partial)
- Met: Playbooks cover key compromise scenario; Initial response actions (stop operations, notify, assess, escalate, document); Key compromise includes procedures for rotating keys; Role-specific responsibilities (First Reporter, team coordination)
- Missed: Playbooks for protocol exploits, infrastructure failures, access control breaches, supply chain compromises, frontend/DNS compromise; Escalation criteria for leadership engagement, system shutdown, public disclosure, external assistance
🟡 **[/wallet-security/secure-multisig-best-practices](/wallet-security/secure-multisig-best-practices)** → Signer rotation (partial)
- Met: Key compromise procedures (signer rotation when compromised); Threshold reviewed after signer replacement
- Missed: Playbooks for protocol exploits, infrastructure failures, access control breaches, supply chain, frontend/DNS; Initial response actions for each scenario; Role-specific responsibilities; Escalation criteria documented

**Gaps (3):**
- ❌ Playbooks cover protocol exploits, infrastructure failures, access control breaches, supply chain compromises, and frontend/DNS compromise
- ❌ Each playbook includes containment, evidence preservation, and stakeholder notification
- ❌ Escalation criteria documented for when to engage leadership, when to shut down systems, when to make public disclosure, and when to engage external assistance

### ⚠️ ir-3.1.2: Signer Reachability and Coordination

🟡 **[/wallet-security/secure-multisig-best-practices](/wallet-security/secure-multisig-best-practices)** → Training & Drills (partial)
- Met: Procedures for emergency operations (drills mentioned); Tested quarterly (for emergency multisigs)
- Missed: Cross-timezone signer availability procedures; Signers integrated into on-call/paging systems; Escalation paths when signers unreachable
🟡 **[/multisig-for-protocols/setup-and-configuration](/multisig-for-protocols/setup-and-configuration)**  (partial)
- Missed: Procedures for coordinating multisig operations during incidents; Cross-timezone signer availability; Signers integrated into on-call/paging; Escalation paths for unreachable signers; Tested quarterly

**Gaps (3):**
- ❌ Procedures for coordinating multisig operations during incidents, including cross-timezone signer availability
- ❌ Signers integrated into on-call/paging systems
- ❌ Escalation paths documented for when signers are unreachable

### ⚠️ ir-3.1.3: Emergency Transaction Readiness

🟡 **[/multisig-for-protocols/backup-signing-and-infrastructure](/multisig-for-protocols/backup-signing-and-infrastructure)** → UI Alternatives (partial)
- Met: Backup signing infrastructure (Eternal Safe, Squads Public Client); Alternate signing UI (multiple UI options documented); Backup RPC providers (guidance provided); Alternate block explorer (Blockscout, explorer.solana.com, Solscan); Emergency execution procedures (documented how to use backup systems)
- Missed: Pre-signed or pre-prepared emergency transactions
🟡 **[/multisig-for-protocols/implementation-checklist](/multisig-for-protocols/implementation-checklist)** → Emergency Preparedness (partial)
- Met: Backup signing infrastructure (downloaded backup UIs); Emergency execution procedures (understanding how to sign when primary UI is down)
- Missed: Pre-signed or pre-prepared emergency transactions

**Gaps (1):**
- ❌ Pre-signed or pre-prepared emergency transactions for critical protocol functions (pause, freeze, parameter changes) where feasible

### ⚠️ ir-4.1.1: Incident Communication Channels

🟡 **[/multisig-for-protocols/implementation-checklist](/multisig-for-protocols/implementation-checklist)** → Documentation & Communication (partial)
- Met: Primary and backup communication channels (set up per Communication Setup); Multiple channels on different platforms (tested emergency notification)
- Missed: Documented access controls and member lists; Documented failover procedures; Procedures for rapidly creating incident-specific channels; Secure communication procedures for sensitive information
🟡 **[/multisig-for-protocols/emergency-procedures](/multisig-for-protocols/emergency-procedures)** → Emergency Communication Protocols (partial)
- Met: Multiple communication channels (primary, backup, emergency contacts); Secure communication procedures (need-to-know, secure channels); Procedures for identity verification during incidents
- Missed: Documented access controls and member lists; Documented failover procedures; Procedures for rapidly creating war room channels

**Gaps (3):**
- ❌ Dedicated incident communication channels with documented access controls and member lists
- ❌ Documented failover procedures between primary and backup channels
- ❌ Procedures for rapidly creating incident-specific channels (war room) when needed

### ⚠️ ir-4.1.2: Internal Status Updates

🟡 **[/incident-management/communication-strategies](/incident-management/communication-strategies)** → Best Practices (partial)
- Met: Status update cadence defined (regular updates to stakeholders); Format and distribution for internal stakeholders (provide regular updates to employees)

### ⚠️ ir-4.1.3: Public Communication and Information Management

🟡 **[/incident-management/playbooks/seal-911-war-room-guidelines](/incident-management/playbooks/seal-911-war-room-guidelines)** → Communications (partial)
- Met: Procedures for coordinating communications during and after incidents; Procedures for managing public information flow (monitoring social media); Designated approval flow (External Communicator role)
- Missed: Pre-approved communication templates for different incident types and severity
🟡 **[/multisig-for-protocols/emergency-procedures](/multisig-for-protocols/emergency-procedures)** → Emergency Notification Template (partial)
- Met: Pre-approved communication templates (emergency notification template provided)
- Missed: Templates for different incident types and severity levels; Procedures for coordinating with protocol users during/after; Procedures for managing misinformation; Designated approval flow before public statements

**Gaps (2):**
- ❌ Pre-approved communication templates for different incident types and severity levels (only one emergency template provided)
- ❌ Procedures for managing public information flow and correcting misinformation during active incidents

### ⚠️ ir-5.1.1: IR Drills and Testing

🟡 **[/multisig-for-protocols/emergency-procedures](/multisig-for-protocols/emergency-procedures)** → Emergency Drill Procedures (partial)
- Met: Drills conducted regularly (quarterly, bi-annually, annually); Tests full pipeline (notification, response time, process verification); Production alerting validated (notification test, response time measurement)
- Missed: Drills cover different incident types across exercises; Drill documentation with gaps and corrective actions; Corrective actions tracked to completion; Findings incorporated into playbook updates
🟡 **[/incident-management/playbooks/decentralized-ir](/incident-management/playbooks/decentralized-ir)** → Keep It Alive (partial)
- Met: Drills conducted regularly (quarterly red team drills); Findings incorporated into updates (iterate on framework during retrospective)
- Missed: Tests full pipeline from monitoring through recovery; Production alerting validated end-to-end; Drill documentation with participants, response times, gaps; Corrective actions tracked to completion

**Gaps (3):**
- ❌ Drills cover different incident types across exercises (protocol exploit, infrastructure failure, key compromise, etc.)
- ❌ Drill documentation includes date, scenario, participants, response times, gaps identified, and corrective actions
- ❌ Corrective actions tracked to completion with owners and deadlines

## sfc-multisig-ops (11✅ 10⚠️ 3❌)

### ⚠️ ms-1.1.1: Named Multisig Operations Owner

🟡 **[/multisig-for-protocols/implementation-checklist](/multisig-for-protocols/implementation-checklist)** → For Multisig Administrators (partial)
- Missed: Accountability scope covers policy maintenance, signer onboarding/offboarding, documentation accuracy, periodic reviews, and incident escalation

**Gaps (1):**
- ❌ Accountability scope covers policy maintenance, signer onboarding/offboarding, documentation accuracy, periodic reviews, and incident escalation - NO page teaches organizations HOW to establish clear accountability with defined scope covering all these areas

### ⚠️ ms-1.1.2: Multisig Registry and Documentation

🟡 **[/wallet-security/secure-multisig-best-practices](/wallet-security/secure-multisig-best-practices)** → Communication & Documentation (partial)
- Met: Registry includes address, network, threshold, classification, purpose, signer addresses, controlled contracts, on-chain roles, and last review date (mentions documentation of purpose, wallet address, signer addresses)
- Missed: Updated within 24 hours for security-critical changes, 3 days for routine changes; Accessible to signers and key personnel
🟡 **[/multisig-for-protocols/implementation-checklist](/multisig-for-protocols/implementation-checklist)** → Documentation & Communication (partial)
- Missed: Registry includes address, network, threshold, classification, purpose, signer addresses, controlled contracts, on-chain roles, and last review date; Updated within 24 hours for security-critical changes, 3 days for routine changes; Accessible to signers and key personnel

**Gaps (3):**
- ❌ Updated within 24 hours for security-critical changes, 3 days for routine changes - NO page provides specific update timeline requirements
- ❌ Accessible to signers and key personnel - NO page substantively teaches access control for registry
- ❌ Complete registry structure with ALL required fields (network, classification, controlled contracts, on-chain roles, last review date) not fully taught

### ✅ ms-2.1.1: Multisig Classification and Risk-Based Controls

🟢 **[/multisig-for-protocols/planning-and-classification](/multisig-for-protocols/planning-and-classification)** → Classification Process (full)
- Met: Classification considers impact factors (financial exposure, protocol criticality, reputational risk) and operational needs (response time, coordination complexity); Each classification maps to specific required controls (thresholds, quorum composition, review cadence); Higher-risk classifications require stronger controls (more signers, higher thresholds); Classifications reviewed every 6 months and after significant changes (TVL shifts, new products, protocol upgrades, security incidents)
- Missed: All multisigs must have at least 3 distinct signers with a signing threshold of 50% or greater; N-of-N configurations should be avoided
🟢 **[/wallet-security/secure-multisig-best-practices](/wallet-security/secure-multisig-best-practices)** → Thresholds & Configuration (full)
- Met: All multisigs must have at least 3 distinct signers with a signing threshold of 50% or greater; N-of-N configurations should be avoided; Higher-risk classifications require stronger controls (more signers, higher thresholds)
- Missed: Classification considers impact factors and operational needs in a formal framework; Each classification maps to specific required controls; Classifications reviewed every 6 months and after significant changes

### ⚠️ ms-2.1.2: Contract-Level Security Controls

🟡 **[/multisig-for-protocols/setup-and-configuration](/multisig-for-protocols/setup-and-configuration)** → Contract-Level Controls (partial)
- Met: Evaluation covers timelocks, modules, guards, address whitelisting, invariant enforcement, and parameter bounds; Security review required before enabling any module or guard
- Missed: Controls evaluated for each multisig based on classification; Decisions documented, including rationale for controls not implemented
🟡 **[/wallet-security/secure-multisig-best-practices](/wallet-security/secure-multisig-best-practices)** → Contract-Level Security (partial)
- Met: Evaluation covers timelocks, modules, guards, address whitelisting, invariant enforcement, and parameter bounds
- Missed: Controls evaluated for each multisig based on classification; Security review required before enabling any module or guard; Decisions documented, including rationale for controls not implemented

**Gaps (2):**
- ❌ Controls evaluated for each multisig based on classification - NO page teaches systematic evaluation process tied to classification levels
- ❌ Decisions documented, including rationale for controls not implemented - NO page provides documentation requirements for control selection decisions

### ❌ ms-2.1.3: Exception Approval Process


**Gaps (2):**
- ❌ Exceptions require documented justification, expiry date, compensating controls, and remediation plan - NO page teaches exception approval process
- ❌ Critical-class exceptions require executive or security-lead approval - NO page defines approval authority by classification

### ❌ ms-2.1.4: Wallet Segregation


**Gaps (2):**
- ❌ Segregation considers value, operational needs, and risk tolerance - NO page substantively teaches HOW to determine segregation strategy
- ❌ Examples include hot/cold separation and treasury distribution across multiple wallets - mentioned in context of travel security in /opsec/travel/guide but NOT as a multisig operational requirement

### ⚠️ ms-3.1.1: Signer Address Verification

🟡 **[/wallet-security/secure-multisig-best-practices](/wallet-security/secure-multisig-best-practices)** → Communication & Documentation (partial)
- Met: Verification process includes message signing with the signer address, verification via an independent tool, and documented proof of verification
🟡 **[/multisig-for-protocols/setup-and-configuration](/multisig-for-protocols/setup-and-configuration)** → Pre-Launch Checklist (partial)
- Missed: Verification process includes message signing with the signer address, verification via an independent tool, and documented proof of verification

### ✅ ms-3.1.2: Signer Key Management Standards

🟢 **[/wallet-security/secure-multisig-best-practices](/wallet-security/secure-multisig-best-practices)** → Thresholds & Configuration (full)
- Met: Hardware wallets required for all multisig operations; Each signer uses a fresh, dedicated address per multisig, used exclusively for that multisig's operations

### ✅ ms-3.1.3: Seed Phrase Backup and Protection

🟢 **[/wallet-security/seed-phrase-management](/wallet-security/seed-phrase-management)** → Secure Storage Practices (full)
- Met: Seed phrases never stored digitally, in cloud storage, or photographed; Backups are geographically distributed (disaster resistant); No single point of compromise (theft resistant); Recoverable if one operator is unavailable (operator-loss resistant)

### ⚠️ ms-3.1.4: Signer Lifecycle Management

🟡 **[/wallet-security/secure-multisig-best-practices](/wallet-security/secure-multisig-best-practices)** → Signer rotation (partial)
- Missed: Offboarded signers removed within 48-72 hours (Emergency-class), 7 days (Critical-class), 14 days (others); Access reviews quarterly, confirming each signer still controls their key

**Gaps (2):**
- ❌ Offboarded signers removed within 48-72 hours (Emergency-class), 7 days (Critical-class), 14 days (others) - NO page provides specific timeline requirements by classification
- ❌ Access reviews quarterly, confirming each signer still controls their key - NO page teaches quarterly access review process

### ✅ ms-3.1.5: Signer Training and Assessment

🟢 **[/multisig-for-protocols/implementation-checklist](/multisig-for-protocols/implementation-checklist)** → For Signers (full)
- Met: Training covers transaction verification, emergency procedures, phishing and social engineering awareness; Practical skills assessment included
- Missed: Annual refreshers; updates within 30 days of significant procedure changes

**Gaps (1):**
- ❌ Annual refreshers; updates within 30 days of significant procedure changes - NO page specifies ongoing training cadence requirements

### ✅ ms-3.1.6: Hardware Wallet Standards

🟢 **[/multisig-for-protocols/implementation-checklist](/multisig-for-protocols/implementation-checklist)** → Hardware & Security Setup (full)
- Met: Wallet capability requirements include adequate display, clear signing support, PIN security, and firmware integrity verification; Procurement through verified supply chains (direct from manufacturer or authorized resellers), with device authenticity verification

### ✅ ms-3.1.7: Secure Signing Environment

🟢 **[/multisig-for-protocols/personal-security-opsec](/multisig-for-protocols/personal-security-opsec)** → Network Security (full)
- Met: Device security requirements documented and enforced; Dedicated signing devices or network isolation for high-value operations

### ✅ ms-3.1.8: Signer Diversity

🟢 **[/wallet-security/secure-multisig-best-practices](/wallet-security/secure-multisig-best-practices)** → Strategic Signer Distribution (full)
- Met: Diversity requirements scale with multisig classification (inferred from role diversity, geographical separation, external parties requirements)

### ✅ ms-4.1.1: Transaction Handling Process

🟢 **[/wallet-security/signing-and-verification/secure-multisig-signing-process](/wallet-security/signing-and-verification/secure-multisig-signing-process)** → Phase 1: Signing the Off-Chain Message (full)
- Met: Process covers initiation, approval, simulation, execution, and confirmation; Each signer independently verifies transaction details (chain ID, target address, calldata, value, nonce, operation type) before signing; Transaction hashes compared across at least two independent interfaces; DELEGATECALL operations to untrusted addresses flagged as high risk
- Missed: Defines who is authorized to initiate transactions; High-risk transactions require waiting periods where feasible and elevated threshold approval; High-risk thresholds defined based on classification and reviewed periodically; Private transaction submission used when appropriate to prevent front-running or MEV extraction
🟡 **[/wallet-security/secure-multisig-best-practices](/wallet-security/secure-multisig-best-practices)** → Operational Best Practices (partial)
- Met: Each signer independently verifies transaction details before signing; Transaction simulation used before signing
- Missed: Process covers initiation, approval, simulation, execution, and confirmation; Defines who is authorized to initiate transactions; Transaction hashes compared across at least two independent interfaces; DELEGATECALL operations flagged as high risk; High-risk transactions require waiting periods and elevated threshold approval; High-risk thresholds defined based on classification; Private transaction submission used when appropriate

**Gaps (4):**
- ❌ Defines who is authorized to initiate transactions - NO page teaches authorization framework for transaction initiation
- ❌ High-risk transactions require waiting periods where feasible and elevated threshold approval - mentioned timelocks in setup but not as operational requirement
- ❌ High-risk thresholds defined based on classification and reviewed periodically - NO page teaches risk threshold definition process
- ❌ Private transaction submission used when appropriate to prevent front-running or MEV extraction - NO page teaches when/how to use private RPCs for transaction submission

### ❌ ms-4.1.2: Transaction Audit Trails


**Gaps (2):**
- ❌ Retained for 3 years - NO page specifies retention period
- ❌ Records include proposer, approvers, verification evidence, timestamps, and issues encountered - NO page teaches comprehensive audit trail documentation requirements

### ⚠️ ms-4.1.3: Tool and Platform Evaluation

🟡 **[/multisig-for-protocols/implementation-checklist](/multisig-for-protocols/implementation-checklist)** → Transaction Verification (partial)
- Met: Evaluation considers whether tools are open source or audited by 2+ reputable firms (implied by tool recommendations)
- Missed: Formal process for adopting new tools; Tools have no known critical unpatched vulnerabilities and have established ecosystem adoption

**Gaps (2):**
- ❌ Formal process for adopting new tools - NO page teaches tool adoption approval process
- ❌ Tools have no known critical unpatched vulnerabilities and have established ecosystem adoption - mentioned but not taught as evaluation criteria

### ✅ ms-4.1.4: Backup Signing Infrastructure

🟢 **[/multisig-for-protocols/backup-signing-and-infrastructure](/multisig-for-protocols/backup-signing-and-infrastructure)** → UI Alternatives (full)
- Met: Alternate signing UI; 2-3 backup RPC providers; Alternate block explorer

### ⚠️ ms-5.1.1: Secure Communication Procedures

🟡 **[/multisig-for-protocols/implementation-checklist](/multisig-for-protocols/implementation-checklist)** → Documentation & Communication (partial)
- Met: Dedicated primary and backup channels on different platforms; End-to-end encryption, MFA required, invitation-based membership
- Missed: Signer identity verified as standard procedure during signing operations (e.g., code words, video call, secondary authenticated channel); Documented procedures for channel compromise including switching to backup channels and out-of-band verification; All signers trained on these procedures; compromise response tested annually
🟡 **[/multisig-for-protocols/emergency-procedures](/multisig-for-protocols/emergency-procedures)** → Communication Account Compromise (partial)
- Met: Documented procedures for channel compromise including switching to backup channels and out-of-band verification
- Missed: Dedicated primary and backup channels on different platforms; End-to-end encryption, MFA required, invitation-based membership; Signer identity verified as standard procedure during signing operations; All signers trained on these procedures; compromise response tested annually

**Gaps (2):**
- ❌ Signer identity verified as standard procedure during signing operations (e.g., code words, video call, secondary authenticated channel) - mentioned in emergency procedures but NOT as standard operational procedure for ALL signing operations
- ❌ All signers trained on these procedures; compromise response tested annually - NO page specifies annual testing requirement for communication compromise procedures

### ⚠️ ms-5.1.2: Emergency Contact List

🟡 **[/multisig-for-protocols/implementation-checklist](/multisig-for-protocols/implementation-checklist)** → Documentation & Communication (partial)
- Missed: Includes protocol security team, external security resources, legal/compliance contacts, and backup contacts for signers; Personal emergency contacts for each signer (e.g., trusted family member, close colleague) for situations where the signer is unreachable through normal channels; Reviewed every 6 months
🟡 **[/multisig-for-protocols/emergency-procedures](/multisig-for-protocols/emergency-procedures)** → Emergency Contact Information (partial)
- Met: Includes protocol security team, external security resources, legal/compliance contacts, and backup contacts for signers
- Missed: Personal emergency contacts for each signer; Reviewed every 6 months

**Gaps (2):**
- ❌ Personal emergency contacts for each signer (e.g., trusted family member, close colleague) for situations where the signer is unreachable through normal channels - NO page teaches requirement for personal emergency contacts
- ❌ Reviewed every 6 months - NO page specifies review cadence for emergency contact lists

### ✅ ms-6.1.1: Emergency Playbooks

🟢 **[/multisig-for-protocols/emergency-procedures](/multisig-for-protocols/emergency-procedures)** → Key Compromise (full)
- Met: Scenarios covered include key compromise, lost access, communication channel compromise, and urgent protocol actions; Each scenario has procedures and escalation paths; Playbooks accessible through at least one backup method independent of the primary documentation platform

### ⚠️ ms-6.1.2: Signer Reachability and Escalation

🟡 **[/multisig-for-protocols/planning-and-classification](/multisig-for-protocols/planning-and-classification)** → Step 2: Operational Assessment (partial)
- Met: Response times by classification - Emergency less than 2 hours, Time-Sensitive 2-12 hours, Routine 24-48 hours
- Missed: Paging covers all signers including external parties; Tested quarterly; Escalation paths documented
🟡 **[/multisig-for-protocols/emergency-procedures](/multisig-for-protocols/emergency-procedures)** → For Emergency Response Multisigs (partial)
- Met: Escalation paths documented
- Missed: Response times by classification; Paging covers all signers including external parties; Tested quarterly

**Gaps (2):**
- ❌ Paging covers all signers including external parties - NO page teaches establishment of paging system for all signers
- ❌ Tested quarterly - NO page specifies quarterly testing requirement for reachability

### ⚠️ ms-6.1.3: Multisig Monitoring and Alerts

🟡 **[/wallet-security/secure-multisig-best-practices](/wallet-security/secure-multisig-best-practices)** → Operational Best Practices (partial)
- Met: Monitored events include signer/threshold changes, transfers exceeding thresholds, nonce gaps, interactions with unknown addresses, failed transactions, module/guard changes (partial list mentioned)
- Missed: Alerting and escalation paths documented; Monitoring infrastructure protected against tampering
🟡 **[/multisig-for-protocols/setup-and-configuration](/multisig-for-protocols/setup-and-configuration)** → Active Monitoring (partial)
- Met: Monitored events include proposed transactions, new signatures, and owner changes (partial list)
- Missed: Monitored events include transfers exceeding thresholds, nonce gaps, interactions with unknown addresses, failed transactions, module/guard changes, low submitter/proposer balances; Alerting and escalation paths documented; Monitoring infrastructure protected against tampering

**Gaps (3):**
- ❌ Complete list of monitored events (transfers exceeding thresholds, nonce gaps, interactions with unknown addresses, failed transactions, module/guard changes, low submitter/proposer balances) - NO page provides comprehensive monitoring event list
- ❌ Alerting and escalation paths documented - NO page teaches documentation of alert escalation
- ❌ Monitoring infrastructure protected against tampering - NO page addresses monitoring system security

### ✅ ms-6.1.4: Emergency Drills and Improvement

🟡 **[/multisig-for-protocols/implementation-checklist](/multisig-for-protocols/implementation-checklist)** → Specialized Training by Use Case (partial)
- Met: Annual minimum (implied by emergency simulation drills requirement)
- Missed: After major procedure changes; Documentation includes date, participants, response times, issues identified, and improvements made
🟢 **[/multisig-for-protocols/emergency-procedures](/multisig-for-protocols/emergency-procedures)** → Emergency Drill Procedures (full)
- Met: Annual minimum (quarterly for some tests); After major procedure changes (implied); Documentation includes date, participants, response times, issues identified, and improvements made

## sfc-treasury-ops (4✅ 12⚠️ 5❌)

### ❌ tro-1.1.1: Treasury Operations Owner


**Gaps (1):**
- ❌ Accountability scope covers policy upkeep, security reviews, operational hygiene, access control oversight, and incident escalation

### ⚠️ tro-1.1.2: Treasury Registry and Documentation

🟡 **[/treasury-operations/registration-documents](/treasury-operations/registration-documents)** → Registration Template (partial)
- Met: Registry includes wallet/account address, network/chain, custody provider, custody model, purpose/classification, authorized signers/approvers, controlled contracts or protocols, and last review date; Accessible to authorized treasury personnel
- Missed: Updated within 24 hours for security-critical changes (signer changes, new wallets), 3 days for routine changes

**Gaps (1):**
- ❌ Updated within 24 hours for security-critical changes (signer changes, new wallets), 3 days for routine changes

### ⚠️ tro-1.1.3: Custody Architecture Rationale

🟡 **[/treasury-operations/enhanced-controls](/treasury-operations/enhanced-controls)** → MPC for Large Holdings (partial)
- Met: Custody model documented for each wallet/account (custodial, self-custody, co-managed, MPC, multisig, HSM)
- Missed: Technology trade-offs understood by the team; Custody architecture reviewed when treasury size, operational needs, or risk profile changes significantly

**Gaps (2):**
- ❌ Technology trade-offs understood by the team (not necessarily a formal document — could be a brief internal memo)
- ❌ Custody architecture reviewed when treasury size, operational needs, or risk profile changes significantly

### ⚠️ tro-1.1.4: Treasury Infrastructure Change Management

🟡 **[/treasury-operations/registration-documents](/treasury-operations/registration-documents)** → Access Change Template (partial)
- Met: Changes require documented approval before implementation; All changes logged with justification and approver
- Missed: Covers wallet setups, custody configurations, signer/approver permission changes, and protocol integrations; Changes reflected in the treasury registry within defined SLAs; Rollback procedures documented for critical changes

**Gaps (3):**
- ❌ Covers wallet setups, custody configurations, signer/approver permission changes, and protocol integrations
- ❌ Changes reflected in the treasury registry within defined SLAs
- ❌ Rollback procedures documented for critical changes

### ✅ tro-2.1.1: Treasury Wallet Risk Classification

🟢 **[/treasury-operations/classification](/treasury-operations/classification)**  (full)
- Met: Classification considers financial exposure, operational dependency, and regulatory impact; Impact levels defined (e.g., Low <1%, Medium 1-10%, High 10-25%, Critical >25% of total assets); Operational types defined based on transaction frequency and urgency requirements; Each classification maps to specific controls including approval thresholds, MFA requirements, whitelist delays, and monitoring levels; Classification reviewed when asset values, operational patterns, or risk profile change significantly

### ❌ tro-2.1.2: Fund Allocation Limits and Rebalancing


**Gaps (4):**
- ❌ Maximum allocation defined per wallet, per custody provider, and per chain
- ❌ Rebalancing triggers documented (e.g., when a wallet exceeds its allocation ceiling or falls below operational minimums)
- ❌ Allocation limits reviewed periodically and after significant treasury changes
- ❌ No single wallet or custody account holds more than the organization's defined maximum concentration

### ⚠️ tro-3.1.1: Custody Platform Security Configuration

🟡 **[/treasury-operations/enhanced-controls](/treasury-operations/enhanced-controls)** → Access Security (partial)
- Met: Transaction policy rules configured: multi-approval workflows, approval thresholds scaled to transaction value, address whitelisting with cooling-off periods, velocity/spending limits; Hardware security key MFA required for all approvers on High and Critical accounts; Session timeouts and re-authentication for sensitive operations; Network restrictions: IP whitelisting, VPN requirements where supported, geographic access restrictions; Separation of duties enforced: initiators cannot approve their own transactions, admins cannot unilaterally execute withdrawals
- Missed: Platform configurations documented and reviewed at least quarterly
🟡 **[/treasury-operations/registration-documents](/treasury-operations/registration-documents)** → Security Configuration Template (partial)
- Met: Transaction policy rules configured: multi-approval workflows, approval thresholds scaled to transaction value, address whitelisting with cooling-off periods, velocity/spending limits; Hardware security key MFA required for all approvers on High and Critical accounts; Session timeouts and re-authentication for sensitive operations; Network restrictions: IP whitelisting, VPN requirements where supported, geographic access restrictions; Separation of duties enforced: initiators cannot approve their own transactions, admins cannot unilaterally execute withdrawals; Platform configurations documented and reviewed at least quarterly

### ⚠️ tro-3.1.2: Credential and Secret Management

🟡 **[/treasury-operations/enhanced-controls](/treasury-operations/enhanced-controls)** → Access Security (partial)
- Met: Credentials stored in dedicated secret management systems, not in code, documents, or shared drives; Owner and admin credentials isolated from day-to-day operational access
- Missed: Covers API keys, service accounts, owner/admin credentials, and signing keys; Credential rotation schedule defined and enforced; Access to credentials logged and monitored
🟡 **[/wallet-security/seed-phrase-management](/wallet-security/seed-phrase-management)**  (partial)
- Met: Credentials stored in dedicated secret management systems, not in code, documents, or shared drives
- Missed: Covers API keys, service accounts, owner/admin credentials, and signing keys; Owner and admin credentials isolated from day-to-day operational access; Credential rotation schedule defined and enforced; Access to credentials logged and monitored

**Gaps (2):**
- ❌ Credential rotation schedule defined and enforced
- ❌ Access to credentials logged and monitored

### ✅ tro-3.1.3: Access Reviews for Treasury Systems

🟢 **[/treasury-operations/registration-documents](/treasury-operations/registration-documents)** → Quarterly Review Template (full)
- Met: Access reviews conducted at least quarterly for High/Critical accounts, annually for others; Reviews verify each user still requires their current access level; Access promptly revoked when personnel change roles or leave

### ⚠️ tro-3.1.4: Personnel Operational Security

🟡 **[/treasury-operations/enhanced-controls](/treasury-operations/enhanced-controls)** → Device Security (partial)
- Met: Device security requirements documented: dedicated devices for custody access, full disk encryption, automatic screen lock; VPN mandatory for all remote treasury platform access; Mobile devices used as second factors have endpoint security monitoring
- Missed: Signing devices (hardware wallets) securely stored when not in use; Backup materials (seed phrases, recovery keys) stored securely with geographic distribution; Travel security procedures for personnel with signing or custody access capabilities
🟡 **[/wallet-security/seed-phrase-management](/wallet-security/seed-phrase-management)** → Secure Storage Practices (partial)
- Met: Backup materials (seed phrases, recovery keys) stored securely with geographic distribution
- Missed: Device security requirements documented: dedicated devices for custody access, full disk encryption, automatic screen lock; Signing devices (hardware wallets) securely stored when not in use; VPN mandatory for all remote treasury platform access; Travel security procedures for personnel with signing or custody access capabilities; Mobile devices used as second factors have endpoint security monitoring
🟡 **[/multisig-for-protocols/personal-security-opsec](/multisig-for-protocols/personal-security-opsec)** → Device Security (partial)
- Met: Device security requirements documented: dedicated devices for custody access, full disk encryption, automatic screen lock; Signing devices (hardware wallets) securely stored when not in use; Backup materials (seed phrases, recovery keys) stored securely with geographic distribution; VPN mandatory for all remote treasury platform access; Travel security procedures for personnel with signing or custody access capabilities; Mobile devices used as second factors have endpoint security monitoring

### ⚠️ tro-4.1.1: Transaction Verification and Execution

🟡 **[/treasury-operations/transaction-verification](/treasury-operations/transaction-verification)** → Execution Protocol (partial)
- Met: Pre-execution verification includes: recipient address validation, amount verification, network confirmation, and transaction simulation; Test transactions required before sending to new addresses; Address verified through multiple independent sources; never copied from email, chat, or transaction history; Multi-party confirmation required: minimum 2 internal personnel for large transfers; Specific procedures for receiving large incoming transfers (address generation, bidirectional test, sender coordination); High-value transfers (organization-defined threshold) require video call verification with liveness checks; All transaction parameters read aloud and confirmed before execution
- Missed: Specific procedures for OTC transactions where applicable

**Gaps (1):**
- ❌ Specific procedures for OTC transactions where applicable

### ⚠️ tro-4.1.2: Signer and Approver Knowledge

🟡 **[/multisig-for-protocols/implementation-checklist](/multisig-for-protocols/implementation-checklist)** → Transaction Verification (partial)
- Met: Knowledge covers: transaction verification procedures, address validation techniques, social engineering awareness, emergency procedures; Competence demonstrated before authorization (e.g., verifying a test transaction end-to-end)
- Missed: Knowledge refreshed annually; updated within 30 days of significant procedure changes; Covers custody-platform-specific workflows and policy engine rules

**Gaps (2):**
- ❌ Knowledge refreshed annually; updated within 30 days of significant procedure changes
- ❌ Covers custody-platform-specific workflows and policy engine rules

### ⚠️ tro-4.1.3: Secure Communication Procedures

🟡 **[/multisig-for-protocols/emergency-procedures](/multisig-for-protocols/emergency-procedures)** → Communication Account Compromise (partial)
- Met: Identity verified as standard procedure during signing/approval operations (e.g., code phrases, video call, secondary authenticated channel); Anti-social-engineering protocols: established verification procedures for address changes or unusual requests; Documented procedures for channel compromise including switching to backup channels and out-of-band verification
- Missed: Dedicated primary and backup channels on different platforms; End-to-end encryption, MFA required, invitation-based membership; All treasury personnel trained on these procedures; compromise response tested annually

**Gaps (3):**
- ❌ Dedicated primary and backup channels on different platforms
- ❌ End-to-end encryption, MFA required, invitation-based membership
- ❌ All treasury personnel trained on these procedures; compromise response tested annually

### ❌ tro-5.1.1: Protocol Evaluation and Exposure Limits


**Gaps (4):**
- ❌ Due diligence process for all protocols before deployment: smart contract audit status, team reputation, TVL history, insurance coverage
- ❌ Exposure limits defined per protocol, per chain, and per deployment category (DeFi, staking, liquid staking, etc.)
- ❌ Limits reviewed periodically and after significant market or protocol changes
- ❌ Risk re-evaluation triggered by: security incidents, major governance proposals, significant TVL changes, new vulnerabilities disclosed

### ⚠️ tro-5.1.2: Position Lifecycle Management

🟡 **[/treasury-operations/transaction-verification](/treasury-operations/transaction-verification)** → Transaction Parameter Security (partial)
- Met: Entry procedures: smart contract address verification against multiple independent sources, token approval management (minimal approvals, revocation after use)
- Missed: Emergency withdrawal/exit procedures documented for all active positions; Alternative access methods documented in case primary UIs are unavailable (direct contract interaction, CLI tools, alternative frontends); Unbonding/unstaking timelines understood and factored into liquidity planning

**Gaps (3):**
- ❌ Emergency withdrawal/exit procedures documented for all active positions
- ❌ Alternative access methods documented in case primary UIs are unavailable (direct contract interaction, CLI tools, alternative frontends)
- ❌ Unbonding/unstaking timelines understood and factored into liquidity planning

### ⚠️ tro-6.1.1: Monitoring and Threat Awareness

🟡 **[/treasury-operations/enhanced-controls](/treasury-operations/enhanced-controls)** → Security Monitoring & Logging (partial)
- Met: Transaction monitoring: unusual amounts, unexpected destinations, failed transactions, policy violations; Account state monitoring: balance changes, configuration modifications, new device enrollments, authentication anomalies; Alerting with defined severity levels and escalation paths; Critical alerts (large unexpected transactions, unauthorized access attempts) trigger immediate investigation
- Missed: External threat intelligence: protocol vulnerabilities, DeFi/staking risks, relevant security incidents in the ecosystem; Vendor/platform monitoring: custody platform status, infrastructure alerts, service availability; Compliance monitoring: transactions and wallet addresses screened for sanctions and compliance risk; Protocol and position monitoring: deployed protocol health, governance changes, TVL shifts, collateral ratios, reward accrual, liquidation risks; Monitoring system integrity protected — alerts triggered when monitoring configurations are changed, disabled, or degraded

**Gaps (5):**
- ❌ External threat intelligence: protocol vulnerabilities, DeFi/staking risks, relevant security incidents in the ecosystem
- ❌ Vendor/platform monitoring: custody platform status, infrastructure alerts, service availability
- ❌ Compliance monitoring: transactions and wallet addresses screened for sanctions and compliance risk
- ❌ Protocol and position monitoring: deployed protocol health, governance changes, TVL shifts, collateral ratios, reward accrual, liquidation risks
- ❌ Monitoring system integrity protected — alerts triggered when monitoring configurations are changed, disabled, or degraded

### ✅ tro-6.1.2: Incident Response Plan

🟢 **[/multisig-for-protocols/emergency-procedures](/multisig-for-protocols/emergency-procedures)** → Emergency Notification Template (full)
- Met: Severity levels defined with escalation procedures specific to treasury operations; Containment procedures: fund protection actions (emergency freeze, transfer to secure cold storage, policy lockdown); Covers key scenarios: custody platform compromise, unauthorized transaction, signer key compromise, vendor breach; Emergency contacts pre-documented: custody provider security team, SEAL 911, legal counsel
- Missed: Communication plan for stakeholders; Drills conducted at least annually; after major procedure changes; Drill documentation includes: date, participants, response times, issues identified, improvements made

**Gaps (3):**
- ❌ Communication plan for stakeholders
- ❌ Drills conducted at least annually; after major procedure changes
- ❌ Drill documentation includes: date, participants, response times, issues identified, improvements made

### ❌ tro-7.1.1: Vendor Security Management


**Gaps (4):**
- ❌ Initial due diligence before adoption: security certifications (SOC 2, ISO 27001), audit history, insurance coverage, incident history
- ❌ Ongoing monitoring: SOC report currency, security incident notifications, service availability tracking
- ❌ Contractual security requirements verified periodically (at least annually)
- ❌ Critical vendor changes (ownership, infrastructure, security posture) trigger re-evaluation

### ✅ tro-7.1.2: Backup Infrastructure and Alternate Access

🟢 **[/multisig-for-protocols/backup-signing-and-infrastructure](/multisig-for-protocols/backup-signing-and-infrastructure)** → UI Alternatives (full)
- Met: Alternate access methods for custody platforms documented and tested (e.g., API access, mobile app, secondary UI); Backup RPC providers configured; Procedures for operating treasury if primary custody platform is unavailable; Backup infrastructure tested at least annually

### ⚠️ tro-8.1.1: Financial Recordkeeping and Reconciliation

🟡 **[/treasury-operations/registration-documents](/treasury-operations/registration-documents)** → Security Configuration Template (partial)
- Met: All treasury transactions recorded with categorization, documentation, and authorization chain
- Missed: Periodic reconciliation between custody platform records, on-chain balances, and accounting records; Reconciliation frequency scaled to account classification: daily for Active Operations, weekly for Warm Storage, monthly for Cold Vault; Discrepancies investigated and resolved promptly; Treasury reporting procedures documented with defined cadence and audience

**Gaps (4):**
- ❌ Periodic reconciliation between custody platform records, on-chain balances, and accounting records
- ❌ Reconciliation frequency scaled to account classification: daily for Active Operations, weekly for Warm Storage, monthly for Cold Vault
- ❌ Discrepancies investigated and resolved promptly
- ❌ Treasury reporting procedures documented with defined cadence and audience

### ❌ tro-8.1.2: Insurance Coverage


**Gaps (4):**
- ❌ Coverage scope documented: what's covered (custody theft, hack, insider fraud) and what's excluded
- ❌ Coverage amounts appropriate relative to assets held
- ❌ Custody provider's insurance evaluated as part of vendor due diligence
- ❌ Insurance coverage reviewed at least annually or when treasury size changes significantly

## sfc-workspace-security (3✅ 19⚠️ 1❌)

### ⚠️ ws-1.1.1: Workspace Security Owner

🟡 **[/opsec/core-concepts/security-fundamentals](/opsec/core-concepts/security-fundamentals)** → Continuous Visibility (partial)
- Met: Accountability touches on establishing clear ownership for monitoring domains
- Missed: Does not address comprehensive workspace security ownership scope covering policy maintenance, device/account standards, access control oversight, periodic reviews, and incident escalation

**Gaps (1):**
- ❌ Full accountability scope covering policy maintenance, device and account standards, access control oversight, periodic reviews, and incident escalation - no page provides comprehensive guidance on designating a workspace security owner with this full scope

### ❌ ws-1.1.2: Workspace Security Policy


**Gaps (3):**
- ❌ Policy covering core expectations including device security, account hygiene, credential management, acceptable use, and incident reporting
- ❌ Written in plain language so all personnel can follow it
- ❌ Policy reviewed at least annually and after significant changes

### ⚠️ ws-1.1.3: Asset Inventory

🟡 **[/opsec/core-concepts/implementation-process](/opsec/core-concepts/implementation-process)** → Critical Asset Identification (partial)
- Met: Map and document assets; Asset discovery and classification
- Missed: Does not specify device inventory tracking (make/model, owner, OS version, encryption status, EDR/MDM enrollment); Does not cover account inventory with ownership; Does not address updates as devices/accounts are provisioned or decommissioned

**Gaps (3):**
- ❌ Device inventory tracking make/model, owner, OS version, encryption status, and EDR/MDM enrollment
- ❌ Account inventory covering organizational accounts with defined ownership
- ❌ Updated as devices/accounts are provisioned or decommissioned

### ✅ ws-1.1.4: System and Data Classification

🟢 **[/opsec/core-concepts/security-fundamentals](/opsec/core-concepts/security-fundamentals)** → Information Flow Control (full)
- Met: Classification levels defined (Public, Internal, Confidential, Restricted); Classification determines which controls apply; Data handling procedures for each classification level
🟢 **[/opsec/core-concepts/implementation-process](/opsec/core-concepts/implementation-process)** → Critical Asset Identification (full)
- Met: Apply practical classification system with clear categories; Classification reviewed when conditions change

### ⚠️ ws-2.1.1: Device Security Standards

🟡 **[/opsec/travel/guide](/opsec/travel/guide)** → Secure devices with encryption & updates (partial)
- Met: Full disk encryption enabled; Install latest OS and app updates; Strong authentication required (strong password/PIN)
- Missed: Automatic OS and application patching; Administrative privileges separated from daily-use accounts; Devices procured through verified supply chains; Device compliance verification and monitoring; BYOD policy
🟡 **[/encryption/volume-encryption](/encryption/volume-encryption)**  (partial)
- Met: Full disk encryption guidance
- Missed: OS patching; Authentication; Admin privileges separation; Supply chain; Compliance monitoring; BYOD policy
🟡 **[/encryption/partition-encryption](/encryption/partition-encryption)**  (partial)
- Met: Encryption for specific partitions
- Missed: OS patching; Authentication; Admin privileges separation; Supply chain; Compliance monitoring; BYOD policy

**Gaps (5):**
- ❌ Automatic OS and application patching enabled or enforced
- ❌ Administrative privileges separated from daily-use accounts
- ❌ Devices procured through verified supply chains and verified for integrity upon receipt
- ❌ Device compliance verified upon provisioning and monitored on an ongoing basis
- ❌ BYOD policy defining what personal devices can access and security controls required

### ⚠️ ws-2.1.2: Device Lifecycle Management

🟡 **[/opsec/travel/guide](/opsec/travel/guide)** → Back up and prepare for loss (partial)
- Met: Remote wipe capability mentioned (Find My, MDM); Procedures for lost devices (remote wipe, filing reports)
- Missed: Documented procedures for credential rotation after loss; Incident escalation procedures; Secure decommissioning with data sanitization and verified destruction
🟡 **[/opsec/control-domains/physical-environmental](/opsec/control-domains/physical-environmental)** → Physical Security of Critical Assets (partial)
- Met: Secure disposal procedures for equipment and media
- Missed: Remote lock and wipe capability; Response procedures for lost/stolen devices; Credential rotation

**Gaps (2):**
- ❌ Documented procedures for credential rotation after device loss or theft
- ❌ Incident escalation procedures for lost/stolen devices

### ⚠️ ws-2.1.3: Endpoint Protection

🟡 **[/opsec/travel/guide](/opsec/travel/guide)** → Inspect and clean your devices (partial)
- Met: Run anti-malware scan; Look for unusual behavior
- Missed: EDR/MDM deployed on all devices with documented coverage; Alert triage and response procedures; Compliance enforcement actions; Monitoring for malware, unauthorized software, policy violations

**Gaps (4):**
- ❌ EDR or MDM deployed on all organizational devices with documented coverage
- ❌ Alert triage and response procedures defined with severity-based escalation
- ❌ Compliance enforcement actions documented
- ❌ Monitoring coverage includes detection of malware, unauthorized software, and policy violations

### ✅ ws-2.1.4: Physical and Travel Security

🟢 **[/opsec/travel/guide](/opsec/travel/guide)**  (full)
- Met: Screen privacy and shoulder-surfing awareness (privacy screen filter, shield keypad); Travel security procedures (pre-travel assessment, secure travel practices, device security); High-risk travel procedures (loaner devices, enhanced controls); USB and charging security (avoid juice jacking, USB data blockers, no unknown USB drives); Devices physically secured (cable locks, room safes, carry-on luggage)
- Missed: Physical workspace requirements for on-site and remote work not comprehensively covered
🟢 **[/opsec/control-domains/physical-environmental](/opsec/control-domains/physical-environmental)** → Secure Workspace & Travel Security (full)
- Met: Physical workspace requirements (physical access controls, clean desk policy); Travel security procedures; Device security during travel; Secure storage options

### ⚠️ ws-3.1.1: Account Lifecycle Management

🟡 **[/guides/account_management/discord](/guides/account_management/discord)** → Roles (partial)
- Met: Review admin role members and permissions; Remove unnecessary permissions and members
- Missed: Account creation approval process; Accounts provisioned with minimum necessary permissions systematically; Account modification approval; Account revocation tied to offboarding; Service accounts inventoried with ownership

**Gaps (5):**
- ❌ Account creation requires documented approval from manager or designated authority
- ❌ Accounts provisioned with minimum necessary permissions (least privilege)
- ❌ Modification of account permissions requires documented approval
- ❌ Account revocation procedures tied to offboarding and role changes
- ❌ Service accounts and shared credentials inventoried with defined ownership

### ⚠️ ws-3.1.2: Multi-Factor Authentication

🟡 **[/opsec/travel/guide](/opsec/travel/guide)** → Protect Accounts with 2FA redundancy (partial)
- Met: Plan for 2FA redundancy; Disable SMS for 2FA; Register backup 2FA methods
- Missed: MFA required for all organizational accounts by default; Hardware security keys required for high-privilege accounts; Exceptions documented with justification and expiry
🟡 **[/opsec/control-domains/technical](/opsec/control-domains/technical)** → Two-Factor & Hardware Authentication (partial)
- Met: Multi-factor authentication for all access to sensitive systems; Hardware security keys for high-value accounts; Backup authentication methods and recovery processes; Phishing-resistant MFA (hardware keys)
- Missed: Exceptions documented with justification, compensating controls, and expiry date not explicitly covered
🟡 **[/guides/account_management/discord](/guides/account_management/discord)** → For Individuals - Account Security Checklist (partial)
- Met: 2FA enabled requirement; Require 2FA for moderation
- Missed: Hardware keys for high-privilege accounts; Phishing-resistant MFA preferred; Exceptions documented; Backup MFA methods

**Gaps (1):**
- ❌ Exceptions documented with justification, compensating controls, and expiry date

### ⚠️ ws-3.1.3: Organizational Account Security

🟡 **[/guides/account_management/discord](/guides/account_management/discord)** → Server Settings Checklist (partial)
- Met: Security configuration standards for Discord platform; Ownership verified through admin reviews
- Missed: Security standards for enterprise platforms broadly; Social media and public-facing accounts; Recovery methods restricted to organizational channels; Periodic review for drift

**Gaps (4):**
- ❌ Security configuration standards defined and applied for enterprise platforms (Google Workspace, Microsoft 365, collaboration tools)
- ❌ Social media and public-facing accounts secured with strong authentication and defined ownership
- ❌ Recovery methods restricted to organizational channels (no personal recovery emails or phone numbers)
- ❌ Account configurations reviewed periodically for drift or unauthorized changes

### ⚠️ ws-3.1.4: Credential Management Standards

🟡 **[/opsec/travel/guide](/opsec/travel/guide)** → Protect Accounts with 2FA redundancy (partial)
- Met: Password manager accessible (1Password Travel Mode); Backup codes stored securely
- Missed: Password manager required for all personnel; Unique strong passwords for every account; Individual accounts required (no sharing); Credential transmission only through encrypted channels; Rotation schedule; Enhanced controls for high-privilege credentials; Service account inventory
🟡 **[/awareness/cultivating-a-security-aware-mindset](/awareness/cultivating-a-security-aware-mindset)** → Password Management (partial)
- Met: Strong, unique passwords for each account; Password managers to securely store and generate passwords
- Missed: No passwords in plain text/documents/browsers requirement; Individual accounts required; Credential transmission security; Rotation schedule; Enhanced controls for high-privilege; Service account inventory
🟡 **[/guides/account_management/telegram](/guides/account_management/telegram)** → Account Security Checklist (partial)
- Met: Strong unique password that doesn't get reused
- Missed: Password manager required; Credential transmission; Rotation schedule; Enhanced controls; Service account inventory

**Gaps (6):**
- ❌ Password manager required for all personnel; no passwords stored in plain text, documents, or browsers
- ❌ Individual accounts required for all personnel — no sharing of personal login credentials
- ❌ Credential transmission only through encrypted channels (password manager sharing features, not email or chat)
- ❌ Credential rotation schedule defined based on risk; rotation triggered immediately after suspected compromise
- ❌ Enhanced controls for high-privilege credentials including stricter rotation, separate storage, and logged access
- ❌ Service account and API key inventory maintained with defined ownership

### ⚠️ ws-3.1.5: Access Reviews

🟡 **[/opsec/core-concepts/security-fundamentals](/opsec/core-concepts/security-fundamentals)** → Minimal Access Scopes (partial)
- Met: Conduct regular access reviews (quarterly for critical, annually for others); Reviews verify each user still requires current access
- Missed: Access adjusted within defined timelines when roles change; Unnecessary permissions revoked with documented evidence; Insider threat consideration
🟡 **[/guides/account_management/discord](/guides/account_management/discord)** → Regular Reviews (partial)
- Met: Monthly review of role permissions; Quarterly assessment of rules; Track changes and justifications
- Missed: Access adjusted when employees change roles; Insider threat damage scenarios; Reviews for critical vs standard systems

**Gaps (3):**
- ❌ Access adjusted within defined timelines when employees change roles
- ❌ Unnecessary permissions revoked promptly with documented evidence
- ❌ Insider threat consideration included — for each role, assess what damage could be done with current access

### ⚠️ ws-4.1.1: Software Evaluation and Approval

🟡 **[/opsec/travel/guide](/opsec/travel/guide)** → Minimize digital footprint & social visibility (partial)
- Met: Privacy-focused tools mentioned (Hide My Email, Tuta, ProtonMail)
- Missed: Evaluation criteria for software before adoption; Data privacy and leakage risk assessment; Approved software list; Browser extension approval; Dependency management

**Gaps (5):**
- ❌ Evaluation criteria for all software before adoption (browsers, extensions, IDEs, libraries, AI assistants, SaaS tools)
- ❌ Data privacy and leakage risks assessed (does the tool send data to third parties?)
- ❌ Approved software list maintained; unapproved software restricted
- ❌ Browser extension approval process defined
- ❌ Dependency management includes version pinning, vulnerability scanning, and update policies

### ✅ ws-4.1.2: Source Code and Repository Security

🟢 **[/guides/account_management/github](/guides/account_management/github)** → Repository Settings (full)
- Met: Role-based access control (Collaborators and teams); Branch protection rules enforced (require reviews, signed commits); Automated secret scanning enabled (Code security settings); Pre-commit hooks/CI checks (Push protection for secrets); Repository security audited periodically (Sessions, SSH keys, webhooks review)

### ⚠️ ws-5.1.1: Network Security

🟡 **[/opsec/travel/guide](/opsec/travel/guide)** → Network safety – avoid untrusted Wi-Fi & Bluetooth (partial)
- Met: VPN or cellular connection preferred for sensitive operations; Wi-Fi security standards (disable auto-connect, avoid public Wi-Fi); Cellular or personal hotspot preferred over public Wi-Fi
- Missed: Network segmentation not covered
🟡 **[/opsec/control-domains/technical](/opsec/control-domains/technical)** → Network & Communication Security (partial)
- Met: Network segmentation based on security requirements; Secure remote access solutions (VPN); Network monitoring

### ⚠️ ws-5.1.2: Secure Communications

🟡 **[/opsec/travel/guide](/opsec/travel/guide)** → Plan emergency and incident responses (partial)
- Met: Fallback plan for communication (safe words, beware deepfakes)
- Missed: End-to-end encrypted channels used; Identity verification procedures for sensitive requests; Anti-impersonation protocols documented; Email security (SPF, DKIM, DMARC); Procedures for channel compromise
🟡 **[/guides/account_management/telegram](/guides/account_management/telegram)** → Use Secret Chats for Enhanced Privacy (partial)
- Met: End-to-end encrypted channels (Secret Chats); Identity verification (compare encryption keys)
- Missed: Anti-impersonation protocols beyond basic verification; Email security configuration; Procedures for channel compromise
🟡 **[/opsec/control-domains/technical](/opsec/control-domains/technical)** → Network & Communication Security (partial)
- Met: Encrypted communications protecting data in transit
- Missed: Identity verification procedures; Anti-impersonation protocols; Email security (SPF, DKIM, DMARC); Channel compromise procedures

**Gaps (3):**
- ❌ Anti-impersonation protocols documented (e.g., secondary channel verification, code words, video confirmation)
- ❌ Email security configured (SPF, DKIM, DMARC) to prevent spoofing
- ❌ Procedures for channel compromise including switching to backup channels

### ⚠️ ws-6.1.1: Security Onboarding

🟡 **[/opsec/control-domains/people](/opsec/control-domains/people)** → Personnel Security Measures (partial)
- Met: Pre-employment screening procedures; Security agreements for all team members; Security responsibilities in job descriptions
- Missed: Security onboarding includes device provisioning, account creation, MFA setup, and initial training; New personnel acknowledge policies before access; Onboarding checklist documented and consistently applied

**Gaps (3):**
- ❌ Security onboarding includes device provisioning, account creation, MFA setup, and initial security training
- ❌ New personnel acknowledge security policies before access is granted
- ❌ Onboarding checklist documented and consistently applied

### ⚠️ ws-6.1.2: Security Offboarding

🟡 **[/opsec/travel/guide](/opsec/travel/guide)** → Back up and prepare for loss (partial)
- Met: Remote wipe capability for devices
- Missed: All account access revoked within 24 hours; Credentials rotated for shared systems; Offboarding checklist; Involuntary departures trigger immediate revocation
🟡 **[/awareness/understanding-threat-vectors](/awareness/understanding-threat-vectors)**  (partial)
- Met: General awareness of insider threats
- Missed: Specific offboarding procedures; Account revocation timeline; Credential rotation; Device return and sanitization; Offboarding checklist
🟡 **[/guides/account_management/discord](/guides/account_management/discord)** → Regular Reviews (partial)
- Met: Remove unnecessary role members
- Missed: 24-hour revocation timeline; Device return; Credential rotation; Comprehensive offboarding checklist; Involuntary departure procedures

**Gaps (5):**
- ❌ All account access revoked within 24 hours of departure
- ❌ Devices returned and verified for data sanitization
- ❌ Credentials and secrets rotated for any shared systems the departing person accessed
- ❌ Offboarding checklist documented covering: account deprovisioning, device return, credential rotation, access to organizational repositories and tools, recovery of company property
- ❌ Involuntary departures trigger immediate access revocation before notification where feasible

### ⚠️ ws-6.1.3: Security Awareness and Training

🟡 **[/awareness/staying-informed-and-continuous-learning](/awareness/staying-informed-and-continuous-learning)** → Comprehensive Security Training Framework (partial)
- Met: Training covers phishing, social engineering, device security, credential hygiene, incident reporting; Training content updated annually; Crypto-specific risks covered (fake job offers, malicious extensions, clipboard hijacking, social engineering via DMs)
- Missed: Phishing simulations conducted quarterly; Follow-up training for those who fail simulations
🟡 **[/opsec/control-domains/people](/opsec/control-domains/people)** → Security Training & Culture (partial)
- Met: Comprehensive security awareness program; Role-specific training; Continuous learning about emerging threats
- Missed: Phishing simulations quarterly; Follow-up training for failures; Crypto-specific risks detail
🟡 **[/opsec/appendices/case-studies](/opsec/appendices/case-studies)**  (partial)
- Met: Real-world scenarios for training; Tabletop exercises
- Missed: Regular phishing simulations; Follow-up training process; Training content update schedule; Crypto-specific risks coverage

**Gaps (2):**
- ❌ Phishing simulations conducted at least quarterly
- ❌ Follow-up training required for personnel who fail simulations

### ⚠️ ws-7.1.1: Workspace Security Monitoring and Incident Response

🟡 **[/opsec/core-concepts/security-fundamentals](/opsec/core-concepts/security-fundamentals)** → Continuous Visibility (partial)
- Met: Multi-layered monitoring strategy; Regular testing cadence; Structured incident management process; Post-incident reviews
- Missed: Monitoring for workspace-specific threats (account takeovers, unauthorized access, credential leaks, device compromise, data exfiltration); Response procedures for workspace scenarios; Credential leak monitoring
🟡 **[/opsec/appendices/case-studies](/opsec/appendices/case-studies)** → Tabletop Exercises (partial)
- Met: Incident response scenarios and procedures; Tabletop exercises for testing
- Missed: Ongoing monitoring in place; Credential leak monitoring; Documented procedures for specific workspace scenarios

**Gaps (3):**
- ❌ Monitoring in place for common workspace threats: account takeovers, unauthorized access, credential leaks, device compromise, data exfiltration
- ❌ Response procedures documented for key scenarios: compromised account, compromised device, data leak, insider threat event
- ❌ Credential leak monitoring (dark web, breach databases, paste sites, code repositories)

### ⚠️ ws-7.1.2: Insider Threat Assessment

🟡 **[/opsec/core-concepts/security-fundamentals](/opsec/core-concepts/security-fundamentals)** → Minimal Access Scopes (partial)
- Met: Least-privilege access enforced
- Missed: Damage scenarios documented for each role; Separation of duties for critical operations; Assessed during access reviews
🟡 **[/opsec/control-domains/people](/opsec/control-domains/people)** → Insider-Threat Mitigation (partial)
- Met: Least-privilege access enforced across all systems; Monitoring for critical systems and sensitive data access; Guidelines for identifying concerning behaviors
- Missed: Damage scenarios documented for each role not explicitly covered; Separation of duties applied for critical operations not detailed

**Gaps (2):**
- ❌ Damage scenarios documented for each role (what could this person do if compromised or malicious?)
- ❌ Separation of duties applied for critical operations (no single person can deploy to production, execute large transactions, and manage access controls)

### ⚠️ ws-7.1.3: Third-Party Access Management

🟡 **[/opsec/core-concepts/security-fundamentals](/opsec/core-concepts/security-fundamentals)** → Minimal Access Scopes (partial)
- Met: Just-in-time access for administrative functions; Time-based restrictions to elevated privileges
- Missed: Third-party access requires documented approval with scope and expiry; Access limited to minimum necessary systems; Automatic revocation upon contract expiry; Audit trails for third-party access; Vendor security evaluation
🟡 **[/guides/account_management/discord](/guides/account_management/discord)** → Integrations (partial)
- Met: Review bot permissions and remove unnecessary; Least privilege for integrations
- Missed: Documented approval with scope and expiry; Automatic revocation upon contract end; Audit trails; Vendor security evaluation before granting access

**Gaps (5):**
- ❌ Third-party access requires documented approval with defined scope and expiry date
- ❌ Access limited to minimum necessary systems and data
- ❌ Access revoked automatically upon contract expiry or project completion
- ❌ Audit trails maintained for all third-party access
- ❌ Third-party vendor security evaluated before granting access (security certifications, incident history)

## Most Referenced Framework Pages

| Page | Controls |
|------|----------|
| /multisig-for-protocols/emergency-procedures | 13 |
| /wallet-security/secure-multisig-best-practices | 12 |
| /multisig-for-protocols/implementation-checklist | 11 |
| /opsec/travel/guide | 10 |
| /opsec/core-concepts/security-fundamentals | 6 |
| /guides/account_management/discord | 6 |
| /infrastructure/domain-and-dns-security/registrar-and-locks | 5 |
| /infrastructure/domain-and-dns-security/monitoring-and-alerting | 5 |
| /treasury-operations/registration-documents | 5 |
| /treasury-operations/enhanced-controls | 5 |
| /multisig-for-protocols/setup-and-configuration | 4 |
| /secure-software-development/secure-code-repositories-version-control | 3 |
| /devsecops/continuous-integration-continuous-deployment | 3 |
| /multisig-for-protocols/backup-signing-and-infrastructure | 3 |
| /wallet-security/seed-phrase-management | 3 |
| /opsec/control-domains/technical | 3 |
| /opsec/control-domains/people | 3 |
| /devsecops/integrated-development-environments | 2 |
| /infrastructure/domain-and-dns-security/dnssec-and-email | 2 |
| /incident-management/playbooks/seal-911-war-room-guidelines | 2 |
