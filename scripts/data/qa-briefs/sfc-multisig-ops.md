# QA Brief: sfc-multisig-ops

## YOUR TASK

Verify the evaluation claims below. For each control with refs:
1. Read the ACTUAL page content (provided below)
2. Read the control's FULL baselines
3. Check: does the page ACTUALLY meet the baselines claimed in "baselinesMet"?
4. Check: are the "baselinesMissed" correct (is there content that was overlooked)?
5. Check: is the coverage rating ("full"/"partial") justified?

Be STRICT. If the evaluator was too generous, downgrade. If they missed coverage, upgrade.

## EVALUATION CLAIMS TO VERIFY (22 controls with refs)

### ms-1.1.1: Named Multisig Operations Owner
**Full baselines:**
  1. Accountability scope covers policy maintenance, signer onboarding/offboarding, documentation accuracy, periodic reviews, and incident escalation

**Evaluator's assessment:**
- **/multisig-for-protocols/implementation-checklist** → For Multisig Administrators — **partial**
  Missed: Accountability scope covers policy maintenance, signer onboarding/offboarding, documentation accuracy, periodic reviews, and incident escalation
**Gaps:** Accountability scope covers policy maintenance, signer onboarding/offboarding, documentation accuracy, periodic reviews, and incident escalation - NO page teaches organizations HOW to establish clear accountability with defined scope covering all these areas

### ms-1.1.2: Multisig Registry and Documentation
**Full baselines:**
  1. Registry includes address, network, threshold, classification, purpose, signer addresses, controlled contracts, on-chain roles, and last review date
  2. Updated within 24 hours for security-critical changes, 3 days for routine changes
  3. Accessible to signers and key personnel

**Evaluator's assessment:**
- **/wallet-security/secure-multisig-best-practices** → Communication & Documentation — **partial**
  Met: Registry includes address, network, threshold, classification, purpose, signer addresses, controlled contracts, on-chain roles, and last review date (mentions documentation of purpose, wallet address, signer addresses)
  Missed: Updated within 24 hours for security-critical changes, 3 days for routine changes; Accessible to signers and key personnel
- **/multisig-for-protocols/implementation-checklist** → Documentation & Communication — **partial**
  Missed: Registry includes address, network, threshold, classification, purpose, signer addresses, controlled contracts, on-chain roles, and last review date; Updated within 24 hours for security-critical changes, 3 days for routine changes; Accessible to signers and key personnel
**Gaps:** Updated within 24 hours for security-critical changes, 3 days for routine changes - NO page provides specific update timeline requirements; Accessible to signers and key personnel - NO page substantively teaches access control for registry; Complete registry structure with ALL required fields (network, classification, controlled contracts, on-chain roles, last review date) not fully taught

### ms-2.1.1: Multisig Classification and Risk-Based Controls
**Full baselines:**
  1. Classification considers impact factors (financial exposure, protocol criticality, reputational risk) and operational needs (response time, coordination complexity)
  2. Each classification maps to specific required controls (thresholds, quorum composition, review cadence)
  3. All multisigs must have at least 3 distinct signers with a signing threshold of 50% or greater; N-of-N configurations should be avoided
  4. Higher-risk classifications require stronger controls (more signers, higher thresholds)
  5. Classifications reviewed every 6 months and after significant changes (TVL shifts, new products, protocol upgrades, security incidents)

**Evaluator's assessment:**
- **/multisig-for-protocols/planning-and-classification** → Classification Process — **full**
  Met: Classification considers impact factors (financial exposure, protocol criticality, reputational risk) and operational needs (response time, coordination complexity); Each classification maps to specific required controls (thresholds, quorum composition, review cadence); Higher-risk classifications require stronger controls (more signers, higher thresholds); Classifications reviewed every 6 months and after significant changes (TVL shifts, new products, protocol upgrades, security incidents)
  Missed: All multisigs must have at least 3 distinct signers with a signing threshold of 50% or greater; N-of-N configurations should be avoided
