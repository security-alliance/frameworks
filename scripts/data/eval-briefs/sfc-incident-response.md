# Evaluation Brief: sfc-incident-response

## TASK

For each control below, evaluate whether the candidate framework pages ACTUALLY meet the baseline requirements.
A page must SUBSTANTIVELY address the baseline — not just mention related keywords.
Be strict: if a baseline says "reviewed at least annually" and the page doesn't mention review cadence, that baseline is NOT met.

## CONTROLS (12 total)

### ir-1.1.1: IR Team and Role Assignments
**Question:** Do you have an incident response team with clearly defined roles and responsibilities?
**Baselines (7):**
  1. Incident commander (with designated backup) who coordinates response, assigns tasks, and makes time-sensitive decisions
  2. Subject matter experts identified for key domains (smart contracts, infrastructure, security) who can analyze attacks and prepare response strategies
  3. Scribe role defined for real-time incident documentation
  4. Communications personnel designated for public information sharing and record-keeping
  5. Legal support available with procedures for reviewing response actions, whitehat engagement, and public communications
  6. Decision makers defined for high-stakes decisions (system shutdown, public disclosure, fund recovery)
  7. Roles, authorities, and escalation measures reviewed at least annually and after protocol changes, team restructuring, or major incidents
**Candidate pages:** /multisig-for-protocols/implementation-checklist, /multisig-for-protocols/emergency-procedures, /multisig-for-protocols/backup-signing-and-infrastructure

### ir-1.1.2: Stakeholder Coordination and Contacts
**Question:** Do you maintain current contacts and coordination procedures for all parties needed during an incident?
**Baselines (7):**
  1. Internal coordination procedures between technical (devs, auditors) and operational teams (security council, communications)
  2. External protocol contacts for protocols you depend on and protocols that depend on you
  3. External expertise contacts including forensics firms, security consultants, SEAL 911, and auditors
  4. Legal counsel and communications/PR contacts
  5. Infrastructure vendor support contacts and escalation procedures
  6. Contact list reviewed at least quarterly and after team changes
  7. Escalation order documented for P1 incidents (e.g., SEAL 911 → decision makers → security partners → legal)
**Candidate pages:** /multisig-for-protocols/emergency-procedures, /incident-management/playbooks/seal-911-war-room-guidelines, /wallet-security/secure-multisig-best-practices

### ir-2.1.1: Monitoring Coverage
**Question:** Do you maintain monitoring coverage for your critical systems, protocols, and external attack surfaces?
**Baselines (5):**
  1. Monitoring covers critical smart contracts, infrastructure, and on-chain activity
  2. 24/7 monitoring capabilities with procedures for after-hours alert handling
  3. Credential and secret exposure detection including dark web monitoring, breach database scanning, and secret scanning in code repositories
  4. Organizational account monitoring including social media accounts and websites monitored for unauthorized access or compromise
  5. Monitoring coverage documented — what's covered, what's not, and known gaps
**Candidate pages:** /infrastructure/domain-and-dns-security/monitoring-and-alerting, /incident-management/playbooks/seal-911-war-room-guidelines, /monitoring/guidelines

### ir-2.1.2: Alerting, Paging, and Escalation
**Question:** Do you have alerting and paging systems that reliably route incidents to available responders?
**Baselines (8):**
  1. Automated alerting configured for security events and operational issues
  2. Alerts include embedded triage guidance for distinguishing true incidents from false positives
  3. Triage and classification procedures documented with escalation paths based on severity
  4. Time-based escalation triggers if initial responder doesn't acknowledge within defined window
  5. Management notification requirements for high-severity incidents
  6. Redundant paging systems with documented failover procedures
  7. On-call schedules maintained with adequate coverage for operational needs
  8. Backup procedures when on-call personnel are unreachable
**Candidate pages:** /multisig-for-protocols/implementation-checklist, /multisig-for-protocols/backup-signing-and-infrastructure, /multisig-for-protocols/emergency-procedures

