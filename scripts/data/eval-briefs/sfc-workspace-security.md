# Evaluation Brief: sfc-workspace-security

## TASK

For each control below, evaluate whether the candidate framework pages ACTUALLY meet the baseline requirements.
A page must SUBSTANTIVELY address the baseline — not just mention related keywords.
Be strict: if a baseline says "reviewed at least annually" and the page doesn't mention review cadence, that baseline is NOT met.

## CONTROLS (23 total)

### ws-1.1.1: Workspace Security Owner
**Question:** Is there a clearly designated person or team accountable for workspace security?
**Baselines (1):**
  1. Accountability scope covers policy maintenance, device and account standards, access control oversight, periodic reviews, and incident escalation
**Candidate pages:** /opsec/core-concepts/security-fundamentals, /opsec/principles/principles, /opsec/travel/guide

### ws-1.1.2: Workspace Security Policy
**Question:** Do you maintain a workspace security policy that is accessible and understood by all personnel?
**Baselines (3):**
  1. Policy covers core expectations including device security, account hygiene, credential management, acceptable use, and incident reporting
  2. Written in plain language so all personnel can follow it
  3. Policy reviewed at least annually and after significant changes (security incidents, technology shifts, organizational restructuring)
**Candidate pages:** /opsec/travel/guide, /awareness/understanding-threat-vectors, /awareness/cultivating-a-security-aware-mindset

### ws-1.1.3: Asset Inventory
**Question:** Do you maintain an inventory of organizational devices and accounts with defined ownership?
**Baselines (4):**
  1. Scoped to devices and accounts with access to sensitive systems or data
  2. Device inventory tracks make/model, owner, OS version, encryption status, and EDR/MDM enrollment
  3. Account inventory covers organizational accounts (eg. email, cloud, social media) with defined ownership
  4. Updated as devices/accounts are provisioned or decommissioned
**Candidate pages:** /opsec/travel/guide, /encryption/volume-encryption, /encryption/partition-encryption

### ws-1.1.4: System and Data Classification
**Question:** Do you classify systems and data by sensitivity to determine appropriate security controls?
**Baselines (3):**
  1. Classification levels defined (e.g., critical, high, standard)
  2. Classification determines which controls apply (access restrictions, monitoring, encryption, backup requirements)
  3. Classification reviewed when systems, data sensitivity, or organizational structure change
**Candidate pages:** /opsec/travel/guide, /opsec/control-domains/technical, /opsec/core-concepts/security-fundamentals

### ws-2.1.1: Device Security Standards
**Question:** Do you define and enforce security standards for organizational devices?
**Baselines (7):**
  1. Full disk encryption enabled on all devices
  2. Automatic OS and application patching enabled or enforced
  3. Strong authentication required (password/biometric, auto-lock timeouts, lock screens)
  4. Administrative privileges separated from daily-use accounts
  5. Devices procured through verified supply chains and verified for integrity upon receipt
  6. Device compliance verified upon provisioning and monitored on an ongoing basis
  7. BYOD policy defining what personal devices can access and the security controls required (e.g., MDM enrollment, separate work profiles)
**Candidate pages:** /opsec/travel/guide, /encryption/volume-encryption, /encryption/partition-encryption

### ws-2.1.2: Device Lifecycle Management
**Question:** Do you have procedures for device loss, theft, and secure decommissioning?
**Baselines (3):**
  1. Remote lock and wipe capability for all organizational devices
  2. Documented procedures for responding to lost or stolen devices (notification, remote wipe, credential rotation, incident escalation)
  3. Secure decommissioning procedures including data sanitization and verified destruction for storage media
**Candidate pages:** /opsec/travel/guide, /opsec/control-domains/technical, /opsec/control-domains/physical-environmental

### ws-2.1.3: Endpoint Protection
**Question:** Do you deploy and monitor endpoint protection on organizational devices?
**Baselines (4):**
  1. EDR or MDM deployed on all organizational devices with documented coverage
  2. Alert triage and response procedures defined with severity-based escalation
  3. Compliance enforcement actions documented (e.g., quarantine non-compliant devices, block access)
  4. Monitoring coverage includes detection of malware, unauthorized software, and policy violations
**Candidate pages:** /opsec/core-concepts/security-fundamentals, /opsec/travel/guide, /guides/account_management/discord

### ws-2.1.4: Physical and Travel Security
**Question:** Do you maintain physical security requirements for workspaces and travel?
**Baselines (6):**
  1. Physical workspace requirements defined for both on-site and remote work environments
  2. Screen privacy and shoulder-surfing awareness enforced
  3. Travel security procedures documented covering device handling, network usage, and border crossings
  4. High-risk travel procedures defined (loaner devices, enhanced controls, check-in schedules)
  5. USB and charging security addressed (data blockers, no public USB ports)
  6. Devices physically secured when not in active use (cable locks, safes, carry-on luggage for travel)
**Candidate pages:** /opsec/travel/guide, /opsec/control-domains/physical-environmental, /opsec/core-concepts/security-fundamentals

### ws-3.1.1: Account Lifecycle Management
**Question:** Do you have procedures for provisioning, modifying, and revoking user accounts?
**Baselines (5):**
  1. Account creation requires documented approval from the account owner's manager or designated authority
  2. Accounts provisioned with minimum necessary permissions (least privilege)
  3. Modification of account permissions requires documented approval
  4. Account revocation procedures tied to offboarding and role changes
  5. Service accounts and shared credentials inventoried with defined ownership
**Candidate pages:** /guides/account_management/discord, /opsec/travel/guide, /dprk-it-workers/techniques-tactics-and-procedures

### ws-3.1.2: Multi-Factor Authentication
**Question:** Do you enforce multi-factor authentication across organizational accounts?
**Baselines (5):**
  1. MFA required for all organizational accounts by default
  2. Hardware security keys required for high-privilege and critical accounts (admin, infrastructure, custody)
  3. Phishing-resistant MFA preferred (FIDO2/WebAuthn, hardware keys) over SMS or TOTP where available
  4. Exceptions documented with justification, compensating controls, and expiry date
  5. Backup MFA methods configured for account recovery
**Candidate pages:** /opsec/travel/guide, /opsec/control-domains/technical, /guides/account_management/discord

### ws-3.1.3: Organizational Account Security
**Question:** Do you maintain security standards for all organizational accounts, including enterprise platforms and external services?
**Baselines (5):**
  1. Security configuration standards defined and applied for enterprise platforms (Google Workspace, Microsoft 365, collaboration tools)
  2. Social media and public-facing accounts secured with strong authentication and defined ownership
  3. Ownership verified and documented for all organizational accounts
  4. Recovery methods restricted to organizational channels (no personal recovery emails or phone numbers on organizational accounts)
  5. Account configurations reviewed periodically for drift or unauthorized changes
**Candidate pages:** /opsec/travel/guide, /guides/account_management/discord, /opsec/core-concepts/security-fundamentals

### ws-3.1.4: Credential Management Standards
**Question:** Do you enforce credential management standards, including secure storage and individual accountability?
**Baselines (7):**
  1. Password manager required for all personnel; no passwords stored in plain text, documents, or browsers
  2. Unique, strong passwords for every account (minimum length/complexity standards defined)
  3. Individual accounts required for all personnel — no sharing of personal login credentials
  4. When credentials must be provisioned or shared (e.g., service accounts, API keys, onboarding), transmission only through encrypted channels (password manager sharing features, not email or chat)
  5. Credential rotation schedule defined based on risk; rotation triggered immediately after suspected compromise
  6. Enhanced controls for high-privilege credentials (admin accounts, service accounts, API keys) including stricter rotation, separate storage, and logged access
  7. Service account and API key inventory maintained with defined ownership
**Candidate pages:** /opsec/travel/guide, /awareness/cultivating-a-security-aware-mindset, /guides/account_management/telegram

### ws-3.1.5: Access Reviews
**Question:** Do you conduct periodic access reviews and promptly adjust permissions when roles change?
**Baselines (5):**
  1. Scheduled access reviews at least quarterly for critical systems, annually for others
  2. Access adjusted within defined timelines when employees change roles
  3. Reviews verify each user still requires their current level of access
  4. Unnecessary permissions revoked promptly with documented evidence
  5. Insider threat consideration included — for each role, assess what damage could be done with current access
**Candidate pages:** /opsec/core-concepts/security-fundamentals, /guides/account_management/discord, /opsec/travel/guide

### ws-4.1.1: Software Evaluation and Approval
**Question:** Do you evaluate and approve software, extensions, and tools before organizational use?
**Baselines (5):**
  1. Evaluation criteria for all software before adoption (browsers, extensions, IDEs, libraries, AI assistants, SaaS tools)
  2. Data privacy and leakage risks assessed (does the tool send data to third parties for training or analytics?)
  3. Approved software list maintained; unapproved software restricted
  4. Browser extension approval process defined
  5. Dependency management includes version pinning, vulnerability scanning, and update policies
**Candidate pages:** /opsec/travel/guide, /opsec/core-concepts/security-fundamentals, /opsec/core-concepts/implementation-process

### ws-4.1.2: Source Code and Repository Security
**Question:** Do you secure source code repositories against unauthorized access and credential exposure?
**Baselines (5):**
  1. Role-based access control with least-privilege permissions
  2. Branch protection rules enforced on critical branches (require reviews, signed commits)
  3. Automated secret scanning enabled to detect credentials, API keys, and private keys in code
  4. Pre-commit hooks or CI checks to prevent secrets from being committed
  5. Repository security audited periodically (access permissions, configuration, open PRs)
**Candidate pages:** /guides/account_management/github, /opsec/travel/guide, /opsec/core-concepts/security-fundamentals

### ws-5.1.1: Network Security
**Question:** Do you enforce secure network access for organizational systems?
**Baselines (4):**
  1. VPN or zero-trust network access required for accessing internal resources remotely
  2. Wi-Fi security standards defined (no auto-connect, avoid public Wi-Fi for sensitive operations)
  3. Network segmentation applied where applicable (separate guest networks, development environments)
  4. Cellular or personal hotspot preferred over public Wi-Fi for sensitive work
**Candidate pages:** /opsec/travel/guide, /opsec/core-concepts/security-fundamentals, /opsec/control-domains/technical

### ws-5.1.2: Secure Communications
**Question:** Do you secure organizational communications and verify identity for sensitive interactions?
**Baselines (5):**
  1. End-to-end encrypted channels used for sensitive communications
  2. Identity verification procedures established for sensitive requests (e.g., access changes, financial approvals, credential sharing)
  3. Anti-impersonation protocols documented (e.g., secondary channel verification, code words, video confirmation)
  4. Email security configured (SPF, DKIM, DMARC) to prevent spoofing
  5. Procedures for channel compromise including switching to backup channels
**Candidate pages:** /opsec/travel/guide, /guides/account_management/telegram, /opsec/control-domains/technical

### ws-6.1.1: Security Onboarding
**Question:** Do you verify employee identity and provide security onboarding before granting system access?
**Baselines (5):**
  1. Identity and authorization verified before any access is provisioned
  2. Background checks or identity verification appropriate to role sensitivity
  3. Security onboarding includes device provisioning, account creation, MFA setup, and initial security training
  4. New personnel acknowledge security policies before access is granted
  5. Onboarding checklist documented and consistently applied
**Candidate pages:** /opsec/travel/guide, /opsec/control-domains/people, /opsec/core-concepts/security-fundamentals

### ws-6.1.2: Security Offboarding
**Question:** Do you have comprehensive offboarding procedures for departing personnel?
**Baselines (5):**
  1. All account access revoked within 24 hours of departure
  2. Devices returned and verified for data sanitization
  3. Credentials and secrets rotated for any shared systems the departing person accessed
  4. Offboarding checklist documented covering: account deprovisioning, device return, credential rotation, access to organizational repositories and tools, recovery of company property
  5. Involuntary departures trigger immediate access revocation before notification where feasible
**Candidate pages:** /opsec/travel/guide, /awareness/understanding-threat-vectors, /guides/account_management/discord

### ws-6.1.3: Security Awareness and Training
**Question:** Do you maintain a security awareness program with regular training and testing?
**Baselines (5):**
  1. Training covers workspace security topics: phishing, social engineering, device security, credential hygiene, and incident reporting
  2. Phishing simulations conducted at least quarterly
  3. Follow-up training required for personnel who fail simulations
  4. Training content updated annually and after significant threats or procedure changes
  5. Covers crypto-specific risks: fake job offers, malicious browser extensions, clipboard hijacking, social engineering via DMs
**Candidate pages:** /awareness/staying-informed-and-continuous-learning, /opsec/control-domains/people, /opsec/appendices/case-studies

### ws-7.1.1: Workspace Security Monitoring and Incident Response
**Question:** Do you detect and respond to workspace security incidents?
**Baselines (5):**
  1. Monitoring in place for common workspace threats: account takeovers, unauthorized access, credential leaks, device compromise, data exfiltration
  2. Response procedures documented for key scenarios: compromised account, compromised device, data leak, insider threat event
  3. Escalation paths defined with severity levels
  4. Credential leak monitoring (dark web, breach databases, paste sites, code repositories)
  5. Incidents documented with timeline, root cause, actions taken, and lessons learned
**Candidate pages:** /opsec/core-concepts/security-fundamentals, /opsec/appendices/case-studies, /opsec/travel/guide

### ws-7.1.2: Insider Threat Assessment
**Question:** Do you assess insider threat risks and enforce least-privilege access for each role?
**Baselines (4):**
  1. Damage scenarios documented for each role (what could this person do if compromised or malicious?)
  2. Least-privilege access enforced across all systems
  3. Separation of duties applied for critical operations (e.g., no single person can deploy to production, execute large transactions, and manage access controls)
  4. Assessed during periodic access reviews
**Candidate pages:** /opsec/core-concepts/security-fundamentals, /opsec/travel/guide, /opsec/control-domains/people

### ws-7.1.3: Third-Party Access Management
**Question:** Do you manage third-party access with time-limited, purpose-specific permissions?
**Baselines (5):**
  1. Third-party access requires documented approval with defined scope and expiry date
  2. Access limited to minimum necessary systems and data
  3. Access revoked automatically upon contract expiry or project completion
  4. Audit trails maintained for all third-party access
  5. Third-party vendor security evaluated before granting access (security certifications, incident history)
**Candidate pages:** /opsec/core-concepts/security-fundamentals, /opsec/appendices/glossary, /guides/account_management/discord

---

## FRAMEWORK PAGES (18 unique)

### PAGE: /opsec/core-concepts/security-fundamentals
**Title:** Security Fundamentals
**Referenced by controls:** ws-1.1.1, ws-1.1.4, ws-2.1.3, ws-2.1.4, ws-3.1.3, ws-3.1.5, ws-4.1.1, ws-4.1.2, ws-5.1.1, ws-6.1.1, ws-7.1.1, ws-7.1.2, ws-7.1.3

# Security Fundamentals




> 🔑 **Key Takeaway**: Effective security operations are built on five practical fundamentals: layered protective
> measures, minimized access scopes, controlled information flows, system isolation, and continuous visibility — working
> together to secure critical assets in dynamic environments.

## Relationship to Implementation Process

This document outlines the foundational security approaches that should be embedded throughout your organization's
operations. They complement the practical
[Operational Implementation Process](/opsec/core-concepts/implementation-process),
which defines specific action steps:

- These fundamentals establish **enduring approaches** that shape your security architecture
- The implementation process provides a **sequential workflow** for security teams to follow

While these fundamentals provide the security principles that should be consistently applied across your environment,
the implementation process offers a structured methodology for putting security into practice. Both elements must work
in concert - these fundamentals guide your overall approach, while the implementation process provides the tactical
roadmap.

For organizations just beginning their security journey, start with the
[Operational Implementation Process](/opsec/core-concepts/implementation-process) for concrete steps.

The ultimate goal is to prevent unauthorized access to systems and information that could cause operational, financial,
or reputational harm if compromised.

> **Practical Example: Web3 Organization**
>
> Consider a Web3 project managing a DeFi protocol with a treasury of $10M in assets. Practical security fundamentals in
> action include:
>
> - **Layered protection**: Hardware security modules for key storage, multi-signature requirements (3-of-5) for
> transactions, automated monitoring for unusual patterns, and regular third-party security audits
> - **Minimal access scopes**: Deployment keys accessible only to specific DevOps team members, with different
> permission levels strictly enforced between development, staging, and production environments
> - **Information flow control**: Private keys for multi-signature wallets distributed among trusted team members based
> on role, with sensitive incident response procedures restricted to the security team
> - **System isolation**: Clear separation between development environments and production systems, with treasury
> management isolated from day-to-day operations
> - **Continuous visibility**: Real-time monitoring systems tracking transaction patterns, weekly security reviews, and
> quarterly penetration tests with findings addressed in prioritized sprints

## 1. Layered Protection

Implement multiple overlapping security controls so that if one mechanism fails, others will continue to protect your
assets.

> **🔗 Related Framework:** This approach is reinforced in frameworks like [Infrastructure](/infrastructure/overview)
> with [Zero-Trust Principles](/infrastructure/zero-trust-principles) and
> [Network Security](/infrastructure/network-security).

### Practical Application

1. Implement multiple defensive mechanisms that protect against the same risks using different methods
   - Example: Protect admin interfaces using network ACLs, MFA, time-limited access windows, and anomaly detection
2. Deploy protection at each layer of your technology stack
   - Network layer: Firewalls, network segmentation, DDoS protection
   - Host layer: Endpoint protection, host-based IDS, secure configuration
   - Application layer: Input validation, output encoding, API security
   - Data layer: Encryption, access controls, data loss prevention
3. Identify and eliminate single points of failure in your security architecture
   - Map defense coverage to ensure overlapping protections
   - Document security dependencies and create contingency plans
4. Test defensive layers regularly through realistic scenarios
   - Conduct tabletop exercises focused on specific defensive failures
   - Use red team exercises to validate defense-in-depth effectiveness
5. Maintain a continuous improvement cycle for each defensive layer
   - Review and update security controls after incidents or near-misses
   - Track industry developments to identify emerging defensive tactics

## 2. Minimal Access Scopes

Grant users, systems, and processes only the specific permissions they need to perform their required functions and
nothing more.

> **🔗 Related Framework:** For detailed implementation, see [Identity and Access Management](/iam/overview) and
> [Role-Based Access Control](/iam/role-based-access-control).

### Practical Application

1. Implement a structured permission model that starts with zero access
   - Default deny: Require explicit permission grants for all access
   - Document justification for each permission granted
   - Create standardized role templates for common job functions
2. Establish automated processes for access lifecycle management
   - Onboarding: Provision minimal initial access based on role
   - Role changes: Adjust permissions when responsibilities change
   - Offboarding: Remove all access immediately upon departure
3. Apply time-based restrictions to elevated privileges
   - Use just-in-time access for administrative functions
   - Implement automatic session termination after periods of inactivity
   - Require re-authentication for sensitive operations
4. Conduct regular access reviews with verification
   - Quarterly: Review all privileged accounts and service accounts
   - Semi-annually: Audit all standard user accounts and group memberships
   - Use automated tools to identify inactive or excessive permissions
5. Implement technical controls to enforce minimal access
   - Application permissions: API scopes, feature flags, entitlement checks
   - Infrastructure permissions: IAM policies, network ACLs, resource policies
   - Database permissions: Row-level security, column-level controls

## 3. Information Flow Control

Ensure sensitive information is only accessible to those with a legitimate need to know, with restrictions on how that
information can be shared and used.

{/* > **🔗 Related Framework:** This approach is supported by practices in [Data
Protection](/opsec/old/data-protection/overview) and aspects of [Privacy](/privacy/overview). */}

### Practical Application

1. Implement a practical data classification system with clear handling requirements
   - Public: Information approved for general distribution
   - Internal: Business information for employee use only
   - Confidential: Sensitive information requiring specific protections
   - Restricted: Critical information with strictly controlled access
2. Define and enforce data handling procedures for each classification level
   - Storage requirements: Where information can be stored
   - Transmission rules: How information can be sent/shared
   - Processing restrictions: How information can be used
   - Retention limits: How long information should be kept
3. Deploy technical controls to enforce information flow policies
   - Data loss prevention tools to monitor and block unauthorized sharing
   - Encryption for data at rest and in transit based on sensitivity
   - Information rights management for persistent protection
4. Establish secure channels for different types of communication
   - High-sensitivity: End-to-end encrypted messaging with disappearing messages
   - Medium-sensitivity: Encrypted collaboration platforms with access controls
   - Low-sensitivity: Standard business communication tools
5. Train users on practical information handling procedures
   - Provide clear guidelines with concrete examples
   - Use realistic scenarios in training materials
   - Conduct periodic verification checks

## 4. System Isolation

Segment systems and networks into isolated zones to contain security breaches and limit lateral movement.

### Practical Application

1. Implement network segmentation based on security requirements
   - Create security zones with consistent trust levels
   - Implement strict traffic control between zones
   - Document and regularly review allowed communication paths
2. Establish environment separation with controlled boundaries
   - Maintain distinct development, testing, staging, and production environments
   - Implement one-way data flows from higher to lower environments
   - Control code promotion processes between environments
