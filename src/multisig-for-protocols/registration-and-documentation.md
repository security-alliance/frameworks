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

# Registration & Documentation

Proper documentation is essential for multisig security and accountability. This guide covers the registration process and required documentation.

## Protocol Documentation

Fill out the registration template and send as a PDF to protocol security team. They will create a dedicated section in protocol docs for your multisig with the registration information.

## Registration Template

```
Multisig Name: [Name]
Address: [Checksummed address]
Network: [Ethereum/Solana/etc]
Threshold: [X of Y signers]
Classification: [Impact Level] / [Operational Type]
Purpose: [Brief description]

Signers:
- [Handle/Entity]: [Address] - [Verification signature]
- [Handle/Entity]: [Address] - [Verification signature]

Controlled contracts: [List contract addresses and purposes]
On-chain roles: [Describe roles like ownable, Access Control roles (PAUSER_ROLE)]

Impact assessment:
- Financial exposure: $[amount] ([reasoning])
- Protocol impact: [description]
- Classification: [Low/Medium/High/Critical]

Operational classification: [Routine/Time-Sensitive/Emergency]

Constraining factors:
- [Smart contract limits, governance controls, etc.]

Attestation: This multisig [meets/deviates from] security standards.
[If deviation: Justification and compensating controls]

Last updated: [Date]
Updated by: [Name/Handle]
```

## Signer Verification Process

Each signer must provide a verification signature linking their identity to their address:

1. **Sign message**: "[handle/entity] intends to join [multisig address] with signer [address]"
2. **Share signature** with multisig team
3. **Update registration** with verified information

Detailed steps for collecting this information are provided below in [4.3 Joining a Multisig](./joining-a-multisig.md).

**Note**: Entity affiliations are acceptable - the goal is accountability, not doxxing.

## Update Template

Use this template when making changes to signer composition:

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

## Documentation Requirements

### Initial Registration
- Complete registration template with all required fields
- Verification signatures from all signers
- Classification assessment from [Planning & Classification](./planning-and-classification.md)
- Submit to protocol security team

### Ongoing Maintenance
- Update documentation when signers change
- Record rationale for any threshold changes
- Update classification if operational patterns change
- Maintain current contact information

## Related Documents

- [Planning & Classification](./planning-and-classification.md) - How to classify your multisig
- [Joining a Multisig](./joining-a-multisig.md) - Signer verification process
- [Ongoing Management](./ongoing-management.md) - Maintaining documentation over time
