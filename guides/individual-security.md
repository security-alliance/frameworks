<div align="center">
  <h1>Personal Security Checklist</h1>
  <p><em>A checklist guide for individuals to maximize their OpSec as part of an organization</em></p>
</div>

---
## Overview

Your personal security directly impacts your organization's security posture. Compromise of an individual can allow attackers to easily infect other organization members via trusted channels, code repos, and shared files. This checklist serves as a comprehensive list of best practices that all individuals should follow to ensure their personal security is strong to protect themselves and the organizations they are a part of.

---
# Work Devices
### Device Hardware
- [ ] Organization-related activities and work must be performed on a dedicated device (e.g. a separate laptop only for work tasks)
- [ ] Laptops and phones should be obtained through verified supply chains:
	- Direct from manufacturer
	- Via a physical trusted retailer
	- NOT from a third party or reseller
- [ ] Devices should have biometric login options, secure boot, and support for full disk encryption
### Device Configuration
- [ ] Full disk encryption must be enabled on all work devices
- [ ] All work devices must have basic antivirus software enabled (built-in OS antivirus is acceptable, but must be properly enabled without any rule exceptions)
- [ ] Inactivity screen locks must be enabled, with a period of no more than 5 minutes before requiring password re-entry
- [ ] OS accounts for daily usage should not have administrator privileges
### Device Usage
- [ ] Personal devices must never be used for work activities or have access to organization accounts
- [ ] All security software, browsers, and operating systems must be regularly updated as soon as new releases are available that include to security fixes
- [ ] Biometric authentication and SSO should be used in non-private spaces to prevent password leakage to cameras and onlookers
- [ ] Privacy screens should be used when working in public spaces to prevent visual eavesdropping
### Network Security
- [ ] Home WiFi networks should have recommended security settings:
	- [ ] A strong password (at least 20 characters)
	- [ ] Router and modem updated to the latest firmware
	- [ ] Rotated admin login credentials (not the default for the device)
	- [ ] Have a separate network for guest devices
	- [ ] Use WPA3/WPA2 encryption (AES, not TKIP)
	- [ ] Disable WPS
	- [ ] Disable remote management
