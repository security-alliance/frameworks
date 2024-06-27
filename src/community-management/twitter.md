# Twitter Security Self-Audit

*Estimated time: 15 minutes*

---

It’s challenging to recover a lost Twitter account, so here are eight simple steps to make it much harder for hackers to steal your account. Note that if hackers have insider access, these steps may not be sufficient.

## Remove Your Phone Number

Keeping a phone number attached to your account is very risky, as it’s the easiest way for a hacker to gain access after SIM swapping you. This has been quite common in the past, so it is highly recommended to remove it if you have done added. Getting verified requires adding a phone number, but you can and should remove it afterward.

1. Go to [Twitter Phone Settings](https://twitter.com/settings/phone)
2. If a phone number exists, remove it with “Delete phone number”

## Configure 2FA

Two-factor authentication is crucial for protecting against hackers, but definitely avoid SMS 2FA. Use an authenticator app or preferably a hardware security key instead. Ensure your backup codes are stored securely on paper and not on your computer as it defeats the purpose.

1. Go to [Twitter 2FA Settings](https://twitter.com/settings/account/login_verification)
2. Disable “Text message”
3. Enable either “Authentication app” or “Security key”
    1. If using an authenticator application, it is recommended to use it on a separate device (e.g. a phone) app, such as Authy (with an encryption password set) or Google Authenticator (disable [sync](https://retool.com/blog/mfa-isnt-mfa))
    2. If using security keys, have at least two. Yubico [YubiKey](https://www.yubico.com/us/product/yubikey-5-series/yubikey-5-nfc/) keys are common. Purchase these from approved vendors.
4. Generate new backup codes and store them securely on printer paper. If storing on your computer it means that someone with access to your computer could potentially read the backup codes and access your account.

## Revoke Access from Delegated Accounts

Twitter allows delegation of account access to other accounts. Ensure no unauthorized accounts have access.

1. Go to [Twitter Delegated Access](https://twitter.com/settings/delegate/members)
2. Remove any unrecognized accounts from the group

## Enable Password Reset Protection

This option requires users to enter the email or phone number associated with the account before requesting a password reset, making it harder for hackers.

![Password reset protect is disabled](https://prod-files-secure.s3.us-west-2.amazonaws.com/b1d29658-a003-4e92-93b6-241efdd083f6/6fb46280-6044-47aa-8f02-90e3cd81c110/twitter.com_i_flow_password_reset_input_flow_data22requested_variant3A3D227D.png)
*Password reset protect is disabled*

![Password reset protect is enabled](https://prod-files-secure.s3.us-west-2.amazonaws.com/b1d29658-a003-4e92-93b6-241efdd083f6/77165025-2f3d-48a9-9438-a533ad0797a3/1.png)
*Password reset protect is enabled*

1. Go to [Twitter Security Settings](https://twitter.com/settings/security)
2. Ensure “Password reset protect” is enabled

## Revoke Access from Unnecessary Apps

Review apps connected to your Twitter account and remove any that don't need access.

1. Go to [Twitter Connected Apps](https://twitter.com/settings/connected_apps)
2. Check each app's permissions. If it can act on your behalf and is unnecessary, revoke its permissions
    1. Ensure any social media management software is reputable if it requires such permissions

## De-authorize Inactive or Unrecognized Sessions

Sign out of any sessions that you don’t need or recognize.

1. Go to [Twitter Sessions](https://twitter.com/settings/sessions)
2. Log out of any unrecognized or inactive sessions

## Ensure You’re Using an Up-to-Date Email

Make sure your account uses your current email address to receive security alerts.

1. Go to [Twitter Email Settings](https://twitter.com/settings/email)
2. Update the email if it is not up-to-date

## Change Your Password

If you have reused your twitter password elsewhere then it's time to update it to a unique one. Use a password manager to create and store a strong, unique password.

1. Go to [Twitter Password Settings](https://twitter.com/settings/password)
2. Change your password

By following these steps, you can significantly enhance the security of your Twitter account and protect it from unauthorized access.
