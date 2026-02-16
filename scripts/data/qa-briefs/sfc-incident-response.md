# QA Brief: sfc-incident-response

## YOUR TASK

Verify the evaluation claims below. For each control with refs:
1. Read the ACTUAL page content (provided below)
2. Read the control's FULL baselines
3. Check: does the page ACTUALLY meet the baselines claimed in "baselinesMet"?
4. Check: are the "baselinesMissed" correct (is there content that was overlooked)?
5. Check: is the coverage rating ("full"/"partial") justified?

Be STRICT. If the evaluator was too generous, downgrade. If they missed coverage, upgrade.

## EVALUATION CLAIMS TO VERIFY (11 controls with refs)

### ir-1.1.1: IR Team and Role Assignments
**Full baselines:**
  1. Incident commander (with designated backup) who coordinates response, assigns tasks, and makes time-sensitive decisions
  2. Subject matter experts identified for key domains (smart contracts, infrastructure, security) who can analyze attacks and prepare response strategies
  3. Scribe role defined for real-time incident documentation
  4. Communications personnel designated for public information sharing and record-keeping
  5. Legal support available with procedures for reviewing response actions, whitehat engagement, and public communications
  6. Decision makers defined for high-stakes decisions (system shutdown, public disclosure, fund recovery)
  7. Roles, authorities, and escalation measures reviewed at least annually and after protocol changes, team restructuring, or major incidents

**Evaluator's assessment:**
- **/multisig-for-protocols/implementation-checklist** → Emergency Preparedness — **partial**
  Met: Roles reviewed at least annually and after major incidents
  Missed: Incident commander with designated backup; Subject matter experts for key domains; Scribe role for real-time documentation; Communications personnel for public info; Legal support procedures; Decision makers for high-stakes decisions
- **/multisig-for-protocols/emergency-procedures** → Emergency Communication Protocols — **partial**
  Met: Roles reviewed after major incidents (implicit in post-incident analysis)
  Missed: Incident commander with designated backup; Subject matter experts for key domains; Scribe role for real-time documentation; Communications personnel designation; Legal support procedures; Decision makers for high-stakes decisions; Annual review of roles and authorities
**Gaps:** Incident commander (with designated backup) who coordinates response, assigns tasks, and makes time-sensitive decisions; Subject matter experts identified for key domains (smart contracts, infrastructure, security) who can analyze attacks and prepare response strategies; Scribe role defined for real-time incident documentation; Communications personnel designated for public information sharing and record-keeping; Legal support available with procedures for reviewing response actions, whitehat engagement, and public communications; Decision makers defined for high-stakes decisions (system shutdown, public disclosure, fund recovery)

### ir-1.1.2: Stakeholder Coordination and Contacts
**Full baselines:**
  1. Internal coordination procedures between technical (devs, auditors) and operational teams (security council, communications)
  2. External protocol contacts for protocols you depend on and protocols that depend on you
  3. External expertise contacts including forensics firms, security consultants, SEAL 911, and auditors
  4. Legal counsel and communications/PR contacts
  5. Infrastructure vendor support contacts and escalation procedures
  6. Contact list reviewed at least quarterly and after team changes
  7. Escalation order documented for P1 incidents (e.g., SEAL 911 → decision makers → security partners → legal)

**Evaluator's assessment:**
- **/multisig-for-protocols/emergency-procedures** → Emergency Contact Information — **partial**
  Met: External expertise contacts (Security team mentioned); Escalation order documented (template includes escalation to Security team)
  Missed: Internal coordination procedures between technical and operational teams; External protocol contacts for dependencies; Legal counsel and PR contacts; Infrastructure vendor support contacts; Contact list reviewed quarterly
- **/incident-management/playbooks/seal-911-war-room-guidelines** → Key Roles — **partial**
  Met: Internal coordination procedures (role assignments for Operations, Protocol Lead, Web/Infrastructure Lead, External Communicator); External expertise contacts (SEAL 911, security researchers); Escalation order (implicit in role structure)
  Missed: External protocol contacts for dependencies; Legal counsel and PR contacts (communications mentioned but not specific contacts); Infrastructure vendor support contacts; Contact list reviewed quarterly
