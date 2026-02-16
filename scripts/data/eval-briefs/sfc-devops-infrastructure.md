# Evaluation Brief: sfc-devops-infrastructure

## TASK

For each control below, evaluate whether the candidate framework pages ACTUALLY meet the baseline requirements.
A page must SUBSTANTIVELY address the baseline — not just mention related keywords.
Be strict: if a baseline says "reviewed at least annually" and the page doesn't mention review cadence, that baseline is NOT met.

## CONTROLS (15 total)

### di-1.1.1: DevOps Security Owner
**Question:** Is there a clearly designated person or team accountable for development and infrastructure security?
**Baselines (1):**
  1. Accountability scope covers policy maintenance, security reviews, access control oversight, pipeline governance, and incident escalation
**Candidate pages:** /infrastructure/domain-and-dns-security/registrar-and-locks, /infrastructure/domain-and-dns-security/monitoring-and-alerting, /secure-software-development/secure-code-repositories-version-control

### di-1.1.2: DevOps Security Policy
**Question:** Do you maintain documented security policies governing development and infrastructure operations?
**Baselines (3):**
  1. Policy covers environment standards, access controls, deployment procedures, code management, and supply chain security
  2. Accessible to all developers and infrastructure operators
  3. Reviewed at least annually and after significant changes (security incidents, technology shifts, organizational restructuring)
**Candidate pages:** /supply-chain/supply-chain-levels-software-artifacts, /infrastructure/domain-and-dns-security/monitoring-and-alerting, /security-testing/unit-testing

### di-1.1.3: Development Environment Isolation
**Question:** Do you isolate development environments from production systems?
**Baselines (5):**
  1. Development activities performed in containerized or virtualized environments
  2. Each code repository has its own isolated environment to prevent cross-contamination
  3. Production credentials not accessible from development environments
  4. Separate accounts or profiles for development vs. privileged operations (e.g., wallet signing, cloud admin)
  5. Code execution sandboxed to prevent host system compromise
**Candidate pages:** /devsecops/integrated-development-environments, /secure-software-development/secure-code-repositories-version-control, /devsecops/overview

### di-1.1.4: Development Tools Approval
**Question:** Do you evaluate and approve development tools before organizational use?
**Baselines (5):**
  1. Evaluation criteria cover IDEs, extensions, plugins, AI-powered tools, and third-party services
  2. Extensions and plugins obtained only from official repositories
  3. AI tools assessed for data privacy risks (does the tool send code to third parties for training or analytics?)
  4. Approved tool list maintained; unapproved tools restricted
  5. Regular reviews of installed tools to identify unused or unrecognized items
**Candidate pages:** /security-automation/infrastructure-as-code, /devsecops/integrated-development-environments, /infrastructure/domain-and-dns-security/dnssec-and-email

### di-2.1.1: Repository Security
**Question:** Do you enforce security controls on your source code repositories?
**Baselines (6):**
  1. Role-based access control with least-privilege permissions
  2. Branch protection rules enforced on main/production branches
  3. Signed commits required for all code changes
  4. Multi-party code review required for merges to protected branches
  5. MFA required for all repository members
  6. Repository access reviewed periodically
**Candidate pages:** /secure-software-development/secure-code-repositories-version-control, /infrastructure/domain-and-dns-security/registrar-and-locks, /secure-software-development/code-reviews-peer-audits

### di-2.1.2: Secret Scanning
**Question:** Do you scan source code for accidentally committed secrets?
**Baselines (4):**
  1. Automated scanning for committed secrets (API keys, private keys, credentials) in all repositories
  2. Pre-commit hooks deployed to prevent secrets from being committed in the first place
  3. Remediation procedures for discovered secrets (immediate rotation, revocation)
  4. Scanning integrated into CI/CD pipeline
**Candidate pages:** /infrastructure/domain-and-dns-security/registrar-and-locks, /secure-software-development/secure-code-repositories-version-control, /devsecops/continuous-integration-continuous-deployment

### di-2.1.3: External Contributor Review
**Question:** Do you apply enhanced review for code contributions from external collaborators?
**Baselines (4):**
  1. Additional approvers required for all external code contributions
  2. Code contributions tracked; unexpected changes flagged (e.g., commit rewrites, unprompted edits)
  3. External collaborators restricted to minimum necessary repository permissions
  4. CI/CD pipelines do not automatically execute for external contributor PRs without approval
