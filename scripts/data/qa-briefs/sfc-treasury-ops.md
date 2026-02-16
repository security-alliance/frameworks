# QA Brief: sfc-treasury-ops

## YOUR TASK

Verify the evaluation claims below. For each control with refs:
1. Read the ACTUAL page content (provided below)
2. Read the control's FULL baselines
3. Check: does the page ACTUALLY meet the baselines claimed in "baselinesMet"?
4. Check: are the "baselinesMissed" correct (is there content that was overlooked)?
5. Check: is the coverage rating ("full"/"partial") justified?

Be STRICT. If the evaluator was too generous, downgrade. If they missed coverage, upgrade.

## EVALUATION CLAIMS TO VERIFY (16 controls with refs)

### tro-1.1.2: Treasury Registry and Documentation
**Full baselines:**
  1. Registry includes wallet/account address, network/chain, custody provider, custody model, purpose/classification, authorized signers/approvers, controlled contracts or protocols, and last review date
  2. Updated within 24 hours for security-critical changes (signer changes, new wallets), 3 days for routine changes
  3. Accessible to authorized treasury personnel

**Evaluator's assessment:**
- **/treasury-operations/registration-documents** → Registration Template — **full**
  Met: Registry includes wallet/account address, network/chain, custody provider, custody model, purpose/classification, authorized signers/approvers, controlled contracts or protocols, and last review date; Accessible to authorized treasury personnel
  Missed: Updated within 24 hours for security-critical changes (signer changes, new wallets), 3 days for routine changes
**Gaps:** Updated within 24 hours for security-critical changes (signer changes, new wallets), 3 days for routine changes

### tro-1.1.3: Custody Architecture Rationale
**Full baselines:**
  1. Custody model documented for each wallet/account (custodial, self-custody, co-managed, MPC, multisig, HSM)
  2. Technology trade-offs understood by the team (not necessarily a formal document — could be a brief internal memo)
  3. Custody architecture reviewed when treasury size, operational needs, or risk profile changes significantly

**Evaluator's assessment:**
- **/treasury-operations/enhanced-controls** → MPC for Large Holdings — **partial**
  Met: Custody model documented for each wallet/account (custodial, self-custody, co-managed, MPC, multisig, HSM)
  Missed: Technology trade-offs understood by the team; Custody architecture reviewed when treasury size, operational needs, or risk profile changes significantly
**Gaps:** Technology trade-offs understood by the team (not necessarily a formal document — could be a brief internal memo); Custody architecture reviewed when treasury size, operational needs, or risk profile changes significantly

### tro-1.1.4: Treasury Infrastructure Change Management
**Full baselines:**
  1. Covers wallet setups, custody configurations, signer/approver permission changes, and protocol integrations
  2. Changes require documented approval before implementation
  3. All changes logged with justification and approver
  4. Changes reflected in the treasury registry within defined SLAs
  5. Rollback procedures documented for critical changes

**Evaluator's assessment:**
- **/treasury-operations/registration-documents** → Access Change Template — **partial**
  Met: Changes require documented approval before implementation; All changes logged with justification and approver
  Missed: Covers wallet setups, custody configurations, signer/approver permission changes, and protocol integrations; Changes reflected in the treasury registry within defined SLAs; Rollback procedures documented for critical changes
**Gaps:** Covers wallet setups, custody configurations, signer/approver permission changes, and protocol integrations; Changes reflected in the treasury registry within defined SLAs; Rollback procedures documented for critical changes

### tro-2.1.1: Treasury Wallet Risk Classification
**Full baselines:**
  1. Classification considers financial exposure, operational dependency, and regulatory impact
  2. Impact levels defined (e.g., Low <1%, Medium 1-10%, High 10-25%, Critical >25% of total assets)
  3. Operational types defined based on transaction frequency and urgency requirements
  4. Each classification maps to specific controls including approval thresholds, MFA requirements, whitelist delays, and monitoring levels
  5. Classification reviewed when asset values, operational patterns, or risk profile change significantly

**Evaluator's assessment:**
- **/treasury-operations/classification**  — **full**
  Met: Classification considers financial exposure, operational dependency, and regulatory impact; Impact levels defined (e.g., Low <1%, Medium 1-10%, High 10-25%, Critical >25% of total assets); Operational types defined based on transaction frequency and urgency requirements; Each classification maps to specific controls including approval thresholds, MFA requirements, whitelist delays, and monitoring levels; Classification reviewed when asset values, operational patterns, or risk profile change significantly

