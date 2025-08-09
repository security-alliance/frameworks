---
title: In Case of a Compromise
tags:
  - incident-management
  - security
  - crypto
---

# In Case of a Compromise

👋 Hello! We have reason to believe your computer is compromised. Your assets & accounts are at risk.

---

## Stop Reading Unless Your Device is Powered Off

If your computer is still connected to the internet, turn off the Wi-Fi or unplug your Ethernet cable, and shut the device down immediately.

⚠️ **Do not continue reading this document until you have done so**

```
_______________
|.-----------.|
||   x . x   ||
||____.-.____||
`-----)-(-----`
 ____[=== o]____
|:::::::::::::::|


```
If you need additional help, feel free to message **SEAL-911** on Telegram at any time.  
But, seriously, don’t even look below this line until your computer is off.

Use a clean mobile device (phone/tablet) to read and follow this guide. You’re likely still being watched until your compromised device is offline.

---

## Section 0: Device Triage (Before Anything Else)

You must assume your entire device is under the attacker’s control.  
Key-loggers, screen sharing, remote access tools… anything is possible.

### Immediate Steps:

1. Disconnect Internet: Kill the WiFi or unplug the Ethernet cable  
2. Power Off: Shut down your computer completely  
3. Switch Devices: Use a clean phone, tablet, or computer to read this guide  
4. Do **NOT** reboot the compromised device unless necessary for recovery  
5. Never log into sensitive accounts or wallets from that device again  

### Why Early Red Flags Matter?

In most real-world attacks:  
- There's a gap between compromise and action, giving you a small window to react.  
- The faster you detect and react, the better your odds of blocking and minimizing damage.  

### Red Flags That Should Trigger Immediate Suspicion

#### System Behavior Red Flags

- Unexpected popups, browser crashes, or freezing during device usage  
- Software prompts appearing when you're not installing anything  
- New login prompts or system credential requests  
- Clipboard contents changing after you copy-paste (e.g., address replaced)  
- Mouse moves or inputs happening without your control  
- Files, extensions, or bookmarks appear that you didn’t install  
- Sudden system slowness, high fan speeds, or battery drain  

These can signal malware, clipboard hijacking, remote access trojans, or browser-level exploits in action.

#### Network/Wallet Red Flags

- Your wallet displays a different address than expected  
- Wallets disconnect or reconnect without explanation  
- URLs for familiar websites change slightly  
- Wallet extension requests repeated permission  

If you feel uncertain about these symptoms, stop and switch to a clean device until further checks.

#### Application Red Flags

- Your password manager prompts for master password out of nowhere  
- You’re logged out of previously “remembered” sessions  
- Encrypted notes or files you rely on are now inaccessible or corrupted  
- You notice auto-fill values being inserted where they shouldn't be  

These are indirect indicators that application state, memory, or integrity has been tampered with.

#### Gut-Check Red Flags

- You feel “off” about your device performance; it seems different than usual  
- You can’t remember if you installed something recently  
- You were working from an airport/hotel/guest network before the device started acting strange  

> **Note:** Not all these signs confirm a compromise, since malfunctions and glitches are normal. But if they happen repeatedly or multiple signs occur together, stop and triage your device for safety checks.

---

## Section 1: Individuals – Rescue Your Personal Funds & Accounts

*Applies to: Traders, Investors, everyday Crypto users.*  
*Focus: Secure your crypto and accounts.*

### 1. Move Funds Immediately

- On your clean device (mobile, tablet, new computer), create a new wallet.  
- Back up your seed phrase offline only (write it on 2 pieces of paper).  
- Move assets starting with the highest value or most at-risk (e.g., $100k in USDC is a priority).  
- Always move tokens, NFTs, DeFi positions **before** the native asset (like ETH). You need ETH to pay gas fees.

### 2. Prioritize Account Lock-down

Attackers generally want to steal:  
1. Your Crypto  
2. Takeover Telegram account  
3. Takeover Twitter account  

However, they will not empty your wallets (or reveal their presence) if they believe you have access to more assets elsewhere, e.g., protocol control, bridges, or centralized exchanges. They may wait patiently for you to log in to critical services and then launch targeted attacks.

If you are one of multiple signers on a multisig, attackers will try to compromise other signers.

If your protocol has no obvious admin backdoor, attackers may look for alternative ways to profit (e.g., infinite mint exploits).

> **If you manage others’ money, take this VERY seriously. Protect your company, team, and users.**

For each affected account, you must:

1. Remove all active sessions except the current one.  
2. Change the password to a strong, unique one using your phone or iPad.  
3. Turn on MFA via Google Authenticator (Cloud Sync OFF) and/or YubiKey.  
4. Remove any recovery email addresses or phone numbers.  
5. Remove any 2FA via SMS or Email.

### Prioritize these accounts in order:

1. Password Managers  
2. Centralized Exchanges  
3. Bank accounts / saved credit/debit cards  
4. Business/company logins  
5. Twitter (sessions, password)  
6. Telegram  
7. Google Account  
8. Apple/iCloud  
9. Discord and other social media  

### Quick Account Security Tips

- **Telegram:**  
  1. Turn on 2FA: Settings > Privacy and Security > Two-Step Verification  
  2. Set a password and recovery email (save in password manager)  
  3. Hide your phone number: Settings > Privacy and Security > Phone Number  
     - "Who can see my phone number": Nobody  
     - "Who can find me by my number": My contacts  

- **Twitter:**  
  1. Revoke all sessions: Settings > Security > Sessions  
  2. Enable app-based 2FA  

- **Discord:**  
  1. Revoke all devices  
  2. Turn on 2FA via authenticator app  

### 3. Warn Your Contacts

Attackers may try to target your contacts, especially if your social media accounts are compromised. Warn close contacts, especially in crypto, about suspicious messages.

- Inform your employer ASAP, especially if your work device is compromised.  
- Consider a public statement to warn the wider community.  

### 4. Log Suspicious Activity

- Take screenshots of unauthorized transactions.  
- Write down timestamps, devices used, and strange behavior.

---

## Section 2: Protocol Admins – You Are a Liability Until Proven Secure

*Applies to: Protocol Admins, Team Members*

Assume attackers have or will soon access:

- GitHub repos  
- Notion, Google Drive  
- Telegram work chats  
- Front-end deploy tools  
- Infrastructure (SSH, DNS, etc.)  
- Multisig dashboards (Safe / Gnosis, etc.)  

**DO NOT** log in to any of these services from the compromised device.

### Instead:

- Notify your team lead or signer group immediately  
- Request temporary removal from:  
  - Front-end deploy keys  
  - GitHub/org access  
  - Infrastructure or moderation tools  
  - Discord/Telegram admin roles  
  - Multisig signer role  

Immediately secure your own assets (refer back to Section 1).

### Device Recovery

- Wipe or replace your device  
- Reinstall OS or VM from scratch  
- **Do NOT restore the entire device from backups (Time Machine, etc.)**  
- Manually move files only; do not copy the entire home/user folder to new device  

If unsure, take your device to a professional explaining Remote Access Trojan compromise.

Some choose to buy a new device outright.

### Document and Report Stolen Assets

- Check wallets and exchange accounts for suspicious activity.  
- Report to local law enforcement and [ChainAbuse](https://www.chainabuse.com/report).

Include:  
- On-chain addresses affected  
- Transaction hashes with network info  
- Addresses funds were sent to  
- Scammer social media info (if any)  
- URLs or apps used for attack  
- Timeline summary from your perspective  

#### Example:

- Oct 22, 2024: User XXX contacted me on Telegram, posing as an investor.  
- Scheduled call, sent URL _____ that timed out.  
- Told “____” on Telegram, who suggested running a script. It did not fix the issue.  
- Oct 23, 2024: Noticed $200k stolen across accounts.  
- Logged out of Telegram and Twitter.  
- Oct 24, 2024: Attempted unauthorized Bitgo login blocked.

---

## Section 3: Protocol Escalation Path – Internal IR Response

*Applies to: Project Founders, Multisig Leads, Senior Engineers*

If a team member is compromised, take immediate protocol-level actions:

- Revoke that signer’s multisig access  
- Rotate deploy/front-end/API secrets (Netlify, GitHub PATs, RPC keys)  
- Pause protocol upgrades if possible  

### Notify Trusted Parties

- Protocol team members  
- ChainAbuse / Chainalysis for tracking/reporting  
- External security partners (white-hats, auditors)  

### Start a War Room

- Contact SEAL911  
- Designate a response lead as point of contact  
- Collect timeline of events from compromised member  
- Decide on signer rotation or threshold adjustments  

### Reminders

- This is a team risk, not just individual failure  
- Communicate early, act quickly, keep logs  

---

## Recovery Tips & Reminders (All Tiers)

- Rebuild affected machines completely (wipe & reinstall)  
- Never restore full-device backups  
- Use fresh installs from official sources only  
- Terminate Telegram and Discord active sessions  
- Use sandbox tools to check files/URLs (e.g., VirusTotal)  
- Consider public statement if social accounts were abused  

Stay alert for login attempts or notifications — indication you might still be compromised.

Did you really keep your device off? Did you really change all passwords?

### Harden Your Security

- Set up MFA with Google Authenticator (Cloud sync **OFF**)  
- Use a password manager  
- Get a Ledger or Trezor and **use it properly!**  
- Further secure your Twitter and Telegram accounts  

---

Your goal isn’t perfection — it’s to stop loss, communicate clearly, and recover cleanly.

