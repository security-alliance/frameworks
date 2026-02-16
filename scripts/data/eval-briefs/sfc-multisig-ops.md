# Evaluation Brief: sfc-multisig-ops

## TASK

For each control below, evaluate whether the candidate framework pages ACTUALLY meet the baseline requirements.
A page must SUBSTANTIVELY address the baseline — not just mention related keywords.
Be strict: if a baseline says "reviewed at least annually" and the page doesn't mention review cadence, that baseline is NOT met.

## CONTROLS (24 total)

### ms-1.1.1: Named Multisig Operations Owner
**Question:** Is there a clearly named person or team accountable for multisig operations?
**Baselines (1):**
  1. Accountability scope covers policy maintenance, signer onboarding/offboarding, documentation accuracy, periodic reviews, and incident escalation
**Candidate pages:** /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/implementation-checklist, /multisig-for-protocols/overview

### ms-1.1.2: Multisig Registry and Documentation
**Question:** Do you maintain a complete, accurate, and accessible record of all your multisigs, their configurations, and their signers?
**Baselines (3):**
  1. Registry includes address, network, threshold, classification, purpose, signer addresses, controlled contracts, on-chain roles, and last review date
  2. Updated within 24 hours for security-critical changes, 3 days for routine changes
  3. Accessible to signers and key personnel
**Candidate pages:** /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/implementation-checklist, /multisig-for-protocols/setup-and-configuration

### ms-2.1.1: Multisig Classification and Risk-Based Controls
**Question:** Do you classify your multisigs by risk level and apply security controls proportional to each classification?
**Baselines (5):**
  1. Classification considers impact factors (financial exposure, protocol criticality, reputational risk) and operational needs (response time, coordination complexity)
  2. Each classification maps to specific required controls (thresholds, quorum composition, review cadence)
  3. All multisigs must have at least 3 distinct signers with a signing threshold of 50% or greater; N-of-N configurations should be avoided
  4. Higher-risk classifications require stronger controls (more signers, higher thresholds)
  5. Classifications reviewed every 6 months and after significant changes (TVL shifts, new products, protocol upgrades, security incidents)
**Candidate pages:** /multisig-for-protocols/implementation-checklist, /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/overview

### ms-2.1.2: Contract-Level Security Controls
**Question:** Have you evaluated contract-level security controls that could limit the impact of a multisig compromise?
**Baselines (4):**
  1. Evaluation covers timelocks, modules, guards, address whitelisting, invariant enforcement, and parameter bounds
  2. Controls evaluated for each multisig based on classification
  3. Security review required before enabling any module or guard
  4. Decisions documented, including rationale for controls not implemented
**Candidate pages:** /multisig-for-protocols/implementation-checklist, /multisig-for-protocols/overview, /wallet-security/secure-multisig-best-practices

### ms-2.1.3: Exception Approval Process
**Question:** Do you have a process for approving and tracking exceptions to multisig policies?
**Baselines (2):**
  1. Exceptions require documented justification, expiry date, compensating controls, and remediation plan
  2. Critical-class exceptions require executive or security-lead approval
**Candidate pages:** /multisig-for-protocols/implementation-checklist, /multisig-for-protocols/overview, /wallet-security/secure-multisig-best-practices

### ms-2.1.4: Wallet Segregation
**Question:** Do you distribute assets across multiple wallets to limit the impact of a single compromise?
**Baselines (2):**
  1. Segregation considers value, operational needs, and risk tolerance
  2. Examples include hot/cold separation and treasury distribution across multiple wallets
**Candidate pages:** /opsec/travel/guide, /wallet-security/secure-multisig-best-practices, /wallet-security/encumbered-wallets

### ms-3.1.1: Signer Address Verification
**Question:** Do you verify that each signer address on your multisigs belongs to the intended person?
**Baselines (1):**
  1. Verification process includes message signing with the signer address, verification via an independent tool, and documented proof of verification
**Candidate pages:** /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/implementation-checklist, /multisig-for-protocols/setup-and-configuration

### ms-3.1.2: Signer Key Management Standards
**Question:** Do you enforce signer key management standards?
**Baselines (2):**
  1. Hardware wallets required for all multisig operations
  2. Each signer uses a fresh, dedicated address per multisig, used exclusively for that multisig's operations
**Candidate pages:** /multisig-for-protocols/implementation-checklist, /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/overview