### tro-3.1.1: Custody Platform Security Configuration
**Full baselines:**
  1. Transaction policy rules configured: multi-approval workflows, approval thresholds scaled to transaction value, address whitelisting with cooling-off periods, velocity/spending limits
  2. Hardware security key MFA required for all approvers on High and Critical accounts
  3. Session timeouts and re-authentication for sensitive operations
  4. Network restrictions: IP whitelisting, VPN requirements where supported, geographic access restrictions
  5. Separation of duties enforced: initiators cannot approve their own transactions, admins cannot unilaterally execute withdrawals
  6. Platform configurations documented and reviewed at least quarterly

**Evaluator's assessment:**
- **/treasury-operations/enhanced-controls** → Access Security — **full**
  Met: Transaction policy rules configured: multi-approval workflows, approval thresholds scaled to transaction value, address whitelisting with cooling-off periods, velocity/spending limits; Hardware security key MFA required for all approvers on High and Critical accounts; Session timeouts and re-authentication for sensitive operations; Network restrictions: IP whitelisting, VPN requirements where supported, geographic access restrictions; Separation of duties enforced: initiators cannot approve their own transactions, admins cannot unilaterally execute withdrawals
  Missed: Platform configurations documented and reviewed at least quarterly
- **/treasury-operations/registration-documents** → Security Configuration Template — **full**
  Met: Transaction policy rules configured: multi-approval workflows, approval thresholds scaled to transaction value, address whitelisting with cooling-off periods, velocity/spending limits; Hardware security key MFA required for all approvers on High and Critical accounts; Session timeouts and re-authentication for sensitive operations; Network restrictions: IP whitelisting, VPN requirements where supported, geographic access restrictions; Separation of duties enforced: initiators cannot approve their own transactions, admins cannot unilaterally execute withdrawals; Platform configurations documented and reviewed at least quarterly

### tro-3.1.2: Credential and Secret Management
**Full baselines:**
  1. Covers API keys, service accounts, owner/admin credentials, and signing keys
  2. Credentials stored in dedicated secret management systems, not in code, documents, or shared drives
  3. Owner and admin credentials isolated from day-to-day operational access
  4. Credential rotation schedule defined and enforced
  5. Access to credentials logged and monitored

**Evaluator's assessment:**
- **/treasury-operations/enhanced-controls** → Access Security — **partial**
  Met: Credentials stored in dedicated secret management systems, not in code, documents, or shared drives; Owner and admin credentials isolated from day-to-day operational access
  Missed: Covers API keys, service accounts, owner/admin credentials, and signing keys; Credential rotation schedule defined and enforced; Access to credentials logged and monitored
- **/wallet-security/seed-phrase-management**  — **partial**
  Met: Credentials stored in dedicated secret management systems, not in code, documents, or shared drives
  Missed: Covers API keys, service accounts, owner/admin credentials, and signing keys; Owner and admin credentials isolated from day-to-day operational access; Credential rotation schedule defined and enforced; Access to credentials logged and monitored
**Gaps:** Credential rotation schedule defined and enforced; Access to credentials logged and monitored

### tro-3.1.3: Access Reviews for Treasury Systems
**Full baselines:**
  1. Access reviews conducted at least quarterly for High/Critical accounts, annually for others
  2. Reviews verify each user still requires their current access level
  3. Access promptly revoked when personnel change roles or leave

**Evaluator's assessment:**
- **/treasury-operations/registration-documents** → Quarterly Review Template — **full**
  Met: Access reviews conducted at least quarterly for High/Critical accounts, annually for others; Reviews verify each user still requires their current access level; Access promptly revoked when personnel change roles or leave

### tro-3.1.4: Personnel Operational Security
**Full baselines:**
  1. Device security requirements documented: dedicated devices for custody access, full disk encryption, automatic screen lock
  2. Signing devices (hardware wallets) securely stored when not in use
  3. Backup materials (seed phrases, recovery keys) stored securely with geographic distribution
  4. VPN mandatory for all remote treasury platform access
  5. Travel security procedures for personnel with signing or custody access capabilities
  6. Mobile devices used as second factors have endpoint security monitoring

**Evaluator's assessment:**
- **/treasury-operations/enhanced-controls** → Device Security — **full**
  Met: Device security requirements documented: dedicated devices for custody access, full disk encryption, automatic screen lock; VPN mandatory for all remote treasury platform access; Mobile devices used as second factors have endpoint security monitoring
  Missed: Signing devices (hardware wallets) securely stored when not in use; Backup materials (seed phrases, recovery keys) stored securely with geographic distribution; Travel security procedures for personnel with signing or custody access capabilities