### ir-2.1.3: Logging Integrity and Retention
**Question:** Do you maintain tamper-evident logs with adequate retention for incident investigation?
**Baselines (5):**
  1. Log retention periods defined for security, infrastructure, and cloud provider logs
  2. Retention adequate for forensic analysis (consider regulatory requirements and typical investigation timelines)
  3. Tamper-evident logging for security-relevant events including access logs, alerting system logs, and infrastructure logs
  4. Alerts triggered if logs are altered, deleted, or if monitoring/logging is disabled
  5. Log sources documented — what's captured and where it's stored
**Candidate pages:** /infrastructure/domain-and-dns-security/monitoring-and-alerting, /incident-management/playbooks/seal-911-war-room-guidelines, /governance/compliance-regulatory-requirements

### ir-3.1.1: Response Playbooks
**Question:** Do you maintain response playbooks for common incident types?
**Baselines (5):**
  1. Playbooks cover key scenarios including protocol exploits, infrastructure failures, access control breaches, key compromise, supply chain compromises, and frontend/DNS compromise
  2. Each playbook includes initial response actions covering containment, evidence preservation, and stakeholder notification
  3. Role-specific responsibilities defined for each scenario (who does what — technical, comms, legal)
  4. Escalation criteria documented for when to engage leadership, when to shut down systems, when to make public disclosure, and when to engage external assistance
  5. Key compromise playbook includes procedures for rotating keys and replacing compromised signers, with threshold and access reviewed after any signer replacement
**Candidate pages:** /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/emergency-procedures, /multisig-for-protocols/setup-and-configuration

### ir-3.1.2: Signer Reachability and Coordination
**Question:** Can you reach enough signers to execute emergency on-chain actions at any time, including outside business hours?
**Baselines (4):**
  1. Procedures for coordinating multisig operations during incidents, including cross-timezone signer availability
  2. Signers integrated into on-call/paging systems
  3. Escalation paths documented for when signers are unreachable
  4. Tested quarterly
**Candidate pages:** /wallet-security/secure-multisig-best-practices, /multisig-for-protocols/implementation-checklist, /multisig-for-protocols/setup-and-configuration

### ir-3.1.3: Emergency Transaction Readiness
**Question:** Do you have backup signing infrastructure and pre-prepared emergency transactions for critical protocol functions?
**Baselines (3):**
  1. Pre-signed or pre-prepared emergency transactions for critical protocol functions (pause, freeze, parameter changes) where feasible
  2. Backup signing infrastructure available including alternate signing UI, backup RPC providers, and alternate block explorer
  3. Emergency execution procedures documented (what to pause/freeze/modify and the process for doing so)
**Candidate pages:** /multisig-for-protocols/backup-signing-and-infrastructure, /multisig-for-protocols/implementation-checklist, /wallet-security/seed-phrase-management

### ir-4.1.1: Incident Communication Channels
**Question:** Do you maintain secure, dedicated communication channels for incident response?
**Baselines (4):**
  1. Dedicated incident communication channels with documented access controls and member lists
  2. Multiple communication channels (primary and backup) on different platforms, with documented failover procedures
  3. Procedures for rapidly creating incident-specific channels (war room) when needed
  4. Secure communication procedures for sensitive incident information including need-to-know access and encrypted channels
**Candidate pages:** /multisig-for-protocols/implementation-checklist, /multisig-for-protocols/emergency-procedures, /multisig-for-protocols/backup-signing-and-infrastructure

### ir-4.1.2: Internal Status Updates
**Question:** Do you have procedures for providing regular status updates to stakeholders during incidents?
**Baselines (2):**
  1. Status update cadence defined by severity level
  2. Format and distribution lists for internal stakeholders
**Candidate pages:** /infrastructure/domain-and-dns-security/registrar-and-locks, /incident-management/communication-strategies, /multisig-for-protocols/personal-security-opsec

