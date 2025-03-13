---
tags:
  - Security Specialist
  - Operations & Strategy
  - Community & Marketing
  - HR
  - Engineer/Developer
---

# 2. Understanding Threat Vectors

## 2.1. Social Engineering & Phishing Awareness

### 2.1.1. Recognizing Tactics:

- **Phishing Emails:**
Look for red flags like misspellings, odd URLs, and urgent language.
**Scenario Example:** An email that claims "Your account will be locked in 24 hours" but uses a suspicious domain.

- **SMS & Messaging Scams:**
Attackers may use text messages or direct social media messages to bypass email filters.
**Scenario Example:** A text message that claims to be from a delivery service asking for a confirmation code.

- **Voice Phishing (Vishing):**
Phone calls that pretend to be from a trusted organization, often using spoofed caller IDs.
**Scenario Example:** A staff member receives a voicemail warning about a potential security breach and instructing them to call a specific number immediately. Recognizing the urgency and verifying the caller ID against known numbers can help avoid falling for a vishing scam.

### 2.1.2. Web3-Specific Phishing and Scams:

- **Crypto Drainers:**
A common attack where a threat actor suggests users can participate in an airdrop by visiting a provided link. Unsuspecting users who click the link are directed to a counterfeit website, where they are asked to authenticate their wallet and sign a transaction. Once signed, the threat actor gains access to steal funds from the wallet.

- **Rug Pulls:**
In the context of web3 and cryptocurrencies, these scams typically involve fraudulent schemes designed to swindle individuals out of their digital assets. For example, an enticing new project may promise revolutionary technology and unprecedented returns. However, the project developers quickly vanish, leaving investors with worthless tokens and empty promises.

- **Token Approval Exploits:**
Attackers may trick users into approving smart contracts that give unlimited access to tokens in their wallet. Always verify what permissions you're granting when signing transactions.

### 2.1.3. Protecting Against Web3 Threats:

- **Check & Remove Token Approvals:**
Regularly check which smart contracts have approvals to handle funds in your wallet and revoke unnecessary approvals to improve your security posture.
**Useful Tools:**
  - [Unrekt](https://app.unrekt.net/)
  - [Etherscan Token Approval Checker](https://etherscan.io/tokenapprovalchecker)

- **Scrutinize Transaction Requests:**
Never sign a transaction unless you are completely sure exactly what you are signing. Be especially skeptical of offers that seem too good to be true.

### 2.1.4. Additional Social Engineering Techniques:

- **Pretexting:**
Attackers create a fabricated scenario to steal personal information or gain access.
**Scenario Example:** Someone pretending to be a new contractor who needs urgent access to systems or information.

- **Baiting:**
Offering something enticing to entrap the victim.
**Scenario Example:** Leaving infected USB drives in public places or offering free downloads that contain malware.

- **Tailgating:**
Physically following authorized personnel into restricted areas without proper credentials.
**Scenario Example:** An unknown person following an employee through a secure door by claiming they forgot their access card.

- **Shoulder Surfing:**
Observing someone's screen, keyboard, or device to gather information.
**Scenario Example:** A threat actor monitoring your screen in a shared co-working space to capture sensitive information or credentials.

## 2.2 Common Indicators & Red Flags

### 2.2.1. Behavioral Cues

- **Inconsistencies:**
Look for changes in tone or style in communications from known contacts.
**Scenario Example:** A normally formal manager sends a casual message with unexpected requests.

- **Unusual Requests:**
Requests for urgent transfers of money, sensitive information, or changes in process should always trigger caution.

- **Environmental Anomalies:**
Spotting unexpected logins or unfamiliar devices in account activity reports can indicate compromised accounts.

### 2.2.2. Checklist Example

- Does the message contain spelling errors or unusual formatting?
- Is the sender's email or username slightly different from the norm?
- Are there requests for urgent action without proper verification channels?

**Scenario Example:** During a routine check, an employee notices a login from a foreign location that they don't recognize. Reporting this anomaly promptly could prevent unauthorized access.

## 2.3 Preventive Measures Against Social Engineering

### 2.3.1. Verification Practices

- **Double-Check Requests:**
Always verify the identity of individuals requesting sensitive information, especially if the request is unusual or urgent.
**Scenario Example:** If you receive an email from your CEO asking for an urgent wire transfer, call them directly using a known phone number to confirm.

- **Use Secure Channels:**
Communicate through official channels and avoid sharing sensitive information over unsecured methods.
**Scenario Example:** Use your organization's established communication platforms rather than responding to external email links.

### 2.3.2. Security Controls

- **Access Control:**
Implement strict access control measures, preferably requiring confirmations by multiple people before critical actions can be taken.
**Scenario Example:** Requiring two-person authorization for significant financial transactions or system changes.

- **Report Suspicious Activity:**
Encourage team members to report any suspicious behavior or requests immediately.
**Scenario Example:** Create a simple reporting process that doesn't penalize false positives to encourage vigilance.

### 2.4. Education and Awareness

- **Regular Training:**
Conduct regular training sessions on recognizing and responding to social engineering attacks.
**Scenario Example:** Monthly security newsletters highlighting recent attack techniques relevant to your organization.

- **Stay Current:**
Keep up to date on the current trends in social engineering attacks.
**Scenario Example:** Be aware that threat actors are increasingly pretending to provide jobs and asking applicants to run malicious projects that create backdoors on the applicant's computer.