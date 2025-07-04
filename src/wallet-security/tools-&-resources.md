---
tags:
  - Engineer/Developer
  - Security Specialist
contributors:
  - role: wrote
    users: [pinalikefruit]
  - role: reviewed
    users: [Coinspect]
---

# Tools & Resources

This section provides a curated list of tools and resources to help users select wallets, practice safe signing habits, and verify transactions. Using these tools is a critical part of a robust security strategy.

## Wallet Selection

Before choosing a wallet, it is essential to consult independent, community-trusted resources.

- **[ethereum.org/wallets](https://ethereum.org/en/wallets/find-wallet/)**: The official, community-maintained list of wallets, filterable by features. A reliable starting point for discovering wallets.
- **[Wallet Scrutiny](https://walletscrutiny.com/)**: An in-depth review site that focuses on transparency, verifiability, and reproducibility. It flags wallets that are closed-source or have other potential security concerns.
- **[Wallet Security Ranking](https://www.coinspect.com/wallets/)**: Evaluates wallets by permissions, intent clarity, device security, and threat prevention to help users choose safer, more trustworthy options.
- **[Wallet Beat](https://beta.walletbeat.eth.limo/wallet/summary/)**: Aims to provide a comprehensive list of wallets, their functionality, practices, and support for certain standards.

## Transaction Simulation

Transaction simulators allow you to preview the exact outcome of a transaction before signing it, preventing errors and security risks.

- **[Tenderly](https://tenderly.co/)**: A platform that allows you to simulate transactions and preview, helping to prevent transaction failures, security risks, and unnecessary gas costs.
- **[Alchemy Simulation APIs](https://www.alchemy.com/docs/reference/simulation)**: An API suite that predicts the precise impact of a transaction before it reaches the blockchain. 

## Transaction Verification

These tools are designed to help you independently verify the integrity of transaction data, especially for multisig operations.

- **[safe-hash](https://github.com/Cyfrin/safe-hash-rs)**: A command-line tool for locally verifying Safe transaction data and EIP-712 messages before signing. It is designed to protect against phishing by allowing you to independently generate the hash your wallet will ask you to sign.
- **[safeutils.openzeppelin.com](https://safeutils.openzeppelin.com/)**: A user-friendly web interface for calculating and verifying Safe transaction hashes. While convenient, remember the security advantages of using a local, offline tool like `safe-hash` for high-value transactions.
- **[calldata.swiss-knife.xyz](https://calldata.swiss-knife.xyz/decoder)**: Web-based tool for quick decoding of transaction data.
- **[Foundry cast](https://book.getfoundry.sh/reference/cast/cast-decode-calldata)**: A powerful command-line tool for local, offline decoding.

## Security Training

These tools allow you to practice identifying threats in a safe, simulated environment.

- **[Wise Signer](https://wise-signer.cyfrin.io/)**: An interactive platform that challenges users to identify safe and dangerous transactions before signing them. It is an excellent tool for learning to recognize common phishing attacks and deceptive transaction patterns without risking real assets.
- **[Web3 Wallet Security Courses](https://updraft.cyfrin.io/career-tracks/web3-wallet-security/)**: Offers a structured curriculum for hands-on security training, guiding users from foundational concepts in "Web3 Wallet Security Basics" to advanced techniques. The advanced course covers critical topics like Safe multisig configuration, EIP-712 signature verification, and real-world hack analysis.
- **[How to Multisig](https://howtomultisig.com/)**: A dedicated resource with best practices on how to implement secure standard operating procedures for multisig wallets.