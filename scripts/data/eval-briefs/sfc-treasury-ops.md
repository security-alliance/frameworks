# Evaluation Brief: sfc-treasury-ops

## TASK

For each control below, evaluate whether the candidate framework pages ACTUALLY meet the baseline requirements.
A page must SUBSTANTIVELY address the baseline — not just mention related keywords.
Be strict: if a baseline says "reviewed at least annually" and the page doesn't mention review cadence, that baseline is NOT met.

## CONTROLS (21 total)

### tro-1.1.1: Treasury Operations Owner
**Question:** Is there a clearly designated person or team accountable for treasury operations?
**Baselines (1):**
  1. Accountability scope covers policy upkeep, security reviews, operational hygiene, access control oversight, and incident escalation
**Candidate pages:** /treasury-operations/enhanced-controls, /wallet-security/encumbered-wallets, /multisig-for-protocols/emergency-procedures

### tro-1.1.2: Treasury Registry and Documentation
**Question:** Do you maintain a complete, current record of all treasury wallets, accounts, and their configurations?
**Baselines (3):**
  1. Registry includes wallet/account address, network/chain, custody provider, custody model, purpose/classification, authorized signers/approvers, controlled contracts or protocols, and last review date
  2. Updated within 24 hours for security-critical changes (signer changes, new wallets), 3 days for routine changes
  3. Accessible to authorized treasury personnel
**Candidate pages:** /wallet-security/secure-multisig-best-practices, /treasury-operations/enhanced-controls, /treasury-operations/transaction-verification

### tro-1.1.3: Custody Architecture Rationale
**Question:** Do you have documented rationale for your treasury custody architecture?
**Baselines (3):**
  1. Custody model documented for each wallet/account (custodial, self-custody, co-managed, MPC, multisig, HSM)
  2. Technology trade-offs understood by the team (not necessarily a formal document — could be a brief internal memo)
  3. Custody architecture reviewed when treasury size, operational needs, or risk profile changes significantly
**Candidate pages:** /multisig-for-protocols/implementation-checklist, /treasury-operations/transaction-verification, /treasury-operations/enhanced-controls

### tro-1.1.4: Treasury Infrastructure Change Management
**Question:** Do you have change management procedures for treasury infrastructure modifications?
**Baselines (5):**
  1. Covers wallet setups, custody configurations, signer/approver permission changes, and protocol integrations
  2. Changes require documented approval before implementation
  3. All changes logged with justification and approver
  4. Changes reflected in the treasury registry within defined SLAs
  5. Rollback procedures documented for critical changes
**Candidate pages:** /treasury-operations/enhanced-controls, /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/setup-and-configuration

### tro-2.1.1: Treasury Wallet Risk Classification
**Question:** Do you classify your treasury wallets and accounts by risk level and assign security controls accordingly?
**Baselines (5):**
  1. Classification considers financial exposure, operational dependency, and regulatory impact
  2. Impact levels defined (e.g., Low <1%, Medium 1-10%, High 10-25%, Critical >25% of total assets)
  3. Operational types defined based on transaction frequency and urgency requirements
  4. Each classification maps to specific controls including approval thresholds, MFA requirements, whitelist delays, and monitoring levels
  5. Classification reviewed when asset values, operational patterns, or risk profile change significantly
**Candidate pages:** /treasury-operations/enhanced-controls, /treasury-operations/classification, /wallet-security/secure-multisig-best-practices

### tro-2.1.2: Fund Allocation Limits and Rebalancing
**Question:** Do you enforce fund allocation limits and rebalancing triggers across your treasury?
**Baselines (4):**
  1. Maximum allocation defined per wallet, per custody provider, and per chain
  2. Rebalancing triggers documented (e.g., when a wallet exceeds its allocation ceiling or falls below operational minimums)
  3. Allocation limits reviewed periodically and after significant treasury changes
  4. No single wallet or custody account holds more than the organization's defined maximum concentration
**Candidate pages:** /treasury-operations/enhanced-controls, /treasury-operations/transaction-verification, /treasury-operations/classification

### tro-3.1.1: Custody Platform Security Configuration
**Question:** Do you configure and maintain security controls on your custody platforms?
**Baselines (6):**
  1. Transaction policy rules configured: multi-approval workflows, approval thresholds scaled to transaction value, address whitelisting with cooling-off periods, velocity/spending limits
  2. Hardware security key MFA required for all approvers on High and Critical accounts
  3. Session timeouts and re-authentication for sensitive operations
  4. Network restrictions: IP whitelisting, VPN requirements where supported, geographic access restrictions
  5. Separation of duties enforced: initiators cannot approve their own transactions, admins cannot unilaterally execute withdrawals
  6. Platform configurations documented and reviewed at least quarterly
**Candidate pages:** /treasury-operations/enhanced-controls, /treasury-operations/transaction-verification, /treasury-operations/registration-documents

### tro-3.1.2: Credential and Secret Management
**Question:** Do you securely manage all credentials and secrets used in treasury operations?
**Baselines (5):**
  1. Covers API keys, service accounts, owner/admin credentials, and signing keys
  2. Credentials stored in dedicated secret management systems, not in code, documents, or shared drives
  3. Owner and admin credentials isolated from day-to-day operational access
  4. Credential rotation schedule defined and enforced
  5. Access to credentials logged and monitored
**Candidate pages:** /treasury-operations/enhanced-controls, /multisig-for-protocols/personal-security-opsec, /wallet-security/secure-multisig-best-practices

### tro-3.1.3: Access Reviews for Treasury Systems
**Question:** Do you periodically review who has access to treasury systems?
**Baselines (3):**
  1. Access reviews conducted at least quarterly for High/Critical accounts, annually for others
  2. Reviews verify each user still requires their current access level
  3. Access promptly revoked when personnel change roles or leave
**Candidate pages:** /treasury-operations/enhanced-controls, /treasury-operations/registration-documents, /wallet-security/secure-multisig-best-practices

### tro-3.1.4: Personnel Operational Security
**Question:** Do you enforce operational security requirements for treasury personnel?
**Baselines (6):**
  1. Device security requirements documented: dedicated devices for custody access, full disk encryption, automatic screen lock
  2. Signing devices (hardware wallets) securely stored when not in use
  3. Backup materials (seed phrases, recovery keys) stored securely with geographic distribution
  4. VPN mandatory for all remote treasury platform access
  5. Travel security procedures for personnel with signing or custody access capabilities
  6. Mobile devices used as second factors have endpoint security monitoring
**Candidate pages:** /treasury-operations/enhanced-controls, /wallet-security/seed-phrase-management, /multisig-for-protocols/personal-security-opsec

### tro-4.1.1: Transaction Verification and Execution
**Question:** Do you have a defined process for verifying and executing treasury transactions?
**Baselines (8):**
  1. Pre-execution verification includes: recipient address validation, amount verification, network confirmation, and transaction simulation
  2. Test transactions required before sending to new addresses
  3. Address verified through multiple independent sources; never copied from email, chat, or transaction history
  4. Multi-party confirmation required: minimum 2 internal personnel for large transfers
  5. Specific procedures for receiving large incoming transfers (address generation, bidirectional test, sender coordination)
  6. Specific procedures for OTC transactions where applicable
  7. High-value transfers (organization-defined threshold) require video call verification with liveness checks
  8. All transaction parameters read aloud and confirmed before execution
**Candidate pages:** /treasury-operations/enhanced-controls, /treasury-operations/transaction-verification, /wallet-security/secure-multisig-best-practices

### tro-4.1.2: Signer and Approver Knowledge
**Question:** Are treasury signers and approvers knowledgeable in the security practices relevant to their role?
**Baselines (4):**
  1. Knowledge covers: transaction verification procedures, address validation techniques, social engineering awareness, emergency procedures
  2. Competence demonstrated before authorization (e.g., verifying a test transaction end-to-end)
  3. Knowledge refreshed annually; updated within 30 days of significant procedure changes
  4. Covers custody-platform-specific workflows and policy engine rules
**Candidate pages:** /treasury-operations/enhanced-controls, /wallet-security/secure-multisig-best-practices, /treasury-operations/transaction-verification

### tro-4.1.3: Secure Communication Procedures
**Question:** Do you have secure communication procedures for treasury operations, including standard identity verification?
**Baselines (6):**
  1. Dedicated primary and backup channels on different platforms
  2. End-to-end encryption, MFA required, invitation-based membership
  3. Identity verified as standard procedure during signing/approval operations (e.g., code phrases, video call, secondary authenticated channel)
  4. Anti-social-engineering protocols: established verification procedures for address changes or unusual requests
  5. Documented procedures for channel compromise including switching to backup channels and out-of-band verification
  6. All treasury personnel trained on these procedures; compromise response tested annually
**Candidate pages:** /multisig-for-protocols/implementation-checklist, /multisig-for-protocols/backup-signing-and-infrastructure, /multisig-for-protocols/emergency-procedures

### tro-5.1.1: Protocol Evaluation and Exposure Limits
**Question:** Do you evaluate external protocols and enforce exposure limits before deploying treasury funds?
**Baselines (4):**
  1. Due diligence process for all protocols before deployment: smart contract audit status, team reputation, TVL history, insurance coverage
  2. Exposure limits defined per protocol, per chain, and per deployment category (DeFi, staking, liquid staking, etc.)
  3. Limits reviewed periodically and after significant market or protocol changes
  4. Risk re-evaluation triggered by: security incidents, major governance proposals, significant TVL changes, new vulnerabilities disclosed
**Candidate pages:** /treasury-operations/enhanced-controls, /wallet-security/secure-multisig-best-practices, /wallet-security/account-abstraction

### tro-5.1.2: Position Lifecycle Management
**Question:** Do you have procedures for managing the lifecycle of your positions in external protocols?
**Baselines (4):**
  1. Entry procedures: smart contract address verification against multiple independent sources, token approval management (minimal approvals, revocation after use)
  2. Emergency withdrawal/exit procedures documented for all active positions
  3. Alternative access methods documented in case primary UIs are unavailable (direct contract interaction, CLI tools, alternative frontends)
  4. Unbonding/unstaking timelines understood and factored into liquidity planning
**Candidate pages:** /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/implementation-checklist, /wallet-security/account-abstraction

### tro-6.1.1: Monitoring and Threat Awareness
**Question:** Do you monitor your treasury for anomalous activity, external threats, and operational risks?
**Baselines (9):**
  1. Transaction monitoring: unusual amounts, unexpected destinations, failed transactions, policy violations
  2. Account state monitoring: balance changes, configuration modifications, new device enrollments, authentication anomalies
  3. External threat intelligence: protocol vulnerabilities, DeFi/staking risks, relevant security incidents in the ecosystem
  4. Vendor/platform monitoring: custody platform status, infrastructure alerts, service availability
  5. Compliance monitoring: transactions and wallet addresses screened for sanctions and compliance risk
  6. Protocol and position monitoring: deployed protocol health, governance changes, TVL shifts, collateral ratios, reward accrual, liquidation risks
  7. Alerting with defined severity levels and escalation paths
  8. Critical alerts (large unexpected transactions, unauthorized access attempts) trigger immediate investigation
  9. Monitoring system integrity protected — alerts triggered when monitoring configurations are changed, disabled, or degraded
**Candidate pages:** /treasury-operations/enhanced-controls, /incident-management/playbooks/seal-911-war-room-guidelines, /wallet-security/tools-and-resources

### tro-6.1.2: Incident Response Plan
**Question:** Do you have an incident response plan for treasury security events, and do you test it?
**Baselines (7):**
  1. Severity levels defined with escalation procedures specific to treasury operations
  2. Containment procedures: fund protection actions (emergency freeze, transfer to secure cold storage, policy lockdown)
  3. Covers key scenarios: custody platform compromise, unauthorized transaction, signer key compromise, vendor breach
  4. Emergency contacts pre-documented: custody provider security team, SEAL 911, legal counsel
  5. Communication plan for stakeholders
  6. Drills conducted at least annually; after major procedure changes
  7. Drill documentation includes: date, participants, response times, issues identified, improvements made
**Candidate pages:** /treasury-operations/enhanced-controls, /wallet-security/secure-multisig-best-practices, /treasury-operations/transaction-verification

### tro-7.1.1: Vendor Security Management
**Question:** Do you evaluate and monitor the security of third-party services used in treasury operations?
**Baselines (4):**
  1. Initial due diligence before adoption: security certifications (SOC 2, ISO 27001), audit history, insurance coverage, incident history
  2. Ongoing monitoring: SOC report currency, security incident notifications, service availability tracking
  3. Contractual security requirements verified periodically (at least annually)
  4. Critical vendor changes (ownership, infrastructure, security posture) trigger re-evaluation
**Candidate pages:** /incident-management/playbooks/seal-911-war-room-guidelines, /treasury-operations/enhanced-controls, /governance/compliance-regulatory-requirements

### tro-7.1.2: Backup Infrastructure and Alternate Access
**Question:** Do you have backup infrastructure and alternate access methods for treasury operations?
**Baselines (4):**
  1. Alternate access methods for custody platforms documented and tested (e.g., API access, mobile app, secondary UI)
  2. Backup RPC providers configured
  3. Procedures for operating treasury if primary custody platform is unavailable
  4. Backup infrastructure tested at least annually
**Candidate pages:** /multisig-for-protocols/backup-signing-and-infrastructure, /multisig-for-protocols/implementation-checklist, /treasury-operations/enhanced-controls

### tro-8.1.1: Financial Recordkeeping and Reconciliation
**Question:** Do you maintain accurate treasury records and conduct periodic reconciliation?
**Baselines (5):**
  1. All treasury transactions recorded with categorization, documentation, and authorization chain
  2. Periodic reconciliation between custody platform records, on-chain balances, and accounting records
  3. Reconciliation frequency scaled to account classification: daily for Active Operations, weekly for Warm Storage, monthly for Cold Vault
  4. Discrepancies investigated and resolved promptly
  5. Treasury reporting procedures documented with defined cadence and audience
**Candidate pages:** /treasury-operations/enhanced-controls, /treasury-operations/transaction-verification, /treasury-operations/classification

### tro-8.1.2: Insurance Coverage
**Question:** Do you maintain insurance coverage appropriate for your treasury operations?
**Baselines (4):**
  1. Coverage scope documented: what's covered (custody theft, hack, insider fraud) and what's excluded
  2. Coverage amounts appropriate relative to assets held
  3. Custody provider's insurance evaluated as part of vendor due diligence
  4. Insurance coverage reviewed at least annually or when treasury size changes significantly
**Candidate pages:** /treasury-operations/enhanced-controls, /treasury-operations/transaction-verification, /treasury-operations/classification

---

## FRAMEWORK PAGES (16 unique)

### PAGE: /treasury-operations/enhanced-controls
**Title:** Enhanced Controls for High-Risk Accounts | SEAL
**Referenced by controls:** tro-1.1.1, tro-1.1.2, tro-1.1.3, tro-1.1.4, tro-2.1.1, tro-2.1.2, tro-3.1.1, tro-3.1.2, tro-3.1.3, tro-3.1.4, tro-4.1.1, tro-4.1.2, tro-5.1.1, tro-6.1.1, tro-6.1.2, tro-7.1.1, tro-7.1.2, tro-8.1.1, tro-8.1.2

TagList,
  AttributionList,
  TagProvider,
  TagFilter,
  ContributeFooter,
} from "../../../components";




# Enhanced Controls for High-Risk Accounts




For Critical and High impact custodial accounts, implement the following controls in addition to baseline measures.

---

## Transaction Verification

- Test transactions: Send maximum $100 to new addresses before executing full transaction
- Multi-channel confirmation: Request via one channel, approve via separate channel
- Simulation requirement: All transactions must be simulated before execution
- Address verification: Verify new addresses against three independent sources