### ms-3.1.3: Seed Phrase Backup and Protection
**Question:** Do you securely back up and protect signer seed phrases and recovery materials?
**Baselines (4):**
  1. Seed phrases never stored digitally, in cloud storage, or photographed
  2. Backups are geographically distributed (disaster resistant)
  3. No single point of compromise (theft resistant)
  4. Recoverable if one operator is unavailable (operator-loss resistant)
**Candidate pages:** /wallet-security/secure-multisig-best-practices, /opsec/travel/guide, /wallet-security/seed-phrase-management

### ms-3.1.4: Signer Lifecycle Management
**Question:** Do you have a defined process for adding, removing, and periodically verifying signers?
**Baselines (2):**
  1. Offboarded signers removed within 48-72 hours (Emergency-class), 7 days (Critical-class), 14 days (others)
  2. Access reviews quarterly, confirming each signer still controls their key
**Candidate pages:** /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/setup-and-configuration, /wallet-security/signing-and-verification/secure-multisig-signing-process

### ms-3.1.5: Signer Training and Assessment
**Question:** Are signers trained and assessed on security practices before they are authorized to sign?
**Baselines (3):**
  1. Training covers transaction verification, emergency procedures, phishing and social engineering awareness
  2. Practical skills assessment included
  3. Annual refreshers; updates within 30 days of significant procedure changes
**Candidate pages:** /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/implementation-checklist, /opsec/appendices/case-studies

### ms-3.1.6: Hardware Wallet Standards
**Question:** Do you define and enforce hardware wallet standards for multisig operations?
**Baselines (2):**
  1. Wallet capability requirements include adequate display, clear signing support, PIN security, and firmware integrity verification
  2. Procurement through verified supply chains (direct from manufacturer or authorized resellers), with device authenticity verification
**Candidate pages:** /multisig-for-protocols/implementation-checklist, /multisig-for-protocols/overview, /wallet-security/secure-multisig-best-practices

### ms-3.1.7: Secure Signing Environment
**Question:** Do signers use a secure environment for signing operations?
**Baselines (2):**
  1. Device security requirements documented and enforced
  2. Dedicated signing devices or network isolation for high-value operations
**Candidate pages:** /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/personal-security-opsec, /multisig-for-protocols/emergency-procedures

### ms-3.1.8: Signer Diversity
**Question:** Are your signers distributed across roles, entities, and geographies to prevent a single event from compromising quorum?
**Baselines (1):**
  1. Diversity requirements scale with multisig classification
**Candidate pages:** /multisig-for-protocols/implementation-checklist, /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/overview

### ms-4.1.1: Transaction Handling Process
**Question:** Do you have a defined, documented process for how transactions are proposed, verified, and executed?
**Baselines (8):**
  1. Process covers initiation, approval, simulation, execution, and confirmation
  2. Defines who is authorized to initiate transactions
  3. Each signer independently verifies transaction details (chain ID, target address, calldata, value, nonce, operation type) before signing
  4. Transaction hashes compared across at least two independent interfaces (e.g., web UI and CLI, or web and mobile app)
  5. DELEGATECALL operations to untrusted addresses flagged as high risk
  6. High-risk transactions (large transfers, emergency actions, protocol changes) require waiting periods where feasible and elevated threshold approval
  7. High-risk thresholds defined based on classification and reviewed periodically
  8. Private transaction submission used when appropriate to prevent front-running or MEV extraction
**Candidate pages:** /wallet-security/secure-multisig-best-practices, /wallet-security/signing-and-verification/secure-multisig-signing-process, /multisig-for-protocols/setup-and-configuration

### ms-4.1.2: Transaction Audit Trails
**Question:** Do you keep records of all transaction reviews, approvals, and executions?
**Baselines (2):**
  1. Retained for 3 years
  2. Records include proposer, approvers, verification evidence, timestamps, and issues encountered
**Candidate pages:** /multisig-for-protocols/backup-signing-and-infrastructure, /multisig-for-protocols/setup-and-configuration, /opsec/core-concepts/web3-considerations

### ms-4.1.3: Tool and Platform Evaluation
**Question:** Do you vet the tools and platforms used for multisig operations before adoption?
**Baselines (2):**
  1. Evaluation considers whether tools are open source or audited by 2+ reputable firms, have no known critical unpatched vulnerabilities, and have established ecosystem adoption
  2. Formal process for adopting new tools