- **/wallet-security/secure-multisig-best-practices** → Thresholds & Configuration — **full**
  Met: All multisigs must have at least 3 distinct signers with a signing threshold of 50% or greater; N-of-N configurations should be avoided; Higher-risk classifications require stronger controls (more signers, higher thresholds)
  Missed: Classification considers impact factors and operational needs in a formal framework; Each classification maps to specific required controls; Classifications reviewed every 6 months and after significant changes

### ms-2.1.2: Contract-Level Security Controls
**Full baselines:**
  1. Evaluation covers timelocks, modules, guards, address whitelisting, invariant enforcement, and parameter bounds
  2. Controls evaluated for each multisig based on classification
  3. Security review required before enabling any module or guard
  4. Decisions documented, including rationale for controls not implemented

**Evaluator's assessment:**
- **/multisig-for-protocols/setup-and-configuration** → Contract-Level Controls — **partial**
  Met: Evaluation covers timelocks, modules, guards, address whitelisting, invariant enforcement, and parameter bounds; Security review required before enabling any module or guard
  Missed: Controls evaluated for each multisig based on classification; Decisions documented, including rationale for controls not implemented
- **/wallet-security/secure-multisig-best-practices** → Contract-Level Security — **partial**
  Met: Evaluation covers timelocks, modules, guards, address whitelisting, invariant enforcement, and parameter bounds
  Missed: Controls evaluated for each multisig based on classification; Security review required before enabling any module or guard; Decisions documented, including rationale for controls not implemented
**Gaps:** Controls evaluated for each multisig based on classification - NO page teaches systematic evaluation process tied to classification levels; Decisions documented, including rationale for controls not implemented - NO page provides documentation requirements for control selection decisions

### ms-2.1.4: Wallet Segregation
**Full baselines:**
  1. Segregation considers value, operational needs, and risk tolerance
  2. Examples include hot/cold separation and treasury distribution across multiple wallets

**Evaluator's assessment:**
- **/wallet-security/secure-multisig-best-practices** → General Rules — **partial**
  Missed: Segregation considers value, operational needs, and risk tolerance; Examples include hot/cold separation and treasury distribution across multiple wallets
**Gaps:** Segregation considers value, operational needs, and risk tolerance - NO page substantively teaches HOW to determine segregation strategy; Examples include hot/cold separation and treasury distribution across multiple wallets - mentioned in context of travel security in /opsec/travel/guide but NOT as a multisig operational requirement

### ms-3.1.1: Signer Address Verification
**Full baselines:**
  1. Verification process includes message signing with the signer address, verification via an independent tool, and documented proof of verification

**Evaluator's assessment:**
- **/wallet-security/secure-multisig-best-practices** → Communication & Documentation — **full**
  Met: Verification process includes message signing with the signer address, verification via an independent tool, and documented proof of verification
- **/multisig-for-protocols/setup-and-configuration** → Pre-Launch Checklist — **partial**
  Missed: Verification process includes message signing with the signer address, verification via an independent tool, and documented proof of verification

### ms-3.1.2: Signer Key Management Standards
**Full baselines:**
  1. Hardware wallets required for all multisig operations
  2. Each signer uses a fresh, dedicated address per multisig, used exclusively for that multisig's operations

**Evaluator's assessment:**
- **/wallet-security/secure-multisig-best-practices** → Thresholds & Configuration — **full**
  Met: Hardware wallets required for all multisig operations; Each signer uses a fresh, dedicated address per multisig, used exclusively for that multisig's operations

### ms-3.1.3: Seed Phrase Backup and Protection
**Full baselines:**
  1. Seed phrases never stored digitally, in cloud storage, or photographed
  2. Backups are geographically distributed (disaster resistant)
  3. No single point of compromise (theft resistant)
  4. Recoverable if one operator is unavailable (operator-loss resistant)

**Evaluator's assessment:**
- **/wallet-security/seed-phrase-management** → Secure Storage Practices — **full**
  Met: Seed phrases never stored digitally, in cloud storage, or photographed; Backups are geographically distributed (disaster resistant); No single point of compromise (theft resistant); Recoverable if one operator is unavailable (operator-loss resistant)