3. Isolate high-value systems with enhanced protection
   - Place critical infrastructure on dedicated hardware
   - Example: Run blockchain nodes on dedicated hardware isolated from general workstations
   - Implement jump servers or privileged access workstations for administrative access
4. Apply micro-segmentation where appropriate
   - Container isolation: Enforce pod security policies and network policies
   - Application segmentation: Implement service meshes with mutual TLS
   - Process isolation: Use containerization, virtualization, or sandboxing
5. Monitor and enforce boundary controls
   - Implement egress filtering to control outbound connections
   - Deploy internal firewalls between segments
   - Use network monitoring to detect unauthorized communication attempts

## 5. Continuous Visibility

Maintain ongoing awareness of your security posture through active monitoring, testing, and continuous improvement.

> **🔗 Related Framework:** For implementation details, see the [Monitoring](/monitoring/overview) framework, including
> [Guidelines](/monitoring/guidelines) and [Thresholds](/monitoring/thresholds). Also relevant is
> [Incident Management](/incident-management/overview) for response to detected issues.

### Practical Application

1. Implement a multi-layered monitoring strategy
   - System monitoring: Performance, availability, and system integrity
   - Security monitoring: Threat detection, anomaly identification, and correlation
   - Compliance monitoring: Policy enforcement and regulatory requirements
   - Establish clear ownership for each monitoring domain
2. Define actionable metrics tied to security objectives
   - Leading indicators: Metrics that help predict future issues
   - Example: Percentage of systems with current patches
   - Lagging indicators: Metrics that measure past performance
   - Example: Mean time to detect and respond to incidents
3. Establish a regular testing cadence to validate security controls
   - Vulnerability scanning: Weekly automated scans
   - Penetration testing: Quarterly focused tests on critical systems
   - Red team exercises: Annual comprehensive assessments
4. Implement a structured incident management process
   - Define clear incident response procedures with specific roles
   - Conduct regular tabletop exercises to practice response
   - Perform thorough post-incident reviews focused on improvement
   - Create feedback loops to security controls based on incidents
5. Maintain an active threat intelligence program
   - Collect intelligence relevant to your specific environment
   - Analyze and contextualize threats for your organization
   - Disseminate actionable intelligence to appropriate teams
   - Use threat intelligence to drive security improvements

---

---

### PAGE: /opsec/principles/principles
**Title:** OpSec Core Principles
**Referenced by controls:** ws-1.1.1

# Operational Security Principles




> 🔑 **Key Takeaway**: Effective OpSec relies on five core principles: layered defenses, minimal access rights,
> need-to-know information sharing, system compartmentalization, and continuous monitoring—all working together to
> protect sensitive information from adversaries.

The goal is to prevent adversaries from gaining access to information that could be harmful if disclosed or compromised.

> **Practical Example: Web3 Organization**
>
> Consider a Web3 project managing a DeFi protocol with a treasury of $10M in assets. Proper operational security would
> involve:
>
> - **Multiple security layers**: Hardware wallets for cold storage, multi-signature requirements for transactions,
> regular security audits, and continuous monitoring
> - **Access control**: Only specific team members have access to deployment keys, with different permission levels for
> development, testing, and production environments
> - **Compartmentalized information**: Private keys for multi-signature wallets are distributed among trusted team
> members with no single person having access to all keys, and sensitive incident response procedures are only shared
> with the security team
> - **Regular threat assessment**: The team conducts quarterly reviews of potential attack vectors, from smart contract
> vulnerabilities to [social engineering](/awareness/understanding-threat-vectors) attempts targeting team members

## 1. Defense in Depth

Defense in Depth is the practice of layering security controls throughout your systems and processes, so that if one
control fails, others will provide protection.

> **🔗 Related Framework:** This principle is applied across multiple frameworks including
> [Infrastructure](/infrastructure/overview) with [Zero-Trust Principles](/infrastructure/zero-trust-principles) and
> [Network Security](/infrastructure/network-security).

### Implementation

1. Deploy multiple security controls that address the same risk in different ways
2. Implement security at various layers: physical, technical, administrative, and human
3. Ensure no single point of failure exists in your security architecture
4. Review the effectiveness of security layers regularly to identify gaps
5. Foster a [security-aware mindset](/awareness/cultivating-a-security-aware-mindset) across all team members

## 2. Principle of Least Privilege

The Principle of Least Privilege dictates that users, systems, and processes should have only the minimum access rights
necessary to perform their functions.

> **🔗 Related Framework:** For comprehensive implementation, see [Identity and Access Management](/iam/overview) and
> [Role-Based Access Control](/iam/role-based-access-control).

### Implementation

1. Grant the minimum level of access required for users to perform their duties
2. Review and adjust access rights when roles change
3. Implement role-based access control (RBAC) to standardize permissions
4. Use time-limited and just-in-time access for administrative privileges
5. Regularly audit access rights to identify and remove excessive permissions
6. Establish a thorough offboarding process to immediately revoke access when team members leave
7. Remove credentials for deactivated accounts, as these can become security liabilities even when dormant

## 3. Need-to-Know Basis

Information should only be shared with individuals who require that information to perform their duties.

> **🔗 Related Framework:** This principle is supported by practices in [Data
> Protection](/opsec/old/data-protection/overview) and aspects of [Privacy](/privacy/overview).

### Implementation

1. Classify information based on sensitivity and restrict access accordingly
2. Compartmentalize sensitive information to limit exposure in case of a breach
3. Implement clear data handling and sharing policies
4. Train team members on proper handling and sharing of sensitive information through regular [security
training]
{/*TODO: "/awareness/security-training" is this link this: /awareness/cultivating-a-security-aware-mindset ? */}
5. Use secure communication channels for sensitive information

## 4. Compartmentalization

Dividing information and systems into isolated segments to limit the impact of a breach.

### Implementation

1. Segment networks and systems based on functionality and sensitivity
2. Isolate critical assets from general-purpose systems
3. Separate development, testing, and production environments
4. Use separate accounts and access methods for different security domains
5. Implement firewalls and access controls between segments

## 5. Continuous Monitoring and Improvement

Security is not a one-time implementation but a continuous process of monitoring, evaluating, and improving.

> **🔗 Related Framework:** For implementation details, see the [Monitoring](/monitoring/overview) framework, including
> [Guidelines](/monitoring/guidelines) and [Thresholds](/monitoring/thresholds). Also relevant is
> [Incident Management](/incident-management/overview) for response to detected issues.

### Implementation

1. Establish security metrics to measure the effectiveness of controls
2. Implement monitoring systems to detect security events and anomalies
3. Conduct regular security assessments and penetration tests
4. Learn from security incidents and near-misses
5. Update security controls based on new threats, vulnerabilities, and technologies
6. Ensure team members are
[staying informed and continuously learning](/awareness/staying-informed-and-continuous-learning)
about evolving security threats
7. Utilize available [security resources](/awareness/resources-and-further-reading) to keep your security practices
current

---

---

### PAGE: /opsec/travel/guide
**Title:** Travel Security Guide
**Referenced by controls:** ws-1.1.1, ws-1.1.2, ws-1.1.3, ws-1.1.4, ws-2.1.1, ws-2.1.2, ws-2.1.3, ws-2.1.4, ws-3.1.1, ws-3.1.2, ws-3.1.3, ws-3.1.4, ws-3.1.5, ws-4.1.1, ws-4.1.2, ws-5.1.1, ws-5.1.2, ws-6.1.1, ws-6.1.2, ws-7.1.1, ws-7.1.2

# Personal security travel guide — full




Travel introduces unique security risks to your digital assets and sensitive information. Proper preparation before,
vigilance during, and careful review after travel creates a comprehensive defense strategy that balances security
with practical usability.

When we travel, our normal security routines are disrupted, and we face elevated risks from physical theft, digital
surveillance, border inspections, and social engineering. Web3 professionals face additional challenges when traveling
with crypto assets or access to treasury funds. The resources in this guide provide practical guidance for maintaining
operational security while traveling.

> 🔑 Key Takeaway: Minimize data exposure by carrying only essential devices with full-disk encryption and updated
> software. Secure accounts with backup 2FA methods, avoid biometrics at borders, use trusted networks with VPNs, and
> never leave devices unattended. Guard against USB attacks, shoulder surfing, and hidden cameras. For crypto, use
> strong passphrases and never travel with seed phrases. Upon returning, scan devices for malware and consider resetting
> high-risk devices.

{/* separator */}

> ❗ This is not, by any means, an extensive guide on this subject or expected to be followed at its core. Its intention
> is to guide and provide hints as to where to apply security. This will vary depending on case to case, or, in other
> words, the risks you expose yourself to, by specifically traveling.

This guide is categorized into four sections:

1. **Before traveling:** All the things you could do before you depart, such as hardening some devices or making sure
you have a backup of the data you’ll be traveling with, even letting know someone you’ll be calling in case of an
emergency and how to identify you. This does not necessarily mean that if you’re reading this while traveling you cannot
do anything from that list, only that it might be more challenging to execute depending on your context.
2. **While traveling:** All the things you have to pay attention to or take care of while on the move. Is it necessary
to connect to that conference’s WiFi? Have you checked if there is a camera that might be recording your keystrokes?
Leaving your computer unattended or just running whatever software your hackathon teammate asks you to download in order
for your promising project to win.
3. **Returning home:** Not in the literal sense of it, but directed toward all the things you have to do after your
travels. From updating your processes based on experience to wiping exposed devices before rejoining them to your
networks.
4. **Additional information for high-profile targets:** If you are a high-profile target, you’ll evidently realize that
some of these initial suggestions fall short within your threat model. This section provides a hint toward profiles like
yours.

## Before traveling

> 💡**Remove or securely store** any data, devices, printed files, and documents **you don’t absolutely need on the
> trip**. The less sensitive information and fewer critical assets you carry, the lower the risk and impact if loss,
> theft, or inspection occurs. Minimize your digital and physical footprint by leaving backups and originals securely at
> home or in trusted locations, and encrypt what must travel with you. This principle applies to laptops, phones,
> hardware wallets, paper backups, and any portable storage media.

### **Perform a quick threat model**

Even if you are already traveling, take 5 minutes to map out your risks. Identify **what assets** you're carrying
(laptops, phones, hardware wallets, seed phrases, account access), **who might target them** (thieves, cybercriminals,
border agents, etc.), and **how attacks might happen** (device theft, tampering, malware, coercion). For each threat,
plan a mitigation. For example, if you're carrying a hardware wallet, a threat is pickpocketing – mitigation could be
keeping it attached to yourself (just don't use ledger's necklace visibly) and securing it with a secure PIN/passphrase
(no patterns, not repeated across devices).

This exercise keeps security measures proportionate to your situation.

### **Secure devices with encryption & updates**

Enable full-disk encryption on all devices (laptops, phones, tablets) to protect data if lost or stolen. Most modern
OSes have this by default (e.g. BitLocker for Windows, FileVault for MacOS, LUKS for Linux,or Android/iOS encryption –
just ensure a strong password/PIN is set).

Use popular devices like iPhones and Pixels. Install the latest OS and app updates since these patch security
vulnerabilities. This does not mean that using the latest versions is the safest take, but usually there's a balanced
trade-off when they got security patches. You can also consider to install — only trustworthy — mobile security
applications, which try to add a layer of control and also reminds you of important security updates.

**Note:** On iOS, due to sandboxing, apps can't scan the entire OS for malware, so many security apps focus on VPN,
phishing web protection, breach alerts, etc.

If you must bring high-risk confidential data, consider encrypting those files individually using tools like VeraCrypt,
FileVault, BitLocker, LUKS/dm-crypt, and more.

### **Back up and prepare for loss**

Back up your devices before travel (and ensure cloud backups like iCloud/Google are up to date). This way, if a device
is lost or confiscated, you won’t lose important information. Record device details (make, model, serial numbers, IMEI
for phones) and keep that list separate – it will help in filing reports or remote-wipe commands.

If your company uses Mobile Device Management (MDM) on phones or laptops, verify the device is enrolled and you know how
to trigger a remote wipe or “lost mode.” Test “Find My” or equivalent device-finding services so you can use them if
needed. Pack chargers and cables so you won’t need to borrow unknown ones (which could be malicious).

### **Protect Accounts with 2FA redundancy**

