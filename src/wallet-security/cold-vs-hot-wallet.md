---
tags:
  - Engineer/Developer
  - Security Specialist
contributors:
  - role: wrote
    users: [fredriksvantes, mattaereal]
  - role: reviewed
    users: [patrickalphac]
---

# Cold vs. Hot Wallets


## Cold Wallets

### What Are They?
Cold wallets are mostly offline storage solutions for cryptocurrencies. They are not connected to the internet, which makes them highly secure against online attacks.

### Types of Cold Wallets
- **Hardware Wallets**: Physical devices that store private keys offline.
- **Paper Wallets**: Physical printouts or handwritten notes of private keys and QR codes.
- **Air-Gapped Computers**: Computers that are never connected to the internet.
- **Brain Wallets**: Private keys memorized.
- **Account Abstraction**: Using smart contracts to manage keys and transactions without exposing private keys.
- **Multisig Wallets**: Require multiple signatures to authorize a transaction, enhancing security.

Account Abstraction and multisig wallets can be implemented in both cold and hot wallet scenarios, providing additional layers of security.

### Use Cases
- **Long-Term Storage**: Ideal for storing large amounts of cryptocurrency for extended periods.
- **High Security Needs**: Suitable for users who prioritize security over convenience.

### Examples
- **Hardware Wallets**: Ledger, Trezor, BitBox02.
- **Multisig Wallets**: Safe{Wallet}
- **Account Abstraction**: Clave, Coinbase Wallet

## Hot Wallets

### What Are They?
Hot wallets are mainly online storage solutions for cryptocurrencies. They are connected to the internet, making them more convenient but less secure than cold wallets.

### Types of Hot Wallets
- **Mobile Wallets**: Apps installed on smartphones.
- **Desktop Wallets**: Software installed on computers.
- **Web Wallets**: Online services accessible via web browsers.

### Use Cases
- **Daily Transactions**: Ideal for users who need quick access to their funds for transactions.
- **Small Balances**: Suitable for storing smaller amounts of cryptocurrency that are used regularly.

### Examples
- **Mobile Wallets**: MetaMask Mobile
- **Desktop Wallets**: MetaMask, Rabby
- **Web Wallets**: Coinbase, Binance

## Comparison

| Feature           | Cold Wallets        | Hot Wallets        |
| ----------------- | ------------------- | ------------------ |
| Security          | High                | Moderate to Low    |
| Convenience       | Low                 | High               |
| Internet Exposure | None to low         | Constant           |
| Use Case          | Longer-term storage | Daily transactions |
