---
tags:
  - SEAL/Initiative
  - Protocol
  - Whitehat
contributors:
  - role: wrote
    users: [dickson]
---

# Non-DAO Scope Template

*A Google Doc version of this template can be found [here](https://docs.google.com/document/d/1kcgeq2GmmuSHyMzbl0mlgRhMHag-av4B4TdLZFqdoSE/edit?tab=t.0#heading=h.3zg7p0uu82jx).*

## **Adoption Details**

# \<PROTOCOL\_NAME> will adopt the agreement with the following parameters. For a full description of these adoption details, review the [Safe Harbor Scope](./scope-terms.md) document.1) **Asset Recovery Address: Addresses controlled by \<PROTOCOL\_NAME>, which recovered funds will be returned to in the event of a hack.**|           |             |
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
|           |             |2) **Scope: List of all on-chain assets protected under Safe Harbor**| Chain | Name | Address | Type (None, Existing Only, Future Only, All) |
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
|       |      |         |                                              |3) **Contact Details: Designated security contact for \<PROTOCOL\_NAME>**| Name | Contact Information |
| ---- | ------------------- |
|      |                     |
|      |                     |4) **Bounty Terms: Predetermined rewards for successful whitehats that protect protocol funds**

   - **Bounty Percentage**: \<PERCENT>% of recovered funds.

   - **Bounty Cap (USD)**: $\<BOUNTY CAP>

   - **Aggregate Bounty Cap (USD):** $\<BOUNTY CAP>\<PLEASE SELECT RETAINABLE = FALSE OR RETAINABLE = TRUE> - Note: Cannot set this to True if Aggregate Bounty Cap is set.* **Retainable:** True 

  1. This means that whitehats are allowed to retain their bounty directly from the recovered assets. After rescuing funds during an exploit, whitehats may deduct their bounty from the total recovered amount before transferring the remainder to the protocol’s designated asset recovery address. This streamlines the payout process, ensuring whitehats are rewarded promptly while still adhering to predefined bounty terms.\<OR>* **Retainable:** False

  1. This means that whitehats cannot retain their bounty directly from the recovered assets. Instead, all rescued funds must be returned to the protocol’s designated asset recovery address, and the bounty will be paid out separately after verification.\<SELECT ANONYMOUS NO KYC, OR NAMED AND KYC>* **Identity Verification**: Anonymous

  1. Whitehats are allowed to remain anonymous and are not required to provide their legal name or undergo identity verification. This ensures privacy for whitehats while still enabling them to participate in the bounty program and assist during exploits without revealing personal information.

* **Diligence Requirements:** None\<OR>* **Identity Verification**: Named

  1. Whitehats must provide their full legal name. This requirement ensures compliance with legal obligations and is similar to the identity verification standards seen in traditional bug bounty programs.

* **Diligence Requirements:** KYC and OFAC Screening

  1. \<PROTOCOL\_NAME> requires all eligible whitehats to undergo Know Your Customer (KYC) verification and be screened against global sanctions lists, including US, UK, and EU regulations. This process ensures that all bounty recipients are compliant with legal and regulatory standards before qualifying for payment.
