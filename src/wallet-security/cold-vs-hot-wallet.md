---
tags:
  - Engineer/Developer
  - Security Specialist
  contributors:
  - role: "wrote"
    users: [pinalikefruit]
  - role: "reviewed"
    users: [] 
---

# Cold vs. Hot Wallets

The primary distinction between wallet types is their connectivity to the internet. This factor dictates their security threat model, risk profile, and ideal use cases. 

## Cold Wallets

### What Are They?

Cold wallets are cryptocurrency wallets that store private keys in an offline environment. By being disconnected from the internet, or "air-gapped," by default, they provide the highest level of security against online attacks like malware and phishing.

Transactions are signed offline and then broadcast to the network using a connected device, ensuring the private keys  are stored on device with minimal connectivity.

### Types of Cold Wallets

- **Hardware Wallets**: Dedicated physical devices designed specifically to store private keys offline.

- **Paper Wallets**: Physical printouts or handwritten notes of private keys and QR codes.

### Use Cases

- **Long-Term Storage**: Ideal for storing large amounts of cryptocurrency for extended periods.
- **High-Security Needs**: Essential for individuals securing significant value and operating with a low risk tolerance.

## Hot Wallets

### What Are They?

Hot wallets are actively and consistently connected to the internet.This connectivity makes them highly convenient for daily use but also inherently more vulnerable to online attacks.

### Types of Hot Wallets

- **Browser Wallets (Extensions)**: Software that integrates directly into a web browser, allowing seamless interaction with DApps.
- **Mobile Wallets**: Apps installed on smartphones.
- **Desktop Wallets**: Software applications installed on a desktop or laptop computer.

### Use Cases

- **Daily Transactions & dapp Interaction**: Perfect for users who need quick and frequent access to their funds for interacting with applications.
- **Small Balances**: Suitable for storing smaller, non-critical amounts of cryptocurrency that are used regularly.

## Comparison

| **Feature** | **Cold Wallets** | **Hot Wallets** |
| :--- | :--- | :--- |
| **Security** | High | Moderate to Low |
| **Convenience** | Low | High |
| **Use Case** | Long-term storage | Daily transactions |
| **Risk** | Physical loss/damage | Online attacks, malware |


## **Key Security Considerations**

Regardless of the type, non-custodial wallets place the full burden of security on the user:

- **Sole Custodian Responsibility**: You are the only one in control of your keys. Mistakes, such as exposing a seed phrase or sending funds to a wrong address, can lead to irreversible loss of funds.
- **Online Vulnerabilities**: If the device they are on (computer or phone) is compromised, your assets can be stolen.
- **Supply Chain Attacks**: Be cautious of both software and hardware integrity. Always download wallet software from official sources and purchase hardware wallets directly from the manufacturer to avoid receiving a tampered device.