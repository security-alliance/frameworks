# Google Security Self-Audit

*Estimated time: 20 minutes*

---

---

Google does it all: email, file storage, search, and everything in between. You really don’t want to be losing access to your Google account, and Google knows that. Fortunately, beyond employing sophisticated algorithms to protect you from unauthorized access, they also give you a lot of different ways to protect yourself. Here are 5 simple steps you can take right now to do just that. Note that this guide isn’t intended to cover privacy from Google, like opting out of location history.

# Configure 2FA

As usual, one of the most important things you can do is properly configure your 2FA settings. You’ll want to disable SMS 2FA and enable either an authenticator app or a security key.

1. Go to https://myaccount.google.com/signinoptions/two-step-verification
2. If “Voice or text message” is enabled, disable it
3. If you don’t have an Android device, configure an “Authenticator app” or “Security Key”. If you do, you can continue to use “Google prompts”
4. Make sure you store your backup codes somewhere safe

# Remove recovery methods

Google actually employs a lot of heuristics when performing an account recovery, but having your phone number as a recovery method is still a great way to make it easier for attackers to steal your account after stealing your phone number. Email is a little trickier, but if your Google account is also your primary email, you’re probably not securing your recovery email very well and it’s just going to be a weak point for attackers to target.

1. Go to https://myaccount.google.com/signinoptions/rescuephone
2. If a recovery phone is present, remove it
3. If this Google account is your primary Google account, and you have sufficient confidence that you will never need to perform account recovery (i.e. you store your password in a password manager or somewhere else that you are reasonably confident you will always have access to)
    1. Go to https://myaccount.google.com/recovery/email
    2. If a recovery email is present, remove it

# Hide personal information

Do you have your birthday shown to everyone? What about your address or education history? Don’t make it easy for attackers to collect valuable information about you.

1. Go to https://myaccount.google.com/profile
2. For each item in your profile, check if it’s set to “Anyone”, and consider whether or not the information can be used by an attacker to impersonate you.
    1. You almost certainly want to set your birthday private if it isn’t already

# Manage active sessions

Google is so tightly integrated that just logging into Google on Chrome will also log you into the browser. Take a look through your active sessions to make sure you’re not logged in anywhere you don’t expect.

1. Go to https://myaccount.google.com/device-activity
2. If there are any sessions you don’t recognize, terminate them

# Manage OAuth applications

It’s really convenient to just click “Sign in with Google” instead of registering an account, but sometimes those OAuth connections could ask for more than just your email address. Some of the scariest permissions that an OAuth application can ask for include full access to your inbox or files. If any of them are authorized, now’s the time to figure out if you’re really ok with that app having all that access.

1. Go to https://myaccount.google.com/connections
2. For each app or service, click on it to review its permissions. If you’re not using it or the permissions are excessive, remove its access to your Google account

---

I plan on writing a separate guide with more opinionated and/or targeted advice for high-risk individuals, but until that guide is ready, it feels like something would be missing without mentioning…

# Enroll in the Advanced Protection Program

If you’re a public figure or influencer and want to take your security to the next level, you might want to enroll in the Advanced Protection Program. This is something Google offers which will apply the maximum security measures to your account, including enforcing the use of security keys when signing in, blocking unverified apps from accessing your device, and making the account recovery process much harder. It’s not for everyone, but if you have a lot to lose, it might be for you.

1. Go to https://myaccount.google.com/advanced-protection/landing
2. Complete the steps to enroll in Google APP