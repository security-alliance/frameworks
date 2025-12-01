<div align="center"> <img src="../../../images/guides/telegram.svg" alt="Telegram Logo" width="64" height="64"> <h2><a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">Telegram</a> Configuration Guide</h2> </div>

## Individual Account Settings

- Account Settings:
    - Privacy & Security >
        - Security >
            - [ ]  Two-Step Verification > **On**
                - Do not set a password hint, do add a recovery email
            - [ ]  Local passcode > **On** (recommended)
            - Active sessions >
                - [ ]  Review and delete all unused sessions
                - [ ]  Terminate old sessions > **1 month**
        - Privacy >
            - [ ]  Phone Number > Who can see my phone number > **Nobody**
            - [ ]  Phone Number > Who can find me by my number > **My Contacts**
            - [ ]  Phone Number > Exceptions > Remove all
            - [ ]  Last Seen & Online > Who can see my timestamp > **Nobody**/**My Contacts**
            - [ ]  Last Seen & Online > Exceptions > Remove all
            - [ ]  Date of Birth > Who can see my date of birth > **Nobody**
            - [ ]  Date of Birth > Exceptions > Remove all
            - [ ]  Calls > Who can call me > **Nobody**/**My Contacts**
            - [ ]  Calls > Exceptions > Remove all
            - [ ]  Calls > Peer-to-peer > Use peer-to-peer with > **Nobody**/**My Contacts**
                
                > **Note**: Peer-to-peer calls leak your IP address to callers. Set to **Nobody** to preserve anonymity
                
            - [ ]  Calls > Peer-to-peer > Exceptions > Always allow > Remove all
            - [ ]  Groups & Channels > Who can add me to groups and channels > **Nobody**/**My contacts**
            - [ ]  Groups & Channels > Exceptions > Remove all
            - [ ]  Voice Messages > Who can send me voice messages > **Nobody**/**My contacts**
            - [ ]  Voice Messages > Exceptions > Remove all
            - [ ]  Messages > Who can send me messages > **My Contacts and Premium Users**
        - [ ]  New chats from unknown users > Archive and Mute > **Enabled**
        - [ ]  Bots and website > **Clear Payment and Shipping Info**
    - Advanced >
        - [ ]  Automatic media download > Disable all types in all cases
            
            > **Note**: Automatic media download leaves you exposed to advanced malware attacks
            
        - [ ]  Version and updates > Update automatically > **Enabled**
        - [ ]  Version and updates > Install beta versions > **Disabled**

> **Authentication Guidelines**: When establishing a secret chat, [compare the encryption keys](https://core.telegram.org/techfaq#q-how-are-secret-chats-authenticated) outside of telegram, in an established/authenticated channel, outside of telegram. When establishing a peer-to-peer (encrypted) call, [compare the emojis](https://core.telegram.org/techfaq#q-how-are-voice-and-video-calls-authenticated) in an established/authenticated channel, outside of telegram. These are your defenses against man-in-the-middle attacks. You **must** confirm these details if using Telegram for private communications. That said, it is suggested to use a secure platform like [Signal](https://signal.org/) for confidential communication.
