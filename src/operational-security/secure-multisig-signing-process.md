---
tags:
  - Security Specialist
  - Operations & Strategy
---

# Secure Multisig Signing Process

Multisig security has always been important, but it has received extra scrutiny since the ByBit hack in late February 2025 that involve a compromise of the commonly-used Safe UI. Every multisig signer should have a secure and thorough process to make sure that the transaction they are signing is, in fact, the action that they expect. The following steps reduce dependencies on the Safe UI and provide greater assurance that the multisig signer is signing a valid transaction and not a malicious one.

## Step 1: Connecting a hardware wallet

Hardware wallets offer better security than most software wallets, so it's recommended that all multisig signer addresses are from hardware wallets. If you are using a browser extension like Metamask, Rabby, or Frame as an intermediary, you should consider the data shown in the browser extension as similar to the data shown in the Safe UI: not 100% trustworthy if your device has been hacked, but another data point that can be worth examining to make sure all the data matches your expectations to confirm there are no anomalies.

## (Optional) Step 2: Preparing the ABI

The transaction proposer should create the transaction using the Safe frontend.
If the transaction is sent to a non-verified contract, the Safe UI requires the contract ABI.
If you have the correct code repository stored locally, one way to generate the contract ABI is using the command:

```bash
forge inspect src/Factory/VaultFactory.sol:VaultFactory abi > ABI.txt
```

## Step 3: Transaction proposer prepares the first signature

Before the transaction proposer gives the first signature for the transaction, they should verify the signature using [pcaversaccio's safe-tx-hashes-util tool](https://github.com/pcaversaccio/safe-tx-hashes-util). There are two ways to do this:

- Option 1: Use the [interactive mode](https://github.com/pcaversaccio/safe-tx-hashes-util?tab=readme-ov-file#interactive-mode) feature to generates a signature for transactions that have not been initialized. This mode prompts the user for each input as needed. An example command for using the tool to verify the first signature is with a command like:

```bash
./safe_hashes.sh --network base --address 0x86D46EcD553d25da0E3b96A9a1B442ac72fa9e9F --nonce 7 --interactive
```

- Option 2: Modify the script by editing the endpoint variable (which builds the URL that calls the Safe API) to include the "trusted=false" as suggested by [this footnote](https://github.com/pcaversaccio/safe-tx-hashes-util?tab=readme-ov-file#user-content-fn-1-091bb929bedb25d28c91e9a9c9456df5). If there are multiple transactions with the same nonce, the tool will provide a warning and ask you to choose a specific transaction. An example command for using the tool to verify the first signature (after custom modifying the bash script) is with a command like:

```bash
./safe_hashes.sh --network base --address 0x86D46EcD553d25da0E3b96A9a1B442ac72fa9e9F --nonce 7
```

## Step 4: Simulate the transaction

After the transaction is proposed and signed by the proposer, it is possible for the proposer to simulate the transaction on Tenderly (although this feature also may have been temporarily removed after the ByBit hack?). The simulation results are less useful if the contracts are not verified, but the simulation will at least show whether the transaction reverts or not.

## Step 5: Multisig signers signing an existing queued transaction

Before any other multisig transaction signers (after the tx proposer) sign the transaction, they should:

- Use [pcaversaccio's safe-tx-hashes-util tool](https://github.com/pcaversaccio/safe-tx-hashes-util) to validate the signature on their hardware wallet instead of signing blindly.
The command looks like `./safe_hashes.sh --network base --address 0x86D46EcD553d25da0E3b96A9a1B442ac72fa9e9F --nonce 234`.
- Signers should also use the Tenderly simulation built-in to the Safe UI to verify that the transaction does not revert and returns the expected end state.
- Signers should also double check that the "To" address in the transaction is a valid Safe address listed in the [Safe docs](https://docs.safe.global/advanced/smart-account-supported-networks?version=v1.4.1) or in the [Safe deployments repo](https://github.com/safe-global/safe-deployments) and additionally confirm that the contract was not very recently deployed. The safe-tx-hashes-util tool does a basic check for this, but a more careful manual check is recommended.
- If ANY transaction error is identified in the multisig transaction, the transaction batch should NOT be signed, and instead new multisig transactions should be created individually (without batching).

Note: although it is not as secure as using the CLI tool, less technical users can use the OpenZeppelin [Safe Utils website](https://safeutils.openzeppelin.com/) to receive similar results (although less trustworthy if the browser or UI is hacked)
Note: These steps are similar to what is found in [this hackernoon article by Alberto Cuesta Cañada](https://hackernoon.com/how-to-review-a-governance-action) about secure governance action processes.
Optional: It's recommended to implement a manual review of raw transaction payloads using tools like Etherscan’s input data decoder or [this calldata decoder](https://calldata.swiss-knife.xyz/decoder). You will need to use this tool recursively for batched transactions. Simulating with an alternative to Tenderly such as [temper](https://github.com/EnsoBuild/temper) is another option.

## (Optional) Step 6: Using an alternative Safe UI

Consider using a self-hosted Gnosis Safe frontend for this entire process to completely avoid the public Gnosis Safe UI. Examples include [safe-infrastructure](https://github.com/safe-global/safe-infrastructure), [eternalsafe](https://github.com/eternalsafe/wallet/tree/v1), [safer](https://github.com/morpho-labs/safer), [safe-reserve](https://github.com/Gearbox-protocol/safe-reserve), and [gnosis-hosted](https://github.com/hoprnet/gnosis-hosted).