- **/wallet-security/secure-multisig-best-practices** → Communication & Documentation — **partial**
  Met: Internal coordination (signers must notify multisig participants of incidents)
  Missed: External protocol contacts; External expertise contacts; Legal counsel and PR contacts; Infrastructure vendor contacts; Contact list reviewed quarterly; Escalation order for P1 incidents
**Gaps:** External protocol contacts for protocols you depend on and protocols that depend on you; Legal counsel and communications/PR contacts with specific documented procedures; Infrastructure vendor support contacts and escalation procedures; Contact list reviewed at least quarterly and after team changes

### ir-2.1.1: Monitoring Coverage
**Full baselines:**
  1. Monitoring covers critical smart contracts, infrastructure, and on-chain activity
  2. 24/7 monitoring capabilities with procedures for after-hours alert handling
  3. Credential and secret exposure detection including dark web monitoring, breach database scanning, and secret scanning in code repositories
  4. Organizational account monitoring including social media accounts and websites monitored for unauthorized access or compromise
  5. Monitoring coverage documented — what's covered, what's not, and known gaps

**Evaluator's assessment:**
- **/infrastructure/domain-and-dns-security/monitoring-and-alerting** → DNS Record Monitoring — **partial**
  Met: Monitoring coverage for critical systems (DNS/domain infrastructure); Credential exposure detection (mentioned in Certificate Transparency monitoring); Organizational account monitoring (domain/DNS as critical organizational asset); Monitoring coverage documented (what to watch for is documented)
  Missed: 24/7 monitoring with after-hours procedures; Credential and secret exposure in code repositories and dark web
- **/monitoring/guidelines** → Best Practices — **partial**
  Met: Monitoring objectives defined (critical metrics); Monitoring coverage documented (define what to monitor)
  Missed: 24/7 monitoring capabilities with after-hours procedures; Credential and secret exposure detection; Organizational account monitoring; Known gaps documented
**Gaps:** 24/7 monitoring capabilities with procedures for after-hours alert handling; Credential and secret exposure detection including dark web monitoring, breach database scanning, and secret scanning in code repositories; Organizational account monitoring including social media accounts and websites monitored for unauthorized access or compromise

### ir-2.1.2: Alerting, Paging, and Escalation
**Full baselines:**
  1. Automated alerting configured for security events and operational issues
  2. Alerts include embedded triage guidance for distinguishing true incidents from false positives
  3. Triage and classification procedures documented with escalation paths based on severity
  4. Time-based escalation triggers if initial responder doesn't acknowledge within defined window
  5. Management notification requirements for high-severity incidents
  6. Redundant paging systems with documented failover procedures
  7. On-call schedules maintained with adequate coverage for operational needs
  8. Backup procedures when on-call personnel are unreachable

**Evaluator's assessment:**
- **/multisig-for-protocols/emergency-procedures** → Immediate Actions — **partial**
  Met: Triage and classification procedures (assess scope, escalate); Management notification for high-severity (contact Security team); Escalation paths (Emergency notification template with escalation)
  Missed: Automated alerting configured; Alerts include embedded triage guidance; Time-based escalation triggers; Redundant paging systems; On-call schedules maintained; Backup procedures when on-call unreachable
**Gaps:** Automated alerting configured for security events and operational issues; Alerts include embedded triage guidance for distinguishing true incidents from false positives; Time-based escalation triggers if initial responder doesn't acknowledge within defined window; Redundant paging systems with documented failover procedures; On-call schedules maintained with adequate coverage for operational needs; Backup procedures when on-call personnel are unreachable

### ir-3.1.1: Response Playbooks
**Full baselines:**
  1. Playbooks cover key scenarios including protocol exploits, infrastructure failures, access control breaches, key compromise, supply chain compromises, and frontend/DNS compromise
  2. Each playbook includes initial response actions covering containment, evidence preservation, and stakeholder notification
  3. Role-specific responsibilities defined for each scenario (who does what — technical, comms, legal)
  4. Escalation criteria documented for when to engage leadership, when to shut down systems, when to make public disclosure, and when to engage external assistance
  5. Key compromise playbook includes procedures for rotating keys and replacing compromised signers, with threshold and access reviewed after any signer replacement