- **/wallet-security/seed-phrase-management** → Secure Storage Practices — **partial**
  Met: Backup materials (seed phrases, recovery keys) stored securely with geographic distribution
  Missed: Device security requirements documented: dedicated devices for custody access, full disk encryption, automatic screen lock; Signing devices (hardware wallets) securely stored when not in use; VPN mandatory for all remote treasury platform access; Travel security procedures for personnel with signing or custody access capabilities; Mobile devices used as second factors have endpoint security monitoring
- **/multisig-for-protocols/personal-security-opsec** → Device Security — **full**
  Met: Device security requirements documented: dedicated devices for custody access, full disk encryption, automatic screen lock; Signing devices (hardware wallets) securely stored when not in use; Backup materials (seed phrases, recovery keys) stored securely with geographic distribution; VPN mandatory for all remote treasury platform access; Travel security procedures for personnel with signing or custody access capabilities; Mobile devices used as second factors have endpoint security monitoring

### tro-4.1.1: Transaction Verification and Execution
**Full baselines:**
  1. Pre-execution verification includes: recipient address validation, amount verification, network confirmation, and transaction simulation
  2. Test transactions required before sending to new addresses
  3. Address verified through multiple independent sources; never copied from email, chat, or transaction history
  4. Multi-party confirmation required: minimum 2 internal personnel for large transfers
  5. Specific procedures for receiving large incoming transfers (address generation, bidirectional test, sender coordination)
  6. Specific procedures for OTC transactions where applicable
  7. High-value transfers (organization-defined threshold) require video call verification with liveness checks
  8. All transaction parameters read aloud and confirmed before execution

**Evaluator's assessment:**
- **/treasury-operations/transaction-verification** → Execution Protocol — **full**
  Met: Pre-execution verification includes: recipient address validation, amount verification, network confirmation, and transaction simulation; Test transactions required before sending to new addresses; Address verified through multiple independent sources; never copied from email, chat, or transaction history; Multi-party confirmation required: minimum 2 internal personnel for large transfers; Specific procedures for receiving large incoming transfers (address generation, bidirectional test, sender coordination); High-value transfers (organization-defined threshold) require video call verification with liveness checks; All transaction parameters read aloud and confirmed before execution
  Missed: Specific procedures for OTC transactions where applicable
**Gaps:** Specific procedures for OTC transactions where applicable

### tro-4.1.2: Signer and Approver Knowledge
**Full baselines:**
  1. Knowledge covers: transaction verification procedures, address validation techniques, social engineering awareness, emergency procedures
  2. Competence demonstrated before authorization (e.g., verifying a test transaction end-to-end)
  3. Knowledge refreshed annually; updated within 30 days of significant procedure changes
  4. Covers custody-platform-specific workflows and policy engine rules

**Evaluator's assessment:**
- **/multisig-for-protocols/implementation-checklist** → Transaction Verification — **partial**
  Met: Knowledge covers: transaction verification procedures, address validation techniques, social engineering awareness, emergency procedures; Competence demonstrated before authorization (e.g., verifying a test transaction end-to-end)
  Missed: Knowledge refreshed annually; updated within 30 days of significant procedure changes; Covers custody-platform-specific workflows and policy engine rules
**Gaps:** Knowledge refreshed annually; updated within 30 days of significant procedure changes; Covers custody-platform-specific workflows and policy engine rules

### tro-4.1.3: Secure Communication Procedures
**Full baselines:**
  1. Dedicated primary and backup channels on different platforms
  2. End-to-end encryption, MFA required, invitation-based membership
  3. Identity verified as standard procedure during signing/approval operations (e.g., code phrases, video call, secondary authenticated channel)
  4. Anti-social-engineering protocols: established verification procedures for address changes or unusual requests
  5. Documented procedures for channel compromise including switching to backup channels and out-of-band verification
  6. All treasury personnel trained on these procedures; compromise response tested annually

**Evaluator's assessment:**
- **/multisig-for-protocols/emergency-procedures** → Communication Account Compromise — **partial**
  Met: Identity verified as standard procedure during signing/approval operations (e.g., code phrases, video call, secondary authenticated channel); Anti-social-engineering protocols: established verification procedures for address changes or unusual requests; Documented procedures for channel compromise including switching to backup channels and out-of-band verification
  Missed: Dedicated primary and backup channels on different platforms; End-to-end encryption, MFA required, invitation-based membership; All treasury personnel trained on these procedures; compromise response tested annually
