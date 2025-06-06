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

> **🔗 Related Framework:** For detailed approaches, see [Understanding Threat Vectors](../awareness/understanding-threat-vectors.md) and [Threat Modeling](../threat-modeling/) frameworks.

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
<summary><strong>Example: Pinnipeds Inc. asset inventory</strong></summary>

### Pinnipeds Inc. Asset Inventory

Pinnipeds Inc. is a small company with 15 employees. Here's how they categorized their assets:

| Asset Category | Items |
|----------------|-------|
| **Digital value stores** | • Company treasury holding 5 BTC and 50 ETH for operations<br>• Client tokens held in custody during project development<br>• Test tokens on various testnets for development purposes |
| **Credentials & access information** | • Multi-signature wallet configuration (3-of-5 signers)<br>• Password manager company accounts for all employees<br>• Recovery seed phrases (stored separately from devices)<br>• SSH keys for server access<br>• API keys for third-party services |
| **Hardware & physical devices** | **Computing devices:**<br>• 15 developer laptops with encrypted drives<br>• 5 company mobile phones for executives<br>• 2 physical servers for internal development<br><br>**Security hardware:**<br>• Hardware wallets for each founding member (3)<br>• YubiKeys for all developers for GitHub access<br>• Biometric access readers<br><br>**Physical security:**<br>• Office security system with cameras<br>• Card readers for building access<br>• Secure storage for sensitive documents |
| **Infrastructure & systems** | • AWS cloud infrastructure for production environments<br>• GitHub organization with private repositories<br>• CI/CD pipeline tools (Jenkins, GitHub Actions)<br>• Company VPN for remote work<br>• Slack and Discord for internal and client communications |
| **Sensitive information & IP** | • Custom smart contract code for clients<br>• Internal research on blockchain optimization<br>• Client database with contact and project information<br>• Financial records and business strategy documents<br>• Employee personal information |
| **Legal & compliance assets** | • Company incorporation documents<br>• Client contracts and NDAs<br>• Regulatory compliance documentation for different jurisdictions<br>• SSL certificates for company websites<br>• Code audit reports and security assessments |

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
<summary><strong>Example: Analysis of adversaries targeting Pinnipeds Inc.</strong></summary>

### Pinnipeds Inc. Adversary Analysis

| Adversary Tier | Characteristics | Examples & Techniques |
|----------------|-----------------|------------------------|
| **Tier 1 (Opportunistic)** | **Who**: Individual hackers, script kiddies, automated scanners/bots<br>**Motivations**: Quick financial gain, building reputation, opportunistic theft<br>**Capabilities**: Using public exploits, basic phishing, automated scanning tools<br>**Targets**: Public-facing infrastructure, employee email accounts, known vulnerabilities | • Crypto wallet draining scams<br>• Generic phishing campaigns<br>• Website defacement<br>• Automated vulnerability scanning |
| **Tier 2 (Targeted)** | **Who**: Organized criminal groups, competitors, disgruntled former employees<br>**Motivations**: Financial theft, competitive advantage, sabotage, revenge<br>**Capabilities**: Custom malware, spear phishing, social engineering, persistent attacks<br>**Targets**: Company treasury wallets, intellectual property, client data, employee credentials | • Targeted social engineering of specific developers<br>• Custom exploits for Pinnipeds' systems<br>• Extended reconnaissance operations<br>• Sophisticated phishing campaigns |
| **Tier 3 (Advanced)** | **Who**: Nation-state actors, sophisticated criminal syndicates, APT groups<br>**Motivations**: Strategic intelligence, large-scale financial theft, disruption<br>**Capabilities**: Zero-day exploits, supply chain attacks, long-term persistence, stealth techniques<br>**Targets**: Crypto treasury, proprietary algorithms, strategic business information, infrastructure access | • Lazarus Group's systematic targeting of cryptocurrency organizations<br>• Supply chain compromises<br>• Advanced persistent threats with long dwell times<br>• Multi-stage attack campaigns |

</details>

### Attack vector mapping

1. **Map potential attack vectors**:
   - Technical: Zero-day exploits, vulnerability exploitation, network attacks
   - Social: Phishing, social engineering, insider threats
   - Physical: Device theft, office intrusion, hardware tampering
   - Operational: SIM swapping, supply chain compromise, third-party breaches
2. **Document potential attack scenarios** for each critical asset
3. **Link attack vectors to adversary capabilities** identified in your adversary analysis

<details>
<summary><strong>Example: Attack Vector Mapping for Pinnipeds Inc.</strong></summary>

### Pinnipeds Inc. Attack Vector Analysis

#### Critical Asset: Treasury Wallet (Financial)

| Attack Vector | Description | Relevant Adversary |
|---------------|-------------|-------------------|
| Phishing | Targeted emails to obtain wallet credentials | Tier 1-2 attackers |
| Social engineering | Manipulating employees to gain access | Tier 2 attackers |
| Supply chain compromise | Compromised wallet software | Tier 3 attackers |
| Insider threat | Disgruntled employee with access | Tier 2 attackers |

#### Critical Asset: Source Code (Intellectual Property)

| Attack Vector | Description | Relevant Adversary |
|---------------|-------------|-------------------|
| GitHub account compromise | Targeting developer credentials | Tier 1-3 attackers |
| CI/CD pipeline injection | Injecting malicious code during build | Tier 3 attackers |
| Code repository breach | Direct attack on GitHub infrastructure | Tier 3 attackers |
| Developer machine compromise | Targeting local development environment | Tier 2-3 attackers |

#### Critical Asset: Client Data (Customer Information)

| Attack Vector | Description | Relevant Adversary |
|---------------|-------------|-------------------|
| Database exploitation | SQL injection or other DB vulnerabilities | Tier 1-2 attackers |
| AWS credential theft | Stolen cloud access credentials | Tier 2 attackers |
| API vulnerabilities | Insecure API endpoints | Tier 1-2 attackers |
| Data in transit interception | Man-in-the-middle attacks | Tier 2-3 attackers |

</details>

## Why is it important

Failure to implement threat modeling has led to catastrophic security breaches:

- [How Threat Modeling Could Have Prevented the 1.5B ByBit Hack](https://blog.trailofbits.com/2025/02/25/how-threat-modeling-could-have-prevented-the-1.5b-bybit-hack/)
- [North Korea's Lazarus Group stole $620 million from Axie Infinity's Ronin bridge (2022)](https://home.treasury.gov/news/press-releases/jy0768) through a sophisticated attack targeting blockchain infrastructure
- [The Nomad bridge lost $190 million (2022)](https://medium.com/nomad-xyz-blog/nomad-bridge-hack-root-cause-analysis-875ad2e5aacd) through a critical vulnerability that allowed attackers to bypass transaction validation
- [The 2020 Twitter compromise](https://blog.twitter.com/en_us/topics/company/2020/an-update-on-our-security-incident) resulted in hijacked high-profile accounts being used for cryptocurrency scams

Organizations that implement threat modeling can focus limited security resources on their most significant risks, avoiding both over-protection of low-value assets and under-protection of critical systems.

Without threat modeling, organizations often distribute security resources evenly across all assets regardless of risk levels. A real-world example shows how costly this approach can be: a DeFi protocol failed to properly identify potential attack vectors, focusing extensively on their website and marketing infrastructure while overlooking smart contract security. The result was a million-dollar exploit through a contract vulnerability that proper threat modeling would have identified as a critical attack vector. Effective threat modeling ensures security teams can identify and document all potential attack paths - enabling risk management teams to later assess and prioritize these threats effectively.

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