### ir-4.1.3: Public Communication and Information Management
**Question:** Do you have procedures for public communication and information management during incidents?
**Baselines (4):**
  1. Pre-approved communication templates for different incident types and severity levels
  2. Procedures for coordinating communications with protocol users during and after incidents
  3. Procedures for managing public information flow and correcting misinformation during active incidents
  4. Designated communications approval flow before public statements are released
**Candidate pages:** /incident-management/playbooks/seal-911-war-room-guidelines, /multisig-for-protocols/emergency-procedures, /multisig-for-protocols/implementation-checklist

### ir-5.1.1: IR Drills and Testing
**Question:** Do you conduct regular incident response drills and evaluate the results?
**Baselines (7):**
  1. Drills conducted at least annually
  2. Drills cover different incident types across exercises (protocol exploit, infrastructure failure, key compromise, etc.)
  3. Tests the full pipeline from monitoring through alerting, paging, triage, escalation, team coordination, containment, and recovery
  4. Production alerting pipeline validated end-to-end from event detection through to responder notification and acknowledgment
  5. Drill documentation includes date, scenario, participants, response times, gaps identified, and corrective actions
  6. Corrective actions tracked to completion with owners and deadlines
  7. Drill findings incorporated into playbook and procedure updates
**Candidate pages:** /incident-management/playbooks/decentralized-ir, /multisig-for-protocols/emergency-procedures, /infrastructure/domain-and-dns-security/monitoring-and-alerting

---

## FRAMEWORK PAGES (14 unique)

### PAGE: /multisig-for-protocols/implementation-checklist
**Title:** Multisig Implementation Checklist | SEAL
**Referenced by controls:** ir-1.1.1, ir-2.1.2, ir-3.1.2, ir-3.1.3, ir-4.1.1, ir-4.1.3

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

### PAGE: /multisig-for-protocols/emergency-procedures
**Title:** Multisig Emergency Procedures | SEAL
**Referenced by controls:** ir-1.1.1, ir-1.1.2, ir-2.1.2, ir-3.1.1, ir-4.1.1, ir-4.1.3, ir-5.1.1

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
**Referenced by controls:** ir-1.1.1, ir-2.1.2, ir-3.1.3, ir-4.1.1

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

### PAGE: /incident-management/playbooks/seal-911-war-room-guidelines
**Title:** SEAL 911 War Room Guidelines | SEAL
**Referenced by controls:** ir-1.1.2, ir-2.1.1, ir-2.1.3, ir-4.1.3

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

### PAGE: /wallet-security/secure-multisig-best-practices
**Title:** Secure Multisig Best Practices | SEAL
**Referenced by controls:** ir-1.1.2, ir-3.1.1, ir-3.1.2

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

### PAGE: /infrastructure/domain-and-dns-security/monitoring-and-alerting
**Title:** DNS Monitoring & Incident Response | SEAL
**Referenced by controls:** ir-2.1.1, ir-2.1.3, ir-5.1.1

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

### PAGE: /monitoring/guidelines
**Title:** On-Chain Monitoring Guidelines
**Referenced by controls:** ir-2.1.1

# Guidelines for On-Chain Monitoring




Effective on-chain monitoring is complex, and involves setting up systems and processes to continuously observe
blockchain activities and detect any anomalies.

## Best Practices

### Define Monitoring Objectives

1. Determine the critical metrics to monitor, such as large fund transfers, token minting events, and changes in
contract ownership.

### Implement Monitoring Tools

1. Use automated monitoring tools that can continuously track blockchain activities and generate alerts for anomalies.
2. Supplement automated tools with periodic manual reviews.

### Establish Alerting Mechanisms

1. Set up real-time alerts to notify relevant project members of any suspicious activities or threshold breaches.
2. Use multiple channels for alerts, such as email, SMS, and messaging apps where available, to ensure timely response.

### Regular Reviews and Updates

1. Conduct regular reviews of your monitoring systems to ensure they are functioning correctly and covering all
necessary metrics.
2. Regularly update thresholds and alert configurations to reflect your current needs.

### Incident Response

1. Develop and maintain an [incident response plan](/incident-management/overview) to handle alerts and anomalies as
soon as possible.