Plan for how you'll access accounts that use two-factor authentication if your main device is unavailable. For
authenticator apps (TOTP codes), **export backup codes** for your important accounts and keep them **securely** in
services like 1Password or NordPass (you can check passwordmanager.com for more information on which one to pick).
Alternatively, consider storing them elsewhere physically. If your 2FA is tied to a phone number (SMS or voice),
**disable SMS for 2FA**. For technologies that are unfortunately dependent on phone numbers, use a separate line
(not your personal one) from services like Google Voice, Burner App or SLYFONE. Transfer your number to an eSIM since
[they are harder to physically steal or swap than a physical SIM](https://support.apple.com/en-ca/118227#:~:text=Use%20eSIM%20while%20traveling%20internationally,obtain%2C%20carry%2C%20and%20swap).

Ensure your password manager is accessible – many like 1Password have a *Travel Mode* that removes sensitive vaults from
your device while you travel (you can restore them later). This limits exposure if your
[device is searched or seized](https://www.schneier.com/blog/archives/2025/04/cell-phone-opsec-for-border-crossings.html).

You can also register a backup or alternative 2FA method, like a secondary phone (the device) or a PIN-protected
hardware key to be used as a passkey. Be responsible with the use of software passkeys, particularly in situations
where you are using a password manager to store both your passwords and passkeys, as this creates a single point of
failure.

### **Secure your wallets and keys**

**Hardware wallets (e.g. Ledger, Trezor):** Update the firmware and test the device before you leave, don't do this
while traveling. **Do NOT bring any written seed phrases** under any circumstance – seed backups are unencrypted keys
that are far easier to steal or copy than a hardware device. Leave seed backups in a secure place, travel only with
your hardware wallet if necessary. Enable all security features on the device (set a strong PIN, and use a BIP39
passphrase for
example, if supported) so that even if the device is stolen, the amount of required information to access your crypto,
is high. Carry hardware wallets and security keys **in your carry-on or under your sight**, not in checked luggage, to
avoid loss or tampering.

**Yubikeys and 2FA tokens:** Bring them to protect logins and make sure they're enabled on your
critical accounts. Keep them on your person or in a separate bag from your laptop/phone so that a thief or snoop can't
easily steal both at once. If you have a **spare hardware wallet or Yubikey**, you might leave one at home as a backup
in case the one you carry is lost. Add, when possible, an extra layer of security to the token, such as a PIN code.

### **Lock down phones**

On your smartphone, take advantage of security settings **before** you travel. Set a strong passcode (not just a 4-digit
PIN or pattern). Consider **disabling Touch ID/Face ID** if you might face situations where someone could force-unlock
your device using your biometrics – in many jurisdictions, authorities can compel a fingerprint or face scan more easily
than a memorized password
[.](https://www.schneier.com/blog/archives/2025/04/cell-phone-opsec-for-border-crossings.html#:~:text=deactivate%20biometric%20security%20and%20require,10%20failed%20PIN%20unlock%20attempts)
At a minimum, know how to quickly and
[**temporarily disable biometrics**](https://news.ycombinator.com/item?id=43630624);
for example, on an iPhone,
[holding the side button and a volume button will trigger an emergency mode that requires the passcode to unlock](https://www.themacguys.com/essential-travel-security-tips-for-apple-devices/).
On Android, use *Lockdown* mode if available (which only temporarily disables biometrics and is different
from iOS Lockdown Mode).

If you have an iPhone, enable **Lockdown Mode** (extreme protection on iOS) even if you are not at
[high risk or traveling to a high-threat region](https://www.themacguys.com/essential-travel-security-tips-for-apple-devices/#:~:text=This%20mode%20is%20ideal%20when,or%20dealing%20with%20sensitive%20data)
 – but be aware [it restricts many features](https://support.apple.com/en-gb/105120), though totally worth it.

Disabling or restricting USB debugging on Android and using iOS USB restricted mode helps prevent unauthorized physical
USB access and reduces risks from malicious cables or compromised charging stations.

If your phone is managed by work (MDM), inform your IT team of your travel so they can assist with any location-based
security policies and ensure you have the latest security profile. Finally, consider using a **dedicated eSIM/local
SIM** for travel data. This can protect your primary phone number (you can keep your main line on eSIM and turn it off,
while using a local data eSIM for mobile internet) and avoids physical SIM issues.

**Configure additional phone protections:** On iOS devices, disable Control Center and Notification Center access from
the lock screen (Settings > Face ID & Passcode) to prevent thieves from seeing notifications or enabling Airplane Mode
without unlocking. Disable USB accessory connections when locked to prevent unauthorized connections. For device
recovery, ensure Find My iPhone is enabled with "Send Last Location" and "Find Network" options activated so tracking
continues even if the device is powered off.

On Android, similar protections can be configured: disable notifications on lock screen (Settings > Notifications > On
lock screen > Don't show notifications), and enable "Find My Device" with all location services.

**Pay special attention apps security**: many financial apps default to PIN verification instead of biometrics, which
means a thief who has your phone and knows your PIN could potentially access your financial accounts even if they can't
bypass Face ID/Touch ID. Use unique PINs for banking apps that differ from your device PIN, or where possible, configure
these apps to require biometric verification for every login.

### **Minimize digital footprint & social visibility**

It's not just cyber threats – **operational security** matters. **Avoid announcing your travel plans publicly**
[on social media](https://blackcloak.io/social-media-and-travel-be-careful-of-what-you-share/) and be careful
with real-time updates. Posts about being away from home can signal to criminals that you (and possibly valuable
devices or even your house) are vulnerable. Consider sharing trip photos and crypto conference highlights **after**
you return or only with trusted contacts. Ensure your social media privacy settings are tightened so strangers can't
see your travel posts.

When registering for events, use privacy-focused tools like iOS's **Hide My Email** or create burner emails through
providers like Tuta. ProtonMail has had some controversy lately, but could still be a good alternative. If you don't
need to keep the inbox at all, just create a throwaway mail, there are plenty of options out there. Avoid giving out
personal details unnecessarily during registration—use minimal, generic info to reduce your digital footprint.

**Discretion** is key: if possible,
[don't advertise that you work in crypto](https://www.unchained.com/blog/7-tips-traveling-bitcoin#:~:text=,or%20clothing%20with%20bitcoin%20logos)
or carry cryptocurrency. For example, **remove or cover any crypto stickers on laptops or bags**, and avoid wearing
company swag or Bitcoin/Ethereum logos while in transit. These can be neon signs attracting thieves or unwanted
attention ("I have valuable data or wallets!"). If asked about your work or luggage by curious strangers, have a
**cover story** (e.g. "I work in finance/IT")
rather than "I manage a crypto fund". High-profile team members might travel under pseudonyms
or at least not list their company on luggage tags to stay low-profile. Also, be wary that you might be traveling with
someone with these characteristics, so don't give them away.

### **Plan emergency and incident responses**

Before departure, know what you'll do if something goes wrong. Have a **fallback plan** in case of device loss: who will
you notify & how (have safe words and beware of deepfakes or impersonations); how will you revoke access to sensitive
accounts; and how will you continue working (e.g., a backup laptop or a colleague who can step in).

If traveling to
[countries with strict tech](https://www.perplexity.ai/search/countries-that-list-cryptopgra-bBSItefPSUi7HP2lTNekjA) or
[encryption laws](https://it.cornell.edu/security-and-policy/travel-internationally-technology#:~:text=Some%20countries%20have%20restrictions%20on,Consider%20requesting%20a%20loaner%20laptop)
(e.g., China, Russia, UAE), devices like VPNs, encrypted messaging apps (Signal, or Telegram with Secret Chats only),
hardware wallets (Ledger, Trezor), Yubikeys, or encryption software (VeraCrypt, BitLocker) may be flagged by border
authorities. Research local laws beforehand. Consider carrying a travel letter from your organization explaining the
professional need for these tools, or use sanitized loaner devices to avoid issues at border controls.

Share your itinerary and contact information with a trusted peer so they can assist or monitor for any issues.

Finally, schedule critical work (especially high-value transactions) for **before or after** your trip if possible, so
you’re not forced to do ultra-sensitive actions on the road. Criminals usually play with the “time-sensitive factor,”
trying to trick you into doing something quick and urgent, by committing something reckless.

## While traveling

### **Network safety – avoid untrusted Wi-Fi & Bluetooth**

Treat **every network as potentially hostile**. Whenever possible, use a **cellular connection or a personal hotspot**
instead of public Wi-Fi – your mobile data is encrypted and safer than an open café or hotel network. If you must use
public Wi-Fi (hotel, airport, conference), verify the network name with staff and
[**disable auto-connect**](https://www.cisa.gov/sites/default/files/publications/Cybersecurity%20While%20Traveling.pdf)
features so your devices don't join networks without prompting you.

**Turn off Wi-Fi and Bluetooth** on your phone and laptop when you're not using them; this reduces the risk of
unsolicited connections or Bluetooth-based attacks. Also, disable any device-to-device sharing like **AirDrop** or
**Nearby Share**
[to prevent strangers from sending you files](https://www.cypherock.com/blogs/post-safe-vacation-tips-while-traveling-with-crypto#:~:text=Switch%20off%20any%20shared%20networks).

**Use a trustworthy VPN** for an extra layer of encryption for your internet traffic, although in most cases by using an
updated device, safe hardcoded DNS records, and ensuring SSL while browsing (enforce HTTPS-only-modes or adding
“http://*” to your uBlock list, might be enough. A reputable, non-logging VPN (or your company’s VPN) helps protect
against snooping on public networks, especially if you’re handling highly sensitive work and using several communication
channels.

Using a personal portable router combined with a trusted VPN adds a strong layer of security when connecting to public
Wi-Fi networks. This setup creates a private, encrypted tunnel between your devices and the internet, minimizing
exposure to malicious actors on shared networks. Whenever possible, prefer mobile data over Wi-Fi, as cellular networks
provide better encryption and isolation by default. If you must use Wi-Fi, disable automatic connections and ensure you
connect only to verified, trusted networks to reduce risk.

### **Device handling – keep them close and protected**

Never leave your devices (laptops, phones, hardware wallets) **unattended or unsecured** in public. Keep them on your
person or within sight whenever possible. In a conference or cafe, use a cable lock for your laptop if you must step
away briefly, take it with you or get someone you trust to watch it over for you.

In hotels/Airbnbs, **use the room safe** for small devices when you're out. These safes can easily be opened by an experienced
thief or rogue/malicious staff. Consider a portable travel safe/bag you can lock to a fixed object. A
[**portable door lock**](https://www.travelandleisure.com/sabre-portable-door-lock-review-7643179#:~:text=schedule%20and%20explore%20fascinating%20destinations,star%20ratings%20at%20Amazon)
or door jammer for your room can add an extra barrier against intruders (useful in rentals without chain locks). This
simple gadget prevents anyone (even with a key) from opening your door while you're inside, giving you peace of mind at
night. When out and about, be mindful of pickpockets – use bags that zip and consider a subtle anti-theft backpack for
expensive gadgets or important assets.

For hardware wallets or Yubikeys, a good practice is to **separate them** from the device they authenticate: e.g. don't
carry your Yubikey on the same keychain as your laptop bag key; keep it hidden on you. And, of course, **keep devices
powered off** or locked when not in use –
[enable short auto-lock timeouts](https://www.cisa.gov/sites/default/files/publications/Cybersecurity%20While%20Traveling.pdf#:~:text=%E2%80%A2%20%20%20%20,Some%20devices%20will)
on your phone/laptop so they aren't unlocked if
snatched[.](https://www.cisa.gov/sites/default/files/publications/Cybersecurity%20While%20Traveling.pdf#:~:text=%E2%80%A2%20%20%20%20,Some%20devices%20will)

### **Beware of public USB charging**

Avoid plug-and-play charging stations at airports or malls. The risk of
["**juice jacking**"](https://www.cypherock.com/blogs/post-safe-vacation-tips-while-traveling-with-crypto?srsltid=AfmBOopuzAsUtNwqCqfUBteTEyH4MOTvIaRhoXoIUyNHH8Yv5XzILrSr#:~:text=Stay%20away%20from%20Public%20charger,stations),
although small,
is that a malicious charging kiosk or cable can inject malware or siphon data when you connect via USB. Depending on
your profile risk, you might encounter technologies that mimic different kind of cables and accessories with the same
purpose. These exist out of the box, and have been widely used by red-teamers and pentesters (re OMG cable).

Stick to using your own charger plugged into a power outlet, or use a **USB data blocker** (a little adapter that
only passes power, not data). Similarly, do not plug unknown USB drives into your laptop – if someone hands you
a free USB stick at an event, assume it could be a trap.
[**USBGuard**](https://github.com/USBGuard/usbguard#:~:text=USBGuard%20is%20a%20software%20framework,may%20interact%20with%20the%20system)
software (for Linux) or equivalent can be used to restrict USB device access on your computer, allowing only
whitelisted devices. This tool can prevent an unknown USB from automatically tampering with your system by requiring
authorization for new devices. At a minimum, disable any "USB autorun" features and consider locking down ports if your
OS allows.

### **Screen privacy and social engineering**

Practice situational awareness when working in public spaces.
[**Shoulder surfing**](https://www.trio.so/blog/shoulder-surfing-in-computer-security)
is a real threat – someone nearby could be
watching you enter passwords or PIN codes. Use a **privacy screen filter** on your laptop or phone to narrow the viewing
angle. This makes it much harder for anyone not directly in front of your screen to read it. Sit with your back to a
wall when possible, and shield the keypad with your body or hand when typing sensitive info.

In crowded conferences or airports, be cautious if someone you don't know strikes up conversation — might be trying to
distract you or talk about crypto; scammers might engage you to glean info or even attempt to get you to unlock your
device. **Don't log in to critical accounts in front of others** – you never know who's looking.

Also be mindful of **phishing attempts**: traveling users are prime targets for fake "urgent" emails or messages.
Double-check any unusual prompts before entering credentials, especially if you're on
[untrusted Wi-Fi](https://www.cisa.gov/sites/default/files/publications/Cybersecurity%20While%20Traveling.pdf#:~:text=banking%2C%20or%20sensitive%20work%2C%20using,using%20a%20public%20wireless%20network)
(use your VPN and look for HTTPS).

### **Maintain OpSec in public**

While traveling, **blend in and stay discreet**. Refrain from discussing sensitive matters in public areas where
eavesdropping is possible, or directly sharing things like where you are staying to people you don't know. Even hotel
lobbies or rideshares might not be secure for private discussions.

When meeting people, don't give your phone to others to type down their socials, and remember to disable default options
like Telegram's sharing phone number when adding a contact.

Remember that **hidden cameras or microphones** could exist in unfamiliar environments. It's rare but not unheard of,
especially in
[Airbnbs or rented spaces](https://www.washingtonpost.com/travel/2024/05/22/hidden-cameras-airnbnb-rental-properties/#:~:text=On%20the%20kitchen%20table%2C%20he,activate%20the%20camera%20tucked%20inside)
– malicious hosts have hidden cameras in items like smoke detectors, clock radios, or USB chargers
[.](https://www.washingtonpost.com/travel/2024/05/22/hidden-cameras-airnbnb-rental-properties/#:~:text=On%20the%20kitchen%20table%2C%20he,activate%20the%20camera%20tucked%20inside)
Give your accommodations a scan: look for odd or
[extra devices plugged in](https://www.washingtonpost.com/travel/2024/05/22/hidden-cameras-airnbnb-rental-properties/)
(especially facing beds or desks) and cover or unplug them if suspicious. You can also play ambient noise (or use a
noise generator app) during confidential conversations to thwart any listening devices.

**Keep a low profile**: as mentioned,
[don't flaunt crypto wealth or gear.](https://www.unchained.com/blog/7-tips-traveling-bitcoin#:~:text=,or%20clothing%20with%20bitcoin%20logos)
For example, if attending a blockchain conference, consider using an alias on your name badge that doesn't explicitly
say your company or title, and don't display that badge outside the venue. When moving around, secure your laptop in a
nondescript sleeve or bag (instead of one with a well-known conference brand). The goal is to avoid drawing the
attention of both petty thieves and more organized attackers by limiting the signals that you're a high-value crypto
target.

Don't rely on security through obscurity. Going "stealth" doesn't make you immune to attacks. The suggestions in
this section are meant to complement, not replace, the other security measures.

### **Traveling with high-value crypto or duties**

If you *must* make crypto transactions or access sensitive systems while on the road, do so with caution. Use trusted
hardware and networks: e.g. if you need to send a transaction, use your hardware wallet on your own laptop (never a
shared computer), on a secured connection.

Be aware of **surveillance at events** – attackers have been known to watch for people handling sensitive info. If you
need to access a seed or enter a recovery phrase, do it in a private, secure setting (never over public Wi-Fi or in view
of anyone, including cameras). Consider that
[**everyone knows you own crypto at a crypto event**](https://www.unchained.com/blog/7-tips-traveling-bitcoin#:~:text=If%20you%27re%20traveling%20to%20an,in%20your%20belongings%20while%20traveling),
so your threat profile is
elevated[.](https://www.unchained.com/blog/7-tips-traveling-bitcoin#:~:text=If%20you%27re%20traveling%20to%20an,in%20your%20belongings%20while%20traveling)
Adjust your security: for instance, **enable a passphrase or a pin on any single-signature wallet** you carry so that
even if someone obtains your hardware wallet, they can't access funds without that passphrase. For large amounts, rely
on multi-sigs, verifying payloads before signing – you might carry one key on you and leave another key(s) with trusted
parties so no single person has all
signing power while traveling. In short, treat any on-trip crypto operations with more care than you would in the
office or at home.

### While presenting or doing public appearances

One often overlooked risk is the exposure caused by presenting or hosting technical workshops in public. Without
properly hardening or isolating your computer before setting up, you may unintentionally expose network services to
hostile environments or reveal sensitive information on-screen. Always prepare a clean, minimal environment and verify
no confidential data or open ports are accessible before connecting to unfamiliar networks or projecting your screen.

### **Physical safety and common sense**

Operational security also has a physical aspect. **Trust your instincts** and normal travel safety rules: stick to
well-lit and populated areas if carrying devices at night, don’t let strangers “shoulder surf” your ATM or credit card
PIN (check for skimmers, fake interfaces), and keep your travel documents secure since identity theft can be as damaging
as device theft.

Use hotel lockers at conferences if provided (for example, some events offer secure charging lockers – use them rather
than leaving devices out only).

Beware of the classic “evil maid” scenario in hotels (where someone might tamper with your laptop in your room): using
tamper-evident tape or seals on your laptop case can help detect this, though it’s mostly a concern for high-risk
targets. If you have tamper-evident stickers or tamper-evident bags, you can seal your device in them overnight – any
attempt to open or remove the device will leave a visible trace. While not foolproof against a determined adversary, it
raises the bar and can deter casual snooping.

Petty thieves may look beyond obvious valuables. Simply locking items in a dorm safe or hiding them at home might deter
casual theft, but savvy criminals often search inside books, behind electrical outlets, or within patterns on walls or
furniture to find hidden stashes. Consider unconventional hiding spots and avoid predictable storage methods. Layer your
physical security measures with tamper-evident seals or discreet decoy containers to raise the effort required for
unauthorized access.

Above all, maintain an **alert posture**: be aware of who’s around when you’re working, and if something feels off (like
someone persistently hovering or a device acting strangely), don’t ignore it. You can always relocate, power down your
device, or otherwise cut off exposure at the first sign of trouble.

## Returning home

### **Secure your accounts and passwords**

Once you're back, if you suspect that any account credentials you used while abroad *might* have been exposed
(especially if you had to log in over a hotel or conference Wi-Fi), address the issue. Change the passwords for any
accounts you accessed unsafely during the trip – but if you don't feel is necessary, sometimes you pose a greater risk
at doing so.

Do this from a *trusted* device/network (ideally wait till you're on your home or office network, not the airport
Wi-Fi). Use this opportunity to upgrade weak passwords and ensure 2FA is still working on those accounts. Check your
email filters and crypto account settings for any unauthorized changes (attackers sometimes add forwarding rules or new
withdrawal addresses if they did get access).

Essentially, **rotate secrets** that may have been used under less-secure conditions.

### **Inspect and clean your devices**

After traveling, give your devices a thorough once-over. Run a reputable anti-malware scan on laptops and phones. Look
for any unusual apps, processes, or device behavior (for example, unusual battery drain could indicate malware).

If you were in a high-risk environment or your device was out of your control at any point, consider wiping the device
and restoring it from your pre-trip backup (or factory-resetting a phone)
[to ensure it's clean](https://architectsecurity.org/2017/10/mobile-device-security-for-international-travelers-part-3-how-to-clean-up-your-mobile-devices-after-international-travel/#:~:text=Assume%2C%20whether%20correct%20or%20not%2C,and%20must%20be%20rebuilt%20anew)[.](https://architectsecurity.org/2017/10/mobile-device-security-for-international-travelers-part-3-how-to-clean-up-your-mobile-devices-after-international-travel/#:~:text=The%20goal%20after%20travel%20is,to%20a%20%E2%80%9Cknown%20good%E2%80%9D%20state)
This is especially recommended for "burner" devices used on the trip – you can safely restore your data onto your main
device and decommission the travel device.

[... truncated ...]

---

### PAGE: /awareness/understanding-threat-vectors
**Title:** Understanding Threat Vectors
**Referenced by controls:** ws-1.1.2, ws-6.1.2

# 2. Understanding Threat Vectors




> 🔑 **Key Takeaway**: Understanding the various ways attackers can target you and your organization is essential for
> effective defense. By recognizing common attack patterns like phishing, social engineering, and emerging threats in
> digital spaces, you can better protect yourself and your team from potential security breaches.

## 2.1. Traditional Attack Vectors

### 2.1.1. Social Engineering & Phishing

- **Phishing Emails:**

Look for red flags like misspellings, odd URLs, and urgent language.
**Scenario Example:** An email that claims "Your account will be locked in 24 hours" but uses a suspicious domain.

- **SMS & Messaging Scams:**

Attackers may use text messages or direct social media messages to bypass email filters.
**Scenario Example:** A text message that claims to be from a delivery service asking for a confirmation code.

- **Voice Phishing (Vishing):**

Phone calls that pretend to be from a trusted organization, often using spoofed caller IDs.
**Scenario Example:** A staff member receives a voicemail warning about a potential security breach and instructing them
to call a specific number immediately.

- **Pretexting:**

Attackers create a fabricated scenario to steal personal information or gain access.
**Scenario Example:** Someone pretending to be a new contractor who needs urgent access to systems or information.

- **Baiting:**

Offering something enticing to entrap the victim.
**Scenario Example:** Leaving infected USB drives in public places or offering free downloads that contain malware.

- **Tailgating:**

Physically following authorized personnel into restricted areas without proper credentials.
**Scenario Example:** An unknown person following an employee through a secure door by claiming they forgot their access
card.

- **Shoulder Surfing:**

Observing someone's screen, keyboard, or device to gather information.
**Scenario Example:** A threat actor monitoring your screen in a shared co-working space to capture sensitive
information or credentials.

### 2.1.2. Malware & Technical Attacks

- **Ransomware:**

Malicious software that encrypts files and demands payment for decryption.
**Scenario Example:** An organization finds their critical files encrypted with a ransom note demanding cryptocurrency
payment.

- **Man-in-the-Middle Attacks:**

Intercepting communications between two parties.
**Scenario Example:** An attacker on a public Wi-Fi network intercepts unencrypted traffic to steal credentials.

- **Credential Stuffing:**

Using stolen username/password combinations to attempt access to multiple services.
**Scenario Example:** After a data breach at one service, attackers try the same credentials on financial or email
accounts.

## 2.2. Web3-Specific Threats

### 2.2.1. Crypto-Focused Attacks

- **Crypto Drainers:**

A common attack where a threat actor suggests users can participate in an airdrop by visiting a provided link.
Unsuspecting users who click the link are directed to a counterfeit website, where they are asked to authenticate their
wallet and sign a transaction. Once signed, the threat actor gains access to steal funds from the wallet.

- **Rug Pulls:**

In the context of web3 and cryptocurrencies, these scams typically involve fraudulent schemes designed to swindle
individuals out of their digital assets. For example, an enticing new project may promise revolutionary technology and
unprecedented returns. However, the project developers quickly vanish, leaving investors with worthless tokens and empty
promises.

- **Token Approval Exploits:**

Attackers may trick users into approving smart contracts that give unlimited access to tokens in their wallet. These
"allowances" permit the approved contract to transfer any amount of a specific token without further permission. Always
verify what permissions you're granting when signing transactions and set specific approval limits when possible.

### 2.2.2. Smart Contract Vulnerabilities

- **Reentrancy Attacks:**

Exploiting a contract's execution flow to repeatedly withdraw funds.
**Scenario Example:** A malicious contract calls back into the victim contract before the first execution is complete,
draining funds with each call.

- **Flash Loan Attacks:**

Using uncollateralized loans to manipulate market prices and exploit vulnerabilities.
**Scenario Example:** An attacker borrows a large amount of cryptocurrency, manipulates a price oracle, exploits a
vulnerability, and repays the loan in a single transaction.

## 2.3. Common Indicators & Red Flags

### 2.3.1. Behavioral Cues

- **Inconsistencies:**

Look for changes in tone or style in communications from known contacts.
**Scenario Example:** A normally formal manager sends a casual message with unexpected requests.

- **Unusual Requests:**

Requests for urgent transfers of money, sensitive information, or changes in process should always trigger caution.

- **Environmental Anomalies:**

Spotting unexpected logins or unfamiliar devices in account activity reports can indicate compromised accounts.

### 2.3.2. Technical Indicators

- **Unexpected Authentication Prompts:**

Sudden requests to re-authenticate without clear reason.
**Scenario Example:** Being asked to provide credentials on a site you're already logged into.

- **Browser Certificate Warnings:**

Alerts about invalid or expired security certificates.
**Scenario Example:** Your browser displays a warning that a connection is not secure when visiting a familiar website.

- **Unusual System Behavior:**

Slowdowns, crashes, or unexpected pop-ups.
**Scenario Example:** Your computer suddenly runs significantly slower or displays unfamiliar advertisements.

### 2.3.3. Checklist for Suspicious Communications

- Does the message contain spelling errors or unusual formatting?
- Is the sender's email or username slightly different from the norm?
- Are there requests for urgent action without proper verification channels?
- Does the message create a sense of fear, urgency, or excitement?
- Is there an unexpected attachment or link?
- Does the request bypass normal security procedures?

## 2.4. Preventive Measures

### 2.4.1. General Security Practices

- **Double-Check Requests:**

Always verify the identity of individuals requesting sensitive information, especially if the request is unusual or
urgent.
**Scenario Example:** If you receive an email from your CEO asking for an urgent wire transfer, call them directly using
a known phone number to confirm.

- **Use Secure Channels:**

Communicate through official channels and avoid sharing sensitive information over unsecured methods.
**Scenario Example:** Use your organization's established communication platforms rather than responding to external
email links.

### 2.4.2. Web3-Specific Protections

- **Check & Remove Token Approvals:**

Regularly check which smart contracts have approvals to handle funds in your wallet and revoke unnecessary approvals to
improve your security posture.
**Useful Tools:**

- [Unrekt](https://app.unrekt.net/)
- [Etherscan Token Approval Checker](https://etherscan.io/tokenapprovalchecker)

- **Scrutinize Transaction Requests:**

Never sign a transaction unless you are completely sure exactly what you are signing. Be especially skeptical of offers
that seem too good to be true.

- **Hardware Wallets for Critical Assets:**

Use hardware wallets for storing significant cryptocurrency holdings.
**Scenario Example:** Keeping your long-term investments on a hardware wallet while only maintaining small amounts in
hot wallets for daily transactions.

---

---

### PAGE: /awareness/cultivating-a-security-aware-mindset
**Title:** Cultivating A Security Aware Mindset | SEAL
**Referenced by controls:** ws-1.1.2, ws-3.1.4

# 3. Cultivating a Security-Aware Mindset




> 🔑 **Key Takeaway**: Developing a security-aware mindset is about building habits that prioritize caution and
> verification. By questioning unusual requests, pausing before acting, and leveraging peer support, you transform
> security from a set of rules into an intuitive approach to daily interactions.

## 3.1. Behavioral Best Practices

### Practical Tips

- **Question Unusual Requests:**

Always verify any request for sensitive information or financial transactions through a separate communication channel.

- **Pause Before Reacting:**

Take a moment to think before clicking a link or downloading an attachment. **Example:** If you get an unexpected file
from a colleague, call them directly to confirm they sent it.

- **Peer Verification:**

Leverage your team by asking a colleague's opinion if something seems off.

> **Scenario Example**
A community manager receives a direct message on Discord that looks like it comes from a well-known project partner,
asking for private credentials. Instead of immediately responding, they cross-check the message in a team meeting or via
a known contact method.

## 3.2 Awareness in Community Settings

### Unique Challenges on Social Platforms

- **Platform-Specific Red Flags:**

Each community platform—Discord, Twitter, Telegram—has its own quirks.
**Example:** On Telegram, unsolicited group invites with suspicious usernames could be phishing attempts.

- **Community Role Awareness:**

Moderators and administrators should be extra cautious since they have higher privileges.
**Example:** A moderator on a crypto project Discord might notice a sudden spike in login attempts from an unfamiliar IP
 range.

- **Culture of Reporting:**

Foster an environment where suspicious behavior is immediately reported and discussed, not brushed aside.

> **Scenario Example**
During a routine community chat, several members report receiving odd messages that urge them to click on a link. The
community manager organizes a quick session to remind members of red flags and the correct reporting channels,
reinforcing collective vigilance.

## 3.3 Organizational Strategies for Security Culture

- **Leadership Commitment:**

Ensure that leadership demonstrates a strong commitment to security by prioritizing and investing in security
initiatives. Leaders should model security-conscious behavior and allocate appropriate resources to security efforts.

- **Regular Communication:**

Communicate the importance of security regularly through team meetings, newsletters, and other channels. Keep security
topics visible and relevant to all team members.

- **Security Policies and Procedures:**

Develop and enforce clear security policies and procedures that outline expectations and responsibilities for all team
members.

- **Encourage Reporting:**

Create an environment where team members feel comfortable reporting security incidents, suspicious activities, and
potential vulnerabilities without fear of retribution.

- **Recognition and Rewards:**

Recognize and reward team members who demonstrate exemplary security practices and contribute to the organization's
security efforts.

- **Continuous Improvement:**

Continuously assess and improve the project's security culture through feedback, assessments, and audits.

- **Shared Responsibility:**

Instill a sense of responsibility for security at all levels of the project, emphasizing that security is everyone's
job.

- **Collaboration:**

Promote collaboration and information sharing among team members to enhance overall security awareness and response
capabilities.

> **Scenario Example**
A project implements a monthly "Security Spotlight" where different aspects of security are highlighted, and team
members can share their experiences or ask questions. This regular touchpoint keeps security top-of-mind and encourages
ongoing dialogue about best practices.

## 3.4 Essential Security Practices

### 3.4.1. Password Management

- **Strong, Unique Passwords:**

Use complex, unique passwords for each account to prevent credential stuffing attacks.
**Example:** A passphrase like "correct-horse-battery-staple" (with four random words) is both strong and memorable,
while being more secure than shorter passwords with special characters like "P@ssw0rd!".

- **Password Managers:**

Utilize a reputable password manager to securely store and generate complex passwords.
**Example:** Tools like Bitwarden, 1Password, or KeePassXC can generate and store unique passwords for all your
accounts.

### 3.4.2. Multi-Factor Authentication (MFA)

- **Enable MFA Everywhere Possible:**

Add an extra layer of security beyond just passwords.
**Example:** Even if someone obtains your password, they still can't access your account without the second factor.

- **Choose Secure MFA Methods:**

Hardware tokens and authenticator apps are more secure than SMS-based verification.
**Example:** Use YubiKeys or authenticator apps like Authy instead of SMS, which can be vulnerable to SIM swapping
attacks.

### 3.4.3. Secure Communication

- **End-to-End Encryption:**

Use messaging platforms with end-to-end encryption for sensitive communications.
**Example:** Signal provides strong encryption for messages, ensuring only the intended recipient can read them.

- **Verify Communication Channels:**

Be cautious of unexpected platform changes for important communications.
**Example:** If a colleague suddenly asks to switch from your company's official channel to a personal messaging app for
 work discussions, verify this request directly.

### 3.4.4. Device Security

- **Keep Systems Updated:**

Regularly update your operating system and applications to patch security vulnerabilities.
**Example:** Schedule automatic updates or set a weekly reminder to check for and install updates.

- **Secure Your Workspace:**

Be mindful of physical security in shared or public spaces.
**Example:** Use privacy screens when working in public and lock your device when stepping away.

## 3.5. Incident Response Awareness

### 3.5.1. Recognizing Security Incidents

- **Know the Warning Signs:**

Understand what constitutes a potential security incident.
**Example:** Unexpected account lockouts, strange system behavior, or unusual access requests could indicate a breach.

- **Immediate Actions:**

Know what steps to take when you suspect a security incident.
**Example:** Disconnect from networks, document what happened, and report to your security team immediately.

### 3.5.2. Reporting Procedures

- **Clear Reporting Channels:**

Ensure everyone knows how and where to report security concerns.
**Example:** Have a dedicated email address or communication channel specifically for security reports.

- **No-Blame Culture:**

Encourage prompt reporting by focusing on solutions rather than blame.
**Example:** Acknowledge and thank team members who report potential issues, even if they turn out to be false alarms.

> **Scenario Example**
A team member notices unusual login attempts to their account. Instead of ignoring it or feeling embarrassed, they
immediately report it to the security team, who can then investigate whether this is part of a larger attack pattern
affecting other users.

---

---

### PAGE: /encryption/volume-encryption
**Title:** Volume Encryption
**Referenced by controls:** ws-1.1.3, ws-2.1.1

# Volume Encryption




## What is Volume Encryption?

Volume encryption is the process of encrypting a specific storage volume or partition to protect the data it contains.
Unlike full disk encryption, which encrypts the entire disk, volume encryption allows for selective encryption of
specific volumes, providing flexibility in managing encrypted and un-encrypted data on the same device.

## Importance of Volume Encryption

Volume encryption is essential for protecting sensitive information from unauthorized access, especially in environments
where different types of data coexist on the same device. It helps prevent data breaches in case of unauthorized access
to specific volumes and ensures compliance with data protection regulations.

## Uses of Volume Encryption

- **Protecting Sensitive Data**: Ensures that sensitive information stored on specific volumes is secure.
- **Compliance**: Helps organizations meet regulatory requirements for data protection.
- **Data Breach Prevention**: Reduces the risk of data breaches in case of unauthorized access to specific volumes.
- **Secure Decommissioning**: Ensures that data on encrypted volumes is not recoverable when storage devices are
  decommissioned or repurposed.

## Examples of Volume Encryption

- **Partition Encryption**: Encrypts specific partitions or volumes on a disk, allowing for selective encryption of
  sensitive data.
- **Virtual Encrypted Disks**: Creates virtual encrypted disks within files, providing an additional layer of security
  for sensitive data.

## Known Technologies for Volume Encryption

- **BitLocker**: A volume encryption feature included with Microsoft Windows that provides encryption for specific
  volumes.
- **LUKS (Linux Unified Key Setup)**: A disk encryption specification for Linux that provides a standard for volume
  encryption.
- **VeraCrypt**: An open-source disk encryption software that can create virtual encrypted disks within a file or
  encrypt specific partitions.

## Best Practices for Volume Encryption

1. **Use Strong Encryption Algorithms**: Ensure that the encryption algorithms used are strong and up-to-date, such as
  AES-256.
2. **Enable Encryption on Sensitive Volumes**: Apply volume encryption to all volumes that store sensitive information.
3. **Regularly Update Encryption Software**: Keep encryption software and tools updated to protect against
  vulnerabilities.
4. **Implement Access Controls**: Use strong authentication methods, such as multi-factor authentication (MFA), to
  control access to encrypted volumes.
5. **Backup Encryption Keys**: Securely backup encryption keys to prevent data loss in case of key corruption or loss.
6. **Monitor and Audit**: Regularly monitor and audit encryption settings and access logs to ensure compliance and
  detect any unauthorized access attempts.

By following these best practices and using reliable volume encryption technologies, organizations can significantly
enhance the security of their data and protect against unauthorized access and data breaches.
$$

---

---

### PAGE: /encryption/partition-encryption
**Title:** Partition Encryption
**Referenced by controls:** ws-1.1.3, ws-2.1.1

# Partition Encryption




## What is Partition Encryption?

Partition encryption is the process of encrypting specific partitions on a storage device. This allows for selective
encryption of data, providing flexibility in managing encrypted and un-encrypted data on the same device. Unlike full
disk encryption, which encrypts the entire disk, partition encryption targets specific areas, making it ideal for
protecting sensitive data without impacting the entire storage system.

## Importance of Partition Encryption

Partition encryption is crucial for protecting sensitive information from unauthorized access, especially in
environments where different types of data coexist on the same device. It helps prevent data breaches in case of
unauthorized access to specific partitions and ensures compliance with data protection regulations.

## Uses of Partition Encryption

- **Protecting Sensitive Data**: Ensures that sensitive information stored on specific partitions is secure.
- **Compliance**: Helps organizations meet regulatory requirements for data protection.
- **Data Breach Prevention**: Reduces the risk of data breaches in case of unauthorized access to specific partitions.
- **Secure Decommissioning**: Ensures that data on encrypted partitions is not recoverable when storage devices are
decommissioned or repurposed.

## Examples of Partition Encryption

- **BitLocker**: A partition encryption feature included with Microsoft Windows that provides encryption for specific
  partitions. [Learn how to use
  BitLocker](https://docs.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-overview)
- **LUKS (Linux Unified Key Setup)**: A disk encryption specification for Linux that provides a standard for partition
  encryption. [Learn how to use LUKS](https://gitlab.com/cryptsetup/cryptsetup/-/wikis/FrequentlyAskedQuestions)
- **VeraCrypt**: An open-source disk encryption software that can encrypt specific partitions. [Learn how to use
  VeraCrypt](https://www.veracrypt.fr/en/Documentation.html)

## Best Practices for Partition Encryption

1. **Use Strong Encryption Algorithms**: Ensure that the encryption algorithms used are strong and up-to-date, such as
  AES-256.
2. **Enable Encryption on Sensitive Partitions**: Apply partition encryption to all partitions that store sensitive
  information.
3. **Regularly Update Encryption Software**: Keep encryption software and tools updated to protect against
  vulnerabilities.
4. **Implement Access Controls**: Use strong authentication methods, such as multi-factor authentication (MFA), to
  control access to encrypted partitions.
5. **Backup Encryption Keys**: Securely backup encryption keys to prevent data loss in case of key corruption or loss.
6. **Monitor and Audit**: Regularly monitor and audit encryption settings and access logs to ensure compliance and
  detect any unauthorized access attempts.

By following these best practices and using reliable partition encryption technologies, organizations can significantly
enhance the security of their data and protect against unauthorized access and data breaches.

---

---

### PAGE: /opsec/control-domains/technical
**Title:** Technical Security Controls
**Referenced by controls:** ws-1.1.4, ws-2.1.2, ws-3.1.2, ws-5.1.1, ws-5.1.2

# Technical & Digital Controls




Technical controls form the backbone of operational security, protecting systems, networks, and data from digital
threats. This section outlines key technical controls that should be implemented as part of a comprehensive security
program.

## Device Hardening

Securing devices by minimizing attack surfaces and implementing defensive configurations.

### Key Components

1. **Secure Configuration Baselines**: Standardized secure configurations for different device types
2. **Endpoint Protection**: Anti-malware, application control, and other protective tools
3. **OS Hardening**: Removing unnecessary services and securing operating systems
4. **Patch Management**: Keeping systems updated with security patches
5. **Local Firewall**: Controlling network connections at the device level

### Implementation Steps

1. Develop secure configuration baselines for each device type
2. Implement endpoint protection solutions on all devices
3. Remove or disable unnecessary services, applications, and features
4. Establish an effective patch management process
5. Configure local firewalls with appropriate rules
6. Regularly scan for compliance with security baselines

### Web3-Specific Considerations

1. **Development Environments**: Securing environments used for smart contract development
2. **Cold Storage Systems**: Hardening systems used for cryptocurrency key management
3. **Transaction Signing Devices**: Enhanced security for devices used to sign transactions
4. **Node Operation**: Specialized hardening for blockchain node infrastructure
5. **Testing Environments**: Securing environments used for contract testing and simulation

## Network & Communication Security

Protecting data in transit and securing network infrastructure against attacks.

### Key Components

1. **Network Segmentation**: Dividing networks into security zones
2. **Encrypted Communications**: Protecting data transmitted over networks
3. **Secure Remote Access**: VPN and other secure access solutions
4. **Network Monitoring**: Detecting suspicious network activity
5. **Perimeter Security**: Firewalls, intrusion prevention, and other boundary protections

### Implementation Steps

1. Implement network segmentation based on security requirements
2. Deploy encryption for all sensitive communications
3. Establish secure remote access solutions with strong authentication
4. Implement network monitoring and traffic analysis
5. Deploy and properly configure perimeter security controls
6. Regularly test network security through vulnerability assessments and penetration testing

### Web3-Specific Considerations

1. **Node Communication**: Securing blockchain node communications
2. **API Security**: Protecting interfaces to blockchain services
3. **RPC Endpoint Protection**: Securing remote procedure call endpoints
4. **P2P Network Security**: Addressing risks in peer-to-peer networks
5. **MEV Protection**: Mitigating risks related to maximal extractable value

## Encrypted Storage & Backups

Protecting data at rest through encryption and secure backup strategies.

### Key Components

1. **Full-Disk Encryption**: Encrypting entire storage devices
2. **File-Level Encryption**: Protecting individual sensitive files
3. **Key Management**: Securely managing encryption keys
4. **Secure Backups**: Protecting backup data through encryption and access controls
5. **Recovery Testing**: Verifying the ability to restore from backups

### Implementation Steps

1. Implement full-disk encryption on all devices storing sensitive data
2. Deploy file-level encryption for particularly sensitive information
3. Establish secure key management processes with appropriate access controls
4. Implement encrypted and access-controlled backup solutions
5. Regularly test backup recovery processes
6. Store backup media securely with appropriate physical protections

### Web3-Specific Considerations

1. **Seed Phrase Backups**: Secure storage of wallet recovery information
2. **Multi-Location Backups**: Distributing backup data to prevent single points of failure
3. **Cold Storage Backups**: Offline backup strategies for critical keys
4. **Smart Contract Backups**: Preserving contract source code and deployment parameters
5. **Social Recovery Options**: Implementing secure social recovery systems for critical keys

## Two-Factor & Hardware Authentication

Strengthening authentication through multiple factors and hardware-based solutions.

### Key Components

1. **Multi-Factor Authentication**: Requiring multiple verification methods
2. **Hardware Security Keys**: Physical devices for authentication
3. **Biometric Authentication**: Using biological characteristics for verification
4. **Time-Based One-Time Passwords**: Temporary codes for authentication
5. **Single Sign-On Integration**: Centralizing and securing authentication

### Implementation Steps

1. Implement multi-factor authentication for all access to sensitive systems
2. Deploy hardware security keys for high-value accounts and systems
3. Establish backup authentication methods and recovery processes
4. Integrate MFA with single sign-on solutions where appropriate
5. Train users on proper use of authentication tools
6. Regularly audit authentication configurations and access

### Web3-Specific Considerations

1. **Hardware Wallets**: Using dedicated devices for cryptocurrency transactions
2. **Multi-Signature Setups**: Requiring multiple approvals for critical transactions
3. **Air-Gapped Signing**: Using offline devices for transaction signing
4. **Social Recovery**: Implementing secure key recovery through trusted contacts
5. **DApp Authentication**: Securing connections to decentralized applications

## Cryptocurrency-Specific Controls

Technical controls specifically designed to address the unique security challenges of cryptocurrency operations.

### Key Components

1. **Wallet Security**: Technical measures to secure cryptocurrency wallets
2. **Transaction Verification**: Processes to verify transaction details before signing
3. **Key Management**: Secure generation, storage, and use of cryptographic keys
4. **Blockchain Monitoring**: Tracking on-chain activity for anomalies
5. **Smart Contract Security**: Technical controls for secure contract interaction

### Implementation Steps

1. Implement appropriate wallet solutions based on security requirements
2. Establish transaction verification procedures with multiple checks
3. Deploy secure key management practices and technologies
4. Implement monitoring for blockchain transactions and activities
5. Develop secure processes for smart contract interaction
6. Regularly review and update cryptocurrency security controls

### Web3-Specific Best Practices

1. **Cold Storage**: Using offline systems for storing significant assets
2. **Multi-Signature Wallets**: Requiring multiple approvals for transactions
3. **Transaction Simulation**: Testing transactions before execution
4. **Gas Limit Setting**: Controlling transaction costs and preventing attacks
5. **Contract Interaction Verification**: Verifying contract behavior before approval

Effective technical and digital controls provide a strong foundation for operational security. By implementing
comprehensive device, network, data, and authentication protections, organizations can significantly reduce their attack
surface and better protect their digital assets.

---

---

### PAGE: /opsec/control-domains/physical-environmental
**Title:** Physical & Environmental Security
**Referenced by controls:** ws-2.1.2, ws-2.1.4

# Physical & Environmental Controls




Physical security is a crucial component of operational security that is often overlooked in digital-focused
organizations. This section covers controls to protect physical assets, secure workspaces, and address travel security
concerns.

## Secure Workspace & Travel Security

Implementing controls to secure physical work environments and protect team members while traveling.

### Secure Workspace Components

1. **Physical Access Controls**: Restricting access to facilities and sensitive areas
2. **Visitor Management**: Procedures for handling visitors and contractors
3. **Clean Desk Policy**: Guidelines for securing sensitive information when not in use
4. **Environmental Monitoring**: Detection of environmental threats (fire, water, etc.)
5. **Equipment Security**: Physical protection of hardware and devices

### Implementation Steps for Workspace Security

1. Implement appropriate physical access controls based on sensitivity
2. Establish visitor management procedures and logging
3. Develop and enforce clean desk and clear screen policies
4. Implement environmental monitoring and response procedures
5. Secure hardware with appropriate physical controls (locks, alarms, etc.)

### Travel Security Components

1. **Pre-Travel Assessment**: Evaluating security risks at destinations
2. **Secure Travel Practices**: Guidelines for secure behavior while traveling
3. **Device Security**: Protecting devices and data during travel
4. **Emergency Response**: Procedures for handling security incidents while traveling
5. **Post-Travel Measures**: Actions to take after returning from high-risk locations

### Implementation Steps for Travel Security

1. Develop pre-travel risk assessment procedures
2. Create travel security guidelines for different risk levels
3. Implement technical controls for devices used during travel
4. Establish emergency response procedures for travelers
5. Develop and enforce post-travel security measures where appropriate

### Web3-Specific Considerations

1. **Remote-First Organizations**: Addressing physical security in distributed teams
2. **Hardware Wallets**: Securing cryptocurrency hardware devices
3. **Conference Security**: Protecting team members at industry events
4. **Pseudonymous Team Members**: Balancing privacy with physical security needs
5. **Doxing Risks**: Protecting team members from having personal information exposed

## Tamper-Evidence & "Evil-Maid" Attacks

Protecting against physical tampering with devices and equipment, especially when left unattended.

### Key Components

1. **Tamper-Evident Measures**: Physical indicators of device tampering
2. **Device Integrity Verification**: Methods to verify device has not been compromised
3. **Secure Storage**: Protected storage for sensitive devices when not in use
4. **Device Handling Procedures**: Guidelines for maintaining device chain of custody
5. **Response Procedures**: Actions to take when tampering is suspected

### Implementation Steps

1. Implement tamper-evident measures for sensitive devices (seals, markers, etc.)
2. Establish procedures for verifying device integrity after periods of absence
3. Provide secure storage options for devices when not in use
4. Develop clear device handling procedures
5. Create response plans for suspected tampering incidents
6. Train team members on tamper detection and response

### Web3-Specific Considerations

1. **Hardware Wallet Security**: Protecting cryptocurrency hardware devices
2. **Cold Storage**: Physical security for offline key storage
3. **Seed Phrase Protection**: Secure storage of recovery phrases
4. **Air-Gapped Systems**: Maintaining security of isolated systems
5. **Physical Backup Security**: Protecting backup storage media

## Physical Security of Critical Assets

Protecting the physical security of servers, network equipment, and other critical infrastructure.

### Key Components

1. **Asset Inventory**: Cataloging and tracking physical assets
2. **Secure Facilities**: Protected locations for critical infrastructure
3. **Environmental Controls**: Protection against environmental threats
4. **Maintenance Procedures**: Secure processes for equipment maintenance
5. **Disposal Procedures**: Secure disposal of equipment and media

### Implementation Steps

1. Maintain a comprehensive inventory of physical assets
2. Implement appropriate physical security controls for facilities
3. Deploy environmental monitoring and protection systems
4. Establish secure maintenance procedures
5. Develop and enforce secure disposal procedures for equipment and media

### Web3-Specific Considerations

1. **Node Security**: Physical protection of blockchain nodes
2. **Validator Security**: Enhanced protection for validator infrastructure
3. **Redundancy Planning**: Physical distribution of backup systems
4. **Hardware Security Modules**: Physical protection of HSMs
5. **Key Ceremony Security**: Physical controls for key generation events

Effective physical and environmental security controls address risks that are often overlooked in digital-focused
organizations. By implementing appropriate physical protections, organizations can prevent attacks that bypass technical
controls through physical access or tampering.

---

---

### PAGE: /guides/account_management/discord
**Title:** Discord Security
**Referenced by controls:** ws-2.1.3, ws-3.1.1, ws-3.1.2, ws-3.1.3, ws-3.1.5, ws-6.1.2, ws-7.1.3

# Discord Security




## Summary

> 🔑 **Key Takeaway for Discord:** To secure your Discord server, focus on implementing robust access controls and
> enforcing two-factor authentication for all administrators. Regularly audit roles and permissions, and maintain
> vigilant moderation. Educate your community about security best practices to prevent unauthorized access and protect
> against potential threats.

Discord offers a variety of security features that are essential to use. Despite these, users should stay alert to
threats like phishing, which can target server moderators. Such threats may appear as QR code scams, fake login screens,
or misleading direct messages pretending to be from Discord support.

To enhance the security of your Discord server, take into account these suggestions. They cover important aspects like
server settings, roles and permissions, moderation, bots, channels, invites, member screening, logging, and other
security measures.

---

## For Individuals

These settings apply to your personal Discord account. All team members, moderators, and admins should configure these
on their own accounts.

### Account Security Checklist

- [ ] User Settings > My Account: Ensure **2FA** is enabled (authenticator app and/or security key), Remove a phone
  number if you have one added to your account, and after 2FA is setup select **View Backup Codes**, and note down
  your backup codes offline
- [ ] User Settings > My Account: Ensure **SMS Backup Authentication** is **disabled**
- [ ] User Settings > Content & Social > Social Permissions: Allow DMs from other server members > **Disabled**
- [ ] User Settings > Content & Social > Direct Message Spam: Select **Filter all** to filter all DMs for spam
  (encourages moderators and community members to adopt the same setting to minimize phishing DMs)
- [ ] User Settings > Authorized Apps: Review and **Deauthorize** any unnecessary apps
- [ ] User Setting > Devices: Review and remove unnecessary devices, or **Log Out All Known Devices**
- [ ] User Settings > Connections: Review and remove any unnecessary connections

---

## For Team Members

These guidelines apply to moderators and team members who help manage the server but don't have full administrative access.

Team members should:

- Understand the permissions their role grants using **Server Settings > Roles > View Server as Role** — this allows
  you to see what members with a certain role can see and access
- Be aware of the server's AutoMod rules for: Spam, Harmful Links, Mention Spam, Inappropriate Words, and any custom
  keyword filters and exempted roles

---

## For Admins

These settings and practices apply to server administrators with elevated privileges.

### Server Settings Checklist

#### Safety Setup

- Safety Setup > Moderation:
  - [ ] Require 2FA for moderation > **Enabled**
  - This ensures all moderators have an extra layer of security
- Safety Setup > Verification Level:
  - [ ] Choose from: None, Low, Medium, High, Highest
  - [ ] Set to at least **Medium** (registered on Discord for 5+ minutes) — Recommended: "Moderate" for public servers
  - Higher levels protect against spammers and raids
- Safety Setup > Raid Protection and CAPTCHA:
  - [ ] Activate all relevant settings to require CAPTCHA for new user actions
  - [ ] Activity Alerts > **Enabled**
  - [ ] CAPTCHA suspicious accounts before they are able to join > **Enabled**
  - [ ] CAPTCHA all accounts before they are able to join during a suspected raid > **Enabled**
  - This protection uses machine learning to detect and block bot-driven join-raids. When activated, it sends alerts
    to a specified channel and requires CAPTCHA verification for new users for one hour after detection.
- Safety Setup > DM and Spam Protection:
  - [ ] Hide DMs from suspicious users > **Enabled**
  - [ ] Filter DMs from unknown users > **Enabled**
  - [ ] Warn members before they visit outbound links > **Enabled**
  - [ ] Hide all messages from and delete suspected spammers > **Enabled**

#### AutoMod

- Server Settings > Safety Setup > AutoMod:
  - [ ] Set up rules for: **Spam**, **Harmful Links**, **Mention Spam**, **Inappropriate Words**
  - [ ] Configure custom keyword filters and exempted roles
  - [ ] Customize the response to spam (block message, send alert, timeout member)
  - [ ] Add to the existing automod rule to block keywords in a user's name: Support, Bot, Admin, Tech, Helpdesk, etc.
  - [ ] Create a private channel that mods, team, and admins have visibility to and set each AutoMod rule to send
    logs to that channel for review

#### Server Overview

- Server Settings > Engagement > Default Notification Settings: Select **Only @mentions**
  - Reduces potential spam notifications for members, making them more vigilant about suspicious or phishing content

#### Roles

- Server Settings > Roles:
  - [ ] Review admin role members — high-privilege roles with **Administrator** permission should have **2-3 members
    max**
  - [ ] Review bot role permissions and confirm members list contains only the bot user
  - [ ] Review mod role permissions and members list
  - [ ] Review user role permissions — watch for: **Manage Channels**, **Manage Roles**, **Manage Webhooks**, **Manage
    Server**, **Administrator**
  - [ ] Remove any lingering or overly broad permissions, and any roles with excess or unintended members
  - [ ] Check channel-level permission overrides on private channels

> **Note on Role Permissions:** For each role, carefully review the 32 available permissions. Key permissions to
> restrict: Administrator, Manage Webhooks, Manage Server, Manage Roles, & Manage Channels. Never give Admin or Kick
> permissions to anyone you don't fully trust.
>
> **Administrator** should ideally be reserved for a single admin role with minimal members. It is recommended to have
> no more than 2-3 admins with this privilege in order to reduce risk due to account compromise and insider threats,
> but to retain some redundancy.
>
> Minimal bots actually need **Administrator** permissions. Review what permissions a bot actually needs and do not
> default to Admin permissions just because developers request it as the easy option. If a bot does require
> Administrator, mitigate this risk by monitoring the Discord audit logs frequently or create alerts on a private
> channel to notify when admin permissions are exercised within the server.
>
> Permissions can also be set at the channel level. It is important to check your private channels for any permission
> overrides that may have been set!

#### Integrations

- Server Settings > Integrations:
  - [ ] Review each bot's permissions and remove unnecessary permissions
  - [ ] Remove any unnecessary integrations & reevaluate necessity of integrations with excessive permissions
- Server Settings > Integrations > Manage Bot/App > **Roles & Members** / **Channels**:
  - [ ] Remove permissions for bots that ask for Admin or other permissions that aren't needed — use least privilege
    with permissions at the role level and channel level
  - [ ] Uninstall any bots that aren't actively used or needed
  - [ ] Confirm all bots and apps are
    [**Verified**](https://support-dev.discord.com/hc/en-us/articles/23926564536471-How-Do-I-Get-My-App-Verified)
  - [ ] Restrict command permissions of integrations where possible (Manage > Roles & Members / Channels / Command
    Overrides)
- Server Settings > Integrations > Webhooks:
  - [ ] Review and remove any unnecessary webhooks
  - [ ] Reevaluate necessity of webhooks with excessive permissions

> **Note on Integration Security:** Integrations and webhooks add 3rd party risk and permission misconfiguration risk.
> Ensure that permissions are correct, and either remove external integrations or understand the risk they present.

#### Invites

- Server Settings > Invites:
  - [ ] Review and delete unnecessary or old invites regularly

#### Privacy Settings

- Server Settings > Privacy Settings:
  - [ ] Disable **Direct Messages** — this prevents users from DMing other members in this server

#### Community Features

- Server Settings > Community:
  - [ ] Enable the Community Feature
  - Unlocks tools like membership screening, server insights, welcome screen, and discovery settings. Helps maintain
    a structured, secure environment by surfacing official rules and critical info to newcomers.
- Server Settings > Server Insights:
  - [ ] Enable Server Insights for detailed analytics
  - Use this data to inform moderation strategies and server improvements

> **Note on Safety Features:**
>
> - Activity alerts notify on anomalous DM activity, which could indicate your community is being targeted by scammers
>   or social engineering attackers.
> - Raid Protection and CAPTCHA can also be satisfied by a bot, if preferred over Discord's built-in functionality.
> - Hiding/filtering DMs between server members is recommended to prevent scams, spam, and social engineering of your
>   users.
> - In the event of a security incident, Discord provides
>   [**Security Actions**](https://support.discord.com/hc/en-us/articles/17439993574167-Activity-Alerts-Security-Actions#h_01HAD80CK67WF59GDGR7XGVAN8)
>   for pausing invites and DMs to allow you to protect your community while responding to ongoing threats.

---

### Role Hierarchy Setup

Roles should be structured with higher-privilege roles at the top. Go to Server Settings > Roles, create roles like
Cold Admin, Team, Moderator, & Verified, and drag to reorder (higher roles override lower roles):

1. Cold Admin (highest)
2. Team
3. Moderator
4. Verified (lowest)

**Recommended permissions by role:**

| Role | Recommended Permissions |
| ---- | ----------------------- |
| **Moderators** | View Channels, View Audit Log, View Server Insights, Kick Members, Ban Members, Timeout Members, Send Messages and Create Posts, Embed Links, Attach Files, Add Reactions, Add External Emoji, Use External Stickers, Manage Messages, Bypass Slowmode, Read Message History, Request to Speak |
| **Members** | View Channels, Send Messages and Create Posts, Embed Links, Add Reactions, Read Message History, Request to Speak |

Use **Server Settings > Roles > [Role] > View Server as Role** to see what members with a certain role can see and access.

---

### Channel Management

#### Organization

- Use categories to group related channels
- Suggested categories: Information, General, Voice Channels, Topic-Specific

#### Per-Channel Settings

(Right-click channel > Edit Channel > Permissions):

- [ ] Set custom permissions for roles or members in specific channels

#### Channel Settings > Overview

- [ ] Slow Mode: Set appropriate cooldown (e.g., 5-30 seconds) for busy channels
- [ ] Age-Restricted Channel: Enable for channels with mature content

---

### Member Screening Setup

Beyond enabling in Safety Setup:

- Implement a verification bot like Wick that does in-channel captcha for users to join the server
- Require users to complete an in-channel captcha before accessing the server
- Advance Settings: Have verification bot filter based on account age, PFP set, and timeout for incomplete captcha

---

### Invite Best Practices

When creating invites:

- Set "Expire After" (recommended: 24 hours)
- Set "Max Number of Uses" (recommended: 50-100)

---

### Logging Setup

- Ensure admin/mod roles have "View Audit Log" permission
- Create a private logging channel visible only to admins/mods
- Use a logging bot like Logger or Dyno to send detailed logs
- Configure audit log output to a private channel for easier monitoring

---

### Security Bots

Various third-party Discord bots offer valuable security and protection features, facilitating automated moderation
for your server. In the sections below, we'll explore different categories of security bots and highlight popular
options for each category.

#### Anti-Impersonation Bots

Set up custom rules to prevent other users from joining using the same username and PFP (profile picture) to
impersonate you or other important members of the server. A popular bot in this category is
[Hashbot](https://hashbot.com).

#### Anti-Raid Bots

To prevent spam bots from joining your server all at once, an attack known as raiding, you can also set up bots with
particular rules. Beemo is a good example of a bot in this category.

#### Anti-Nuke Bots

This is a monitoring system to observe and note any changes (spontaneous or planned) that take place in your discord
server. Some key observation markers are channel and role creation/deletions, banning or kicking members, and webhook
creation/deletion.

#### Moderation & Link Whitelisting Bots

Only allows approved links to be used in the discord server. A popular bot in this category is Goodknight Bot.

#### General Moderation Bots

Consider bots like Dyno for advanced moderation and logging, or Carl-bot for reaction roles and custom commands. Set
up security Bots as described above.

_The bots above are not all-inclusive but rather a recommended list of bots to help protect your Discord server in
these categories._

---

### Establish Clear Server Rules

- Create a #rules channel
- Use Discord's built-in rules screening feature
- Include sections on: Behavior, Content, Moderation Actions, Appeals Process

---

### Regular Reviews

| Frequency | Action |
| --------- | ------ |
| **Monthly** | Review all role permissions; use a spreadsheet to track changes and justifications |
| **Quarterly** | Assess if server rules need updating; announce any changes in a dedicated announcements channel |
| **Bi-annually** | Delete or archive inactive channels; remove roles that are no longer needed |

Also regularly:

- Ensure bots are from reputable sources and receive frequent updates
- Review bot permissions after each significant update to avoid newly introduced vulnerabilities
- Keep track of newly introduced features such as Threads, Scheduled Events, or Stage Channels and configure their
  permissions carefully (e.g., who can start or join a Thread) to prevent abuse by spammers or scammers

---

### Cold Admin Accounts

A Cold Admin account provides enhanced security because it serves exclusively as the server owner and is not used for
everyday activities. If a regular admin account is compromised, attackers gain full access to the server or account,
making it challenging to involve support and potentially requiring days or weeks to resolve the issue. Using a Cold
Admin means creating a separate account dedicated solely to ownership functions, keeping it isolated from routine
operations.

#### What is a Cold Device?

A Cold Device is a factory-reset device with no previous configuration. This should be a dedicated phone or laptop —
you can use an old iPhone/Android, Windows device, or even a Chromebook to keep costs down. Everyone involved in
setup and maintenance must ONLY access the Cold Admin account from a cold device.

#### Cold Admin Setup

##### Step 1: Create a dedicated email account

Create a brand new Gmail account specifically for this Discord account. Do not use a VPN during this process, and
it's best to use an incognito browser. After creating the Gmail account:

- [ ] Set up 2FA immediately (authenticator app recommended, or Security Key for maximum security)
- [ ] Ensure "Skip password when possible" is **off**
- [ ] Do not add a phone number to the account
- [ ] Note down the 10 backup codes **offline on paper** (DO NOT store online)
- [ ] Write down the email, password, and backup codes on paper and store securely

##### Step 2: Create the Discord account

Head to [https://discord.com](https://discord.com) and create a new account using the Gmail account you just created.

- [ ] Write down the email, username, password, and date of birth **offline**
- [ ] Use a username that is not related to your project
- [ ] Give the profile a profile picture in **My Account > Edit User Profile**
- [ ] Go to **Content & Social** and disable DMs from server members and set spam filter to maximum
- [ ] Set the account status to **Invisible** so no one can see if it's online (click profile in bottom left > change status)

##### Step 3: Join the server and transfer ownership

- [ ] Send the Cold Admin account a friend request from your personal Discord account
- [ ] Have the Cold Admin join the Discord server and complete verification like a normal account
- [ ] Assign the Cold Admin the highest admin role
- [ ] Have the Cold Admin send a few messages in a private team chat
- [ ] Wait approximately 24 hours, send a few more messages, then transfer ownership

**To transfer ownership:** Go to **Server Settings > Members** > Search for the Cold Admin account > Click the three
dots > Select **Transfer Ownership** > Input 2FA > Confirm

> ⚠️ **CRITICAL:** Triple-check that you are transferring to the correct Cold Admin account. If you transfer to the
> wrong account, recovery will be extremely difficult.

#### Use of Cold Admin Account

- **Do not** use the Cold Admin account for day-to-day operations
- Log into both the Gmail and Discord account at least once a month (set a phone reminder)
- Use only for: inviting/adding bots, making major changes only the server owner can perform
- If an incident or compromise occurs, log into the Cold Admin to regain control — the server owner always maintains
  full access rights

---

### Backup Systems

- Use a bot like ServerBackup to regularly backup your server configuration
- Store backups securely off-platform

---

### Additional Recommendations

- Set up account leveling for new members for gradually enabling permissions
- Regularly review server audit logs for admin and mod actions
- Use anti-raid bots like Wick or Dyno and configure automatic lock-down settings for suspicious activity
- Regularly review **Server Settings > Integrations** for newly added apps or link shorteners; disable suspicious
  integrations or automate link scanning with a bot that checks URLs against known phishing databases

> **Important:** Discord servers should not be used for any confidential communication (i.e., any admin discussions
> beyond the scope of server moderation) — even restricted channels and DMs are not end-to-end encrypted.

---

### Stay Updated

- Consult the official [Discord Moderator Academy](https://discord.com/moderation) for ongoing best practices and new features
- Implement recommended strategies (e.g., improved spam filters, updated role recommendations)

---

## Additional Resources


[... truncated ...]

---

### PAGE: /dprk-it-workers/techniques-tactics-and-procedures
**Title:** DPRK IT Worker TTPs
**Referenced by controls:** ws-3.1.1

# Techniques, Tactics, and Procedures




This section focuses on avoiding, discovering, and confirming the threat of DPRK IT Workers to your organization.
The sections dedicated to answering the questions "Am I interviewing a DPRK IT Worker?" and "Did I hire a DPRK IT
Worker?" are interchangeable and both provide strategy outlines for avoiding, discovering, and confirming DPRK-related
insider threats. Your organization can use tips from these sections to identify a DPRK IT Worker before you hire them,
as well as to identify them after you have made the mistake of hiring one.

This section focuses on dealing with emergent situations to identify potential DPRK IT workers who are attempting
to or already have infiltrated your organization. In the next section,
([**Mitigating DPRK IT Workers**](/dprk-it-workers/mitigating-dprk-it-workers)), we will discuss strategies to harden
your organization to minimize both the impact and the chances of infiltration and how to deal with the fallout of
hiring a DPRK IT Worker.

## How can DPRK IT Workers find a job in your company?

1. There is no single established channel through which a DPRK IT Worker can approach your company.
    Applying with an impressive CV and GitHub portfolio through a public channel (LinkedIn/Job Portal) is common;
    however, we have often observed alternative routes, such as:
     1. **Direct outreach to CEO/CTO.** They are persistent until clearly denied the opportunity, and even then,
        the actor may change their identity and try again.
     2. **Initiating contact through open-source contributions.** An actor will submit valid Pull Requests to your
        repositories and use this as a way to request a job interview.
     3. **Recommendation.** A worker will come recommended by another DPRK IT Worker or by a company they previously
        infiltrated (where the company may or may not be aware the employee is a DPRK IT Worker).
     4. **Tech recruiters.** Recruiters often prioritize evaluating skillsets over performing background checks.
        DPRK IT Workers can appear on their radar and be unwittingly pushed by a legitimate tech recruiter to your company.
     5. **Bounty/Hackathon participation.** DPRK IT Workers look for ANY source of revenue, no matter how small or
        large. If your company runs free-for-all bounty systems, it's extremely likely that some of the contributors are
        DPRK IT Workers.
     6. **Hired through a "dev shop."** If you recruit your employees through an outsourcing agency, you need to
        ensure their vetting process is appropriate. The outsourcing agency itself can be a victim of DPRK IT Worker
        infiltration.
2. The bottom line is that there is no single "safe" remote recruitment channel. You should vet your potential
    employees independently and **look beyond their skillset, which can often be impressive.** We have observed
    DPRK IT Workers joining companies by utilizing all the channels mentioned above. Establish a high-quality hiring
    process to avoid recruiting DPRK IT Workers; do not blindly rely on outsourced solutions.

## Am I Interviewing a DPRK IT Worker?

1. The list below can serve as a guide for avoiding hiring a DPRK IT Worker and as an exit-interview guide for
    verifying if an employee is a DPRK IT Worker.
2. Before discussing the heuristics: **Don't over-focus on stereotypical DPRK IT worker characteristics, such as being
    an Asian male in their 20s or 30s, using specific headphones, or obscuring their background. What you are looking for
    is evidence of misrepresentation and fraud. Job fraud is not exclusive to North Koreans - approach it as such.**
3. Below is a list of 'red flags' that can help you evaluate with higher confidence if you are dealing with a DPRK IT
   Worker. However, always keep the above point in mind! For every 'obvious' DPRK IT Worker, there will be some who are
   able to evade most, if not all, of the following flags:
     1. **Is their video on?** If not, insist they enable their camera.
         1. Some DPRK IT Workers have no problem presenting as themselves (without a facilitator, AI, or disabled
            video). See if you recognize anyone from this
            [Collection of DPRK IT Workers photos](https://x.com/browsercookies/media).
     2. **Is the background visible or obscured?** An obscured background isn't always a red flag, but it can be
        helpful for the final assessment.
         1. DPRK IT Workers love "stock" backgrounds. You'll often find them using the Golden Gate Bridge as a
            backdrop. Other times, you may notice them sitting in low-quality housing where the workspace is only divided
            by temporary walls or rugs.
     3. Read:
        [Detect if it's an AI-generated face or
        deepfake](https://unit42.paloaltonetworks.com/north-korean-synthetic-identity-creation/).
     4. **Start with small talk** relevant to their claimed nationality and location. This is especially important if
        you're dealing with someone presenting as an Asian man but providing, for example, Latin American documents/names
        while claiming to live in Southeast Asia (an identity mismatch). **Note: While a smaller number of female DPRK IT
        workers have been identified, they do exist. In other cases, you might encounter hired female facilitators. If the
        candidate claims to be in your country, offer an on-site interview. Beware, DPRK IT workers may send a stand-in.
        Verify that the person attending is the same one from the call.**
     5. **Keep an open mind** about gender, nationality, and experience. **DPRK IT workers are known to use
        facilitators from all over the world. This means you might encounter a non-Korean individual on the call who is,
        in fact, a DPRK IT worker.** Similarly, a DPRK IT worker's portfolio can sometimes be impressive and not far off
        from their claimed experience. In previous instances, we've found profiles showing 2-3 years of work for reputable
        organizations.
     6. **Go through the candidate's background.** Verify the timelines of their claimed experience (e.g., "You worked
        at Company X from when to when?"). While the candidate answers, observe if they seem to be reading from a script.
        Try to mix up details from their claimed experience and note their reaction (e.g., "I see you worked at XYZ," when
        you know from their CV that they didn't). This is good general advice. If the candidate appears to be relying on
        ChatGPT for answers (reading from the screen), it's a red flag.
     7. **Conduct a language comprehension test.** If the candidate claims to be Japanese, ask them questions in
        Japanese. Beware, some DPRK IT workers can speak Japanese or Chinese, though their proficiency is often similar
        to their English skills (A1/A2 level). See: [North Korean failing to answer questions in Japanese despite claiming
        to be
        Japanese](https://www.ketman.org/dprk-it-workers-in-freelance-platform-onlyDust.html#:~:text=With%20the%20sole,can%20watch%20below.)
     8. **Ask if the candidate is at home or a co-working space.**
         1. Look for movement in the background.
         2. If they claim to be at home, you can try a quick KYC check: **ask them to show their ID card next to
            their face.**
     9. **Carefully observe the candidate's screen presentation if they share their screen.** Often, you might notice
        different GitHub, Gmail, or other social network profiles active on their screen than those claimed in their CV.
        It's best not to give the candidate a chance to prepare for this. Casually ask, "Could you walk us through your
        best code on GitHub by sharing your screen?"
     10. **Evaluating a potential DPRK IT Worker's GitHub profile:**
         1. The account creation date is later than the commits in its hosted repositories (an artificially aged
            account). This is especially suspicious if many repositories follow this pattern and the user claims experience
            aligning with the age of these manipulated commits. This can be a false positive but is usually easy to clear
            up. Some users re-upload their old code, pre-dating the GitHub account creation date. A false positive for this
            particular flag can be deduced from the overall quality of the account.
         2. A high number of followers and accounts followed (e.g., over 200). If the user is a popular developer
            with a significant online presence, this isn't a red flag. **False positives can occur for accounts that
            automatically follow back or for Developer Relations (DevRel) and recruitment professionals.**
         3. A high number of contributors to the user's repositories. If the user is not a popular developer, this
            is a red flag. Regular developers typically won't have 100+ contributors to their repositories without a
            significant online presence. **This flag has a tendency to be polluted with high numbers of contributors on
            "copied" repositories, where a DPRK IT Worker has "injected" themselves as an author but has also kept the
            original contributors' usernames.**
         4. Quality of opened Pull Requests and Issues. **It's useful to retrieve the full history of Pull Requests
            and Issues opened by the user and review them for quality.** For advanced DPRK IT workers, these may not differ
            significantly from those of regular developers. Additionally, if a suspicious user was `@pinged` in a PR or
            Issue, it might help uncover a previous nickname. Look for automated or spam-like text/code. DPRK IT Workers
            will often go for "quantity" over "quality." **At the same time, some DPRK IT Workers will be authors of
            perfectly valid Pull Requests and Issues - an artifact of their previous employment or a better
            credibility-building effort.**
         5. **Overly informative (full of images and stats) GitHub profile README/About page.**
             1. This can be a false positive. Regular developers have been observed to overuse this section.
         6. **Avatars.**
             1. DPRK IT workers often use AI-generated images (not necessarily faces) as their avatars.
                They typically use freely accessible models like Stable Diffusion or Midjourney.
             2. "Cartoonish" avatars are also popular: CGI-style images of fictional characters, Minion avatars,
                and NFT-related avatars (especially Pengu and Doodles).
             3. **Having no avatar at all is also common.**
             4. Reference:
                [Identifying Suspicious Github Accounts](https://www.ketman.org/identifying-suspicious-gh-accounts.html)
         7. **Social media links.**
             1. In many cases, there will be a Twitter link. It's always worth visiting.
                 1. Check the "Media" page for images uploaded by the account owner. **Can you find any
                    pictures from conferences or showing their physical appearance?** DPRK IT workers usually will not
                    post pictures from physical locations. **The exception to this rule would be "facilitator" or
                    "purchased/stolen" accounts.**
                 2. Look for job-begging tweets.
                 3. References:
                     1. [Nick Franklin Case - A well developed IT Worker
                        persona](https://x.com/tanuki42_/status/1905003045433290940)
                     2. [Nick Franklin Case - Activity across different
                        platforms](https://x.com/danielvf/status/1905642180749775189)
         8. **Suspicious interactions.**
             1. Contributions to low-quality external repositories and/or organizations. **DPRK IT workers are
                known to set up "fake" organizations on GitHub, often populated by other IT workers. Similarly, DPRK IT
                workers will cross-commit to each other's repositories.** It's worth checking the profiles of contributors
                to the potential threat actor's repositories: are these contributors legitimate themselves? A full data
                dump of the GitHub account may be useful, but cherry-picking a few repositories from the profile is often
                effective enough for a first pass.
                 1. Reference:
                    [A counter example - Good looking IT Worker Github
                    Profiles](https://x.com/blackbigswan/status/1873364567285449160)
         9. **Repositories.**
             1. "Copied repositories." DPRK IT workers will try to boost their credibility by pushing a clone
                of a legitimate repository to their own account (Google: "How to fake Github history"). They will often
                edit the `.git` config and insert their own account data. Usually, they won't remove all original
                contributors but will insert themselves among them. **Use GitHub's search feature to find the original
                repository by name, commit SHA, or a unique string extracted from within the repository. Compare the actual
                account creation date with the profile's UI-displayed history: is it consistent, or is the account's
                creation date more recent than the years of activity displayed?** A simple API query to get the account
                creation date from GitHub may be necessary here.
             2. GitHub's Activity Badge for contributing to an organization. Verify if it's an actual
                contribution like a PR or commit or just a spam Issue/Comment/PR. This is an often-utilized method for
                highly popular repositories (e.g., OpenZeppelin, Paradigm) where core developers are reluctant to merge
                spam PRs.
                 1. Reference: [DPRK IT Workers faking Github Activity
                Badges](https://x.com/blackbigswan/status/1876953373187920054/photo/1)
     11. **Evaluating other immediately available data points:**
         1. **Full Name.**
             1. Even if a full name is "fake," it can still be a useful data point. DPRK IT workers rotate their
                identities, but they need to maintain them for at least some time. **Another challenge they face is
                managing multiple personas; you may catch an "identity confusion" where a DPRK IT worker uses different
                names in different places, for example, a different name used/mentioned on GitHub than on a call or on
                other social profiles.** It's also possible to notice different names used with the same (or different)
                GitHub owner's email addresses.
                 1. Take extra care with Asian names, especially Chinese names. Chinese citizens often
                    westernize or shorten their full names in various ways. This doesn't necessarily mean they are
                    malicious.
             2. In most cases, DPRK IT workers prefer to use Asian (Japanese, Chinese, Korean) names. However,
                they are also known to use fake names from all around the world, corresponding to where their
                "facilitators" are based. This includes American names ("James" being an extremely popular choice) and
                even European names (e.g., Polish, Ukrainian, Hungarian).
                 1. DPRK IT workers may have access to KYC documents issued for their claimed nationality.
                    **You should be alarmed by highly unorthodox combinations**, such as an Asian man living in Indonesia
                    with Argentinian KYC documents.
         2. **Location.**
             1. Japan and the USA are extremely popular choices for claimed locations. Additionally, Southeast
                Asian countries like Thailand, Malaysia, Singapore, or Taiwan are also common. The actual physical location
                is commonly the DPRK (Pyongyang, border regions), China (border regions), Eastern Russia (Vladivostok),
                Laos (Vientiane), Indonesia, Vietnam, and parts of Africa. It's possible to obtain the IP address of a
                potential DPRK IT worker through a DocuSign document that collects HTTP headers. DPRK IT workers are known
                to utilize "laptop farms," meaning they can hide their IP behind an actual fixed/landline IP address in
                their claimed country of residence.
         3. **OSINT analysis.**
             1. We recommend checking each suspicious email address with a service like
                [https://epieos.com](https://epieos.com). It can provide additional data points, such as a LinkedIn
                profile, which can uncover further identity mismatches.
                 1. On LinkedIn, examine the strength of the actor's connection network.

## Did I hire a DPRK IT Worker?

1. The list below serves as a guide for confirming your suspicions if one of your employees is a potential
    DPRK IT Worker. We're focusing on using non-enterprise flags accessible to even the smallest of projects.
    The assumption is that your project has limited EDR/SIEM logging infrastructure (you should, however, consider
    implementing some monitoring infrastructure in the future).
     1. If your organization has EDR/SIEM capability, Read:
        [DTEX advisory on DPRK Insider Threat Kill
        Chain](https://www.dtexsystems.com/resources/i3-threat-advisory-inside-the-dprk/)
     2. Consider using GitHub Enterprise for your organization to have access to more detailed logs.
2. Before discussing the heuristics: **Don't focus on negating your suspicion; focus on clearing it up.
    It doesn't matter if you're checking a long-time employee who provides good technical output, is not Korean/Asian,
    logs into the workspace using a US-based IP, or came recommended. DPRK IT Workers have been known to successfully
    evade detection for YEARS.** Focus on creating a full profile of your employee and judge it based on the complete
    picture and any inconsistencies you find.
3. Below is a list of 'red flags' that should prompt immediate action from your side (e.g. a deep background check):
     1. **Avoiding real-life meetings.** Even if they initially agree to meet, they might come up with explanations
        as to why they can't. They often cite 'family reasons' or 'travel abroad.' The situation can repeat itself for
        every single meeting proposal, regardless of the location. **You can propose to meet at their location as a final
        test.**
     2. **Inconsistencies in work and communication.** It's often the case that a single DPRK IT Worker account is
        operated by a few individuals, especially if your company communication is sparse. One week you may observe good
        quality and high output; the next week, a significant drop. Similarly, for communication, you may observe the
        worker being overly 'mute' on all company sync calls or clueless as to what was discussed in previous meetings.
        They will also often have issues communicating about their code but not with the code development itself
        (a sign of more than one worker on a single account).
     3. **Timezone.** If your worker claims to be in Texas (GMT-5) but is located in Pyongyang (GMT+9), you may
        observe work patterns closer to North Korean time than to Texan time. Note that DPRK IT Workers work around the
        clock and can circumvent this flag easily.
     4. **Bogus work history.** Verify if the job history claimed on their CV is real. You can always reach out to
        the previous company for background information. In most cases, the history will be made up, but there are
        exceptions. DPRK IT Workers may list legitimate companies for which they did previous work but were let go
        (without that company's knowledge of their true nature). Sometimes, DPRK IT Workers will list organizations
        they control, so exercise caution when contacting anyone for background information.
     5. **Identity switch.** Be on guard if an employee's profile suddenly changes its nickname/identity.
        DPRK IT Workers do this often, usually when discovered in one of their previous jobs and for fear that someone
        will notify your company. **They may suddenly start using a different GitHub handle (this includes suddenly pushing
        a Pull Request using a different account than usual), delete their social media accounts, or get banned from
        LinkedIn.** Additionally, they may occasionally 'confuse' their fake identities and log in to your company
        workspace or a meeting using a completely different account.
     6. **Identity mismatch.** It should raise questions if your employee is Asian but provides non-Asian KYC
        documentation along with poor language skills. **Run a background check on all the data.** Can you find a person
        with the same name whose identity was potentially stolen or borrowed? Is the address provided legitimate, or does
        it seem 'random' (e.g., an empty house, a business venue)? Google "(Full Name of your worker) + sentenced" to see
        if the DPRK IT Worker bought a criminal's identity (an often-seen case with claimed US-based personas). Perform a
        reverse image search on your worker's profile pictures/avatars. Are there more similar accounts using the exact
        same image? **Beware that DPRK IT Workers have no issues providing credible-looking KYC documentation; some of
        these documents even pass authentication checks on specialized services.**
     7. **Recommending other suspicious accounts for work.** DPRK IT Workers will leverage their initial foothold
        in your organization to propose other DPRK IT Workers for a job. Their recommendations will usually follow the
        same patterns. Many organizations fall for it and hire multiple workers **(sometimes, as much as 50-70% of the
        entire company is composed of DPRK IT Workers if such tactics succeed).** Additionally, check if the potential
        DPRK IT Worker hasn't already added some of their 'friends' to your organization without your knowledge.
     8. **Proximity to other suspicious/spam accounts.** Don't be fooled by GitHub or Twitter accounts that are over
        10 years old. DPRK IT Workers can easily source these. However, check if your worker has any meaningful history of
        interaction with their followers/following. Or, do all accounts in proximity to your worker appear spam-like or
        like bots?
     9. **Poor social skills.** It's usually (but not always) the case that a DPRK IT Worker will have trouble with
        'small talk.' This isn't necessarily because of cultural differences (DPRK IT Workers are educated on Western
        culture and language as part of their job). It's often because of the sheer volume of remote gigs they handle
        and how confusing it can be. A DPRK IT Worker will prefer to always steer the conversation toward technical details.
     10.**Review Workspace logs (IP addresses).** Check if the IP addresses used to log in to your infrastructure
        are coming from the same location as claimed by the worker. VPNs, proxies, or Russian ISPs are red flags, as
        are highly inconsistent IP ranges (a mix of the sources mentioned). Beware that DPRK IT Workers are known to
        utilize "Laptop Farms."
        Read: [North Korea Infiltrates U.S. Remote Jobs - With the Help of Everyday Americans](https://archive.ph/Mb68C)
     11.**Payments.** North Koreans can organize a 'drop' bank account to receive wire transfers; however, their
        preferred method of receiving a salary will be through cryptocurrency, usually at a flat rate that they
        will not try to negotiate. In most cases, DPRK IT Workers will work at a discount to industry standards
        without complaining (25-50% discount). It may be the case that the worker's CEX account gets frozen, and they will
        come back to your organization for help unfreezing it (by providing proof of employment).

## After a DPRK IT Worker is hired by your company:

1. **The main goal of a DPRK IT Worker is to keep their job and salary coming for as long as possible.** It's worth
    understanding that DPRK IT Workers themselves vary in quality. For more 'senior' workers, keeping the job will be easy
    as their output and technical skills are high. For 'junior' ones, the engagement may end on the basis of poor
    performance.
     1. We have observed cases where DPRK IT Workers are fine with taking a salary cut to help a project stay afloat,
        as long as they continue to be paid.
2. **The highest risk to your organization, which occurs immediately after you on-board the DPRK IT Worker, is a data
    and secrets leak.** DPRK IT Workers do not care about your organization's and their operational security. When you
    assign access to a single DPRK IT Worker, you can be sure more individuals are using the same access. Unbeknownst to
    you, everything that's private to this single worker is now accessible over a (usually) poorly secured internal DPRK
    IT Worker network.
3. **We have observed DPRK IT Workers passing access or sensitive information to DPRK Hacking teams.**
    This is not often the case, as the goal of the DPRK IT Worker is to keep their job and salary as opposed to a one-time
    hack. However, if the target is high-value, they won't hesitate or may not even have a say in whether or not their
    employer is targeted for a hack.
4. Some DPRK IT Workers also perform tasks adjacent to malicious campaigns like the "Contagious Interview." Read:
    [North Korean Threat Actors lure tech job seekers as fake
    recruiters](https://unit42.paloaltonetworks.com/north-korean-threat-actors-lure-tech-job-seekers-as-fake-recruiters/)
    and [Two Campaigns by North Korea Bad Actors target job
    hunters](https://unit42.paloaltonetworks.com/two-campaigns-by-north-korea-bad-actors-target-job-hunters/).
    Your North Korean employee **may leverage the credibility granted by being employed at your company to conduct
    malware-related campaigns in the present and future.** This could significantly affect your brand.
5. **A DPRK IT Worker will try to escalate their access if possible**, whether by adding new members (who will also
    be getting paid) or by getting permissions to release builds and packages. Additionally, **we have encountered
    situations where DPRK IT Workers were added as signers to the multisig wallets** of the entire project as part
    of the dev team!
6. **DPRK IT Workers won't report code vulnerabilities to you** and may leave them for future exploitation.
    First, they generally do not care about and are not invested in the success of your project to protect it from
    being hacked. Second, they may intentionally leave the backdoor with the intent to use it in the future. Lastly,
    they may simply miss the vulnerability because they are overworked across numerous remote gigs they're performing
    at once.

In the next section [**Mitigating DPRK IT Workers**](/dprk-it-workers/mitigating-dprk-it-workers) we will be discussing
ways to harden your organization and employees against the DPRK IT Worker threat.

---

---

### PAGE: /guides/account_management/telegram
**Title:** Telegram Security
**Referenced by controls:** ws-3.1.4, ws-5.1.2

# Telegram Security




## Summary

> 🔑 **Key Takeaway:** Stay vigilant with group chats on Telegram. Implement verification steps and secure communication
> practices to protect against sophisticated interception attacks.

While **Telegram** is widely used in the crypto community, it's crucial to understand its security limitations. Telegram
**does not** offer end-to-end encryption (**E2EE**) by default, which means your messages could potentially be accessed
by third parties. Additionally, Telegram's reliance on phone numbers for account creation can expose users to SIM
swapping attacks, and its peer-to-peer call feature can reveal your IP address to other users. If **E2EE** is a
priority, consider using [Signal](https://signal.org/).

However, if you choose to use **Telegram**, the following best practices can help enhance your security.

---

## For Individuals

These settings apply to your personal Telegram account. All team members and admins should configure these on their own accounts.

### Account Security Checklist

- Account Settings:
    - Privacy & Security >
        - Security >
            - [ ]  Two-Step Verification > **On**
                - Telegram does not require a login by default. However, you can set up a password that acts as a "second" 2FA method when logging in from a new device.
                - Telegram sign-ups require a phone number, but you can also enable two-factor authentication via a password—your main protection if you're ever SIM-swapped. **Don't reuse this password anywhere else.**
                - Do not set a password hint, do add a recovery email
                - **SMS Codes:** Telegram sends a code via SMS, which is not secure.
                - **Email Recovery:** Offers email recovery, which is more secure but lacks options for authenticator apps or hardware keys.
                - **Backup Password:** If you lose this password, access to your account may be compromised. Write it down offline and ensure it is not lost.
            - [ ]  Local passcode > **On** (recommended)
                - This feature adds a passcode to access your Telegram app after a period of inactivity. The default setting is "away for 1 hour."
                - **Store Passcode Securely:** Do not lose this passcode—store it offline if needed.
                - **Unique Passcode:** Ensure it is different from your phone's unlock passcode.
            - Active sessions >
                - Telegram supports auto-terminating inactive sessions. You can also manually review and end any suspicious active sessions.
                - [ ]  Review and delete all unused sessions
                - [ ]  Terminate old sessions > **1 month**
        - Privacy >
            - Consider adjusting the following settings based on your country, usage, and purpose for using Telegram:
            - [ ]  Phone Number > Who can see my phone number > **Nobody**
                - Making your phone number visible can expose you to unwanted contact or social engineering attacks. Restricting visibility helps safeguard your personal info.
            - [ ]  Phone Number > Who can find me by my number > **My Contacts**
            - [ ]  Phone Number > Exceptions > Remove all
            - [ ]  Last Seen & Online > Who can see my timestamp > **Nobody**/**My Contacts**
            - [ ]  Last Seen & Online > Exceptions > Remove all
            - [ ]  Profile Photo > Who can see my profile photo > **Everybody**
                - Set to **Everybody** to stop scammers from impersonating your profile picture.
            - [ ]  Bio > Who can see my bio > **Nobody** (depending on use of Telegram)
            - [ ]  Date of Birth > Who can see my date of birth > **Nobody**
            - [ ]  Date of Birth > Exceptions > Remove all
            - [ ]  Forwarded Messages > Who can add a link to my account when forwarding my messages > **Nobody**
            - [ ]  Calls > Who can call me > **Nobody**/**My Contacts**
            - [ ]  Calls > Exceptions > Remove all
            - [ ]  Calls > Peer-to-peer > Use peer-to-peer with > **Nobody**/**My Contacts**
                
                > **Note**: Peer-to-peer calls leak your IP address to callers. Set to **Nobody** to preserve anonymity
                
            - [ ]  Calls > Peer-to-peer > Exceptions > Always allow > Remove all
            - [ ]  Groups & Channels > Who can add me to groups and channels > **Nobody**/**My contacts**
                - This helps prevent being added to random groups that may impersonate legitimate groups and lead to scams.
            - [ ]  Groups & Channels > Exceptions > Remove all
            - [ ]  Voice Messages > Who can send me voice messages > **Nobody**/**My contacts**
            - [ ]  Voice Messages > Exceptions > Remove all
            - [ ]  Messages > Who can send me messages > **My Contacts and Premium Users** (or **Everybody**/**My Contacts** depending on use of Telegram)
        - [ ]  New chats from unknown users > Archive and Mute > **Enabled**
        - [ ]  Bots and website > **Clear Payment and Shipping Info**
        - [ ]  Auto-Delete Messages > Set a time frame (e.g., 1 week) based on your risk tolerance
            - Consider the photo you shared with a friend several months ago. While it might have slipped your mind, an attacker who gains access to your account could find such information quite valuable.
    - Advanced >
        - [ ]  Automatic media download > Disable all types in all cases
            
            > **Note**: Automatic media download leaves you exposed to advanced malware attacks
            
        - Version and updates >
            - Ensure you are always using the latest version of Telegram to benefit from the newest security patches and features.
            - [ ]  Check for Updates: Visit your device's app store regularly
            - [ ]  Update automatically > **Enabled**
            - [ ]  Install beta versions > **Disabled**

> **Authentication Guidelines**: When establishing a secret chat, [compare the encryption keys](https://core.telegram.org/techfaq#q-how-are-secret-chats-authenticated) outside of telegram, in an established/authenticated channel, outside of telegram. When establishing a peer-to-peer (encrypted) call, [compare the emojis](https://core.telegram.org/techfaq#q-how-are-voice-and-video-calls-authenticated) in an established/authenticated channel, outside of telegram. These are your defenses against man-in-the-middle attacks. You **must** confirm these details if using Telegram for private communications. That said, it is suggested to use a secure platform like [Signal](https://signal.org/) for confidential communication.

---

### Device-Level Security

Securing the device you use for Telegram is crucial for preventing unauthorized access to your account and messages.

- [ ]  **Enable Full Device Encryption**:
    - Ensure your device has full disk encryption enabled
    - For iOS: This is enabled by default with a passcode
    - For Android: Go to **Settings > Security > Encryption** and follow instructions

- [ ]  **Set Strong Device Passcodes**:
    - Use alphanumeric passwords rather than simple PINs
    - Enable biometric authentication as a secondary measure

- [ ]  **Keep Your Device Updated**:
    - Install OS updates promptly to patch security vulnerabilities
    - Update Telegram to the latest version regularly

- [ ]  **Install Security Software**:
    - Use reputable anti-malware software on your device
    - Consider privacy-focused apps that detect network anomalies

- [ ]  **Secure Your Backups**:
    - Ensure any device backups containing Telegram data are encrypted
    - Be cautious about cloud backups that might store Telegram messages

---

### Advanced Privacy Measures

#### Consider Using a Different Phone Number

Even if you implement all the recommended security measures, there are still valid reasons to use a separate phone
number. For instance, it can help prevent your contacts from discovering your Telegram account or reduce the risk of
accidental number exposure. This is particularly important because the **"Share My Phone Number"** option is enabled by
default whenever you add a new contact.

**Using a VoIP Number**

Telegram restricts many VoIP providers, but services like [Google Voice](https://voice.google.com/) or
[Burner](https://www.burnerapp.com/) might work. Purchase a burner number solely for Telegram if you prefer additional
anonymity.

**Using an Anonymous Number**

In December 2022, Telegram introduced support for anonymous numbers purchased through its [TON](https://ton.org/)
blockchain infrastructure. You can also check out [Fragment](https://fragment.com/) for such options.

#### Use Secret Chats for Enhanced Privacy

For conversations that require an extra layer of security, use Telegram's Secret Chats, which offer **end-to-end
encryption**.

1. **Start a Secret Chat**: Open the chat with the desired contact, tap on their name, and select **Start Secret Chat**
2. **Benefits**:
   - Messages are encrypted and can only be read by you and the recipient
   - Offers self-destruct timers for messages
   - Prevents forwarding of messages to other chats

#### Data Settings

**Go to:** Settings > Privacy and Security > Data Settings

- [ ]  **Sync Contacts:** Disable (depending on use of Telegram) to prevent syncing your contacts.
- [ ]  **Suggest Frequent Contacts:** Disable (depending on use of Telegram) to avoid unsolicited contact suggestions.

---

### Best Practices for Safe Use

- [ ]  **Use Secret Chats:** When messaging someone, create a 'secret' chat to ensure encrypted 1:1 communication, providing end-to-end encryption for sensitive transactions.
- [ ]  **Verify Group Invites and Authenticity:** Always triple-check group invitations and confirm the legitimacy of group chats through separate channels to avoid joining impostor groups that share malicious links.
- [ ]  **Beware of Unsolicited DMs:** Never trust direct messages from anyone sending links or posing as "support," "exchanges," or "team" members.
- [ ]  **Double-Check Payment Details:** Verify payment information through multiple methods before transferring funds to prevent fund redirection.
- [ ]  **Block and Report Scammers:** Use the block function to prevent further contact, and report spammers/scammers instead of just deleting chats.
- [ ]  **Be Cautious with Third-Party Bots and Integrations:**
    - Third-party bots can enhance functionality but may also introduce vulnerabilities.
    - Only add bots from reputable sources
    - Limit the permissions you grant to bots
    - Periodically review and remove unnecessary bots
- [ ]  **Exercise Caution with Mini Apps:** Avoid logging in or providing information to mini apps that redirect outside of Telegram. Triple-check the username of the mini app to ensure its legitimacy, as Telegram lacks a bot verification system. Never download or run any commands from Telegram on your device.
- [ ]  **Enhance Privacy with a VPN:** *Advanced tip:* Set up a proxy or VPN to hide your IP address while using the Telegram app.
- [ ]  **Stay Vigilant Against Scam Ads:** Be aware that anyone can post ads in channels, with 99% being scam ads. Exercise caution when interacting with advertisements.

---

### Platform-Specific Risks: Man-in-the-Group Attack

Attackers can exploit Telegram's group chat features to intercept and manipulate communications between two parties.
Here's a concise example of how such an attack might occur:

#### Scenario: Intercepting a Payment Deal

**Step 1: Initial Communication**

- **Alice** and **Bob** decide to finalize a cryptocurrency deal using a Telegram group chat named **"Crypto Deals"**.

**Step 2: Attackers Create Cloned Groups**

- **Attacker 1** creates **Group A** impersonating **Alice**.
- **Attacker 2** creates **Group B** impersonating **Bob**.

**Step 3: Replicating Conversations**

- **In Group A (Impersonating Alice):**
  - The attacker, posing as Alice, relays Alice's messages from Group B to maintain the conversation.

- **In Group B (Impersonating Bob):**
  - The attacker, posing as Bob, mirrors Bob's messages from Group A, acting as a middleman without altering the
    content.

**Step 4: Swapping Payment Details**

- **In Group A:**
  - Fake Alice and Bob agree to the terms of the deal.
  - Bob shares his payment address.

- **In Group B:**
  - Fake Bob shares his swapped payment address.
  - The conversation continues normally, with neither Alice nor Bob aware of the swap.

**Step 5: Execution of the Scam**

- **Alice** sends the payment to what she believes are Bob's details but are actually those of Fake Bob.
- The attacker now controls both ends of the conversation, having successfully redirected the funds.

---

## For Team Members

These guidelines apply to team members who help manage Telegram groups/channels but don't have full administrative access.

Team members should:
- Ensure their individual account settings are configured according to the checklist above
- Each admin must follow the guidance for securing their individual accounts
- Add a suffix to your username, for example: "MyName | will never DM you"
- Understand how to verify the authenticity of admins and official messages
- Be aware of the Man-in-the-Group Attack scenario described above

---

## For Admins

These settings and practices apply to Telegram group/channel administrators with elevated privileges.

### Channel & Group Settings Checklist

#### Channel Settings

- Open channel > click channel name > **Channel settings**
    - [ ]  Sign messages > **Enable** (if non-repudiation is desired)
    - [ ]  Administrators > Review the list and remove any unnecessary

#### Group Settings

- Open group > click group name > click three dots > **Manage group**
    - [ ]  Channel type > **Private** (if public discoverability is not necessary)
    - [ ]  Channel type > Content protection > **Enabled** (if confidentiality is needed)
    - [ ]  Sign messages > **Enabled**
    - [ ]  Chat history for new members > **Hidden**
        - This is not available if Topics are enabled
    - **Permissions:**
        - [ ]  Send media > should be restricted appropriately
            - At minimum, **Files** and **Embed links** should be disabled
        - [ ]  Add members > **Disabled** (if not necessary) [[1]](#1-member-control)
        - [ ]  Pin messages > **Disabled**
        - [ ]  Change group info > **Disabled**
        - [ ]  Slow mode > At least **10s**, if not obstructive
        - [ ]  Exceptions should be restricted to valid use cases
            - Team members should have exceptions granted to them for these rather than them being admins, when possible
    - [ ]  **Invite links** > Review and remove unnecessary
        - Links should be limited by time period or number of users, when not obstructive
    - [ ]  **Administrators** > Review and remove unnecessary & review permissions of each admin
        - Again, it is recommended to add exceptions for team members rather than add them as admins, when possible
        - Remove unnecessary permissions, especially **Add new admins**
        - **Aggressive Anti-Spam** > **Enabled**
    - [ ]  **Members** > Review and remove unnecessary (If a confidential channel)

---

### Admin Permissions Management

If you manage Telegram groups or channels, properly configuring admin permissions is crucial for maintaining security.

- [ ]  **Limit Admin Privileges**:
    - Go to your group/channel, tap the group name, select **Administrators**
    - Only grant necessary permissions to each admin
    - Avoid giving "Add Users" permission to untrusted admins

- [ ]  **Implement Admin Verification**:
    - Establish a verification process before promoting members to admin
    - Use separate channels (like voice calls) to confirm admin identities
    - Document when admin changes occur and why

- [ ]  **Configure Group Settings**:
    - Restrict member actions such as sending media or links
    - Enable "Slow Mode" for large groups to prevent spam
    - Use discussion groups for channels to control information flow

- [ ]  **Audit Admin Activities**:
    - Regularly review admin actions in the group
    - Remove inactive or suspicious admins
    - Consider using admin action logs if available

- [ ]  **Handle Admin Transitions Securely**:
    - Have protocols for transferring ownership if needed
    - Revoke admin rights immediately when team members leave

- [ ]  **Limit Group Permissions:** Restrict who can add members to groups to prevent unauthorized cloning and protect against raids.

---

### Additional Recommendations

- [ ]  Add a disclaimer in the description and/or as a pinned message to your channel that states that you will not DM users, and that support will only be offered via the public channel and dedicated support channels [[2]](#2-security-disclaimers)
- [ ]  Add a suffix to admin usernames, for example: "MyName | will never DM you"
- [ ]  Each admin must follow the guidance for securing their individual accounts

---

### Educate Community Members on Security Practices

If you're managing a community on Telegram, educating your members about security is vital for collective protection.

- [ ]  **Regular Security Announcements**:
    - Schedule periodic reminders about security best practices
    - Pin important security announcements in your group/channel
    - Create dedicated security FAQ channels or posts

- [ ]  **Clear Verification Procedures**:
    - Establish and communicate how official communications will occur
    - Create verification steps for new members to follow
    - Document how to verify the authenticity of admins and official messages

- [ ]  **Threat Awareness Training**:
    - Share examples of common scams targeting your community
    - Post screenshots of phishing attempts (with sensitive info redacted)
    - Explain the "Man-in-the-Group Attack" and how to avoid it

- [ ]  **Incident Reporting Protocol**:
    - Create clear guidelines for reporting suspicious activity
    - Designate security-focused admins to handle reports
    - Acknowledge reports publicly (without specifics) to encourage vigilance

- [ ]  **Security Resources**:
    - Develop simple, accessible security guides for members
    - Share platform-specific security updates when Telegram releases them
    - Create a security checklist for new community members

---

### Notes

#### [1] Member Control

Restricting the ability to add only to admins allows for revocability of invite links to stop raids or to freeze the channel if needed.

#### [2] Security Disclaimers

Telegram channels and groups should not be used for any confidential communication, as they are not end-to-end encrypted, except for 1:1 "secret chats" (which should not be commingled with unencrypted chats).

Example disclaimer: "We will NEVER message you directly to offer support or assistance with our product. For support, please email us at support@\<company\>.com. DO NOT interact with anyone DMing and claiming to be a \<company\> member. Please report scams to reports@\<company\>.com"

---

---

### PAGE: /opsec/core-concepts/implementation-process
**Title:** OpSec Implementation Process | SEAL
**Referenced by controls:** ws-4.1.1

# Operational Implementation Process




> 🔑 **Key Takeaway**: Operational security is implemented through a practical five-phase process: critical asset
> identification, practical threat analysis, actionable vulnerability assessment, contextual risk evaluation, and
> targeted control deployment.

## Relationship to Security Fundamentals

This document outlines a practical implementation process for operational security that organizations can follow in
sequence. This process complements the [Security Fundamentals](/opsec/core-concepts/security-fundamentals) document,
which defines the guiding principles:

- This process provides a **sequential workflow** for security teams to follow
- The fundamentals establish **enduring principles** that shape security architecture

While this process offers a concrete methodology for implementation, the fundamentals establish the ongoing security
approaches that must be maintained throughout your systems. Both elements must work together: the fundamentals guide
your overall approach, while this process provides the tactical roadmap.

For organizations just beginning their security journey, start here with these concrete implementation steps.

## 1. Critical Asset Identification

Map and document the assets that would cause significant harm to your organization if compromised.

> **🔗 Related Framework:** This phase integrates with [Asset Inventory](/infrastructure/asset-inventory) practices and
> drives [Data Protection](/opsec/old/data-protection/overview) strategies.

### Implementation Actions

1. Conduct asset discovery across your environment using both automated tools and manual inventorying
   - Digital assets: Use network scanning, CMDB tools, and cloud resource inventories
   - Physical assets: Document hardware, systems and access points
2. Apply a practical classification system with clear, actionable categories
   - High-value assets: Direct financial impact if compromised (e.g., private keys, treasury wallets)
   - Operational assets: Required for continued business operations
   - Sensitive data: Includes Customer information, intellectual property, strategic plans
3. Map information flows to understand how data moves between systems
4. Assign specific owners responsible for each asset category
5. Establish a sustainable review cadence based on your environment
   - High-volatility environments: Monthly reviews
   - Stable environments: Quarterly reviews
   - Document trigger events that require immediate reassessment (e.g., acquisitions, new product, etc.)

## 2. Practical Threat Analysis

Identify specific, relevant threat actors and their tactics based on your organization's profile.

> **🔗 Related Framework:** For hands-on approaches, see
> [Understanding Threat Vectors](/awareness/understanding-threat-vectors) and [Threat Modeling](/threat-modeling/overview)
> frameworks.

### Implementation Actions

1. Create a focused threat profile based on:
   - Your industry's recent attack history (consult threat intelligence reports)
   - Your organization's specific attack surface
   - The value of your assets to different adversaries
2. Document concrete adversary personas with specific capabilities:
   - External attackers: Targeted vs. opportunistic
   - Insider risks: Privileged users, contractors, disgruntled employees
   - Supply chain actors: Vendors with access to your systems
3. Map threat actors to their likely tactics using MITRE ATT&CK or similar frameworks
4. Establish threat intelligence feeds relevant to your environment
5. Create a lightweight process for updating threat models when new intelligence emerges

## 3. Actionable Vulnerability Assessment

Systematically identify and validate weaknesses in your environment through practical testing.

> **🔗 Related Framework:** This aligns with the [Security Testing](/security-testing/overview) framework and includes
> practices like [Static Application Security Testing](/security-testing/overview) and [Dynamic Application Security Testing](/security-testing/overview).

### Implementation Actions

1. Implement a layered vulnerability discovery program:
   - Automated scanning: Deploy tools appropriate for your environment (infrastructure, applications, cloud)
   - Manual testing: Conduct regular penetration tests focusing on critical systems
   - Red team exercises: Simulate real-world attacks against your defenses
2. Examine security processes for operational gaps:
   - Incident response procedures: Test through tabletop exercises
   - Access management: Audit privilege escalation paths
   - Change management: Review for security bypass opportunities
3. Evaluate security awareness through:
   - Targeted phishing simulations
   - Knowledge assessments
   - Procedural compliance checks
4. Document findings in a centralized vulnerability management system with clear ownership
5. Implement a consistent vulnerability scoring system to enable prioritization

## 4. Contextual Risk Evaluation

Analyze identified risks in the context of your business to drive informed decision-making.

> **🔗 Related Framework:** For practical approaches, see [Governance](/governance/overview) and
> [Risk Management](/governance/risk-management) frameworks.

### Implementation Actions

1. Establish a practical risk calculation methodology that considers:
   - Business impact (financial, operational, reputational)
   - Exploitation likelihood based on real-world attack patterns
   - Existing control effectiveness
2. Create a prioritized risk register with clear owners and timelines
3. Define risk acceptance criteria based on your organization's risk tolerance
4. Develop risk narratives that translate technical findings into business impacts
5. Implement a streamlined risk review process that:
   - Enables timely decisions
   - Involves appropriate stakeholders
   - Documents rationale for future reference
   - Triggers reassessment when conditions change

## 5. Targeted Control Deployment

Implement security controls that address prioritized risks while minimizing operational friction.

> **🔗 Related Framework:** Implementation integrates with [Security Automation](/security-automation/overview) and
> control frameworks like [Infrastructure](/infrastructure/overview) and
> [Identity and Access Management](/iam/overview).

### Implementation Actions

1. Design a defense-in-depth strategy with layered controls:
   - Preventive: Stop attacks before they succeed
   - Detective: Identify attacks in progress
   - Responsive: Limit damage from successful attacks
   - Recovery: Restore normal operations
2. Select controls using a balanced approach:
   - Technical feasibility in your environment
   - Implementation and maintenance costs
   - Potential operational impact
   - Coverage of multiple risks where possible
3. Implement controls using a phased approach:
   - Quick wins: Deploy high-impact, low-effort controls first
   - Foundational controls: Build core security capabilities
   - Advanced measures: Address sophisticated threats
4. Validate control effectiveness through:
   - Technical testing
   - Process verification
   - Metrics collection
5. Document clear procedures for:
   - Control operation
   - Maintenance requirements
   - Monitoring and alerting
   - Incident response when controls fail

---

---

### PAGE: /guides/account_management/github
**Title:** GitHub Security
**Referenced by controls:** ws-4.1.2

# GitHub Security




## Summary

> 🔑 **Key Takeaway for GitHub:** Secure your GitHub account with non-SMS two-factor authentication, enable push protection, and regularly review connected apps and sessions. For organizations, enforce signed commits, branch protection rules, and restrict member privileges to minimize supply chain attack risks.

This checklist is adapted from [Auditware's W3OSC](https://github.com/W3OSC/web3-opsec-standard) standards.

---

## For Individuals

These settings apply to your personal GitHub account. All team members and admins should configure these on their own accounts.

### Individual Account Settings

- Account Settings:
    - [ ]  Public profile > Contributions & activity > Make profile private and hide activity > **On**
    - [ ]  Password and authentication > Two-factor authentication > Enable and configure any method other than **SMS/Text message**
    - [ ]  Sessions > Review and revoke any unrecognized or unnecessary
    - [ ]  SSH and GPG keys > Review and remove any unnecessary
    - [ ]  Organizations > Review and leave any unnecessary
    - [ ]  Code security > User > Push protection for yourself > **Enabled**
    - [ ]  Applications > Review and remove any unnecessary
    - [ ]  Developer settings >
        - [ ]  GitHub Apps > Review and remove any unnecessary
        - [ ]  OAuth Apps > Review and remove any unnecessary
        - [ ]  Personal access tokens > Review and remove any unnecessary

---

## For Team Members

These guidelines apply to team members who contribute to repositories but don't have administrative access.

Team members should:
- Ensure their individual account settings are configured according to the checklist above
- Enable GPG signing for commits to meet signed commit requirements
- Be aware of branch protection rules that may require pull request approvals
- Regularly review and rotate personal access tokens
- Report any suspicious repository activity to organization admins

---

## For Admins

These settings and practices apply to GitHub organization administrators with elevated privileges.

### Repository Settings

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

- [ ]  Deploy keys > Remove all [[1]](#1-deploy-keys-warning)
- [ ]  Secrets and variables > Review secrets and variables and remove any unnecessary
- [ ]  GitHub Apps > Installed GitHub Apps > Review configurations and uninstall any unnecessary
    - [ ]  Review permissions are appropriate and that repository access is scoped only to relevant repositories

### Organization Settings

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

- Repository > Rulesets > New ruleset > New branch ruleset: [[2]](#2-enterprise-features)
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
    - [ ]  **Enroll** [[3]](#3-audit-logs)

---

## Notes

### [1] Deploy Keys Warning

Do not use deploy keys, they are possession-based access tokens that are a significant security risk. Use [GitHub Apps](https://docs.github.com/en/apps/overview) instead.

### [2] Enterprise Features

This is only available if you have a GitHub Enterprise plan. If you do not, you can set these same rules at the repo level instead.

### [3] Audit Logs

It is recommended to regularly review audit logs for your organization at Logs > Audit log.

---

**Related**: For repository hardening guidance, see [DevSecOps - Repository Hardening](/devsecops/repository-hardening).

---

---

### PAGE: /opsec/control-domains/people
**Title:** Personnel Security Controls
**Referenced by controls:** ws-6.1.1, ws-6.1.3, ws-7.1.2

# People & Personnel Controls




People are both the greatest asset and potentially the greatest vulnerability in any security program. This section
outlines controls to mitigate human-related security risks while fostering a security-aware culture.

## Social-Engineering Defense

Protecting against attacks that manipulate people to divulge confidential information or perform actions that compromise
security.

### Key Components

1. **Awareness Training**: Educating team members about social engineering tactics
2. **Attack Simulation**: Conducting controlled social engineering exercises
3. **Verification Procedures**: Establishing processes to verify requestor identity
4. **Reporting Mechanisms**: Creating clear channels for reporting suspicious activities
5. **Response Protocols**: Developing procedures for handling potential social engineering incidents

### Implementation Steps

1. Develop targeted training on common social engineering tactics
2. Implement regular phishing simulations and other controlled tests
3. Establish protocols for verifying requests for sensitive information or actions
4. Create and communicate clear procedures for reporting suspicious activities
5. Regularly update training and awareness materials based on current threats

### Web3-Specific Considerations

1. **Community Channels**: Address social engineering in Discord, Telegram, and other platforms
2. **Crypto-Specific Scams**: Educate about common scams like fake airdrops and giveaways
3. **Impersonation**: Train team members to verify identity through secure channels
4. **Public Information**: Consider the risks of publicly available information about team members
5. **Multiple Communication Channels**: Establish out-of-band verification for critical actions

## Insider-Threat Mitigation

Addressing risks posed by team members who may intentionally or unintentionally compromise security.

### Key Components

1. **Access Controls**: Implementing least privilege and separation of duties
2. **Monitoring**: Establishing appropriate monitoring of user activities
3. **Onboarding/Offboarding**: Securing processes for adding and removing team members
4. **Behavior Analytics**: Identifying unusual activities that may indicate threats
5. **Response Procedures**: Developing protocols for addressing potential insider threats

### Implementation Steps

1. Implement robust access controls based on the principle of least privilege
2. Establish monitoring for critical systems and sensitive data access
3. Develop and enforce secure onboarding and offboarding procedures
4. Create guidelines for identifying and reporting concerning behaviors
5. Establish response procedures that balance security with privacy and legal considerations

### Web3-Specific Considerations

1. **Key Management**: Implement controls for those with access to private keys
2. **Multi-Signature Requirements**: Use multi-signature arrangements for critical operations
3. **Distributed Teams**: Address insider threat risks in remote and distributed teams
4. **Pseudonymous Contributors**: Develop trust models for pseudonymous team members
5. **Financial Incentives**: Consider unique incentives related to cryptocurrency holdings

## Security Training & Culture

Building a culture where security is valued and integrated into daily operations.

### Key Components

1. **Security Awareness Program**: Comprehensive training on security principles
2. **Role-Based Training**: Specialized training based on job responsibilities
3. **Security Champions**: Designated representatives who promote security within teams
4. **Continuous Learning**: Ongoing education about emerging threats
5. **Positive Reinforcement**: Recognizing and rewarding security-conscious behavior

### Implementation Steps

1. Develop a comprehensive security awareness program
2. Implement role-specific security training for different functions
3. Establish a security champions program to promote security within teams
4. Create a continuous learning program with regular updates on new threats
5. Develop recognition programs for security-conscious behaviors and reporting
6. Integrate security into performance evaluations and team objectives

### Web3-Specific Considerations

1. **Crypto-Specific Training**: Educate on unique aspects of blockchain security
2. **Open-Source Mindset**: Balance security with transparency in an open-source culture
3. **Decentralized Teams**: Deliver effective training across distributed organizations
4. **Rapidly Evolving Threats**: Keep training current with fast-changing Web3 threats
5. **Community Education**: Extend security awareness to community members and users

## Personnel Security Measures

Ensuring appropriate security controls throughout the employment lifecycle.

### Key Components

1. **Pre-Employment Screening**: Appropriate background checks and verification
2. **Security Agreements**: Confidentiality and acceptable use policies
3. **Clear Expectations**: Defined security responsibilities for all roles
4. **Performance Management**: Integration of security into performance evaluation
5. **Termination Procedures**: Secure processes for departing team members

### Implementation Steps

1. Implement appropriate pre-employment screening procedures
2. Develop and require security agreements for all team members
3. Clearly document security responsibilities in job descriptions
4. Include security considerations in performance evaluations
5. Establish and enforce secure termination procedures

### Web3-Specific Considerations

1. **Pseudonymous Contributors**: Develop alternative verification approaches
2. **Global Teams**: Navigate screening challenges across different jurisdictions
3. **Community Contributors**: Address security for non-employee contributors
4. **DAO Participants**: Establish security expectations in decentralized organizations
5. **Key Recovery**: Implement procedures for key recovery when team members depart

Effective people and personnel controls recognize that security is fundamentally a human issue. By addressing social
engineering, insider threats, and security awareness, organizations can transform their people from potential
vulnerabilities into a critical line of defense.

---

---

### PAGE: /awareness/staying-informed-and-continuous-learning
**Title:** Staying Informed And Continuous Learning | SEAL
**Referenced by controls:** ws-6.1.3

# 4. Staying Informed & Continuous Learning




> 🔑 **Key Takeaway**: Security is not a one-time achievement but an ongoing journey of learning and adaptation. By
> establishing regular training routines, staying current with emerging threats, and fostering a culture of continuous
> improvement, you ensure your security awareness remains effective against evolving challenges.

## 4.1. Comprehensive Security Training Framework

### 4.1.1. Training Approaches

- **Bite-Sized Learning:**

Security training doesn't need to be lengthy or overwhelming. Short, focused sessions of relevant information can be
more effective than infrequent, lengthy presentations.
Example: Weekly 5-minute security tips delivered via team chat or email.

- **Role-Based Training:**

Tailor security training to specific roles and access levels within your organization.
Example: Developers might need more in-depth training on secure coding practices, while community managers might focus
more on social engineering awareness.

- **Recurring Schedule:**

Make security training a regular, ongoing activity rather than a one-time event.
Example: Monthly security topics with quarterly refreshers on critical subjects.

- **Practical Application:**

Include hands-on exercises that allow people to apply what they've learned.
Example: Conduct simulated phishing tests followed by immediate feedback and learning opportunities.

- **Interactive Training Methods:**

Use interactive training methods, such as SEAL Wargames or workshops to engage team members and enhance learning.

- **Real-World Scenarios:**

Incorporate real-world scenarios and case studies to illustrate the impact of security breaches and the importance of
preventive measures.

- **Assessments and Quizzes:**

Use assessments and quizzes to evaluate the effectiveness of training and identify areas where additional training may
be needed.

### 4.1.2. Training Delivery

- **Regular Awareness Sessions:**

Schedule quarterly webinars or short training refreshers focusing on the latest trends and emerging threats.

- **Interactive Simulations:**

Participate in phishing simulations or scenario-based exercises that allow you to practice identifying and responding to
threats in a risk-free environment.

- **Security Awareness Campaigns:**

Implement periodic campaigns that focus on specific security themes to reinforce key messages.
Example: A "Phishing Awareness Month" with targeted activities and resources.

### 4.1.3. Measuring Training Effectiveness

- **Baseline Assessments:**

Conduct assessments before and after training to measure improvement.

- **Behavioral Metrics:**

Track security-related behaviors such as reporting rates for suspicious emails or incidents.

- **Feedback Collection:**

Gather participant feedback to continuously improve training content and delivery methods.

## 4.2. Essential Training Topics

- **Phishing and Social Engineering:**

Educate team members on recognizing and responding to phishing attacks and social engineering tactics, with special
focus on web3-specific threats.

- **Password Management:**

Provide best practices for creating and managing strong passwords and using password managers.

- **Data Protection:**

Teach methods for protecting sensitive data, including encryption, access controls, and secure data handling practices.

- **Incident Reporting:**

Instruct team members on how to report security incidents and suspicious activities promptly.

- **Secure Coding Practices:**

For developers, provide training on secure coding practices and common vulnerabilities in web3 environments.

- **Device and Account Security:**

Cover best practices for securing devices and accounts, including updates, encryption, and access controls.

- **Emerging Threats:**

Keep team members informed about new and evolving security threats relevant to your organization.

## 4.3. Trusted Information Sources

### 4.3.1. Security Newsletters

- **Industry News:**

Subscribe to newsletters from sources such as FIRST.org for broader cybersecurity trends.
Example: The SANS NewsBites provides twice-weekly summaries of the most important security news.

- **Vendor Updates:**

Follow security updates from the software and hardware vendors in your project stack.
Example: Subscribe to security bulletins from cloud providers, operating system vendors, and key software dependencies.

### 4.3.2. Security Communities

- **Online Forums and Groups:**

Join online communities dedicated to security topics.
Example: The SEAL Discord provides a space to discuss security challenges specific to web3 projects.

- **Local and Virtual Meetups:**

Attend security-focused events to network and learn.
Example: Conferences like DeFi Security Summit offer insights into emerging threats and defenses.

### 4.3.3. Security Blogs and Podcasts

- **Technical Blogs:**

Follow security researchers and organizations that regularly publish detailed analyses.
Example: Trail of Bits blog provides in-depth technical security content.

- **Security Podcasts:**

Listen to podcasts that cover current security topics.
Example: The Daily Stormcast from FIRST.org offers brief daily updates, while Darknet Diaries provides longer-form
stories about notable security incidents.

## 4.4. Implementing a Learning Culture

- **Share Knowledge:**

Create channels for team members to share security articles, news, and insights.
Example: A dedicated Slack channel for security-related content.

- **Recognize Vigilance:**

Acknowledge and reward security-conscious behavior.
Example: Highlight team members who identify and report potential security issues.

- **Learn from Incidents:**

Use security incidents (both internal and external) as learning opportunities.
Example: After major industry breaches, conduct brief sessions to discuss what happened and how similar issues could be
prevented in your organization.

---

---

### PAGE: /opsec/appendices/case-studies
**Title:** OpSec Case Studies
**Referenced by controls:** ws-6.1.3, ws-7.1.1

# Case Studies & Exercises




This section provides real-world case studies and tabletop exercises that organizations can use to learn from past
incidents and test their security readiness. These examples illustrate common security challenges and effective response
strategies.

## Web3 Security Incidents

### Case Study 1: Private Key Compromise

#### Incident Overview

A mid-sized DeFi protocol experienced a security breach when an attacker gained access to a private key used for
deploying smart contracts. The attacker used the key to deploy a malicious contract update that drained approximately $3
million from the protocol.

#### Root Causes

1. The private key was stored in a development environment with inadequate access controls
2. The same key was used for both testing and production deployments
3. There was no multi-signature requirement for contract deployments
4. Monitoring systems failed to detect the unauthorized deployment

#### Response Actions

1. The team immediately alerted users via social media and official channels
2. All remaining funds were moved to secure wallets
3. A forensic investigation was initiated to determine the attack vector
4. Law enforcement and blockchain analytics firms were engaged
5. The team implemented a compensation plan for affected users

#### Lessons Learned

1. Implement multi-signature requirements for all critical operations
2. Establish separate keys for different environments with appropriate controls
3. Improve deployment security with additional verification steps
4. Enhance monitoring to detect unauthorized deployments
5. Develop and test incident response procedures specific to key compromise

### Case Study 2: Social Engineering Attack

#### Incident Overview

A community manager for a popular NFT project had their Discord account compromised after clicking a link in a direct
message that appeared to come from a team member. The attacker used the compromised account to post a fake minting link,
 resulting in approximately 50 community members connecting their wallets and losing assets.

#### Root Causes

1. Lack of verification procedures for team communications
2. Insufficient security awareness training for team members
3. Absence of multi-factor authentication on critical accounts
4. Inadequate controls for posting official announcements

#### Response Actions

1. The team removed the compromised account's permissions
2. An official announcement was made warning about the scam
3. The fake minting site was reported for takedown
4. Affected community members were identified for potential compensation
5. Communication procedures were revised to prevent similar incidents

#### Lessons Learned

1. Implement strong authentication for all team accounts
2. Establish verification protocols for team communications
3. Create a secure process for publishing official announcements
4. Conduct regular security awareness training for team members
5. Develop an incident response plan specific to community channel compromises

## Tabletop Exercises

### Exercise 1: Wallet Security Incident

#### Scenario

Your organization's multi-signature wallet has shown unusual transaction activity. A transaction that was not authorized
by the team has been initiated, requiring one more signature to execute. The transaction would send a significant
amount of funds to an unknown address.

#### Exercise Questions

1. What immediate actions would you take?
2. How would you investigate the source of the unauthorized transaction?
3. What stakeholders need to be notified, and what information would you provide?
4. What steps would you take to secure your remaining assets?
5. How would you communicate with your community or users?

#### Key Discussion Points

- Multi-signature wallet security procedures
- Transaction verification processes
- Incident response roles and responsibilities
- Communication strategies during security incidents
- Forensic investigation approaches

### Exercise 2: Smart Contract Vulnerability

#### Scenario

A security researcher has privately disclosed a critical vulnerability in one of your deployed smart contracts. The
vulnerability could potentially allow an attacker to drain funds, but it requires specific conditions that have not yet
occurred. You have approximately 48 hours before these conditions align.

#### Exercise Questions

1. How would you validate the reported vulnerability?
2. What immediate mitigation steps could you take?
3. How would you prioritize and approach developing a fix?
4. What stakeholders need to be involved in the decision-making process?
5. How and when would you communicate with users and the broader community?

#### Key Discussion Points

- Vulnerability verification processes
- Short-term mitigation strategies
- Smart contract upgrade procedures
- Decision-making during time-sensitive incidents
- Responsible disclosure and communication

### Exercise 3: Team Member Device Compromise

#### Scenario

A developer on your team reports that their laptop has been stolen while traveling. The laptop was used for development
work and had access to various internal systems. The developer had logged into several services recently and is unsure
if all sessions were properly closed.

#### Exercise Questions

1. What immediate actions would you take to contain potential damage?
2. What systems and access credentials might be at risk?
3. How would you determine if any unauthorized access has occurred?
4. What steps would you take to restore secure operations?
5. How would you improve security to prevent similar incidents?

#### Key Discussion Points

- Device security policies and procedures
- Access revocation processes
- Security monitoring and detection capabilities
- Recovery procedures for compromised credentials
- Travel security policies

## Security Exercises for Teams

### Red Team Exercise: Phishing Simulation

#### Exercise Overview

This exercise simulates a phishing attack targeting team members to test awareness and response.

#### Setup Requirements

1. Prepare simulated phishing emails targeting different team roles
2. Create a safe landing page that records interactions
3. Establish monitoring to track responses
4. Prepare educational materials for post-exercise discussion

#### Exercise Process

1. Send simulated phishing emails to selected team members
2. Monitor interactions with the phishing content
3. Document actions taken by recipients
4. Track if and how the incident is reported
5. Conduct a debrief session to discuss results

#### Evaluation Criteria

- Percentage of team members who detected the phishing attempt
- Time taken to report suspicious emails
- Effectiveness of reporting procedures
- Quality of response from security team
- Lessons learned and areas for improvement

### Security Control Assessment: Key Management

#### Exercise Overview

This exercise evaluates the effectiveness of cryptocurrency key management procedures.

#### Setup Requirements

1. Create a test environment with non-production keys
2. Prepare scenarios that test different aspects of key management
3. Establish evaluation criteria for each scenario
4. Ensure safety measures to prevent actual asset risk

#### Exercise Process

1. Simulate routine key management operations
2. Introduce scenarios requiring emergency access to keys
3. Test key recovery procedures
4. Evaluate separation of duties enforcement
5. Assess documentation and procedure clarity

#### Evaluation Criteria

- Adherence to established key management procedures
- Effectiveness of security controls
- Time required to safely complete key operations
- Quality of documentation and procedures
- Identification of gaps and improvement opportunities

These case studies and exercises provide practical examples and scenarios that organizations can use to learn from past
incidents and test their security readiness. By regularly conducting such exercises, teams can identify weaknesses in
their security posture and improve their ability to respond effectively to incidents.

---

---

### PAGE: /opsec/appendices/glossary
**Title:** Security Glossary
**Referenced by controls:** ws-7.1.3

# Glossary of Terms




This glossary provides definitions for key terms used throughout the Operational Security framework. It includes both
general security terminology and Web3-specific concepts to help ensure a common understanding of security concepts.

## General Security Terms

### A

**Access Control**: Systems and policies that restrict access to resources based on user identity and authorization
level.

**Authentication**: The process of verifying the identity of a user, system, or entity.

**Authorization**: The process of determining what actions an authenticated entity is permitted to perform.

**Availability**: The property of being accessible and usable upon demand by an authorized entity.

### B

**Backup**: A copy of data created and stored separately from the original, to enable recovery in case of data loss.

**Breach**: An incident that results in the unauthorized access, disclosure, or acquisition of protected data.

### C

**Confidentiality**: The property that information is not made available or disclosed to unauthorized individuals,
entities, or processes.

**Configuration Management**: The process of establishing and maintaining consistency of a system's performance and
functional attributes with its requirements and design.

**Containment**: Actions taken to limit the scope and impact of a security incident.

**Countermeasure**: An action, device, procedure, or technique that mitigates a security threat or vulnerability.

### D

**Defense in Depth**: A security strategy that employs multiple layers of controls to protect resources.

**Disaster Recovery**: A set of policies, tools, and procedures to enable the recovery of vital technology
infrastructure and systems following a disaster.

### E

**Encryption**: The process of converting information into a code to prevent unauthorized access.

**Endpoint Security**: The practice of securing entry points of end-user devices such as desktops, laptops, and mobile
devices from being exploited by malicious actors.

### I

**Incident Response**: The process of addressing and managing the aftermath of a security breach or attack.

**Integrity**: The property that data has not been altered in an unauthorized manner since it was created, transmitted,
or stored.

**Intrusion Detection System (IDS)**: A system that monitors network traffic for suspicious activity and issues alerts
when such activity is discovered.

### L

**Least Privilege**: The principle of providing users with the minimum levels of access necessary to perform their job
functions.

**Logging**: The recording of events, activities, and changes within a system or network.

### M

**Malware**: Software designed to disrupt, damage, or gain unauthorized access to a computer system.

**Multi-Factor Authentication (MFA)**: An authentication method that requires a user to provide two or more verification
 factors to gain access.

### P

**Penetration Testing**: An authorized simulated attack on a computer system to evaluate its security.

**Phishing**: A technique for attempting to acquire sensitive data, such as passwords or credit card details, by
masquerading as a trustworthy entity.

**Principle of Least Privilege**: The concept of granting users only the minimum access rights necessary to perform
their job functions.

### R

**Risk Assessment**: The process of identifying, analyzing, and evaluating risk.

**Risk Management**: The coordinated activities to direct and control an organization with regard to risk.

### S

**Security Controls**: Safeguards or countermeasures to avoid, detect, counteract, or minimize security risks.

**Security Incident**: An event that potentially compromises the confidentiality, integrity, or availability of
information or systems.

**Separation of Duties**: A principle that divides critical functions among different staff members to prevent fraud and
errors.

### T

**Threat**: A potential cause of an unwanted incident, which may result in harm to a system or organization.

**Two-Factor Authentication (2FA)**: A method of confirming a user's claimed identity by utilizing a combination of two
different factors.

### V

**Vulnerability**: A weakness that can be exploited by a threat actor to perform unauthorized actions.

**Vulnerability Assessment**: The process of identifying, quantifying, and prioritizing vulnerabilities in systems,
applications, and network infrastructure.

## Web3-Specific Terms

### A

**Air-Gapped**: A security measure where a computer or network is physically isolated from unsecured networks, such as
the public internet or an insecure local area network.

### B

**Blockchain**: A distributed ledger technology that maintains a continuously growing list of records, called blocks,
which are linked and secured using cryptography.

### C

**Cold Storage**: The practice of keeping a reserve of cryptocurrency offline, typically in hardware wallets or paper
wallets.

**Consensus Mechanism**: The process in a blockchain network that achieves agreement among distributed processes or
systems on a single data value.

**Custodial Wallet**: A cryptocurrency wallet where the private keys are held by a third-party service.

### D

**Decentralized Application (DApp)**: An application that runs on a decentralized network, avoiding a single point of
control or failure.

**Decentralized Autonomous Organization (DAO)**: An organization represented by rules encoded as a computer program that
is transparent, controlled by the organization members, and not influenced by a central government.

### E

**Externally Owned Account (EOA)**: An Ethereum account controlled by a private key, typically belonging to a person.

### G

**Gas**: A unit that measures the amount of computational effort required to execute operations on the Ethereum network.

### H

**Hardware Wallet**: A special type of cryptocurrency wallet that stores the user's private keys in a secure hardware
device.

**Hot Wallet**: A cryptocurrency wallet that is connected to the internet, allowing for quick transactions but with
increased security risks.

### M

**Mempool**: A collection of all transaction data that have been verified by nodes but have not yet been recorded onto
the blockchain.

**Multisignature (Multisig)**: A digital signature scheme that allows a group of users to sign a single document, with
multiple parties required to authorize a transaction.

### N

**Node**: A computer that connects to a blockchain network and maintains a copy of the blockchain.

**Non-Custodial Wallet**: A cryptocurrency wallet where users have full control over their private keys and
cryptocurrency.

### P

**Private Key**: A secret number that allows cryptocurrency to be spent. It is paired with a public key in asymmetric
cryptography.

**Public Key**: A cryptographic key that can be obtained and used by anyone to encrypt messages intended for a
particular recipient, such that the encrypted messages can only be decrypted by the recipient's paired private key.

### S

**Smart Contract**: Self-executing contracts with the terms of the agreement directly written into code, which
automatically enforce and execute the terms when predetermined conditions are met.

**Seed Phrase**: A series of words generated by cryptocurrency wallets that give users access to the cryptocurrency
associated with that wallet.

### T

**Token**: A digital asset that is created, issued, and managed on an existing blockchain.

**Transaction**: The record of a change in ownership of a cryptocurrency or the execution of a smart contract.

### W

**Wallet**: Software that stores private and public keys and interacts with various blockchain to enable users to send
and receive digital currency and monitor their balance.

**Web3**: The concept of a new iteration of the web which incorporates concepts such as decentralization, blockchain
technologies, and token-based economics.

This glossary provides a common language for discussing operational security concepts. Understanding these terms is
essential for effective communication about security risks, controls, and practices in both traditional and Web3
environments.

---

---