For DeFi interactions: refer to the [DeFi Risk Assessment Guide](https://entethalliance.org/specs/defi-risks/v1/) for
recommended procedures.

## Access Security

- Hardware security keys (FIDO2/WebAuthn) mandatory for all approvers
  - Secure fallback: Each approver must register minimum 2 hardware keys stored in separate secure locations
  - Key loss procedure: Temporary access via backup key + additional approver verification via multiple channels +
    mandatory key replacement within 48 hours
- IP whitelisting with 24-hour change approval delay - if treasury software supports application-level IP whitelisting,
  restrict to VPN IP range only
- Device fingerprinting with new device approval process
- Session timeout and re-authentication for sensitive operations
- Dedicated credentials: Use separate email addresses and passwords exclusively for custody access, not shared with
  other corporate systems

## Device Security

- Dedicated secure workstations and mobile devices for custody access only (no general browsing, email, or other
  corporate activities)
- Network isolation on separate VLAN/segment
- VPN mandatory for all platform access; if treasury platform supports it, configure IP whitelisting to only allow
  access from VPN IP addresses
- Full disk encryption with automatic screen lock
- MDM-enforced security baseline with remote wipe capability
- Mobile endpoint security monitoring (e.g., iVerify) for devices used as second factors or keystores, without requiring
  full MDM admin control

## MPC for Large Holdings

For organizations managing >10% of total assets or >$10M equivalent in a single custodial account consider using MPC:

- Evaluate MPC (Multi-Party Computation) custody solutions that distribute key material across multiple parties
- Consider threshold signature schemes (e.g., 3-of-5 or 5-of-9) where no single party controls sufficient key shares
- Implement geographic distribution of key share holders across multiple jurisdictions
- Establish clear key refresh and rotation procedures
- Document recovery procedures and test annually

### Custody/MPC Policy Thresholds for Treasury Operations

- Minimum of 3 distinct approvers across roles (e.g., Treasury, Security, Finance)
- Target majority approval (≥50% of designated approver group; e.g., 3/5, 4/7)
- Scale quorum size with assets-at-risk and operational blast radius
- Enforce separation of duties: requester cannot be an approver; admins cannot unilaterally execute withdrawals

Policy scope definitions (examples):

- Emergency Freeze: Temporarily block withdrawals/policy changes across workspaces
- Protocol Parameters: Custody/policy engine settings, risk rules, policy changes
- Capital Allocation: Movements between accounts, exchanges, or strategies
- Treasury – Large: Routine treasury transfers above internal threshold or rate limit
- Treasury – Small: Routine operational transfers below internal threshold or rate limit
- Constrained DeFi: Time-sensitive interactions with pre-approved protocols/contracts

Suggested approver thresholds (treasury contexts):

| Operation            | Impact   | Urgency        | Approver Threshold            |
| -------------------- | -------- | -------------- | ----------------------------- |
| Emergency Freeze     | Critical | Emergency      | 2/4                           |
| Protocol Parameters  | High     | Routine        | 4/7 (7/9+ for upgrades)       |
| Capital Allocation   | High     | Time-Sensitive | 3/5                           |
| Treasury - Large     | High     | Routine        | 4/7                           |
| Treasury - Small     | Medium   | Routine        | 3/5                           |
| Constrained DeFi     | Medium   | Time-Sensitive | 2/3                           |

## Custody Policy Engine Rules

Most custody/MPC platforms provide a policy engine that evaluates transaction rules and takes one of three actions:
allow, block, or require additional approvals.

Core rule elements:

- Action: allow | block | escalate (require more approvers)
- Asset selector: all assets or specific assets/tokens
- Amount limits: per-transaction limit and optional rolling window aggregation
- Source and destination selectors: account/wallet groups, internal vs external addresses, exchanges
- Transaction type: transfers, contract interactions, approvals/signing
- Initiators and approvers: who can initiate and who must authorize (with thresholds)
- Rule identity and ordering: each rule has an ID; engines typically evaluate rules in order (first-match wins)

## Zero Trust Architecture Alternative

A Zero Trust architecture involves continuous verification of user, device, and context, rather than reliance on a
single perimeter or network location. Centralizing access through a secure environment (such as a bastion host or
isolated cloud workspace) can support Zero Trust principles when combined with strong identity and device posture
enforcement.

- Bastion Host Approach: Deploy a hardened jump server that acts as the sole gateway to custody platforms.
  - All custody sessions route through the bastion with full session recording
  - Bastion enforces MFA, device posture checks, and approved software versions
  - No direct custody access from employee devices
  - Centralized patch management and security configuration
  
- Cloud Workspace Isolation: Use browser-isolated or virtual workspace environments (e.g., Citrix, AWS WorkSpaces, Azure
  Virtual Desktop)
  - Custody access occurs only within a controlled virtual environment
  - Copy/paste and download restrictions prevent data exfiltration
  - Session timeout and automatic workspace destruction after use
  - Significantly reduces risk from compromised employee devices

## Security Monitoring & Logging

For Critical and High impact accounts, implement centralized security monitoring:

- SIEM Deployment: Deploy SIEM to centralize logs from custody platforms, authentication systems, and access devices.
  Create real-time correlation rules for suspicious patterns (failed authentication, geographic anomalies, policy
  changes).

- Internal Incident Response: Build dedicated incident response capability for custody-related security events. Define
  clear escalation procedures, maintain 24/7 on-call rotation for Critical accounts, and establish playbooks for custody
  compromise scenarios.

- Essential Log Sources: Authentication events, transaction attempts, policy modifications, access changes, whitelist
  updates, IP address changes, new device enrollments, and approval workflows.

For Medium and Low impact accounts, leverage custodian's native audit logs with weekly manual review and automated
alerting for critical events (new device enrollment, policy changes, transactions above threshold).

---

### See also

- Classification: [Custodial Treasury Security: Classification Framework](./classification)
- Templates: [Registration Documents](./registration-documents)

---

### PAGE: /wallet-security/encumbered-wallets
**Title:** TEE-based Encumbered Wallets
**Referenced by controls:** tro-1.1.1

# TEE-based Encumbered Wallets




## User Profile

Advanced users, developers, and organizations wanting to implement fine-grained security policies, that don't want to
(EVM, Solana, Sui) or can't (Bitcoin, Litecoin, Dogecoin, XRP) make fully customizable logic on each chain individually.
Additionally, encumbered wallets can use encrypted storage thus providing a level of transaction privacy.

## Primary Goal

To implement optionally private smart contract-like logic and programmable policies for wallet operations across any
blockchain by encumbering private keys with restrictions. This enables features like conditional signing, multi-party
authorization, time-locked transactions, and compliance policies that work universally, regardless of the underlying
chain's capabilities, by instead relying on TEEs.

## Core Concept: Key Encumbrance

Key encumbrance refers to placing cryptographic or policy-based restrictions on a private key’s signing power. Instead
of a raw key being free to sign any message, its use is “handcuffed” by rules or proofs, and access to it is limited to
a preset interface. Examples include:

* A key can only sign if a specific policy is met (e.g., only transfers to whitelisted addresses).
* A key must co-sign with another party’s key (multi-sig or MPC).
* A key’s signing rights are tied to a verifiable execution environment (e.g., inside a TEE or governed by smart
  contract logic).

Essentially, key encumbrance adds programmable controls to private keys, enabling fine-grained access, delegation, and compliance.

## Core Concept: Trusted Execution Environments (TEEs)

A Trusted Execution Environment (TEE) is a secure area of a processor that provides hardware-level protection for code
and data. TEEs create an isolated environment where sensitive operations can run protected from the main operating
system, other applications, and even privileged system software.

**Key TEE Properties:**

* **Hardware-based Isolation**: Code and data within the TEE are protected by CPU-level security features, not just
  software isolation.
* **Attestation**: TEEs can cryptographically prove their identity and the integrity of the code running inside them.
* **Sealed Storage**: Data can be encrypted and tied to the specific TEE instance, ensuring it cannot be accessed
  outside the secure environment.
* **Memory Protection**: TEE memory is encrypted and isolated from the host system, preventing external access to
  sensitive data.

**Common TEE Technologies:**

* **Intel SGX (Software Guard Extensions)**: Creates secure enclaves within applications that protect against privileged
  malware and physical attacks.
* **ARM TrustZone**: Divides the processor into "secure" and "non-secure" worlds, with hardware-enforced separation.
* **AMD Memory Guard**: Provides memory encryption and isolation features similar to Intel SGX.
* **Confidential Computing Platforms**: Cloud-based TEE services like Azure Confidential Computing or AWS Nitro Enclaves.

**In Encumbered Wallets:**

TEEs enable private keys to be generated, stored, and used within a protected environment where:

* Keys never exist in plaintext outside the TEE
* Policy logic runs confidentially within the secure enclave
* External observers cannot see the encumbrance rules or key operations
* Attestation proves the wallet is running authentic, unmodified code

This hardware-level protection makes TEE-based encumbered wallets significantly more secure than software-only
solutions, as even root or physical access to the host system cannot compromise the keys or policies within the TEE.

**Please note that lately there has been a lot of controversy around TEEs, and many researchers are proving that it is not always the case that they add a layer of security. For more information on this, you can check out [TEE.fail](https://TEE.fail), which addresses vulnerabilities in Intel's and AMD's implementation.**

## Key Benefits & Features

**Cross-Chain Compatibility:**

* **Universal Policy Logic**: Implement sophisticated access controls and transaction policies on any blockchain,
  including Bitcoin, Litecoin, Dogecoin, and other non-smart contract chains.
* **Chain-Agnostic Security**: Deploy consistent security policies across multiple blockchains without depending on each
  chain's native capabilities.

**Advanced Access Control:**

* **Fine-Grained Permissions**: Delegate specific rights (voting, trading, asset transfer) to different parties without
  revealing the full wallet structure.
* **Time-Bounded Policies**: Implement temporary access controls that automatically expire after specified periods.
* **Hierarchical Delegation**: Create multi-level permission structures where sub-policies can grant further access down
  the chain.
* **Asset-Time Segmentation**: Ensure that specific assets are controlled by exactly one policy at any given time,
  preventing conflicts.

**Privacy & Selective Disclosure:**

* **Confidential Operations**: Policy logic and key operations remain encrypted and hidden from external observers.
* **Compartmentalized Access**: Each delegatee only sees their authorized subset of operations, maintaining privacy of
  the overall wallet structure.
* **Selective Transparency**: Use view keys to prove compliance or ownership to auditors without revealing spending
  control or full delegation hierarchy.

**Compliance & Auditability:**

* **Regulatory Compliance**: Support AML/KYC requirements through selective disclosure mechanisms without compromising
  user privacy.
* **Institutional Auditing**: Enable institutions to prove 1:1 collateralization or policy adherence to regulators using
  view keys.
* **Non-Transferability Proofs**: Demonstrate that certain assets (like compliance-bound RWAs or soulbound tokens)
  remain under original owner control.

**Operational Flexibility:**

* **Programmable Recovery**: Implement sophisticated recovery mechanisms that work across any blockchain without relying
  on smart contract support.
* **Dynamic Policy Updates**: Modify access controls and delegation structures without changing the underlying
  blockchain infrastructure.
* **Multi-Asset Management**: Apply consistent policies across different cryptocurrencies and blockchain networks from a
  single encumbered wallet system.

## Security Considerations & Best Practices

* Implement threshold or multi-party computation-based key custody rather than placing sole trust in a single TEE
  enclave. Use multi-party threshold signatures or distributed key generation so that a single compromised node cannot
  break the entire system, providing resilience against both hardware attacks and operational failures.
* Incorporate economic incentive mechanisms such as staking requirements for TEE operators to align security incentives
  through cryptoeconomic design. Require operators to post collateral that can be slashed for malicious behavior,
  attestation failures, or policy violations, creating financial disincentives for compromise attempts and encouraging
  proactive security maintenance of TEE infrastructure.
* Carefully evaluate TEE technology selection based on application memory requirements and security priorities. For
  encumbered wallet applications with modest memory needs (under 256MB), prefer Intel SGX v1 (Client SGX) which provides
  integrity protection against hardware attacks, whereas applications requiring larger secure memory may need to accept
  the trade-offs of newer implementations like Scalable SGX or SEV-SNP that offer greater memory capacity but lack
  integrity protection against physical attacks.
* Establish continuous re-attestation processes that periodically re-verify enclave conformance on a regular schedule
  such as hourly or per-block intervals. This helps detect drift, tampering, or compromise attempts over time and
  ensures that the enclave maintains its security properties throughout its operational lifetime.
* Implement dual-attestation architectures for cloud-deployed nodes by requiring both Intel DCAP quotes and cloud
  provider attestation services (such as Azure MAA or AWS Nitro Attestation). This approach provides defense-in-depth by
  anchoring trust through multiple independent attestation roots with different threat models and security assumptions.
* Maintain transparent attestation policy publication by documenting and publicly sharing allowed CPU models, TCB
  versions, QE/PCS builds, and upgrade paths. This enables operators and auditors to verify compliance independently
  while providing clear guidance for secure deployment configurations and helping detect potentially compromised or
  outdated systems.
* Collaborate with hardware vendors and ecosystem partners to push for enhanced TEE security features including replay
  protection, alias detection, and memory mapping integrity. Engage in industry efforts to improve the fundamental
  security properties of TEE implementations and advocate for standardized security enhancements across different TEE
  platforms.

## Relevant Papers

* Austgen, J., Fábrega, A., Kelkar, M., Vilardell, D., Allen, S., Babel, K., Yu, J., & Juels, A. (2024, December 3).
  Liquefaction: Privately liquefying blockchain assets. [arXiv.org](https://arxiv.org/abs/2412.02634)
* Dai, W., Deng, J., Wang, Q., Cui, C., Zou, D., & Jin, H. (2018). SBLWT: a secure blockchain lightweight wallet based
  on TrustZone. IEEE Access, 6, 40638–40648. [https://doi.org/10.1109/access.2018.2856864](https://doi.org/10.1109/access.2018.2856864)
* Yu, J. (n.d.). PASS: A Provenanced Access Subaccount System for Blockchain Wallets [Stanford University](https://cs191.stanford.edu/projects/Yu,%20Jay_Systems%20191W.pdf)
* Aublin, P.-L., Mahhouk, M., & Kapitza, R. (n.d.). Towards TEEs with Large Secure Memory and Integrity Protection
  Against HW Attacks [IIJ Innovation Institute, TU Braunschweig](https://www.ibr.cs.tu-bs.de/bib/xml/aublin2022scalableSGX.html)

---

---

### PAGE: /multisig-for-protocols/emergency-procedures
**Title:** Multisig Emergency Procedures | SEAL
**Referenced by controls:** tro-1.1.1, tro-4.1.3

# Emergency Procedures




When security incidents occur, quick and decisive action is critical. This page covers procedures for key compromise,
lost access, and communication breaches.

## Key Compromise

### Immediate Actions (Within 30 Minutes)

1. **Stop operations** - Halt all non-emergency transactions
2. **Notify team** - Alert via all communication channels using emergency notification template
3. **Assess scope** - Determine which keys may be compromised
4. **Escalate** - Contact Security team immediately
5. **Document** - Record timeline and details

### Recovery Process

1. **Isolate** - Quarantine potentially compromised devices
2. **New hardware setup** - Set up fresh wallet with new seed following [Hardware Wallet Setup](/wallet-security/intermediates-&-medium-funds)
3. **Coordinate replacement** - Plan signer replacement transaction with team
4. **Execute replacement** - Replace compromised signer on multisig, following steps for signer rotation in [Secure
   Multisig Best Practices](/wallet-security/secure-multisig-best-practices)
5. **Verify security** - Confirm new setup before resuming operations

## Lost Key Access

### Immediate Steps

1. **Try backup device first** if available
2. **Contact team immediately** via backup communication channels
3. **Do not panic** - Lost access doesn't mean compromised keys
4. **Document the situation** - Record what happened and when

### Identity Verification Process

Since you can't sign with your key, verify identity through alternative methods:

- **Video call** with other signers
- **Authentication** via verified social media account
- **Other pre-arranged verification methods**

### Replacement Coordination

1. **Generate new hardware wallet** following standard setup procedures in [Hardware Wallet Setup](/wallet-security/intermediates-&-medium-funds)
2. **Verify new address** through identity verification process above
3. **Coordinate timing** with other signers for replacement transaction
4. **Execute replacement** once team confirms identity
5. **Update documentation** with new signer information

## Communication Account Compromise

### If Telegram/Signal/Discord Gets Taken Over

#### Immediate Actions

1. **Assume all recent messages are suspect** - Don't trust recent communication
2. **Use backup channels** to alert team about compromise
3. **Change passwords** and enable additional security on compromised account

#### Team Verification Process

**For the compromised person:**

- Use alternative contact methods (email, phone, other platforms)
- Verify identity through video call or pre-arranged methods
- Provide proof of the compromise (screenshots, platform confirmation)

**For other team members:**

- Verify all recent requests from compromised account
- Cancel any pending transactions initiated via compromised communication
- Require additional verification for any future requests until resolved

#### Recovery Steps

1. **Regain account control** through platform recovery processes
2. **Enable maximum security** (2FA, security keys, session management)
3. **Review recent message history** for unauthorized communications
4. **Alert team** when account is secured and verified clean
5. **Resume normal operations** only after team confirms account security

## Emergency Notification Template

Use this template for security incidents or key compromises:

```
Subject: [URGENT] Multisig Security Incident - [Multisig Name]

Immediate details:
- Multisig address: [ADDRESS]
- Classification: [Impact Level / Operational Type]
- Incident type: [Key Compromise / Communication Failure / System Issue]
- Time of discovery: [TIMESTAMP]
- Reporting signer: [NAME/HANDLE]

Situation summary: [Brief description of what happened and current status]

Immediate actions taken:
□ Stopped non-emergency operations
□ Isolated affected systems
□ Notified team members
□ [Other actions]

Next steps required:
□ Security team assessment
□ Key rotation process
□ Emergency transaction execution
□ [Other actions]

Current multisig status:
- Available signers: [X/Y]
- Communication status: [Operational/Compromised]
- Operational capability: [Full/Limited/Suspended]
```

## Emergency Communication Protocols

### Multi-Channel Notification

- **Primary channel**: Alert via main communication channel
- **Backup channels**: Simultaneously notify via backup platforms
- **Emergency contacts**: Use emergency contact procedures if established

### Identity Verification

- **Code words**: Use pre-established verification phrases
- **Multiple confirmations**: Verify through multiple channels
- **Video verification**: Use video calls for critical confirmations

### Information Sharing

- **Need-to-know basis**: Share only essential information
- **Secure channels only**: Use most secure available communication
- **Documentation**: Record all emergency communications

## Operational Emergency Procedures

### For Emergency Response Multisigs

#### Rapid Response Protocol

1. **Immediate assessment** - Determine scope and urgency
2. **Signer activation** - Contact threshold number of signers
3. **Streamlined verification** - Use minimal verification appropriate for risk level
4. **Execute response** - Implement emergency measures
5. **Post-action review** - Document and assess response effectiveness

#### 24/7 Availability

- **Geographic distribution** - Ensure coverage across time zones
- **Backup signers** - Have additional signers available for activation
- **Communication redundancy** - Multiple ways to reach each signer

### Emergency Drill Procedures

#### Regular Testing Schedule

- **Quarterly**: Communication system tests
- **Bi-annually**: Emergency paging system tests
- **Annually**: Full emergency simulation with all signers

#### Drill Components

1. **Notification test** - Verify all signers receive alerts
2. **Response time measurement** - Track time to threshold signatures
3. **Process verification** - Ensure procedures work under pressure
4. **Documentation review** - Update procedures based on drill results

## Recovery and Post-Incident

### Immediate Recovery

1. **Restore operations** - Resume normal operations once threat is mitigated
2. **Monitor for issues** - Watch for any residual security concerns
3. **Update security measures** - Implement additional controls if needed

### Post-Incident Analysis

1. **Root cause analysis** - Determine how incident occurred
2. **Process improvement** - Update procedures to prevent recurrence
3. **Team debriefing** - Gather lessons learned from all participants
4. **Documentation updates** - Revise emergency procedures based on experience

### Communication

1. **Team notification** - Inform team when incident is resolved
2. **Stakeholder updates** - Notify relevant parties as appropriate
3. **Documentation** - Complete incident report for future reference

## Emergency Contact Information

### Security Team Contact

- **Email**: [Security team email]
- **Emergency escalation**: [24/7 emergency contact if available]
- **Communication**: Use subject line format from emergency notification template

### Internal Escalation

- **Protocol leadership**: [Contact information]
- **Technical team**: [Emergency technical contact]
- **Legal/compliance**: [If regulatory notification required]

## Related Documents

- [Incident Reporting](/multisig-for-protocols/incident-reporting) - Formal incident reporting procedures
- [Communication Setup](/multisig-for-protocols/communication-setup) - Backup communication channels
- [Hardware Wallet Setup](/wallet-security/intermediates-&-medium-funds) - Device replacement procedures
- [Seed Phrase Management](/wallet-security/seed-phrase-management) - Key recovery procedures
- [Personal Security (OpSec)](/multisig-for-protocols/personal-security-opsec) - Account security measures

---

### PAGE: /wallet-security/secure-multisig-best-practices
**Title:** Secure Multisig Best Practices | SEAL
**Referenced by controls:** tro-1.1.2, tro-1.1.4, tro-2.1.1, tro-3.1.2, tro-3.1.3, tro-4.1.1, tro-4.1.2, tro-5.1.1, tro-5.1.2, tro-6.1.2

# Secure Multisig Best Practices




> Guidance for designing, operating, and auditing high-assurance multisigs. Use this as your single source for baseline
> rules, setup guidance, and daily operations.

## Who This Is For

Advanced technical users, developers, Decentralized Autonomous Organizations (DAOs), and organizations responsible for
managing protocol treasuries, smart contract ownership, or significant personal/collective assets.

## Primary Goal

The primary objective is to eliminate single points of failure and establish robust, distributed control over high-value
assets and critical smart contract functions.

## Core Concept: M-of-N Scheme

A multisignature (multisig) wallet is a smart contract that requires a predefined minimum number of approvals `M` from a
total set of authorized signers `N` to execute a transaction. This is known as an `M-of-N` scheme (e.g., 2-of-3,
3-of-5).

By distributing signing authority, a multisig ensures that the compromise of a single private key is insufficient to
authorize the movement of funds or execute a privileged action.

## General Rules

### Thresholds & Configuration

- Minimum of 3 signers
- 50% signing threshold
- 7+ signers for multisigs holding 1M+ in assets (USD equivalent)
- Please see Classification Matrix in
  [Planning & Classification](/multisig-for-protocols/planning-and-classification#step-3-classification-matrix)
  for more information on threshold selection.
- All signers must use hardware wallets
- Multisigs managing assets on behalf of a DAO should set unlimited allowance with primary DAO agent
- Signers on multisigs with critical protocol configuration or security roles are discouraged from using their
addresses for other purposes. They should create a brand new wallet for that purpose instead.
- All signing wallets should be monitored for any activity that is not directly related to multi-sig operations.
- No multisigs should use modules/guards except those mentioned in
[Setup & Configuration → Modules & Guards](/multisig-for-protocols/setup-and-configuration#modules--guards)
unless clear justification and security review is provided
- Threshold exceptions can be made for multisigs that are used in frequent operations but are highly constrained
by smart contracts. For example, rate setting operations with tight bounds and a backup recovery mechanism to
replace the multisig.

#### Threshold Selection

Avoid `N-of-N` schemes, as the loss of a single key would result in a permanent loss of access to all funds.

#### Strategic Signer Distribution

The security of a multisig depends entirely on the operational security (OpSec) of its individual signer keys. Storing
multiple signer keys on the same device or in the same physical location negates the security benefits. Effective
distribution strategies include:

- Using different hardware wallet models and manufacturers.
- Maintaining geographical separation for devices holding signer keys.
- Assigning signer keys to different trusted individuals within an organization.
- Using diverse client software to interact with the multisig to mitigate single-point-of-failure risks from a software
vulnerability.

#### Signer Composition Requirements

- **Role Diversity**: Signers should be diverse individuals to reduce risk of multiple compromised accounts - a
mix of executives, developers, and operational roles is recommended
- **Technical Expertise**: Include a high number of competent, well-vetted technical signers that will understand full
transaction details and effects in your signing quorum
- **External Parties**: Multi-sigs managing high value wallets and contracts should have at least 1 additional required
signer that is external to the organization (such as a security partner or trusted advisor)

### Communication & Documentation

- In the event of loss of access to keys or potential compromise of keys or communication channels, the signer must
  immediately notify the other multisig participants and email your security contact - [Incident
  Reporting](/multisig-for-protocols/incident-reporting)
- Signers should use dedicated communication channels for multisig operations and maintain backup ways of reaching other
  signers
- All multisigs should be documented in the protocol documenting its purpose, general operating rules, multisig wallet
  address, and list of signer addresses
- Signers should verify their addresses by signing a message stating their affiliation and the multisig they intend to
  join (entity affiliation is ok)

#### Out-of-Band Verification for Admin Changes

Any critical administrative action, such as adding or replacing a signer, must be verified through multiple, independent
communication channels (e.g., a video call and a signed message) to prevent social engineering attacks.

### Signer rotation

- Signers can be rotated, but detailed documentation should be maintained
- Any changes to signer composition should be documented in the protocol documentation
- Any signer change should not reduce the number of signers or decrease the threshold unless clear justification is
  given and documented

#### Updating signer addresses

If the original key is accessible:

- The signer proves ownership of a new address by signing a message with their existing address.
- The signer must follow the steps in
[Signer Verification process](/multisig-for-protocols/registration-and-documentation#signer-verification-process)

If the original key is lost:

- The signer must verify their identity to the other signers through alternative methods such as:
  - Authentication via a verified social media account.
  - A video call with other signers for confirmation.
  - Other sufficient methods.

### Training & Drills

- All signers should complete training as outlined in the
[Implementation Checklist](/multisig-for-protocols/implementation-checklist)
- For multisigs that perform emergency operations like pausing, teams should have processes to regularly conduct drills
  to ensure operational readiness and signer availability

## Setup Best Practices

See General Rules above for thresholds and signer distribution guidance.

- **Practice on Testnet:** Before deploying on mainnet, thoroughly practice wallet creation, transaction signing, and
owner management on a test network.

- **Timelocks:** Enforce a mandatory delay between the approval of a transaction and its execution. This provides a
critical window for the community or team to detect and react to malicious proposals.

- **Veto Quorum:** Establish a smaller veto group separate from the confirmation quorum to review and confirm
transaction legitimacy. Organizations can establish veto quorums to bypass time-locks in case of emergency.
The standard quorum plus two additional signers should be required to bypass.

- **Role-Based Access Control (RBAC):** Implement modules that grant specific, limited permissions to certain addresses
(e.g., a "pauser" or "executor" role) without making them full owners, adhering to the principle of least privilege.

- **Disaster Recovery Plan:** Establish a clear, documented process for what to do when a signer is compromised, the
multi-signature UI is down, or other emergencies arise. These should be done at regular intervals.

## Operational Best Practices

- **Signer Key Revocation and Replacement:** A  feature of multisigs is the ability to add, remove, or replace signer
keys. If a signer's key is compromised or lost, it can be revoked and replaced with a new, secure key through a
transaction approved by the remaining owners, preserving the integrity of the wallet's assets without needing to migrate
funds.

- **Secure Signing Environment:** For maximum security, all signing activities should be performed on a dedicated,
air-gapped, or hardened device running a secure OS. Using a primary work laptop significantly increases the risk of
malware interference.

- **Independent Transaction Verification:**  Before signing, always verify the raw transaction data (target address,
function call, parameters) to ensure it matches the intended operation.

- **Out-of-Band Verification for Admin Changes:** Any critical administrative action, such as adding or replacing a
signer, must be verified through multiple, independent communication channels (e.g., a video call and a signed message)
to prevent social engineering attacks.

- **Active Monitoring:** Implement monitoring and alerting systems to be immediately notified of any on-chain activity
related to the multisig, including proposed transactions, new signatures, and owner changes (e.g., using tools like
[Safe Watcher](https://github.com/Gearbox-protocol/safe-watcher) ).

- **Documented Procedures:** Maintain clear, secure, and accessible documentation for all multisig procedures, including
  transaction creation, signing, and emergency recovery plans.
- **General Signing Guidelines:** Use hardware wallets, dedicated signing profiles, and re-verify before execution.
  Require a "how to check" guide and communicate status after signing (e.g., "checked, signed, X more required"). Last
  signer executes when applicable.

## Contract-Level Security

- **Invariant Enforcement:** Design contracts to enforce invariants and expected state changes such as token balance
changes, ownership and administration, and proxy implementation addresses. Ensure contracts automatically revert
transactions if any invariant is violated.

- **Address Whitelisting:** Approved smart contract and wallet addresses must be added to a whitelist that is enforced
at the contract-level. Interactions with all other addresses should be denied and revert the transaction. Updating the
whitelist should require an extra signer in addition to the standard transaction approval quorum.

For detailed configuration guidance, see
[Setup & Configuration → Contract-Level Controls](/multisig-for-protocols/setup-and-configuration#contract-level-controls).

## Acknowledgements

Some ideas were borrowed from the [EF's multisig SOP notes](https://notes.ethereum.org/@fredrik/multisig-sop) and
[Manifold Finance multisig best practices](https://hackmd.io/@manifoldx/multisig-best-practices).

---

---

### PAGE: /treasury-operations/transaction-verification
**Title:** Treasury Transaction Verification | SEAL
**Referenced by controls:** tro-1.1.2, tro-1.1.3, tro-2.1.2, tro-3.1.1, tro-4.1.1, tro-4.1.2, tro-6.1.2, tro-8.1.1, tro-8.1.2

TagList,
  AttributionList,
  TagProvider,
  TagFilter,
  ContributeFooter,
} from "../../../components";




# Guide: Large Cryptocurrency Transfers




## Core Principles

Large cryptocurrency transfers require rigorous verification because transactions are irreversible. This guide covers
both receiving and sending significant amounts, with security measures scaling to transfer size.

## Part 1: Receiving Large Transfers

### Pre-Transfer Setup (48 Hours Before)

#### Choose Appropriate Deposit Address

The address strategy depends on your custody model:

**For Institutional Custody** (Coinbase, Anchorage, BitGo):

- **Always generate a fresh deposit address** for large incoming transfers
- **Verify you're on the correct website** - check URL carefully, bookmark the official site, watch for phishing lookalikes
- Use the platform's "offline deposit address" or "new address" function
- **Why fresh addresses?** Prevents counterparties from viewing your entire treasury balance/history and isolates each
  major transfer for clean audit trails

**For Self-Custody Multisigs**:

- **Use your established, proven multisig address** that has been successfully tested in prior transactions
- **Never generate a fresh multisig for large transfers** - multisig setup is complex and a new deployment risks misconfiguration
- The battle-tested multisig you've been using is safer than a newly created one
- Document the multisig configuration: threshold (e.g., 3-of-5), signer addresses, and deployment transaction
- Verify multisig configuration on block explorer before providing address to sender

#### Address Verification Protocol

Have 2-3 team members independently verify the address:

```
1. Retrieve address from custody platform or multisig interface
2. Person A: Verify via custody UI or block explorer (multisig configuration)
3. Person B: Independently verify via separate block explorer or multisig interface
4. Perform checksum validation:
   - Ethereum: EIP-55 checksum
   - Bitcoin: Bech32 checksum
5. For multisigs: Verify threshold and signer configuration match expected setup
```

**For transfers >$1M**: Require all verifiers to sign a document confirming they verified the address character-by-character.

#### Bidirectional Test Transaction

This should occur **24-48 hours before the main transfer**.

**Phase 1: Sender → You (Incoming Test): **

```
1. Sender sends small amount (0.001 ETH or 0.0001 BTC) to your new address
2. Verify receipt through multiple sources:
   - Custody platform interface
   - Primary block explorer (Etherscan, Blockchain.com)
   - Secondary block explorer (redundancy check)
3. Document transaction hash and confirmation time
```

**Phase 2: You → Sender (Outgoing Test): **

```
4. Send test amount BACK to another address you control
5. You confirm you received the return transaction
```

**Why bidirectional?** Proves address can both receive AND withdraw funds before large transfer arrives, and confirms
both parties control their stated addresses.

#### Coordinate with Sender

Provide via encrypted channel (PGP email or Signal):

- Deposit address
- Network specification (Ethereum mainnet chain ID 1, Bitcoin mainnet)
- Test transaction hash (incoming only)
- Video call scheduled time for live transfer

Request from sender:

- Source wallet addresses they'll send from
- Approximate transfer timing: specific date and time window
  - Example: "Tuesday, March 15th, 2:00-6:00 PM EST"
  - This allows you to have all required personnel available and monitoring
- Whether they'll use single or multiple transactions

**Best practices for transaction splitting:**

- **\<$10M**: Single transaction preferred (simpler, one confirmation cycle, cleaner records)
- **\>$10M**: Consider 2-3 separate transactions (reduces single-transaction risk, allows staged confirmation, provides
  pause points to verify each step)
- **\>$50M**: Multiple transactions strongly recommended with 30-minute intervals between each
**Anti-Duress Protocols:**

Since kidnapping and other forms of duress have been employed by criminals to steal cryptocurrency, organizations should
prepare for this. Establish a duress word that indicates a transfer is not being made of your own free will. Once the
duress word is mentioned during an exchange involving the transfer, law enforcement will be contacted and the
transaction not processed. Procedures should be put in place with concrete run books for these situations. Safe words
should not appear in run books or any digital format.
**Anti-Social-Engineering Protocols:**

Establish code phrase during initial verified meeting. Use this phrase to authenticate any address changes or unusual
requests. Example: "What was the name of the restaurant where we finalized the agreement?" Exchange secondary contact
numbers for key personnel - if primary contact requests changes, call secondary to confirm. Maintain out-of-band
verification: if request comes via email, confirm via phone.

**Red flags that should trigger immediate verification:**

- Urgent requests to bypass procedures or claims of "emergency"
- Requests to send to "temporary" or "new" address without proper verification
- Pressure to skip test transactions or any rushed requests

If anything feels wrong, STOP and verify through multiple channels. Urgency is an attacker's favorite tool - legitimate
counterparties will understand security delays.

### Day of Transfer

#### Pre-Transfer Video Verification (30 minutes prior to transfer)

Require video call with minimum 2 _internal_ people present.

**Liveness and identity verification** (prevents AI deepfakes):

```
1. Ask participant to hold up specific number of fingers (change unpredictably)
2. Ask them to wave their hand in front of their face
3. Request they state current date and time
4. Reference specific details from previous conversations only real participant would know
5. If anything seems off, halt the transfer and investigate
```

**Critical confirmations during call:**

1. **Address Reconfirmation**

   - Read deposit address character-by-character from your screen
   - Sender confirms they see identical address on their screen
   - **Critical: "Read ONLY from your custody platform or multisig interface (Safe, Zodiac, etc.)"**
   - **Do NOT copy from email, Etherscan, any block explorer, or any intermediary source**
   - **Only trust the address shown directly in your custody interface or multisig platform**
   - For multisigs: State the configuration (e.g., "3-of-5 multisig at address 0x...")
   - This prevents compromised email, address poisoning, and man-in-the-middle attacks from causing misdirection

2. **Test Transaction Review**

   - Display test transaction on block explorer during call
   - Confirm sender sees same transaction hash
   - Review the bidirectional test from 24-48 hours ago

3. **Amount and Network**
   - State total amount in native units and USD equivalent
   - Confirm network explicitly: "Ethereum mainnet, chain ID 1" (not testnet, not L2)
   - If ERC-20 tokens: State token name AND read out full contract address
     - Example: "Sending 100,000 USDC, contract address 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
     - Verify contract address against official source (token website, CoinGecko) on call
   - Confirm no mistakes in decimal places or token contract

#### Live Monitoring

**Understanding Blockchain Finality:**

Wait for enough confirmations that a chain reorganization becomes economically infeasible or cryptographically impossible.

**Monitoring phases:**

```
1. Transaction Broadcast: Appears in mempool, verify correct parameters
2. First Confirmation: Included in a block
3. Progressive Confirmations: Each block makes reversal exponentially harder
4. Finality: Sufficient confirmations reached, transaction irreversible
```

**Confirmation requirements by chain:**

- **Ethereum**: 2 epochs (~12.8 minutes)
- **Bitcoin**: 6 confirmations (~60 minutes)
- **Polygon**: 128 confirmations (~5 minutes)
- **Solana**: ~12.8 seconds

**On-call updates from Technical Operator:**

- "Transaction in mempool, parameters correct"
- "Block 1 confirmed, no anomalies"
- "Block 12 confirmed, [X.XXX] ETH received and final"

#### Dual Confirmation Requirement

Before ending call, verify through TWO sources:

1. Custody platform showing updated balance
2. Block explorer showing confirmed transaction

#### Post-Receipt Actions

**Immediate (within 15 min):**

- Document transaction hash, block number, timestamp
- Record amount in native units and USD equivalent
- Note all personnel involved

**Within 30 minutes:**

- Email confirmation to sender with transaction details

## Part 2: Sending Large Cryptocurrency Transfers

### Pre-Transfer Planning (72 Hours Before)

#### Authorization

Document and obtain approvals:

- Purpose of transfer
- Recipient verification
- Amount and timeline
- Required signatures based on amount:
  - \<$100K: Treasury Manager
  - $100K-$1M: CFO + Security Officer
  - \>$1M: CFO + CEO

#### Recipient Address Verification

Multi-source verification is critical:

```
STEP 1: Receive address through official channel
├─> Request via verified email/signed contract

STEP 2: Independent verification through multiple sources (e.g., email, phone call)
├─> At least two team members independently confirm the recipient address using different communication channels (such as verified email and a direct phone call with the recipient)

STEP 3: Mandatory test transaction
├─> Send $10-100 equivalent first
├─> Wait for recipient confirmation
├─> Recipient provides test transaction hash
├─> Verify hash matches your outbound transaction
└─> Proves recipient controls address and communications secure
```

**Never skip the test transaction.**

#### Whitelist Addition (If Using Custody Platform)

Most custody platforms support whitelisting:

```
1. Submit whitelist request with justification
2. Wait mandatory cooling-off period:
   - Standard: 24-48 hours
   - High security: 72 hours
3. Different team member approves whitelist addition
4. Test transaction AFTER whitelist approval
```

**Why cooling-off periods?** Prevents attackers who gain account access from immediately adding malicious addresses and
draining funds. Gives time for legitimate personnel to notice unauthorized changes.

### Day of Transfer

#### Final Verification Checklist (15 min before)

Minimum 2 _internal_ people present, verify:

```
□ Authorization documentation signed
□ Recipient address verified by 2 independent sources
□ Test transaction confirmed successful by recipient
□ Whitelist cooling-off period complete (if applicable)
□ Exact amount confirmed (recipient expects this amount)
□ Network confirmed (mainnet, not testnet)
□ Sufficient balance in source wallet (amount + fees + buffer)
□ All required approvers available next 60 minutes
```

**For transfers \>$1M**: Conduct formal video call with all approvers present.

#### Execution Protocol

**Video Call Requirements**:

```
1. Screen share custody interface or wallet
2. Primary operator reads transaction parameters aloud:
   - "Sending [X.XXXXX] ETH"
   - "To address: 0x[read full address character-by-character]"
   - "On network: Ethereum mainnet, chain ID 1"

3. Each approver independently verifies on their device:
   - Destination matches authorized recipient
   - Amount matches approved transfer
   - Network is correct

4. Approvers use MFA to approve:
   - Hardware security key, biometric, or authenticator app
   - For multisigs: Each signer verifies transaction details on their signing device
   - Verbally confirm: "I approve this transaction"

5. Final approval triggers broadcast to blockchain
```

#### Post-Submission Monitoring

Monitor transaction through finality:

```
1. Copy transaction hash from custody platform
2. Enter into block explorer immediately
3. Verify parameters match intended transaction
4. Monitor confirmation progress:
   - Ethereum: Wait for 12 confirmations (~3 minutes)
   - Bitcoin: Wait for 6 confirmations (~60 minutes)
5. Watch for recipient confirmation of receipt
```

#### Confirmation and Documentation

After transaction reaches finality:

```
1. Internal record (within 15 min):
   - Transaction hash and block number
   - Timestamp and confirmation count
   - Source wallet balance updated in records

2. Request receipt from recipient (within 30 min):
   - Formal acknowledgment they received funds

3. Permanent documentation:
   - Full transaction details (hash, block, timestamp, amount)
   - Authorization chain (who approved, when)
   - Personnel involved
```

---

## Multi-Signature Best Practices

See the Multisigs for Protocols guide.

# TODO: Add link to Multisigs for Protocols guide. AFTER IT IS MERGED

## Critical Risk Mitigations

### Address Verification

**Multisig and custody interface verification:**

- Always verify addresses directly from your custody platform or multisig interface (Safe, Zodiac, etc.)
- For multisigs: Cross-check configuration (threshold, signers) on block explorer
- Never trust copy-pasted addresses from email or chat
- Verify entire address character-by-character

**Address poisoning defense:**

- Never copy from transaction history
- Always copy from authoritative source
- Use custody platform address books when available

### Communication Security

**Email compromise prevention:**

- Address confirmation during video call prevents MITM
- Live verbal verification catches discrepancies
- Code phrases for authentication

**Social engineering defense:**

- Never accept urgent bypass requests
- Callback on known numbers to verify
- Any request to skip verification triggers security review

### Multi-Party Controls

**Prevents single-actor fraud:**

- Multiple personnel
- Video recording of approvals
- Separation of duties: requester ≠ approver ≠ technical executor

### Transaction Parameter Security

**Custody platform policy engines:**


[... truncated ...]

---

### PAGE: /multisig-for-protocols/implementation-checklist
**Title:** Multisig Implementation Checklist | SEAL
**Referenced by controls:** tro-1.1.3, tro-4.1.3, tro-5.1.2, tro-7.1.2

# Implementation Checklist




This checklist ensures all multisig participants have the knowledge and skills necessary for secure operations. Complete
all applicable sections before beginning multisig operations.

## For Multisig Administrators

### Planning & Setup

- [ ] I have classified my multisig using the impact and operational framework from [Planning & Classification](/multisig-for-protocols/planning-and-classification)
- [ ] I have selected appropriate thresholds based on the classification guidance
- [ ] I have identified and verified all signers for the multisig
- [ ] I have deployed the multisig with correct configuration
- [ ] I have set up required modules (eg. allowance module to rescue assets)

### Documentation & Communication

- [ ] I have classified and documented the new multisig using templates from [Registration & Documentation](/multisig-for-protocols/registration-and-documentation)
- [ ] I have set up primary and backup communication channels per [Communication Setup](/multisig-for-protocols/communication-setup)
- [ ] I have tested emergency notification procedures
- [ ] I have documented emergency contact information

### Ongoing Management

- [ ] I have established procedures for regular reviews and updates per [Registration & Documentation](/multisig-for-protocols/registration-and-documentation)
- [ ] I have set up backup infrastructure and tested alternative UIs per [Backup Signing & Infrastructure](/multisig-for-protocols/backup-signing-and-infrastructure)
- [ ] I have verified all signers have completed training requirements
- [ ] I understand signer rotation procedures for my multisig type

## For Signers

### Hardware & Security Setup

- [ ] I have purchased recommended hardware wallet from authorized source per [Hardware Wallet Setup](/wallet-security/intermediates-&-medium-funds)
- [ ] I have set up my hardware wallet with proper firmware and PIN
- [ ] I have created and tested backup hardware wallet with same seed
- [ ] I have stored my seed phrase securely using approved methods from [Seed Phrase Management](/wallet-security/seed-phrase-management)
- [ ] I have created dedicated accounts for each multisig I'm signing for

### Operational Readiness

- [ ] I have joined multisig communication channels (primary and backup) per [Communication Setup](/multisig-for-protocols/communication-setup)
- [ ] I have verified my signer address using the required signature process from [Joining a Multisig](/multisig-for-protocols/joining-a-multisig)
- [ ] I understand my multisig's classification and response time requirements
- [ ] I have completed a test transaction with the multisig team

### Transaction Verification

- [ ] I can use approved verification tools (Safe CLI Utils, OpenZeppelin SafeUtils for EVM) from [Tools & Resources →
  Transaction Verification](/wallet-security/tools-&-resources#transaction-verification)
- [ ] I understand how to verify transaction hashes before signing
- [ ] I can decode and verify transaction details (amounts, recipients, contract calls)
- [ ] I have practiced verifying both simple transfers and complex transactions

### Emergency Preparedness

- [ ] I have downloaded backup UIs (Eternal Safe for EVM, Squads public client for Solana) per [Backup Signing & Infrastructure](/multisig-for-protocols/backup-signing-and-infrastructure)
- [ ] I know how to sign transactions when primary UI is down per [Backup Signing & Infrastructure](/multisig-for-protocols/backup-signing-and-infrastructure)
- [ ] I understand emergency procedures for key compromise and communication failures per [Emergency Procedures](/multisig-for-protocols/emergency-procedures)
- [ ] I have tested backup communication methods with my team
- [ ] I know who to contact for security incidents and emergencies per [Incident Reporting](/multisig-for-protocols/incident-reporting)

### Personal Security

- [ ] I have enabled 2FA on all accounts with approved methods (YubiKey preferred) per [Personal Security (OpSec)](/multisig-for-protocols/personal-security-opsec)
- [ ] I use dedicated devices or accounts for multisig operations when required
- [ ] I have implemented travel security procedures appropriate for my risk level
- [ ] I understand incident reporting procedures for security concerns

### Compliance

- [ ] I have read and understand all sections of this security framework
- [ ] I understand my specific role requirements based on multisig classification
- [ ] I know how to properly offboard when leaving a multisig role per [Offboarding](/multisig-for-protocols/offboarding)
- [ ] I commit to following these security procedures and reporting any deviations

## Specialized Training by Use Case

### Emergency Response Multisigs

Additional requirements from [Use Case Specific Requirements](/multisig-for-protocols/use-case-specific-requirements):

- [ ] I understand 24/7 availability requirements
- [ ] I have participated in emergency simulation drills
- [ ] I know how to respond to emergency paging
- [ ] I understand streamlined verification procedures for emergencies

### Treasury Multisigs

- [ ] I understand allowance module configuration and purpose
- [ ] I know governance rescue procedures
- [ ] I understand financial reporting requirements

### Smart Contract Control Multisigs

- [ ] I understand timelock configuration per [Use Case Specific Requirements → Timelock Configuration](/multisig-for-protocols/use-case-specific-requirements#timelock-configuration)
- [ ] I know how to verify staged transactions
- [ ] I understand higher threshold requirements for upgrades

## Practical Skills Assessment

### Transaction Verification (EVM)

- [ ] I can successfully verify a Safe transaction hash using CLI tools
- [ ] I can decode transaction calldata and identify recipients and amounts
- [ ] I can identify risky transaction types and warnings
- [ ] I can verify nested Safe transactions if applicable

### Transaction Verification (Solana)

- [ ] I can analyze Solana transaction instruction data
- [ ] I can convert hex values to decimal for amount verification
- [ ] I can identify different transaction types (SOL transfer, token transfer, config changes)

### Emergency Procedures

- [ ] I can access backup UIs and complete a transaction
- [ ] I can contact team via backup communication channels
- [ ] I know how to report key compromise immediately
- [ ] I can execute identity verification procedures if needed

### Tool Proficiency

- [ ] I am comfortable using my hardware wallet for signing
- [ ] I can navigate backup block explorers
- [ ] I can use alternative RPC endpoints
- [ ] I understand how to manually simulate transactions

## Documentation Review

### Required Reading Completed

- [ ] [Secure Multisig Best Practices](/wallet-security/secure-multisig-best-practices) - Core requirements for all multisigs
- [ ] [Hardware Wallet Setup](/wallet-security/intermediates-&-medium-funds) - Device security requirements
- [ ] [Seed Phrase Management](/wallet-security/seed-phrase-management) - Key protection procedures
- [ ] [Safe Multisig: Step-by-Step
Verification](/wallet-security/signing-and-verification/secure-multisig-safe-verification) - Signing procedures
- [ ] [Emergency Procedures](/multisig-for-protocols/emergency-procedures) - Crisis response protocols
- [ ] [Personal Security (OpSec)](/multisig-for-protocols/personal-security-opsec) - Account and device security

### Role-Specific Documentation

**For Administrators:**

- [ ] [Planning & Classification](/multisig-for-protocols/planning-and-classification)
- [ ] [Setup & Configuration](/multisig-for-protocols/setup-and-configuration)
- [ ] [Registration & Documentation](/multisig-for-protocols/registration-and-documentation)
- [ ] [Communication Setup](/multisig-for-protocols/communication-setup)
- [ ] [Registration & Documentation](/multisig-for-protocols/registration-and-documentation)

**For Specialized Use Cases:**

- [ ] [Use Case Specific Requirements](/multisig-for-protocols/use-case-specific-requirements)
- [ ] [Backup Signing & Infrastructure](/multisig-for-protocols/backup-signing-and-infrastructure)
- [ ] [Use Case Specific Requirements → Timelock Configuration](/multisig-for-protocols/use-case-specific-requirements#timelock-configuration)
  (if applicable)

## Certification and Acknowledgment

### Training Completion

- [ ] I have completed all applicable training requirements
- [ ] I have successfully demonstrated practical skills
- [ ] I understand the security implications of my role
- [ ] I acknowledge my responsibilities as a multisig participant

### Ongoing Commitment

- [ ] I commit to following all security procedures outlined in this framework
- [ ] I will report any security incidents or concerns promptly
- [ ] I will participate in regular training updates and refreshers
- [ ] I will maintain the required level of security for my role

### Trainer Verification (if applicable)

**For organizations requiring formal training:**

Trainer: _________________ Date: _________________

Trainee has demonstrated competency in:

- [ ] Transaction verification procedures
- [ ] Emergency response protocols
- [ ] Security best practices
- [ ] Role-specific requirements

**Signature:** _________________

## Refresher Training Schedule

### Regular Updates

- **Monthly**: Review emergency procedures and contact information
- **Quarterly**: Practice backup system usage and emergency drills
- **Annually**: Complete full framework review and updates
- **As needed**: Training on new tools, procedures, or threats

### Trigger Events

Additional training required after:

- Framework updates or changes
- Security incidents affecting the team
- New tool adoption
- Role changes or additional responsibilities

## Related Documents

All documents in this framework serve as training materials. Refer to individual documents for detailed procedures and
requirements specific to your role.

---

### PAGE: /multisig-for-protocols/setup-and-configuration
**Title:** Multisig Setup & Configuration | SEAL
**Referenced by controls:** tro-1.1.4

# Setup & Configuration




This page covers the technical deployment and configuration of multisigs on supported networks.

## Basic Setup

### EVM Networks (Ethereum, Base, etc.)

1. Go to [https://app.safe.global](https://app.safe.global)
2. Connect wallet of the deploying signer
3. Create new Safe with your determined threshold and signer addresses
4. **Multi-network deployment**: If deploying on multiple networks, Safe UI will offer to replicate the configuration

### Solana

1. Go to [https://squads.xyz/squads-multisig](https://squads.xyz/squads-multisig)
2. Connect wallet of the deploying signer
3. Create new multisig with your determined threshold and signer addresses

## Self-Hosted Multisig UI

Multi-sig coordination UIs should be self-hosted to eliminate supply chain risk. Hosted UI should be IP restricted to
allow access only from signer machines.

Deploy from [Safe Wallet Monorepo](https://github.com/safe-global/safe-wallet-monorepo/tree/dev/apps/web).
While it should not be your final line of defense, securing the UI does protect your verification process
from being compromised by supply-chain attacks.

For emergency situations when the primary UI is unavailable, see
[Backup Signing & Infrastructure](/multisig-for-protocols/backup-signing-and-infrastructure).

## Delegated Proposer

It is recommended, but not required to authorize a separate transaction proposer for a Safe. This address can prepare
transactions for signers to sign but is not an authorized signer on the Safe. Therefore **there is no risk of malicious
signatures which can affect the Safe assets**. This wallet can hold no funds and simply act as a proposer. The primary
reason to have a delegated proposer is that the hash verification utilities depend on the Safe API (unless details are
entered manually). Until a transaction is **proposed** it does not show up in the API so the hash verification tools
cannot detect it.

![Delegated proposer configuration interface](https://frameworks-static.s3.us-east-2.amazonaws.com/images/multisig-for-protocols/delegated-proposer-configuration-interface.png)

## Modules & Guards

### Allowance Module (Required for Treasury Multisigs)

If your multisig will hold any assets on behalf of the DAO, set up governance rescue capability:

**Mainnet configuration:**

- **Module**: Allowance Module
- **Grant allowance to**: DAO Agent
- **Amount**: Max value for each token held

### Zodiac Delay Modifier (Time-Locks)

Consider using [Zodiac Modifier Delay](https://github.com/gnosisguild/zodiac-modifier-delay/tree/main) or equivalent
for implementing on-chain time-lock transaction delays to Safe wallets.

See [Use Case Specific Requirements](/multisig-for-protocols/use-case-specific-requirements#timelock-configuration)
for detailed timelock configuration guidance.

### Other Modules

Do not install any other modules or guards without explicit governance approval and security review.

## Contract-Level Controls

**Advanced Configuration Warning:** The following contract-level controls are advanced security features that can
provide additional protection but require careful implementation. Before implementing any guards or modules:

- **Conduct thorough research** on available guard implementations and their compatibility with your multisig setup
- **Ensure all guards are well-audited** by reputable security firms before deployment
- **Test extensively** on testnets to verify functionality and edge cases
- **Understand the risks**: Incorrect configuration or incompatible guards can render your multisig unusable,
potentially locking access to funds permanently

### Address Whitelisting

Approved smart contract and wallet addresses must be added to a whitelist that is enforced at the contract-level.
Interactions with all other addresses should be denied and revert the transaction. Updating the whitelist should
require an extra signer in addition to the standard transaction approval quorum.

### Invariant Enforcement

Design contracts to enforce invariants and expected state changes such as token balance changes, ownership and
administration, and proxy implementation addresses. Ensure contracts automatically revert transactions if any
invariant is violated.

## Initial Testing

### Verify Basic Functionality

1. **Small test transaction**: Send a low-value token transfer (e.g., 1 USDS or equivalent)
2. **All signers test**: Ensure each signer can successfully sign the test transaction
3. **Confirm execution**: Verify the transaction executes as expected
4. **Test communication**: Use your established channels to coordinate the test

## Pre-Launch Checklist

- [ ] Safe deployed with correct threshold
- [ ] All signer addresses added and [verified](/multisig-for-protocols/registration-and-documentation#signer-verification-process)
- [ ] Allowance module configured (if required)
- [ ] Test transaction completed successfully
- [ ] All signers confirmed they can sign
- [ ] [Communication channels](/multisig-for-protocols/communication-setup) tested during transaction
- [ ] Safe addresses documented for all networks

### Practice on Testnet

Before deploying on mainnet, thoroughly practice wallet creation, transaction signing, and owner management on
a test network.

Once setup is complete, proceed to [Registration &
Documentation](/multisig-for-protocols/registration-and-documentation) for registration and documentation requirements.

## Nested Safes

A nested Safe is one in which a Safe is set as a signer on another Safe rather than an EOA. This can be useful on a
case-by-case basis. For example, if a signer is an entity that might want to have multiple individual signers, the
nested Safe could have a 1/X threshold allowing anyone authorized on the team to sign. However, this configuration
allows the signers on the nested Safe to update the signer addresses without needing authorization from the main Safe.

It is generally recommended **not** to use nested safe on protocol multisigs unless there is a specific use case that
it enables.

## Next Steps

After completing setup:

1. [Registration & Documentation](/multisig-for-protocols/registration-and-documentation) - Document your multisig
2. [Communication Setup](/multisig-for-protocols/communication-setup) - Establish secure communication
3. [Hardware Wallet Setup](/wallet-security/intermediates-&-medium-funds) - Ensure all signers are properly configured

## Active Monitoring

Implement monitoring and alerting systems to be immediately notified of any on-chain activity related to the multisig,
including proposed transactions, new signatures, and owner changes (e.g., using tools like [Safe
Watcher](https://github.com/Gearbox-protocol/safe-watcher)).

### Immutable Monitoring Channels

Monitoring channels (e.g. email, Slack or Telegram chats) must be immutable (or trigger alerts when their configuration
changes or logs are deleted/tampered with) and redundant such that an admin could not disable or tamper with one
monitoring channel without generating an alert on the other channel.

---

### PAGE: /treasury-operations/classification
**Title:** Treasury Security Classification | SEAL
**Referenced by controls:** tro-2.1.1, tro-2.1.2, tro-8.1.1, tro-8.1.2

TagList,
  AttributionList,
  TagProvider,
  TagFilter,
  ContributeFooter,
} from "../../../components";




# Custodial Treasury Security: Classification Framework




Proper documentation and classification of custodial accounts is essential for institutional treasury security. This
guide focuses on the security assessment and classification framework for crypto assets held with third-party
custodians.

> See also: [Registration Documents](./registration-documents) and [Enhanced Controls for High-Risk Accounts](./enhanced-controls)

## Classification Process

Use this dual classification to determine appropriate security controls for each custodial account.

### Step 1: Impact Assessment

Evaluate the consequences if this account is compromised or unavailable.

#### Financial Impact

Calculate the total value at risk in this account:

- Current market value of all assets held
- Include value of any active positions (e.g., staked assets, DeFi deposits)
- What is the financial impact if unavailable for 7 days?

#### Operational Impact

Assess the consequences if this account becomes unavailable:

- What specific operations require this account?
- Do you have a secondary custody account that can handle these operations?
- What is the reputational impact if this account is compromised or unavailable?

#### Regulatory Impact

Evaluate regulatory and compliance consequences:

- Are assets in this account subject to regulatory reporting requirements (SEC filings, audit requirements)?
- Does this account hold regulated assets (e.g., stablecoins subject to reserves reporting)?
- What are the regulatory deadlines that could be missed if this account is unavailable?

#### Impact Classification

| Level        | Financial Exposure (% of Total Assets) | Operational Dependency                       | Regulatory Impact                                    |
| ------------ | -------------------------------------- | -------------------------------------------- | ---------------------------------------------------- |
| **Low**      | \<1%                                   | No critical operations depend on it          | No regulatory reporting tied to this account         |
| **Medium**   | 1% - 10%                               | Important but alternative funding available  | Periodic reporting; delays manageable                |
| **High**     | 10% - 25%                              | Critical operations, limited alternatives    | Regular regulatory filings; delays cause violations  |
| **Critical** | \>25%                                  | Business-critical, no alternatives for weeks | Real-time reporting requirements; SEC filings; audit |

### Step 2: Operational Assessment

Evaluate how frequently and urgently this account must be accessed.

#### Transaction Frequency

Document typical transaction patterns:

- Transactions per month
- Typical transaction sizes
- Predictability of transaction timing

#### Access Urgency

Define response time requirements:

- What is the maximum acceptable delay for routine transactions?
- Are there scenarios requiring same-day execution?
- What are the consequences of 24-hour, 72-hour, or 7-day delays?

#### Coordination Requirements

Assess how transactions are executed:

- How many approvers are needed for typical transactions?
- Are transactions handled manually or through automated systems?
- Do approvers need to coordinate across timezones?

Note: Single-approver configurations should only be used for low-value operational accounts (\<0.1%) with additional
compensating controls like strict spending limits and daily reconciliation.

#### Operational Classification

| Type                  | Frequency     | Response Window | Example Use Cases                                  |
| --------------------- | ------------- | --------------- | -------------------------------------------------- |
| **Cold Vault**        | \<5 tx/month  | 48-72 hours     | Long-term reserves, infrequent rebalancing         |
| **Warm Storage**      | 5-50 tx/month | 4-24 hours      | Scheduled payments, planned operations             |
| **Active Operations** | \>50 tx/month | \<4 hours       | Trading capital, frequent operational expenses     |
| **Time-Critical**     | Unpredictable | \<2 hours       | Collateral management, market-sensitive operations |

### Step 3: Security Control Matrix

Combine impact and operational assessments to determine required controls.

| Use Case | Impact | Operational | Approvers | MFA Requirement | Whitelist Delay | Additional Controls |
| --- | --- | --- | --- | --- | --- | --- |
| Payments | Low | Active Ops | 2 | Standard TOTP | 6 hours | **Baseline (all accounts):** Dedicated devices for custody access, address whitelisting enabled, test small amount to new addresses before full transaction, transaction simulation. **Low-specific:** Per-transaction cap, monthly aggregate limit |
| Operational Wallet | Medium | Active Ops | 2 | Hardware required | 12 hours | All Low controls + daily transaction caps, weekly reconciliation, monthly audit |
| Liquidation Protection | Medium-High | Time-Critical | 2 | Hardware required | None | All Low/Medium controls + automated alerts for position health, real-time monitoring |
| DeFi Positions | Medium-High | Warm Storage | 3 | Hardware mandatory | 24 hours | All Low/Medium controls + smart contract whitelist, position monitoring, daily reconciliation |
| Trading Capital (variable) | High | Active Ops | 3 | Hardware mandatory | 6 hours | All Low/Medium controls + smart contract whitelist, real-time monitoring, daily reconciliation |
| Active Treasury (5-10%) | High | Warm Storage | 3-4 | Hardware mandatory | 24 hours | All Low/Medium controls + transaction velocity limits, SIEM monitoring, multi-channel confirmation |
| Secondary Reserve (10-25%) | Critical | Cold Vault | 4-5 | Hardware mandatory | 48 hours | All Low/Medium/High controls + geographic distribution of approvers, MPC recommended |
| Primary Reserve (>25% assets) | Critical | Cold Vault | 5-7 | Hardware mandatory | 72 hours | All Low/Medium/High controls + geographic distribution of approvers, MPC recommended |

### Step 4: Document Your Decision

- Record impact level and operational type with justification
- Capture approver thresholds and required controls
- Store links to relevant custody accounts and addresses

Proceed to: [Registration Documents](./registration-documents)

For Critical/High accounts, ensure you also review: [Enhanced Controls for High-Risk Accounts](./enhanced-controls)

---

### PAGE: /treasury-operations/registration-documents
**Title:** Custodial Account Registration | SEAL
**Referenced by controls:** tro-3.1.1, tro-3.1.3

TagList,
  AttributionList,
  TagProvider,
  TagFilter,
  ContributeFooter,
} from "../../../components";




# Registration Documents




Use these standardized templates to register custodial accounts, track access changes, document security configurations,
and perform quarterly reviews.

> See also: [Classification Framework](./classification) and [Enhanced Controls for High-Risk Accounts](./enhanced-controls)

---

## Registration Template

Use this template when initially documenting a custodial account.

```
CUSTODIAL ACCOUNT REGISTRATION

Account Name: [Descriptive name]
Custodian: [Provider name and legal entity]
Account ID: [Custodian reference number]
Network(s): [Bitcoin, Ethereum, etc.]
Registration Date: YYYY-MM-DD
Registered By: [Name]

CLASSIFICATION
Impact Level: [Low / Medium / High / Critical]
Operational Type: [Cold Vault / Warm Storage / Active Operations / Time-Critical]

Justification:
- Financial exposure: $XXX,XXX,XXX
- Operational dependency: [Description]
- Recovery time objective: [X hours/days]

ASSETS CONTROLLED
Asset   | Network  | Value     | Purpose
--------|----------|-----------|------------------------------
BTC     | Bitcoin  | $XXX,XXX  | [Reserve/Trading/Operations]
ETH     | Ethereum | $XXX,XXX  | [Reserve/Trading/Operations]
USDC    | Ethereum | $XXX,XXX  | [Reserve/Trading/Operations]

CUSTODY MODEL
Type: [Qualified Custodian / Co-managed / MPC Platform]
Key Management: [MPC 3-of-5 / Multi-sig 2-of-3 / HSM]
Key Control: [Custodian only / Co-managed / Client-controlled]
Recovery Capability: [Yes - describe / No]

INITIAL ACCESS SETUP
Primary Administrator: [Name, added YYYY-MM-DD]
Initial Approvers: [Names, added YYYY-MM-DD]

Note: Complete access details documented in Access Change Template
Note: Security configuration documented in Security Configuration Template

ATTESTATION
This account [meets / deviates from] security standards for its classification.

[If deviation: Explain gap and compensating controls]

CONTACTS
Security Owner: [Name, email, phone]
Backup Contact: [Name, email, phone]
Custodian Support: [Name, email, phone]

Last Updated: YYYY-MM-DD
Updated By: [Name]
```

---

## Access Change Template

Use this template when modifying user access to a custodial account.

```
CUSTODIAL ACCOUNT ACCESS CHANGE

Account Name: [Name]
Custodian: [Provider]
Account ID: [Reference]
Change Date: YYYY-MM-DD
Changed By: [Name]

ACCESS MODIFICATIONS

Additions:
Name/Role | Access Level | MFA Method     | Justification
----------|--------------|----------------|------------------------------
[Name]    | [Approver]   | [Hardware key] | [Reason for addition]

Removals:
Name/Role | Access Level | Removal Reason
----------|--------------|-------------------------------
[Name]    | [Approver]   | [Personnel change / Security / Other]

Permission Changes:
Name/Role | Old Level | New Level | Justification
----------|-----------|-----------|---------------------------
[Name]    | [Initiator] | [Approver] | [Reason for elevation]

CURRENT ACCESS LIST (after changes)
Name/Role | Level     | MFA Method    | Device ID
----------|-----------|---------------|---------
[Name]    | Admin     | Hardware key  | [ID]
[Name]    | Approver  | Hardware key  | [ID]
[Name]    | Approver  | Hardware key  | [ID]
[Name]    | Initiator | TOTP          | [ID]

VERIFICATION
[ ] All removed users confirmed deactivated in custodian platform
[ ] All new users completed MFA setup
[ ] Access permissions tested and verified
[ ] Emergency contacts updated
[ ] Documentation updated in [location]

APPROVALS
Requested By: _________________ Date: _______
Approved By: _________________ Date: _______
Security Review: _________________ Date: _______

Change Ticket: [Reference number if applicable]
```

---

## Security Configuration Template

Use this template to document detailed security settings. Complete this after initial account registration.

```
CUSTODIAL ACCOUNT SECURITY CONFIGURATION

Account: [Name]
Custodian: [Provider]
Last Configuration Update: YYYY-MM-DD
Configured By: [Name]

AUTHENTICATION SETTINGS

Multi-Factor Authentication:
Role | Primary Method | Backup Method | Enrollment Status
Administrator | Hardware key + biometric | Hardware key + PIN | [Active]
Approver | Hardware key | TOTP + SMS | [Active]
Initiator | Hardware key or TOTP | SMS | [Active]
Viewer | TOTP | SMS | [Active]

Session Controls:
- Timeout: [X minutes]
- Re-auth required for: [High-value transactions, policy changes, user management]
- Concurrent sessions: [Allowed/Blocked]

ACCESS CONTROL

Current User List:
Name/Role | Level    | MFA Method   | Device ID | Added Date
----------|----------|--------------|----------|------------
[Name]    | Admin    | Hardware key | [ID]     | YYYY-MM-DD
[Name]    | Approver | Hardware key | [ID]     | YYYY-MM-DD
[Name]    | Approver | Hardware key | [ID]     | YYYY-MM-DD

Note: Track all access changes using Access Change Template

Approval Thresholds:
Transaction Value (% of Total Assets) | Required Approvers | Time Delay | Additional Requirements
<0.1%          | 1 | None       | MFA
0.1% - 1%   | 3 | 4 hours    | MFA
1% - 10%    | 4 | 24 hours   | Multi-channel confirmation, test transaction
10% - 25%    | 5 | 24 hours   | Multi-channel confirmation, test transaction
>25%           | 7 | 48 hours   | Multi-channel confirmation, test transaction

Separation of Duties:
[ ] Initiators cannot approve own transactions
[ ] Admins cannot unilaterally execute withdrawals
[ ] Minimum [X] unique approvers required

NETWORK RESTRICTIONS

IP Whitelist:
XXX.XXX.XXX.XXX - [Office Location]
XXX.XXX.XXX.XXX - [VPN Range]
XXX.XXX.XXX.XXX - [Backup Location]

Change Approval: [24 hour delay / XX approvers required]
Emergency Override: [Process description]

VPN Requirement: [Mandatory / Optional]
Geographic Restrictions: [Blocked countries/regions]
Device Fingerprinting: [Enabled / Disabled]

TRANSACTION POLICIES

Address Whitelisting:
Status: [Enabled / Disabled]
Current Addresses: [XX addresses]
Addition Process: [XX approvers, YY hour delay]
Review Schedule: [Monthly / Quarterly]

Transaction Limits:
Limit Type        | Amount   | Override Process
------------------|----------|-----------------
Single Transaction | $XXX,XXX | [Authorization required]
Hourly Aggregate   | $XXX,XXX | [Authorization required]
Daily Aggregate    | $XXX,XXX | [Authorization required]
Weekly Aggregate   | $XXX,XXX | [Authorization required]
Monthly Aggregate  | $XXX,XXX | [Authorization required]

Time-Lock Settings:
Change Type                          | Delay Period
-------------------------------------|-------------
New address addition                 | XX hours
Policy modification                  | XX hours
High-value transaction (>$XXX,XXX)   | XX hours

MONITORING & ALERTS

Real-Time Alerts:
Type                       | Enabled
---------------------------|--------
All outgoing transactions  | [ ]
New device login           | [ ]
Failed authentication attempts (>X) | [ ]
Policy violations          | [ ]
Large transactions (>$XXX,XXX) | [ ]
Unusual access times       | [ ]
New geographic location    | [ ]

Alert Routing:
Severity | Contact         | Method       | Response Time
---------|------------------|-------------|--------------
Critical | [Name, phone]   | SMS + Call   | <15 min
High     | [Name, phone]   | SMS + Email  | <1 hour
Medium   | [Name, email]   | Email        | <4 hours

VERIFICATION
[ ] All settings tested and operational
[ ] Alert routing verified
[ ] User access confirmed
[ ] Documentation stored in [location]

Configured By: _________________ Date: _______
Reviewed By: _________________ Date: _______
Approved By: _________________ Date: _______
```

---

## Quarterly Review Template

Use this template for regular security reviews of custodial accounts.

```
CUSTODIAL ACCOUNT QUARTERLY REVIEW

Account: [Name]
Custodian: [Provider]
Review Period: [Q1/Q2/Q3/Q4 YYYY]
Review Date: YYYY-MM-DD
Reviewed By: [Name]

ACCESS AUDIT

Current Users:
Name/Role | Level | Last Login | MFA Status | Action Required
[Name] | Admin | YYYY-MM-DD | Active | None
[Name] | Approver | YYYY-MM-DD | Active | None
[Name] | Approver | Never logged in | Inactive | Remove access

Access Changes This Quarter: [X additions, Y removals, Z modifications]

Findings:
[ ] All users still require current access level
[ ] No dormant accounts (>90 days inactive)
[ ] MFA functioning for all users
[ ] No unauthorized access detected

Actions Required:
- [List any access to be removed/modified]
- [List any policy updates needed]

TRANSACTION REVIEW

Transaction Volume:
- Total transactions: [X]
- Average per month: [Y]
- Largest transaction: $XXX,XXX
- Total outflow: $XXX,XXX

Pattern Analysis:
[ ] Transactions within expected parameters
[ ] No unusual transaction patterns detected
[ ] All large transactions properly authorized
[ ] Test transactions performed correctly

Anomalies Detected:
- [List any unusual activity or violations]

SECURITY CONFIGURATION

Whitelist Review:
- Current addresses: [X]
- Addresses added this quarter: [Y]
- Addresses to remove: [Z]
- Review complete: [Yes/No]

Spending Limits:
Current | Actual Usage | Status
Single: $XXX,XXX | Max: $XXX,XXX | [Appropriate / Adjust]
Daily: $XXX,XXX | Avg: $XXX,XXX | [Appropriate / Adjust]
Monthly: $XXX,XXX | Avg: $XXX,XXX | [Appropriate / Adjust]

Findings:
[ ] Limits appropriate for current usage
[ ] No limit breaches this quarter
[ ] IP whitelist current and accurate
[ ] Time-locks functioning properly

ALERT EFFECTIVENESS

Alerts This Quarter:
Type | Count | False Positive Rate
Critical | [X] | [Y%]
High | [X] | [Y%]
Medium | [X] | [Y%]

Response Times:
Severity | Target | Actual Average | Status
Critical | <15 min | [X min] | [Met/Missed]
High | <1 hour | [X min] | [Met/Missed]
Medium | <4 hours | [X hours] | [Met/Missed]

Findings:
[ ] Alert routing working correctly
[ ] Response times meeting SLAs
[ ] No missed critical alerts

Actions Required:
- [Adjust alert thresholds if needed]
- [Update contact information]

CUSTODIAN RELATIONSHIP

SOC Reports: [Current / Expired - date]
Security Incidents: [Any custodian-wide incidents this quarter]
Service Quality: [Any issues or concerns]
Communication: [Regular contact maintained]

RISK ASSESSMENT UPDATE

Classification Review:
Current: [Impact Level / Operational Type]
Still Appropriate: [Yes / No]

If No, Recommended Change:
New Classification: [Level / Type]
Justification: [Explain change in risk profile]

Asset Value Change: [% increase/decrease]
Operational Change: [Any significant changes in usage]

RECOMMENDATIONS

Security Improvements:
1. [Recommendation]
2. [Recommendation]
3. [Recommendation]

Operational Improvements:
1. [Recommendation]
2. [Recommendation]

ATTESTATION

This account [continues to meet / deviates from] security standards.

[If deviation: Describe and provide remediation plan]

APPROVALS

Reviewer: _________________ Date: _______
Security Officer: _________________ Date: _______
Treasury Lead: _________________ Date: _______

Next Review Due: YYYY-MM-DD
```

---

---

### PAGE: /multisig-for-protocols/personal-security-opsec
**Title:** Multisig Personal Security (OpSec) | SEAL
**Referenced by controls:** tro-3.1.2, tro-3.1.4

# Personal Security (OpSec)




## Account Security

### Basic requirements

- 2FA enabled on all accounts (authenticator apps or hardware keys)
- Password manager with unique, strong passwords for every account
- Remove phone numbers from account recovery options where possible
- Regular security checkups and removal of unused app permissions
- Backup email for account recovery (separate from primary email)

### For extra security

**YubiKeys**: Use hardware security keys instead of authenticator apps

- Provides stronger protection against phishing and SIM swapping
- Recommended: 3 keys (primary, backup, secure storage)
- Models: YubiKey 5C NFC, YubiKey 5C Nano

**Cold backup accounts**: Separate email/phone for sensitive account recovery

- Backup / cold accounts are tied to sensitive accounts (AppleID, Telegram, Signal, WhatsApp, Password Manager etc).
  Such email addresses must never be shared with anyone and kept private to remain secure and not targeted.

Example: random44@gmail is tied to your AppleID, and you are only logged in (the email) on a separate secure device. If
your main device (laptop) gets compromised, you will be able to recover your account or revoke sessions, moreover your
cold account won't be affected / compromised. It prevents people from targeting your accounts by not knowing your email
linked to it.

- Use different providers from primary accounts (Gmail, Proton)
- Only access from secure devices
- Never used for regular communications

## Device Security

### Basic requirements

- Full disk encryption enabled (FileVault/BitLocker)
- Automatic updates enabled on all devices
- Screen lock after 5 minutes inactivity on computers, 30 seconds on mobile
- Strong passcodes (6+ digits or alphanumeric on mobile)
- Endpoint protection software on computers
- No admin rights for daily use accounts (create separate admin account)

### For extra security

**Dedicated signing device**: Clean laptop/tablet used only for multisig operations

- Minimal software installation
- Regular security updates
- Clean restart before each use
- Offline storage when not in use
- Justification: Reduces attack surface for high-value operations

## Network Security

### Dedicated Signing Machines

- Multi-sig operations must be performed on devices dedicated only to these transactions and verification tools
- All network access should be default blocked, with only the minimum necessary IPs to execute these transaction
signatures allowed
- Signing devices must be operated on private, authenticated networks or over trusted VPNs

### Air-Gapped Machine Options

- For highest security, physically remove or disable the network interface
- Use USB drives (with strict auto-run restrictions) or QR codes to transfer transaction data

### Advanced OS-Level Controls

- Consider employing SELinux or similar tools for advanced security configurations
- Restrict file system access and inter-process communications

### Network Monitoring Tools

Organizations must implement active network monitoring on signing devices:

- [Little Snitch](https://www.obdev.at/products/littlesnitch/index.html) for active firewall and network monitoring
- [Lulu](https://objective-see.org/products/lulu.html) as a free, open source alternative to Little Snitch
- [Glasswire](https://www.glasswire.com/) can be used for Windows machines

### DNS Security

Use [DeFi DNS Whitelist](https://github.com/0xKoda/defi-dns-whitelist/tree/main) as a firewall for dedicated signing machines.

## Communication Security

### Basic requirements

**Signal with verified safety number verification** for multisig communications: You MUST check the codes with the
person you are interacting to « verify » them.
How? Click on any chat > Contact name > View Safety Number > Call on another communication channel to verify them >
Click at the bottom "Mark as Verified".
If the account connects on a new device these codes will change & you will receive a security notification.

- Screen lock enabled on mobile devices
- 2FA enabled on backup platforms (Telegram/Discord/Slack)
- Privacy settings maximized on all platforms
- Session management - remove old/unknown devices regularly

### Signal configuration

- Registration lock enabled
- Signal PIN configured
- Hide phone number (use username only)
- Safety number verification for all contacts
- Disappearing messages for sensitive chats

### URL Navigation Safety

Links to URLs containing transaction requests or confirmation data (even those provided by trusted parties) must never
be clicked - they must be navigated to by using bookmarks or typing them out manually.

### For extra security

**Enhanced verification**: Advanced safety procedures for critical communications

- Code words for identity verification
- Multiple verification channels for important requests
- Regular communication channel security audits

## Travel considerations

### What to bring

- Primary hardware wallet only (leave backups secure at home)
- Essential devices only (laptop + phone)
- Emergency contact information (offline copy)
- Own chargers and cables

### What NOT to bring

- Seed phrases (never travel with these)
- Backup hardware wallets
- USB drives with sensitive data
- Non-essential devices

### Basic travel security

- Use device locks at all times
- Avoid public WiFi (use mobile hotspot or VPN)
- Don't leave devices unattended in hotel rooms
- Use hotel safes for device storage when out
- Have offline backup of emergency contacts

### For extra security

**Enhanced travel procedures**: Additional precautions for high-risk situations

- Disable biometric unlock at airports/borders (use PIN only) - prevents forced unlocking
- Decline hotel housekeeping services - reduces access to devices
- Advance notification to multisig team (72 hours for critical operations)
- Use separate carrier SIM card for travel communications
- Professional security assessment of travel destinations

## Implementation priority

### Start with basics

Focus on fundamental security practices first

- Password manager + 2FA on all accounts
- Device encryption and screen locks
- Signal setup with safety number verification
- Basic travel security practices

### Add extra security

Implement additional measures based on your risk level and operational needs

- YubiKeys for critical accounts
- Dedicated signing devices for high-value operations
- Enhanced travel procedures for international travel
- Professional security assessments for critical roles

Remember: Perfect security doesn't exist - focus on practical improvements that significantly reduce your risk while
remaining operationally feasible.

For the full OpSec article, see [Operational Security](/opsec/overview).

---

### PAGE: /wallet-security/seed-phrase-management
**Title:** Seed Phrase Management
**Referenced by controls:** tro-3.1.4

# Seed Phrase Management




## Private Key & Seed Phrase Management

The **seed phrase** (or mnemonic phrase) is the master key to a non-custodial wallet, granting complete control over all
its derived **private keys** and assets. The management of this phrase is the single most important aspect of
self-custody security.

> ⚠️ If you suspect for even a moment that your private key or seed phrase has been lost, viewed by another person, or
> exposed digitally (e.g., shown on-screen, copied to a clipboard on a connected device), you must **consider it
> compromised.** Immediately create a new, secure wallet and transfer all assets to it.

### Secure Storage Practices

The goal is to protect the seed phrase from both physical threats (theft, fire, water damage) and digital threats
(hacking, malware). The foundational principle is to keep your seed phrase offline at all times.

As soon as a new wallet is created, back it up using one of the following offline methods. Wallet providers do not have
access to your seed phrase and cannot help you recover it.

- **Physical Written Copies**: Writing the phrase on paper or a notebook is a common starting point. To mitigate risks

of loss or damage from fire or water, store multiple copies in secure, geographically separate locations (e.g., a
personal safe, a trusted family member's home, a bank deposit box).

- **Durable Metal Storage**: For superior protection against physical damage, etch or stamp your seed phrase onto a

metal plate (e.g., steel, titanium). Commercial products are available for this purpose. These should also be stored in
secure, separate locations.

### Enhanced security option

For extra security, split seed into 3 pieces:

- **Piece 1**: Words 1-16
- **Piece 2**: Words 9-24
- **Piece 3**: Words 1-8 and 17-24

#### Storage locations:

- Different secure locations (safe deposit box, home safe, trusted family)
- Each piece stored with clear labeling system

### Tamper evident bags:

Storing sensitive devices or documents in a tamper evident bag offers high confidentiality and integrity. You can sign &
date these bags, and also take a picture of its serial number.

![Tamper evident bag example](https://frameworks-static.s3.us-east-2.amazonaws.com/images/multisig-for-protocols/tamper-evident-bag-example.png)

**Use case:**
You can put your Piece 1: Words 1-16 of your seed, inside a safe.
Piece 2: Words 9-24 of your seed, somewhere safe (different location) in a tamper evident bag (could be at your parents place).
Piece 3: Words 1-8 and 17-24 of your seed, somewhere safe (different location) in a tamper evident bag (could be
somewhere else, at a family member or trusted friend).
You can put your backup ledger while traveling inside this, in the safe of your hotel room to detect tampering.
The main idea is to never have at the same place your 24 words, but still be able to recover your seed within 2 pieces
of paper out of 3.
You can find a useful [link here to our EthCC
swag](https://drive.google.com/file/d/1L1CMiKRL3TXQBE5bWYNv6dfF94HSdZ8C/view?usp=sharing) that shows you how to easily
split your seed in 3 as recommended.

### Prohibited Practices

Under no circumstances should you ever store your seed phrase in any of the following ways:

- Taking a digital photograph of it.
- Uploading it to cloud storage (iCloud, Google Drive, Dropbox).
- Sending it via text message or any messaging app.
- Sending it in an email, even to yourself.
- Storing it in a plain text file on a computer or phone.
- Sharing it with anyone. Wallet providers will **never** ask for your seed phrase.
- Password managers or digital storage
- Traveling with seed phrases
- Storing all pieces in same location
- Using a device obtained from an untrusted source, such as a conference, hackathon, or third-party online marketplace,
as it may be tampered with.

## Organizational Seed Phrase Security

For organizations managing multisig wallets, seed phrase security requires additional properties beyond individual storage:

### Security Properties

- **Disaster Resistant**: The seed phrase is either duplicated or split, with components/copies secured across multiple
geographic locations. This way, if disaster strikes, keys can be recovered from other locations.
- **Theft Resistant**: An attacker gaining access to one piece of physical storage media for the seed phrase would not
allow them to rebuild the wallet on its own
- **Operator Loss Resistant**: Reconstituting the seed phrase should be possible with the absence of one or more
operators

### Seed Phrase Encryption

> ⚠️ **Warning: Encryption adds recovery risk.** Only implement custom encryption schemes if you are sophisticated and
> have robust documentation practices. If you forget your encryption method or passphrase, your funds are **permanently
> inaccessible**—there is no recovery option. Many users and organizations face greater risk of locking themselves out
> with custom encryption than from an attacker discovering a securely stored backup. Evaluate whether strong physical
> security alone may be sufficient for your threat model.

The reason to encrypt seed phrases is that if they are discovered unencrypted, the wallet is permanently compromised.
However, if you encrypt your seed phrase, you are much more likely to forget the encryption when trying to restore the
wallet. If you have stored the seed securely, it is unlikely to be discovered in the first place.

Never store seed phrases in plain text or on an internet connected device. For additional protection, seed phrases can
optionally be encrypted through some method. For example:

- Seed phrases can be mixed in a randomly generated, recorded order
- Have a 25th secret word
- Require a passphrase to be imported into a wallet

Regardless of the method, the related secret value should be stored in a password manager. (**Do not store your seed
phrase in a password manager.**)

### Advanced Backup Options

**Key Splitting:**

Split the key into multiple shards and securely distribute them:

- Use [Shamir's Secret Sharing algorithm](https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing) for N of M key shards
- Consider using this [Shamir Secret Sharing implementation](https://github.com/privy-io/shamir-secret-sharing)
- Seed phrases can be sharded using Shamir's Secret Sharing algorithm, with each shard recommended to be shared with a
trusted guardian (3rd party custodian service, family members, password manager, personal physical media, etc.)

**Multi-Share Backups:**

Use device-supported multi-share backups where available:

- [Trezor Multi-Share Backup](https://trezor.io/learn/a/multi-share-backup-on-trezor)

**Secure Distribution:**

Give shards to trusted family members, put in bank safe deposit boxes, and keep hidden around your house.

> **Note**: If you're concerned about targeted attacks like kidnapping or home invasions, consider avoiding storing
any shards in your primary residence.

### Multisig Social Recovery

**Optional Self-Recovery**:

- Seed phrase backups are not strictly necessary with a healthy quorum
- Multi-sig signing wallets should not be used for any other purpose and could be re-provisioned by existing quorum
admins
- Maintain a healthy enough signing pool that loss of access to a few accounts at once could be recovered from
- Personal backup methods for admins are required to maintain access to on-chain assets in the event of loss of access
to hardware wallets

**Quorum Social Recovery**: If access to wallet is lost, the quorum can vote to edit members to replace the
inaccessible wallet.

### Ongoing Security Hygiene

**1. Periodic Security Audits:**

On a recurring basis (e.g., every 6 months), conduct a security review by asking:

- Do I know the physical location of all my seed phrase backups?
- Are my storage methods still secure and uncompromised?
- If my primary device were destroyed, do I have a clear plan to recover my assets?

**2. Key Rotation:**

While you can use the same keys for years, it is a best practice to periodically rotate them by moving assets to new
wallets.

**3. Succession Planning:**

Establish a clear, secure protocol for a trusted next-of-kin to access your assets in case of incapacitation or death.
This may involve sealed instructions stored with a lawyer or in a safe deposit box.

## Emergency access plan

### Trusted contacts

- Designate 2-3 trusted individuals who can access backup locations
- Clear instructions for emergency seed access
- Regular check-ins with trusted contacts

### Recovery scenario example

"Call [trusted person] with code word [predetermined phrase], tell them to get the metal plate from safe location A,
they give you words 1-16 over the phone. Then call [second person] with code word for location B to get words 9-24. Use
both pieces to reconstruct seed immediately, then change all security settings."

### Documentation

- Emergency contact information stored separately from seed
- Code words/phrases for identity verification
- Access instructions for trusted contacts
- Regular testing of emergency procedures
- Update procedures when contacts or locations change

Remember: Your seed phrase security is the foundation of multisig security. Take time to implement proper storage
procedures appropriate for your risk level.

---

### PAGE: /multisig-for-protocols/backup-signing-and-infrastructure
**Title:** Backup Signing & Infrastructure | SEAL
**Referenced by controls:** tro-4.1.3, tro-7.1.2

TagList,
  AttributionList,
  TagProvider,
  TagFilter,
  ContributeFooter,
} from "../../../components";




# Backup Signing & Infrastructure




If the default interfaces for either Safe or Squads are down or suspected of being compromised, these alternatives
enable continued critical signing operations. As a signer, you should familiarize yourself with these tools and practice
signing transactions with your team.

## UI Alternatives

### EVM Networks

**Eternal Safe - Decentralized fork of Safe\{Wallet\}**

- GitHub: [https://github.com/eternalsafe/wallet](https://github.com/eternalsafe/wallet)
- Hosted (IPFS): [https://eternalsafe.eth.limo](https://eternalsafe.eth.limo) (requires bring your own RPC)
- Local: Can be downloaded and run locally

Note: Local/alternative UIs may not be actively maintained. Treat them as emergency options and perform extra
verification. Please DYOR.

### Solana

**Squads Public Client - Open source Squads V4 interface: **

- GitHub: [https://github.com/Squads-Protocol/public-v4-client](https://github.com/Squads-Protocol/public-v4-client)
- Features: Verifiable build, self-hostable with Docker, IPFS distribution
- Local: Can be built and run locally

### Mobile (Safe)

**Safe Mobile Apps: **

- GitHub: [https://github.com/safe-global/safe-wallet-monorepo/tree/dev/apps/mobile](https://github.com/safe-global/safe-wallet-monorepo/tree/dev/apps/mobile)
- App Store: [https://apps.apple.com/us/app/safe-mobile/id6748754793](https://apps.apple.com/us/app/safe-mobile/id6748754793)
- Play Store: [https://play.google.com/store/apps/details?id=global.safe.mobileapp](https://play.google.com/store/apps/details?id=global.safe.mobileapp)

## RPC Backup Options

### Basic guidance:

- Multiple providers: Set up accounts with 2-3 different RPC services
  - eg. Alchemy, Infura, Chainstack, Quicknode, Tenderly
- Avoid correlation: Choose providers that don't share infrastructure, if that information is available
- Private RPCs preferred: Public RPC URLs are typically not sufficient for reliable operation

### Administrator responsibilities

Ensure signer preparedness:

- Provide access to offline UI tools listed above
- Verify signers have practiced using backup interfaces
- Test backup RPCs during non-emergency periods
- Document procedures for switching to backup infrastructure

## Block Explorer Backup Options

### EVM Networks

Etherscan provides the default block explorer for nearly all EVM chains. In the event that Etherscan is compromised or
goes down, it is important to have backup options that can be used for monitoring and investigating transactions.

**Blockscout - Open source Etherscan alternative: **

- [https://www.blockscout.com/](https://www.blockscout.com/)
- Available for all EVM networks
- Can also be [self-hosted](https://github.com/blockscout/blockscout), although it requires significant time to run full
  node and index

More explorers: A broader list of network explorers is maintained here: [https://explorer.swiss-knife.xyz/](https://explorer.swiss-knife.xyz/)

### Solana Networks

Both explorer.solana.com and Solscan are reliable options for Solana transaction exploration and decoding.

**explorer.solana.com** - [https://explorer.solana.com/](https://explorer.solana.com/)

- Can be [self-hosted](https://github.com/solana-foundation/explorer) using open source code

**Solscan** - [https://solscan.io/](https://solscan.io/)

## Preparation

**It is recommended to download dependencies ahead of time and store them in a secure location** so they are easily
accessible during emergencies.

## EVM Networks

### Eternal Safe - Decentralized fork of Safe\{Wallet\}

#### Access Options

- **GitHub**: [https://github.com/eternalsafe/wallet](https://github.com/eternalsafe/wallet)
- **Hosted (IPFS)**: [https://eternalsafe.eth.limo](https://eternalsafe.eth.limo) (requires bring your own RPC)
- **Local**: Can be downloaded and run locally

#### Setup

1. Select network and enter an RPC URL
   <div align="center">
     <img
       src="https://frameworks-static.s3.us-east-2.amazonaws.com/images/multisig-for-protocols/eternal-safe-network-selection.png"
       alt="Eternal Safe network selection"
       style={{ height: "400px" }}
     />
     <p>
       <em>
         Eternal Safe network selection screen: choose your network and enter an
         RPC URL
       </em>
     </p>
   </div>
2. Enter Safe address and load
   ![Eternal Safe address entry](https://frameworks-static.s3.us-east-2.amazonaws.com/images/multisig-for-protocols/eternal-safe-address-entry.png)
3. Eternal Safe will automatically detect Ether balances but not ERC20 tokens. They can be added manually
   ![Eternal Safe token configuration](https://frameworks-static.s3.us-east-2.amazonaws.com/images/multisig-for-protocols/eternal-safe-token-configuration.png)

#### Transaction Verification

**Critical**: It is still essential to verify hashes and calldata from Eternal Safe. Follow the verification steps in
[Safe Multisig: Step-by-Step Verification](/wallet-security/signing-and-verification/secure-multisig-safe-verification).

#### Smart Link System

Once a transaction has been signed by one signer, a **Smart Link** is created which can be forwarded to the next signer
to add their signature. The transactions do not go to any centralized backend.

**Example Smart Link:**

```
Please sign this Eternal Safe transaction for the Safe: base:0xA79C6968E3c75aE4eF388370d1f142720D498fEC.
Current confirmations: 1 of 2.
https://eternalsafe.eth.limo/transactions/tx/?safe=base:0xA79C6968E3c75aE4eF388370d1f142720D498fEC&tx=eyJzaWduYXR1cmVzIjp7ImRhdGFUeXBlIjoiTWFwIiwidmFsdWUiOltbIjB4NDBiYjMyZjA4NjJkMjI3ODEzYzg2ZmQ4M2E3YjNjOWRiOTA3NGUyYSIseyJzaWduZXIiOiIweDQwYkIzMkYwODYyRDIyNzgxM2M4NkZEODNBN0IzYzlkYjkwNzRFMkEiLCJkYXRhIjoiMHgwZDMxZTZjODIxZjBhMGZlM2M5NmNlZWY4ZDNhM2JhZmU3YmZmZTliODQ0ZWNkYzBkYWNmNzc0MzFkODQ0NjU4MTgwZjUwNmZlMjZiZjMzOTQwY2VhOTJiMzlhNDNjODRkMDRhNThiMGY1ODQ2NzhlNzE0YTllMWJkMzE0NTg5ZjFiIn1dXX0sImRhdGEiOnsiZGF0YSI6IjB4IiwiYmFzZUdhcyI6IjAiLCJnYXNQcmljZSI6IjAiLCJzYWZlVHhHYXMiOiIwIiwiZ2FzVG9rZW4iOiIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAiLCJub25jZSI6NCwicmVmdW5kUmVjZWl2ZXIiOiIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAiLCJ2YWx1ZSI6IjEwMDAwMDAwMDAwMDAwMDAiLCJ0byI6IjB4RTBiY2ZlNWUzMEFCYTBCNDZmMTNCMEMyNENiQzQ3MERDQTNlYjg2NSIsIm9wZXJhdGlvbiI6MH19
```

#### Execution

Once all signatures are collected, execute the transaction. **Note**: Prior to execution you can manually simulate using
Tenderly by entering the transaction data, but an automatic simulation link will not be available.

## Solana

### Squads Public Client - Open source Squads V4 interface

#### Access Options

- **GitHub**: [https://github.com/Squads-Protocol/public-v4-client](https://github.com/Squads-Protocol/public-v4-client)
- **Hosted**: [https://backup.app.squads.so/](https://backup.app.squads.so/)
- **Features**: Verifiable build, self-hostable with Docker, IPFS distribution
- **Local**: Can be built and run locally

#### Setup

1. If running locally, follow setup instructions in [https://github.com/Squads-Protocol/public-v4-client](https://github.com/Squads-Protocol/public-v4-client)
 and access via `http://localhost:8080`
2. Enter RPC URL in settings
   ![Squads RPC configuration](https://frameworks-static.s3.us-east-2.amazonaws.com/images/multisig-for-protocols/squads-rpc-configuration.png)
3. Enter multisig address in the **lower** text box (Search for Multisig Config) and select the detected Multisig Config
   ![Squads multisig selection](https://frameworks-static.s3.us-east-2.amazonaws.com/images/multisig-for-protocols/squads-multisig-selection.png)

#### Transaction Operations

1. Create, approve, or execute transactions. _Smart Links_ are not needed for Solana as all transactions are on chain
   and accessible via the RPC without an API
   ![Squads transaction interface](https://frameworks-static.s3.us-east-2.amazonaws.com/images/multisig-for-protocols/squads-transaction-interface.png)

## Security Considerations

### Enhanced Verification

When using backup systems:

- **Extra caution required**: Be more thorough with verification procedures
- **Multiple verification methods**: Use additional tools to cross-check transaction details
- **Team confirmation**: Verify with other signers before proceeding with critical transactions
- **Documentation**: Record use of backup systems and any issues encountered

### Risk Assessment

- **Delay non-critical operations**: Consider postponing non-urgent transactions until primary systems recover
- **Emergency operations only**: For critical emergency responses, proceed with enhanced verification
- **Communication**: Keep team informed about system status and verification procedures

## Testing and Preparation

### Regular Practice

- **Monthly testing**: Practice using backup interfaces during normal operations
- **Team coordination**: Ensure all signers can operate backup systems
- **Process documentation**: Update procedures based on practice sessions

### Emergency Drills

- **Simulated outages**: Practice coordinating with backup systems during drills
- **Communication testing**: Verify backup communication channels work with backup UIs
- **Time measurement**: Track how long backup system activation takes

## Troubleshooting

### Common Issues

- **RPC connectivity**: Switch to alternative RPC providers if connection fails
- **Transaction loading**: Refresh or try different network endpoints
- **Signature verification**: Use multiple verification tools when in doubt

### Support Resources

- **GitHub documentation**: Refer to project documentation for technical issues
- **Team assistance**: Coordinate with other signers for problem-solving
- **Alternative tools**: Have multiple backup options available

## Related Documents

- [Safe Multisig: Step-by-Step
Verification](/wallet-security/signing-and-verification/secure-multisig-safe-verification) - Verification procedures
- [Emergency Procedures](/multisig-for-protocols/emergency-procedures) - General emergency response
- [Communication Setup](/multisig-for-protocols/communication-setup) - Backup communication during outages

---

### PAGE: /wallet-security/account-abstraction
**Title:** Account Abstraction Wallets
**Referenced by controls:** tro-5.1.1, tro-5.1.2

# Account Abstraction Wallets




## User Profile

Advanced users, developers, and organizations interested in programmable security, customizable transaction rules, and
moving beyond the limitations of standard Externally Owned Accounts (EOAs) to eliminate single points of failure like
seed phrase loss.

## Primary Goal

To leverage the power of smart contracts at the account level, enabling features like social recovery, gas sponsorship,
batch transactions, and flexible security policies that are not possible with an EOA.

## Core Concept: ERC-4337

Account Abstraction (AA) turns a user's account into a smart contract, making it programmable. Instead of being
controlled directly by a single private key, the account's logic is defined by its code. This is achieved through
**ERC-4337**, a standard that enables AA without requiring changes to the core Ethereum protocol. It introduces a
higher-level pseudo-transaction system with several key components:

* **Smart Contract Account**: The user's wallet itself is a smart contract, containing custom logic for validating
transactions.
* **UserOperation**: A data structure that bundles the user's intent, calldata, and signature. This object is sent to a
dedicated, alternative mempool.
* **Bundlers**: Specialized nodes that package multiple `UserOperation` objects from the mempool into a single
transaction and submit it to the `EntryPoint` contract.
* **EntryPoint**: A singleton smart contract that acts as the central orchestrator. It verifies and executes the bundled
`UserOperations`, ensuring that accounts and paymasters have sufficient funds to pay for gas.
* **Paymasters**: Optional smart contracts that can sponsor gas fees on behalf of the user, enabling gasless
transactions for the end-user or allowing fees to be paid in ERC-20 tokens.

## Key Benefits & Features

* **Enhanced Security**:
  * **Social Recovery**: Mitigate the risk of losing a primary key by designating trusted "guardians" (other accounts or
  devices) who can collectively approve an account recovery.
  * **Customizable Policies**: Implement robust security rules directly into the wallet, such as daily spending limits,
  whitelisting trusted contracts, or requiring multisig confirmation for transactions over a certain value.

* **Improved User Experience**:
  * **Gasless Transactions**: Enjoy a smoother experience where dApps can sponsor gas fees, or pay for transactions
  using ERC-20 tokens instead of needing the chain's native asset (e.g., ETH).
  * **Simplified Interactions**: Perform complex, multi-step actions (like `approve` and `swap`) in a single, atomic
  transaction, reducing clicks and potential points of failure.

## Security Considerations & Best Practices

* **Smart Contract Risk**: The security of an AA wallet is entirely dependent on the quality and security of its
underlying smart contract code. Bugs or vulnerabilities in the account's implementation can lead to a total loss of
funds. **Thorough audits of the account logic are non-negotiable.**
* **Guardian Selection and Security**: The strength of the social recovery model depends on the security and
independence of the guardians. They should be diverse and not susceptible to a single common threat.
* **EntryPoint Centralization**: The `EntryPoint` contract is a central trust point for the entire ERC-4337 ecosystem. A
vulnerability in the official `EntryPoint` could have widespread consequences. Use only the canonical, heavily audited
`EntryPoint` contract.
* **Paymaster and Factory Security**: Malicious or poorly coded Paymasters and Factories can introduce DoS vectors or
other risks. The ERC-4337 standard includes a reputation system and staking mechanisms to throttle or ban misbehaving
entities, but users should only interact with trusted and audited Paymasters.
* **Gas Overhead**: The added logic in a smart contract account means that transactions can be more expensive than those
from a standard EOA. This trade-off between features and cost should be considered, though it can be offset by gas
sponsorship.
* **Key Revocation**: If the primary signing key is compromised, the recovery process allows you to swap it out for a
new one without having to move all assets to a new wallet address.
* **Advanced Guardian Setups**: For enhanced security, guardian roles can be implemented using **Multi-Party Computation
(MPC)**. In an MPC-based recovery, guardians hold cryptographic shares that are used collectively to authorize a
recovery action. This method allows guardians to produce a valid signature through a distributed computation using their
individual shares, without ever reconstructing a single master key on any device.

---

---

### PAGE: /incident-management/playbooks/seal-911-war-room-guidelines
**Title:** SEAL 911 War Room Guidelines | SEAL
**Referenced by controls:** tro-6.1.1, tro-7.1.1

# SEAL 911




SEAL 911 is a project designed to give users, developers, and even other security researchers an accessible method to
contact a small group of highly trusted security researchers. The group can be reached via the [Telegram
bot](https://t.me/seal_911_bot).

Members of SEAL 911 follow a strict
[CODE OF CONDUCT](https://github.com/security-alliance/seal-911/blob/main/CODE_OF_CONDUCT.md).

When interacting with SEAL 911, ensure that you give as much information as possible in order to avoid double work by
the security researchers.

## Crisis Handbook - Smart Contract Hack | [Google Doc](https://docs.google.com/document/d/1DaAiuGFkMEMMiIuvqhePL5aDFGHJ9Ya6D04rdaldqC0/edit#heading=h.c4h2beeflqpo)

### Actions Checklist

### Perform Immediately

- [ ] Notify SEAL 911 Bot of the incident. Use this message template to get started.
- [ ] Create a War Room with audio and share the invite link with trusted individuals.
- [ ] Duplicate this document to allow collaboration and share the link in the War Room.
- [ ] Review the Advice to Keep in Mind section.

### Perform in Parallel by Role

1. **Assign Key Roles to War Room Members**:
   - [ ] Assign members to specific roles.

2. **Analysis**:
   - [ ] Scope the impact of the attack.
   - [ ] Gather Transactions Involved.
   - [ ] Gather Affected Addresses.
   - [ ] Record Funds Movement.
   - [ ] Gather Attacker Information.
   - [ ] Investigate the issue and update the Issue Description.
   - [ ] Propose workable solutions.

3. **Protocol actions**:
   - [ ] Take immediate corrective/preventative actions to prevent further loss of funds.
   - [ ] Pause contracts if possible.
   - [ ] Execute pre-made defensive scripts.
   - [ ] Prioritize proposed solutions.
   - [ ] Validate and execute the solution.
   - [ ] Prepare monitoring alerts for situations that require future actions.

4. **Web actions**:
   - [ ] Disable deposits and/or withdrawals as needed in the web UI.
   - [ ] Enable front-end IP or Address blacklisting.
   - [ ] Create front-end for any user actions necessary (approval revoking, fund migrating, etc.).

5. **Communications**:
   - [ ] Identify social platforms that communications on the incident must be sent to.
   - [ ] Prepare messages for incident communication internally and externally.
   - [ ] Gather security contacts for any potentially affected downstream protocols (bridges, lending protocols).
   - [ ] Notify block explorers (like Etherscan) for attacker address labeling.
   - [ ] Continuously monitor social media for users providing additional information that aids whitehat efforts.
   - [ ] Monitor War Room efforts and maintain the Event Timeline.

### After all of the above is complete, consider Post Incident Actions

## Information Gathering

Information will primarily be shared and acted upon in the War Room. As time allows, consolidate intel in the below
section to achieve the following:

- Accurately scope the incident impact.
- Inform new War Room members and third parties efficiently.
- Aid external communication.

This is the chief duty of the Scribe.

### Issue Description

The issue involves an unauthorized transfer of funds from the protocol's treasury contract due to a vulnerability in the
contract's access control mechanism. The attacker exploited this vulnerability to initiate multiple transfers,
siphoning funds to an external wallet.

### Events Timeline

Record events to construct an overall timeline of the incident. Events worth recording:

- First notice of the incident
- War room creation
- External communications
- Attack transactions
- Transactions performed by the team

Record times in UTC. Use a UTC Time Converter.

| Date-Time (UTC) | Event Description | Notes |
| --- | --- | --- |
| 2024-08-23 12:45 | First notice of the unauthorized transfer | Alert received via monitoring system |
| 2024-08-23 12:50 | War room created | Initial members invited |
| 2024-08-23 13:05 | Notified SEAL 911 Bot | Incident report submitted |
| 2024-08-23 13:15 | Attack transaction identified | Transaction hash: 0x123456789abc |
| 2024-08-23 13:20 | Contracts paused | Prevented further fund transfers |
| 2024-08-23 13:30 | External communication initiated | First update sent via Twitter |

### Transactions Involved

Record all transactions related to the incident.

| Transaction Link | Notes |
| --- | --- |
| [0x123456789abcdef...](https://etherscan.io/tx/0x123456789abcdef) | Initial exploit transaction |
| [0xabcdef123456789...](https://etherscan.io/tx/0xabcdef123456789) | Attacker moving funds to mixer |
| [0xfedcba987654321...](https://etherscan.io/tx/0xfedcba987654321) | Defensive move by the team |

### Affected Addresses

Record affected addresses related to the incident (protocol contracts, bridges, users, etc.).

| Address Link | Status | Notes |
| --- | --- | --- |
| [0x1111222233334444...](https://etherscan.io/address/0x11112222) | At Risk | User wallet, interacted with exploit |
| [0x5555666677778888...](https://etherscan.io/address/0x55556666) | Impacted | Protocol treasury address |
| [0x99990000aaaabbbb...](https://etherscan.io/address/0x99990000) | Paused | Lending protocol contract |
| [0xaaaabbbbccccdddd...](https://etherscan.io/address/0xaaaabbbb) | Saved | Bridge contract, funds secured |
| [0xddddeeeeffff0000...](https://etherscan.io/address/0xddddeeee) | Needs Review | User wallet, unusual activity noted |
| [0x2222333344445555...](https://etherscan.io/address/0x22223333) | Uncertain | User wallet, pending analysis |

### Funds Movement

Record funds movement to gather the impact of the incident and organize recovery efforts.

- Original address that held the funds
- Transaction that moved the funds
- Assets and amounts the funds are comprised of
- Destination the funds moved to (Contract, CEX, Bridge, Mixer)
- Recovery Status of the funds

Use Phalcon Tx Explorer to aid in recording funds movement.

| Origin | Transaction Link | Amount / Asset | Destination | Recovery Status | Notes |
| --- | --- | --- | --- | --- | --- |
| [0x5555666677778888...](https://etherscan.io/address/0x5555) | [0xabcdef123456789...](https://etherscan.io/tx/0xabcdef) | 1000 ETH | [Mixer address](https://etherscan.io/address/0x12) | Needs Review | Funds moved to Tornado Cash |
| [0x99990000aaaabbbb...](https://etherscan.io/address/0x9999) | [0x9876543210fedcba...](https://etherscan.io/tx/0x987654) | 500,000 DAI | [CEX address](https://etherscan.io/address/0x34) | In Progress | Funds transferred to centralized exchange |
| [0xaaaabbbbccccdddd...](https://etherscan.io/address/0xaaaa) | [0x123456789abcdef...](https://etherscan.io/tx/0x123456) | 200 BTC | [Contract address](https://etherscan.io/address/0x56) | Recovered | Funds recovered via multisig |
| [0xddddeeeeffff0000...](https://etherscan.io/address/0xdddd) | [0xfedcba987654321...](https://etherscan.io/tx/0xfedcba) | 50,000 USDC | [Bridge address](https://etherscan.io/address/0x78) | Uncertain | Funds possibly moved cross-chain |

### Attacker Information

Gather attacker information to aid legal efforts and fund recovery.

| Address Link | Funded By | Notes |
| --- | --- | --- |
| [0xabcdefabcdefabcd...](https://etherscan.io/address/0xabcdefab) | Tornado Cash | Initial funding from Tornado Cash mixer |
| [0x123456789abcdef...](https://etherscan.io/address/0x12345678) | CEX | Received funds from centralized exchange |
| [0xfedcba987654321...](https://etherscan.io/address/0xfedcba98) | Unknown | No prior activity, potentially new wallet |

## Post Incident Actions

1. Confirm the incident has been resolved.
2. Create monitoring alerts for situations requiring future actions.
3. Prepare scripts to perform any actions related to monitoring events in the future.
4. Consider creating additional defensive scripts (pause/upgrade) to use for future situations.
5. Schedule a Post Mortem write-up.
6. Post the write-up to relevant social media.

## Appendix

### Advice to Keep in Mind

- Limit the War Room occupancy. Be careful not to invite too many people during the early stages. Sensitive information
is being shared; be wary.
- Make it clear to War Room members not to publicize information without the protocol’s consent.
- Do not speak to the press/news/publications.

### Key Roles

- **Operations**: Initiates War Room, assigns roles, distributes tasks, herds multisig participants.
  - *Person Responsible*
- **Scribe**: Consolidates gathered information for efficiency in knowledge-sharing.
  - *Person Responsible*
- **Strategy Lead**: Prioritizes actions, considers trade-offs of decisions.
  - *Person Responsible*
- **Protocol Lead**: Responsible for smart-contract actions (pausing, upgrading, etc.).
  - *Person Responsible*
- **Web/Infrastructure Lead**: Responsible for updating the front-end, managing servers.
  - *Person Responsible*
- **External Communicator**: Social media and user communications.
  - *Person Responsible*

### Suggested Tools and Platforms

| Name | Type | Notes |
| --- | --- | --- |
| Discord | Platform | A familiar platform for web3 collaboration. Spin up a server quickly using our [recommended template](https://discord.new/CkADqy5aWsAH). Tips: New users must be granted the `approved` role before they can view chats. Upon creation, grant yourself the `approved` role and share an invite link with trusted members. |
| Telegram | Platform | A familiar platform for web3 collaboration. Tips: Upon New Group creation, enable chat history as visible to new members. To do this: Info -> Edit -> Chat History For New Members -> Visible |
| Google Hangouts | Platform | |
| Phalcon Tx Explorer | Tx Analysis | |
| Openchain Trace Explorer | Tx Analysis | |
| Tenderly Tx Explorer | Tx Analysis, Debugging | Some features require login. |
| Tenderly Alerts | Monitoring | Monitor addresses, on-chain actions, etc. Requires login. |
| MetaSleuth | Monitoring | Monitor fund movement. 50 address limit. Requires login (premium feature). |
| Github / Gist | Code Sharing | Create a private repo or secret gists and share the link with War Room participants only. |
| CodeShare | Code Sharing | Sessions expire after 24 hours. |
| HackMD | Code Sharing | Private notes become published after ~48 hours. Be very careful with sensitive information! |

### SEAL Message Template

Fill out with relevant information and send to SEAL 911 Bot.

```plaintext
Protocol: [Protocol Name]
Attack Tx(s): [Transaction Hash(es)]
Funds at Risk: [Estimated Amount in USD or Token]

[Brief Description of the incident]
```

---

---

### PAGE: /wallet-security/tools-and-resources
**Title:** Wallet Security Tools & Resources | SEAL
**Referenced by controls:** tro-6.1.1

# Tools & Resources




This section provides a curated list of tools and resources to help users select wallets, practice safe signing habits,
and verify transactions. Using these tools is a critical part of a robust security strategy.

## Wallet Selection

Before choosing a wallet, it is essential to consult independent, community-trusted resources.

- **[ethereum.org/wallets](https://ethereum.org/en/wallets/find-wallet/)**: The official, community-maintained list of
wallets, filterable by features. A reliable starting point for discovering wallets.
- **[Wallet Scrutiny](https://walletscrutiny.com/)**: An in-depth review site that focuses on transparency,
verifiability, and reproducibility. It flags wallets that are closed-source or have other potential security concerns.
- **[Wallet Security Ranking](https://www.coinspect.com/wallets/)**: Evaluates wallets by permissions, intent clarity,
device security, and threat prevention to help users choose safer, more trustworthy options.
- **[Wallet Beat](https://beta.walletbeat.eth.limo/wallet/summary/)**: Aims to provide a comprehensive list of wallets,
their functionality, practices, and support for certain standards.

## Hardware Wallets

Hardware wallets provide the highest level of security for storing cryptocurrency by keeping private keys offline and
isolated from potentially compromised computers.

- **[Top 9 Cryptocurrency Hardware Wallets for 2025](https://patrickalphac.medium.com/top-9-cryptocurrency-hardware-wallets-for-2025-security-researcher-review-9fcb16d771e0)**:
A comprehensive security researcher review comparing the top hardware wallets, including analysis of security features,
usability, and recommendations for different use cases.

## Wallet Applications

### Rabby Wallet

- Install [Rabby wallet](https://rabby.io/)
  - Verify open source code
  - Enable pre-sign security checks (e.g. new address warnings)
  - Use built-in transaction simulation

### MetaMask with Security Snaps (Alternative)

- Install [MetaMask](https://metamask.io/)
- Install recommended security Snaps:
  - [Tenderly Snap](https://snaps.metamask.io/snap/npm/tenderly/metamask-snap/) -
  Allows you to easily simulate transactions before confirming them
  - [Forta Network Snap](https://snaps.metamask.io/snap/npm/forta-network/metamask-snap/) -
  Scam and malicious address detection

## Transaction Simulation

Transaction simulators allow you to preview the exact outcome of a transaction before signing it, preventing errors and
security risks.

- **[Tenderly](https://tenderly.co/)**: A platform that allows you to simulate transactions and preview, helping to
prevent transaction failures, security risks, and unnecessary gas costs.
- **[Alchemy Simulation APIs](https://www.alchemy.com/docs/reference/simulation)**: An API suite that predicts the
precise impact of a transaction before it reaches the blockchain.

## Monitoring & Alerting

Implement continuous monitoring to detect unauthorized or suspicious activity on your multisig wallets.

### Multisig Monitoring

- [Gearbox Safe Watcher](https://github.com/Gearbox-protocol/safe-watcher) or equivalent for monitoring and alerts
  - Connect to Telegram for notifications
  - Monitor for suspicious delegateCall transactions

### Network Security

For dedicated signing machines, implement network-level protections:

- **[DeFi DNS Whitelist](https://github.com/0xKoda/defi-dns-whitelist/tree/main)**: A curated whitelist of legitimate
DeFi domains that can be used as a firewall for dedicated signing machines
- **[Little Snitch](https://www.obdev.at/products/littlesnitch/index.html)** (macOS): Active firewall and network
monitoring
- **[Lulu](https://objective-see.org/products/lulu.html)** (macOS): Free, open-source network monitor
- **[Glasswire](https://www.glasswire.com/)** (Windows): Network monitoring with firewall capabilities

For more on network security configuration, see
[Personal Security (OpSec)](/multisig-for-protocols/personal-security-opsec#network-security).

## Transaction Verification

These tools are designed to help you independently verify the integrity of transaction data, especially for multisig
operations.

- **[Safe Multisig Transaction Hashes](https://github.com/pcaversaccio/safe-tx-hashes-util)**: A Bash script that
locally calculates domain and message hashes using the EIP-712 standard. It allows you to generate the exact hash that
your hardware wallet will display.
- **[Cyfrin Safe TX Hashes](https://github.com/Cyfrin/safe-tx-hashes)**: for additional support without relying on Safe API.
- **[Safe Utils](https://safeutils.openzeppelin.com/)**: A user-friendly web interface for calculating and verifying
Safe transaction hashes. While convenient, remember the security advantages of using a local, offline tool like
`safe-hash` for high-value transactions.
- **[Foundry cast](https://book.getfoundry.sh/reference/cast/cast-decode-calldata)**: A powerful command-line tool for
local, offline decoding.
- **[safe-hash](https://github.com/Cyfrin/safe-hash-rs)**: A command-line tool for locally verifying Safe transaction
data and EIP-712 messages before signing. It is designed to protect against phishing by allowing you to independently
generate the hash your wallet will ask you to sign.
- **[calldata.swiss-knife.xyz](https://calldata.swiss-knife.xyz/decoder)**: Web-based tool for quick decoding of
transaction data.
- **[Lido Safe TX Hashes
  Calculation](https://lido.mypinata.cloud/ipfs/bafybeibuhixxt7rdqxfbuw2tnv3lr6r4qeh4janh3setljbtvwqwtzepsa)**: IPFS
  hosted tool with simple hash calculation.

### Conversion & Utilities

- **[Hex ↔ Decimal Converter](https://www.rapidtables.com/convert/number/hex-to-decimal.html)**: Handy for interpreting
  raw instruction bytes (e.g., Solana instruction data) when verifying simulations.

## Security Training

These tools allow you to practice identifying threats in a safe, simulated environment.

- **[The Phishing Dojo](https://www.phishingdojo.com/)**: An interactive threat simulation platform designed to train
users to recognize real-world security risks. It offers realistic, in-browser scenarios covering phishing emails,
fraudulent wallet signing requests, spoofed block explorer data, and malicious DApps, all without requiring any special
setup or browser extensions.
- **[Wise Signer](https://wise-signer.cyfrin.io/)**: An interactive platform that challenges users to identify safe and
dangerous transactions before signing them. It is an excellent tool for learning to recognize common phishing attacks
and deceptive transaction patterns without risking real assets.
- **[Web3 Wallet Security Courses](https://updraft.cyfrin.io/career-tracks/web3-wallet-security/)**: Offers a structured
curriculum for hands-on security training, guiding users from foundational concepts in "Web3 Wallet Security Basics" to
advanced techniques. The advanced course covers critical topics like Safe multisig configuration, EIP-712 signature
verification, and real-world hack analysis.
- **[How to Multisig](https://howtomultisig.com/)**: A dedicated resource with best practices on how to implement secure
standard operating procedures for multisig wallets.

---

---

### PAGE: /governance/compliance-regulatory-requirements
**Title:** Compliance & Regulatory Requirements | SEAL
**Referenced by controls:** tro-7.1.1

# Compliance with Regulatory Requirements




Compliance with regulatory requirements may be essential for your project. Understanding the needs and ensuring the
necessary compliance helps protect your project from potential legal penalties.

## Key Regulatory Frameworks

Some examples of regulatory frameworks or standards for web3 are:

- **GDPR (General Data Protection Regulation)**: Applies to organizations handling the personal data of EU citizens. It
mandates strict data protection measures and grants individuals significant rights over their data, as soon on
[https://gdpr.eu/](https://gdpr.eu/).
- **MiCA**: Companies seeking to offer crypto services or assets within the EU are in scope. While this may seem
daunting, there are different levels of compliance needed depending on the project, as can be seen on
[https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica](https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica)

## Best Practices for Compliance

# Best Practices for Regulatory Compliance in Terms of Security

## 1. Understand Applicable Regulations

- **Identify Relevant Regulations:** Clearly identify all regulatory frameworks that apply to your organization, such as
GDPR, HIPAA, CCPA, or PCI DSS.
- **Regularly Review Legal Requirements:** Stay updated on changes in regulations that impact your industry, ensuring
compliance measures evolve accordingly.
- **Engage Legal Counsel:** Work with legal experts to interpret regulations accurately and implement appropriate
security controls.

## 2. Develop a Robust Security Policy Framework

- **Comprehensive Security Policies:** Develop detailed security policies that align with regulatory requirements,
covering areas like data protection, access control, and incident response.
- **Policy Documentation:** Maintain thorough documentation of all security policies, procedures, and controls, ensuring
they are easily accessible for audits and reviews.
- **Regular Policy Updates:** Review and update security policies regularly to reflect changes in regulations and
emerging threats.

## 3. Data Protection and Privacy

- **Data Classification:** Classify data based on sensitivity and regulatory requirements, ensuring appropriate
protection levels for each category.
- **Data Minimization:** Collect and retain only the minimum amount of data necessary for business operations, reducing
exposure to potential breaches.
- **Anonymization and Pseudonymization:** Where possible, apply anonymization or pseudonymization techniques to protect
personal data.

## 4. Access Management and Control

- **Role-Based Access Control (RBAC):** Implement RBAC to ensure that employees have access only to the data and systems
necessary for their roles.
- **Multi-Factor Authentication (MFA):** Require MFA for access to sensitive systems and data, adding an extra layer of
security.
- **Regular Access Audits:** Conduct regular audits of user access rights to ensure compliance with the principle of
least privilege.

## 5. Incident Response Planning

- **Comprehensive Incident Response Plan:** Develop an incident response plan that aligns with regulatory requirements,
detailing steps for identifying, responding to, and reporting security incidents.
- **Regulatory Reporting:** Ensure the incident response plan includes protocols for reporting breaches to regulatory
authorities within the required timeframes.
- **Regular Testing:** Conduct regular simulations and tabletop exercises to test the effectiveness of the incident
response plan.

## 6. Continuous Monitoring and Auditing

- **Automated Monitoring Tools:** Implement automated tools to continuously monitor compliance with security regulations
and detect potential vulnerabilities or breaches.
- **Internal Audits:** Conduct regular internal audits to assess compliance with security policies and regulatory
requirements.
- **External Audits:** Engage third-party auditors to provide independent assessments of your security posture and
compliance status.

## 7. Employee Training and Awareness

- **Regular Training Programs:** Provide regular training on regulatory requirements, data protection, and security best
practices for all employees.
- **Phishing and Social Engineering Awareness:** Educate employees about phishing, social engineering, and other common
attack vectors that could lead to compliance breaches.
- **Role-Specific Training:** Tailor training programs to address the specific regulatory and security responsibilities
of different roles within the organization.

## 8. Third-Party Risk Management

- **Vendor Due Diligence:** Conduct thorough due diligence on third-party vendors to ensure they comply with relevant
security regulations.
- **Contractual Obligations:** Include specific security and compliance requirements in contracts with third-party
vendors.
- **Continuous Monitoring:** Monitor third-party vendors’ compliance with security requirements throughout the
relationship.

## 9. Data Encryption and Secure Communication

- **Encryption Standards:** Use strong encryption standards for protecting data both at rest and in transit, in line
with regulatory requirements.
- **Secure Communication Channels:** Ensure that all communication involving sensitive data is conducted over secure
channels (e.g., TLS, VPN).
- **Key Management:** Implement robust key management practices to protect encryption keys from unauthorized access.

## 10. Documentation and Record-Keeping

- **Compliance Documentation:** Maintain detailed records of compliance efforts, including audit results, incident
reports, and training logs.
- **Retention Policies:** Establish data retention policies that comply with regulatory requirements, ensuring that
records are kept for the required duration.
- **Audit Trails:** Ensure that all access to sensitive data is logged, creating a clear audit trail for compliance
verification.

# Useful Resources

Here are some useful resources where you can follow and learn more about the best practices mentioned:

1. **National Institute of Standards and Technology (NIST)**
   - **NIST Cybersecurity Framework:** A comprehensive resource for implementing cybersecurity best practices and
   complying with regulatory requirements.
   - URL: [https://www.nist.gov/cyberframework](https://www.nist.gov/cyberframework)

2. **International Organization for Standardization (ISO)**
   - **ISO/IEC 27001 Information Security Management:** The leading international standard for information security
   management, providing guidelines for establishing, implementing, and maintaining an effective security program.
   - URL:
   [https://www.iso.org/isoiec-27001-information-security.html](https://www.iso.org/isoiec-27001-information-security.html)

3. **Center for Internet Security (CIS)**
   - **CIS Controls:** A prioritized set of actions that help organizations comply with regulatory requirements and
   improve their cybersecurity posture.
   - URL: [https://www.cisecurity.org/controls/](https://www.cisecurity.org/controls/)

4. **General Data Protection Regulation (GDPR)**
   - **Official GDPR Portal:** Provides detailed information on GDPR requirements, including guidelines, tools, and
   resources for compliance.
   - URL: [https://gdpr.eu/](https://gdpr.eu/)

5. **Health Insurance Portability and Accountability Act (HIPAA)**
   - **HIPAA Journal:** Offers news, resources, and guidelines for ensuring compliance with HIPAA regulations,
   particularly in the healthcare sector.
   - URL: [https://www.hipaajournal.com/](https://www.hipaajournal.com/)

6. **Payment Card Industry Data Security Standard (PCI DSS)**
   - **Official PCI Security Standards Council:** Provides comprehensive resources, including guidelines and tools for
   complying with PCI DSS requirements.
   - URL: [https://www.pcisecuritystandards.org/](https://www.pcisecuritystandards.org/)

7. **Cybersecurity & Infrastructure Security Agency (CISA)**
   - **CISA Best Practices:** Offers guidelines and resources for improving cybersecurity, including incident response
   planning and third-party risk management.
   - URL: [https://www.cisa.gov/publication/best-practices](https://www.cisa.gov/publication/best-practices)

8. **Cloud Security Alliance (CSA)**
   - **CSA Security Guidance for Cloud Computing:** Provides best practices and guidance for ensuring compliance and
   security in cloud environments.
   - URL:
   [https://cloudsecurityalliance.org/artifacts/security-guidance-v4/](https://cloudsecurityalliance.org/artifacts/security-guidance-v4/)

9. **International Association of Privacy Professionals (IAPP)**
   - **IAPP Resource Center:** Offers a wealth of resources, including whitepapers, research, and tools, to help
   organizations comply with data protection regulations.
   - URL: [https://iapp.org/resources/](https://iapp.org/resources/)

10. **SANS Institute**

- **SANS Security Resources:** Provides extensive resources, including guides, whitepapers, and training courses,
for improving security and regulatory compliance.
- URL: [https://www.sans.org/security-resources/](https://www.sans.org/security-resources/)

---

---