---

---

### PAGE: /governance/compliance-regulatory-requirements
**Title:** Compliance & Regulatory Requirements | SEAL
**Referenced by controls:** ir-2.1.3

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

### PAGE: /multisig-for-protocols/setup-and-configuration
**Title:** Multisig Setup & Configuration | SEAL
**Referenced by controls:** ir-3.1.1, ir-3.1.2

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

### PAGE: /wallet-security/seed-phrase-management
**Title:** Seed Phrase Management
**Referenced by controls:** ir-3.1.3

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

### PAGE: /infrastructure/domain-and-dns-security/registrar-and-locks
**Title:** Registrar Security & Registry Locks | SEAL
**Referenced by controls:** ir-4.1.2

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

### PAGE: /incident-management/communication-strategies
**Title:** Incident Communication Strategies | SEAL
**Referenced by controls:** ir-4.1.2

# Communication Strategies




Communication during an incident can be very hard, as people are often scrambling to fix the issue at hand. Nonetheless,
from aa team member, outsider or observer's point of view, communication is very important to be able to understand
what's happening, and it also provide some time to reflect and think about what is going on. With that said, providing
information before confirming that it's accurate, can often be very negative and cause uncertainty. It is recommended to
have a person designated for communication during an incident, and that updates are sent out on a fixed schedule, and
it can often be that the update is that there is currently no new information available.

## Best Practices

1. Define and establish secure communication channels for incident response teams.
Use [encrypted messaging apps](/encryption/communication-encryption)
2. Appoint primary and backup spokespersons to handle internal and external communications during an incident.
3. Develop pre-approved templates for incident notifications, updates, and press releases to ensure consistency and
speed.
4. Provide regular updates to all stakeholders, including employees, customers, partners, and regulatory authorities, to
keep them informed of the situation and response efforts.
5. Maintain clear communication within the incident response team to ensure that everyone is aware of their roles and
responsibilities.
6. Be transparent with external stakeholders about the incident, the impact, and the steps being taken to address it.
Avoid speculation and provide factual information.

---

---

### PAGE: /multisig-for-protocols/personal-security-opsec
**Title:** Multisig Personal Security (OpSec) | SEAL
**Referenced by controls:** ir-4.1.2

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

### PAGE: /incident-management/playbooks/decentralized-ir
**Title:** Decentralized Incident Response | SEAL
**Referenced by controls:** ir-5.1.1

# Decentralized Incident Response Framework (DeIRF)




A lightweight, end-to-end scaffold for security teams that work without a single authority.
Use it as a menu, not a mandate.

## 1. Guiding Principles

| Principle | What it means in practice |
| ----------- | --------------------------- |
| **Zero-trust by default** | Assume every identity, device, and network path is potentially hostile. |
| **Shared responsibility** | Any responder can start an action if quorum rules are met. |
| **Minimum viable process** | Fewer steps, fewer blockers, faster containment. |
| **Open tooling** | Prefer transparent, auditable, community-maintained tools. |
| **Identity plurality** | Accept multiple forms of strong identity proof. |
| **Evidence first** | Collect before you change anything. |
| **Continuous learning** | Retrospective after every incident and drill. |

---

## 2. Roles and Identities

| Role | Key duties | Identity options (at least two) |
| ------ | ----------- | ---------------------------------- |
| **First Reporter** | Sounds the alarm and starts evidence capture. | GPG key, DID, or multisig wallet signature |
| **Triage Lead** | Confirms severity, forms a swarm, assigns tasks. | FIDO2 passkey, GPG, signed Matrix handle |
| **Comms Lead** | Handles community and regulator updates. | Company issued OIDC, Lens profile |
| **Containment Lead** | Executes on chain actions or host isolation. | Multisig signer, SSH CA cert |
| **Recorder** | Maintains the timeline in an immutable log. | GPG key, signed git commit |

> **Tip**: Publish a public mapping of handles to real names and keep it in a tamper evident repo.

---

## 3. Preparation Checklist

