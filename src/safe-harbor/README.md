# Whitehat Safe Harbor

tag: [SEAL/Initiative, Protocol, Whitehat, DAO]

SEAL’s [Whitehat Safe Harbor](https://github.com/security-alliance/safe-harbor) agreement is a legal and technical framework which can be adopted by protocols and crypto communities to grant advanced permission to whitehats and MEV bots for frontrunning exploits so long as:

1. Funds are returned to a designated [Asset Recovery Address](./key-terms.md#asset-recovery-address) determined by the protocol.
2. Action is only taken in the event of an [Active Exploit](./key-terms.md#active-exploit).

## Documents

- [Technical Outline](https://github.com/security-alliance/safe-harbor)
- [Safe Harbor for Protocols](./protocol.md)
- [Safe Harbor for Whitehats](./whitehat.md)

## Components

- [security-alliance/safe-harbor](https://github.com/security-alliance/safe-harbor): the GitHub repository housing the legal contracts and on-chain components of the agreement. Includes the official legal agreement, a summary document, and the Safe Harbor Registry.
- [Whitehat Legal Defense Fund](https://www.notion.so/Introducing-the-First-Legal-Defense-Fund-to-Support-Crypto-Whitehats-e6792614a5b34c9f9f3f529caf975750?pvs=21): In collaboration with the [Security Research Legal Defense Fund](https://www.securityresearchlegaldefensefund.org/) (SRLDF), the Whitehat Legal Defense Fund is legal defense fund which offers grants for whitehats who act under Safe Harbor in the event that they require legal defence.
- [Safe Harbor Agreement for Whitehats](https://docs.google.com/document/d/1paLegm9iehuCub-If9LPndTAISvT8meSdG8OvAk2VLY): the official legal agreement binding the whitehat and protocol community. Includes several exhibits, including _Exhibit F Adoption Form_, which describes the choices a protocol can make during adoption (KYC requirements, bounty %, etc.).
- [Safe Harbor Agreement for Whitehats - Human Readable Summary](https://docs.google.com/document/d/1sTpU37r8JPEAsxG3Y-Rf0pWMOEumTc2_QijZbSpSRW0/edit?usp=sharing): a helper document to summarize the official agreement.

## FAQ

<details>
<summary>How Does Safe Harbor Differ From Bug Bounty Programs?</summary>

In bug bounty programs, whitehats identify and report security vulnerabilities that are not yet publicly known. This allows for a more controlled response, as the information is initially shared with a limited audience, reducing immediate risk.

With the Safe Harbor Initiative, whitehat intervention is permitted only after an exploit has been attempted by a separate malicious actor. This scenario requires a more immediate and urgent response. The Safe Harbor agreement pre-emptively grants whitehats the authorization to act in these circumstances, ensuring that they can address immediate threats without the delay of communicating with the protocol.

</details>

<details>
<summary>Who Wrote Safe Harbor?</summary>

The current proposal was written by lawyers and security researchers specialized in cybersecurity incident response, web3, and global disclosure laws.

The legal contract was written by web3 law firm Piper Alderman, white shoe firm Debevoise & Plimpton, and LexPunk Community legal. In addition, general support was received from the in-house legal counsel at many of the world’s largest crypto funds and projects.

</details>

<details>
<summary>How Does Safe Harbor Work Legally?</summary>

The contract is triggered only when a blackhat attacks a protocol or a systemic breach is discovered. At that point, a separate whitehat (unaffiliated with the attacker) can attempt to save the assets being stolen by using similar hacking methods.

The contract activates through the action of the whitehat, but is not binding unless both of the following happens:

1. The protocol community has given the whitehat authorization to attempt to hack the affected protocol in advance via adoption of Safe Harbor.
2. The whitehat demonstrates via their actions and delivery of assets to the return address  that they are competent.

The whitehat succeeds once they return any assets recovered to a safety address. In return, they receive a reward and protection against lawsuits from the other parties to the contract.

If the whitehat doesn’t succeed, they don’t receive a reward or legal protection because in this case, it’s impossible for the protocol community to distinguish between incompetence and malice.

</details>

<details>
<summary>How Can I Participate?</summary>

For protocols or DAOs to participate in Safe Harbor, they can adopt Safe Harbor and register all assets under scope. This involves adopting the Safe Harbor agreement, publicly announcing their adoption, and selecting adoption details such as bounty terms, assets under scope, and an asset recovery address. Once a protocol has adopted safe harbor, in the event of an active exploit, whitehats will be allowed to intervene and attempt to save protocol funds.

For whitehats to participate in Safe Harbor, they must have sufficient experience in blockchain security to perform the rescue competently. While there is no formal standard, they should have some background experience in software engineering, security, and/or blockchain auditing. They must also be free from OFAC sanctions and not involved in legal issues related to any other blockchain exploits.

For more details you can review [Safe Harbor for Protocols](./protocol.md) and [Safe Harbor for Whitehats](./whitehat.md).

</details>

<!--Keeping this here for easy copy/paste
<details>
<summary></summary>
</details>
-->