### ms-3.1.4: Signer Lifecycle Management
**Full baselines:**
  1. Offboarded signers removed within 48-72 hours (Emergency-class), 7 days (Critical-class), 14 days (others)
  2. Access reviews quarterly, confirming each signer still controls their key

**Evaluator's assessment:**
- **/wallet-security/secure-multisig-best-practices** → Signer rotation — **partial**
  Missed: Offboarded signers removed within 48-72 hours (Emergency-class), 7 days (Critical-class), 14 days (others); Access reviews quarterly, confirming each signer still controls their key
**Gaps:** Offboarded signers removed within 48-72 hours (Emergency-class), 7 days (Critical-class), 14 days (others) - NO page provides specific timeline requirements by classification; Access reviews quarterly, confirming each signer still controls their key - NO page teaches quarterly access review process

### ms-3.1.5: Signer Training and Assessment
**Full baselines:**
  1. Training covers transaction verification, emergency procedures, phishing and social engineering awareness
  2. Practical skills assessment included
  3. Annual refreshers; updates within 30 days of significant procedure changes

**Evaluator's assessment:**
- **/multisig-for-protocols/implementation-checklist** → For Signers — **full**
  Met: Training covers transaction verification, emergency procedures, phishing and social engineering awareness; Practical skills assessment included
  Missed: Annual refreshers; updates within 30 days of significant procedure changes
**Gaps:** Annual refreshers; updates within 30 days of significant procedure changes - NO page specifies ongoing training cadence requirements

### ms-3.1.6: Hardware Wallet Standards
**Full baselines:**
  1. Wallet capability requirements include adequate display, clear signing support, PIN security, and firmware integrity verification
  2. Procurement through verified supply chains (direct from manufacturer or authorized resellers), with device authenticity verification

**Evaluator's assessment:**
- **/multisig-for-protocols/implementation-checklist** → Hardware & Security Setup — **full**
  Met: Wallet capability requirements include adequate display, clear signing support, PIN security, and firmware integrity verification; Procurement through verified supply chains (direct from manufacturer or authorized resellers), with device authenticity verification

### ms-3.1.7: Secure Signing Environment
**Full baselines:**
  1. Device security requirements documented and enforced
  2. Dedicated signing devices or network isolation for high-value operations

**Evaluator's assessment:**
- **/multisig-for-protocols/personal-security-opsec** → Network Security — **full**
  Met: Device security requirements documented and enforced; Dedicated signing devices or network isolation for high-value operations

### ms-3.1.8: Signer Diversity
**Full baselines:**
  1. Diversity requirements scale with multisig classification

**Evaluator's assessment:**
- **/wallet-security/secure-multisig-best-practices** → Strategic Signer Distribution — **full**
  Met: Diversity requirements scale with multisig classification (inferred from role diversity, geographical separation, external parties requirements)

### ms-4.1.1: Transaction Handling Process
**Full baselines:**
  1. Process covers initiation, approval, simulation, execution, and confirmation
  2. Defines who is authorized to initiate transactions
  3. Each signer independently verifies transaction details (chain ID, target address, calldata, value, nonce, operation type) before signing
  4. Transaction hashes compared across at least two independent interfaces (e.g., web UI and CLI, or web and mobile app)
  5. DELEGATECALL operations to untrusted addresses flagged as high risk
  6. High-risk transactions (large transfers, emergency actions, protocol changes) require waiting periods where feasible and elevated threshold approval
  7. High-risk thresholds defined based on classification and reviewed periodically
  8. Private transaction submission used when appropriate to prevent front-running or MEV extraction

**Evaluator's assessment:**
- **/wallet-security/signing-and-verification/secure-multisig-signing-process** → Phase 1: Signing the Off-Chain Message — **full**
  Met: Process covers initiation, approval, simulation, execution, and confirmation; Each signer independently verifies transaction details (chain ID, target address, calldata, value, nonce, operation type) before signing; Transaction hashes compared across at least two independent interfaces; DELEGATECALL operations to untrusted addresses flagged as high risk
  Missed: Defines who is authorized to initiate transactions; High-risk transactions require waiting periods where feasible and elevated threshold approval; High-risk thresholds defined based on classification and reviewed periodically; Private transaction submission used when appropriate to prevent front-running or MEV extraction
