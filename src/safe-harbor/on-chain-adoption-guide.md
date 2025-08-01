---
tags:
  - SEAL/Initiative
  - Protocol
  - DAO
  - Whitehat
contributors:
  - role: wrote
    users: [dickson]
---

# On-Chain Adoption Guide

This guide explains how protocols can register their Safe Harbor adoption on-chain. Registering ensures your adoption is **public, verifiable, and enforceable**.

---

## Why On-Chain Adoption Matters

On-chain registration:

- Makes your Safe Harbor adoption **public and transparent**.
- Signals to whitehats that your protocol is officially covered under the agreement.
- Publishes your terms (scope, bounty, contacts) on-chain in a way that’s **traceable and verifiable**, even if updated later.

---

## Three Ways to Adopt On-Chain

Protocols can adopt on-chain using **one of three methods**:

1. **Direct adoption via SEAL’s self-adoption tool**
2. **Through a multisig (e.g., Gnosis Safe)**
3. **Foundry script or custom code**

---

### Important Note

- The address that registers **represents your protocol on-chain**.
- Most protocols use **multisigs** for this step.

---

### 1. SEAL Self-Adoption Website (Fastest Method)

1. Navigate to the [SEAL Self-Adoption Tool](http://TODOBYROBERT) (coming soon).
2. Fill in your scope details (Asset Recovery Address, Assets Under Scope, Bounty Terms, etc.).
3. Choose one of the following:
    - **Direct adoption** using a connected wallet (creates and registers your agreement immediately).
    - **Generate an Agreement** for later registration (useful for multisig or custom workflows).
    - **Export JSON** for use in Foundry scripts.

---

### 2. Multisig Adoption (Gnosis Safe)

If your protocol uses a multisig, you can adopt on-chain securely without writing custom code.

### Steps:

1. **Generate your AgreementV2 contract**:
    - Use the SEAL Self-Adoption Tool to **create an agreement contract payload** for your scope.
    - Deploy the agreement manually via your preferred method (SEAL tool or custom deploy).
2. Open your Gnosis Safe and go to the **Transaction Builder** app.
3. Enter the **Safe Harbor Registry address**:
    - Default for most EVM chains: `0xB4aaAfD63b78971BB0D3561d0577133b965A1704`
    - Full address list: [Registry Addresses](https://github.com/security-alliance/safe-harbor).
4. Select the method: `adoptSafeHarbor(address agreementAddress)` and input your deployed AgreementV2 contract address.
5. Add the transaction and simulate it:
    - You should see a `SafeHarborAdoption` event with your multisig as the `entity`.
6. Collect signatures and execute.

---

### 3. Foundry Script / Custom Code

If you prefer deploying via code or need custom integrations, you can use SEAL’s Foundry script or write your own.

### Using SEAL’s Foundry Script

- Repository: [security-alliance/safe-harbor](https://github.com/security-alliance/safe-harbor)
- Script: `registry-contracts/script/v2/AdoptSafeHarborV2.s.sol`

**Steps:**

1. Generate your **scope JSON** via the SEAL tool or manually prepare it.
2. Paste the JSON into: `registry-contracts/agreementDetailsV2.json`
3. Run the script:
    - Deploys the **AgreementV2** contract via the factory.
    - Registers your adoption in **SafeHarborRegistryV2**.
4. Optional: Modify the script to set a custom `owner` (e.g., your DAO multisig).

### Manual Method

- Deploy your agreement directly: `AgreementFactoryV2.create(AgreementDetailsV2 memory details, address registry, address owner)`
- Register it: `SafeHarborRegistryV2.adoptSafeHarbor(address agreementAddress)`
- Use the deployed [Registry & Factory Addresses](https://github.com/security-alliance/safe-harbor/blob/main/README.md)
    
    

---

## Key Contracts

- **Agreement Factory:** Deploys AgreementV2
- **Safe Harbor Registry:** Registers adoption
- **Deployed Addresses:** [View Registry & Factory Addresses](https://github.com/security-alliance/safe-harbor/blob/main/README.md)

---

If you ever need help or have any questions, don’t hesitate to reach out!

📬 Contact us at: [safe-harbor@securityalliance.org](mailto:safe-harbor@securityalliance.org)