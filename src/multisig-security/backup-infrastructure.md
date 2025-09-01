# Backup Infrastructure

## UI alternatives

### EVM Networks

**Eternal Safe - Decentralized fork of Safe{Wallet}**
- GitHub: https://github.com/eternalsafe/wallet
- Hosted (IPFS): https://eternalsafe.eth.limo (requires bring your own RPC)
- Local: Can be downloaded and run locally

### Solana

**Squads Public Client - Open source Squads V4 interface**
- GitHub: https://github.com/Squads-Protocol/public-v4-client
- Features: Verifiable build, self-hostable with Docker, IPFS distribution
- Local: Can be built and run locally

## RPC backup options

### Basic guidance:
- Multiple providers: Set up accounts with 2-3 different RPC services
  - Ex. Alchemy, Infura, Chainstack, Quicknode, Tenderly
- Avoid correlation: Choose providers that don't share infrastructure, if that information is available
- Private RPCs preferred: Public RPC URLs are typically not sufficient for reliable operation

### Administrator responsibilities
Ensure signer preparedness:
- Provide access to offline UI tools listed above
- Verify signers have practiced using backup interfaces
- Test backup RPCs during non-emergency periods
- Document procedures for switching to backup infrastructure

**Reference:** Detailed usage instructions for signers are provided in [Section 4.6](signing-when-ui-is-down.md) (Signing When UI is Down).

## Block Explorer backup options

### EVM Networks
Etherscan provides the default block explorer for nearly all EVM chains. In the event that Etherscan is compromised or goes down, it is important to have backup options that can be used for monitoring and investigating transactions.

**Blockscout - Open source Etherscan alternative**
- https://www.blockscout.com/
- Available for all EVM networks
- Can also be [self-hosted](https://github.com/blockscout/blockscout), although it requires significant time to run full node and index

### Solana Networks
Both explorer.solana.com and Solscan are reliable options for Solana transaction exploration and decoding.

**explorer.solana.com** - https://explorer.solana.com/
- Can be [self-hosted](https://github.com/solana-foundation/explorer) using open source code

**Solscan** - https://solscan.io/