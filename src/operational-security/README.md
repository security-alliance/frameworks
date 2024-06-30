# Operational Security

Operational security, often abbreviated as **OpSec**, is a critical component of any comprehensive security framework. It encompasses a range of practices and measures designed to safeguard an organization's sensitive information, assets, and operations from unauthorized access, espionage, disruption, or compromise.

Operational security is not just a concern for large corporations or government agencies; it is relevant to any organization that handles sensitive information, including personal data or digital assets. The consequences of failing to implement robust OpSec measures can be severe, ranging from financial losses to reputational damage, and legal liabilities.

The level of Operational Security to apply will differ greatly depending on the risk appetite the team is willing to accept. Below you can find what most would see as a bare minimum.

## Standard Operating Environment (SOE)

- **Full-Disk Encryption**: Ensure all workstations used by the team are using full-disk encryption and authentication.
- **Workstation Security**: Never leave workstations unlocked and unattended.
- **Automatic Updates**: Ensure workstations and applications such as browsers are configured to automatically apply important patches and updates.
- **Anti-Malware Software**: Operating Systems commonly affected by malicious software should have anti-malware software installed and running.
- **Secure Browser Plugins**: Ensure the plugins you use for your browser are secure.
- **Least Privilege Principle**: Avoid using an Administrator account for day-to-day activities.
- **Regular Backups**: Ensure backups are taken on all systems that store important data.
- **Disable Macros**: Disable macros on Office products.
- **Border Security Awareness**: Some countries may require you to decrypt your phone and laptop when entering their border and may take disk images. Ensure there is no sensitive data on the phone or laptop when this happens.
- **Compromised Device Protocol**: If a device has been left unlocked with a third party having access without you seeing what they did (e.g., at an airport security check), treat it as having been compromised.

## Social Engineering

- **USB Storage Devices**: Random USB storage devices should not be plugged into your devices. Dropping malicious USB sticks and hoping for someone to pick them up and insert them into their computer is a [real threat](https://www.pcmag.com/how-to/dont-plug-it-in-how-to-prevent-a-usb-attack). On the subject of USB, do not plug in your device into an untrusted charger (e.g., on a bus or airplane) without a data blocker.
- **Phishing Awareness**: Do not click on links from untrusted sources, as they may lead to malicious websites or legitimate websites that have been compromised. In the event that you’re asked to take action on a website through, for example, email, visit the website manually (e.g., discord.com) rather than clicking the link.
- **QR Code Caution**: Avoid scanning QR codes as they could potentially contain exploits.
- **Pop-Up Software Installations**: Be wary of websites pushing pop-ups that make it seem that you need to install software to upgrade or secure your computer, these are often malware.
- **Suspicious Messages**: If you receive a suspicious message, try reaching out to the person via a different channel.

## Passwords

- **Unique Passwords**: Do not reuse passwords across services as it increases the risk of multiple accounts being compromised when one service is breached. Instead, use a password vault that can generate complex, random, and unique passwords for each service.
  - While browsers provide password vaults with passwords, it is recommended to use an external password vault with improved security features.
- **Breach Notifications**: Check if your email has been in any breach on [Have I Been Pwned](https://haveibeenpwned.com/) and set up notifications for future breaches. Change passwords on the services where you may have been breached.
- **Immediate Password Changes**: If you suspect a breach of your password, change it as soon as possible.
- **Multi-Factor Authentication (MFA)**: Use MFA whenever possible. It is a key measure in preventing account breaches. It is highly recommended to use a hardware token such as Yubikey to protect your accounts. If you use a mobile authenticator such as Authy to store your MFA tokens, ensure that you also set an encryption password to mitigate the risk of SIM swapping. Avoid using SMS for MFA unless there is no other option, as there are multiple cases where people have been SIM swapped and their accounts taken over. If SMS is the only option, it is still better than having no MFA enabled at all. It is recommended to not use the password manager/vault used for your passwords to store your MFA codes.

## Communications

- **Wireless Network Security**: Use WPA3 or WPA2 with AES to secure your wireless network with a strong password.
- **Local Firewall**: Enable the local firewall on your computer, preferably to also control outgoing connections.
- **VPN Usage**: Use a VPN when connected to a wired or wireless network outside your home or office.
  - If connecting to untrusted networks, go into wireless settings and “forget” the networks after finishing using them to prevent others from making you connect to fake access points.
- **Secure Messaging**: Telegram does not use end-to-end encryption by default. If secrecy is required, it is recommended to use end-to-end encrypted clients such as Signal or Keybase.
- **Secure Email**: Email is insecure by default and should be treated as postcards. If secure communication via email is required, use PGP/GPG.
  - Text messages are even less secure and it is very easy to make it appear that a text message is originating from someone who did not send it.

By following these guidelines, you can significantly enhance the security of your organization's operations and protect sensitive information from various threats.