| Item | Why it matters | Suggested tools |
| ------ | ---------------- | ----------------- |
| Asset inventory (code, infra, keys) | You cannot protect what you do not know. | ConfigDB + IaC scans, Sheet/CSV |
| Log pipeline with reliable clock | Forensic accuracy and ordering. | Vector + Loki or OpenSearch, Elasticsearch, RunReveal |
| Secure comms channels | Quick swarm with strong auth. | Matrix + E2EE, Signal groups, Wire |
| Evidence bucket (write-once) | Keeps raw data safe. | S3 object-lock, Storj, or IPFS |
| Automated alert rules | Detect known bad patterns. | On chain monitors, Falco, OpenZeppelin Defender, Slackbot |
| Drill schedule | Muscle memory beats panic. | Calendar invites, gamedays, CTF |

---

## 4. Detection and Triage Flow

1. **Alert fires or user reports an issue.**
2. **First Reporter** opens a ticket in the transparent issue tracker (GitHub security advisory or private GitLab
issue).
3. **Triage Lead** checks severity matrix.
4. If **P1**, spin up a temporary incident channel with a predefined template.
5. Assign Leads and set T-minus deadlines.

| Pros | Cons |
| ------ | ------ |
| Fast and clear ownership | Relies on people in multiple time zones being awake |
| Public log builds trust | Attackers also watch public data if over-shared |

---

## 5. Containment Options

| Method | When to use | Pros | Cons |
| -------- | ------------- | ------ | ------ |
| **Smart contract pause / circuit breaker** | Critical on-chain bug | Stops further damage instantly | Requires a pre-coded pause function and multisig |
| **Multisig treasury freeze** | Key compromise or theft | No central keyholder | Coordination overhead |
| **Host or pod quarantine** | Off-chain infra breach | Isolates without full shutdown | Needs orchestration rights |
| **DNS or CDN reroute** | Phishing or DDoS | Quick traffic shift | May break some services |

Keep a one-liner command ready for each action and store it in the runbook.

---

## 6. Eradication and Recovery

1. Patch or replace vulnerable code.
2. Peer review with at least two signers.
3. Deploy to staging with replay of attack scenario.
4. Roll forward to production by multisig or automated pipeline.
5. Verify by monitoring metrics and logs for stability.

| Automation hint | Keep it simple |
| ----------------- | ---------------- |
| GitHub Actions, ArgoCD, and Defender Autotasks are popular. | Always include a manual approval gate in case of false positives. |

---

## 7. Post-Incident Actions

| Step | Purpose | Tool Example |
| ------ | --------- | ------------- |
| **Retrospective within 72 h** | Capture lessons before they fade. | Miro board, Markdown doc in repo |
| **Update runbooks and detection rules** | Prevent repeat events. | Docs-as-code PR |
| **Reward community reporters** | Encourage transparency. | Bug bounty payouts, incentive model |
| **Public disclosure** | Build long-term trust. | Blog post plus on-chain message |

---

## 8. Quick-Start Templates

| Need | Template location |
| ------ | ------------------- |
| Incident channel message | /templates/incident-kickoff.md |
| Retrospective form | /templates/retro-form.md |

---

## 9. Pros and Cons of Decentralized IR

| Aspect | Pros | Cons |
| -------- | ------ | ------ |
| **No single point of failure** | Resilience if one keyholder is offline. | Slower consensus for urgent actions. |
| **Community trust** | Transparent logs and multisig votes. | Public scrutiny can amplify panic. |
| **Open tools** | Low cost, auditable, extensible. | Less vendor support, more DIY. |
| **Identity plurality** | Flexibility for global teams. | Complex to manage revocation and role drift. |

---

## 10. Keep It Alive

- Run quarterly red team drills.
- Rotate secrets on a fixed cadence.
- Review identity proofs every six months.
- Measure mean time to detect and contain.
- Iterate on this framework during each retrospective.

> **Remember**: Simplicity plus strong fundamentals beat heavy processes every time.

---

---