**Candidate pages:** /multisig-for-protocols/implementation-checklist, /multisig-for-protocols/overview, /wallet-security/secure-multisig-best-practices

### ms-4.1.4: Backup Signing Infrastructure
**Question:** Do you have backup infrastructure in case your primary signing tools are unavailable?
**Baselines (3):**
  1. Alternate signing UI
  2. 2-3 backup RPC providers
  3. Alternate block explorer
**Candidate pages:** /multisig-for-protocols/backup-signing-and-infrastructure, /multisig-for-protocols/implementation-checklist, /opsec/travel/guide

### ms-5.1.1: Secure Communication Procedures
**Question:** Do you have secure communication procedures for multisig operations, including standard identity verification?
**Baselines (5):**
  1. Dedicated primary and backup channels on different platforms
  2. End-to-end encryption, MFA required, invitation-based membership
  3. Signer identity verified as standard procedure during signing operations (e.g., code words, video call, secondary authenticated channel)
  4. Documented procedures for channel compromise including switching to backup channels and out-of-band verification
  5. All signers trained on these procedures; compromise response tested annually
**Candidate pages:** /multisig-for-protocols/implementation-checklist, /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/backup-signing-and-infrastructure

### ms-5.1.2: Emergency Contact List
**Question:** Do you maintain a current emergency contact list for all multisig stakeholders?
**Baselines (3):**
  1. Includes protocol security team, external security resources, legal/compliance contacts, and backup contacts for signers
  2. Personal emergency contacts for each signer (e.g., trusted family member, close colleague) for situations where the signer is unreachable through normal channels
  3. Reviewed every 6 months
**Candidate pages:** /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/implementation-checklist, /multisig-for-protocols/setup-and-configuration

### ms-6.1.1: Emergency Playbooks
**Question:** Do you have step-by-step emergency playbooks?
**Baselines (3):**
  1. Scenarios covered include key compromise, lost access, communication channel compromise, and urgent protocol actions
  2. Each scenario has procedures and escalation paths
  3. Playbooks accessible through at least one backup method independent of the primary documentation platform
**Candidate pages:** /multisig-for-protocols/backup-signing-and-infrastructure, /opsec/travel/guide, /multisig-for-protocols/implementation-checklist

### ms-6.1.2: Signer Reachability and Escalation
**Question:** Can you reach enough signers to meet quorum at any time, including outside business hours?
**Baselines (4):**
  1. Response times by classification - Emergency less than 2 hours, Time-Sensitive 2-12 hours, Routine 24-48 hours
  2. Paging covers all signers including external parties
  3. Tested quarterly
  4. Escalation paths documented
**Candidate pages:** /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/emergency-procedures, /multisig-for-protocols/planning-and-classification

### ms-6.1.3: Multisig Monitoring and Alerts
**Question:** Do you monitor all multisigs for unauthorized or suspicious activity?
**Baselines (3):**
  1. Monitored events include signer/threshold changes, transfers exceeding thresholds, nonce gaps, interactions with unknown addresses, failed transactions, module/guard changes, and low submitter/proposer balances
  2. Alerting and escalation paths documented
  3. Monitoring infrastructure protected against tampering
**Candidate pages:** /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/implementation-checklist, /multisig-for-protocols/setup-and-configuration

### ms-6.1.4: Emergency Drills and Improvement
**Question:** Do you regularly rehearse your emergency procedures and track improvements?
**Baselines (3):**
  1. Annual minimum
  2. After major procedure changes
  3. Documentation includes date, participants, response times, issues identified, and improvements made
**Candidate pages:** /multisig-for-protocols/implementation-checklist, /multisig-for-protocols/emergency-procedures, /wallet-security/secure-multisig-best-practices

---

## FRAMEWORK PAGES (14 unique)

### PAGE: /wallet-security/secure-multisig-best-practices
**Title:** Secure Multisig Best Practices | SEAL
**Referenced by controls:** ms-1.1.1, ms-1.1.2, ms-2.1.1, ms-2.1.2, ms-2.1.3, ms-2.1.4, ms-3.1.1, ms-3.1.2, ms-3.1.3, ms-3.1.4, ms-3.1.5, ms-3.1.6, ms-3.1.7, ms-3.1.8, ms-4.1.1, ms-4.1.3, ms-5.1.1, ms-5.1.2, ms-6.1.2, ms-6.1.3, ms-6.1.4

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

