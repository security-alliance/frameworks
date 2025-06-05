---
tags:
  - Security Specialist
  - Operations & Strategy
contributors:
  - role: wrote
    users: [mattaereal]
  - role: reviewed
    users: []
  - role: fact-checked
    users: []
---

# Threat Modeling Overview

> 🔑 **Key takeaway**: Think of threat modeling as your security roadmap. It's how you understand what you need to protect, who might try to steal it, and how they might do it. From random hackers to state actors, knowing your potential attackers helps you build defenses that actually matter. It's about being smart with your security resources and focusing on what really needs protection.

Effective security requires understanding **what you're protecting and who you're protecting it from**. Without a structured threat model, security efforts become unfocused and inefficient. Different entities face different threats based on their assets, visibility, and technological footprint.

## Practical guidance

### Asset inventory

1. **Digital value stores**: Document cryptocurrencies, tokens, NFTs, and any assets directly convertible to monetary value
2. **Credentials & access information**: Catalog passwords, API keys, recovery seeds/phrases, private keys, and other non-physical authentication data
3. **Hardware & physical devices**: 
   - **Computing devices**: Computers, phones, tablets, servers
   - **Security hardware**: Hardware wallets, YubiKeys, MFA devices, HSMs
   - **Physical security**: Office equipment, security systems, physical access controls
4. **Infrastructure & systems**: Map cloud resources, development environments, network equipment, and third-party services
5. **Sensitive information & intellectual property**: Track code repositories, proprietary algorithms, customer data, business documents, email archives, and backup files
6. **Legal & compliance assets**: Identify digital certificates, identity documents, contracts, and regulatory compliance documentation

<details>
<summary><strong>Example: Pinnipeds Inc.</strong></summary>
Pinnipeds Inc. is a small company with 15 employees. Here's how they categorized their assets:

**Digital value stores**:

- Company treasury holding 5 BTC and 50 ETH for operations
- Client tokens held in custody during project development
- Test tokens on various testnets for development purposes

**Credentials & access information**:

- Multi-signature wallet configuration (3-of-5 signers)
- Password manager company accounts for all employees
- Recovery seed phrases (stored separately from devices)
- SSH keys for server access
- API keys for third-party services

**Hardware & physical devices**:

- **Computing devices**:
  - 15 developer laptops with encrypted drives
  - 5 company mobile phones for executives
  - 2 physical servers for internal development
- **Security hardware**:
  - Hardware wallets for each founding member (3)
  - YubiKeys for all developers for GitHub access
  - Biometric access readers
- **Physical security**:
  - Office security system with cameras
  - Card readers for building access
  - Secure storage for sensitive documents

**Infrastructure & systems**:

- AWS cloud infrastructure for production environments
- GitHub organization with private repositories
- CI/CD pipeline tools (Jenkins, GitHub Actions)
- Company VPN for remote work
- Slack and Discord for internal and client communications

**Sensitive information & intellectual property**:

- Custom smart contract code for clients
- Internal research on blockchain optimization
- Client database with contact and project information
- Financial records and business strategy documents
- Employee personal information

**Legal & compliance assets**:

- Company incorporation documents
- Client contracts and NDAs
- Regulatory compliance documentation for different jurisdictions
- SSL certificates for company websites
- Code audit reports and security assessments

</details>

### Adversary analysis

1. **Classify potential attackers by tiers**:
   - **Tier 1 (Opportunistic)**: Random cybercriminals, script kiddies, automated scanners
   - **Tier 2 (Targeted)**: Organized crime groups, corporate competitors, angry ex-employees
   - **Tier 3 (Advanced)**: Nation-state actors, APT groups, sophisticated criminal syndicates
2. **Document adversary capabilities and motivations**:
   - Technical capabilities and resources
   - Financial motivations or strategic goals
   - Persistence level (hit-and-run vs. long-term compromise)
  
<details>
<summary><strong>Example: Analysis of adversaries targeting a Pinniped Inc.</strong></summary>

**Tier 1 (Opportunistic attackers)**:

- **Who**: Individual hackers, script kiddies, automated scanners/bots
- **Motivations**: Quick financial gain, building reputation, opportunistic theft
- **Capabilities**: Using public exploits, basic phishing, automated scanning tools
- **Targets**: Public-facing infrastructure, employee email accounts, known vulnerabilities
- **Examples**: Crypto wallet draining scams, generic phishing campaigns, website defacement

