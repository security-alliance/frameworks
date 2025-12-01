<div align="center"> <img src="../../../images/guides/discord.svg" alt="Discord Logo" width="64" height="64"> <h2><a href="https://discord.com/" target="_blank" rel="noopener noreferrer">Discord</a> Configuration Guide</h2> </div>

## Server Settings

- [ ]  Review **Integrations**
    - [ ]  Remove any unnecessary integrations & reevaluate necessity of integrations with excessive permissions
    - [ ]  Restrict command permissions of integrations where possible (Manage > Roles & Members / Channels / Command Overrides)
    - [ ]  Confirm that all all bots and apps are [**Verified**](https://support-dev.discord.com/hc/en-us/articles/23926564536471-How-Do-I-Get-My-App-Verified)
    - [ ]  Review **Webhooks** (Integrations > Webhooks)
        - [ ]  Remove any unnecessary webhooks & reevaluate necessity of webhooks with excessive permissions [[1]](#integration-security)
- [ ]  Review **Roles**
    - [ ]  Remove any lingering or overly broad permissions, and any roles with excess or unintended members
        - [ ]  Review admins role members (high-privilege roles with the **Administrator** permission)
        - [ ]  Review bot role permissions and that members list contains only the bot user
        - [ ]  Review mod role permissions and members list
        - [ ]  Review user roles permissions [[2]](#role-permissions)
- [ ]  Review **Safety Setup**
    - [ ]  **Raid Protection and CAPTCHA**
        - [ ]  Activity Alerts > **Enabled**
        - [ ]  CAPTCHA suspicious accounts before they are able to join > **Enabled**
        - [ ]  CAPTCHA all accounts before they are able to join > **Enabled**
    - [ ]  **DM and Spam Protection**
        - [ ]  Verification Level > At least **Medium**
        - [ ]  Hide DMs from suspicious users > **Enabled**
        - [ ]  Filter DMs from unknown users > **Enabled**
        - [ ]  Warn members before they visit outbound links > **Enabled**
        - [ ]  Hide all messages from and delete suspected spammers > **Enabled**
    - [ ]  **AutoMod**
        - [ ]  Enable and configure basic **Content** moderation to prevent spam
        - [ ]  Set the **Explicit image filter** to filter messages from all members
    - [ ]  **Permissions**
        - [ ]  Require 2FA for moderator actions > **Enabled**
        - [ ]  Remove risky permissions from @everyone > **Enabled** [[3]](#safety-features)
- Additional Recommendations:
    - Set up [account leveling](https://mee6.xyz/en/tutorials/how-to-use-levels-plugin-on-your-discord-server) for new members for gradually enabling permissions
    - Regularly review server audit logs for admin and mod actions
        - Audit logs can be output [to a private channel](https://help.mee6.xyz/support/solutions/articles/101000475709-how-to-use-audit-logs-to-track-your-members-actions) for easier monitoring
    - Discord servers should not be used for any confidential communication (i.e. any admin discussions beyond the scope of server moderation) - even restricted channels and DMs are not end-to-end encrypted.

---

## Notes

### <a id="integration-security"></a>[1] Integration Security
Integrations and webhooks add 3rd party risk and permission misconfiguration risk. Ensure that permissions are correct, and either remove external integrations or understand the risk they present.

### <a id="role-permissions"></a>[2] Role Permissions
Risky permissions to look out for include: **Manage Channels**, **Manage Roles**, **Manage Webhooks**, **Manage Server**, and **Administrator**.

**Administrator** should ideally be reserved for a single admin role with minimal members. It is recommended to have no more than 2-3 admins with this privilege in order to reduce risk due to account compromise and insider threats, but to retain some redundancy.

Bots often require **Administrator** permissions with no flexibility. In these cases, it is recommended to mitigate this risk by monitoring the Discord audit logs frequently or to create alerts on a private channel to notify when admin permissions are exercised within the server.

Permissions can also be set at the channel level. It is important to check your private channels for any permission overrides that may have been set!

### <a id="safety-features"></a>[3] Safety Features
Activity alerts notify on anomalous DM activity, which could indicate your community is being targeted by scammers or social engineering attackers.

Raid Protection and CAPTCHA can also be satisfied by a bot, if preferred over Discord's built-in functionality.

Hiding/filtering DMs between server members is recommended to prevent scams, spam, and social engineering of your users.

In the event of a security incident, Discord provides [**Security Actions**](https://support.discord.com/hc/en-us/articles/17439993574167-Activity-Alerts-Security-Actions#h_01HAD80CK67WF59GDGR7XGVAN8) for pausing invites and DMs to allow you to protect your community while responding to ongoing threats.