**Evaluator's assessment:**
- **/multisig-for-protocols/emergency-procedures** → Key Compromise — **partial**
  Met: Playbooks cover key compromise scenario; Initial response actions (stop operations, notify, assess, escalate, document); Key compromise includes procedures for rotating keys; Role-specific responsibilities (First Reporter, team coordination)
  Missed: Playbooks for protocol exploits, infrastructure failures, access control breaches, supply chain compromises, frontend/DNS compromise; Escalation criteria for leadership engagement, system shutdown, public disclosure, external assistance
- **/wallet-security/secure-multisig-best-practices** → Signer rotation — **partial**
  Met: Key compromise procedures (signer rotation when compromised); Threshold reviewed after signer replacement
  Missed: Playbooks for protocol exploits, infrastructure failures, access control breaches, supply chain, frontend/DNS; Initial response actions for each scenario; Role-specific responsibilities; Escalation criteria documented
**Gaps:** Playbooks cover protocol exploits, infrastructure failures, access control breaches, supply chain compromises, and frontend/DNS compromise; Each playbook includes containment, evidence preservation, and stakeholder notification; Escalation criteria documented for when to engage leadership, when to shut down systems, when to make public disclosure, and when to engage external assistance

### ir-3.1.2: Signer Reachability and Coordination
**Full baselines:**
  1. Procedures for coordinating multisig operations during incidents, including cross-timezone signer availability
  2. Signers integrated into on-call/paging systems
  3. Escalation paths documented for when signers are unreachable
  4. Tested quarterly

**Evaluator's assessment:**
- **/wallet-security/secure-multisig-best-practices** → Training & Drills — **partial**
  Met: Procedures for emergency operations (drills mentioned); Tested quarterly (for emergency multisigs)
  Missed: Cross-timezone signer availability procedures; Signers integrated into on-call/paging systems; Escalation paths when signers unreachable
- **/multisig-for-protocols/setup-and-configuration**  — **partial**
  Missed: Procedures for coordinating multisig operations during incidents; Cross-timezone signer availability; Signers integrated into on-call/paging; Escalation paths for unreachable signers; Tested quarterly
**Gaps:** Procedures for coordinating multisig operations during incidents, including cross-timezone signer availability; Signers integrated into on-call/paging systems; Escalation paths documented for when signers are unreachable

### ir-3.1.3: Emergency Transaction Readiness
**Full baselines:**
  1. Pre-signed or pre-prepared emergency transactions for critical protocol functions (pause, freeze, parameter changes) where feasible
  2. Backup signing infrastructure available including alternate signing UI, backup RPC providers, and alternate block explorer
  3. Emergency execution procedures documented (what to pause/freeze/modify and the process for doing so)

**Evaluator's assessment:**
- **/multisig-for-protocols/backup-signing-and-infrastructure** → UI Alternatives — **full**
  Met: Backup signing infrastructure (Eternal Safe, Squads Public Client); Alternate signing UI (multiple UI options documented); Backup RPC providers (guidance provided); Alternate block explorer (Blockscout, explorer.solana.com, Solscan); Emergency execution procedures (documented how to use backup systems)
  Missed: Pre-signed or pre-prepared emergency transactions
- **/multisig-for-protocols/implementation-checklist** → Emergency Preparedness — **full**
  Met: Backup signing infrastructure (downloaded backup UIs); Emergency execution procedures (understanding how to sign when primary UI is down)
  Missed: Pre-signed or pre-prepared emergency transactions
**Gaps:** Pre-signed or pre-prepared emergency transactions for critical protocol functions (pause, freeze, parameter changes) where feasible

### ir-4.1.1: Incident Communication Channels
**Full baselines:**
  1. Dedicated incident communication channels with documented access controls and member lists
  2. Multiple communication channels (primary and backup) on different platforms, with documented failover procedures
  3. Procedures for rapidly creating incident-specific channels (war room) when needed
  4. Secure communication procedures for sensitive incident information including need-to-know access and encrypted channels

**Evaluator's assessment:**
- **/multisig-for-protocols/implementation-checklist** → Documentation & Communication — **partial**
  Met: Primary and backup communication channels (set up per Communication Setup); Multiple channels on different platforms (tested emergency notification)
  Missed: Documented access controls and member lists; Documented failover procedures; Procedures for rapidly creating incident-specific channels; Secure communication procedures for sensitive information
- **/multisig-for-protocols/emergency-procedures** → Emergency Communication Protocols — **partial**
  Met: Multiple communication channels (primary, backup, emergency contacts); Secure communication procedures (need-to-know, secure channels); Procedures for identity verification during incidents
  Missed: Documented access controls and member lists; Documented failover procedures; Procedures for rapidly creating war room channels
