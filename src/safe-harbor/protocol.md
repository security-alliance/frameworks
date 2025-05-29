---
tags:
  - SEAL/Initiative
  - Protocol
  - DAO
contributors:
  - role: wrote
    users: [robert]
---

# Safe Harbor for Protocols

## Why You Should Care

Protocols should care about Safe Harbor because it helps whithats save you during an active exploit, increasing the chances of a successful fund recovery. It aims to replace the status quo, where there is no standard procedue for fund recovery during an [active exploit](./key-terms.md#active-exploit). Whitehats who chose to help do so without any legal protection or assurance of reward.

## Protocol Adoption

Safe Harbor adoption is similar to setting up a Bug Bounty. Protocols can either do so manually, following SEAL’s [adoption checklist](https://docs.google.com/document/d/1ZfpJacBKGZR1EcfxReqSToXXSHF-iOIThU66S6M20aQ), or can work with third parties to faciliate their adoption. Safe Harbor was written explicitly with DAOs in mind, so they can adopt using the same framework as regular corperations. To get started we recommend:

1. For protocols already working with a security provider or auditing firm, contact them to see if they can help.
2. Otherwise contact Robert, a co-lead of the Safe Harbor initiative, at *safeharbor@macwha.com* to assist with the adoption.

In either case, protocols will complete the following tasks as part of their adoption to provide essential information for whitehats and bind the protocol and its community to the terms of Safe Harbor.

1. Decide on Adoption Details:

Adoption details are the information provided by the protocol to the whitehat to assist them with fund recovery. It is essential information and includes the following:

- **On-Chain Assets**: List all smart contract and wallet addresses to protect.
- **[Asset Recovery Address](./key-terms.md#asset-recovery-address)**: Provide an address for Whitehats to return recovered funds.
- **Bounty Terms**: Set bounty percentage and cap for successful Whitehats (recommended 10% and $1M USD, respectively).
- **KYC Requirements**: Define Know Your Customer (KYC) requirements for Whitehats.
- **Emergency Contact Information**: Provide contact details for use during an exploit.

2. Adoption Process:

The adoption process is the process by which protocols bind themselves and their community to the terms of the SEAL Whitehat Safe Harbor agreement. It varies based on protocol structure, but in general follows the below steps:

- **Create Agreement Fact Pages**: Document detailing adoption specifics.
- **DAO Procedures**: DAOs must follow standard procedures to push adoption through their governance.
- **Public Disclosure**: Publish adoption details in accessible locations such as the Safe Harbor Registry or the protocol's website’s Terms and Conditions.
- **Maintain Adoption**: Ensure adoption details are updated whenever a new asset is deployed on-chain.

## After Adoption

Once a protocol has adopted Safe Harbor, maintinance is crucial for ongoing protection of any new assets. Newly published assets may warrent an update to the Safe Harbor adoption details if they are not already in scope.

If a protocol want to make any changes to their adoption details, for example adjusting the bounty terms or KYC requirements, they must do so before an exploit occurs. Protocols are not permitted to retroactively change their adoptions details after an exploit.

## In the Event of a Hack

In the event of an exploit protocols will follow the below process.

1. **Asset Recovery**: Whitehats will use the designated Asset Recovery Address to return any recovered funds and attempt to contact the designated emergency contact. In general this should happen within 6 hours of the event, though it may take as long as 48 hours.
2. **Post-recovery Procedure**: Upon receiving recovered assets, protocols may conduct any required KYC checks using their disclosed KYC provider. The bounty will then be distributed to the Whitehat in accordance with the bounty terms specified in the adoption details.
