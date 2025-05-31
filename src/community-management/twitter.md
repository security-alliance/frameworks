---
tags:
  - Community & Marketing
---

# X (Twitter) Security <!-- omit in toc -->

> **Key Takeaway for Twitter (X):**  
> To secure your Twitter account, prioritize using an authenticator app or security key over SMS-based 2FA, remove your phone number, and regularly review third-party app permissions. Ensure your recovery settings are robust and frequently monitor account activity to safeguard your online presence and maintain community trust.

A compromised **X** account can harm not only you but also your community. Attackers often use phishing tactics—like SIM swaps or fake login screens—to seize control of your profile. A few simple steps can significantly reduce these risks.

Securing your Twitter account is not particularly hard or time consuming, so consider following the best practices below.

---

## Table of Contents <!-- omit in toc -->

- [X (Twitter) Security Hardening](#x-twitter-security-hardening)
  - [Remove your phone number](#remove-your-phone-number)
  - [Configure 2FA](#configure-2fa)
  - [Revoke access from delegated accounts](#revoke-access-from-delegated-accounts)
  - [Enable password reset protect](#enable-password-reset-protect)
  - [Revoke access from unnecessary apps](#revoke-access-from-unnecessary-apps)
  - [Log Out of Unnecessary Sessions](#log-out-of-unnecessary-sessions)
  - [Verify Your Email is Current](#verify-your-email-is-current)
  - [Refresh Your Password](#refresh-your-password)
  - [Additional Best Practices](#additional-best-practices)

## X (Twitter) Security Hardening

### Remove your phone number

There are no good reasons to keep a phone number attached to your account, and it’s the easiest way for a hacker to get into your account after SIM swapping you. Getting verified requires you to add a phone number, but you can remove it afterward.

1. **Go to:** X Profile > Settings & Privacy > Your Account > Account Information > Phone or [Phone Settings](https://x.com/settings/phone)
2. **Remove:** Phone > Click **Delete phone number** if one is listed.

After removing your phone number, it's crucial to navigate to Settings > Security and Account Access > Security > Two-Factor Authentication > Backup Codes. Backup codes are a way to log into an account if you can't use your primary two-factor authentication (2FA) method, such as an authenticator app. They act as a temporary, single-use code to verify your identity when the usual 2FA method is unavailable. Store these codes offline, just like your seed phrase. Anyone with these codes can bypass your 2FA, so it's extremely important to write them down and keep them secure. Remember, when you change your password, new backup codes are generated.

### Configure 2FA

Two-factor authentication is a great way to keep hackers at bay, but it's not foolproof if you're relying on SMS 2FA and someone gets hold of your phone number. It's generally better to use an authenticator app or a security key. Also, ensure your backup codes are stored safely, ideally printed on paper rather than saved on your device.

1. **Go to:** X Profile > Settings & Privacy > Security & Account Access > Security > Two-Factor Authentication or [Login Verification](https://x.com/settings/account/login_verification)  
2. **Disable:** Uncheck **Text message**
3. **Enable:** Choose **Authentication app** and/or **Security key**
    1. If using an authentication app, store your secret (TOTP) in a reliable app ([Authy](https://www.authy.com/), [Google Authenticator](https://apps.apple.com/us/app/google-authenticator/id388497605), but disable [syncing](https://retool.com/blog/mfa-isnt-mfa) for added security.  
    2. If using security keys, keep at least two (e.g., from [Yubico](https://www.yubico.com/)) in case one fails.  
4. Under **Additional methods**, below, select **Backup codes** and create a new backup code. Store this code securely, offline, ideally in a physical format like a printout, to ensure that if one device is compromised, the code remains safe.

### Revoke access from delegated accounts

It's possible to allow other accounts to access your Twitter account. If your account was previously compromised, attackers could exploit this feature to maintain access even after you've regained control.

1. **Go to:** X Profile > Settings & Privacy > Security & Account Access > Delegate > Members You've Delegated or [Delegate Members](https://x.com/settings/delegate/members)  
2. **Review:** Remove any unfamiliar accounts.

### Enable password reset protect

Twitter provides a feature that requires users to input their email or phone number linked to the account before they can initiate a password reset. This adds an extra layer of security by ensuring that hackers must know your email, rather than receiving a hint.

1. **Go to:** X Profile > Settings & Privacy > Security & Account Access > Security > Additional Password Protection or [Security Settings](https://x.com/settings/security)  
2. **Toggle On:** Check **Password reset protect**.

### Revoke access from unnecessary apps

It's possible that you've linked your Twitter account to several apps or even a malicious app, and some might have more permissions than necessary. To check and manage these permissions, follow these steps:

1. **Go to:** X Profile > Settings & Privacy > Security & Account Access > Apps & Sessions > Connected Apps or [Connected Apps](https://x.com/settings/connected_apps)  
2. **Review:** Check each app’s permissions and **Revoke** if it’s no longer needed or trusted.

### Log Out of Unnecessary Sessions

It's possible you've accessed Twitter from devices you don't regularly use, like a friend's phone. Review your active sessions and log out of any that are unfamiliar or unnecessary.

Old sessions on unfamiliar devices can be risky.

1. **Go to:** X Profile > Settings & Privacy > Security & Account Access > Apps & Sessions > Sessions or [Sessions](https://x.com/settings/sessions)
2. **Log Out:** For any device or session you don’t recognize.

### Verify Your Email is Current

If you've changed your email since creating your Twitter account, ensure your current email is linked to receive security alerts and updates.

1. **Go to:** X Profile > Settings & Privacy > Your Account > Account Information > Email or [Email Settings](https://x.com/settings/email)  
2. **Confirm:** Update to your current email if needed.

### Refresh Your Password

Using a unique password for Twitter is crucial. If you haven't set one, now is the time to do so.

1. **Go to:** X Profile > Settings & Privacy > Your Account > Account Information > Change Your Password or [Password Settings](https://x.com/settings/password)  
2. **Change:** Select a long, complex password.
3. Note: When you change your password, your backup code typically changes, so ensure to write down the new backup code offline.

### Additional Best Practices

- **Disable Email and Phone Discoverability**  
  - **Go to:** X Profile > Settings & Privacy > Privacy & Safety > Discoverability & Contacts > Discoverability or [Discoverability and Contacts](https://x.com/settings/contacts)
  - It is recommended to turn both email and phone discoverability off.

- **Privacy & Safety Settings:**  
  - **Go to:** X Profile > Settings & Privacy > Privacy & Safety > Direct Messages or [Privacy & Safety](https://x.com/settings/privacy_and_safety),
  - Consider disabling “Allow message requests from everyone” to limit spam DMs and phishing attempts and enabling "Filter low-quality messages".
  
- **Monitor for Suspicious Alerts:**  
  - X (Twitter) may notify you about unusual activity. If you suspect a breach,log out of all sessions, revoke suspicious apps, and change your password immediately.

- **Use Unique Recovery Methods:**  
  - If you choose to use a recovery phone number, which we generally strongly advise against, make sure it isn't your main mobile number. Instead, use a separate VoIP or alternative line to minimize the risk of SIM swapping.

- Do not trust any email about possible 'suspension' or 'breach' of rules about your X account via email, always go to the srouce, never click links in emails.
- If you received an email about any content moderation, login, or any email from "X"; ensure the email is from "@x.com".