**Tier 2 (Targeted attackers)**:

- **Who**: Organized criminal groups, competitors, disgruntled former employees
- **Motivations**: Financial theft, competitive advantage, sabotage, revenge
- **Capabilities**: Custom malware, spear phishing, social engineering, persistent attacks
- **Targets**: Company treasury wallets, intellectual property, client data, employee credentials
- **Examples**: Targeted social engineering of specific developers, custom exploits for your systems

**Tier 3 (Advanced persistent threats)**:

- **Who**: Nation-state actors, sophisticated criminal syndicates, APT groups
- **Motivations**: Strategic intelligence, large-scale financial theft, disruption
- **Capabilities**: Zero-day exploits, supply chain attacks, long-term persistence, stealth techniques
- **Targets**: Crypto treasury, proprietary algorithms, strategic business information, infrastructure access
- **Examples**: Lazarus Group's systematic targeting of cryptocurrency organizations, supply chain compromises

</details>

### Risk assessment and mitigation

1. **Map potential attack vectors**:
   - Technical: Zero-day exploits, vulnerability exploitation, network attacks
   - Social: Phishing, social engineering, insider threats
   - Physical: Device theft, office intrusion, hardware tampering
   - Operational: SIM swapping, supply chain compromise, third-party breaches
2. **Prioritize scenarios using risk calculation**: Risk = Likelihood × Impact
3. **Implement proportional defenses**:
   - High-value targets: Deploy defense-in-depth strategies
   - Common user assets: Protect against frequent attack patterns
   - Allocate resources based on risk priorities

<details>
<summary><strong>Example: Risk Assessment for Pinnipeds Inc.</strong></summary>

Using a simple risk matrix scoring system (1-5 for both likelihood and impact) to evaluate threats and prioritize defenses:

**High Risk (Score 15-25)**

| Threat Scenario | Likelihood (1-5) | Impact (1-5) | Risk Score | Mitigation Strategy |
|-----------------|------------------|--------------|------------|---------------------|
| Treasury wallet compromise | 4 | 5 | 20 | Implement multi-sig wallet (3-of-5), hardware wallets for all signers, cold storage for 80% of funds |
| Source code theft | 3 | 5 | 15 | Private repositories, branch protection, required code reviews, no direct commits to main |
| Phishing of employees | 5 | 3 | 15 | Security awareness training, phishing simulations, email filtering, DMARC/SPF/DKIM |

**Medium Risk (Score 8-14)**

| Threat Scenario | Likelihood (1-5) | Impact (1-5) | Risk Score | Mitigation Strategy |
|-----------------|------------------|--------------|------------|---------------------|
| Client data breach | 3 | 4 | 12 | Data encryption, access controls, audit logging, minimizing data collection |
| DDoS on company website | 4 | 3 | 12 | CDN with DDoS protection, traffic filtering, backup hosting option |
| Malware on developer laptops | 3 | 4 | 12 | Endpoint protection, application whitelisting, automatic updates |
| AWS credentials leaked | 2 | 5 | 10 | IAM roles, least privilege, MFA, credential rotation, secret scanning |

**Lower Risk (Score 1-7)**

| Threat Scenario | Likelihood (1-5) | Impact (1-5) | Risk Score | Mitigation Strategy |
|-----------------|------------------|--------------|------------|---------------------|
| Physical office break-in | 1 | 4 | 4 | Building security, cameras, alarm system, visitor logs |
| Website defacement | 2 | 2 | 4 | Regular updates, WAF, static site when possible |
| Public Wi-Fi compromise | 2 | 2 | 4 | VPN requirement for all remote work, encrypted communications |

**Implementation Decisions Based on Risk Assessment:**

1. **Immediate Actions (High Risk):**
   - Moved treasury to multi-signature wallet with hardware device requirement
   - Implemented mandatory security training with monthly phishing simulations
   - Added branch protection rules to all repositories with required code reviews

2. **Near-term Actions (Medium Risk):**
   - Deployed endpoint protection solution on all company devices
   - Migrated website to Cloudflare for DDoS protection
   - Implemented secret scanning in CI/CD pipeline

3. **Future Consideration (Lower Risk):**
   - Will upgrade physical security in next office renovation
   - Planning yearly third-party penetration testing
   - Developing comprehensive disaster recovery plan