### PAGE: /multisig-for-protocols/implementation-checklist
**Title:** Multisig Implementation Checklist | SEAL
**Referenced by controls:** ms-1.1.1, ms-1.1.2, ms-2.1.1, ms-2.1.2, ms-2.1.3, ms-3.1.1, ms-3.1.2, ms-3.1.5, ms-3.1.6, ms-3.1.8, ms-4.1.3, ms-4.1.4, ms-5.1.1, ms-5.1.2, ms-6.1.1, ms-6.1.3, ms-6.1.4

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

### PAGE: /multisig-for-protocols/overview
**Title:** Multisig Security Framework | SEAL
**Referenced by controls:** ms-1.1.1, ms-2.1.1, ms-2.1.2, ms-2.1.3, ms-3.1.2, ms-3.1.6, ms-3.1.8, ms-4.1.3

# Multisig Security Framework




## How to use this guide

**Quick start**: New to multisigs? Start with the Foundation for the essentials, then jump to your role:

- Setting up a new multisig? → Multisig Administration: [Setup &
  Configuration](/multisig-for-protocols/setup-and-configuration) and [Registration &
  Documentation](/multisig-for-protocols/registration-and-documentation)
- Joining as a signer? → [Joining a Multisig](/multisig-for-protocols/joining-a-multisig) and [Hardware Wallet Setup](/wallet-security/intermediates-&-medium-funds)
- Need to sign a transaction? → Signing & Verification:
[Safe Multisig](/wallet-security/signing-and-verification/secure-multisig-safe-verification) and
[Squads](/wallet-security/signing-and-verification/secure-multisig-squads-verification)
- Emergency situation? → [Emergency Procedures](/multisig-for-protocols/emergency-procedures)

## Core principles

- **Security first**: Every multisig must meet [minimum security standards](/wallet-security/secure-multisig-best-practices)
- **Operational readiness**: Procedures that work under pressure
- **Clear accountability**: Everyone knows their role and responsibilities
- **Emergency preparedness**: Plans for when things go wrong

## Framework Structure

### 1. Foundation

- [Secure Multisig Best Practices](/wallet-security/secure-multisig-best-practices) - Core requirements for all multisigs

### 2. Multisig Administration

- [Planning & Classification](/multisig-for-protocols/planning-and-classification) - Assess requirements and classify risk
- [Setup & Configuration](/multisig-for-protocols/setup-and-configuration) - Deploy and configure multisigs
- [Registration & Documentation](/multisig-for-protocols/registration-and-documentation) - Document and verify setup
- [Communication Setup](/multisig-for-protocols/communication-setup) - Establish secure communication channels
- [Use Case Specific Requirements](/multisig-for-protocols/use-case-specific-requirements) - Special requirements by type

### 3. For Signers

- [Hardware Wallet Setup](/wallet-security/intermediates-&-medium-funds) - Secure device configuration
- [Seed Phrase Management](/wallet-security/seed-phrase-management) - Protect your recovery keys
- [Joining a Multisig](/multisig-for-protocols/joining-a-multisig) - Verification and onboarding process
- [Safe Multisig: Step-by-Step
Verification](/wallet-security/signing-and-verification/secure-multisig-safe-verification) - Safely verify and sign transactions
- [Emergency Procedures](/multisig-for-protocols/emergency-procedures) - Handle key compromise and emergencies
- [Backup Signing & Infrastructure](/multisig-for-protocols/backup-signing-and-infrastructure) - Use backup interfaces
- [Personal Security (OpSec)](/multisig-for-protocols/personal-security-opsec) - Protect your accounts and devices
- [Incident Reporting](/multisig-for-protocols/incident-reporting) - Report security issues and incidents
- [Offboarding](/multisig-for-protocols/offboarding) - Safely leave a multisig role

### 4. Reference

- [Implementation Checklist](/multisig-for-protocols/implementation-checklist) - Verify readiness for multisig operations

---

### PAGE: /multisig-for-protocols/setup-and-configuration
**Title:** Multisig Setup & Configuration | SEAL
**Referenced by controls:** ms-1.1.2, ms-3.1.1, ms-3.1.4, ms-4.1.1, ms-4.1.2, ms-5.1.2, ms-6.1.3

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

### PAGE: /opsec/travel/guide
**Title:** Travel Security Guide
**Referenced by controls:** ms-2.1.4, ms-3.1.3, ms-4.1.4, ms-6.1.1

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