- **/wallet-security/secure-multisig-best-practices** → Operational Best Practices — **partial**
  Met: Each signer independently verifies transaction details before signing; Transaction simulation used before signing
  Missed: Process covers initiation, approval, simulation, execution, and confirmation; Defines who is authorized to initiate transactions; Transaction hashes compared across at least two independent interfaces; DELEGATECALL operations flagged as high risk; High-risk transactions require waiting periods and elevated threshold approval; High-risk thresholds defined based on classification; Private transaction submission used when appropriate
**Gaps:** Defines who is authorized to initiate transactions - NO page teaches authorization framework for transaction initiation; High-risk transactions require waiting periods where feasible and elevated threshold approval - mentioned timelocks in setup but not as operational requirement; High-risk thresholds defined based on classification and reviewed periodically - NO page teaches risk threshold definition process; Private transaction submission used when appropriate to prevent front-running or MEV extraction - NO page teaches when/how to use private RPCs for transaction submission

### ms-4.1.3: Tool and Platform Evaluation
**Full baselines:**
  1. Evaluation considers whether tools are open source or audited by 2+ reputable firms, have no known critical unpatched vulnerabilities, and have established ecosystem adoption
  2. Formal process for adopting new tools

**Evaluator's assessment:**
- **/multisig-for-protocols/implementation-checklist** → Transaction Verification — **partial**
  Met: Evaluation considers whether tools are open source or audited by 2+ reputable firms (implied by tool recommendations)
  Missed: Formal process for adopting new tools; Tools have no known critical unpatched vulnerabilities and have established ecosystem adoption
**Gaps:** Formal process for adopting new tools - NO page teaches tool adoption approval process; Tools have no known critical unpatched vulnerabilities and have established ecosystem adoption - mentioned but not taught as evaluation criteria

### ms-4.1.4: Backup Signing Infrastructure
**Full baselines:**
  1. Alternate signing UI
  2. 2-3 backup RPC providers
  3. Alternate block explorer

**Evaluator's assessment:**
- **/multisig-for-protocols/backup-signing-and-infrastructure** → UI Alternatives — **full**
  Met: Alternate signing UI; 2-3 backup RPC providers; Alternate block explorer

### ms-5.1.1: Secure Communication Procedures
**Full baselines:**
  1. Dedicated primary and backup channels on different platforms
  2. End-to-end encryption, MFA required, invitation-based membership
  3. Signer identity verified as standard procedure during signing operations (e.g., code words, video call, secondary authenticated channel)
  4. Documented procedures for channel compromise including switching to backup channels and out-of-band verification
  5. All signers trained on these procedures; compromise response tested annually

**Evaluator's assessment:**
- **/multisig-for-protocols/implementation-checklist** → Documentation & Communication — **partial**
  Met: Dedicated primary and backup channels on different platforms; End-to-end encryption, MFA required, invitation-based membership
  Missed: Signer identity verified as standard procedure during signing operations (e.g., code words, video call, secondary authenticated channel); Documented procedures for channel compromise including switching to backup channels and out-of-band verification; All signers trained on these procedures; compromise response tested annually
- **/multisig-for-protocols/emergency-procedures** → Communication Account Compromise — **partial**
  Met: Documented procedures for channel compromise including switching to backup channels and out-of-band verification
  Missed: Dedicated primary and backup channels on different platforms; End-to-end encryption, MFA required, invitation-based membership; Signer identity verified as standard procedure during signing operations; All signers trained on these procedures; compromise response tested annually
**Gaps:** Signer identity verified as standard procedure during signing operations (e.g., code words, video call, secondary authenticated channel) - mentioned in emergency procedures but NOT as standard operational procedure for ALL signing operations; All signers trained on these procedures; compromise response tested annually - NO page specifies annual testing requirement for communication compromise procedures

### ms-5.1.2: Emergency Contact List
**Full baselines:**
  1. Includes protocol security team, external security resources, legal/compliance contacts, and backup contacts for signers
  2. Personal emergency contacts for each signer (e.g., trusted family member, close colleague) for situations where the signer is unreachable through normal channels
  3. Reviewed every 6 months