- [ ] A secure DNS provider should be configured in network settings on your devices (e.g. Cloudflare's [1.1.1.1](https://www.cloudflare.com/learning/dns/what-is-1.1.1.1/))
- [ ] A trusted VPN profile should be configured for use when on any public Wi-Fi
- [ ] All work devices must have active network monitoring in place (e.g. [Little Snitch](https://www.obdev.at/products/littlesnitch/), [Lulu](https://objective-see.org/products/lulu.html), or [Glasswire](https://www.glasswire.com/))
	- [ ] Network monitoring tools must track outbound connections and block all traffic by default, unless explicitly approved
- [ ] OS network firewalls must be enabled with no rule exceptions
# Wallets & Transactions
### Hardware Wallets
- [ ] Hardware wallets should be obtained through verified supply chains:
	- Direct from manufacturer
	- Via a physical trusted retailer
	- NOT from a third party or reseller
- [ ] Wallet device authenticity must be cryptographically verifiable upon receipt to ensure firmware integrity (i.e. as part of the initial set up process)
- [ ] Hardware wallets must have a large screen capable of displaying complete transaction data
	- [ ] Clear signing technology is recommended, but is not a silver bullet and should not replace thorough transaction scrutiny
- [ ] Wallets should have secure PIN entry with randomized entry layouts OR biometric login
	- [ ] PIN entry must have time-based lockouts to prevent brute force attacks
	- [ ] PINs must be at least 6 digits long
- [ ] Wallets should be physically secured in a safe or secret hiding place when not in use
#### Wallet Backups
- [ ] Seed phrases must be stored on disaster-resistant, physical media. 
- [ ] Seed phrases must not be stored in plain text - importing them must require a passphrase, additional word, or be scrambled with a random word order; with the secret stored in a password manager
- [ ] Private keys and seed phrases must be generated on wallet devices and must never be exported (they should never touch another device in any form - no pictures stored or backups in a password manager)
	- [ ] Alternatively, seed phrases can be sharded (requiring N of M shards to recompose) - e.g. by using Shamir's Secret Sharing algorithm, with each shard recommended to be shared with a trusted guardian (3rd party custodian service, family members, password manager, personal physical media, etc.)
#### Multi-sig Participation
- [ ] Multi-sig operations must be performed on devices dedicated only to those transactions and transaction verification tools (i.e. you should have a laptop dedicated only to transacting)
	 - [ ] Signing devices must be operated on private, authenticated networks or over trusted VPNs
	 - [ ] Active network monitoring should be in place (e.g. Little Snitch, Lulu, or GlassWire - with default deny on all network requests and only the minimum necessary IPs to execute transactions allowed)
# Operations
### Browser Security
- [ ] Separate browsers should be used for different browsing trust levels:
	- [ ] One browser for session-based, sensitive activities
	- [ ] Another browser for opening links and temporary browsing
	- [ ] Wallet extensions should only be used on a third browser dedicated only to transacting
- [ ] Review browser extension permissions and minimize to necessary functions only. Consider removing extensions that are overly permissive (e.g. can rewrite page content, read all websites, access to file system, etc.)
- [ ] Extensions must be obtained only from official stores (Chrome Web Store, Firefox Add-ons, Microsoft Edge Add-ons, etc.) - NEVER from alternative platforms or as user-installed extensions (i.e. manually installed from file or git repo)
### Secure Communication
- [ ] Externally verifiable PGP keys should be configured to sign emails so others can verify their authenticity
	- [ ] Publish your PGP key publicly and ensure your team members have it
- [ ] End-to-end encrypted channels should be used for confidential communications and coordination of sensitive operations (Signal is recommended)
- [ ] Files received from outside the organization must only be opened in a secure sandbox or after being sanitized (e.g. via [Dangerzone](https://dangerzone.rocks/), [VirusTotal](https://www.virustotal.com/gui/home/upload), [Google Drive](https://support.google.com/drive/answer/141702), or on a temporary virtual machine)
- [ ] Internally shared files must be distributed via a dedicated file sharing platform (Google Drive/Docs, Dropbox, Notion, etc.), and never sent as email or chat attachments (to prevent social engineering malware delivery vectors)
- [ ] Shared links should always be manually navigated to or re-typed (to avoid homograph attacks)
### Workspace Requirements
- [ ] Sensitive operations must be performed in a dedicated workspace that is set up to prevent unauthorized visual access to screens and activities, and is isolated from common areas that others could access
- [ ] Organizational devices and materials must be securely stored when not in use
- [ ] Privileged operations should never be performed in public spaces
- [ ] Computers must be locked when unattended
# Authentication
### Password Management
- [ ] All passwords and secrets should be:
	- [ ] Not reused
	- [ ] 20-32 characters
	- [ ] Automatically generated with the full character set (letters, numbers, and symbols)
	- [ ] A password manager must be used (1Pass or Bitwarden recommended)
	- [ ] Password manager master passwords should be complex, and at least 20 characters with a mix of phonetic phrases, numbers, and special characters
		- [ ] [https://xkcd.com/936/](https://xkcd.com/936/)
	- [ ] Organization password manager accounts should be separate from personal password manager accounts
### Login Methods
- [ ] SSO (Single Sign-On - e.g. Log in with Google/Github/Apple) can be used for non-sensitive accounts, but should not be enabled for highly sensitive access (financial, administrative, deployments, infrastructure, etc.)
- [ ] 2FA must be enforced on all accounts
	- [ ] FIDO security keys are recommended (e.g. YubiKey), but mobile authenticator apps acceptable
	- [ ] SMS-based 2FA must never be used unless no other option is available
	- [ ] 2FA TOPT seeds should not be stored in password managers and should only be kept on a single device
- [ ] Passkeys are recommended as a primary login method when available
- [ ] SMS-based account recovery must never be enabled
### SIM Swap Mitigation
- [ ] A SIM PIN should be set to mitigate physical theft of SIM cards
- [ ] Additional number transfer security requirements should be configured through your phone provider:
	- [ ] **AT&T** - Go to your myAT&T Profile and log in > My Linked Accounts > Manage extra security for your account > turn on Extra security
	- [ ] **T-Mobile** - Add account [Takeover Protection](https://www.t-mobile.com/support/plans-features/account-takeover-protection) to your account
	- [ ] **Verizon** - Enable [Number Lock](https://myvpostpay.verizon.com/ui/acct/secure/profile/security/portsecurity). This can be done by phone, through the app, or on [their website](https://myvpostpay.verizon.com/ui/acct/secure/profile/security/portsecurity)
	- [ ] **Google Fi** - Enable [Number Lock](https://support.google.com/fi/answer/15147412?hl=en#zippy=%2Cturn-on-number-lock)
- [ ] A Signal account for your phone number should be created (even if not using Signal), to prevent account impersonation via potential SIM swap attacks
