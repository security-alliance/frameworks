# Evaluation Brief: sfc-dns-registrar

## TASK

For each control below, evaluate whether the candidate framework pages ACTUALLY meet the baseline requirements.
A page must SUBSTANTIVELY address the baseline — not just mention related keywords.
Be strict: if a baseline says "reviewed at least annually" and the page doesn't mention review cadence, that baseline is NOT met.

## CONTROLS (16 total)

### dns-1.1.1: Domain Security Owner
**Question:** Is there a clearly designated person or team accountable for domain security?
**Baselines (1):**
  1. Accountability scope covers policy maintenance, security reviews, renewal management, access control oversight, and incident escalation
**Candidate pages:** /opsec/core-concepts/security-fundamentals, /opsec/principles/principles, /infrastructure/domain-and-dns-security/registrar-and-locks

### dns-1.1.2: Domain Inventory and Documentation
**Question:** Do you maintain a complete, current record of all your domains and their configurations?
**Baselines (2):**
  1. Registry includes domain name, ownership, purpose, expiration date, registrar, DNS record configurations, security settings (DNSSEC, CAA), and registrar account configurations
  2. Accessible to relevant team members
**Candidate pages:** /infrastructure/domain-and-dns-security/registrar-and-locks, /infrastructure/domain-and-dns-security/dnssec-and-email, /infrastructure/domain-and-dns-security/monitoring-and-alerting

### dns-2.1.1: Domain Classification and Compliance
**Question:** Do you classify your domains by risk level and verify they meet the security requirements for their classification?
**Baselines (4):**
  1. Classification considers criticality, financial exposure, and operational impact
  2. Domains where users may transact funds or that are external-facing classified at the highest tier
  3. Each classification maps to specific security requirements (DNSSEC, locks, monitoring frequency, access controls)
  4. Compliance verified at least annually through configuration review against documented standards
**Candidate pages:** /infrastructure/domain-and-dns-security/dnssec-and-email, /infrastructure/domain-and-dns-security/monitoring-and-alerting, /opsec/core-concepts/security-fundamentals

### dns-2.1.2: Enterprise Registrar Security Requirements
**Question:** Do you use a registrar with enterprise-grade security for your critical domains?
**Baselines (4):**
  1. Registrar supports registry locks (server-level EPP locks)
  2. Registrar supports hardware security key MFA (FIDO2/WebAuthn)
  3. Registrar has no history of social engineering vulnerabilities
  4. Due diligence includes checking ICANN compliance notices for the registrar
**Candidate pages:** /infrastructure/domain-and-dns-security/registrar-and-locks, /infrastructure/domain-and-dns-security/dnssec-and-email, /infrastructure/domain-and-dns-security/monitoring-and-alerting

### dns-3.1.1: Registrar Access Control
**Question:** Do you control and secure access to domain registrar and DNS management accounts?
**Baselines (4):**
  1. Documented who is authorized, how access is granted/revoked, and role-based permissions where available
  2. Hardware security key MFA (FIDO2/WebAuthn) required for all registrar and DNS management accounts
  3. Access reviews conducted at least annually
  4. Access revoked promptly when no longer needed
**Candidate pages:** /infrastructure/domain-and-dns-security/registrar-and-locks, /infrastructure/domain-and-dns-security/monitoring-and-alerting, /infrastructure/domain-and-dns-security/dnssec-and-email

### dns-3.1.2: Dedicated Domain Security Contact Email
**Question:** Is your domain security contact email independent of the domains it protects?
**Baselines (4):**
  1. Hosted on a different domain than any domain it's responsible for
  2. Not a personal email address
  3. Used exclusively for domain security purposes
  4. Alias that notifies multiple people
**Candidate pages:** /infrastructure/domain-and-dns-security/registrar-and-locks, /infrastructure/domain-and-dns-security/dnssec-and-email, /opsec/travel/guide

### dns-3.1.3: Change Management for Domain Operations
**Question:** Do you have change management procedures for critical domain operations?
**Baselines (4):**
  1. Covers transfers, deletions, nameserver changes, and DNS record modifications
  2. Relevant team members notified before critical changes
  3. All changes logged
  4. Critical changes verified through out-of-band confirmation with the registrar
**Candidate pages:** /infrastructure/domain-and-dns-security/registrar-and-locks, /infrastructure/domain-and-dns-security/monitoring-and-alerting, /infrastructure/domain-and-dns-security/dnssec-and-email

### dns-4.1.1: DNS Security Standards
**Question:** Do you enforce DNS security standards across all your domains?
**Baselines (4):**
  1. DNSSEC enabled and validated on all critical domains
  2. CAA records configured to restrict certificate issuance to authorized CAs only
  3. TTL policies documented with rationale
  4. Standards applied consistently based on domain classification
**Candidate pages:** /infrastructure/domain-and-dns-security/dnssec-and-email, /infrastructure/domain-and-dns-security/monitoring-and-alerting, /infrastructure/domain-and-dns-security/overview

### dns-4.1.2: Email Authentication Standards
**Question:** Do you enforce email authentication standards and monitor for violations?
**Baselines (5):**
  1. SPF, DKIM, and DMARC configured for all domains that send email
  2. DMARC policy set to reject for domains actively sending email
  3. DMARC aggregate reports (rua) monitored and reviewed
  4. MTA-STS configured where supported to enforce encrypted email transport
  5. Domains that don't send email have SPF/DMARC records that reject all email
**Candidate pages:** /infrastructure/domain-and-dns-security/dnssec-and-email, /infrastructure/domain-and-dns-security/monitoring-and-alerting, /opsec/google/overview

### dns-4.1.3: Domain Lock Implementation
**Question:** Do you use domain locks to prevent unauthorized transfers and changes?
**Baselines (3):**
  1. Registry locks (server-level EPP locks) enabled for all critical domains where supported
  2. Transfer locks enabled on all domains
  3. Lock status verified periodically
**Candidate pages:** /infrastructure/domain-and-dns-security/registrar-and-locks, /opsec/travel/guide, /infrastructure/domain-and-dns-security/dnssec-and-email

### dns-4.1.4: TLS Certificate Lifecycle Management
**Question:** Do you manage the full lifecycle of your TLS certificates?
**Baselines (4):**
  1. Covers issuance, renewal, and revocation procedures
  2. Certificates tracked with expiration alerts
  3. Automated renewal where possible
  4. Revocation procedures documented for compromised certificates
**Candidate pages:** /infrastructure/domain-and-dns-security/monitoring-and-alerting, /infrastructure/domain-and-dns-security/dnssec-and-email, /infrastructure/domain-and-dns-security/registrar-and-locks

### dns-5.1.1: Domain and DNS Monitoring
**Question:** Do you monitor your domains for unauthorized changes to DNS records, registration status, and security settings?
**Baselines (5):**
  1. DNS record monitoring covers nameserver (NS) changes, A/AAAA changes, MX changes, TXT/SPF/DMARC changes, CAA record removal, DNSSEC status changes, and unexpected TTL drops
  2. Registration monitoring covers lock status, registrar account settings, and nameserver delegation
  3. Alerting and escalation paths documented
  4. Critical alerts (nameserver changes, DNSSEC failure, registrar changes) trigger immediate investigation
  5. Monitoring infrastructure not dependent on the domains being monitored