**Evaluator's assessment:**
- **/multisig-for-protocols/implementation-checklist** → Documentation & Communication — **partial**
  Missed: Includes protocol security team, external security resources, legal/compliance contacts, and backup contacts for signers; Personal emergency contacts for each signer (e.g., trusted family member, close colleague) for situations where the signer is unreachable through normal channels; Reviewed every 6 months
- **/multisig-for-protocols/emergency-procedures** → Emergency Contact Information — **partial**
  Met: Includes protocol security team, external security resources, legal/compliance contacts, and backup contacts for signers
  Missed: Personal emergency contacts for each signer; Reviewed every 6 months
**Gaps:** Personal emergency contacts for each signer (e.g., trusted family member, close colleague) for situations where the signer is unreachable through normal channels - NO page teaches requirement for personal emergency contacts; Reviewed every 6 months - NO page specifies review cadence for emergency contact lists

### ms-6.1.1: Emergency Playbooks
**Full baselines:**
  1. Scenarios covered include key compromise, lost access, communication channel compromise, and urgent protocol actions
  2. Each scenario has procedures and escalation paths
  3. Playbooks accessible through at least one backup method independent of the primary documentation platform

**Evaluator's assessment:**
- **/multisig-for-protocols/emergency-procedures** → Key Compromise — **full**
  Met: Scenarios covered include key compromise, lost access, communication channel compromise, and urgent protocol actions; Each scenario has procedures and escalation paths; Playbooks accessible through at least one backup method independent of the primary documentation platform

### ms-6.1.2: Signer Reachability and Escalation
**Full baselines:**
  1. Response times by classification - Emergency less than 2 hours, Time-Sensitive 2-12 hours, Routine 24-48 hours
  2. Paging covers all signers including external parties
  3. Tested quarterly
  4. Escalation paths documented

**Evaluator's assessment:**
- **/multisig-for-protocols/planning-and-classification** → Step 2: Operational Assessment — **partial**
  Met: Response times by classification - Emergency less than 2 hours, Time-Sensitive 2-12 hours, Routine 24-48 hours
  Missed: Paging covers all signers including external parties; Tested quarterly; Escalation paths documented
- **/multisig-for-protocols/emergency-procedures** → For Emergency Response Multisigs — **partial**
  Met: Escalation paths documented
  Missed: Response times by classification; Paging covers all signers including external parties; Tested quarterly
**Gaps:** Paging covers all signers including external parties - NO page teaches establishment of paging system for all signers; Tested quarterly - NO page specifies quarterly testing requirement for reachability

### ms-6.1.3: Multisig Monitoring and Alerts
**Full baselines:**
  1. Monitored events include signer/threshold changes, transfers exceeding thresholds, nonce gaps, interactions with unknown addresses, failed transactions, module/guard changes, and low submitter/proposer balances
  2. Alerting and escalation paths documented
  3. Monitoring infrastructure protected against tampering

**Evaluator's assessment:**
- **/wallet-security/secure-multisig-best-practices** → Operational Best Practices — **partial**
  Met: Monitored events include signer/threshold changes, transfers exceeding thresholds, nonce gaps, interactions with unknown addresses, failed transactions, module/guard changes (partial list mentioned)
  Missed: Alerting and escalation paths documented; Monitoring infrastructure protected against tampering
- **/multisig-for-protocols/setup-and-configuration** → Active Monitoring — **partial**
  Met: Monitored events include proposed transactions, new signatures, and owner changes (partial list)
  Missed: Monitored events include transfers exceeding thresholds, nonce gaps, interactions with unknown addresses, failed transactions, module/guard changes, low submitter/proposer balances; Alerting and escalation paths documented; Monitoring infrastructure protected against tampering
**Gaps:** Complete list of monitored events (transfers exceeding thresholds, nonce gaps, interactions with unknown addresses, failed transactions, module/guard changes, low submitter/proposer balances) - NO page provides comprehensive monitoring event list; Alerting and escalation paths documented - NO page teaches documentation of alert escalation; Monitoring infrastructure protected against tampering - NO page addresses monitoring system security