</details>

## Why is it important

Failure to implement threat modeling has led to catastrophic security breaches:

- [How Threat Modeling Could Have Prevented the 1.5B ByBit Hack](https://blog.trailofbits.com/2025/02/25/how-threat-modeling-could-have-prevented-the-1.5b-bybit-hack/)
- [North Korea's Lazarus Group stole $620 million from Axie Infinity's Ronin bridge (2022)](https://home.treasury.gov/news/press-releases/jy0768) through a sophisticated attack targeting blockchain infrastructure
- [The Nomad bridge lost $190 million (2022)](https://medium.com/nomad-xyz-blog/nomad-bridge-hack-root-cause-analysis-875ad2e5aacd) through a critical vulnerability that allowed attackers to bypass transaction validation
- [The 2020 Twitter compromise](https://blog.twitter.com/en_us/topics/company/2020/an-update-on-our-security-incident) resulted in hijacked high-profile accounts being used for cryptocurrency scams

Organizations that implement threat modeling can focus limited security resources on their most significant risks, avoiding both over-protection of low-value assets and under-protection of critical systems.

Without threat modeling, organizations often distribute security resources evenly across all assets regardless of risk levels. A real-world example shows how costly this approach can be: a DeFi protocol spent 60% of their security budget hardening their website and marketing infrastructure while allocating only 25% to smart contract security. The result was a millionaire exploit through a contract vulnerability that proper threat modeling would have identified as their highest risk. Effective threat modeling ensures resources align with actual risk - not perceived importance - preventing the common mistake of over-securing low-value assets while leaving crown jewels vulnerable.

## Implementation details

| When to implement | Description |
|-------------------|-------------|
| Initial development | Create baseline threat model before launching any crypto project |
| Regular reviews | Update quarterly or when significant changes occur |
| After incidents | Revise after any security breach or near-miss |
| Team changes | Review when onboarding key personnel |

**Role-specific considerations:**

- **Security specialists**: Lead the threat modeling process, provide intelligence on current threats
- **Operations**: Contribute infrastructure knowledge and implement technical controls
- **Developers**: Identify code-level vulnerabilities and secure development practices
- **HR/Management**: Address insider threat risks and security awareness training
- **Community/Marketing**: Consider reputation risks and public-facing attack surfaces

## Common pitfalls & examples

- **Tunnel vision**: The Colonial Pipeline attack (2021) succeeded through a legacy VPN account without MFA, while the company focused security resources on operational technology
- **Unrealistic scenarios**: Many organizations over-invested in zero-day defense while leaving basic phishing vulnerabilities open
- **Static models**: Equifax's 2017 breach occurred partly because threat models weren't updated to reflect new attack patterns
- **Insider blindness**: The 2020 Twitter compromise of high-profile accounts happened when internal admin tools weren't included in threat modeling

## Quick-reference / Cheat sheet

### STRIDE Threat Categorization

| Category | Description | Example Mitigation |
|----------|-------------|-------------------|
| **S**poofing | Identity impersonation | Strong authentication, signing |
| **T**ampering | Unauthorized modifications | Integrity checks, access controls |
| **R**epudiation | Denying performed actions | Logging, audit trails |
| **I**nformation disclosure | Exposing sensitive data | Encryption, minimal privileges |
| **D**enial of service | Disrupting availability | Rate limiting, redundancy |
| **E**levation of privilege | Gaining unauthorized access | Least privilege, segmentation |

### Attack Tree Example

```
Goal: Steal crypto assets
├── Compromise user wallet
│   ├── Phishing attack
│   │   └── Mitigate: Security awareness training
│   └── Malware infection
│       └── Mitigate: Endpoint protection
├── Attack exchange
│   ├── API key theft
│   │   └── Mitigate: IP restrictions, 2FA
│   └── Credential stuffing
│       └── Mitigate: Unique passwords, MFA
└── SIM swapping
    └── Mitigate: Hardware keys, non-SMS 2FA
```

## Further Reading & Tools

- [NIST SP 800-154: Guide to Data-Centric System Threat Modeling](https://csrc.nist.gov/publications/detail/sp/800-154/draft)
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
- [Microsoft STRIDE Model](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats)
- [MITRE ATT&CK Framework](https://attack.mitre.org/)
- Tools: Microsoft Threat Modeling Tool, OWASP Threat Dragon