**Candidate pages:** /secure-software-development/secure-code-repositories-version-control, /security-testing/unit-testing, /infrastructure/domain-and-dns-security/monitoring-and-alerting

### di-2.1.4: Dependency and Supply Chain Security
**Question:** Do you verify and manage dependencies to prevent supply chain attacks?
**Baselines (6):**
  1. Packages obtained from official repositories and trusted sources only
  2. Package names verified against typosquatting patterns before installation
  3. Dependencies scanned for known vulnerabilities before deployment
  4. Dependency version pinning enforced to prevent automatic updates to compromised versions
  5. Regular dependency audits for outdated or vulnerable components
  6. Changelog reviewed for dependency updates to verify expected functionality
**Candidate pages:** /supply-chain/dependency-awareness, /supply-chain/supply-chain-levels-software-artifacts, /infrastructure/domain-and-dns-security/registrar-and-locks

### di-3.1.1: Pipeline Security Controls
**Question:** Do you control who can modify and execute your deployment pipelines?
**Baselines (5):**
  1. Pipeline configuration changes require multi-party approval
  2. Separate service accounts with minimal permissions used for pipeline execution
  3. Manual deployment by humans restricted; deployments automated through controlled pipelines
  4. Pipeline and build configurations version-controlled and reviewed
  5. Builds are deterministic with strict dependency sets
**Candidate pages:** /infrastructure/domain-and-dns-security/registrar-and-locks, /security-automation/infrastructure-as-code, /devsecops/continuous-integration-continuous-deployment

### di-3.1.2: Secrets Management
**Question:** Do you securely manage secrets used in pipelines and applications?
**Baselines (5):**
  1. Dedicated secrets management system used (not environment variables in plain text)
  2. Secrets never stored in source code or unencrypted configuration files
  3. Production secrets not directly accessible by humans
  4. Pipeline secrets accessible only by service accounts
  5. Secret rotation schedule defined; rotation triggered immediately after suspected compromise
**Candidate pages:** /infrastructure/domain-and-dns-security/registrar-and-locks, /security-automation/infrastructure-as-code, /security-automation/compliance-checks

### di-3.1.3: Security Testing Integration
**Question:** Do you integrate security testing into your development and deployment pipelines?
**Baselines (4):**
  1. Static analysis (SAST) tools integrated into CI/CD pipeline
  2. Dependency vulnerability scanning automated in CI/CD
  3. Security scan results reviewed before deployment approval
  4. Testing and validation performed in staging environments before production deployment
**Candidate pages:** /devsecops/overview, /devsecops/continuous-integration-continuous-deployment, /devsecops/security-testing

### di-4.1.1: Infrastructure as Code
**Question:** Do you manage infrastructure through code with version control and review?
**Baselines (4):**
  1. All infrastructure defined and managed through code (e.g., Terraform, CloudFormation)
  2. Infrastructure changes deployed through automated pipelines, no manual steps required
  3. Infrastructure changes require multi-party approval
  4. IaC security scanning performed before deployment
**Candidate pages:** /security-automation/infrastructure-as-code, /infrastructure/domain-and-dns-security/monitoring-and-alerting, /secure-software-development/secure-code-repositories-version-control

### di-4.1.2: Infrastructure Access Controls
**Question:** Do you enforce least-privilege access controls for infrastructure?
**Baselines (6):**
  1. Individual accounts with MFA required; no shared accounts
  2. Privileged access is time-limited and requires multi-party approval (JIT access)
  3. Day-to-day operations use minimum necessary permissions (read-only where possible)
  4. Break-glass accounts established for emergency access with individual accountability
  5. Break-glass usage triggers immediate alerts to the entire team and requires post-incident review
  6. All access activities logged and monitored
**Candidate pages:** /infrastructure/domain-and-dns-security/monitoring-and-alerting, /infrastructure/domain-and-dns-security/registrar-and-locks, /secure-software-development/secure-code-repositories-version-control

### di-4.1.3: Backup and Disaster Recovery
**Question:** Do you maintain backup and disaster recovery procedures with periodic testing?
**Baselines (4):**
  1. Critical systems have automated backup procedures
  2. Disaster recovery plan documented with recovery time and recovery point objectives defined
  3. Backup and recovery procedures tested regularly
  4. Backups stored independently of primary infrastructure
