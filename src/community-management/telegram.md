# Telegram Security Self-Audit

*Estimated time: 10 minutes*

---

Although Telegram is generally considered less secure than a messaging app with end-to-end encrypted (E2EE) enabled by default, it is widely used in the crypto community. Here are some simple steps to harden your Telegram account against hackers. For more secure messaging options, consider using [Signal](https://signal.org/), [Matrix](https://matrix.org/), or [Keybase](https://keybase.io/).

## Configure 2FA

Telegram requires you to sign up using a phone number, but you can also set up 2FA with an additional password. This is crucial for protecting your account, especially if you get SIM swapped. Follow standard best practises when it comes to creating a secure password.

![Logging in with 2FA enabled](https://prod-files-secure.s3.us-west-2.amazonaws.com/b1d29658-a003-4e92-93b6-241efdd083f6/c9d574e8-1ad9-4aad-a93f-e33bce31581b/Screen_Shot_2023-11-29_at_23.17.33.png)

1. Go to Settings > Privacy and Security > Two-Step Verification
2. Select a password and recovery email (and save it in your password manager)

## Hide Your Phone Number

To prevent hackers from collecting personal information, hide your phone number.

1. Go to Settings > Privacy and Security > Phone Number
2. Under “Who can see my phone number”, select “Nobody”
3. Under “Who can find me by my number”, select “My contacts”

## Disable P2P Calling

Telegram allows peer-to-peer calls, which can expose your IP address. Disable this feature to enhance your privacy.

1. Go to Settings > Privacy and Security > Calls
2. Under “Peer to Peer”, select “Never”

## Manage Inactive Sessions

Regularly review and manage your active sessions to ensure there are no unauthorized logins.

1. Go to Settings > Privacy and Security > Active Sessions
2. Review your active sessions. Delete any sessions you don’t recognize
3. Set Telegram to terminate inactive sessions after one month

---

## Additional Security Measures

This guide was designed for general use and common threat models. If you need more advanced security measures, consider the additional recommendations below.

### Consider Using a Different Phone Number

For additional privacy, you might want to use a different phone number for Telegram. Here are two options:

**Using a VoIP Number**

Although Telegram blocks many VoIP providers, you can try services like [Google Voice](https://voice.google.com/) or [Burner](https://www.burnerapp.com/).

**Using an Anonymous Number**

Telegram supports anonymous numbers purchased on their [blockchain](https://ton.org/). You can use [Fragment](https://fragment.com/) (US residents are IP blocked) or interact directly with the chain.

### Turn On Auto-Delete Messages

Auto-deleting messages can help prevent sensitive information from being accessed if your account is compromised.

1. Go to Settings > Privacy and Security > Auto-Delete Messages
2. Set to “After 1 week” or a time that makes sense to you.

---

## Secure Messaging Alternatives

For more secure communication, consider using:

- **[Signal](https://signal.org/):** Offers strong end-to-end encryption and robust privacy features.
- **[Matrix](https://matrix.org/):** An open network for secure, decentralized communication.
- **[Keybase](https://keybase.io/):** Provides end-to-end encrypted messaging and file sharing.

By following these steps, you can significantly enhance the security of your Telegram account.
