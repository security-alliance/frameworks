---
tags:
  - Security Specialist
  - Operations & Strategy
  - Engineer/Developer
contributors:
  - role: wrote
    users: [pinalikefruit,engn33r]
  - role: reviewed
    users: [Coinspect] 
---

## Multisig Wallets For Advanced Users & High Funds

### User Profile

Advanced technical users, developers, Decentralized Autonomous Organizations (DAOs), and organizations responsible for managing protocol treasuries, smart contract ownership, or significant personal/collective assets.

### Primary Goal

The primary objective is to eliminate single points of failure and establish robust, distributed control over high-value assets and critical smart contract functions.

### Core Concept: M-of-N Scheme

A multisignature (multisig) wallet is a smart contract that requires a predefined minimum number of approvals (**M**) from a total set of authorized signers (**N**) to execute a transaction. This is known as an **M-of-N** scheme (e.g., 2-of-3, 3-of-5).

By distributing signing authority, a multisig ensures that the compromise of a single private key is insufficient to authorize the movement of funds or execute a privileged action. 

### Setup Best Practices

*   **Threshold Selection:** The `M-of-N` threshold should be chosen to balance security and operational resilience. Avoid `N-of-N` schemes, as the loss of a single key would result in a permanent loss of access to all funds. 

*   **Strategic Signer Distribution:** The security of a multisig depends entirely on the operational security (OpSec) of its individual signer keys. Storing multiple signer keys on the same device or in the same physical location negates the security benefits. Effective distribution strategies include:
    *   Using different hardware wallet models and manufacturers.
    *   Maintaining geographical separation for devices holding signer keys.
    *   Assigning signer keys to different trusted individuals within an organization.
    *   Using diverse client software to interact with the multisig to mitigate single-point-of-failure risks from a software vulnerability.

*   **Practice on Testnet:** Before deploying on mainnet, thoroughly practice wallet creation, transaction signing, and owner management on a test network.

*   **Timelocks:** Enforce a mandatory delay between the approval of a transaction and its execution. This provides a critical window for the community or team to detect and react to malicious proposals.

*   **Role-Based Access Control (RBAC):** Implement modules that grant specific, limited permissions to certain addresses (e.g., a "pauser" or "executor" role) without making them full owners, adhering to the principle of least privilege.

### Operational Best Practices


*   **Signer Key Revocation and Replacement:** A  feature of multisigs is the ability to add, remove, or replace signer keys. If a signer's key is compromised or lost, it can be revoked and replaced with a new, secure key through a transaction approved by the remaining owners, preserving the integrity of the wallet's assets without needing to migrate funds.

*   **Secure Signing Environment:** For maximum security, all signing activities should be performed on a dedicated, air-gapped, or hardened device running a secure OS. Using a primary work laptop significantly increases the risk of malware interference.

*   **Independent Transaction Verification:**  Before signing, always verify the raw transaction data (target address, function call, parameters) to ensure it matches the intended operation.

*   **Out-of-Band Verification for Admin Changes:** Any critical administrative action, such as adding or replacing a signer, must be verified through multiple, independent communication channels (e.g., a video call and a signed message) to prevent social engineering attacks.

*   **Active Monitoring:** Implement monitoring and alerting systems to be immediately notified of any on-chain activity related to the multisig, including proposed transactions, new signatures, and owner changes (e.g., using tools like  [safe-watcher](https://github.com/Gearbox-protocol/safe-watcher) ).

*   **Documented Procedures:** Maintain clear, secure, and accessible documentation for all multisig procedures, including transaction creation, signing, and emergency recovery plans.



### Acknowledgements

Some ideas were borrowed from the [EF's multisig SOP notes](https://notes.ethereum.org/@fredrik/multisig-sop) and [Manifold Finance multisig best practices](https://hackmd.io/@manifoldx/multisig-best-practices).