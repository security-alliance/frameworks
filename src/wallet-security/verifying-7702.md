---
tags:
  - Engineer/Developer
  - Security Specialist
contributors:
  - role: "wrote"
    users: [pinalikefruit]
  - role: "reviewed"
    users: [] 
---

# Verifying EIP-7702 Transactions

The Pectra network upgrade introduces **EIP-7702**, which allows a standard Externally Owned Account (EOA) to temporarily delegate its authority by setting its code to a smart contract. This is achieved via a new transaction type, `0x04`.

While powerful, this feature introduces a new attack vector. If an attacker tricks a user into signing a message that sets the wallet's code to a malicious contract, the attacker can gain full control and drain all assets.

## Risks of EIP-7702

- **Phishing Attacks**: The primary threat is phishing sites or scams that trick users into signing a `SetCode` delegation to a malicious contract under the guise of a wallet "upgrade."
- **Multi-Chain Replay Attacks**: A signature authorizing a delegation with `chain ID 0` can be replayed on other EVM chains. An attacker could deploy a malicious contract at the same address on a different chain and use the replayed signature to take control there.

## Guidance for Users

- **Protect Your Private Key**: Delegation does not eliminate the fundamental risk of a private key compromise. If your key is stolen, an attacker can still authorize delegations.
- **Verify Delegation Targets**: Only delegate your account to contracts that are well-known, audited, and vetted by security experts.
- **Understand Multi-Chain Risks**: Be extremely cautious when authorizing a delegation with `chain ID 0`. This signature can be replayed on other networks where a malicious contract might exist at the same address.
- **Beware of Phishing**: Be skeptical of any request to "upgrade" or "enable" smart account features, especially if it comes from an external link or pop-up.

> ⚠️ Wallets will only prompt you to switch to a smart account within the wallet's native, trusted interface. Any request to do so via email, a website, or a direct message is a phishing scam.

## Guidance for Developers

- **Assume All Addresses Have Code**: Do not assume an address is a simple EOA. Security checks that rely on `tx.origin` are no longer safe and must be replaced with checks that account for smart contract wallets.
- **Prevent Storage Conflicts**: Use standardized namespacing for storage variables (e.g., EIP-1967) to prevent conflicts when users re-delegate between different contract implementations.
- **Implement Reentrancy Guards**: Do not rely on EOA-based assumptions to prevent reentrancy. Use the **checks-effects-interactions** pattern and reentrancy guards.
- **Ensure Token Compatibility**: To ensure smart contract accounts can properly receive tokens, implement the necessary receiver hooks for common standards (e.g., `onERC721Received`, `onERC1155Received`).
- **Secure Initialization Flows**: Always verify signatures during wallet initialization to prevent unauthorized access or front-running attacks.