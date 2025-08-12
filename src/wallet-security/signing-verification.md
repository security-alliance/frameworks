---
tags:
  - Engineer/Developer
  - Security Specialist
  - Operations & Strategy
contributors:
  - role: wrote
    users: [pinalikefruit]
  - role: reviewed
    users: [Coinspect]
---

# Signing & Verification

This section provides a guide to transaction verification, from basic EOA interactions to advanced multisig operations.

The rule is to **never sign blindly**. Always take the time to verify what your wallet is asking you to approve. A compromised dApp front-end or a misunderstanding of a transaction's parameters can lead to a complete loss of funds, even with a wallet that is not compromised.

### Core Principles of Secure Signing

Before diving into specific use cases, it's critical to adopt a security-first mindset built on these foundational principles:

- **Verify, Don't Trust**: Never trust a user interface blindly. The raw transaction data is the ground truth of what you are authorizing. Always use independent tools to confirm that what you see is what you sign.
- **Simulate Before Signing**: Before approving any non-trivial transaction, use a simulation tool. These tools act as a "sandbox," showing you the human-readable outcome before you commit, protecting you from unexpected results and malicious contracts.
- **The Hardware Wallet is the Source of Truth**: Your hardware wallet's trusted display is your last line of defense against UI spoofing. If the information on your computer screen does not perfectly match what is on your hardware device, reject the transaction immediately.
- **Demand Clear Signing**: Prioritize hardware and software that can decode and display a transaction's intent in a human-readable format. If a wallet requires "blind signing" (approving a raw, unreadable hash), you are accepting a significant level of risk.

### In This Section

This chapter breaks down transaction verification into key areas:

- **[Standard Transaction Verification](./verifying-standard-transactions.md)**: An overview of the foundational security principles that apply to all types of transactions.
- **[Verifying Multisig Transactions](./secure-multisig-signing-process.md)**: A detailed guide to the two-phase process of securely signing and executing multisig transactions, including how to verify EIP-712 hashes and `execTransaction` calldata.
- **[Verifying EIP-7702 Transactions](./verifying-7702.md)**: An analysis of the new security considerations introduced by EIP-7702, which allows EOAs to temporarily act as smart contracts, with specific guidance for both users and developers.

To apply these principles, this framework provides a curated list of verification and simulation tools in the **[Tools & Resources](./tools-&-resources.md)**.