**Candidate pages:** /infrastructure/domain-and-dns-security/dnssec-and-email, /infrastructure/domain-and-dns-security/monitoring-and-alerting, /infrastructure/domain-and-dns-security/registrar-and-locks

### dns-5.1.2: Certificate Transparency Monitoring
**Question:** Do you monitor Certificate Transparency logs for unauthorized certificates issued for your domains?
**Baselines (3):**
  1. Subscribed to a CT monitoring service that alerts on new certificate issuance
  2. Alerts reviewed and unauthorized certificates investigated promptly
  3. Wildcard certificates flagged if not expected
**Candidate pages:** /infrastructure/domain-and-dns-security/monitoring-and-alerting, /opsec/core-concepts/security-fundamentals, /infrastructure/domain-and-dns-security/dnssec-and-email

### dns-5.1.3: Domain Expiration Prevention
**Question:** Do you actively prevent domain expiration?
**Baselines (4):**
  1. Auto-renewal enabled on all domains
  2. Calendar reminders at 90, 60, 30, and 7 days before expiration
  3. Payment methods verified current
  4. Backup person designated for renewal responsibility
**Candidate pages:** /opsec/travel/guide, /opsec/control-domains/technical, /infrastructure/domain-and-dns-security/registrar-and-locks

### dns-6.1.1: Alerting and Emergency Contacts
**Question:** Do you have alerting and emergency contacts in place for domain security incidents?
**Baselines (3):**
  1. Alerting system in place to notify relevant stakeholders when a potential compromise is detected
  2. Emergency contacts pre-documented including registrar security team, SEAL 911, and legal counsel
  3. Communication plan for warning users (status page, social media, in-app warnings)
**Candidate pages:** /infrastructure/domain-and-dns-security/registrar-and-locks, /opsec/travel/guide, /infrastructure/domain-and-dns-security/monitoring-and-alerting

### dns-6.1.2: Domain Incident Response Plan
**Question:** Do you have an incident response plan for domain hijacking and DNS compromise?
**Baselines (5):**
  1. Covers key scenarios including registrar account compromise, DNS hijacking, and unauthorized transfers
  2. Emergency registry lock activation procedures
  3. Procedures for regaining control of compromised domains
  4. Post-recovery validation including DNS records verified against known-good baseline, all credentials reset, and access logs reviewed
  5. Plan tested at least annually (can be combined with broader IR drills)
**Candidate pages:** /infrastructure/domain-and-dns-security/registrar-and-locks, /infrastructure/domain-and-dns-security/monitoring-and-alerting, /opsec/travel/guide

---

## FRAMEWORK PAGES (9 unique)

### PAGE: /opsec/core-concepts/security-fundamentals
**Title:** Security Fundamentals
**Referenced by controls:** dns-1.1.1, dns-2.1.1, dns-5.1.2

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
**Referenced by controls:** dns-1.1.1

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

### PAGE: /infrastructure/domain-and-dns-security/registrar-and-locks
**Title:** Registrar Security & Registry Locks | SEAL
**Referenced by controls:** dns-1.1.1, dns-1.1.2, dns-2.1.2, dns-3.1.1, dns-3.1.2, dns-3.1.3, dns-4.1.3, dns-4.1.4, dns-5.1.1, dns-5.1.3, dns-6.1.1, dns-6.1.2

# Registrar Security & Registry Locks




## Choosing a Secure Registrar

Your domain registrar is the company that manages your domain registration with the central registry. This is often the
weakest link in domain security, as many registrars have poor security practices and are vulnerable to social
engineering attacks.

### Enterprise-Grade Registrars (Recommended)

These registrars are designed for high-value domains and have security measures that consumer registrars lack:

- **MarkMonitor**: Used by Fortune 500 companies, requires legal documentation for changes, dedicated security team
- **AWS Route53**: IAM policy integration, CloudTrail logging, uses Amazon Registrar for major TLDs (but check TLD support)
- **Cloudflare Registrar**: No markup pricing, automatic DNSSEC, built-in DDoS protection, requires Cloudflare services

### Consumer Registrars to Avoid for Critical Domains

These registrars are designed for personal use and lack the security measures needed for Web3 projects:

- **GoDaddy**: History of social engineering vulnerabilities, call center support vulnerable to manipulation
  - [2020 incident: Employees tricked into compromising cryptocurrency domains](https://threatpost.com/godaddy-employees-tricked-compromise-cryptocurrency/161520/)
  - [Multiple low-tech, high-impact breaches](https://krebsonsecurity.com/2023/02/when-low-tech-hacks-cause-high-impact-breaches/)
- **Namecheap**: While better than GoDaddy, still vulnerable to social engineering and lacks enterprise-grade security controls
- **Consumer-focused services** (Google Domains/Squarespace): Designed for personal use, not enterprise security
- **Resellers**: Add another layer of complexity and potential attack surface

**Due diligence**: Check [ICANN Compliance Notices](https://www.icann.org/compliance/notices) for registrar
terminations, breaches, and compliance issues. ICANN has terminated several registrars due to security issues and
breaches. Review your registrar's compliance history before trusting them with critical domains.

## Registry Lock (EPP Lock)

Registry lock prevents unauthorized transfers at the registry level, not just the registrar. This is the strongest
protection available for domain security.

**Important distinction**: EPP status codes apply to **registry objects** (transfers, deletes, nameserver sets, contact
updates), NOT DNS zone edits at your provider's DNS panel. You can still edit A records, MX records, TXT records, etc.
in your DNS hosting provider's interface even with EPP locks enabled.

**EPP Status Codes** that protect your domain:

- `clientTransferProhibited`: Prevents domain transfers to another registrar
- `clientUpdateProhibited`: Prevents registry object updates (nameservers, contact information)
- `clientDeleteProhibited`: Prevents domain deletion
- `serverTransferProhibited`: Registry-level transfer protection (stronger than client-level)
- `serverUpdateProhibited`: Registry-level update protection (nameservers, contacts)
- `serverDeleteProhibited`: Registry-level deletion protection

**How it protects you**: Standard transfer locks only prevent transfers between registrars, but registry locks with full
EPP protections prevent unauthorized changes to critical registry objects including transfers, deletions, nameserver
changes, and contact modifications. Server-level locks require manual verification with the registry operator (like
Verisign for .com domains), making social engineering attacks at the registrar level completely ineffective.

**What EPP locks do NOT block**: DNS record edits (A, AAAA, MX, TXT, etc.) in your DNS provider's panel remain fully
functional. EPP locks protect registry-level changes, not zone-level DNS record edits.

**Setup**: Contact enterprise registrars for registry-operator level locks. This typically requires additional fees and
documentation but provides the highest level of security.

## Multi-Factor Authentication

Multi-factor authentication (MFA) adds an extra layer of security beyond just passwords, which are easily compromised
through phishing or data breaches.

**Strong recommendation**: Use **Hardware Security Keys (FIDO2/WebAuthn)** for registrar accounts. Given the critical
nature of domain security and the irreversibility of domain hijacks, hardware keys are the ONLY authentication method we
strongly recommend for Web3 projects.

**Authentication options**:

1. **Hardware Security Keys (YubiKey, Titan, etc.) - STRONGLY RECOMMENDED**
   - **Immune to phishing**: Cannot be tricked by fake login pages
   - **No shared secrets**: Private key never leaves the device
   - **No SIM swap vulnerability**: Physical device required
   - **FIDO2/WebAuthn standard**: Industry-standard cryptographic authentication
   - **Why critical for domains**: Domain control = organization control; hardware keys provide the highest assurance

2. **TOTP Applications (Google Authenticator, Authy) - DISCOURAGED**
   - Vulnerable to phishing through man-in-the-middle attacks
   - Shared secrets can be compromised during setup
   - QR codes can be intercepted or screenshotted
   - Only use as a last resort if registrar doesn't support hardware keys
   - If forced to use TOTP, ensure registrar has additional protections

3. **SMS 2FA - DO NOT USE**
   - **Extremely vulnerable to SIM swapping attacks**
   - SMS can be intercepted via SS7 vulnerabilities
   - Social engineering attacks target mobile carriers
   - No cryptographic security
   - Numerous high-profile compromises via SMS 2FA
   - **Never use SMS 2FA for domain registrar accounts**

**Action item**: If your registrar only supports SMS or TOTP, consider **migrating to an enterprise registrar**
(MarkMonitor, AWS Route53 Registrar, Cloudflare Registrar) that supports hardware security keys.

## Dedicated Security Contact Email

Use a dedicated email address for domain security that's completely separate from your main domain and personal accounts.

**Why this matters**: If your main domain is compromised, you need a way to receive security notifications and regain
control. Using the same domain creates a circular dependency.

```
❌ admin@yourdomain.com (circular dependency - if domain is hijacked, you lose email access)
❌ personal@gmail.com (too many attack vectors, likely used across multiple services)
⚠️ domain-security@protonmail.com (better than gmail, but still a shared service)
✅ security@yourcompany-domains.com (best - separate domain dedicated to domain management)
```

As a best practice register a separate domain specifically for domain management (e.g., `yourproject-domains.com` or
`yourproject-security.com`) with a different registrar than your main domain. This ensures you maintain communication
channels even if your primary domain is completely compromised.

## Access Control Best Practices

Limit and monitor who has access to your domain registrar account, as each person with access represents a potential
attack vector.

**Key practices**:

- Document all personnel with registrar access
- Use role-based access where available
- Implement approval workflows for critical changes
- Regular access audits (quarterly minimum)

## WHOIS Privacy Protection

WHOIS records contain personal information about domain owners that is publicly accessible by default, including names,
addresses, phone numbers, and email addresses.

**Why it matters**: Without WHOIS privacy, your personal information is exposed to:

- Attackers gathering information for social engineering attacks
- Spammers harvesting contact details
- Competitors researching your infrastructure
- Anyone running a simple WHOIS lookup

**Setup**:

- Enable WHOIS privacy/proxy service through your registrar (often free or low-cost)
- Use company information instead of personal details where privacy isn't available
- Consider using a separate business entity for domain registration
- Be aware that some TLDs (.us, .ca) don't allow WHOIS privacy

**Important**: WHOIS privacy doesn't affect your legal ownership - you remain the legitimate owner, the privacy service
just shields your personal information from public view.

## WHOIS vs RDAP

**RDAP (Registration Data Access Protocol)** is the modern replacement for WHOIS. While WHOIS is still widely used, RDAP
should be preferred for domain information lookups.

**Why RDAP is better**:

- **Structured data**: JSON-based responses are machine-readable and easier to parse
- **Standardized**: Consistent format across registries and registrars
- **Better display**: Modern CLIs and tools display RDAP data in organized, readable formats
- **More reliable**: Built on RESTful APIs with better authentication and access control
- **Links to authoritative sources**: Provides direct links to registrar and registry RDAP endpoints

**Using RDAP**:

- **Command-line tools**: Use RDAP CLIs like `rdap` (Rust-based) or `nicinfo` (Ruby-based)
- **Web tools**: Many registries provide RDAP web interfaces
- **Example lookup**: `rdap yourdomain.com` displays domain status, EPP codes, nameservers, registrar info, and
  expiration dates

**Example RDAP output**:

```
❯ rdap google.com
2025-10-06T20:36:58.203437Z  INFO rdap: ICANN RDAP 0.0.23 Command Line Interface
2025-10-06T20:36:58.203497Z  INFO rdap: query type is Domain Lookup for value 'google.com'
――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 • host                       : rdap.verisign.com
 • Request URI                : https://rdap.verisign.com/com/v1/domain/google.com

――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
                                   Domain GOOGLE.COM

  ┌────────────────────────────┬─────────────────────────────────────────────────────┐
  │                     Summary│Domain GOOGLE.COM                                    │
  │                            │• 292 (Registrar)                                    │
  │                            │  • Abuse                                            │
  │                            │• Nameserver NS1.GOOGLE.COM                          │
  │                            │• Nameserver NS2.GOOGLE.COM                          │
  │                            │• Nameserver NS3.GOOGLE.COM                          │
  │                            │• Nameserver NS4.GOOGLE.COM                          │
  ├────────────────────────────┼─────────────────────────────────────────────────────┤
  │        Identifiers         │                                                     │
  ├────────────────────────────┼─────────────────────────────────────────────────────┤
  │                    LDH Name│GOOGLE.COM                                           │
  │                Unicode Name│                                                     │
  │                      Handle│2138514_DOMAIN_COM-VRSN                              │
  ├────────────────────────────┼─────────────────────────────────────────────────────┤
  │        Information         │                                                     │
  ├────────────────────────────┼─────────────────────────────────────────────────────┤
  │                      Status│• Client Delete Prohibited                           │
  │                            │• Client Transfer Prohibited                         │
  │                            │• Client Update Prohibited                           │
  │                            │• Server Delete Prohibited                           │
  │                            │• Server Transfer Prohibited                         │
  │                            │• Server Update Prohibited                           │
  ├────────────────────────────┼─────────────────────────────────────────────────────┤
  │           Events           │                                                     │
  ├────────────────────────────┼─────────────────────────────────────────────────────┤
  │                Registration│• Mon, 15-Sep-1997 04:00:00 +00:00                   │
  │                  Expiration│• Thu, 14-Sep-2028 04:00:00 +00:00                   │
  │                Last Changed│• Mon,  9-Sep-2019 15:39:04 +00:00                   │
  │Last Update Of RDAP Database│• Mon,  6-Oct-2025 20:36:39 +00:00                   │
  ├────────────────────────────┼─────────────────────────────────────────────────────┤
  │           Links            │                                                     │
  ├────────────────────────────┼─────────────────────────────────────────────────────┤
  │                        Self│• https://rdap.verisign.com/com/v1/domain/GOOGLE.COM │
  │                     Related│• https://rdap.markmonitor.com/rdap/domain/GOOGLE.COM│
  └────────────────────────────┴─────────────────────────────────────────────────────┘

                                    292 (Registrar)

                ┌─────────────────┬────────────────────────────────────┐
                │          Summary│292 (Registrar)                     │
                │                 │• Abuse                             │
                ├─────────────────┼────────────────────────────────────┤
                │   Identifiers   │                                    │
                ├─────────────────┼────────────────────────────────────┤
                │           Handle│292                                 │
                │            Roles│• registrar                         │
                │IANA Registrar ID│292                                 │
                ├─────────────────┼────────────────────────────────────┤
                │     Contact     │                                    │
                ├─────────────────┼────────────────────────────────────┤
                │        Full Name│MarkMonitor Inc.                    │
                ├─────────────────┼────────────────────────────────────┤
                │      Links      │                                    │
                ├─────────────────┼────────────────────────────────────┤
                │            About│• http://www.markmonitor.com        │
                │                 │• https://rdap.markmonitor.com/rdap/│
                └─────────────────┴────────────────────────────────────┘
```

**What RDAP shows**:

- Domain status and EPP lock codes (clientTransferProhibited, serverUpdateProhibited, etc.)
- Nameserver information
- Registrar details and abuse contacts
- Registration, expiration, and last update dates
- Links to registry and registrar RDAP endpoints

**For security audits**: Use RDAP to verify your domain's EPP status codes, confirm registry locks are active, check
nameserver configurations, and validate expiration dates. The structured output makes it ideal for automated monitoring
and compliance checks.

## Domain Expiration Protection

Domain expiration is a critical yet often overlooked security risk. When domains expire, they enter a grace period
before becoming publicly available, creating an opportunity for attackers to snipe your domain.

**Expiration timeline (typical for gTLDs following ICANN rules)**:

- Day 0: Domain expires (site goes down)
- Day 1-45: Auto-renew grace period (can renew at normal price)
- Day 46-75: Redemption period (costs 10x+ to recover)
- Day 76-80: Pending delete
- Day 81: Public availability (bot armies compete to register)

**Important**: Grace and redemption periods **differ per TLD**. Generic TLDs (gTLDs like .com, .org, .net) follow ICANN
rules with the timeline above. Country code TLDs (ccTLDs like .uk, .de, .ca) often have different policies set by their
respective registries. Always verify your specific TLD's expiration policy with your registrar or registry.

**Protection measures**:

- **Enable auto-renewal** on all critical domains
- **Set multiple renewal reminders** at 90, 60, 30, and 7 days before expiration
- **Register domains for maximum period** (up to 10 years for most TLDs)
- **Use a domain monitoring service** that alerts on upcoming expirations
- **Document renewal dates** in your security calendar
- **Ensure payment methods stay current** - expired credit cards are a common cause of accidental expiration
- **Designate a backup person** responsible for domain renewals

**Pro tip**: Set calendar reminders to check auto-renewal status quarterly - don't assume it's working until you verify.

---

---

### PAGE: /infrastructure/domain-and-dns-security/dnssec-and-email
**Title:** DNSSEC, CAA, SMTP DANE and Email Security | SEAL
**Referenced by controls:** dns-1.1.2, dns-2.1.1, dns-2.1.2, dns-3.1.1, dns-3.1.2, dns-3.1.3, dns-4.1.1, dns-4.1.2, dns-4.1.3, dns-4.1.4, dns-5.1.1, dns-5.1.2

# DNSSEC, CAA, SMTP DANE and Email Security




## DNSSEC Implementation

DNSSEC (DNS Security Extensions) provides cryptographic authentication of DNS responses, preventing attackers from
redirecting your users to malicious sites by tampering with DNS queries. Think of it as a digital signature that proves
the DNS response came from the legitimate source.

**How it protects you**: Without DNSSEC, attackers can intercept DNS queries and return fake IP addresses, redirecting
users to malicious sites that look identical to yours. DNSSEC prevents this by cryptographically signing all DNS
responses. While most client devices and many recursive resolvers do not perform DNSSEC validation on general DNS
queries, DNSSEC is sometimes required and often preferred as a foundational component for security-sensitive internet
protocols and features such as SMTP DANE, SSHFP, and CAA.

**Preconditions**:

- Domain is using the provider's nameservers
- Registrar supports DS records
- If registrar supports CDS/CDNSKEY auto-publish, enable that if offered

**Practical setup**:

1) **Enable signing at DNS provider**
   - Turn on DNSSEC in the zone settings
   - Provider generates KSK (Key Signing Key) and ZSK (Zone Signing Key), signs the zone, and shows DS parameters:
     - **Key Tag**: Unique identifier for the key
     - **Algorithm**: Common options:
       - `13` (ECDSAP256SHA256) - Recommended
       - `8` (RSASHA256)
       - `15` (ECDSAP384SHA384)
     - **Digest Type**:
       - `2` (SHA-256) - Recommended for widest compatibility
       - `4` (SHA-384)
     - **Digest**: Hex string of the hash

2) **Publish DS at registrar**
   - Create a DS record with the exact four fields above
   - Prefer Algorithm `13` (ECDSAP256SHA256) with Digest Type `2` (SHA-256) where supported
   - If both digest types 2 and 4 are offered, pick 2 for the widest compatibility

   Example registrar DS template:

   ```
   Owner: yourdomain.tld
   Key Tag: 2371
   Algorithm: 13
   Digest Type: 2
   Digest: 5C9F3E7B3F...A1C7
   ```

3) **Verify validation**
   - Wait for registrar DS propagation (can take minutes to hours)
   - Verify from a validating resolver using command-line tools:
     - `dig +dnssec example.com A` (check for AD flag in response)
     - `kdig +dnssec example.com A` (Knot DNS tool)
     - `drill -D example.com A` (LDNS tool)
   - For detailed analysis, use web tools:
     - [Verisign DNSSEC Analyzer](https://dnssec-analyzer.verisignlabs.com/yourdomain.org)
     - [DNSViz](https://dnsviz.net/d/yourdomain.org/analyze/)

4) **Monitor validation and changes**
   - Set up alerts for DS record changes at the registrar
   - Monitor DNSSEC validation status regularly
   - Watch for DNSKEY rollovers and ensure they complete successfully

**Security notes**:

- DNSSEC authenticates data; it does **not** encrypt queries. Use DoT (DNS over TLS) or DoH (DNS over HTTPS) for
  transport privacy if needed.
- Harden registrar accounts, protect transfer locks, and monitor for DS changes; DS removal downgrades protection.
- A hijacked registrar account can remove DS records, eliminating DNSSEC protection
- Add alerts on registrar activity to detect unauthorized changes

## CAA Records

Certificate Authority Authorization (CAA) records specify which Certificate Authorities (CAs) are allowed to issue SSL
certificates for your domain. This prevents unauthorized certificate issuance, which attackers could use to create fake
SSL certificates for your domain.

**How it protects you**: Without CAA records, any Certificate Authority can issue SSL certificates for your domain.
Attackers could potentially obtain fake certificates and use them in sophisticated phishing attacks that appear to have
valid SSL encryption.
A well behaved CA not explicitly permitted via CAA records will deny certificate requests for that domain. \
While CA compromises are rare, history shows they do happen — and in such cases, attackers could potentially bypass
or ignore CAA entirely. \
Notable incidents include:

- [DigiNotar (2011)](https://en.wikipedia.org/wiki/DigiNotar)
- [Comodo (2011)](https://www.theregister.com/2011/03/28/comodo_gate_hacker_breaks_cover/) \
Honorable mention, where it’s unclear whether CAA would have prevented the issue:
- [Symantec Mis‑Issuance (2015–2017)](https://groups.google.com/a/chromium.org/g/blink-dev/c/eUAKwjihhBs/m/rpxMXjZHCQAJ)

Before setting CAA records, identify which CA issued your current certificate:

- **Command line**: `openssl s_client -connect yourdomain.com:443 -servername yourdomain.com | openssl x509 -noout -issuer`
- **Web tools**: [SSL Labs Server Test](https://www.ssllabs.com/ssltest/) provides comprehensive certificate analysis
  including issuer information
- **Browser**: Click the padlock icon → Certificate details → Issuer information

**Setup process**: Add CAA records to your DNS zone. Most DNS providers allow you to add these through their web interface:

With the issuers full name in hand we now need to map it to the "Issuer Domain Name".
There is no centralized repository mapping public CA's to their issuer domain names but they are generally easily found with
a simple search for f.x. "Let's Encrypt CAA". \
The Common CA Database also provides a
[comprehensive collection to reference](https://ccadb.org/resources).

```
# Allow only specific CAs to issue certificates
example.com. CAA 0 issue "letsencrypt.org"
example.com. CAA 0 issue "digicert.com"

# Send violation reports when unauthorized CAs attempt issuance
example.com. CAA 0 iodef "mailto:security@example.com"

# Control wildcard certificate issuance separately
example.com. CAA 0 issuewild "letsencrypt.org"

# Completely disable all certificate issuance (useful for non-web domains)
example.com. CAA 0 issue ";"
```

## SMTP DANE

DNS-based Authentication of Named Entities (DANE) is an email security protocol that relies on TLSA DNS
records secured via DNSSEC. The TLSA record contains information on the MX and the certificate in use,
allowing a secure connection to be made using that certificate.
This prevents both MiTM and downgrade attacks. \
DANE requires DNSSEC to be enabled on your domain - without it, TLSA records can be spoofed and offer no security benefit.

If no record is found, SMTP DANE supporting clients will fall back to their usual connection flow.

*While traditional PKI relies on trusted CAs, DANE allows domain owners to specify their own certificates,
relying instead on DNSSEC to authenticate the certificate.*

**Current industry support**: Of the major providers, Microsoft is the only one that currently supports
SMTP DANE since its [RFC](https://datatracker.ietf.org/doc/html/rfc7672) was published in 2015. Notable
smaller implementers include Comcast, Protonmail, Cisco, Fastmail, Posteo and Mailbox.org.

**Implementation**: For those interested, a simple step-by-step tutorial can be found here for
[Exchange Online](https://learn.microsoft.com/en-us/purview/how-smtp-dane-works#inbound-smtp-dane-with-dnssec).
And for the brave, the Dutch Internet Standards Platform has published
[detailed documentation](https://github.com/internetstandards/toolbox-wiki/blob/main/DANE-for-SMTP-how-to.md#reliable-certificate-rollover)
on various aspects of supporting SMTP DANE on a self-hosted MX like postfix.

**Example TLSA Record**:

smtpdane.mx.microsoft. TLSA 900 "3 1 1 c495d9e40f7e625be22f83cc64305182ab0fe74232de30db8b218d09650cb0ea"

- _25._tcp.smtpdane.mx.microsoft. → Host + port (SMTP uses 25/TCP)
- TLSA → Record type for DANE
- 900 → TTL in seconds
- 3 1 1 →

  - Usage 3 = Bind to end-entity cert
  - Selector 1 = Public key info
  - Match 1 = SHA-256 hash
- Hex string → Hash of the MX certificate's public key

**Further reading**:

- [Microsoft SMTP DANE](https://learn.microsoft.com/en-us/purview/how-smtp-dane-works)
- [RFC 7672](https://datatracker.ietf.org/doc/html/rfc7672)
- [Google Cloud DNSSEC](https://docs.cloud.google.com/dns/docs/dnssec-advanced#tlsa) (only general docs, no
  Google Mail support as of writing)

## Email Security Configuration

Email security records protect against email spoofing and phishing attacks. When your domain is compromised, attackers
often change email settings to intercept password reset emails and other sensitive communications.

### SPF (Sender Policy Framework)

SPF records specify which mail servers are authorized to send emails on behalf of your domain. This prevents attackers
from spoofing your domain in phishing emails.

**How it protects you**: Without SPF, anyone can send emails claiming to be from your domain. Attackers use this for
sophisticated phishing campaigns that appear to come from your legitimate email address.

This is particularly dangerous as attackers can impersonate executives or team members to target your own organization
and users - imagine receiving a "urgent wire transfer" request from your CFO's email address, or your users getting a
"mandatory wallet update" from your official support email.

**Setup**: Add an SPF record to your DNS zone:

```
example.com. TXT "v=spf1 include:_spf.google.com ~all"
```

### DKIM (DomainKeys Identified Mail)

DKIM adds a digital signature to your emails, allowing receiving servers to verify that emails actually came from your
domain and haven't been tampered with.

**How it protects you**: DKIM signatures prove email authenticity and integrity, making it much harder for attackers to
successfully spoof your domain in phishing campaigns.

**Setup**: Configure with your email provider and publish public keys in DNS (your email provider will provide the
specific records).

### MTA-STS (Mail Transfer Agent Strict Transport Security)

MTA-STS enforces encrypted connections between mail servers, preventing man-in-the-middle attacks on email transmission.

**How it protects you**: Without MTA-STS, emails can be intercepted in transit. This is especially critical for password
reset emails and other sensitive communications.

**Deployment steps**:

1) **Create the MTA-STS policy file**

   Host a plain text file at: `https://mta-sts.<domain>/.well-known/mta-sts.txt`

   Policy file structure:

   ```
   version: STSv1
   mode: testing
   mx: smtp.example.com
   mx: alt1.smtp.example.com
   max_age: 86400
   ```

   **Mode options**:

   - `testing` - Monitor TLS failures but don't block mail (recommended to start)
   - `enforce` - Require TLS for mail delivery
   - `none` - Disable policy

   **Important**: List all your MX servers. Ensure they have valid TLS certificates matching their hostnames.

2) **Host the policy file over HTTPS**

   The file must be:
   - Publicly accessible at the exact path
   - Served over HTTPS with a valid certificate
   - Available 24/7 (use reliable hosting)

3) **Publish DNS TXT record**

   Create a TXT record at `_mta-sts.<domain>`:

   ```
   _mta-sts.example.com. TXT "v=STSv1; id=20250101000000"
   ```

   The `id` value (often a timestamp or version) signals mail servers to fetch the latest policy. Update it whenever you
   change the policy file.

4) **Testing and enforcement**
   - Start with `mode: testing` to monitor without blocking
   - Collect and review TLS failure reports
   - Once confident, change to `mode: enforce`
   - Update the `id` in DNS TXT record after policy changes

**Provider-specific tips**:

- **Google Workspace**: Manage MX in Admin console; host policy yourself; add TXT via DNS
- **Cloudflare**: Host policy on Workers/Pages; manage TXT in DNS; HTTPS auto via Cloudflare SSL
- **Amazon SES**: Host on S3 or CloudFront; manage TXT in Route 53; ensure domains are verified

**Security notes**:

- `max_age` determines how long mail servers cache the policy (86400 = 1 day)
- All MX servers must support TLS with valid certificates
- Monitor policy file availability - if unreachable, mail delivery may fail in enforce mode

### DMARC (Domain-based Message Authentication)

DMARC builds on SPF and DKIM to provide policy enforcement for email authentication. It tells receiving mail servers
what to do with emails that fail authentication checks.

**How it protects you**: DMARC prevents email spoofing by instructing receiving servers to reject or quarantine emails
that fail authentication, protecting your users from phishing attacks.
Without it, emails breaking SPF/DKIM may still be delivered by some providers (like Gmail, Outlook), often to the
inbox or spam folder, sometimes with a warning banner (e.g., "This message may not be from…")
DMARC also enables aggregate (rua) and forensic (ruf) reporting, giving domain owners visibility into who is sending
email on their behalf - legitimate or otherwise.

**Setup**: Add a DMARC record to your DNS zone:

**Baseline example (aggregate reports only)**:

```
_dmarc.example.com. TXT "v=DMARC1; p=reject; rua=mailto:dmarc@example.com"
```

**Report types**:

- **`rua=`** (Aggregate reports): Daily summaries of authentication results. This is the baseline and widely supported.
- **`ruf=`** (Failure reports): Real-time forensic reports for individual failures. Not recommended as they are:
  - Not widely supported by mail providers
  - Raise privacy concerns (contain message content/headers)
  - May not deliver reliably
  - Often unnecessary for monitoring purposes

**Recommendation**: Start with aggregate reports only (`rua=`). They provide sufficient visibility into authentication
issues without the privacy and reliability concerns of failure reports.

---

---

### PAGE: /infrastructure/domain-and-dns-security/monitoring-and-alerting
**Title:** DNS Monitoring & Incident Response | SEAL
**Referenced by controls:** dns-1.1.2, dns-2.1.1, dns-2.1.2, dns-3.1.1, dns-3.1.3, dns-4.1.1, dns-4.1.2, dns-4.1.4, dns-5.1.1, dns-5.1.2, dns-6.1.1, dns-6.1.2

# Monitoring, Alerts, and Incident Response




## DNS Record Monitoring

DNS record monitoring involves continuously checking your domain's DNS records for unauthorized changes. Attackers often
modify DNS records to redirect traffic to malicious servers while keeping your site partially functional.

**What to watch for**:

- **Nameserver (NS) record changes**: Attackers change your nameservers to point to their own DNS servers, giving them
  complete control over all DNS records
- **Sudden TTL drops**: Very low TTLs *can* indicate preparation for rapid DNS changes during an attack
  - **Note**: Low TTL is common and legitimate with CDNs and auto-scaling contexts; Cloudflare "Auto" is often 300s
  - **Context**: Cloudflare allows TTL 30-60s for [unproxied
    records](https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/); this is not inherently malicious
  - **Monitor for**: *Unexpected* drops from higher values or drops combined with other suspicious activity
- **CAA record removal or overrides**: Allows any Certificate Authority to issue certificates for your domain
  - **Note**: Child zones override parent CAA records
  - **Advanced monitoring**: Watch for parameters like `accounturi` and `validationmethods` which provide finer control
    over certificate issuance
- **DNSSEC disabled unexpectedly**: Removes cryptographic protection from DNS responses

**If nameservers remain unchanged, also monitor**:

- **A/AAAA record modifications**: IP address changes could redirect users to malicious sites
- **MX record modifications**: Email server changes could intercept password reset emails
- **TXT record changes**: Could affect email security (SPF/DMARC) or domain validation

**Monitoring tools** (continuous change tracking):

- [MXToolbox](https://mxtoolbox.com/) - Comprehensive DNS record monitoring and alerts
- [HetrixTools](https://hetrixtools.com/) - Free DNS monitoring with email alerts
- [SecurityTrails](https://securitytrails.com/) - Historical DNS data and change tracking

**Analysis and debugging tools**:

- [DNSViz](https://dnsviz.net/) - DNSSEC chain validation and debugging
- [DNS Dumpster](https://dnsdumpster.com/) - DNS reconnaissance and record discovery

**GitOps and zone control**:

- [OctoDNS](https://github.com/octodns/octodns) - Infrastructure-as-code for DNS; manage zones via code with auditable,
  reviewed changes through CI/CD
- [DNSControl](https://github.com/StackExchange/dnscontrol) - Synchronize DNS across multiple providers; declarative
  configuration with version control

**Note**: If attackers change your NS records, they control everything. But attackers with DNS panel access might make
subtle changes without touching NS records to avoid detection, which is why monitoring individual record types remains
important.

## Certificate Transparency Monitoring

Certificate Transparency (CT) logs are public records of all SSL certificates issued by Certificate Authorities.
Monitoring these logs helps detect unauthorized certificate issuance.

**Why it matters**: Attackers sometimes obtain fake SSL certificates for legitimate domains to make phishing sites
appear more credible. CT monitoring helps you detect these certificates before they're used in attacks.

**Setup and tools**:

- [crt.sh](https://crt.sh/) - Search and monitor CT logs for your domain
- [Cert Spotter](https://sslmate.com/certspotter/) - Free CT monitoring with API access
- Watch for wildcard certificates if you don't use them (could indicate broader compromise)

## Passive DNS Monitoring

Passive DNS monitoring tracks historical DNS resolution data across the internet, helping you detect brief changes that
might be missed by periodic checks.

**What it detects**:

- **Brief record changes**: Attackers often make quick changes to avoid detection
- **Geographic anomalies**: DNS records resolving to unexpected countries or regions
- **Suspicious hosting provider changes**: Sudden switches to hosting providers known for malicious activity

**Tools for passive DNS**:

- [PassiveTotal (RiskIQ)](https://community.riskiq.com/) - Comprehensive passive DNS database
- [Mnemonic Passive DNS](https://passivedns.mnemonic.no/) - Free passive DNS lookup
- [SecurityTrails](https://securitytrails.com/) - Historical DNS and WHOIS data

## Setting Up Alerts

### Critical Alerts (Immediate Response Required)

1. **Registrar Changed**

   - **What it monitors**: Changes to your domain's registrar
   - **Why it's critical**: Indicates potential domain hijacking or unauthorized transfer
   - **Response**: Immediate verification and potential incident response activation

2. **Nameserver Changed**

   - **What it monitors**: Changes to nameserver records
   - **Why it's critical**: Attackers often change nameservers to redirect traffic to malicious servers
   - **Response**: Verify legitimacy, check if you initiated the change

3. **DNSSEC Broken**

   - **What it monitors**: DNSSEC validation failures or disabled DNSSEC
   - **Why it's critical**: DNS responses can be tampered with, leading to man-in-the-middle attacks
   - **Response**: Investigate signing issues, check for configuration changes

4. **CAA Records Removed or Overridden**

   - **What it monitors**: Removal of Certificate Authority Authorization records or child zone overrides
   - **Why it's critical**: Allows any CA to issue certificates for your domain, enabling SSL certificate attacks
   - **Response**: Restore CAA records immediately, investigate who removed them
   - **Note**: Child zones override parent CAA; parameters like `accounturi` and `validationmethods` can provide finer control

5. **Unexpected TTL Drops**

   - **What it monitors**: Sudden TTL drops from higher values
   - **Why it's important**: Can indicate preparation for rapid DNS changes (attack preparation)
   - **Context**: Low TTL (30-300s) is normal for CDNs and auto-scaling; Cloudflare allows 30-60s for [unproxied records](https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/)
   - **Response**: Investigate *unexpected* drops or drops combined with other suspicious activity; verify if legitimate
     infrastructure changes

### High Priority Alerts (When NS Unchanged)

1. **A Record Changed**

   - **What it monitors**: IP redirects without NS changes
   - **Why it's important**: Could redirect users to malicious servers
   - **Response**: Verify the new IP address is legitimate and expected

2. **MX Record Changed**

   - **What it monitors**: Changes to mail server configurations
   - **Why it's important**: Could intercept emails, including password reset messages
   - **Response**: Verify mail server changes are authorized

3. **DMARC Policy Weakened**

   - **What it monitors**: Changes from "reject" to "quarantine" or "none"
   - **Why it's important**: Weaker policies allow more spoofed emails to reach users
   - **Response**: Investigate why policy was weakened, restore if unauthorized

4. **Unexpected Certificate Issued**

   - **What it monitors**: New SSL certificates issued for your domain
   - **Why it's important**: Could indicate certificate-based attacks or unauthorized issuance
   - **Response**: Verify the certificate was requested by your team, revoke if unauthorized

## Incident Response Plan

### Immediate Response

1. **Verify the compromise** - Check DNS records via multiple resolvers
2. **Access registrar account** - Attempt login, check for lockout
3. **Contact registrar security team** - Use pre-documented emergency contacts
4. **Document everything** - Screenshot all current settings

### Containment

1. **Invoke registry lock** if available
2. **Update NS records** if you maintain access
3. **Warn users** via social media/status page
4. **Contact law enforcement** if significant theft occurred

### Recovery

1. **Regain control** through registrar security procedures
2. **Audit all DNS records** against known-good baseline
3. **Reset all credentials** for registrar and DNS hosting
4. **Review access logs** to understand attack vector

### Post-Incident

1. **Conduct thorough investigation**
2. **Update security measures** based on lessons learned
3. **Consider legal action** if appropriate
4. **Publish transparency report** to rebuild trust

---

---

### PAGE: /opsec/travel/guide
**Title:** Travel Security Guide
**Referenced by controls:** dns-3.1.2, dns-4.1.3, dns-5.1.3, dns-6.1.1, dns-6.1.2

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

### PAGE: /infrastructure/domain-and-dns-security/overview
**Title:** Domain & DNS Security | SEAL
**Referenced by controls:** dns-4.1.1

# Domain & DNS Security — Overview




DNS (Domain Name System) is the backbone of the internet, translating domain names into IP addresses. In Web3, domain
security is particularly critical as compromised domains can lead to irreversible financial losses through wallet
drainers and phishing attacks. Unlike traditional web applications where stolen funds can sometimes be recovered,
blockchain transactions are permanent.

Moreover, DNS controls your email infrastructure through MX records - once compromised, attackers gain the keys to your
entire organization through password resets and intercepted communications, making domain security a matter of both
financial and operational survival.

## Web3-Specific Considerations

### Why Domain Security is Critical in Web3

Domain security is exponentially more critical in Web3 compared to traditional web applications due to the unique
characteristics of blockchain technology:

- **Irreversible transactions**: Unlike traditional banking where stolen funds can sometimes be recovered, blockchain
  transactions are permanent. Once funds are stolen through a domain hijack, they're gone forever.
- **Direct wallet interactions**: Users connect their wallets directly to your domain, giving attackers immediate access
  to user funds without needing to compromise individual accounts.
- **Reputation damage**: One domain hijack incident can permanently destroy protocol trust, as users lose confidence in
  the project's security practices.

## Historical Context

### Notable Domain Security Incidents

Domain hijacking has impacted numerous Web3 projects:

- **[Curve Finance (2025)](https://news.curve.finance/curve-domain-incident/)**: Domain hijacking at the registrar
  level, unrelated to any breach of Curve's infrastructure.
- **[Puffer Finance
  (2024)](https://www.kucoin.com/news/articles/the-trojan-horse-of-web3-puffer-finance-attack-exposes-centralized-vulnerabilities)**:
  DNS hijack exploited centralized infrastructure vulnerabilities
- **[Compound Finance (2024)](https://www.bitget.com/news/detail/12560604092919)**: Domain takeover attempt prevented by
  registry lock
- **[Galxe (2023)](https://help.galxe.com/en/articles/8452958-october-6th-dns-security-incident-statement-guide)**: DNS
  hijack resulted in over 1,100 wallets drained for $270k
- **[Curve Finance (2022)](https://rekt.news/curve-finance-rekt)**: DNS hijacking led to $575k in stolen funds through
  frontend compromise

These incidents highlight the critical importance of proper domain security measures and the recurring nature of these attacks.

## References and Resources

### Incident Response Contacts

- [SEAL Alliance TG Bot](https://t.me/seal_911_bot) - Web3 emergency response team
- Your registrar's security team (document contact info)
- Local FBI/law enforcement cybercrime division

### Standards and Best Practices

- [NIST Special Publication 800-81-2](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-81-2.pdf) -
  Secure Domain Name System Deployment Guide
- [ICANN DNSSEC Resources](https://www.icann.org/resources/pages/dnssec-what-is-it-why-important-2019-03-05-en)
- [RFC 8461](https://datatracker.ietf.org/doc/html/rfc8461) - MTA-STS specification
- [RFC 7489](https://datatracker.ietf.org/doc/html/rfc7489) - DMARC specification
- [DNS Security in Web3: Attacks & Monitoring Setup
  Explained](https://web3secnews.substack.com/p/the-hidden-dns-threats-that-could) - Comprehensive Web3 DNS security
  guide

---

---

### PAGE: /opsec/google/overview
**Title:** Google Workspace Security
**Referenced by controls:** dns-4.1.2

# Google Security




## Summary

> 🔑 **Key Takeaway:** Enhance your Google account security by implementing robust 2FA, eliminating redundant recovery
> options, and diligently overseeing third-party access.

**Google** provides a wide range of services—from email to file storage. Safeguarding your Google account is among the
most critical steps you can take to protect your personal and professional data. Below are simple yet effective measures
to improve your Google account security.

---

## For Individuals

These settings apply to your personal Google account. All team members and admins should configure these on their own accounts.

>This section does not include Google Suite or more advanced security configurations. For that, refer to the Operational
> Security Framework, under [Google Suite Security](/opsec/old/cloud-third-party/g-suite-security).

### Account Security Checklist

- [Google Security Settings](https://myaccount.google.com/security):
    - [ ]  Settings > Security > Skip passwords when possible > **Enabled**
        - *Skipping password entry allows you to renew logins in public places without having to type out your password or store it in your clipboard*
    - [ ]  Settings > Security > Recovery email > **Enabled**
    - [ ]  Settings > Security > [Recovery phone](https://myaccount.google.com/signinoptions/rescuephone) > **Disabled**
        - By default, Google allows account recovery using phone numbers and emails. Attackers can exploit these if they compromise your phone or email.
        - **Optional**: If you're confident you won't need standard recovery processes, also remove [Recovery Email](https://myaccount.google.com/recovery/email)
    - [ ]  Settings > Security > Third-party apps with account access > Remove all unnecessary
        - Some apps request extensive permissions (e.g., full inbox or file access). Regularly review these to minimize risks.
    - [ ]  Settings > Security > [Your devices](https://myaccount.google.com/device-activity) > Log out from all unnecessary devices
        - Keeping track of active sessions helps you detect unauthorized access.
    - [ ]  Security > Enhanced Safe Browsing > **Enabled**
- [2-Step Verification](https://myaccount.google.com/signinoptions/two-step-verification):
    - Properly setting up two-factor authentication (2FA) is one of the most crucial steps you can take. Disable SMS 2FA to avoid SIM swaps, and instead use an authenticator app or a hardware security key (preferred).
    - [ ]  Enable any, but passkeys or authenticator recommended. You can also continue using **Google prompts**.
    - [ ]  Disable "Voice or text message" if enabled
    - [ ]  Remove any App passwords
    - [ ]  Store Backup Codes offline in a secure place
- [Google Connections](https://myaccount.google.com/connections):
    - [ ]  Review each connected app's permissions; remove if unnecessary or excessive
- [Google Profile](https://myaccount.google.com/profile):
    - Publicly visible personal info can aid attackers in impersonating you.
    - [ ]  Check Visibility: If any info is set to "Anyone," switch it to private if unnecessary
    - [ ]  **Birthday:** Consider making it private

---

### Extended Security Settings

For a comprehensive security review, follow these steps from [Google Security](https://myaccount.google.com/security):

- [ ]  "Your connection to third-party apps & Services" > Revoke all applications that should not be connected
- [ ]  "Log out of all unknown devices"
- [ ]  "Turn off" skip password when possible (below previous step)
- [ ]  "How you sign in with Google" > Set up your 2FA or Security Key
- [ ]  Ensure you do not have a recovery phone setup. No SMS 2FA or phone number on your account at all.
- [ ]  Change your password after completing these steps
- [ ]  Note down your backup codes

> If using Google Authenticator as a 2FA app on your phone, disconnect it from the cloud, as backup codes are then stored
> in the google cloud associated to email. Use it without an account and ensure backup codes are written down offline.

---

### Advanced Protection Program

For those who are public figures or need heightened security, Google's **Advanced Protection Program** is worth
considering. It requires the use of security keys, limits access to unverified apps, and makes the process of account
recovery more challenging.

- [ ]  [Enroll in Advanced Protection Program](https://myaccount.google.com/advanced-protection/landing)

---

### Best Practices & Ongoing Maintenance

- [ ]  **Review Security Alerts:** Pay attention to any email or phone notifications from Google regarding unusual sign-ins or account changes.
- [ ]  **Perform a Security Checkup:** Regularly visit [Google's Security Checkup](https://myaccount.google.com/security-checkup) to identify potential issues and resolve them.
- [ ]  **Consider** using identity **monitoring** apps like [Push Security](pushsecurity.com).

---

## For Team Members

These guidelines apply to team members who use Google Workspace but don't have administrative access.

Team members should:
- Ensure their individual account settings are configured according to the checklist above
- Pay attention to any email or phone notifications from Google regarding unusual sign-ins or account changes
- Regularly visit [Google's Security Checkup](https://myaccount.google.com/security-checkup) to identify potential issues and resolve them

---

## For Admins

These settings and practices apply to Google Workspace administrators with elevated privileges.

### Admin Settings (Workspace Configuration)

#### Rules and Notifications

- [Rules](https://admin.google.com/ac/ax) > Enable notifications for security events
    - [ ]  "User's password changed"
    - [ ]  "Suspicious login"
    - [ ]  "User granted Admin privilege"
    - [ ]  "User's Admin privilege revoked"
    - [ ]  "Primary admin changed"
    - [ ]  "Leaked password"
    - [ ]  "Device compromised" [[1]](#1-security-alerts)

#### Security Settings

- [ ]  Security > Overview > Less Secure Apps > **Disable access to less secure apps**
- [ ]  Security > Authentication > 2-Step Verification > **Allow users to turn on 2-Step Verification**
    - [ ]  Enforcement > **On**
        - [ ]  Methods > **Any except verification codes via text, phone call** or **Only security key** [[2]](#2-2fa-enrollment)
- Security > Authentication > Account Recovery >
    - [ ]  Super admin account recovery > **On** (if fewer than 3 super admins on account)
    - [ ]  User account recovery > **On**
- [ ]  Security > Authentication > Password Management > **Enforce strong password**
    - [ ]  Length > Minimum length > At least **12**
- [ ]  Security > Access and data control > Google Cloud session control > Reauthentication policy > **Require reauthentication**
    - [ ]  Exempt Trusted apps > **Off**
    - [ ]  Reauthentication frequency > **16**

#### Apps and Data Control

- [ ]  Apps > Google Workspace > Drive and Docs > Sharing options >
    - [ ]  Sharing outside of organization > **OFF** or **ALLOWLISTED DOMAINS**
        - [ ]  Allow users in organization to receive files from users or shared drives outside of organization/allowlisted domains > **Off**
        - [ ]  When sharing outside of organization is allowed, users in organization can make files and published web content visible to anyone with the link > **Off**
    - [ ]  Distributing content outside of organization > **No one**
- [ ]  Apps > Google Workspace > Settings for Google Chat > Service Settings > **OFF for everyone**

#### Gmail Security

- Apps > Google Workspace > Settings for Gmail >
    - [ ]  Authenticate email > Set up **DKIM** with your DNS provider
    - **Safety >**
        - [ ]  Attachments > **Enable** all protections and set to quarantine
        - [ ]  IMAP [view time protections](https://support.google.com/a/answer/10036904?sjid=9191352966703497335-NC) > **Enabled**
        - [ ]  Links and external images > **Enable** all
        - [ ]  Spoofing and authentication > **Enable** all and set to quarantine
            - [ ]  **Protect against any unauthenticated emails** can be set to **Keep email in inbox and show warning** in order to prevent blocking external emails

#### Email Authentication

- **SPF & DMARC**
    - Follow these guides to confirm and/or set up SPF and DMARC:
        - https://support.google.com/a/answer/33786?hl=en&sjid=5876544508252018851-NC#spf-already-setup
        - https://support.google.com/a/answer/2466580?hl=en#dmarc-step2

#### Optional Enhancement

- Enroll in the [Advanced Protection Program](https://landing.google.com/advancedprotection/) for high-risk users or your entire organization

---

### Notes

#### [1] Security Alerts

Other alerts should be enabled by default, but it is recommended to go through the list and enable any others that would indicate concerns.

#### [2] 2FA Enrollment

You can confirm user enrollment status at Directory > Users, under the **2-step verification enrollment** and **Advanced Protection Program enrollment** columns.

---

---

### PAGE: /opsec/control-domains/technical
**Title:** Technical Security Controls
**Referenced by controls:** dns-5.1.3

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

