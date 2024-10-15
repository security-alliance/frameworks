## DAO Governance

DAO security is a multi-faceted concept. In the analysis below, we have considered multiple angles, including data transparency, decentralized ownership, vendor management, defense against governance attacks, physical security policy, etc. While the absence of some of these (for example, a physical security policy for delegates and key stakeholders) can lead to a critical security incident, others (for example, data transparency) may not have an immediate side effect. Even so, it may lead to second-order effects (e.g., low data transparency → loss of quality contributors → governance takeover).

Note that we also have a separate section for protocol DAOs, i.e., DAOs that control an on-chain protocol. All DAOs, whether or not they are a protocol DAO, are advised to consider the controls detailed in the first section.

## DAO Controls

| Control | Description |
| :--- | :--- |
| Data transparency | `[MANDATORY]` The DAO should publish an up to date governance document, outlining the steps and stakeholders involved in governance. <br><br>`[RECOMMENDED]` The DAO should maintain a repository of all DAO-related artifacts. This could include DAO-run grant programs, list of all smart contracts, list of functional committees, councils and multisigs, trusted service providers, financials, etc. We recommend using the EIP-4824 standard to facilitate this, as it allows decentralized control of data by the DAO.|
| Ownership of digital assets | `[MANDATORY]` The DAO should release a public list of digital assets it owns and controls. The list could include ENS names and other naming services, dApps, front-ends, etc. |
| Self defense and incident response plan for governance incidents and attacks | `[MANDATORY]` The DAO must publish a self-defense and emergency management plan that outlines events it considers emergencies or governance attacks. A template is provided [here](https://www.michigan.gov/-/media/Project/Websites/msp/cjic/pdfs6/Example_Incident_Response_Policy.pdf?rev=4bf335b6d1344226a92a0947bc8688ec). |
| Vendor/service provider management Policy | `[MANDATORY]` The DAO should publish a list of vendors/service providers it relies on. <br><br>`[RECOMMENDED]` The DAO should publish a vendor management policy, incorporating security standards from SEAL’s security framework.<br><br>Vendors include all 3rd party service providers that provide a good or service to the DAO, including software services that are not paid by the DAO, but used for operations, governance or other avenues. |
| Proposal safety | `[RECOMMENDED]` It is recommended to: <br><br> use a timelock before upgrading protocols that hold funds simulate proposals before executing them<br><br> perform automated checks on proposals for common attacks |
| Vulnerability management | `[RECOMMENDED]` The DAO should publish a vulnerability management plan. Sample [template](https://frsecure.com/vulnerability-management-policy-template/). |
| Physical security policy | `[MANDATORY]` The DAO should publish a physical security policy, and provide training to combat wrench attacks. It should describe the steps that should be taken by delegates, multisig signers, members of the foundation, and other important stakeholders to ensure security while traveling to conferences and other events. Inspiration taken from [here](https://github.com/OffcierCia/Crypto-OpSec-SelfGuard-RoadMap). |
| Decentralization | `[MANDATORY]` Open proposal system (i.e. anyone with enough governance power can make a proposal)<br><br>`[MANDATORY]` No admin backdoor - proposals can’t be vetoed by an unelected party<br><br>`[RECOMMENDED]` Anyone can execute a proposal/proposals execute autonomously.<br><br>`[RECOMMENDED]` There is sufficient delegate/voter diversity such that founders/investors don’t control the majority voting power.<br><br>`[RECOMMENDED]` Take active efforts to maintain a healthy minimum number of accounts needed to reach quorum. |
| Community management | `[MANDATORY]` The DAO should follow secure community management processes, to secure community accounts on Twitter, Discord, Telegram, and other applications.  |
| Compliance | `[MANDATORY]` The DAO must keep a record of its compliance efforts, including policies, procedures, and audit results. It should make its best efforts to comply with the regulatory frameworks applicable to its areas of operation. |

## Protocol Controls

The following set of controls are authored for protocol DAOs, i.e DAOs that control an on-chain protocol. All DAOs, irrespective of whether they are a protocol DAO, are advised to follow the controls detailed in the previous section.

| Control | Description |
| :--- | :--- |
| Data transparency | `[MANDATORY]` Code that the DAO governs should be available somewhere publicly, even if it is not open source. <br><br>`[RECOMMENDED]` All DAO related smart contracts including protocol, token, governance and treasury related smart contracts, should be verified on block explorers, if the provision exists.<br><br>`[RECOMMENDED]` There should be publicly accessible documentation on the protocol components, along with flow diagrams, design choices, dependencies and a record of critical privileged roles. |
| Subdomains for contracts and dApps | `[RECOMMENDED]` Provide all contracts with ENS names. dApps should enforce ENS subdomain versioning (v1, v2, etc) as mentioned [here](https://ethglobal.com/showcase/undefined-0ejxp). |
| [Safe harbor agreement](https://github.com/security-alliance/safe-harbor) | `[RECOMMENDED]` The DAO should execute a white hat Safe Harbor agreement. |
| Proposal safety | `[RECOMMENDED]` It is recommended to:<br><br>use a timelock before upgrading protocols that hold funds<br><br>perform automated tests on code commits |
| Key management | `[MANDATORY]` Use isolated and purpose specific hardware wallets for multisig key holders and delegates. |
| Operational Security Policy for Key Entities| `[RECOMMENDED]` The DAO should require entities, including its foundation, founding company, or service providers with a long-term service agreement, to publish and adhere to an operational security policy. Inspiration for the policy can be found [here](https://docs.google.com/document/d/1Aggn3oqT3lpTFyVmlncBTOowdpTsrGtPqCmdKcQnEdA/edit?usp=sharing).
| Code security | `[MANDATORY]` The DAO must conduct regular external security reviews and publish:<br><br>A comprehensive report detailing findings and suggested improvements.<br><br>A review of changes implemented to mitigate identified risks.<br><br>At least one copy of the documents mentioned above should be publicly available for the latest protocol version.|
