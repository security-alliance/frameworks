# QA Brief: sfc-dns-registrar

## YOUR TASK

Verify the evaluation claims below. For each control with refs:
1. Read the ACTUAL page content (provided below)
2. Read the control's FULL baselines
3. Check: does the page ACTUALLY meet the baselines claimed in "baselinesMet"?
4. Check: are the "baselinesMissed" correct (is there content that was overlooked)?
5. Check: is the coverage rating ("full"/"partial") justified?

Be STRICT. If the evaluator was too generous, downgrade. If they missed coverage, upgrade.

## EVALUATION CLAIMS TO VERIFY (11 controls with refs)

### dns-2.1.2: Enterprise Registrar Security Requirements
**Full baselines:**
  1. Registrar supports registry locks (server-level EPP locks)
  2. Registrar supports hardware security key MFA (FIDO2/WebAuthn)
  3. Registrar has no history of social engineering vulnerabilities
  4. Due diligence includes checking ICANN compliance notices for the registrar

**Evaluator's assessment:**
- **/infrastructure/domain-and-dns-security/registrar-and-locks** → Choosing a Secure Registrar — **full**
  Met: Registrar supports registry locks (server-level EPP locks); Registrar supports hardware security key MFA (FIDO2/WebAuthn); Registrar has no history of social engineering vulnerabilities; Due diligence includes checking ICANN compliance notices

### dns-3.1.1: Registrar Access Control
**Full baselines:**
  1. Documented who is authorized, how access is granted/revoked, and role-based permissions where available
  2. Hardware security key MFA (FIDO2/WebAuthn) required for all registrar and DNS management accounts
  3. Access reviews conducted at least annually
  4. Access revoked promptly when no longer needed

