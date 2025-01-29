# Key Terms

## Active Exploit

Active Exploits (or, in the legal contract, an “_Urgent Blackhat Exploit_”), are defined in the Safe Harbor Agreement (_2.3 Certain Defined Terms, Urgent Blackhat Exploits_). Summarizing, an exploit is considered to be active when:

1. The exploit has already been initiated against a Protocol and remain an active threat; or
2. The exploit that is highly likely to be imminently initiated against a Protocol.

In general, this means an _active exploit_ is one that is already in progress, where perusing regular reporting methods such as a bug bounty wouldn’t be fast enough to protect protocol funds.

## Safe Harbor Registry

The Safe Harbor registry is an on-chain smart contract that helps protocols adopt Safe Harbor. The smart contract allows protocols to register their adoption details and legally adopt Safe Harbor, publicly displaying the protocol's [Agreement Details](#agreement-details)

The contract’s source code and deployment details are stored in the [security-alliance/safe-harbor](https://github.com/security-alliance/safe-harbor) GitHub repository.

## Agreement Details

The Agreement Details are the set of options protocols may configure when adopting Safe Harbor. These options differ from protocol-to-protocol and should be reviewed by any prospective whitehats.

- **On-Chain Assets**: List all smart contract and wallet addresses to protect.
- **[Asset Recovery Address](#asset-recovery-address)**: Provide an address for Whitehats to return recovered funds.
- **Bounty Terms**: Set bounty percentage and cap for successful Whitehats (recommended 10% and $1M USD, respectively).
- **KYC Requirements**: Define Know Your Customer (KYC) requirements for Whitehats.
- **Emergency Contact Information**: Provide contact details for use during an exploit.

## Asset Recovery Address

An Asset Recovery Address is an on-chain address that is created by a protocol prior to their Safe Harbor adoption. This address is used by Whitehats to return funds to a protocol after successfully intervening during an active exploit under Safe Harbor. Protocols must create this address on every chain for which they have assets under scope. The address should be highly secure and able to handle large sums of assets.

## Prospective & Retrospective Whitehats

Safe Harbor may also apply to generalized frontrunner / arbitrage bots, though the specifics may differ. In general, regular whitehats are considered prospective whitehats and are required to give notice to the protocol and return all funds immediately after the exploit, while bots are considered retrospective whitehats and are required to give notice and return all funds as soon as they become aware of the exploit. We recommend reviewing the full agreement to understand all differences between prospective and retrospective whitehats.
