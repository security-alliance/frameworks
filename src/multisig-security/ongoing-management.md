---
tags:
  - Engineer/Developer
  - Security Specialist
  - Multisig Security
contributors:
  - role: wrote
    users: [isaac, geoffrey, louis, pablo, dickson]
---

# Ongoing Management

## Regular reviews

Set periodic reminders to keep documentation current:
- **Quarterly**: Review and update protocol documentation if needed
- **After major changes**: Update when operational patterns or financial exposure changes significantly
- **Protocol updates**: Reassess if significant protocol changes affect the multisig's role

## Signer changes

Follow these procedures for adding, removing, or replacing signers:

### Adding/Removing signers
- Maintain or increase total signer count and threshold
- Document rationale for any changes that reduce signers or threshold
- Update all documentation immediately after change

### Replacing signers
Follow steps on section [2.3 Signer Rotation](./general-rules.md#signer-rotation) 

## Documentation updates

After any signer change:
- Record change rationale and date
- Communicate changes to protocol security team
- Update communication channel memberships

### Update Template

```
Multisig Signer Update

Multisig Name: [Name]
Address: [Checksummed address]
Network: [Ethereum/Solana/etc]
Updated by: [Name/Handle]
Update Date: [Date]

Threshold Changes:
Previous: [X of Y signers]
New: [X of Y signers]

Signer Changes:
Additions:
- [Handle/Entity]: [Address] - [Verification signature]

Removals:
- [Handle/Entity]: [Address]

Current Signer Set:
- [Handle/Entity]: [Address]
- [Handle/Entity]: [Address]
- [Handle/Entity]: [Address]

Transaction: [Link to executed transaction]
```