**Candidate pages:** /infrastructure/cloud, /secure-software-development/secure-code-repositories-version-control, /infrastructure/domain-and-dns-security/registrar-and-locks

### di-4.1.4: Cloud Security Monitoring
**Question:** Do you monitor cloud security configurations and respond to provider security notifications?
**Baselines (5):**
  1. Cloud security configurations continuously monitored for drift and unauthorized changes
  2. Administrative actions trigger alerts
  3. Cloud provider security notifications subscribed to and promptly reviewed
  4. Comprehensive logging enabled (e.g., CloudTrail, Azure Monitor, Google Cloud Logging)
  5. Multi-cloud strategies considered to reduce single-provider dependency
**Candidate pages:** /infrastructure/domain-and-dns-security/monitoring-and-alerting, /infrastructure/domain-and-dns-security/dnssec-and-email, /infrastructure/cloud

---

## FRAMEWORK PAGES (15 unique)

### PAGE: /infrastructure/domain-and-dns-security/registrar-and-locks
**Title:** Registrar Security & Registry Locks | SEAL
**Referenced by controls:** di-1.1.1, di-2.1.1, di-2.1.2, di-2.1.4, di-3.1.1, di-3.1.2, di-4.1.2, di-4.1.3

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

### PAGE: /infrastructure/domain-and-dns-security/monitoring-and-alerting
**Title:** DNS Monitoring & Incident Response | SEAL
**Referenced by controls:** di-1.1.1, di-1.1.2, di-2.1.3, di-4.1.1, di-4.1.2, di-4.1.4

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

### PAGE: /secure-software-development/secure-code-repositories-version-control
**Title:** Secure Code Repositories & Version Control | SEAL
**Referenced by controls:** di-1.1.1, di-1.1.3, di-2.1.1, di-2.1.2, di-2.1.3, di-4.1.1, di-4.1.2, di-4.1.3

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

### PAGE: /supply-chain/supply-chain-levels-software-artifacts
**Title:** Supply Chain Levels Software Artifacts | SEAL
**Referenced by controls:** di-1.1.2, di-2.1.4

# Supply Chain Levels for Software Artifacts




Supply chain levels for software artifacts provide a framework for categorizing and securing software components based
on their risk levels. This approach helps projects prioritize their security efforts towards software components with
the highest risk levels.

## Framework for Supply Chain Levels

1. **Level 1: Critical Artifacts**
   - These artifacts are essential to the core functionality of the software and pose a high risk if compromised.
   - Examples: Core libraries.

2. **Level 2: High-Risk Artifacts**
   - Artifacts that are important but not critical. Their compromise could lead to significant security issues.
   - Examples: Middleware, database connectors, oracles, authentication modules.

3. **Level 3: Moderate-Risk Artifacts**
   - Artifacts that are used frequently but have a lower risk profile. Their compromise could cause inconvenience but
   not catastrophic failure.
   - Examples: User interface libraries, utility functions, data processing modules.

4. **Level 4: Low-Risk Artifacts**
   - Artifacts that have minimal impact on security if compromised.
   - Examples: Logging libraries, test utilities.

## Best Practices for Securing Supply Chain Levels

1. **Critical Artifacts**
   - Implement strict access controls and require code reviews for all changes.
   - Use robust security testing, including static and dynamic analysis.
   - Monitor continuously for vulnerabilities and apply patches promptly.

2. **High-Risk Artifacts**
   - Enforce strong access controls and conduct regular security assessments.
   - Perform regular updates and vulnerability scans.
   - Implement automated security testing in CI/CD pipelines.

3. **Moderate-Risk Artifacts**
   - Apply standard security practices, including access controls and regular updates.
   - Use automated tools to scan for vulnerabilities periodically.
   - Ensure that dependencies are from trusted sources.

4. **Low-Risk Artifacts**
   - Follow basic security hygiene, such as using trusted sources and applying updates.
   - Perform occasional security reviews and audits.

---

---

### PAGE: /security-testing/unit-testing
**Title:** Unit Testing
**Referenced by controls:** di-1.1.2, di-2.1.3

# Unit Testing




