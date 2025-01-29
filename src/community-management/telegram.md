---
tags:
  - Community & Marketing
---

# Telegram Security

> **Key Takeaway:** Stay vigilant with group chats on Telegram. Implement verification steps and secure communication practices to protect against sophisticated interception attacks.

While **Telegram** is widely used in the crypto community, it's crucial to understand its security limitations. Telegram **does not** offer end-to-end encryption (**E2EE**) by default, which means your messages could potentially be accessed by third parties. Additionally, Telegram's reliance on phone numbers for account creation can expose users to SIM swapping attacks, and its peer-to-peer call feature can reveal your IP address to other users. If **E2EE** is a priority, consider using [Signal](https://signal.org/).

However, if you choose to use **Telegram**, the following best practices can help enhance your security.

---

## Table Of Contents <!-- omit in toc -->

- [Telegram Security](#telegram-security)
  - [Standard Security](#standard-security)
    - [Configure 2FA](#configure-2fa)
    - [Hide Your Phone Number](#hide-your-phone-number)
    - [Disable P2P Calling](#disable-p2p-calling)
    - [Manage Inactive Sessions](#manage-inactive-sessions)
  - [Extended Security](#extended-security)
    - [Consider Using a Different Phone Number](#consider-using-a-different-phone-number)
      - [Using a VoIP Number](#using-a-voip-number)
      - [Using an Anonymous Number](#using-an-anonymous-number)
    - [Turn On Auto-delete Messages](#turn-on-auto-delete-messages)
  - [Advanced Security Measures](#advanced-security-measures)
    - [Use Secret Chats for Enhanced Privacy](#use-secret-chats-for-enhanced-privacy)
    - [Regularly Update the Telegram App](#regularly-update-the-telegram-app)
    - [Be Cautious with Third-Party Bots and Integrations](#be-cautious-with-third-party-bots-and-integrations)
    - [Implement Device-Level Security](#implement-device-level-security)
    - [Manage Group and Channel Admin Permissions](#manage-group-and-channel-admin-permissions)
    - [Educate Community Members on Security Practices](#educate-community-members-on-security-practices)
  - [Example of a Man-in-the-Group Attack](#example-of-a-man-in-the-group-attack)
    - [Scenario: Intercepting a Payment Deal](#scenario-intercepting-a-payment-deal)
      - [Step 1: Initial Communication](#step-1-initial-communication)
      - [Step 2: Attackers Create Cloned Groups](#step-2-attackers-create-cloned-groups)
      - [Step 3: Replicating Conversations](#step-3-replicating-conversations)
      - [Step 4: Swapping Payment Details](#step-4-swapping-payment-details)
      - [Step 5: Execution of the Scam](#step-5-execution-of-the-scam)
  - [Extended Security](#extended-security-1)
    - [Devices](#devices)
    - [Passcode Lock](#passcode-lock)
    - [Privacy and Security](#privacy-and-security)
      - [Security](#security)
        - [Two-Step Verification](#two-step-verification)
      - [Privacy](#privacy)
      - [Settings \> Privacy and Security \> Data Settings](#settings--privacy-and-security--data-settings)
  - [Tips for Safe Use](#tips-for-safe-use)

## Standard Security

### Configure 2FA

Telegram sign-ups require a phone number, but you can also enable two-factor authentication via a password—your main protection if you’re ever SIM-swapped. **Don’t reuse this password anywhere else.**

1. **Go to**: **Settings > Privacy and Security > Two-Step Verification**  
2. **Set**: A strong password and recovery email (store both in a password manager)

### Hide Your Phone Number

Making your phone number visible can expose you to unwanted contact or social engineering attacks. Restricting visibility helps safeguard your personal info.

1. **Go to**: **Settings > Privacy and Security > Phone Number**  
2. **Who can see my phone number?**: Select **Nobody**  
3. **Who can find me by my number?**: Select **My contacts**

### Disable P2P Calling

By default, Telegram calls can connect you *directly* to the other user, potentially revealing your IP address.

1. **Go to**: **Settings > Privacy and Security > Calls**  
2. **Use peer-to-peer with**: Select **Nobody**

### Manage Inactive Sessions

Telegram supports auto-terminating inactive sessions. You can also manually review and end any suspicious active sessions.

1. **Go to**: **Settings > Privacy and Security > Active sessions**  
2. **Review**: Delete any sessions you don’t recognize  
3. **Auto-terminate**: Set inactive sessions to end after **1 month**

## Extended Security

### Consider Using a Different Phone Number

Even if you implement all the recommended security measures, there are still valid reasons to use a separate phone number. For instance, it can help prevent your contacts from discovering your Telegram account or reduce the risk of accidental number exposure. This is particularly important because the **"Share My Phone Number"** option is enabled by default whenever you add a new contact.

#### Using a VoIP Number

Telegram restricts many VoIP providers, but services like [Google Voice](https://voice.google.com/) or [Burner](https://www.burnerapp.com/) might work. Purchase a burner number solely for Telegram if you prefer additional anonymity.

#### Using an Anonymous Number

In December 2022, Telegram introduced support for anonymous numbers purchased through its [TON](https://ton.org/) blockchain infrastructure. You can also check out [Fragment](https://fragment.com/) for such options.

### Turn On Auto-delete Messages

Consider the photo you shared with a friend several months ago. While it might have slipped your mind, an attacker who gains access to your account could find such information quite valuable.

1. **Go to**: **Settings > Privacy and Security > Auto-Delete Messages**  
2. **Set**: Choose a time frame (e.g., 1 week) based on your risk tolerance

## Advanced Security Measures

### Use Secret Chats for Enhanced Privacy

For conversations that require an extra layer of security, use Telegram's Secret Chats, which offer **end-to-end encryption**.

1. **Start a Secret Chat**: Open the chat with the desired contact, tap on their name, and select **Start Secret Chat**  
2. **Benefits**:
   - Messages are encrypted and can only be read by you and the recipient
   - Offers self-destruct timers for messages
   - Prevents forwarding of messages to other chats

### Regularly Update the Telegram App

Ensure you are always using the latest version of Telegram to benefit from the newest security patches and features.

1. **Check for Updates**: Visit your device's app store regularly  
2. **Enable Automatic Updates**: If possible, turn on automatic updates to stay current

### Be Cautious with Third-Party Bots and Integrations

Third-party bots can enhance functionality but may also introduce vulnerabilities.

1. **Use Trusted Bots**: Only add bots from reputable sources  
2. **Review Permissions**: Limit the permissions you grant to bots  
3. **Regular Audits**: Periodically review and remove unnecessary bots

### Implement Device-Level Security

Protect the device you use to access Telegram to prevent unauthorized access.

1. **Use Strong Passwords or Biometrics**: Secure your device with a strong passcode or biometric authentication  
2. **Enable Device Encryption**: Ensure your device's storage is encrypted  
3. **Install Security Software**: Use reputable antivirus and anti-malware solutions

### Manage Group and Channel Admin Permissions

Properly managing admin permissions can prevent misuse and unauthorized access.

1. **Limit Admin Roles**: Only grant admin privileges to trusted individuals  
2. **Review Permissions**: Regularly check what permissions each admin has  
3. **Use Role-Based Access**: Assign roles based on responsibilities to minimize risks

### Educate Community Members on Security Practices

A secure community relies on the awareness and vigilance of its members.

1. **Provide Security Guidelines**: Share best practices with your community  
2. **Conduct Training Sessions**: Offer regular training on recognizing phishing and other threats  
3. **Promote Safe Communication**: Encourage the use of Secret Chats and cautious sharing of personal information

---

## Example of a Man-in-the-Group Attack

Attackers can exploit Telegram's group chat features to intercept and manipulate communications between two parties. Here's a concise example of how such an attack might occur:

### Scenario: Intercepting a Payment Deal

#### Step 1: Initial Communication

- **Alice** and **Bob** decide to finalize a cryptocurrency deal using a Telegram group chat named **"Crypto Deals"**.

#### Step 2: Attackers Create Cloned Groups

- **Attacker 1** creates **Group A** impersonating **Alice**.
- **Attacker 2** creates **Group B** impersonating **Bob**.

#### Step 3: Replicating Conversations

- **In Group A (Impersonating Alice):**
  - The attacker, posing as Alice, relays Alice's messages from Group B to maintain the conversation.

- **In Group B (Impersonating Bob):**
  - The attacker, posing as Bob, mirrors Bob's messages from Group A, acting as a middleman without altering the content.

#### Step 4: Swapping Payment Details

- **In Group A:**
  - Fake Alice and Bob agree to the terms of the deal.
  - Bob shares his payment address.

- **In Group B:**
  - Fake Bob shares his swapped payment address.
  - The conversation continues normally, with neither Alice nor Bob aware of the swap.

#### Step 5: Execution of the Scam

- **Alice** sends the payment to what she believes are Bob's details but are actually those of Fake Bob.
- The attacker now controls both ends of the conversation, having successfully redirected the funds.

## Extended Security
<<<<<<< HEAD
=======

**Devices**
Settings > Devices: The default for automatically terminating old sessions is set to 6 months. I highly recommend changing this setting to a shorter period—1 month or even 1 week—depending on how frequently you use TG

**Passcode Lock**
Settings > Privacy and Security > Passcode Lock: This feature adds a passcode to access your Telegram app after a period of inactivity. The default setting is "away for 1 hour." Don't lose this passcode—store it offline if needed. However, ensure it's different from your phone's unlock passcode.

**Privacy and Security**
Settings > Privacy and Security > Two-Step Verification: Keep in mind that Telegram doesn't have a login by default. However, you can set up a password that acts as a "second" 2FA method when logging in from a new device. While they send a code via SMS (which is not secure) and offer email recovery (which is better), they don't provide options for authenticator apps or hardware keys. If you lose this password, you'll be in trouble, so make sure to write it down offline and don't lose it.

**Privacy**

Consider adjusting the following settings in this section based on your country, usage, and purpose for using Telegram:
Settings > Privacy and Security >

Phone Number: Nobody
Last Seen & Online: Nobody
Profile Picture: Everybody (stops scammers impersonating your PFP)
Bio: Nobody (Depending on use of TG)
Date of Birth: Nobody
Forwarded Messages: Nobody
Calls: Nobody or Contacts Only (Depending on use of TG)
Voice Messages: Contacts Only (Depending on use of TG)
Messages: Everybody or Contacts Only (Depending on use of TG)
Invites: Contacts Only or Nobody (I wouldn't put ‘Everyone’ so you don't get added to a random group that impersonates another group and ends up getting you scammed)
Settings > Privacy and Security > Data Settings:
Sync Contacts: Disable (Depending on use of TG)
Suggest Frequent Contacts: Disable (Depending on use of TG)

**Tips to use Telegram safely:**
- Do you want to message someone? Create a 'secret' chat so the communication is encrypted (1:1 chats)
- Triple-check all group invites, so it's not an imposter group sharing bad links
- Never trust a DM from anyone sending links or acting as "support", "exchanges", or "team"
- Use the block function, don't just delete chats, report, and block spammers/scammers
- This is an advanced tip, but you can setup a proxy (VPN) to hide your IP at all times via TG app.
- Do not just use any "mini app" do not login or put any information if it redirects outside of telegram, triple check the username of the mini app to ensure its the real one as telegram does not use any bot verification system. Never download anything and run any commands on your device from telegram.
- Be aware of telegram ads in channels as anyone can post an ad (99% scam ads)


## Prevention Tips
>>>>>>> edaf90e47c1b0ca3eb4c70605e469811a8528fd3

### Devices

- **Settings > Devices:** The default setting for automatically terminating old sessions is set to 6 months. It is highly recommended to change this setting to a shorter period—1 month or even 1 week—depending on how frequently you use Telegram.

### Passcode Lock

- **Settings > Privacy and Security > Passcode Lock:** This feature adds a passcode to access your Telegram app after a period of inactivity. The default setting is "away for 1 hour." 
  - **Recommendations:**
    - **Store Passcode Securely:** Do not lose this passcode—store it offline if needed.
    - **Unique Passcode:** Ensure it is different from your phone's unlock passcode.

### Privacy and Security

**Go to:** Settings > Privacy and Security

#### Security

##### Two-Step Verification

- **Overview:** Telegram does not require a login by default. However, you can set up a password that acts as a "second" 2FA method when logging in from a new device.
- **Security Measures:**
  - **SMS Codes:** Telegram sends a code via SMS, which is not secure.
  - **Email Recovery:** Offers email recovery, which is more secure but lacks options for authenticator apps or hardware keys.
- **Important:** 
  - **Backup Password:** If you lose this password, access to your account may be compromised. 
  - **Secure Storage:** Write it down offline and ensure it is not lost.

#### Privacy

Consider adjusting the following settings based on your country, usage, and purpose for using Telegram:

- **Phone Number:** Set to **Nobody** to prevent exposure.
- **Last Seen & Online:** Set to **Nobody** to enhance privacy.
- **Profile Picture:** Set to **Everybody** to stop scammers from impersonating your profile picture.
- **Bio:** Set to **Nobody** (depending on use of Telegram).
- **Date of Birth:** Set to **Nobody**.
- **Forwarded Messages:** Set to **Nobody**.
- **Calls:** Set to **Nobody** or **Contacts Only** (depending on use of Telegram).
- **Voice Messages:** Set to **Contacts Only** (depending on use of Telegram).
- **Messages:** Set to **Everybody** or **Contacts Only** (depending on use of Telegram).
- **Invites:** Set to **Contacts Only** or **Nobody** to prevent being added to random groups that may impersonate legitimate groups and lead to scams.

#### Settings > Privacy and Security > Data Settings

- **Sync Contacts:** Disable (depending on use of Telegram) to prevent syncing your contacts.
- **Suggest Frequent Contacts:** Disable (depending on use of Telegram) to avoid unsolicited contact suggestions.

## Tips for Safe Use

- **Use Secret Chats:** When messaging someone, create a 'secret' chat to ensure encrypted 1:1 communication, providing end-to-end encryption for sensitive transactions.
- **Verify Group Invites and Authenticity:** Always triple-check group invitations and confirm the legitimacy of group chats through separate channels to avoid joining impostor groups that share malicious links.
- **Beware of Unsolicited DMs:** Never trust direct messages from anyone sending links or posing as "support," "exchanges," or "team" members.
- **Double-Check Payment Details:** Verify payment information through multiple methods before transferring funds to prevent fund redirection.
- **Block and Report Scammers:** Use the block function to prevent further contact, and report spammers/scammers instead of just deleting chats.
- **Limit Group Permissions:** Restrict who can add members to groups to prevent unauthorized cloning and protect against raids.
- **Educate Members:** Train community members to recognize and report suspicious group activities and security threats.
- **Exercise Caution with Mini Apps:** Avoid logging in or providing information to mini apps that redirect outside of Telegram. Triple-check the username of the mini app to ensure its legitimacy, as Telegram lacks a bot verification system. Never download or run any commands from Telegram on your device.
- **Enhance Privacy with a VPN:** *Advanced tip:* Set up a proxy or VPN to hide your IP address while using the Telegram app.
- **Stay Vigilant Against Scam Ads:** Be aware that anyone can post ads in channels, with 99% being scam ads. Exercise caution when interacting with advertisements.