**Gaps:** Dedicated primary and backup channels on different platforms; End-to-end encryption, MFA required, invitation-based membership; All treasury personnel trained on these procedures; compromise response tested annually

### tro-5.1.2: Position Lifecycle Management
**Full baselines:**
  1. Entry procedures: smart contract address verification against multiple independent sources, token approval management (minimal approvals, revocation after use)
  2. Emergency withdrawal/exit procedures documented for all active positions
  3. Alternative access methods documented in case primary UIs are unavailable (direct contract interaction, CLI tools, alternative frontends)
  4. Unbonding/unstaking timelines understood and factored into liquidity planning

**Evaluator's assessment:**
- **/treasury-operations/transaction-verification** → Transaction Parameter Security — **partial**
  Met: Entry procedures: smart contract address verification against multiple independent sources, token approval management (minimal approvals, revocation after use)
  Missed: Emergency withdrawal/exit procedures documented for all active positions; Alternative access methods documented in case primary UIs are unavailable (direct contract interaction, CLI tools, alternative frontends); Unbonding/unstaking timelines understood and factored into liquidity planning
**Gaps:** Emergency withdrawal/exit procedures documented for all active positions; Alternative access methods documented in case primary UIs are unavailable (direct contract interaction, CLI tools, alternative frontends); Unbonding/unstaking timelines understood and factored into liquidity planning

### tro-6.1.1: Monitoring and Threat Awareness
**Full baselines:**
  1. Transaction monitoring: unusual amounts, unexpected destinations, failed transactions, policy violations
  2. Account state monitoring: balance changes, configuration modifications, new device enrollments, authentication anomalies
  3. External threat intelligence: protocol vulnerabilities, DeFi/staking risks, relevant security incidents in the ecosystem
  4. Vendor/platform monitoring: custody platform status, infrastructure alerts, service availability
  5. Compliance monitoring: transactions and wallet addresses screened for sanctions and compliance risk
  6. Protocol and position monitoring: deployed protocol health, governance changes, TVL shifts, collateral ratios, reward accrual, liquidation risks
  7. Alerting with defined severity levels and escalation paths
  8. Critical alerts (large unexpected transactions, unauthorized access attempts) trigger immediate investigation
  9. Monitoring system integrity protected — alerts triggered when monitoring configurations are changed, disabled, or degraded

**Evaluator's assessment:**
- **/treasury-operations/enhanced-controls** → Security Monitoring & Logging — **partial**
  Met: Transaction monitoring: unusual amounts, unexpected destinations, failed transactions, policy violations; Account state monitoring: balance changes, configuration modifications, new device enrollments, authentication anomalies; Alerting with defined severity levels and escalation paths; Critical alerts (large unexpected transactions, unauthorized access attempts) trigger immediate investigation
  Missed: External threat intelligence: protocol vulnerabilities, DeFi/staking risks, relevant security incidents in the ecosystem; Vendor/platform monitoring: custody platform status, infrastructure alerts, service availability; Compliance monitoring: transactions and wallet addresses screened for sanctions and compliance risk; Protocol and position monitoring: deployed protocol health, governance changes, TVL shifts, collateral ratios, reward accrual, liquidation risks; Monitoring system integrity protected — alerts triggered when monitoring configurations are changed, disabled, or degraded
**Gaps:** External threat intelligence: protocol vulnerabilities, DeFi/staking risks, relevant security incidents in the ecosystem; Vendor/platform monitoring: custody platform status, infrastructure alerts, service availability; Compliance monitoring: transactions and wallet addresses screened for sanctions and compliance risk; Protocol and position monitoring: deployed protocol health, governance changes, TVL shifts, collateral ratios, reward accrual, liquidation risks; Monitoring system integrity protected — alerts triggered when monitoring configurations are changed, disabled, or degraded

### tro-6.1.2: Incident Response Plan
**Full baselines:**
  1. Severity levels defined with escalation procedures specific to treasury operations
  2. Containment procedures: fund protection actions (emergency freeze, transfer to secure cold storage, policy lockdown)
  3. Covers key scenarios: custody platform compromise, unauthorized transaction, signer key compromise, vendor breach
  4. Emergency contacts pre-documented: custody provider security team, SEAL 911, legal counsel
  5. Communication plan for stakeholders
  6. Drills conducted at least annually; after major procedure changes
  7. Drill documentation includes: date, participants, response times, issues identified, improvements made

