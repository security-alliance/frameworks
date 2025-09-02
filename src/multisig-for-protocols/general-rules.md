---
tags:
  - Engineer/Developer
  - Security Specialist
  - Multisig Security
contributors:
  - role: wrote
    users: [isaac, geoffrey, louis, pablo]
  - role: reviewed
    users: [dickson]
---

# General Rules

## Thresholds & Configuration

- Minimum of 3 signers
- 50% signing threshold
- 7+ signers for multisigs holding 1M+ in assets (USD equivalent)
- All signers must use hardware wallets
- Multisigs managing assets on behalf of a DAO should set unlimited allowance with primary DAO agent
- Signers on multisigs with critical protocol configuration or security roles are discouraged from using their addresses for other purposes. They should create a brand new wallet for that purpose instead.
- No multisigs should use modules/guards except those mentioned in this guide unless clear justification and security review is provided
- Threshold exceptions can be made for multisigs that are used in frequent operations but are highly constrained by smart contracts. For example, rate setting operations with tight bounds and a backup recovery mechanism to replace the multisig.

### Threshold Selection

Avoid `N-of-N` schemes, as the loss of a single key would result in a permanent loss of access to all funds.

### Strategic Signer Distribution

The security of a multisig depends entirely on the operational security (OpSec) of its individual signer keys. Storing multiple signer keys on the same device or in the same physical location negates the security benefits. Effective distribution strategies include:
- Using different hardware wallet models and manufacturers.
- Maintaining geographical separation for devices holding signer keys.
- Assigning signer keys to different trusted individuals within an organization.
- Using diverse client software to interact with the multisig to mitigate single-point-of-failure risks from a software vulnerability.

## Communication & Documentation

- In the event of loss of access to keys or potential compromise of keys or communication channels, the signer must immediately notify the other multisig participants and emailing your security contact - [4.8 Incident Reporting](./incident-reporting.md)
- Signers should use dedicated communication channels for multisig operations and maintain backup ways of reaching other signers
- All multisigs should be documented in the protocol documenting its purpose, general operating rules, multisig wallet address, and list of signer addresses
- Signers should verify their addresses by signing a message stating their affiliation and the multisig they intend to join (entity affiliation is ok)

### Out-of-Band Verification for Admin Changes

Any critical administrative action, such as adding or replacing a signer, must be verified through multiple, independent communication channels (e.g., a video call and a signed message) to prevent social engineering attacks.

## Signer rotation

- Signers can be rotated, but detailed documentation should be maintained
- Any changes to signer composition should be documented in the protocol documentation
- Any signer change should not reduce the number of signers or decrease the threshold unless clear justification is given and documented

### Updating signer addresses

**If the original key is accessible:**
- The signer proves ownership of a new address by signing a message with their existing address.
- The signer must follow the steps in [3.3 Signer Verification process](./registration-and-documentation.md#signer-verification-process)

**If the original key is lost:**
The signer must verify their identity to the other signers through alternative methods such as:
- Authentication via a verified social media account.
- A video call with other signers for confirmation.
- Other sufficient methods.

## Training & Drills

- All signers should complete training as outlined in this guide - [Training Checklist](./training-checklist.md)
- For multisigs that perform emergency operations like pausing, teams should have processes to regularly conduct drills to ensure operational readiness and signer availability