**Evaluator's assessment:**
- **/infrastructure/domain-and-dns-security/registrar-and-locks** → Access Control Best Practices — **partial**
  Met: Hardware security key MFA (FIDO2/WebAuthn) required for all accounts; Access reviews conducted at least annually (mentions quarterly)
  Missed: Documented who is authorized, how access is granted/revoked, and role-based permissions (mentions but doesn't teach HOW to document); Access revoked promptly when no longer needed (not actionably addressed)
**Gaps:** Documented procedures for who is authorized, how access is granted/revoked, and role-based permissions implementation; Prompt access revocation procedures when no longer needed

### dns-3.1.2: Dedicated Domain Security Contact Email
**Full baselines:**
  1. Hosted on a different domain than any domain it's responsible for
  2. Not a personal email address
  3. Used exclusively for domain security purposes
  4. Alias that notifies multiple people

**Evaluator's assessment:**
- **/infrastructure/domain-and-dns-security/registrar-and-locks** → Dedicated Security Contact Email — **partial**
  Met: Hosted on a different domain than any domain it's responsible for; Not a personal email address; Used exclusively for domain security purposes
  Missed: Alias that notifies multiple people (not explicitly stated)
**Gaps:** Alias that notifies multiple people

### dns-4.1.1: DNS Security Standards
**Full baselines:**
  1. DNSSEC enabled and validated on all critical domains
  2. CAA records configured to restrict certificate issuance to authorized CAs only
  3. TTL policies documented with rationale
  4. Standards applied consistently based on domain classification

**Evaluator's assessment:**
- **/infrastructure/domain-and-dns-security/dnssec-and-email** → DNSSEC Implementation — **partial**
  Met: DNSSEC enabled and validated on all critical domains; CAA records configured to restrict certificate issuance
  Missed: TTL policies documented with rationale; Standards applied consistently based on domain classification
**Gaps:** TTL policies documented with rationale; Standards applied consistently based on domain classification

### dns-4.1.2: Email Authentication Standards
**Full baselines:**
  1. SPF, DKIM, and DMARC configured for all domains that send email
  2. DMARC policy set to reject for domains actively sending email
  3. DMARC aggregate reports (rua) monitored and reviewed
  4. MTA-STS configured where supported to enforce encrypted email transport
  5. Domains that don't send email have SPF/DMARC records that reject all email

**Evaluator's assessment:**
- **/infrastructure/domain-and-dns-security/dnssec-and-email** → Email Security Configuration — **full**
  Met: SPF, DKIM, and DMARC configured for all domains that send email; DMARC policy set to reject for domains actively sending email; DMARC aggregate reports (rua) monitored and reviewed; MTA-STS configured where supported; Domains that don't send email have SPF/DMARC records that reject all

### dns-4.1.3: Domain Lock Implementation
**Full baselines:**
  1. Registry locks (server-level EPP locks) enabled for all critical domains where supported
  2. Transfer locks enabled on all domains
  3. Lock status verified periodically

**Evaluator's assessment:**
- **/infrastructure/domain-and-dns-security/registrar-and-locks** → Registry Lock (EPP Lock) — **full**
  Met: Registry locks (server-level EPP locks) enabled for critical domains; Transfer locks enabled on all domains; Lock status verified periodically (mentions EPP status codes)

### dns-5.1.1: Domain and DNS Monitoring
**Full baselines:**
  1. DNS record monitoring covers nameserver (NS) changes, A/AAAA changes, MX changes, TXT/SPF/DMARC changes, CAA record removal, DNSSEC status changes, and unexpected TTL drops
  2. Registration monitoring covers lock status, registrar account settings, and nameserver delegation
  3. Alerting and escalation paths documented
  4. Critical alerts (nameserver changes, DNSSEC failure, registrar changes) trigger immediate investigation
  5. Monitoring infrastructure not dependent on the domains being monitored

**Evaluator's assessment:**
- **/infrastructure/domain-and-dns-security/monitoring-and-alerting** → DNS Record Monitoring — **full**
  Met: DNS record monitoring covers NS, A/AAAA, MX, TXT/SPF/DMARC, CAA, DNSSEC, TTL changes; Registration monitoring covers lock status, registrar settings, nameserver delegation; Critical alerts trigger immediate investigation; Monitoring infrastructure not dependent on domains being monitored
  Missed: Alerting and escalation paths documented (mentioned but not detailed HOW to document)
**Gaps:** Detailed guidance on documenting alerting and escalation paths

### dns-5.1.2: Certificate Transparency Monitoring
**Full baselines:**
  1. Subscribed to a CT monitoring service that alerts on new certificate issuance
  2. Alerts reviewed and unauthorized certificates investigated promptly
  3. Wildcard certificates flagged if not expected

**Evaluator's assessment:**
- **/infrastructure/domain-and-dns-security/monitoring-and-alerting** → Certificate Transparency Monitoring — **full**
  Met: Subscribed to a CT monitoring service that alerts on new certificate issuance; Alerts reviewed and unauthorized certificates investigated promptly; Wildcard certificates flagged if not expected

### dns-5.1.3: Domain Expiration Prevention
**Full baselines:**
  1. Auto-renewal enabled on all domains
  2. Calendar reminders at 90, 60, 30, and 7 days before expiration
  3. Payment methods verified current
  4. Backup person designated for renewal responsibility

**Evaluator's assessment:**
- **/infrastructure/domain-and-dns-security/registrar-and-locks** → Domain Expiration Protection — **full**
  Met: Auto-renewal enabled on all domains; Calendar reminders at 90, 60, 30, and 7 days before expiration; Payment methods verified current; Backup person designated for renewal responsibility

### dns-6.1.1: Alerting and Emergency Contacts
**Full baselines:**
  1. Alerting system in place to notify relevant stakeholders when a potential compromise is detected
  2. Emergency contacts pre-documented including registrar security team, SEAL 911, and legal counsel
  3. Communication plan for warning users (status page, social media, in-app warnings)

**Evaluator's assessment:**
- **/infrastructure/domain-and-dns-security/monitoring-and-alerting** → Setting Up Alerts — **full**
  Met: Alerting system in place to notify stakeholders when potential compromise detected; Communication plan for warning users (status page, social media)
  Missed: Emergency contacts pre-documented (registrar security, SEAL 911, legal) - partially in overview but not comprehensive
**Gaps:** Comprehensive emergency contact documentation including registrar security team, SEAL 911, and legal counsel

### dns-6.1.2: Domain Incident Response Plan
**Full baselines:**
  1. Covers key scenarios including registrar account compromise, DNS hijacking, and unauthorized transfers
  2. Emergency registry lock activation procedures
  3. Procedures for regaining control of compromised domains
  4. Post-recovery validation including DNS records verified against known-good baseline, all credentials reset, and access logs reviewed
  5. Plan tested at least annually (can be combined with broader IR drills)

**Evaluator's assessment:**
- **/infrastructure/domain-and-dns-security/monitoring-and-alerting** → Incident Response Plan — **full**
  Met: Covers registrar account compromise, DNS hijacking, unauthorized transfers; Emergency registry lock activation procedures; Procedures for regaining control of compromised domains; Post-recovery validation (DNS records verified, credentials reset, logs reviewed)
  Missed: Plan tested at least annually
**Gaps:** Plan tested at least annually (can be combined with broader IR drills)

## FALSE-NEGATIVE CHECK (5 controls marked "no coverage")

Verify these truly have no relevant framework page. If any page below partially covers them, note it.

### dns-1.1.1: Domain Security Owner
**Baselines:** Accountability scope covers policy maintenance, security reviews, renewal management, access control oversight, and incident escalation

### dns-1.1.2: Domain Inventory and Documentation
**Baselines:** Registry includes domain name, ownership, purpose, expiration date, registrar, DNS record configurations, security settings (DNSSEC, CAA), and registrar account configurations; Accessible to relevant team members

### dns-2.1.1: Domain Classification and Compliance
**Baselines:** Classification considers criticality, financial exposure, and operational impact; Domains where users may transact funds or that are external-facing classified at the highest tier; Each classification maps to specific security requirements (DNSSEC, locks, monitoring frequency, access controls) (+1 more)

### dns-3.1.3: Change Management for Domain Operations
**Baselines:** Covers transfers, deletions, nameserver changes, and DNS record modifications; Relevant team members notified before critical changes; All changes logged (+1 more)

### dns-4.1.4: TLS Certificate Lifecycle Management
**Baselines:** Covers issuance, renewal, and revocation procedures; Certificates tracked with expiration alerts; Automated renewal where possible (+1 more)

---

## FRAMEWORK PAGES (3 pages)

### PAGE: /infrastructure/domain-and-dns-security/dnssec-and-email

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

### PAGE: /infrastructure/domain-and-dns-security/registrar-and-locks

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

