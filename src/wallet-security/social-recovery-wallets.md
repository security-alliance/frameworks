---
tags: []
contributors:
  - role: "wrote"
    users: [pinalikefruit]
  - role: "reviewed"
    users: [] 
---

## Social Recovery Wallets

### User Profile

Advanced individuals seeking a balance between high security and robust, user-friendly recovery mechanisms. This user wants to mitigate the risk of a single point of failure without the full operational complexity of a multisig.

### Primary Goal

To enable secure account recovery in the event of a lost primary signing key, by leveraging a set of trusted entities "guardians" without giving them direct control over funds.

### Recommended Setup

A social recovery wallet is a smart contract account that separates daily transaction authority from account recovery authority.

*   **Signing Key**: A single primary key used for day-to-day transactions. This key provides the convenience of a standard EOA, allowing for quick and easy DApp interactions.
*   **Guardians**: A set of trusted addresses (e.g., controlled by friends, family, or other devices owned by the user) that are designated to assist in account recovery.
*   **Recovery Mechanism**: If the primary signing key is lost or compromised, a majority of the guardians can vote to replace it with a new, secure key. Crucially, guardians cannot initiate transactions themselves; their sole power is to authorize the replacement of the signing key.

### Key Concepts & Best Practices

*   **Guardian Selection and Security**: The strength of the social recovery model depends on the security and independence of the guardians. They should be diverse and not susceptible to a single common threat.
*   **Key Revocation**: If the primary signing key is compromised, the recovery process allows you to swap it out for a new one without having to move all assets to a new wallet address.
* **Advanced Guardian Setups**: For enhanced security, guardian roles can be implemented using **Multi-Party Computation (MPC)**. In an MPC-based recovery, guardians hold cryptographic shares that are used collectively to authorize a recovery action. This method allows guardians to produce a valid signature through a distributed computation using their individual shares, without ever reconstructing a single master key on any device. 

### Trade-offs and Considerations

*   **DApp Support**: While improving, native support for smart contract wallets can sometimes be less seamless than for standard EOAs.
*   **Deployment & Usage Costs**: As it is a smart contract, there is an initial gas cost to deploy the wallet on-chain, and recovery actions will also incur gas fees.