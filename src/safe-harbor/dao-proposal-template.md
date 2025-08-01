---
tags:
  - SEAL/Initiative
contributors:
  - role: wrote
    users: [dickson]
---

# DAO Proposal Template

*A Google Doc version of this template can be found [here](https://docs.google.com/document/d/1zsyutbSpQrwkmEA_XicABoRkSR25IQr92tOPgZOixN4/edit?tab=t.0).*

# **\[\<PROPOSAL\_TYPE>] - Adopt The SEAL Safe Harbor Agreement**

**Category**: \<CATEGORY\_NAME>\
**Authors**: \<AUTHOR\_1\_NAME>, \<AUTHOR\_2\_NAME>, \<AUTHOR\_3\_NAME>

***


## **Introduction**

This proposal outlines \<PROTOCOL\_NAME>’s adoption of the SEAL ([Security Alliance](https://www.securityalliance.org/)) Whitehat Safe Harbor Agreement (“Safe Harbor Agreement”). By adopting the Safe Harbor Agreement, \<PROTOCOL\_NAME> improves the security of its on-chain assets by allowing whitehats to intervene during active exploits to save protocol funds.


### **What is the Safe Harbor Agreement?**

The Safe Harbor Agreement addresses a critical need in crypto: enabling whitehats to intervene during active exploits when the urgency of an attack makes traditional processes too slow to save funds. 

The Safe Harbor Agreement was created by SEAL, a nonprofit founded by samczsun, to secure the future of crypto. In addition to the Safe Harbor Agreement, SEAL runs multiple initiatives including SEAL 911 (emergency response hotline for exploits), SEAL Intel (crypto-native threat intelligence sharing), SEAL Frameworks (open source security best practices and playbooks), SEAL Wargames (incident response training), and more in development.

Key aspects of the agreement include:

- **Encouraging Whitehats to Protect the Protocol:** By adopting the Safe Harbor Agreement, \<PROTOCOL\_NAME> incentivizes whitehats to step in and protect the protocol during active exploits by limiting their legal exposure. 

- **Intervention Only During Active Exploits:** Whitehats are authorized to act only when there is an immediate or ongoing exploit that threatens the protocol. This agreement is not intended for routine security testing or bug bounty reporting. It applies only to critical situations where the urgency of the exploit supersedes traditional procedures for responsible disclosure in order to save funds. 

- **Mandatory Return of Rescued Funds:** Under the terms of the Safe Harbor, whitehats are required to return all rescued assets to a pre-designated recovery address controlled by the protocol within 72 hours of recovery to ensure these funds are quickly secured, preventing delay or potential loss.

- **Clear Guidelines and Legal Protection:** The agreement establishes strict rules for how whitehats must operate during an exploit, ensuring recovery efforts are conducted professionally and safely, minimizing the risk of mistakes or further damage to the protocol. By adhering to these guidelines, whitehats can limit their potential legal exposure, allowing them to act in good faith without fear of liability.

- **Incentivized Rescue Efforts:** To motivate whitehats to act during critical situations, the agreement offers a bounty system that rewards rescuers with a percentage of the recovered assets, up to a predefined cap, for successful interventions.

Safe Harbor has already been adopted by leading protocols such as Uniswap, Zksync, Pendle, Pancakeswap, and Balancer, establishing it as a trusted industry standard for empowering whitehats during active exploits.

***


## **Rationale**

\<PROTOCOL\_NAME> is committed to enhancing its security and protecting user funds during critical moments. While security audits and other preventive measures are crucial, the unpredictable nature of active exploits requires a swift, decisive response mechanism to minimize potential damage.

Benefits of adopting the Safe Harbor Agreement include:

- **Agile Defense Against Exploits:** Whitehats are authorized to intervene as soon as an active exploit is detected, enabling them to respond faster than traditional methods. Immediate action minimizes the window for malicious actors, reduces damages, and accelerates the recovery of assets during critical moments.

- **Clarified Rescue Process:** The agreement ensures that every step, from intervention to fund recovery, is predetermined and streamlined. Whitehats know exactly where to send recovered funds, preventing chaotic negotiations or rushed decisions during an exploit. This clarity ensures efficient, decisive action when it matters most.

- **Clear Financial Boundaries:** The predefined bounty system, with a cap matching \<PROTOCOL\_NAME>’s existing bug bounty, ensures that whitehats are incentivized fairly without creating conflicting priorities between exploit intervention and standard vulnerability disclosure. By setting expectations upfront, it eliminates post-exploit negotiations, ensuring funds are returned promptly without attempts to change the reward amount, keeping the process fair and transparent.

- **Aligning with Industry Best Practices:** By adopting the Safe Harbor Agreement, \<PROTOCOL\_NAME> aligns itself with leading security practices across the industry, reinforcing its commitment to staying at the forefront of protocol security.

Adoption of the agreement complements audits by providing an additional layer of security, ensuring that the protocol is better prepared to respond to active threats.

***


## **Adoption Details**

\<PROTOCOL\_NAME> will adopt the agreement with the following parameters. For a full description of these adoption details, review the [Safe Harbor Scope](https://securityalliance.notion.site/safe-harbor-scope) document.

1. **Asset Recovery Address: Addresses controlled by \<PROTOCOL\_NAME>, which recovered funds will be returned to in the event of a hack.**

|           |             |
| --------- | ----------- |
| **Chain** | **Address** |
|           |             |
|           |             |
|           |             |
|           |             |
|           |             |
|           |             |
|           |             |
|           |             |
|           |             |

2. **Scope: List of all on-chain assets protected under Safe Harbor**

| Chain | Name | Address | Type (None, Existing Only, Future Only, All) |
| ----- | ---- | ------- | -------------------------------------------- |
|       |      |         |                                              |
|       |      |         |                                              |
|       |      |         |                                              |
|       |      |         |                                              |
|       |      |         |                                              |
|       |      |         |                                              |
|       |      |         |                                              |
|       |      |         |                                              |
|       |      |         |                                              |
|       |      |         |                                              |

- “All”: The Safe Harbor Agreement will cover both the subcontracts currently deployed under this contract and any future subcontracts deployed through it. This ensures that all present and future subcontracts are protected.

3. **Contact Details: Designated security contact for \<PROTOCOL\_NAME>**

| Name | Contact Information |
| ---- | ------------------- |
|      |                     |
|      |                     |

4. **Bounty Terms: Predetermined rewards for successful whitehats that protect protocol funds**

   - **Bounty Percentage**: \<PERCENT>% of recovered funds.

   - **Bounty Cap (USD)**: $\<BOUNTY CAP>

   - **Aggregate Bounty Cap (USD):** $\<BOUNTY CAP>

\<PLEASE SELECT RETAINABLE = FALSE OR RETAINABLE = TRUE> - Note: Cannot set this to True if Aggregate Bounty Cap is set.

- **Retainable:** True 

  1. This means that whitehats are allowed to retain their bounty directly from the recovered assets. After rescuing funds during an exploit, whitehats may deduct their bounty from the total recovered amount before transferring the remainder to the protocol’s designated asset recovery address. This streamlines the payout process, ensuring whitehats are rewarded promptly while still adhering to predefined bounty terms.

\<OR>

- **Retainable:** False

  1. This means that whitehats cannot retain their bounty directly from the recovered assets. Instead, all rescued funds must be returned to the protocol’s designated asset recovery address, and the bounty will be paid out separately after verification.

\<SELECT ANONYMOUS NO KYC, OR NAMED AND KYC>

- **Identity Verification**: Anonymous

  1. Whitehats are allowed to remain anonymous and are not required to provide their legal name or undergo identity verification. This ensures privacy for whitehats while still enabling them to participate in the bounty program and assist during exploits without revealing personal information.

- **Diligence Requirements:** None

\<OR>

- **Identity Verification**: Named

  1. Whitehats must provide their full legal name. This requirement ensures compliance with legal obligations and is similar to the identity verification standards seen in traditional bug bounty programs.

- **Diligence Requirements:** KYC and OFAC Screening

  1. \<PROTOCOL\_NAME> requires all eligible whitehats to undergo Know Your Customer (KYC) verification and be screened against global sanctions lists, including US, UK, and EU regulations. This process ensures that all bounty recipients are compliant with legal and regulatory standards before qualifying for payment.

***


## **Implementation Plan**

1. **Register Agreement On-Chain**:

   - The agreement will be registered on \<CHAIN> in the Safe Harbor Registry at address `0x1eaCD100B0546E433fbf4d773109cAD482c34686`, including all adoptionDetails. This ensures transparency and immutability.

2. **Communicate Adoption**:

   - An official announcement will be made across all \<PROTOCOL\_NAME> communication channels, explaining the adoption and its significance to the community.

3. **Future Updates to Scope:**

   - New versions of \<PROTOCOL\_NAME> will be reviewed and added to the Safe Harbor Agreement scope via \<PROTOCOL\_NAME> Governance vote, ensuring continued protection for all new contracts and functionalities.

***


## **Conclusion**

Adopting the SEAL Whitehat Safe Harbor Agreement equips \<PROTOCOL\_NAME> with a rapid response mechanism for active exploits, enabling whitehats to step in effectively when needed most. The agreement provides clear guidelines for action, increasing the protection of user funds and demonstrating \<PROTOCOL\_NAME>'s commitment to proactive security.

**Note**: This proposal does **not** request any funds from the DAO treasury and does **not** involve any budget allocation. It solely seeks governance approval for \<PROTOCOL\_NAME> to adopt the SEAL Whitehat Safe Harbor Agreement.

***


## **References**

- **SEAL Whitehat Safe Harbor Agreement**:[ GitHub Repository](https://github.com/security-alliance/safe-harbor)

- **SEAL Whitehat Safe Harbor Agreement Overview:** [Notion](https://securityalliance.notion.site/public-safe-harbor?source=copy_link)

- **\<PROTOCOL\_NAME>** **Bug Bounty**: \<LINK\_TO\_BUG\_BOUNTY>

***

_Please share your thoughts and feedback in the discussion below before the proposal moves to a formal vote._