Unit testing is the foundation of smart contract security testing. While fuzz tests can find edge cases and integration
tests verify system interactions, unit tests ensure that individual functions behave correctly under expected
conditions. Every smart contract should have comprehensive unit test coverage before moving to more advanced testing
methodologies.

## Overview

Unit testing involves testing individual components or functions of your codebase in isolation. In smart contract
development, this means testing each function with known inputs to verify expected outputs and state changes.

**Why Unit Tests Matter for Security:**

- Catch basic logic errors before they become vulnerabilities
- Ensure access controls work as expected
- Verify arithmetic operations don't have overflow/underflow issues
- Document expected behavior for auditors and future developers
- Provide a safety net when refactoring code

## The Foundation of Security Testing

As mentioned in your security testing strategy, unit testing should **always** be implemented with high code coverage.
Think of unit tests as your first line of defense against bugs that could become security vulnerabilities.

```solidity
// Example: Simple token contract
contract SimpleToken {
    mapping(address => uint256) public balances;
    uint256 public totalSupply;

    function transfer(address to, uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        require(to != address(0), "Cannot transfer to zero address");

        balances[msg.sender] -= amount;
        balances[to] += amount;
    }
}
```

## Writing Effective Unit Tests

### Basic Unit Test Structure

Here's how you'd test the transfer function above using Foundry:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;




contract SimpleTokenTest is Test {
    SimpleToken token;
    address alice = address(0x1);
    address bob = address(0x2);

    function setUp() public {
        token = new SimpleToken();
        // Give Alice some initial balance
        vm.store(
            address(token), 
            keccak256(abi.encode(alice, 0)), // balances[alice] slot
            bytes32(uint256(1000))
        );
        token.setTotalSupply(1000);
    }

    function testTransferSuccess() public {
        vm.prank(alice);
        token.transfer(bob, 100);

        assertEq(token.balances(alice), 900);
        assertEq(token.balances(bob), 100);
    }

    function testTransferFailsInsufficientBalance() public {
        vm.prank(alice);
        vm.expectRevert("Insufficient balance");
        token.transfer(bob, 2000); // More than Alice has
    }

    function testTransferFailsZeroAddress() public {
        vm.prank(alice);
        vm.expectRevert("Cannot transfer to zero address");
        token.transfer(address(0), 100);
    }
}
```

### Security-Focused Test Cases

For each function, you should test:

1. **Happy Path**: Normal expected usage
2. **Edge Cases**: Boundary conditions (zero values, maximum values)
3. **Access Control**: Who can and cannot call the function
4. **Failure Cases**: Invalid inputs that should revert
5. **State Changes**: Verify all expected state modifications occur

### From Unit Test to Fuzz Test

You can easily convert a unit test to a fuzz test:

```solidity
// Unit test
function testTransferAmount() public {
    uint256 amount = 100;
    vm.prank(alice);
    token.transfer(bob, amount);
    assertEq(token.balances(bob), amount);
}

// Fuzz test version
function testTransferAmountFuzz(uint256 amount) public {
    amount = bound(amount, 0, 1000); // Bound to valid range
    vm.prank(alice);
    token.transfer(bob, amount);
    assertEq(token.balances(bob), amount);
}
```

## Mocking External Dependencies

Unit tests should test your contract logic in isolation. When your contracts depend on external systems like oracles,
other protocols, or complex state, you should mock these dependencies to create predictable, fast, and controlled test
conditions.

### Why Mock in Unit Tests?

**Problems with real external dependencies in unit tests:**

- **Slow**: Network calls and complex state slow down tests
- **Unpredictable**: External state changes make tests non-deterministic
- **Expensive**: RPC calls cost money and hit rate limits
- **Complex**: Hard to test edge cases with real systems

**Benefits of mocking:**

- **Fast**: No network calls or complex state
- **Predictable**: You control exactly what the mock returns
- **Comprehensive**: Easy to test all edge cases and failure scenarios
- **Isolated**: Test only YOUR contract logic, not external systems

### Example Mock

For example, if you are interacting with an ERC20 that has very odd functionality, an easier way to test working with it
would be to make a mock of that contract.

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;



contract MockERC20 is ERC20 {
    constructor(string memory name, string memory symbol)
    ERC20(name, symbol) {}

    function mint(address account, uint amount) external {
        _mint(account, amount);
    }
}
```

