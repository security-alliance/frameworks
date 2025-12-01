<div align="center"> <img src="../../../images/guides/telegram.svg" alt="Telegram Logo" width="64" height="64"> <h2><a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">Telegram</a> Configuration Guide</h2> </div>

## Channel & Group Settings

#### Channel Settings
- Open channel > click channel name > **Channel settings**
    - [ ]  Sign messages > **Enable** (if non-repudiation is desired)
    - [ ]  Administrators > Review the list and remove any unnecessary

#### Group Settings
- Open group > click group name > click three dots > **Manage group**
    - [ ]  Channel type > **Private** (if public discoverability is not necessary)
    - [ ]  Channel type > Content protection > **Enabled** (if confidentiality is needed)
    - [ ]  Sign messages > **Enabled**
    - [ ]  Chat history for new members > **Hidden**
        - This is not available if Topics are enabled
    - **Permissions:**
        - [ ]  Send media > should be restricted appropriately
            - At minimum, **Files** and **Embed links** should be disabled
        - [ ]  Add members > **Disabled** (if not necessary) [[1]](#member-control)
        - [ ]  Pin messages > **Disabled**
        - [ ]  Change group info > **Disabled**
        - [ ]  Slow mode > At least **10s**, if not obstructive
        - [ ]  Exceptions should be restricted to valid use cases
            - Team members should have exceptions granted to them for these rather than them being admins, when possible
    - [ ]  **Invite links** > Review and remove unnecessary
        - Links should be limited by time period or number of users, when not obstructive
    - [ ]  **Administrators** > Review and remove unnecessary & review permissions of each admin
        - Again, it is recommended to add exceptions for team members rather than add them as admins, when possible
        - Remove unnecessary permissions, especially **Add new admins**
        - **Aggressive Anti-Spam** > **Enabled**
    - [ ]  **Members** > Review and remove unnecessary (If a confidential channel)

#### Additional Recommendations
- Add a disclaimer in the description and/or as a pinned message to your channel that states that you will not DM users, and that support will only be offered via the public channel and dedicated support channels [[2]](#security-disclaimers)
- Add a suffix to admin usernames, for example: "MyName | will never DM you"
- Each admin must follow the guidance for securing their individual accounts

---

## Notes

### <a id="member-control"></a>[1] Member Control
Restricting the ability to add only to admins allows for revocability of invite links to stop raids or to freeze the channel if needed.

### <a id="security-disclaimers"></a>[2] Security Disclaimers
Telegram channels and groups should not be used for any confidential communication, as they are not end-to-end encrypted, except for 1:1 "secret chats" (which should not be commingled with unencrypted chats).

Example disclaimer: "We will NEVER message you directly to offer support or assistance with our product. For support, please email us at support@<company>.com. DO NOT interact with anyone DMing and claiming to be a <company> member. Please report scams to reports@<company>.com"
