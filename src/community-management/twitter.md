# Twitter Security Self-Audit

*Estimated time: 15 minutes*

---

It’s really hard to get your Twitter account back once you’ve lost it, so here are 8 simple steps to make it much harder for hackers to steal your account from you (unless they have insider access, in which case you’re probably done for anyways).

# Remove your phone number

There are no good reasons to keep a phone number attached to your account, and it’s the easiest way for a hacker to get into your account after SIM swapping you. Getting verified requires you to add a phone number, but you can remove it afterward.

1. Go to https://twitter.com/settings/phone
2. If a phone number exists, remove it with “Delete phone number”

# Configure 2FA

Two-factor authentication is extremely useful to protect against hackers, but not if you’re using SMS 2FA and the hackers have access to your phone number. You should almost always prefer using an authenticator app or security key. Make sure you’ve stored your backup codes somewhere secure.

1. Go to https://twitter.com/settings/account/login_verification
2. Make sure “Text message” is disabled
3. Make sure either “Authentication app” or “Security key” is enabled
    1. If you choose an authentication app, you can store your TOTP secret in 1Password or Google Authenticator (but make sure to disable [sync](https://retool.com/blog/mfa-isnt-mfa))
    2. If you choose security keys, you’ll probably want two at minimum in case one of them dies. I recommend [Yubico](https://www.yubico.com/us/product/yubikey-5-series/yubikey-5-nfc/) keys - they’re expensive but worth it
4. Select “Backup codes”, then generate a new backup code. Write this down somewhere safe (or honestly, just put it in your password manager too)

# Revoke access from delegated accounts

Twitter allows you to delegate access to your account to other accounts. If your account was previously compromised, this is a sneaky way for attackers to maintain access to your account even after you recover control.

1. Go to https://twitter.com/settings/delegate/members
2. For every account, if you don’t recognize it, click “Remove from group”

# Enable password reset protect

Twitter offers an option to require users to enter the email or phone number (or both) associated with an account before being able to request a password reset. This means hackers need to know your email instead of being given a hint. It makes a huge difference!

![*Password reset protect is disabled*](https://prod-files-secure.s3.us-west-2.amazonaws.com/b1d29658-a003-4e92-93b6-241efdd083f6/6fb46280-6044-47aa-8f02-90e3cd81c110/twitter.com_i_flow_password_reset_input_flow_data22requested_variant3A3D227D.png)

*Password reset protect is disabled*

![*Password reset protect is enabled*](https://prod-files-secure.s3.us-west-2.amazonaws.com/b1d29658-a003-4e92-93b6-241efdd083f6/77165025-2f3d-48a9-9438-a533ad0797a3/1.png)

*Password reset protect is enabled*

1. Go to https://twitter.com/settings/security
2. Make sure “Password reset protect” is enabled

# Revoke access from unnecessary apps

You might’ve connected Twitter with various apps (such as the ones that generate those Twitter friend circle pictures). Do those apps really need to be able to send tweets as you or follow other users like you? The answer is no.

1. Go to https://twitter.com/settings/connected_apps
2. For each app, check the permissions that it has. If it can act on your behalf, consider removing it with “Revoke app permissions”
    1. Of course, you may be using social media management software, which needs permission to act on your behalf. Make sure that the software is reputable

# De-authorize inactive or unrecognized sessions

You’ve probably logged into Twitter from a bunch of places. Maybe you used a friend’s phone to send a quick tweet. Now’s the time to sign out any session that you don’t need.

1. Go to https://twitter.com/settings/sessions
2. For every session under “Log out of other sessions”, see if you recognize the device and if it’s been active recently. If not, click the device and click “Log out of the device shown”

# Ensure you’re using an up-to-date email

Did you change emails since you made your Twitter account? That old email is an easy target for hackers. Make sure you’re using your latest email so you get security alerts.

1. Go to https://twitter.com/settings/email
2. If the email being used is not an up-to-date email, update it

# Change your password

When was the last time you changed your password? If it’s been a while, let’s take the opportunity to do it right now. It should be straightforward if you’re using a password manager, which you *are* using, right?

1. Go to https://twitter.com/settings/password
2. Change your password