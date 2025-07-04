---
tags:
  - Engineer/Developer
  - Security Specialist
---

# Wallet Security


Cryptocurrency relies on cryptographic keys to secure transactions and manage ownership of digital assets. Proper wallet security is essential to protect these assets from theft, loss, and unauthorized access. This guide covers the fundamental aspects of wallet security, offering insights into different types of wallets, signing schemes, and best practices to ensure a high level of security.

## Table of Contents

- [Cold vs Hot Wallet](./cold-vs-hot-wallet.md) - Understanding the differences between cold and hot wallets
- [Custodial vs Non-Custodial](./custodial-vs-non-custodial.md) - Comparing custodial and non-custodial wallet solutions
- [Hardware Wallets](./hardware-wallets.md) - Guide to hardware wallet security and best practices
- [Signing Schemes](./signing-schemes.md) - Overview of different signing schemes and their security implications
- [Software Wallets](./software-wallets.md) - Security considerations for software-based wallet solutions
- [Secure Multisig Best Practices](./secure-multisig-best-practices.md) - Best practices for setting up and managing multisig wallets
- [Secure Multisig Signing Process](./secure-multisig-signing-process.md) - Detailed guide for secure multisig transaction signing

In this section you can:

- Learn the differences between cold and hot wallets, their use cases, and how to choose the right one for your needs.
- Understand the pros and cons of custodial and non-custodial wallets, and which type suits your security preferences.
- Explore popular hardware wallets, their characteristics, and the importance of using them for secure key storage.
- Get insights into different signing schemes such as EOAs, Multisig, Smart Contract Wallets, and more, including their use cases and security implications.
- Discover various software wallets, their features, and how they can be used securely to manage cryptocurrency assets.

Effective wallet security is the cornerstone of cryptocurrency security, including taking physical attacks such as the wrench attack into consideration.

![security](https://github.com/security-alliance/frameworks/assets/84518844/12e2cba3-f69e-4fde-85f1-8a235b9808af)

[xkcd](https://xkcd.com/538/)


## Introduction

The following is the heirarchy of wallets, from least secure, and most reliant on third parties, to most secure, and least reliant on third parties. It's important to note, that the most secure choices also require the most responsibility from the user, and the least secure choices require the least responsibility from the user.

1. **Custodial Wallets**: These wallets are managed by a third party, such as an exchange or a wallet service provider. They are convenient, but rely on the security practices of the third party.
2. **Non-Custodial Wallets**: These wallets are managed by the user, which provider greater control and security, but also requires the user to take responsibility for managing their private keys.
   1. **Hot Wallets**: These wallets are connected to the internet and are more convenient for frequent transactions but are also more vulnerable to attacks.
   2. **Cold Wallets**: These wallets are offline and provide a higher level of security, making them suitable for long-term storage of assets.
   3. **Multisig Wallets**: These wallets require multiple signatures to authorize a transaction, adding an extra layer of security. They are often comprised of multiple hot, cold, or hardware wallets.