**Evaluator's assessment:**
- **/multisig-for-protocols/emergency-procedures** → Emergency Notification Template — **partial**
  Met: Severity levels defined with escalation procedures specific to treasury operations; Containment procedures: fund protection actions (emergency freeze, transfer to secure cold storage, policy lockdown); Covers key scenarios: custody platform compromise, unauthorized transaction, signer key compromise, vendor breach; Emergency contacts pre-documented: custody provider security team, SEAL 911, legal counsel
  Missed: Communication plan for stakeholders; Drills conducted at least annually; after major procedure changes; Drill documentation includes: date, participants, response times, issues identified, improvements made
**Gaps:** Communication plan for stakeholders; Drills conducted at least annually; after major procedure changes; Drill documentation includes: date, participants, response times, issues identified, improvements made

### tro-7.1.2: Backup Infrastructure and Alternate Access
**Full baselines:**
  1. Alternate access methods for custody platforms documented and tested (e.g., API access, mobile app, secondary UI)
  2. Backup RPC providers configured
  3. Procedures for operating treasury if primary custody platform is unavailable
  4. Backup infrastructure tested at least annually

**Evaluator's assessment:**
- **/multisig-for-protocols/backup-signing-and-infrastructure** → UI Alternatives — **full**
  Met: Alternate access methods for custody platforms documented and tested (e.g., API access, mobile app, secondary UI); Backup RPC providers configured; Procedures for operating treasury if primary custody platform is unavailable; Backup infrastructure tested at least annually

### tro-8.1.1: Financial Recordkeeping and Reconciliation
**Full baselines:**
  1. All treasury transactions recorded with categorization, documentation, and authorization chain
  2. Periodic reconciliation between custody platform records, on-chain balances, and accounting records
  3. Reconciliation frequency scaled to account classification: daily for Active Operations, weekly for Warm Storage, monthly for Cold Vault
  4. Discrepancies investigated and resolved promptly
  5. Treasury reporting procedures documented with defined cadence and audience

**Evaluator's assessment:**
- **/treasury-operations/registration-documents** → Security Configuration Template — **partial**
  Met: All treasury transactions recorded with categorization, documentation, and authorization chain
  Missed: Periodic reconciliation between custody platform records, on-chain balances, and accounting records; Reconciliation frequency scaled to account classification: daily for Active Operations, weekly for Warm Storage, monthly for Cold Vault; Discrepancies investigated and resolved promptly; Treasury reporting procedures documented with defined cadence and audience
**Gaps:** Periodic reconciliation between custody platform records, on-chain balances, and accounting records; Reconciliation frequency scaled to account classification: daily for Active Operations, weekly for Warm Storage, monthly for Cold Vault; Discrepancies investigated and resolved promptly; Treasury reporting procedures documented with defined cadence and audience

## FALSE-NEGATIVE CHECK (5 controls marked "no coverage")

Verify these truly have no relevant framework page. If any page below partially covers them, note it.

### tro-1.1.1: Treasury Operations Owner
**Baselines:** Accountability scope covers policy upkeep, security reviews, operational hygiene, access control oversight, and incident escalation

### tro-2.1.2: Fund Allocation Limits and Rebalancing
**Baselines:** Maximum allocation defined per wallet, per custody provider, and per chain; Rebalancing triggers documented (e.g., when a wallet exceeds its allocation ceiling or falls below operational minimums); Allocation limits reviewed periodically and after significant treasury changes (+1 more)

### tro-5.1.1: Protocol Evaluation and Exposure Limits
**Baselines:** Due diligence process for all protocols before deployment: smart contract audit status, team reputation, TVL history, insurance coverage; Exposure limits defined per protocol, per chain, and per deployment category (DeFi, staking, liquid staking, etc.); Limits reviewed periodically and after significant market or protocol changes (+1 more)

### tro-7.1.1: Vendor Security Management
**Baselines:** Initial due diligence before adoption: security certifications (SOC 2, ISO 27001), audit history, insurance coverage, incident history; Ongoing monitoring: SOC report currency, security incident notifications, service availability tracking; Contractual security requirements verified periodically (at least annually) (+1 more)

### tro-8.1.2: Insurance Coverage
**Baselines:** Coverage scope documented: what's covered (custody theft, hack, insider fraud) and what's excluded; Coverage amounts appropriate relative to assets held; Custody provider's insurance evaluated as part of vendor due diligence (+1 more)

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

### PAGE: /treasury-operations/classification

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

### PAGE: /treasury-operations/enhanced-controls

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

### PAGE: /treasury-operations/registration-documents

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

### PAGE: /treasury-operations/transaction-verification

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

