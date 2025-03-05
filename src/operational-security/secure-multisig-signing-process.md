---
tags:
  - Security Specialist
  - Operations & Strategy
---

# Secure Multisig Signing Process

Multisig security has always been important, but it has received extra scrutiny since the ByBit hack in late February 2025 that involve a compromise of the commonly-used Safe UI. Every multisig signer should have a secure and thorough process to make sure that the transaction they are signing is, in fact, the action that they expect. The following steps reduce dependencies on the Safe UI and provide greater assurance that the multisig signer is signing a valid transaction and not a malicious one.

## Step 1: Connecting a hardware wallet

Hardware wallets offer better security than most software wallets, so it's recommended that all multisig signer addresses are from hardware wallets. Multisig signing should ideally involve a direct connection of your hardware wallet with your browser. Avoid Metamask, Rabby, Frame, or other browser extension wallets as a middle man, as this increases the attack surface. However, this feature appears to have been removed recently after the ByBit hack so that a browser extension is required in this process.

## (Optional) Step 2: Preparing the ABI

The transaction proposer should create the transaction using the Safe frontend.
If the transaction is sent to a non-verified contract, the Safe UI requires the contract ABI.
If you have the correct code repository stored locally, one way to generate the contract ABI is using the command:

```bash
forge inspect src/Factory/VaultFactory.sol:VaultFactory abi > ABI.txt
```

## Step 3: Transaction proposer prepares the first signature

Before the transaction proposer gives the first signature for the transaction, they should verify the signature using the [Cyfrin safe-tx-hashes tool](https://github.com/Cyfrin/safe-tx-hashes), which has a feature for verifying the first tx that [pcaversaccio's safe-tx-hashes-util tool](https://github.com/pcaversaccio/safe-tx-hashes-util) lacks. The feature generates a signature for transactions that have not been initialized, which is the case for this first transaction. More information exists in [the safe-tx-hashes documentation](https://github.com/Cyfrin/safe-tx-hashes?tab=readme-ov-file#not-initialized-transactions). Additional information about using the Cyfrin tool is found in [this Cyfrin Updraft tutorial video](https://updraft.cyfrin.io/courses/wallets/wallets/verify-multi-sig-signatures?lesson_format=video). An example command for using the tool to verify the first signature is with a command like:

```bash
./safe_hashes.sh --network base --address 0x86D46EcD553d25da0E3b96A9a1B442ac72fa9e9F --nonce 7 --untrusted
```

Note: Safe has disabled their API in the period shortly after the ByBit hack. So it's necessary to use the more paranoid "offline" mode that avoids any dependency on the Gnosis Safe API. First, check whether the operation value is 0 or 1 (usually operation is 1 for batched transactions and 0 for a single non-batched tx, but more info is found [in this closed issue of the safe-tx-hashes tool](https://github.com/Cyfrin/safe-tx-hashes/issues/24#issuecomment-2700377632)). After reviewing the [project docs](https://github.com/Cyfrin/safe-tx-hashes?tab=readme-ov-file#safe-transaction-hashes), run the safe_hashes tool in offline mode with a command like:

```bash
./safe_hashes.sh --offline --data 0x095ea7b3000000000000000000000000fe2f653f6579de62aaf8b186e618887d03fa31260000000000000000000000000000000000000000000000000000000000000001 --address 0x86D46EcD553d25da0E3b96A9a1B442ac72fa9e9F --network sepolia --nonce 6 --to 0x40A2aCCbd92BCA938b02010E17A5b8929b49130D --operation 1
```

## Step 4: Simulate the transaction

After the transaction is proposed and signed by the proposer, it is possible for the proposer to simulate the transaction on Tenderly (although this feature also may have been temporarily removed after the ByBit hack?). The simulation results are less useful if the contracts are not verified, but the simulation will at least show whether the transaction reverts or not.

## Step 5: Multisig signers signing an existing queued transaction

Before any other multisig transaction signers (after the tx proposer) sign the transaction, they should:
- Use the [Cyfrin safe-tx-hashes tool](https://github.com/Cyfrin/safe-tx-hashes) to validate the signature on their Ledger instead of signing blindly.
The command looks like `./safe_hashes.sh --network base --address 0x86D46EcD553d25da0E3b96A9a1B442ac72fa9e9F --nonce 234`.
- Signers should also use the Tenderly simulation to verify that the transaction does not revert and returns the expected end state.
- Signers should also double check that the address that the "To" address in the transaction is a valid Safe address listed in the [Safe docs](https://docs.safe.global/advanced/smart-account-supported-networks?version=v1.4.1) or in the [Safe deployments repo](https://github.com/safe-global/safe-deployments) and additionally confirm that the contract was not very recently deployed.
- If ANY transaction error is identified in the multisig transaction, the transaction batch should NOT be signed, and instead new multisig transactions should be created individually (without batching).

Note: These steps are similar to what is found in [this hackernoon article by Alberto Cuesta Cañada](https://hackernoon.com/how-to-review-a-governance-action) about secure governance action processes.
Optional: It's recommended to implement a manual review of raw transaction payloads using tools like Etherscan’s input data decoder or [this calldata decoder](https://calldata.swiss-knife.xyz/decoder). You will need to use this tool recursively for batched transactions. Simulating with an alternative to Tenderly such as [temper](https://github.com/EnsoBuild/temper) is another option.

## (Optional) Step 6: Using an alternative Safe UI

Consider using a self-hosted Gnosis Safe frontend for this entire process to completely avoid the public Gnosis Safe UI. Examples include [safe-infrastructure](https://github.com/safe-global/safe-infrastructure), [eternalsafe](https://github.com/eternalsafe/wallet/tree/v1), [safer](https://github.com/morpho-labs/safer), [safe-reserve](https://github.com/Gearbox-protocol/safe-reserve), and [gnosis-hosted](https://github.com/hoprnet/gnosis-hosted).