### ms-6.1.4: Emergency Drills and Improvement
**Full baselines:**
  1. Annual minimum
  2. After major procedure changes
  3. Documentation includes date, participants, response times, issues identified, and improvements made

**Evaluator's assessment:**
- **/multisig-for-protocols/implementation-checklist** → Specialized Training by Use Case — **partial**
  Met: Annual minimum (implied by emergency simulation drills requirement)
  Missed: After major procedure changes; Documentation includes date, participants, response times, issues identified, and improvements made
- **/multisig-for-protocols/emergency-procedures** → Emergency Drill Procedures — **full**
  Met: Annual minimum (quarterly for some tests); After major procedure changes (implied); Documentation includes date, participants, response times, issues identified, and improvements made

## FALSE-NEGATIVE CHECK (2 controls marked "no coverage")

Verify these truly have no relevant framework page. If any page below partially covers them, note it.

### ms-2.1.3: Exception Approval Process
**Baselines:** Exceptions require documented justification, expiry date, compensating controls, and remediation plan; Critical-class exceptions require executive or security-lead approval

### ms-4.1.2: Transaction Audit Trails
**Baselines:** Retained for 3 years; Records include proposer, approvers, verification evidence, timestamps, and issues encountered

---

## FRAMEWORK PAGES (9 pages)

### PAGE: /multisig-for-protocols/backup-signing-and-infrastructure

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

### PAGE: /multisig-for-protocols/emergency-procedures

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

### PAGE: /multisig-for-protocols/implementation-checklist

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

### PAGE: /multisig-for-protocols/personal-security-opsec

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

### PAGE: /multisig-for-protocols/planning-and-classification

TagList,
  AttributionList,
  TagProvider,
  TagFilter,
  ContributeFooter,
} from "../../../components";




# Planning & Classification




Before setting up a new multisig, take time to properly assess its role and requirements. This planning phase will guide
all subsequent configuration decisions and help ensure appropriate security measures.

## Before You Start

### Define Purpose and Scope

Document the multisig's intended use:

- **Primary function** - What will this multisig do?
- **Asset types and amounts** - What will it control?
- **Operational frequency** - How often will it be used?
- **Decision timeline** - How quickly must it respond?
- **Integration points** - What systems will it interact with?

### Assess Constraints and Recovery

Consider limiting factors that affect risk:

- **Smart contract constraints** - What technical limits reduce risk?
- **Governance recovery** - Can governance override or recover funds?
- **Operational limits** - Are there built-in spending or parameter limits?
- **Backup mechanisms** - What happens if this multisig fails?

### Identify Stakeholders

Determine who should be involved:

- **Required expertise** - What knowledge is needed for decisions?
- **Geographic distribution** - Do you need global coverage?
- **External signers** - Should independent parties be involved?
- **Backup signers** - Who can step in if primary signers are unavailable?

## Classification Process

Use this dual classification system to determine appropriate security measures. These classifications are guidance to
help you think through risk levels - they inform threshold selection, signer requirements, and operational procedures in
later sections.

### Step 1: Impact Assessment

What happens if this multisig is compromised or fails?

#### Financial Exposure:

- Direct funds controlled by the multisig
- Indirect exposure through protocol impacts
- Maximum potential loss in worst-case scenario

#### Protocol Impact:

- Can the protocol function without this multisig?
- How difficult would recovery be?
- Are there alternative execution paths?

#### Reputational Risk:

- How visible is this multisig to the community?
- What would compromise mean for the protocol's reputation?
- Are there regulatory or compliance considerations?

#### Impact Classification

| Level | Financial Exposure | Protocol Impact | Reputational Risk |
| ------------ | ---------------------- | ----------------------------------------------------- | ----------------------------- |
| **Low** | \<$100k direct exposure | Minimal disruption, alternative paths exist | Limited scope impact |
| **Medium** | $100k - $1M exposure | Significant operational delays, workarounds available | Moderate reputational concern |
| **High** | $1M - $10M exposure | Major protocol disruption, difficult recovery | Serious reputational damage |
| **Critical** | \>$10M exposure | Protocol-wide failure, catastrophic impact | Severe reputational damage |