### PAGE: /wallet-security/encumbered-wallets
**Title:** TEE-based Encumbered Wallets
**Referenced by controls:** ms-2.1.4

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

### PAGE: /wallet-security/seed-phrase-management
**Title:** Seed Phrase Management
**Referenced by controls:** ms-3.1.3

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
**Title:** Secure Multisig Signing Process | SEAL
**Referenced by controls:** ms-3.1.4, ms-4.1.1

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

### PAGE: /opsec/appendices/case-studies
**Title:** OpSec Case Studies
**Referenced by controls:** ms-3.1.5

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

### PAGE: /multisig-for-protocols/personal-security-opsec
**Title:** Multisig Personal Security (OpSec) | SEAL
**Referenced by controls:** ms-3.1.7

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

### PAGE: /multisig-for-protocols/emergency-procedures
**Title:** Multisig Emergency Procedures | SEAL
**Referenced by controls:** ms-3.1.7, ms-6.1.2, ms-6.1.4

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

### PAGE: /multisig-for-protocols/backup-signing-and-infrastructure
**Title:** Backup Signing & Infrastructure | SEAL
**Referenced by controls:** ms-4.1.2, ms-4.1.4, ms-5.1.1, ms-6.1.1

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

### PAGE: /opsec/core-concepts/web3-considerations
**Title:** Web3 Security Considerations
**Referenced by controls:** ms-4.1.2

# Web3-Specific OpSec Considerations




> 🔑 **Key Takeaway**: Web3 environments require specialized security approaches that balance blockchain transparency
> with privacy, address immutability risks, manage self-custody responsibilities, secure decentralized operations,
> mitigate smart contract vulnerabilities, and navigate community-driven security challenges.

In addition to traditional OpSec principles, Web3 environments require consideration of unique challenges. Many
organizations claim to be backed only by decentralized technologies, but they later realize that part of their process
is dependant on technologies that are not.

{/* > **🔗 Related Framework:** Explore the dedicated [Web3-Specific OpSec](/operational-security/web3-specific-opsec/)
framework for comprehensive guidance. */}

## Transparency vs. Privacy

Balancing the transparent nature of blockchain with the need for operational privacy.

### Suggested steps

1. Understand what information is publicly visible on-chain
   - Transaction amounts, addresses, contract interactions, and timestamps
   - Use block explorers and analysis tools to understand your on-chain footprint
2. Develop strategies to maintain operational privacy while utilizing public blockchains
   - Use different addresses for different transaction types or business functions
   - Consider privacy-focused layer 2 solutions for sensitive operations
3. Use privacy-enhancing technologies where appropriate
   - ZK (Zero-Knowledge) protocols for privacy-preserving computations
   - Privacy pools or similar technologies (when legally permissible)
   - Privacy-focused blockchains for specific operations (e.g., Monero, Zcash)

## Immutability and Finality

Recognizing that blockchain transactions are generally irreversible, requiring heightened security before execution.

### Suggested steps

1. Implement robust verification procedures before executing transactions
   - Mandatory multi-person review for transactions above defined thresholds
   - Automated checks for anomalous transaction patterns
   - Hash verification of destination addresses
2. Use multi-signature requirements for high-value transactions
   - 3-of-5 or 2-of-3 signature schemes for treasury operations
   - Hardware wallets for each signer with physical separation
   - Time-locks for large transfers (24-48 hour delay before execution)