Then, use that mock in your tests:

```solidity

contract MyContractTest is Test {
    MockERC20 mockToken;

    function setUp() public {
        mockToken = new MockERC20("Mock Token", "MTK");
        mockToken.mint(address(this), 1000); // Mint some tokens for testing
    }
}
```

### When NOT to Mock

**Don't mock when:**

- Testing the integration between YOUR contracts
- The external dependency is simple and deterministic
- You're specifically testing the interaction with the external system

## Best Practices

### 1. Achieve High Code Coverage

Aim for 90%+ line coverage and 100% branch coverage on critical functions:

```bash
# Run coverage with Foundry
forge coverage
```

### 2. Test All Access Controls

```solidity
function testOnlyOwnerCanMint() public {
    vm.prank(alice); // Alice is not owner
    vm.expectRevert("Ownable: caller is not the owner");
    token.mint(alice, 100);

    vm.prank(owner);
    token.mint(alice, 100); // Should succeed
    assertEq(token.balances(alice), 100);
}
```

### 3. Test Arithmetic Operations

```solidity
function testNoOverflowOnMint() public {
    // Set total supply to near max uint256
    uint256 nearMaxSupply = type(uint256).max - 100;
    token.setTotalSupply(nearMaxSupply);

    vm.prank(owner);
    vm.expectRevert(); // Should revert on overflow
    token.mint(alice, 200);
}
```

### 4. Use Descriptive Test Names

```solidity
function testTransferFailsWhenRecipientIsZeroAddress() public {
    // Clear what this test does
}

function testMintIncreasesTotalSupplyAndRecipientBalance() public {
    // Tests multiple related behaviors
}
```

### 5. Arrange, Act, Assert Pattern

```solidity
function testTransfer() public {
    // Arrange
    uint256 initialBalance = 1000;
    uint256 transferAmount = 100;

    // Act
    vm.prank(alice);
    token.transfer(bob, transferAmount);

    // Assert
    assertEq(token.balances(alice), initialBalance - transferAmount);
    assertEq(token.balances(bob), transferAmount);
}
```

## Common Smart Contract Tools and Frameworks