### Step 2: Operational Assessment

How quickly and under what conditions must this multisig respond?

#### Response Time Requirements:

- How quickly must decisions be made?
- What are the consequences of delays?
- Are there market or competitive timing factors?

#### Decision Context:

- Are operations routine and predictable?
- Do market conditions affect timing?
- Is this primarily for emergency response?

#### Coordination Complexity:

- How many parties must coordinate?
- Are signers distributed globally?
- What communication is required?

#### Operational Classification

| Type | Response Time | Decision Context | Verification Level |
| ------------------ | ------------- | -------------------------------------------- | -------------------------------- |
| **Routine** | 24-48 hours | Standard procedures, predictable operations | Full verification protocols |
| **Time-Sensitive** | 2-12 hours | Market conditions, protocol needs | Streamlined but thorough |
| **Emergency** | \<2 hours | Crisis response, preventing immediate damage | Minimal delays, risk-appropriate |

### Step 3: Classification Matrix

Combine your impact and operational assessments. Below are some example configurations.

| Use Case | Impact | Operational | Standard Threshold |
| ------------------- | -------- | -------------- | ------------------ |
| Emergency Freeze | Critical | Emergency | 2/4 |
| Protocol Parameters | High | Routine | 4/7 (higher for upgrades, consider 7/9+) |
| Capital Allocation | High | Time-Sensitive | 3/5 |
| Treasury - Large | High | Routine | 4/7 |
| Treasury - Small | Medium | Routine | 3/5 |
| Constrained DeFi | Medium | Time-Sensitive | 2/3 |

### Step 4: Document Your Decision

