---
tags:
  - Security Specialist
  - Operations & Strategy
---

# Secure Multisig Best Practices

Multisig setup, management, and administration is a crucial part in maintaining secure access over governance address or protocol funds. Some best practices for how to manage multisigs are explained below.

## Multisig signing addresses

- When a new multisig is created, follow the [Safe documentation for verifying Safe creation took place properly](https://help.safe.global/en/articles/40834-verify-safe-creation).
- A multisig should never be a 1-of-1 multisig, because this setup offers virtually no extra benefit compared to using an EOA address. The exact number of signers and the threshold of signers needed to execute a transaction is for each multisig to determine.
- A unique address should be used for each multisig, and this address should only be used for multisig signing. This helps signers to avoid accidental signing on a different multisig.
- The addresses that are signers of a multisig should all be geographically separated and owned by different individuals. A single person should generally not have control over multiple signing addresses on a single multisig.
- Documentation should be shared between signers indicating which person controls which signing address. Some users may find a benefit from using the Safe address book feature to automatically decode known addresses, but users should be aware that relying on the Safe UI is not a foolproof mechanism.
- Generally, it is recommended that all signers of a multisig be hardware wallets or otherwise highly secured. The more secure each individual signer of the multisig is, the more secure the overall multisig is.
- If some or all multisig signers are in the same physical location, they should not have enough signing keys present to reach quorum. Some projects implement similar rules about signers on multisigs not being on the same plane or vehicle to limit tail risk scenarios.

## Multisig secure processes

- Any time that a new signer is added to the multisig, the address that is to be added should be verified via multiple communication channels (i.e. via Signal message and also by voice call) to protect against the case where a communication channel is compromised.
- A secure process should exist that all multisig signers should follow in order to securely verify and sign any multisig transaction. Without a secure process involving tools such as [safe-tx-hashes-util](https://github.com/pcaversaccio/safe-tx-hashes-util), multisig hacks such as those that impacted Radiant or ByBit are possible. Check out the [secure multisig signing process page](./secure-multisig-signing-process.md) for more details.
- For maximum security, a separate signing device (ideally a laptop running the latest version of a secure OS like Tails or Qubes) should be used that is not used for any other activities. This helps to ensure that there is no malware that may interfere with the signing process. If a multipurpose signing device is used (for example, a developer's primary laptop), there is a much higher risk of malicious interference during the signing process. An alternative approach is booting Tails from an external USB, preferably an encrypted USB such as a Kingston IronKey Keypad 200.
- Signers should consider the scenario where one or more team members loses access to their signing address, especially if the key is stolen or leaked. For this reason, it is not recommended to use a n-on-n multisig where all signers must always sign all transactions.
- If a team has a multichain multisig, the signers for the Safes on different chains should generally be the same, and the threshold should also be the same.
- Multisig teams should add monitoring to their multisig to be alerted of any unexpected changes. One tool that offers this feature is [safe-watcher](https://github.com/Gearbox-protocol/safe-watcher) from the Gearbox team.
- If the multisig controls any time-sensitive actions, such as pausing certain actions in extreme scenarios, the team must plan how to handle such events in a timely manner.

## Optional Multisig Feature Configurations

- Variety of signing devices (different hardware wallets, etc.)
- RBAC
- Timelock
- A duress code

## Acknowledgements

Some ideas were borrowed from the [EF's multisig SOP notes](https://notes.ethereum.org/@fredrik/multisig-sop) and [Manifold Finance multisig best practices](https://hackmd.io/@manifoldx/multisig-best-practices)
