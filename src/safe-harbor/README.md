---
tags:
  - SEAL/Initiative
  - Protocol
  - DAO
  - Whitehat
contributors:
  - role: wrote
    users: [robert, Dickson]
---

# SEAL Whitehat Safe Harbor

![](./images/whitehat-full-logo-blue.svg)


> 💡 An industry-standard framework, letting your protocol pre-authorize whitehats to rescue funds during active exploits 
> 

---

<div align="center">
  <video controls width="600">
    <source src="./images/Protocol_Explainer_Video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>


---

## What is Safe Harbor?

> When your protocol is under attack, every second counts. Safe Harbor gives you a way to fight back.
> 

Safe Harbor is a legal and technical framework that lets your protocol pre-authorize whitehats to step in during active exploits, rescue funds, and return them - fast, safely, and with clear legal protection for everyone involved.

By adopting Safe Harbor, protocols allow:

- Empower whitehats to act immediately during an exploit
- Remove legal ambiguity and delays
- Boost the odds of recovering user funds

---

## Why we started Safe Harbor

> 💡 We started Safe Harbor after the Nomad hack, where over $190M was drained over the course of hours while whitehats stood by, willing to help, but unable to act without legal protection. With Safe Harbor, our goal is to make sure that never happens again and to empower whitehats to rescue funds.

---

## Vetted by industry leaders and top Web3 lawyers:

> Safe Harbor was developed over two years with direct input and rigorous legal review from experts at a16z Crypto, Cooley, Debevoise & Plimpton, Filecoin Foundation, MetaLeX, Paradigm, Piper Alderman, Powerhouse, and more.
> 

![legal.png](./images/legal.png)

---

## Who’s Adopted Safe Harbor:

> Safe Harbor is already protecting $16B+ in assets across leading DeFi protocols. Current adopters include Uniswap, Pendle, PancakeSwap, Balancer, Silo Finance, Zksync, and more. See the [full up-to-date list](https://safeharbor.securityalliance.org/).
> 

| ![Uniswap](./images/Uniswap_logo.png) | ![Pendle](./images/Pendle_logo.png) | ![ZkSync](./images/Zksync_logo.png) | ![Balancer](./images/Balancer_logo.png) |
|:-----------------------------------:|:----------------------------------:|:----------------------------------:|:-------------------------------------:|
| [Gov Proposal](https://www.tally.xyz/gov/uniswap/proposal/79) | Non-DAO Adoption | [Gov Proposal](https://www.tally.xyz/gov/zksync/proposal/35395412545014978447594654620386134175315194219985614464693911512436668500487?govId=eip155:324:0x496869a7575A1f907D1C5B1eca28e4e9E382afAb) | [Gov Proposal](https://snapshot.box/#/s:balancer.eth/proposal/0x8c3fd2550184ec28653c46e959782f1a3127ca8aa6a5652494a9c29ad77d9b55) |

---

## **How Does Safe Harbor Work?**

- **Protocols pre-authorize rescues:** You clearly define when and how whitehats are allowed to step in - covering what assets are protected, where to return funds, and what bounty terms apply, etc
- **Whitehats act only during active exploits:** Safe Harbor **only** applies when an exploit is already in progress or imminent - e.g., in the mempool, or after initial funds have been drained. It’s *not* for bug bounty reports, and it does not protect blackhats. Only whitehats who rescue funds without initiating the exploit are covered.
- **Funds are returned, bounty is automatic:** Whitehats must send rescued funds to your official recovery addresses within 72 hours. Bounties are enforceable and pre-defined - no negotiation, no chaos.

**Other key protections:**

- You can choose to allow anonymous whitehats or require KYC.
- Whitehats must follow established guidelines for responsible intervention
- You define exactly which contracts, and chains are protected.
- The agreement is only valid if funds are returned and the protocol’s rules are followed

---

## How to adopt?

Adopting Safe Harbor is fast, simple, and works whether you're a DAO or a centralized team. You can complete the whole process in under an hour.

Here are a few options:

### 1. Get Help from SEAL

For protocols that want white-glove support, SEAL offers guided onboarding at no cost. We’ll walk you through scoping, governance language, on-chain registration, etc.

→ [Apply for the SEAL Onboarding Waitlist](https://form.typeform.com/to/QF3YjWno)

> Space is limited - we prioritize high-impact protocols and critical infrastructure
> 

### 2. Self-Adopt Using Our Guide

For teams that want to do it themselves, we provide a clear step-by-step guide, including templates for scope definitions, template DAO proposals, and on-chain registration instructions.

→ [View the Self-Adoption Guide](./self-adoption-guide.md)

### 3. Adopt Through a Third-Party Provider

Safe Harbor is also supported by select ecosystem partners who offer adoption workflows as part of their existing services. 

→ [Adopt via Immunefi](https://docs.google.com/forms/d/e/1FAIpQLSehHw_KyNfSr9YbnO1AB3OZ4cvVS2oInIxdveCPguR9GSxZFQ/viewform)




Safe Harbor doesn’t require a legal entity, legal counsel, or new infrastructure. Just define your terms, publish your scope, and your protocol is protected.

> Whether you're a DAO or not, adopting Safe Harbor is a low-lift way to enable real-time defense and recover funds during live exploits.
> 

---

## Whitehats Work

> 💡 SEAL911 and the broader whitehat community have already helped protocols recover over $150M from live attacks - proving that fast, responsible intervention is possible.


---

## FAQ

<details>
<summary>What counts as an active exploit?</summary>

An *active exploit* is one that’s already in progress or imminent - for example, a malicious transaction sitting in the mempool or a vulnerability that's already being exploited. Safe Harbor only applies when immediate action is required to prevent or stop fund loss. It does **not** apply to situations where there is no imminent threat and where responsible disclosure can prevent fund loss.

</details>

<details>
<summary>How is it different than a Bug Bounty?</summary>

Bug bounties reward whitehats for responsibly disclosing vulnerabilities *before* they’re exploited. Safe Harbor kicks in *after* an exploit is underway - when there’s no time for disclosure, and whitehats need legal cover to intervene and recover funds in real time.

</details>
    
<details>
<summary>What are the risks?</summary>

There is little to no risk. The status quo is the protocol is hacked and the hacker gets 100% of funds. But with Safe Harbor, we unlock the upside of whitehats stepping in and rescuing funds. So the worst case scenario is the status quo, while the best case scenario is all funds are rescued by the protocol.

Whitehats only receive protection if they follow every requirement. If no exploit happens, nothing changes. If they do not follow Safe Harbor, they’re a blackhat

</details>
    
<details>
<summary>Can DAOs adopt it?</summary>

Yes. Safe Harbor was built with DAOs in mind. No legal entity is required - just a governance vote and public on-chain registration. Many protocols who have adopted are DAOs (ex: Uniswap, Balancer, Zksync) 

</details>
    
<details>
<summary>Can Non-DAOs adopt it?</summary>

Yes. Centralized teams and foundations can also adopt Safe Harbor by publishing their scope and adoption terms. No DAO is required. Many protocols who have adopted are centralized teams (Pendle, Polymarket)

</details>

<details>
<summary>Who is the agreement with?</summary>

The Safe Harbor agreement is structured as a **public unilateral offer -** a legally binding offer made by your protocol to *any whitehat* who acts under the published terms. There’s no need to know or pre-approve the individual. If a whitehat follows your rules (e.g. intervenes during an active exploit, returns funds to the recovery address, meets any KYC requirements), the agreement becomes binding. No signatures or formal negotiation required.

</details>

<details>
<summary>Do we need to sign a legal contract (like DocuSign)?</summary>

Nope. Safe Harbor uses on-chain registration and public adoption details - no signatures or lawyers required. If you’re a DAO, a governance vote is enough.

</details>

<details>
<summary>What if a blackhat initiates a hack with one account, then “whitehats” it with another account to get the bounty?</summary>

They’re not covered. Safe Harbor protections **only** apply to whitehats who are fully independent from the original exploit. If someone initiates a hack and then tries to “rescue” the funds with another address, they’re still considered a blackhat - **no bounty, no legal protection, and fully liable**.
    
To reduce this risk even further, we recommend protocols set their Safe Harbor bounty cap **at or below** their existing bug bounty. This way, there’s no financial incentive to attempt an exploit - it's easier, safer, and more profitable to report the bug through your standard disclosure process than to fake a whitehat rescue under legal risk.

</details>

<details>
<summary>Can we modify the Safe Harbor legal contract?</summary>

We strongly discourage protocols from modifying the legal language of the Safe Harbor agreement. The framework is designed as a **standard** across the industry, so whitehats can understand the rules quickly and act confidently during emergencies.
    
That said, the agreement is built with flexibility where it matters: you define your scope - such as which contracts are covered, Asset Recovery Addresses, bounty terms, and KYC requirements. These parameters are designed to give you control without breaking the shared standard that makes Safe Harbor effective.

</details>

<details>
<summary>Should our legal team review the Safe Harbor agreement?</summary>

It’s optional. The agreement has already been vetted by leading law firms (Cooley, Debevoise & Plimpton, Piper Alderman) and adopted by top-tier protocols like Uniswap, Balancer, and Pendle.
    
That said, if your legal team wants to review it for extra peace of mind, they absolutely can. Just keep in mind: the agreement is a community standard designed for consistency, so major edits aren’t recommended (and usually unnecessary).

</details>

