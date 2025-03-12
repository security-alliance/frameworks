---
tags:
  - Community & Marketing
contributors:
  - name: Matta
    avatar: https://github.com/mattaereal.png
    github: https://github.com/mattaereal
  - NFTDrewww
---

# Community Management

Communities might be the key of many Web3 projects, but they also represent a significant security challenge. From casual users to top-level executives, everyone within an organization can be targeted by social engineering tactics across platforms like Telegram, Discord, X (formerly Twitter), Google, and more. When a community channel is compromised—whether by phishing, fraudulent links, or account takeovers—it can quickly become a vehicle for wider attacks, putting both users and organizational reputations at risk.

Here, we present essential best practices to safeguard your community. In the following sections, we will explore platform-specific recommendations in more depth.

---

## Best Practices for Community Security

### Strong Passwords and Two-Factor Authentication (2FA)

- Use unique, complex passwords for each service and store them securely in a reputable password manager. Refer to the [**Operational Security Framework**](../operational-security/README.md) and [**Key Management Framework**](../key-management/README.md) for more information on this.
- Secure the email account linked to your community platforms with a unique password and 2FA.
- Always enable 2FA. Prefer hardware-based tokens (e.g., Yubikey) or mobile authenticator apps over SMS-based methods, which are vulnerable to SIM-swapping.
- If you use an authenticator app like Authy, 1Password, or Aegis to generate time-based one-time passwords (TOTP). Ensure that the secret keys are stored encrypted and protected with robust security measures.
- Configure your app to require a password, PIN, or biometric authentication (e.g., fingerprint or face recognition) to unlock access to the tokens. This prevents unauthorized access and ensures the tokens remain secure even if someone gains physical or remote access to your device.
- Keep password generation and 2FA codes separate; do not use your password manager to generate 2FA codes. Otherwise, if the password manager is compromised, it could render the 2FA ineffective, allowing unauthorized access to your accounts.
- Encourage community members to adopt these practices as well.

### Phishing Awareness

- Educate members on recognizing and reporting phishing attempts.
- Clearly communicate to community members that your team will never send the first direct message to them. This is important because attackers often impersonate team members and initiate direct messages to trick users into believing they are legitimate, thereby gaining their trust and potentially compromising their security.
- Publicly define all official communication channels used by your organization.  

Refer to the [**Security Awareness framework**](../awareness/README.md) to learn more about social engineering techniques and security training best practices.

### Operational Security (OpSec)

- Be mindful of the devices you use to manage community channels. Malware or compromised hardware can give attackers an entry point.
- Regularly update software, run antivirus checks, and avoid installing untrusted applications that may compromise your security.

For a comprehensive understanding of Operational Security, including additional strategies and guidelines, please refer to the dedicated [**Operational Security framework**](../operational-security/README.md).

### Emergency Response Plan

- Prepare a clear protocol for handling security incidents, including how to quickly remove compromised accounts and warn community members.
- Adopt a proactive mindset: it's not a matter of if but when a breach will occur. Having a plan in place helps you act decisively and contain damage.

As part of the communication team, it is crucial to know when and how to communicate effectively during an incident. This involves understanding the appropriate timing and messaging to ensure clarity and prevent misinformation. For more insights on where this role fits within an incident, refer to the [**Incident Management framework**](../incident-management/README.md).
