# Signing schemes
tag: [Engineer/Developer, Security Specialist]

Different signing schemes provide varying levels of security, control, and use cases for managing cryptocurrency assets. Here’s an overview of common signing schemes, their analogies, use cases, and security implications.

## Externally Owned Accounts (EOA)
- **Analogy:** Traditional bank account with a single owner.
- **Control:** Single private key controls the account.  
- **Use:** Basic transactions and smart contract interactions.  
- **Security:** Single point of failure if the single key is compromised.

## Multisignature (Multisig)
- **Analogy:** Joint bank account requiring multiple signatures.
- **Control:**  Multiple private keys are needed to authorize transactions.
- **Use:** Common in organizational settings for shared control.  
- **Security:** High security, reduces risk of single point of failure.

## Smart Contract Wallets (Safes)
- **Analogy:** Digital safe with programmable access controls.
- **Control:** Controlled by smart contracts with defined rules.
- **Use:** Advanced use cases, including DeFi and automated transactions.
- **Security:** Generally seen as High, but depends on the smart contract’s security and configuration.

## Threshold Signatures
- **Analogy:** Similar to a multi-lock safe that requires a subset of keys from authorized staff.
- **Control:** Requires a minimum number of signatures out of a predefined set.
- **Use:** Efficient and private alternative to multisig.
- **Security:** Reduces risk while maintaining group control.

## Social Recovery Wallets
- **Analogy:** Trusted friends helping to recover a lost key.
- **Control:** Designated trusted contacts can help recover the account.
- **Use:** Individual use with recovery options.
- **Security:** High, balances security with ease of recovery from its community-based security model.

## Delegated Signing/Proxy Contracts
- **Analogy:** Authorized bank agent signing on behalf of the account owner.
- **Control:** Transactions are signed by a proxy on behalf of the user.
- **Use:** Delegating transaction signing to trusted services.
- **Security:** Moderate, relies on the security of the proxy.

## Account Abstraction (AA)
- **Analogy:** Like a shape-shifting lock, where the way it opens can change over time.  
- **Control:** User accounts as smart contracts.  
- **Use:** User-friendly wallets, customizable security policies, complex rules and operations for transactions.  
- **Security:** High, but depends on implementation.


## Comparison

| Scheme                   | Analogy                             | Control                     | Use Case                            | Security                  |
|--------------------------|-------------------------------------|-----------------------------|-------------------------------------|---------------------------|
| Externally Owned Accounts| Traditional bank account            | Single private key          | Individual use                      | High risk if compromised  |
| Multisignature           | Joint bank account                  | Multiple private keys       | Team/organization funds management  | High security             |
| Smart Contract Wallets   | Digital safe                        | Smart contracts             | DeFi, automated transactions        | High, depends on contract |
| Threshold Signatures     | Multi-lock safe                     | Subset of keys              | Decentralized organizations         | High security             |
| Social Recovery Wallets  | Trusted friends for recovery        | Guardians                   | Individual use with recovery options| High security             |
| Delegated Signing        | Authorized agent                    | Proxy                       | Delegated transaction signing       | Moderate security         |
| Account Abstraction      | Abstracting account management      | Smart contracts             | User-friendly wallets               | High, depends on implementation |