**Gaps:** Dedicated incident communication channels with documented access controls and member lists; Documented failover procedures between primary and backup channels; Procedures for rapidly creating incident-specific channels (war room) when needed

### ir-4.1.2: Internal Status Updates
**Full baselines:**
  1. Status update cadence defined by severity level
  2. Format and distribution lists for internal stakeholders

**Evaluator's assessment:**
- **/incident-management/communication-strategies** → Best Practices — **full**
  Met: Status update cadence defined (regular updates to stakeholders); Format and distribution for internal stakeholders (provide regular updates to employees)

### ir-4.1.3: Public Communication and Information Management
**Full baselines:**
  1. Pre-approved communication templates for different incident types and severity levels
  2. Procedures for coordinating communications with protocol users during and after incidents
  3. Procedures for managing public information flow and correcting misinformation during active incidents
  4. Designated communications approval flow before public statements are released

**Evaluator's assessment:**
- **/incident-management/playbooks/seal-911-war-room-guidelines** → Communications — **partial**
  Met: Procedures for coordinating communications during and after incidents; Procedures for managing public information flow (monitoring social media); Designated approval flow (External Communicator role)
  Missed: Pre-approved communication templates for different incident types and severity
- **/multisig-for-protocols/emergency-procedures** → Emergency Notification Template — **partial**
  Met: Pre-approved communication templates (emergency notification template provided)
  Missed: Templates for different incident types and severity levels; Procedures for coordinating with protocol users during/after; Procedures for managing misinformation; Designated approval flow before public statements
**Gaps:** Pre-approved communication templates for different incident types and severity levels (only one emergency template provided); Procedures for managing public information flow and correcting misinformation during active incidents

### ir-5.1.1: IR Drills and Testing
**Full baselines:**
  1. Drills conducted at least annually
  2. Drills cover different incident types across exercises (protocol exploit, infrastructure failure, key compromise, etc.)
  3. Tests the full pipeline from monitoring through alerting, paging, triage, escalation, team coordination, containment, and recovery
  4. Production alerting pipeline validated end-to-end from event detection through to responder notification and acknowledgment
  5. Drill documentation includes date, scenario, participants, response times, gaps identified, and corrective actions
  6. Corrective actions tracked to completion with owners and deadlines
  7. Drill findings incorporated into playbook and procedure updates

**Evaluator's assessment:**
- **/multisig-for-protocols/emergency-procedures** → Emergency Drill Procedures — **partial**
  Met: Drills conducted regularly (quarterly, bi-annually, annually); Tests full pipeline (notification, response time, process verification); Production alerting validated (notification test, response time measurement)
  Missed: Drills cover different incident types across exercises; Drill documentation with gaps and corrective actions; Corrective actions tracked to completion; Findings incorporated into playbook updates
- **/incident-management/playbooks/decentralized-ir** → Keep It Alive — **partial**
  Met: Drills conducted regularly (quarterly red team drills); Findings incorporated into updates (iterate on framework during retrospective)
  Missed: Tests full pipeline from monitoring through recovery; Production alerting validated end-to-end; Drill documentation with participants, response times, gaps; Corrective actions tracked to completion
**Gaps:** Drills cover different incident types across exercises (protocol exploit, infrastructure failure, key compromise, etc.); Drill documentation includes date, scenario, participants, response times, gaps identified, and corrective actions; Corrective actions tracked to completion with owners and deadlines

## FALSE-NEGATIVE CHECK (1 controls marked "no coverage")

Verify these truly have no relevant framework page. If any page below partially covers them, note it.

### ir-2.1.3: Logging Integrity and Retention
**Baselines:** Log retention periods defined for security, infrastructure, and cloud provider logs; Retention adequate for forensic analysis (consider regulatory requirements and typical investigation timelines); Tamper-evident logging for security-relevant events including access logs, alerting system logs, and infrastructure logs (+2 more)

---

## FRAMEWORK PAGES (10 pages)

### PAGE: /incident-management/communication-strategies

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

### PAGE: /incident-management/playbooks/decentralized-ir

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

### PAGE: /incident-management/playbooks/seal-911-war-room-guidelines

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

### PAGE: /monitoring/guidelines

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

