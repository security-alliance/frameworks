---
tags:
  - Engineer/Developer
  - Security Specialist
  - Devops
contributors:
  - role: "wrote"
    users: [pinalikefruit]
---

## Developer Key Management

A single mistake in private key management within a development workflow can result in the immediate and irreversible loss of all associated assets. This section outlines secure practices for handling keys in development environments.

### Plain-Text Keys and Environment Variables

A private key controlling real assets must **never** be stored in plain text. This includes being hard-coded in source files, saved in configuration files, or passed directly via the command line, as it eliminates all layers of security.

A common but high-risk practice is storing private keys in `.env` files.

> ⚠️ **`.env` files are for configuration, not for secrets.** They are not a secure vault.

While `.env` files are useful for managing non-sensitive configuration data (like API URLs) and are often excluded from version control via `.gitignore`, they are fundamentally insecure for storing private keys. They are vulnerable to:

- **Local System Compromise**: If your machine is infected with malware, these plain-text files can be easily found and exfiltrated.
- **Accidental Exposure**: They can be mistakenly committed to version control, included in logs, or exposed through misconfigured server environments.

For local testing with **non-funded wallets**, using a `.env` file might seem convenient. However, this should be treated as a temporary, low-security method only. It is critical to not let this practice carry over into production or any environment handling real value. Instead, developers should adopt secure secret management solutions as a default practice, even during development.

Passing a key directly as a command-line argument is also highly insecure, as it is saved in your shell's history file (e.g., `.bash_history`). If this happens by accident, clear your history with `history -c`.

### Good Practice: Local Encrypted Keystores

The standard secure practice for local development is to use an **encrypted keystore**. This is a file that contains your private key, but the file itself is encrypted with a strong password. The private key is only ever decrypted in memory by the wallet or tool when you provide the correct password.

- **What it protects against:** Accidental exposure via version control (e.g., a `git push`), and theft of the static keystore file from a non-running machine.
- **What it does NOT protect against:** A compromised host machine. If an attacker has malware on your computer, they can use a keylogger to capture your decryption password or access the key from memory when you use it.

#### Foundry Implementation

Development frameworks like Foundry have built-in support for this secure workflow.

1.  **Import a Key into an Encrypted Keystore:**
    Use the interactive import command. You will be prompted for your private key and a password to encrypt it with. This is a one-time, offline setup.
    ```bash
    cast wallet import <your_account_name> --interactive
    ```

2.  **Use the Encrypted Account:**
    When deploying or sending transactions, reference the account by its name. You will be prompted for your password to unlock the key in memory for the transaction.
    ```bash
    forge script <PATH_TO_SCRIPT> --rpc-url <RPC_URL> --broadcast --account <your_account_name>
    ```
    You can list your saved accounts with `cast wallet list`. This workflow ensures your private key is never written to your shell history or stored in plain text.

### Cloud-Based Secret Management

For team-based development and production environments, a more robust solution is to use a dedicated cloud secret management service.

- **How it works**: The private key is stored within the secure cloud service. Applications and developers are granted access via IAM roles and policies, authenticating to the service to request a signature. The raw private key is never exposed on the developer's machine or the application server.

### Hardware Security Modules (HSMs)

The gold standard for securing high-value private keys is a **Hardware Security Module (HSM)**.

- **What it is**: An HSM is a dedicated, tamper-resistant physical device designed solely for cryptographic operations.
- **The Core Principle**: The private key is generated inside the HSM and **can never leave it**. To sign a transaction, you send the transaction data to the HSM, which performs the signing operation internally and returns the signature.