3. Deploy transaction simulation tools to verify outcomes before execution
   - Use Tenderly or similar platforms to simulate transactions in a fork of the chain
   - Verify gas estimates and test with small amounts first when using new contracts\
   - Use auxiliary tools such as
   [Safe Multi-sig Transaction Hashes](https://github.com/pcaversaccio/safe-tx-hashes-util)
4. Establish secure deployment practices for smart contracts
   - Use formal verification tools before mainnet deployment
   - Implement deployment scripts with dry-run functionality
   - Require multiple approvals in your deployment pipeline
   - Consider gradual deployments with circuit breakers for critical contracts

## Self-Custody Responsibility

Managing private keys and digital assets with appropriate security controls.

> **🔗 Related Framework:** For detailed guidance on wallet security practices, see the
> [Wallet Security](/wallet-security/overview) framework.

### Suggested steps

1. Develop clear procedures for wallet security
   - Air-gapped hardware wallet setups for cold storage
   - Specific seed phrase backup procedures (e.g., metal backups, split storage)
   - Clear rules for when hot vs. cold wallets should be used
2. Implement separation of duties for transaction approval
   - Different roles for transaction initiation, verification, and execution
   - Rotation of responsibilities to prevent single points of compromise
   - Hardware security modules (HSMs) for institutional-grade key management
3. Balance security with operational efficiency
   - Define thresholds for different security requirements (e.g., `<$10K`, `$10K-$100K`, `>$100K`)
   - Implement tiered wallet architecture (hot wallets for operations, cold storage for reserves)
   - Establish secure methods for replenishing hot wallets from cold storage
4. [Stay up-to-date](/awareness/staying-informed-and-continuous-learning) with best practices in wallet security and
custody solutions
   - Subscribe to security advisory services for cryptocurrencies
   - Follow developments in MPC (Multi-Party Computation) wallet technologies
   - Regularly review and test recovery procedures

## Decentralized Operations

Securing operations across distributed teams and systems.

### Suggested steps

1. Establish clear security protocols for remote team members
   - Device security requirements (disk encryption, endpoint protection, auto-updates)
   - Secure home network guidelines (dedicated VLANs, strong WPA3 passwords)
   - Clear policies for public WiFi usage (always-on VPN requirement)
2. Use secure communication channels for sensitive discussions
   - End-to-end encrypted messaging (Signal, Matrix/Element with verified devices)
   - Ephemeral messaging for highly sensitive topics (disappearing messages)
   - Encrypted video conferencing with waiting rooms and passwords (Jitsi, Signal)
   - PGP-encrypted emails for sensitive communications that need to be preserved
3. Implement strong authentication for all team members
   - Hardware security keys (Yubikeys, Passkeys) as primary 2FA method
   - TOTP apps as backup authentication method (not SMS)
   - Passwordless authentication where possible (WebAuthn/FIDO2)
   - Regular access review and prompt offboarding procedures
4. Create guidelines for secure collaboration in a distributed environment
   - Encrypted file storage and sharing (Cryptomator, end-to-end encrypted cloud storage)
   - Private repositories with signed commits for code collaboration
   - Secure DevOps practices for CI/CD pipelines
   - Role-based access to administrative systems with just-in-time privilege elevation

## Smart Contract Vulnerabilities

Addressing the immutable nature of deployed code.

### Suggested steps

1. Conduct thorough code reviews and security audits before deployment
   - Multiple independent security audits for critical contracts
   - Comprehensive test coverage (>95%) for all contract functions
   - Symbolic execution and static analysis tools (Slither, Mythril)
2. Implement upgradability patterns where appropriate
   - Proxy patterns with clear governance mechanisms
   - Immutable core logic with upgradeable periphery
   - Emergency pause functionality with decentralized controls
3. Use formal verification where possible
   - Mathematical proofs of contract correctness for critical functions
   - Verification of business logic and security properties
   - Property-based testing frameworks (Echidna, Scribble)
4. Maintain comprehensive testing environments
   - Local development environments with mainnet forking
   - Testnet deployments with real-world simulation
   - Adversarial testing and red team exercises
5. Consider timelocks and circuit breakers for critical functions
   - Time-delayed administration actions (48-72 hours)
   - Value-limit circuit breakers for suspicious transaction volumes
   - Decentralized monitoring and alerting systems

## Community Dynamics

Managing security in open, community-driven projects.

### Suggested steps

1. Develop clear security guidelines for community contributors
   - Documented security policies in repositories
   - Security templates for pull requests
   - Required security reviews for changes to sensitive components
2. Establish review processes for community-submitted code
   - Multi-level review requirements based on code criticality
   - Automated security scanning integrated into CI/CD pipelines
   - Bounty programs for vulnerability identification
3. Create security awareness programs for the community
   - Educational resources on common vulnerabilities
   - Regular security-focused community calls or workshops
   - Recognition for security-conscious contributions
4. Balance transparency with operational security needs
   - Clear guidelines on what information should remain private
   - Secure channels for reporting vulnerabilities
   - Responsible disclosure policies and timelines
   - Public security incident post-mortems (with appropriate redactions)

---

---

### PAGE: /multisig-for-protocols/planning-and-classification
**Title:** Multisig Planning & Classification | SEAL
**Referenced by controls:** ms-6.1.2

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

