---
tags:
  - Security Specialist
  - Operations & Strategy
contributors:
  - role: wrote
    users: [engn33r, patrickalphac]
  - role: reviewed
    users: [patrickalphac, mattaereal]
---

# Secure Multisig Signing Process

Multisig security has always been important, but it has received extra scrutiny since the ByBit hack in late February 2025 that involve a compromise of the commonly-used Safe UI. Every multisig signer should have a secure and thorough process to make sure that the transaction they are signing is, in fact, the action that they expect. The following steps reduce dependencies on the Safe UI and provide greater assurance that the multisig signer is signing a valid transaction and not a malicious one.

The process should follow these steps:

1. Connect a hardware wallet
2. (Optional) Prepare the ABI
3. Transaction proposer prepares and verifies the first signature
   1. Using a CLI tool
   2. Using a web tool
4. Simulate the transaction
5. Multisig signers signing an existing queued transaction

You can practice signing transactions using the [wise-signer](https://wise-signer.cyfrin.io/) tool. 

## Step 1: Connecting a hardware wallet

Hardware wallets offer better security than most software wallets, so it's recommended that all multisig signer addresses are from hardware wallets.

However, as of today, hardware wallets have very poor signature intent verification support, meaning it's very difficult to understand what you're signing on your hardware wallet. At this time, for this reason, it is recommended that hardware wallet signers connect to their safe wallets through a browser extension wallet, or a CLI tool so that they may verify transactions before signing them.

### Examples of setup

*`->` means "connected to"*

- Safe{Wallet} UI -> MetaMask (Hot Wallet) -> Trezor (Cold Wallet)
- Safe CLI -> Trezor (Cold Wallet)

## (Optional) Step 2: Preparing the ABI

The transaction proposer should create the transaction using the Safe frontend, or CLI.
If the transaction is sent to a non-verified contract, the Safe UI requires the contract ABI.
If you have the correct code repository stored locally, one way to generate the contract ABI is using the command:

```bash
forge inspect src/Factory/VaultFactory.sol:VaultFactory abi > ABI.txt
```

## Step 3: Transaction proposer prepares and verifies the first signature

All signers should verify their signatures before signing. You can [learn and get certified](https://wise-signer.cyfrin.io/) on how to verify signatures and transactions using [Cyfrin Updraft]((https://updraft.cyfrin.io/courses/advanced-web3-wallet-security/signer-advanced/qualified-signer-advanced-intro)) or other tools.

### CLI tool

Before the transaction proposer gives the first signature for the transaction, they should verify the signature using [pcaversaccio's safe-tx-hashes-util tool](https://github.com/pcaversaccio/safe-tx-hashes-util) or [Cyfrin's safe-hash-rs](https://github.com/Cyfrin/safe-hash-rs).

If you use `safe-tx-hashes-util`, the command looks like:

- Option 1: Use the [interactive mode](https://github.com/pcaversaccio/safe-tx-hashes-util?tab=readme-ov-file#interactive-mode) feature to generates a signature for transactions that have not been initialized. This mode prompts the user for each input as needed. An example command for using the tool to verify the first signature is with a command like:

```bash
./safe_hashes.sh --network base --address 0x86D46EcD553d25da0E3b96A9a1B442ac72fa9e9F --nonce 7 --interactive
```

- Option 2: Modify the script by editing the endpoint variable (which builds the URL that calls the Safe API) to include the "trusted=false" as suggested by [this footnote](https://github.com/pcaversaccio/safe-tx-hashes-util?tab=readme-ov-file#user-content-fn-1-091bb929bedb25d28c91e9a9c9456df5). If there are multiple transactions with the same nonce, the tool will provide a warning and ask you to choose a specific transaction. An example command for using the tool to verify the first signature (after custom modifying the bash script) is with a command like:

```bash
./safe_hashes.sh --network base --address 0x86D46EcD553d25da0E3b96A9a1B442ac72fa9e9F --nonce 7
```

One you get the output of the transaction, you should compare the calldata to what you expect. For example, if you want to call the `withdraw` function on a contract, but the output is:

```
0x6a76120200000000000000000000000078e30497a3c7527d953c6b1e3541b021a98ac43c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000084617ba0370000000000000000000000005a7d6b2f92c77fad6ccabd7ee0624e64907eaf3e000000000000000000000000000000000000000000000002b5e3af16b18800000000000000000000000000009467919138e36f0252886519f34a0f8016ddb3a30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041000000000000000000000000F8Cade19b26a2B970F2dEF5eA9ECcF1bda3d118600000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000
```

You could put this into a calldata decoder like [Cyfrin's abi-decoder](https://tools.cyfrin.io/abi-encoding?data=0x6a76120200000000000000000000000078e30497a3c7527d953c6b1e3541b021a98ac43c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000084617ba0370000000000000000000000005a7d6b2f92c77fad6ccabd7ee0624e64907eaf3e000000000000000000000000000000000000000000000002b5e3af16b18800000000000000000000000000009467919138e36f0252886519f34a0f8016ddb3a30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041000000000000000000000000F8Cade19b26a2B970F2dEF5eA9ECcF1bda3d118600000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000), [swiss-knife](https://calldata.swiss-knife.xyz/decoder), or even [foundry's cast](https://github.com/foundry-rs/foundry) to decode the calldata.

For this specific calldata, the decoded calldata would look like (decoded with `cast`):

```json
{
  "function": "execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)",
  "parameters": {
    "param0": "0x78e30497a3c7527d953c6B1E3541b021A98Ac43c",
    "param1": "0",
    "param2": {
      "_isNestedCall": true,
      "function": "supply(address,uint256,address,uint16)",
      "selector": "0x617ba037",
      "parameters": {
        "param0": "0x5A7d6b2F92C77FAD6CCaBd7EE0624E64907Eaf3E",
        "param1": "50000000000000000000",
        "param2": "0x9467919138E36f0252886519f34a0f8016dDb3a3",
        "param3": "0"
      },
      "raw": "0x617ba0370000000000000000000000005a7d6b2f92c77fad6ccabd7ee0624e64907eaf3e000000000000000000000000000000000000000000000002b5e3af16b18800000000000000000000000000009467919138e36f0252886519f34a0f8016ddb3a30000000000000000000000000000000000000000000000000000000000000000"
    },
    "param3": "0",
    "param4": "0",
    "param5": "0",
    "param6": "0",
    "param7": "0x0000000000000000000000000000000000000000",
    "param8": "0x0000000000000000000000000000000000000000",
    "param9": "0x000000000000000000000000f8cade19b26a2b970f2def5ea9eccf1bda3d1186000000000000000000000000000000000000000000000000000000000000000001"
  }
}
```

And you can see, we are calling the `supply` function, which means this transaction is not what we are expecting, and we should not sign it. 

### Web tool

Alternatively, the transaction proposer can use a web tool like [Cyfrin's Safe Hashes](https://tools.cyfrin.io/safe-hash) or [OpenZeppelin's Safe Utils](https://safeutils.openzeppelin.com/) to verify the first signature. The web tool allows you to input the Safe address and nonce, and it will generate the transaction hash for verification.

*Important: Using a web tool increases the surface area for attack, and technical users should become competent at verifying signatures and transactions using other tools as well.*

To use the Cyfrin Safe Hashes web tool, you'd just enter in all the information about the transaction, and it will generate the hash you should use to verify the signature.

## Step 4: Simulate the transaction

After the transaction is proposed and signed by the proposer, it is possible for the proposer to simulate the transaction on Tenderly (although this feature also may have been temporarily removed after the ByBit hack?). The simulation results are less useful if the contracts are not verified, but the simulation will at least show whether the transaction reverts or not.

*Note: Some types of transactions may fail during simulation, but execute successfully.*

## Step 5: Multisig signers signing an existing queued transaction

Before any other multisig transaction signers (after the tx proposer) sign the transaction, they should:

- Use a CLI or Web tool (mentioned above) to validate the signature on their hardware wallet instead of signing blindly.
- Signers should also use the Tenderly simulation built-in to the Safe UI to verify that the transaction does not revert and returns the expected end state.
- Signers should also double check that the "To" address in the transaction is a valid Safe address listed in the [Safe docs](https://docs.safe.global/advanced/smart-account-supported-networks?version=v1.4.1) or in the [Safe deployments repo](https://github.com/safe-global/safe-deployments) and additionally confirm that the contract was not very recently deployed. The safe-tx-hashes-util tool does a basic check for this, but a more careful manual check is recommended.
- If ANY transaction error is identified in the multisig transaction, the transaction batch should NOT be signed, and instead new multisig transactions should be created individually (without batching).

## (Optional) Step 6: Using an alternative Safe UI

Consider using a self-hosted Gnosis Safe frontend for this entire process to completely avoid the public Gnosis Safe UI. Examples include [safe-infrastructure](https://github.com/safe-global/safe-infrastructure), [eternalsafe](https://github.com/eternalsafe/wallet/tree/v1), [safer](https://github.com/morpho-labs/safer), [safe-reserve](https://github.com/Gearbox-protocol/safe-reserve), and [gnosis-hosted](https://github.com/hoprnet/gnosis-hosted).