- [Foundry (Solidity)](https://github.com/foundry-rs/foundry):
- [Hardhat (Solidity)](https://hardhat.org/)
- [Moccasin (Vyper)](https://github.com/Cyfrin/moccasin)
- [Anchor (Rust)](https://www.anchor-lang.com/docs)

## References

This document incorporates knowledge from:

- [Cyfrin Updraft Security Testing Curriculum](https://updraft.cyfrin.io)

---

---

### PAGE: /devsecops/integrated-development-environments
**Title:** Securing Development Environments | SEAL
**Referenced by controls:** di-1.1.3, di-1.1.4

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

### PAGE: /devsecops/overview
**Title:** DevSecOps
**Referenced by controls:** di-1.1.3, di-3.1.3

# DevSecOps




Traditionally, rapid development and deployment is often prioritized at the expense of security considerations. This is
generally speaking no different in web3, but it is important to take integrity, confidentiality, and availability into
consideration too. To effectively address this without compromising on rapid development and deployment, it is essential
to integrate security into the process, which is where devsecops comes into play. By implementing devsecops, projects
can not only deploy faster, but also be more secure.

When operating in a devsecops mindset, projects prioritizes automation and collaboration between the development,
operations and security teams.

Some of the key areas to consider are:

1. Integrate security measures early in the development process, such as by utilizing security tools such as fuzzing,
  static and dynamic analysis tools in your CI/CD process, to identify and mitigate vulnerabilities before they turn into
  critical issues.
2. Implement automated security testing and monitoring.
3. Development, Operations and Security teams should be aligned and work closely together.

---

---

### PAGE: /security-automation/infrastructure-as-code
**Title:** Infrastructure as Code Security | SEAL
**Referenced by controls:** di-1.1.4, di-3.1.1, di-3.1.2, di-4.1.1

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

### PAGE: /infrastructure/domain-and-dns-security/dnssec-and-email
**Title:** DNSSEC, CAA, SMTP DANE and Email Security | SEAL
**Referenced by controls:** di-1.1.4, di-4.1.4

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

### PAGE: /secure-software-development/code-reviews-peer-audits
**Title:** Code Reviews & Peer Audits
**Referenced by controls:** di-2.1.1

# Code Reviews and Peer Audits




Code reviews and peer audits help identifying and mitigating security vulnerabilities in software. They involve
systematically examining code to ensure it adheres to the security standards and best practices of the project.

## Best Practices for Code Reviews

1. **Regular Reviews**
   - Conduct code reviews regularly to identify and fix security vulnerabilities early in the development process.
   - Integrate code reviews into the development workflow to make them a routine part of the process.

2. **Review Checklists**
   - Use review checklists to ensure that all security aspects are covered during the review.
   - Checklists should include common security issues such as input validation, error handling, and authentication.

3. **Automated Tools**
   - Use automated code analysis tools to assist in identifying potential security vulnerabilities.
   - Tools like SonarQube, Checkmarx, and Snyk can help in detecting issues that might be missed during manual reviews.

4. **Peer Audits**
   - Encourage peer audits where team members review each other's code.
   - Peer audits provide a fresh perspective and can help identify issues that the original developer might overlook.

## Conducting Effective Code Reviews

1. **Focus on Security**
   - Prioritize security issues during code reviews.
   - Ensure that code follows secure coding standards and guidelines.

2. **Collaborative Approach**
   - Foster a collaborative environment where reviewers and developers work together to improve code quality.
   - Provide constructive feedback and encourage open communication.

3. **Document Findings**
   - Document all findings from code reviews and track their resolution.
   - Use issue tracking systems to manage identified vulnerabilities and ensure they are addressed.

4. **Continuous Improvement**
   - Continuously improve the code review process based on feedback and lessons learned.
   - Regularly update review checklists and practices to keep up with evolving security threats.

---

---

### PAGE: /devsecops/continuous-integration-continuous-deployment
**Title:** Securing CI/CD Pipelines | SEAL
**Referenced by controls:** di-2.1.2, di-3.1.1, di-3.1.3

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

### PAGE: /supply-chain/dependency-awareness
**Title:** Dependency Awareness
**Referenced by controls:** di-2.1.4

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

### PAGE: /security-automation/compliance-checks
**Title:** Automated Compliance Checks
**Referenced by controls:** di-3.1.2

# Compliance Checks




Automating compliance checks helps projects ensure that they adhere to security policies, standards, and potential
regulatory requirements consistently. Automated compliance tools can continuously monitor, assess, and report on the
compliance status of systems and applications.

## Benefits of Automated Compliance Checks

1. **Continuous Monitoring**
   - Automated tools provide continuous monitoring of systems to ensure ongoing compliance.
   - Reduces the risk of non-compliance due to configuration drift or changes.

2. **Efficiency**
   - Automates repetitive compliance tasks, freeing up security teams to focus on more strategic activities.
   - Speeds up the compliance assessment process.

3. **Accuracy**
   - Reduces human error in compliance assessments.
   - Provides consistent and repeatable compliance checks.

## Tools for Automated Compliance Checks

1. **AWS Config**
   - A service that continuously monitors and records AWS resource configurations and allows automated compliance checks
   based on predefined rules.
   - Pros: Deep integration with AWS services, customizable rules.
   - Cons: Limited to AWS environments.

2. **Azure Policy**
   - A service that enables the creation, assignment, and management of policies to enforce organizational standards and
   assess compliance at-scale.
   - Pros: Integrated with Azure services, supports custom policies.
   - Cons: Limited to Azure environments.

3. **HashiCorp Sentinel**
   - A policy-as-code framework for defining and enforcing policies across infrastructure as code and cloud
   environments.
   - Pros: Flexible and extensible, integrates with Terraform and other HashiCorp tools.
   - Cons: Requires knowledge of policy language.

4. **OpenSCAP**
   - An open-source tool for implementing and enforcing security policies and compliance checks.
   - Pros: Supports various compliance frameworks (e.g., NIST, CIS), open-source.
   - Cons: Requires configuration and management.

## Best Practices

1. Integrate compliance checks into the CI/CD pipeline to ensure that code changes and deployments comply with security
policies.

---

---

### PAGE: /devsecops/security-testing
**Title:** Security Testing
**Referenced by controls:** di-3.1.3

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
**Title:** Cloud Infrastructure
**Referenced by controls:** di-4.1.3, di-4.1.4

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