Record your classification decision in the [Registration template](/multisig-for-protocols/registration-and-documentation#registration-template).

## Important Notes

⚠️ **When between classifications**: Always err toward higher security requirements. Classifications can be relaxed with
proper justification, but security incidents cannot be undone.

This classification will guide your threshold selection ([Thresholds &
Configuration](/wallet-security/secure-multisig-best-practices#thresholds--configuration)), signer requirements, and
operational procedures throughout the rest of the documentation.

## Next Steps

After completing classification, proceed to:

1. [Setup & Configuration](/multisig-for-protocols/setup-and-configuration) - Deploy your multisig
2. [Registration & Documentation](/multisig-for-protocols/registration-and-documentation) - Document your setup

---

### PAGE: /multisig-for-protocols/setup-and-configuration

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

### PAGE: /wallet-security/secure-multisig-best-practices

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

### PAGE: /wallet-security/seed-phrase-management

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

### PAGE: /wallet-security/signing-and-verification/secure-multisig-signing-process

# Verifying Multisig Transactions




The security of a multisig wallet relies on each signer independently verifying what they are signing. A compromised web
interface could present a legitimate-looking transaction while tricking a hardware wallet into signing a malicious one.

The verification process is divided into two distinct phases: signing the off-chain message and executing the on-chain transaction.

## Key Definitions (EVM)

- **Domain Hash**: EIP-712 domain separator, unique to each Safe. Ensures signatures cannot be replayed on other
  networks or Safes.
- **Message Hash**: Raw hash of transaction parameters. This appears on your hardware wallet.
- **SafeTxHash**: Combined hash of domain + message hash. Used for nested Safe approvals.

## Phase 1: Signing the Off-Chain Message

When you are the first signer or are adding your signature to a transaction that has not yet met its threshold, you are
not sending an on-chain transaction. Instead, you are signing a structured, off-chain message that conforms to the
**EIP-712** standard.

**Goal**: To confirm that the cryptographic hash displayed on your hardware wallet exactly matches the hash of the
transaction you intend to approve.

### Process

1. **Initiate Signing**: Start the signing process in the multisig wallet's web interface.
2. **Verify on Hardware Wallet**: Your hardware wallet will display an EIP-712 hash for you to sign.
3. **Compute Hash**: Use an independent, local tool to re-calculate the expected hash from the transaction's parameters
(`nonce`, `to`, `value`, `data`, etc.). For a list of recommended options, see the [Transaction Verification
Tools](/wallet-security/tools-&-resources) section.
4. **Compare Hashes**: Compare the `SafeTxHash` generated by the local tool with the hash displayed on your hardware
wallet's screen. **They must match perfectly.**
   - All signers must verify transaction data on at least two independent devices
   - All signers must verify transaction data through at least two separate communication channels
5. **Simulate Transaction**: At least 2 signers must use transaction simulation tools to verify transaction effects.
Simulation testing output should be shared with and reviewed by all signers before signing.
   - Warning: Simulations can be spoofed - always apply critical thinking and good judgement during
     transaction reviews since a simulation can display one thing and then do something else entirely
     when actually executed on chain
6. **Sign**: If the hashes match and simulation results are verified, you can confidently sign the message on your
hardware wallet. This confirms you are approving the correct transaction, even if the web UI has been compromised.

## Phase 2: Executing the On-Chain Transaction

Once a transaction has the required M-of-N signatures, it can be executed. This involves submitting a final on-chain
transaction that calls the `execTransaction` function on the multisig contract, passing in all the previously signed
data.

**Goal**: To confirm that the on-chain transaction being sent correctly encapsulates the multisig transaction you and
other signers approved.

### Process

1. **Initiate Execution**: In the multisig interface, start the execution of the fully signed transaction.
2. **Verify Calldata**: Your hardware wallet will prompt you to sign a new on-chain transaction. It will display the raw
transaction data (calldata), which should show a call to the `execTransaction` function.
3. **Decode and Compare**: Use a calldata decoder
(e.g.,[calldata.swiss-knife.xyz](https://calldata.swiss-knife.xyz/decoder)) to parse the data shown on your hardware
wallet.
4. **Confirm Parameters**: Carefully check the decoded parameters within the `execTransaction` call, especially the
internal destination address (`to`), `value`, and `data` payload. Ensure they match the original, intended transaction.
5. **Sign and Broadcast**: If the calldata is correct, sign the transaction on your hardware wallet to broadcast it to
the network.

## Operational Best Practices

> ⚠️ **Beware of `DELEGATECALL`**: In a smart contract multisig transaction, an `operation: 1 (DELEGATECALL)` is
> dangerous if the target contract is not explicitly known and trusted. This opcode gives another contract full control
> over your wallet's context and storage.

- **Transaction Simulation**: Before signing, use a simulator like **[Tenderly](https://tenderly.co/)** or
  **[Alchemy](https://www.alchemy.com/docs/reference/simulation)** to preview the transaction's outcome. This helps
  confirm that it will not revert and will result in the expected state changes.
- **Hardware Wallet Standard**: All multisig signers should use hardware wallets to protect their keys from online
  threats. Data shown in a browser extension wallet should be treated with the same skepticism as data in the web UI.
- **Secure signing environment**: Use a dedicated, air-gapped, or hardened device. Avoid primary work laptops.
- **Alternative Frontends**: To further reduce reliance on a single public UI, consider using an alternative or
  self-hosted multisig interface.
- **Separate browser/profile for signing**: Use a dedicated browser or browser profile when interacting with signing UIs
  to reduce cross-extension/session risk.
- **Require a "how to check" guide**: Every transaction should include explicit verification instructions for signers.
- **Verify addresses and amounts via independent sources**: Do not rely solely on messages from co-signers.
- **Check transactions in the queue**: If unclear what a transaction does and why, do not sign; ask for explanation.
- **Communicate status**: After review, state whether a transaction is ready to execute and confirm after signing
  ("checked, signed, X more required").
- **Last signer executes**: If executable immediately, the last signer should execute; otherwise coordinate clearly.
- **Re-verify before execution**: Treat execution as a fresh signing event and re-check parameters.
- **Use checksummed addresses**: Always use checksummed format to prevent copy/paste or case errors.

### Simulation notes with timelocks

When using a timelock, simulations may show the staging event rather than actual execution. Inspect the staged payload
and verify cancellation/execution roles and parameters before proceeding.

---

---

