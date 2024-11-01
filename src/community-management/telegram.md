# Telegram Security
tag: [Community & Marketing]

Telegram, in its default mode, is actually not providing end-to-end encryption between users. If it's important to have end-to-end encryption, using a messenger such has [Signal](https://signal.org/) should be used instead. With that said, Telegram is popular in the crypto ecosystem, and as such you can find some best practices below when it comes to securing Telegram.

## Standard Security

### Configure 2FA

Telegram might require you to sign up using a phone number, but you can also set up 2FA in the form of an additional password. This is probably the most important thing you could do, and is the only thing that will keep your Telegram account safe if you get SIM swapped. Just make sure you don’t reuse this password!

![*Logging in with 2FA enabled*](https://prod-files-secure.s3.us-west-2.amazonaws.com/b1d29658-a003-4e92-93b6-241efdd083f6/c9d574e8-1ad9-4aad-a93f-e33bce31581b/Screen_Shot_2023-11-29_at_23.17.33.png)

**Logging in with 2FA enabled**

1. Go to Settings > Privacy and Security > Two-Step Verification
2. Select a password and recovery email (and save it in your password manager)

### Hide your phone number

Don’t make it easy for threat actors to collect your personal information. Having your phone number publicly visible, or even to people you have added to your contacts, is often completely unnecessary. To disable this, change the following:

1. Go to Settings > Privacy and Security > Phone Number
2. Under “Who can see my phone number”, select “Nobody”
3. Under “Who can find me by my number”, select “My contacts”

### Disable P2P calling

Telegram allows for peer-to-peer calls, which means that calls will connect you directly with the other user instead of via Telegram’s servers. If you’re not using E2EE for your chats, you probably prefer hiding your IP over potential surveillance by Telegram.

1. Go to Settings > Privacy and Security > Calls
2. Under “Use peer-to-peer with”, select “Nobody”

### Manage inactive sessions

Telegram allows you to automatically terminate inactive sessions, but you should also verify that all your active sessions are legitimate.

1. Go to Settings > Privacy and Security > Active sessions
2. Review your active sessions. Delete any sessions you don’t recognize
3. Set Telegram to terminate inactive sessions after one month


## Extended Security

### Consider using a different phone number

If you’ve followed the guide above, you should be safe using your primary number for Telegram. However, there are some legitimate reasons why you might still want to use a different number, such as: not wanting your contacts to find out that you use Telegram, or not wanting to accidentally leak your number if you show your Telegram profile to someone. If this is the case, you have two options.

**Using a VoIP number**

Telegram doesn’t really like it when you do this and blocks a lot of VoIP providers, but there are services out there that you can use to purchase a burner number to use exclusively with Telegram. [Google Voice](https://voice.google.com/) or [Burner](https://www.burnerapp.com/) might work here.

**Using an anonymous number**

As of December 2022, Telegram added support for anonymous numbers purchased on their [blockchain](https://ton.org/). You can also use [Fragment](https://fragment.com/).

### Turn on auto-delete messages

Remember that picture you sent your friend 8 months ago? You might not, but if an attacker manages to hijack your account, they’ll certainly appreciate all the breadcrumbs you’ve left behind for them.

1. Go to Settings > Privacy and Security > Auto-Delete Messages
2. Set to “After 1 week” or a time which matches your risk appetite.
