<div align="center">
  <h1>Multi-Sig Operations and Ideal Setup Guide</h1>
  <p><em>A comprehensive implementation of security best practices for multi-signature wallet management</em></p>
</div>

---

## Overview

Comprehensive wallet security combines multiple defensive layers to create a system that remains resilient even when facing sophisticated attacks or insider threats. The recommendations in this guide work together to establish a security framework where no single point of failure can compromise your assets. Remember that wallet security is not a one-time configuration but an ongoing process of continuous improvement and vigilance—in a landscape where attackers constantly evolve their methods, maintaining rigorous security protocols is essential for protecting high-value on-chain assets.

---

## Multi-Sig & Software Wallets

### Multi-Sig Platform Setup

**Trusted Multi-Sig Platform**
- [ ] Use a trusted platform like Safe to set up and manage your multi-sig
  - [ ] Set up wallet at [https://safe.global/wallet](https://safe.global/wallet)
  - [ ] Safe is the gold standard for multi-sig wallet management, but any equivalent system can be used

**Self-Hosted Multi-Sig UI** *(Highly Recommended)*
- [ ] Host your own multi-sig UI for additional security
  - [ ] Deploy from [https://github.com/safe-global/safe-wallet-monorepo/tree/dev/apps/web](https://github.com/safe-global/safe-wallet-monorepo/tree/dev/apps/web)
  - [ ] While it should not be your final line of defense, securing the UI does protect your verification process from being compromised by supply-chain attacks

### Software Wallet Selection

**Recommended Wallet Applications**
- [ ] Review wallet security score rankings at [https://www.coinspect.com/wallets/](https://www.coinspect.com/wallets/)

**Rabby Wallet** *(Recommended)*
- [ ] Install Rabby wallet from [https://rabby.io/](https://rabby.io/)
  - [ ] Verify open source code
  - [ ] Enable pre-sign security checks (e.g. new address warnings)
  - [ ] Use built-in transaction simulation

**MetaMask with Security Snaps** *(Alternative)*
- [ ] Install MetaMask from [https://metamask.io/](https://metamask.io/)
- [ ] Install recommended security Snaps:
  - [ ] **Wallet Guard Snap**: [https://snaps.metamask.io/snap/npm/wallet-guard-snap/](https://snaps.metamask.io/snap/npm/wallet-guard-snap/) - Good for transaction insights and security warnings
  - [ ] **Tenderly Snap**: [https://snaps.metamask.io/snap/npm/tenderly/metamask-snap/](https://snaps.metamask.io/snap/npm/tenderly/metamask-snap/) - Allows you to easily simulate transactions before confirming them
  - [ ] **Forta Network Snap**: [https://snaps.metamask.io/snap/npm/forta-network/metamask-snap/](https://snaps.metamask.io/snap/npm/forta-network/metamask-snap/) - Scam and malicious address detection
  - [ ] **Web3 Antivirus Snap**: [https://snaps.metamask.io/snap/npm/web3-antivirus/web3-antivirus-snap/](https://snaps.metamask.io/snap/npm/web3-antivirus/web3-antivirus-snap/) - Security alerts on known bad addresses and assets

---

## Hardware Wallets

💡 **Hardware wallets are the cornerstone of secure asset storage and your last line of defense against attacks. All other security controls could fail and your hardware wallet would still keep you safe when used properly**

### Hardware Wallet Selection

**Purchase Requirements**
- [ ] **Direct Purchase**: Purchase your wallet directly from the manufacturer, do not purchase from a reseller. Use a pseudonym and ideally have it delivered to a P.O. box or secure locker.
- [ ] **Large Screen**: Ensure your device has a large screen that supports displaying full transaction data. Wallets with clear signing technology are highly recommended
- [ ] **Touch Screen PIN**: Use touch screen PIN entry with shuffled buttons
- [ ] **Strong PIN**: Use at least a 6-digit PIN, but the longer the better
- [ ] **Brand Diversification**: Consider diversifying wallet brands amongst your team to reduce risk of 0-day and supply chain vulnerabilities impacting multi-sig quorums

**Recommended Hardware Wallets**
- [ ] **Ledger Options**:
  - [ ] [Ledger Stax](https://shop.ledger.com/products/ledger-stax)
  - [ ] [Ledger Flex](https://shop.ledger.com/pages/ledger-flex)
- [ ] **GridPlus**: [Grid Lattice1](https://gridplus.io/products/grid-lattice1)
- [ ] **Trezor**: [Trezor Safe 5](https://trezor.io/trezor-safe-5)

### Device Verification & Setup

**Integrity Verification**
- [ ] **Ledger**: Verify device integrity using [Ledger's verification guide](https://support.ledger.com/article/4404389367057-zd#h_01FPAFSEH1S9Q6B0NN21ZNKFHS)
- [ ] **GridPlus**: Verify authenticity using [GridPlus verification guide](https://docs.gridplus.io/lattice1/lattice1-guides/how-to-verify-that-your-lattice1-is-authentic)
- [ ] **Trezor**: Authenticate device using [Trezor authentication guide](https://trezor.io/learn/a/authenticate-trezor-safe-5)

**Key Generation & Security**
- [ ] **Generate New Keys**: Generate new private keys on the device, do not import them from your computer or another device
- [ ] **No Digital Storage**: Never export or store your private keys or seed phrases in any digital format, including pictures or in password managers. Always use 24-word seed phrases
- [ ] **Seed Phrase Encryption**: Never store seed phrases in plain text. Seed phrases must be encrypted through some method. For example, seed phrases must be mixed in a randomly generated, recorded order; have a 25th secret word; or require a passphrase to be imported into a wallet - regardless of the method, the related secret value should be stored in a password manager
- [ ] **Clear Signing Awareness**: Use Clear Signing support when available, but never rely on it alone - always fully verify transactions manually

### Private Key Backup Strategy

**Backup Medium**
- [ ] **Fireproof Metal**: Use fireproof metal as your physical seed phrase storage medium
- [ ] **Physical Security**: Only store seed phrases backups in a secure location like a physical safe

**Backup Necessity**
- [ ] **Optional Self-Recovery**: Seed phrase backups are not strictly necessary with a healthy quorum - multi-sig signing wallets should not be used for any other purpose and could be re-provisioned by existing quorum admins. In this case, it is recommended to maintain a healthy enough signing pool that loss of access to a few accounts at once could be recovered from. Either way, personal backup methods for admins are required to maintain access to on-chain assets in the event of loss of access to hardware wallets
- [ ] **Quorum Social Recovery**: If access to wallet is lost, the quorum can vote to edit members to replace the inaccessible wallet

**Advanced Backup Options**
- [ ] **Key Splitting**: Split the key into multiple shards and securely distribute them
  - [ ] Use [Shamir's Secret Sharing algorithm](https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing) for N of M key shards
  - [ ] Consider using this [Shamir Secret Sharing implementation](https://github.com/privy-io/shamir-secret-sharing)
- [ ] **Multi-Share Backups**: Use device-supported multi-share backups where available
  - [ ] [Trezor Multi-Share Backup](https://trezor.io/learn/a/multi-share-backup-on-trezor)
- [ ] **Secure Distribution**: Give shards to trusted family members, put in bank safe deposit boxes, and keep hidden around your house

---

## Contract-Level Controls

### Smart Contract Security

**Invariant Checks**
- [ ] **Design Invariants**: Design contracts to enforce invariants and expected state changes such as token balance changes, ownership and administration, and proxy implementation addresses
- [ ] **Automated Reversion**: Ensure contracts automatically revert transactions if any invariant is violated

### Time-Lock Implementation

**Challenge Periods**
- [ ] **Enforce Time-Locks**: Incorporate challenge periods into your transaction execution process
- [ ] **Veto Quorum**: Establish a smaller veto group separate from the confirmation quorum to review and confirm transaction legitimacy
- [ ] **Delayed Execution**: Implement time-locks to prevent immediate execution of suspicious transactions
- [ ] **Zodiac Delay Modifier**: Consider using [Zodiac Modifier Delay](https://github.com/gnosisguild/zodiac-modifier-delay/tree/main) or equivalent for implementing on-chain time-lock transaction delays to Safe wallets

---

## Transaction Review Process

💡 **Implement strict verification processes to prevent human error and detect compromised software or transactions. Verification processes break down over time if they are not well defined and teams are not constantly proactive and vigilant**

### Verification Tools & Simulations

**Transaction Hash Verification**
- [ ] **Safe TX Hashes Util**: Use [Safe TX Hashes Util](https://github.com/pcaversaccio/safe-tx-hashes-util) to generate expected transaction hashes
  - [ ] Compare generated hashes to hashes displayed on your hardware wallets
  - [ ] Consider the [Cyfrin fork](https://github.com/Cyfrin/safe-tx-hashes) for additional support without relying on Safe API

**Monitoring & Analysis Tools**
- [ ] **Safe Watcher**: Implement [Gearbox Safe Watcher](https://github.com/Gearbox-protocol/safe-watcher) or equivalent for monitoring and alerts
  - [ ] Connect to Telegram for notifications
  - [ ] Monitor for suspicious delegateCall transactions
- [ ] **DNS Whitelist**: Use [DeFi DNS Whitelist](https://github.com/0xKoda/defi-dns-whitelist/tree/main) as a firewall for dedicated signing machines
- [ ] **Calldata Decoder**: Use [Swiss Knife Decoder](https://calldata.swiss-knife.xyz/decoder) to make transaction call data more human-readable

**Network Monitoring**
- [ ] **Little Snitch**: Install [Little Snitch](https://www.obdev.at/products/littlesnitch/index.html) for active firewall and network monitoring
- [ ] **Lulu**: Use [Lulu](https://objective-see.org/products/lulu.html) as a free, open source alternative to Little Snitch
- [ ] **Glasswire**: [Glasswire](https://www.glasswire.com/) can be used for Windows machines

### Multi-Channel Verification

**Redundant Confirmation Channels**
- [ ] **Never Rely on Single Device**: Never rely solely on the signing machine for confirmation
- [ ] **Two Additional Devices**: Validate transaction details on at least two additional devices to compare against wallet transaction details. It is recommended to include a mobile device as one of these
- [ ] **Independent Verification**: Ensure multi-channel approach provides independent verification even if one device is compromised

---

## Device Segregation & Hardening

💡 **Isolate wallet management environments to reduce risk and prevent cross-contamination.**

### Air-Gapped Machine Options

**Complete Network Isolation** *(Highest Security)*
- [ ] **Physical Isolation**: Physically remove or disable the network interface
- [ ] **Data Transfer Methods**: Use USB drives (with strict auto-run restrictions) or QR codes to transfer transaction data
- [ ] **USB Precautions**: Exercise additional caution when using USBs for data transfer

**Restricted Network Access** *(Balanced Approach)*
- [ ] **Firewall Rules**: Allow network connectivity but enforce strict firewall rules. Active network monitoring tools can be used to easily accomplish this
- [ ] **Transaction-Only Traffic**: Permit only transaction-related traffic
- [ ] **Usability Balance**: Provides balance between usability and security

**Dedicated Device** *(Minimum Requirement)*
- [ ] **Single Purpose**: Use a dedicated laptop exclusively for crypto transactions
- [ ] **No Other Activities**: Avoid using device for any other purpose
- [ ] **Disciplined Usage**: Maintain strict discipline to avoid contamination from other activities

### Advanced OS-Level Controls

**Security-Hardened Operating Systems** *(For Advanced Users)*
- [ ] **SELinux Implementation**: Consider employing SELinux or similar tools for advanced security configurations
- [ ] **File System Restrictions**: Restrict file system access and inter-process communications

---

## Wallet & Quorum Diversity

💡 **Diversify your wallet infrastructure and carefully select your multi-signature quorum to minimize single points of failure.**

### Wallet Separation Strategy

**Cold vs Hot Wallet Separation**
- [ ] **Separate Storage Types**: Keep long-term storage (cold wallets) distinct from day-to-day transaction signing (hot wallets)
- [ ] **Split Cold Wallets**: Split up cold wallet assets into multiple smaller wallets to prevent total loss in a single transaction in the event of an attack. At least 3 equally funded cold wallets is recommended

### Quorum Selection

**Quantity and Expertise Requirements**
- [ ] **Technical Signers**: Include a high number of competent, well-vetted technical signers that will understand full transaction details and effects in your signing quorum
- [ ] **Optimal Quorum Size**: Implement a transaction approval threshold of 3 to 5 signers from a pool of no more than double that amount as potential signers. More signers is not always better, ensure all signers are highly trusted and secure. Have as high of a signing threshold as you can tolerate

**Diversity Requirements**
- [ ] **Background Diversity**: Choose signers from varying organization roles. Include developers, founders, and other trusted roles
- [ ] **External Parties**: Include external parties such as security auditors or trusted advisors
- [ ] **Distributed Signers**: Ensure signers are distributed across different hardware, networks, and organizations

### Custodianship Considerations

**Managed Custody Services** *(Optional)*
- [ ] **Third-Party Options**: Self-management is not a hard requirement. Consider using a custody service with a company whose business model focuses on securely managing on-chain assets (e.g. Circle, CEXs like Coinbase or Kraken, [MPC Vault](https://mpcvault.com/), etc.)
- [ ] **Mixed Management**: Consider a combination of in-house hot wallet management and external custodian services for cold storage
- [ ] **Risk Diversification**: Use diversification of management methods to reduce overall risk