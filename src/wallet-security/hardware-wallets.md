---
tags:
  - Engineer/Developer
  - Security Specialist
  - Operations & Strategy
  - Finance
contributors:
  - role: wrote
    users: [mattaereal]
  - role: reviewed
    users: [patrickalphac]
---

# Hardware Wallets

Hardware wallets are physical devices designed to securely store private keys offline. They are one of the more secure options for managing cryptocurrency.

## Why use a hardware wallet?

The main goal of a hardware wallet is:
1. To keep the private key/secret phrase never exposed, while allowing you to sign transactions
2. To stay offline to be less vulnerable to online attacks
3. Encrypt the key, so that even if an attack gains access to the device, they cannot extract the private key

This is much safer than a software wallet, which are more vulnerable to online attacks. It can also be considered safer than a paper wallet, as an attacker could find your paper wallet and steal your funds, while a hardware wallet is more difficult to physically steal without your knowledge.

## How to use hardware wallets

A hardware wallet is secure because:
- **Offline Storage**: Private keys are stored on the device and never exposed to the internet.
- **Secure Element**: Many hardware wallets use a secure element to protect against physical attacks.
- **User Verification**: Transactions must be verified on the device, adding an extra layer of security.

This means, that the attack surface is reduced. To make sure you are using a hardware wallet securely, you should:
- **Buy from Reputable Sources**: Purchase hardware wallets directly from the manufacturer or authorized resellers to avoid tampering.
- **Keep Firmware Updated**: Regularly update the device firmware to patch any security vulnerabilities.
- **Use Strong PINs**: Set a strong PIN/password/biometrics to protect access.
- **Backup Recovery Phrase**: Write down the recovery phrase and store it in a secure location. This is crucial for recovering access if the device is lost or damaged.
- **Verify Firmware**: Always verify the firmware before installing updates to ensure it is authentic and not compromised.

## Popular Hardware Wallets

### Ledger Stacks

- **Description**: A hardware wallet that supports multiple cryptocurrencies and features.
- **Features**: Secure Element chip, mobile compatibility (certain versions), large storage capacity for apps.
- **Incidents**: None reported for the device itself, but Ledger experienced a data breach affecting customer information.
- **Note**: Ledger Nano X has bluetooth, so depending on your security requirements you may want to look at their non-bluetooth wallet options.

### Trezor Safe 5

- **Description**: A touch-screen hardware wallet supporting a wide range of cryptocurrencies.
- **Features**: Open-source firmware, password manager, Shamir backup.
- **Incidents**: Phishing attacks targeting Trezor users through fake websites.

### BitBox02

- **Description**: A compact hardware wallet with a focus on security and privacy.
- **Features**: Dual-chip architecture, native support for Bitcoin and Ethereum, microSD card backup.
- **Incidents**: None reported.

### Lattice1

- **Description**: A hardware wallet designed for security and ease of use, with built-in decoded calldata.
- **Features**: Secure Element, wifi support, decoded calldata touch screen display, safe card backups.
- **Incidents**: None reported.

# References

For more in-depth information on hardware wallets, you can refer to [walletbeat](https://github.com/walletbeat/walletbeat).