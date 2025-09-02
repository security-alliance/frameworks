---
tags:
  - Security Specialist
  - Operations & Strategy
  - Community & Marketing
  - HR
  - Engineer/Developer
contributors:
- role: wrote
  users: [blackbigswan]
- role: reviewed
  users: [dickson, yaniv]
---

# Insider Threats (DPRK)

This framework serves as an entry point to understanding the organizational and personal risks related to "Insider Threats," most commonly (though not exclusively) associated with "DPRK IT Workers" - the North Korean hacker-freelancers. This framework is targeted at projects affected by insider threat actors as well as projects wanting to harden their posture against these actors.

Throughout this module, we will discuss: 
- Who insider threat actors are and what they do
- How to recognize insider threat actors 
- How to interact with a potential threat actor
- How to mitigate the risks and impact of insider threat actors
- How to harden your defenses against insider threat actors
- Potential consequences of insider threats for you and your organization

### Table of Contents

- [**General Information**](./general-information.md)  
  - [What is an insider threat? Who are DPRK IT Workers?](./general-information.md#what-is-an-insider-threat-who-are-dprk-it-workers)  
  - [Operational structure and short history of DPRK IT Workers](./general-information.md#operational-structure-and-short-history-of-dprk-it-workers)  
  - [What are the goals of DPRK IT Workers?](./general-information.md#what-are-the-goals-of-dprk-it-workers)  
  - [How many DPRK IT Workers are there?](./general-information.md#how-many-dprk-it-workers-are-there)  
  - [Average DPRK IT Worker Profile](./general-information.md#average-dprk-it-worker-profile)  
- [**Techniques, Tactics, and Procedures**](./techniques-tactics-and-procedures.md)  
  - [How can DPRK IT Workers find a job in your company?](./techniques-tactics-and-procedures.md#how-can-dprk-it-workers-find-a-job-in-your-company)  
  - [Am I Interviewing a DPRK IT Worker?](./techniques-tactics-and-procedures.md#am-i-interviewing-a-dprk-it-worker)  
  - [Did I hire a DPRK IT Worker?](./techniques-tactics-and-procedures.md#did-i-hire-a-dprk-it-worker)  
  - [After a DPRK IT Worker is hired by your company](./techniques-tactics-and-procedures.md#after-a-dprk-it-worker-is-hired-by-your-company)  
- [**Mitigating DPRK IT Workers**](./mitigating-dprk-it-workers.md)  
  - [Hardening your hiring processes](./mitigating-dprk-it-workers.md#hardening-your-hiring-processes)  
  - [Hardening your organization](./mitigating-dprk-it-workers.md#hardening-your-organization)  
  - [I hired a DPRK IT Worker. What now?](./mitigating-dprk-it-workers.md#i-hired-a-dprk-it-worker-what-now)  
  - [Data collection](./mitigating-dprk-it-workers.md#data-collection)  
  - [Overview of risks to your organization](./mitigating-dprk-it-workers.md#overview-of-risks-to-your-organization)  
- [**Case Studies**](./case-studies.md)  
  - [Story 1](./case-studies.md#story-1)  
  - [Story 2](./case-studies.md#story-2)  
  - [Story 3](./case-studies.md#story-3)  
- [**Summary**](./summary.md)

#### Overview of risks to your organization

1. **Defrauding the company:** The company is paying someone whose identity they do not know.
2. **Subpar operational security:** DPRK IT workers share credentials among themselves in open channels, have a poor command of Git, and unintentionally or intentionally leak the access they are granted to third parties.
3. **Extortion:** They may try to extort more money after a job is finished.
4. **Future hacking activities:** They may use the knowledge gained for future hacking activities.
5. **Sanctions violations:** The DPRK is a sanctioned entity. No company can legally transfer funds to DPRK-related operations.
6. **Contribution to the North Korean Military:** DPRK IT worker salaries directly contribute to the Military Ministry of North Korea. The workers do not keep the salaries for themselves.
7. **Supply-chain compromise:** DPRK IT Workers may intentionally introduce vulnerabilities that impact down-stream projects that depend on your software / services (e.g. SafeWallet UI in the ByBit hack).
8. **Reputational damage:** To your brand and loss of trust of your users and customers.
9. **Asset freeze / loss of access to financial services:** your assets may be frozen or seized, and financial institutions (e.g. banks, exchanges) may terminate your access if you are suspected of funding sanctioned entities.
10. **Criminal investigations:** Law enforcement may investigate your involvement and impose fines or press criminal charges against your organization.