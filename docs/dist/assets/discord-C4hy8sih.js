import{f as t,j as e}from"./index-DpRQqlfr.js";import{T as o,A as a}from"./AttributionList-MhLAVBMK.js";import{T as l}from"./TagContext-BwModeRE.js";import{T as d}from"./TagFilter-DAsfpH_J.js";/* empty css                  */const s={title:"Discord Security",tags:["Community & Marketing","Security Specialist"],contributors:[{role:"wrote",users:["mattaereal","zedt3ster","fredriksvantes"]},{role:"reviewed",users:["mattaereal"]},{role:"fact-checked",users:["nftdreww"]}]};function r(n){const i={a:"a",blockquote:"blockquote",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(l,{children:[e.jsxs(i.h1,{id:"discord-security",children:["Discord Security",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#discord-security",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsx(d,{}),e.jsx(o,{tags:s.tags}),e.jsx(i.hr,{}),e.jsx(a,{contributors:s.contributors}),e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["🔑 ",e.jsx(i.strong,{children:"Key Takeaway for Discord:"})," To secure your Discord server, focus on implementing robust access controls and enforcing two-factor authentication for all administrators. Regularly audit roles and permissions, and maintain vigilant moderation. Educate your community about security best practices to prevent unauthorized access and protect against potential threats."]}),`
`]}),e.jsx(i.p,{children:"Discord offers a variety of security features that are essential to use. Despite these, users should stay alert to threats like phishing, which can target server moderators. Such threats may appear as QR code scams, fake login screens, or misleading direct messages pretending to be from Discord support."}),e.jsx(i.p,{children:"To enhance the security of your Discord server, take into account these suggestions. They cover important aspects like server settings, roles and permissions, moderation, bots, channels, invites, member screening, logging, and other security measures."}),e.jsx(i.hr,{}),e.jsxs(i.h2,{id:"essential-security-measures",children:["Essential Security Measures",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#essential-security-measures",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.h3,{id:"server-settings",children:["Server Settings",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#server-settings",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["a) ",e.jsx(i.strong,{children:"Enable 2FA Requirement for Moderation"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Go to Server Settings > Safety Setup > Moderation"}),`
`,e.jsx(i.li,{children:'Toggle on "Require 2FA for moderation"'}),`
`,e.jsx(i.li,{children:"This ensures all moderators have an extra layer of security"}),`
`]}),e.jsxs(i.p,{children:["b) ",e.jsx(i.strong,{children:"Set Appropriate Verification Level"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Go to Server Settings > Safety Setup > Verification Level"}),`
`,e.jsx(i.li,{children:"Choose from: None, Low, Medium, High, Highest"}),`
`,e.jsx(i.li,{children:'Recommended: "Moderate" for public servers (requires users are registered on discord for longer then 5 min.)'}),`
`,e.jsx(i.li,{children:"Higher levels protect against spammers and raids"}),`
`]}),e.jsxs(i.p,{children:["c) ",e.jsx(i.strong,{children:"Enable Explicit Content Filter"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Go to Server Settings > Safety Setup > Content Filter"}),`
`,e.jsx(i.li,{children:'Set to "Scan messages from all members"'}),`
`,e.jsx(i.li,{children:"This automatically blocks messages containing explicit images in non-age-restricted channels"}),`
`,e.jsx(i.li,{children:"Age-restricted channels are exempt from this filter"}),`
`]}),e.jsxs(i.p,{children:["d) ",e.jsx(i.strong,{children:"Enable Raid Protection and CAPTCHA"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Go to Server Settings > Safety Setup > Raid Protection and Captcha"}),`
`,e.jsx(i.li,{children:"Activate all relevant settings to require CAPTCHA for new user actions"}),`
`,e.jsx(i.li,{children:"This protection uses machine learning to detect and block bot-driven join-raids"}),`
`,e.jsxs(i.li,{children:["When activated:",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Sends alerts to a specified channel"}),`
`,e.jsx(i.li,{children:"Requires CAPTCHA verification for new users for one hour after detection"}),`
`]}),`
`]}),`
`]}),e.jsxs(i.h3,{id:"roles-and-permissions",children:["Roles and Permissions",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#roles-and-permissions",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["a) ",e.jsx(i.strong,{children:"Implement Role Hierarchy"})]}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"Go to Server Settings > Roles"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"Create roles like: Cold Admin, Team, Moderator, & Verified."}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"Drag to reorder; higher roles override lower roles"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"Restructure the role hierarchy by dragging roles higher or lower in the roles list:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Cold Admin"}),`
`,e.jsx(i.li,{children:"Team"}),`
`,e.jsx(i.li,{children:"Moderator"}),`
`,e.jsx(i.li,{children:"Verified"}),`
`]}),`
`]}),`
`]}),e.jsxs(i.p,{children:["b) ",e.jsx(i.strong,{children:"Restrict Administrative Permissions"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"For each role, carefully review the 32 available permissions"}),`
`,e.jsx(i.li,{children:"Key permissions to restrict: Administrator, Manage Webhooks, Manage Server, Manage Roles, & Manage Channels"}),`
`,e.jsx(i.li,{children:"Never give Admin or Kick permissions to anyone you don't fully trust"}),`
`,e.jsx(i.li,{children:"Good permissions for moderators: Manage Channels, Manage Roles, Manage Messages, Ban Members, Delete Messages"}),`
`,e.jsx(i.li,{children:"Good permissions for members: View Channels, View audit logs, Create Invite, Manage Messages, Read Message History, Connect, Speak & Use Voice Activity, & Ban/Kick/Timeout"}),`
`]}),e.jsxs(i.p,{children:["c) ",e.jsx(i.strong,{children:"Use Channel-Specific Permissions"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Right-click on a channel > Edit Channel > Permissions"}),`
`,e.jsx(i.li,{children:"Set custom permissions for roles or members in specific channels"}),`
`]}),e.jsxs(i.p,{children:["d) ",e.jsx(i.strong,{children:'Use the "View Server as Role" Feature'})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Go to Server Settings > Roles > Select a role > View Server as Role"}),`
`,e.jsx(i.li,{children:"This allows you to see what members with a certain role can see and access"}),`
`]}),e.jsxs(i.h2,{id:"advanced-security-measures",children:["Advanced Security Measures",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#advanced-security-measures",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.h3,{id:"moderation",children:["Moderation",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#moderation",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["a) ",e.jsx(i.strong,{children:"Set Up Auto-Moderation Rules"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Go to Server Settings > AutoMod"}),`
`,e.jsx(i.li,{children:"Set up rules for: Spam, Harmful Links, Mention Spam, Inappropriate Words"}),`
`,e.jsx(i.li,{children:"Configure custom keyword filters and exempted roles"}),`
`,e.jsx(i.li,{children:"Customize the response to spam, like blocking the message, sending an alert, or timing out the member"}),`
`,e.jsx(i.li,{children:"Add to the existing automod rule to block keywords in a users name, and put Support, Bot, Admin, Tech, Helpdesk, etc."}),`
`]}),e.jsxs(i.p,{children:["b) ",e.jsx(i.strong,{children:"Configure Timeout Duration"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Go to Server Settings > Safety Setup > Timeout"}),`
`,e.jsx(i.li,{children:"Set default duration (e.g., 60 minutes)"}),`
`,e.jsx(i.li,{children:"Educate moderators on using timeouts effectively"}),`
`]}),e.jsxs(i.p,{children:["c) ",e.jsx(i.strong,{children:"Establish Clear Server Rules"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Create a #rules channel"}),`
`,e.jsx(i.li,{children:"Use Discord's built-in rules screening feature"}),`
`,e.jsx(i.li,{children:"Include sections on: Behavior, Content, Moderation Actions, Appeals Process"}),`
`]}),e.jsxs(i.h3,{id:"extra-moderation-best-practices",children:["Extra Moderation Best Practices",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#extra-moderation-best-practices",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["a) ",e.jsx(i.strong,{children:'Leverage "Default Notifications to Mentions Only"'})]}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Go to ",e.jsx(i.strong,{children:"Server Settings > Overview"})," and set ",e.jsx(i.strong,{children:"Default Notifications"})," to ",e.jsx(i.strong,{children:"Mentions Only"}),"."]}),`
`,e.jsx(i.li,{children:"Reduces potential spam notifications for members, making them more vigilant about suspicious or phishing content."}),`
`]}),e.jsxs(i.p,{children:["b) ",e.jsx(i.strong,{children:"Stay Alert to New Features & Potential Exploits"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Keep track of newly introduced features such as Threads, Scheduled Events, or Stage Channels."}),`
`,e.jsx(i.li,{children:"Configure their permissions carefully (e.g., who can start or join a Thread) to prevent abuse by spammers or scammers."}),`
`]}),e.jsxs(i.p,{children:["c) ",e.jsx(i.strong,{children:"Regularly Check Third-Party Bot Security"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Ensure bots are from reputable sources and receive frequent updates."}),`
`,e.jsx(i.li,{children:"Review bot permissions after each significant update to avoid newly introduced vulnerabilities."}),`
`]}),e.jsxs(i.h3,{id:"bots",children:["Bots",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bots",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["a) ",e.jsx(i.strong,{children:"Audit Bot Permissions"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Go to Server Settings > Integrations"}),`
`,e.jsx(i.li,{children:"Review each bot's permissions"}),`
`,e.jsx(i.li,{children:"Remove unnecessary permissions"}),`
`,e.jsx(i.li,{children:"Remove permissions for bots that ask for Admin or other permissions that aren't needed, use least privilege with permissions at the role level and channel level."}),`
`]}),e.jsxs(i.p,{children:["b) ",e.jsx(i.strong,{children:"Remove Unnecessary Bots"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Uninstall any bots that aren't actively used or needed"}),`
`]}),e.jsxs(i.p,{children:["c) ",e.jsx(i.strong,{children:"Implement Security/Moderation Bots"})]}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Consider bots like:",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Dyno for advanced moderation and logging"}),`
`,e.jsx(i.li,{children:"Carl-bot for reaction roles and custom commands"}),`
`,e.jsx(i.li,{children:"Set up security Bots"}),`
`]}),`
`]}),`
`]}),e.jsxs(i.h3,{id:"security-specific-bots",children:["Security-Specific Bots",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#security-specific-bots",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsx(i.p,{children:"Various third-party Discord bots offer valuable security and protection features, facilitating automated moderation for your server. In the sections below, we'll explore different categories of security bots and highlight popular options for each category."}),e.jsxs(i.h4,{id:"anti-impersonation-bots",children:["Anti-Impersonation Bots",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#anti-impersonation-bots",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsx(i.p,{children:"Set up custom rules to prevent other users from joining using the same username and PFP (profile picture) to impersonate you or other important members of the server. A popular bot in this category is Wick Bot."}),e.jsxs(i.h4,{id:"anti-raid-bots",children:["Anti-Raid Bots",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#anti-raid-bots",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsx(i.p,{children:"to prevent spam bots from joining your server all at once, an attack known as raiding, you can also set up bots with particular rules. Beemo is a good example of a bot in this category."}),e.jsxs(i.h4,{id:"anti-nuke-bots",children:["Anti-Nuke Bots",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#anti-nuke-bots",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsx(i.p,{children:"This is a monitoring system to observe and note any changes (spontaneous or planned) that take place in your discord server. Some key observation markers are channel and role creation/deletions, banning or kicking members, and webhook creation/deletion."}),e.jsxs(i.h4,{id:"moderation--link-whitelisting-bots",children:["Moderation & Link Whitelisting Bots",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#moderation--link-whitelisting-bots",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsx(i.p,{children:"Only allows approved links to be used in the discord server. A popular bot in this category is Goodknight Bot."}),e.jsx(i.p,{children:e.jsx(i.em,{children:"The bots above are not all-inclusive but rather a recommended list of bots to help protect your Discord server in these categories."})}),e.jsxs(i.h2,{id:"enhanced-server-configuration",children:["Enhanced Server Configuration",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#enhanced-server-configuration",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.h3,{id:"channels",children:["Channels",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#channels",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["a) ",e.jsx(i.strong,{children:"Organize Channels Logically"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Use categories to group related channels"}),`
`,e.jsx(i.li,{children:"Suggested categories: Information, General, Voice Channels, Topic-Specific"}),`
`]}),e.jsxs(i.p,{children:["b) ",e.jsx(i.strong,{children:"Set Slow Mode Where Needed"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Channel Settings > Overview > Slow Mode"}),`
`,e.jsx(i.li,{children:"Set appropriate cooldown (e.g., 5-30 seconds) for busy channels"}),`
`]}),e.jsxs(i.p,{children:["c) ",e.jsx(i.strong,{children:"Use Age-Restricted Channels Appropriately"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Channel Settings > Overview > Age-Restricted Channel"}),`
`,e.jsx(i.li,{children:"Enable for channels with mature content"}),`
`]}),e.jsxs(i.h3,{id:"invites",children:["Invites",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#invites",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["a) ",e.jsx(i.strong,{children:"Disable Permanent Invites"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Server Settings > Invites"}),`
`,e.jsx(i.li,{children:'Un-check "Allow anyone with administrative permissions to create invites"'}),`
`]}),e.jsxs(i.p,{children:["b) ",e.jsx(i.strong,{children:"Set Invite Expiration and Usage Limits"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:'When creating an invite: Set "Expire After" and "Max Number of Uses"'}),`
`,e.jsx(i.li,{children:"Recommended: 24 hours expiration, 50-100 uses"}),`
`]}),e.jsxs(i.p,{children:["c) ",e.jsx(i.strong,{children:"Regularly Audit Active Invites"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Server Settings > Invites"}),`
`,e.jsx(i.li,{children:"Review and delete unnecessary or old invites"}),`
`]}),e.jsxs(i.h3,{id:"member-screening",children:["Member Screening",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#member-screening",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["a) ",e.jsx(i.strong,{children:"Enable Membership Screening"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Server Settings > Safety Setup > Membership Screening"}),`
`,e.jsx(i.li,{children:'Toggle on "Enable Membership Screening"'}),`
`]}),e.jsxs(i.p,{children:["b) ",e.jsx(i.strong,{children:"Set Up Screening Questionnaire"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Add questions about server rules, age verification, etc."}),`
`,e.jsx(i.li,{children:"Require members to agree to rules before joining"}),`
`]}),e.jsxs(i.p,{children:["c) ",e.jsx(i.strong,{children:"Set Up Membership Requirements"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Require users to react to a message or post an introduction"}),`
`,e.jsx(i.li,{children:"This helps filter out bots and spam accounts from joining"}),`
`]}),e.jsxs(i.h3,{id:"logging",children:["Logging",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#logging",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["a) ",e.jsx(i.strong,{children:"Enable Audit Logs"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:'Ensure admin/mod roles have "View Audit Log" permission'}),`
`]}),e.jsxs(i.p,{children:["b) ",e.jsx(i.strong,{children:"Set Up a Private Logging Channel"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Create a private channel visible only to admins/mods"}),`
`,e.jsx(i.li,{children:"Use a logging bot like Logger or Dyno to send detailed logs"}),`
`]}),e.jsxs(i.h2,{id:"best-practices--administrative-security",children:["Best Practices & Administrative Security",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#best-practices--administrative-security",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.h3,{id:"regular-reviews",children:["Regular Reviews",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#regular-reviews",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["a) ",e.jsx(i.strong,{children:"Conduct Periodic Permission Audits"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Monthly: Review all role permissions"}),`
`,e.jsx(i.li,{children:"Use a spreadsheet to track changes and justifications"}),`
`]}),e.jsxs(i.p,{children:["b) ",e.jsx(i.strong,{children:"Review and Update Server Rules"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Quarterly: Assess if rules need updating"}),`
`,e.jsx(i.li,{children:"Announce any changes in a dedicated announcements channel"}),`
`]}),e.jsxs(i.p,{children:["c) ",e.jsx(i.strong,{children:"Check for Unused Channels/Roles"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Bi-annually: Delete or archive inactive channels"}),`
`,e.jsx(i.li,{children:"Remove roles that are no longer needed"}),`
`]}),e.jsxs(i.h3,{id:"cold-admin-accounts",children:["Cold Admin Accounts",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cold-admin-accounts",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["a) ",e.jsx(i.strong,{children:'Set Up a "Cold" Admin Account'})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Create a new account on a separate device never used for chatting or clicking links"}),`
`,e.jsx(i.li,{children:"This account is highly resistant to phishing and provides an extra layer of security for the server owner"}),`
`]}),e.jsxs(i.p,{children:["b) ",e.jsx(i.strong,{children:"Secure the Cold Account"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Create a new email account for the cold account"}),`
`,e.jsx(i.li,{children:"Factory reset the device used for this account"}),`
`]}),e.jsxs(i.p,{children:["c) ",e.jsx(i.strong,{children:"Use the Cold Account for Critical Actions"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Manage bots, modify server settings, and respond to compromises"}),`
`,e.jsx(i.li,{children:"Never use this account for regular server activities"}),`
`]}),e.jsxs(i.p,{children:["d) ",e.jsx(i.strong,{children:"Disable QR Code Login on Cold Device"})]}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["In ",e.jsx(i.strong,{children:"User Settings > Privacy & Safety"}),", deselect any quick login or QR scan options."]}),`
`,e.jsx(i.li,{children:"Prevents attackers from using QR phishing tactics to hijack this high-privilege account."}),`
`]}),e.jsxs(i.h3,{id:"additional-community-features",children:["Additional Community Features",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional-community-features",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["a) ",e.jsx(i.strong,{children:"Enable the Community Feature (Newer Discord Update)"})]}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Go to ",e.jsx(i.strong,{children:"Server Settings > Community"})," to activate the Community Feature."]}),`
`,e.jsx(i.li,{children:"Unlocks tools like membership screening, server insights, welcome screen, and discovery settings."}),`
`,e.jsx(i.li,{children:"Helps maintain a structured, secure environment by surfacing official rules and critical info to newcomers."}),`
`]}),e.jsxs(i.p,{children:["b) ",e.jsx(i.strong,{children:"Review Updated Discord Moderation Resources"})]}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Consult the official ",e.jsx(i.a,{href:"https://discord.com/moderation",children:"Discord Moderator Academy"})," for ongoing best practices and new features."]}),`
`,e.jsx(i.li,{children:"Implement recommended strategies (e.g., improved spam filters, updated role recommendations)."}),`
`]}),e.jsxs(i.h2,{id:"platform-specific-security-considerations",children:["Platform-Specific Security Considerations",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#platform-specific-security-considerations",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.h3,{id:"additional-security-measures",children:["Additional Security Measures",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional-security-measures",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.p,{children:["a) ",e.jsx(i.strong,{children:"Verification Systems"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Implement a verification bot like Wick"}),`
`,e.jsx(i.li,{children:"Require users to complete an in-channel captcha before accessing the server"}),`
`,e.jsx(i.li,{children:"Advance Settings: Have verification bot filter based on account age, PFP set, and timeout for incomplete captcha"}),`
`]}),e.jsxs(i.p,{children:["b) ",e.jsx(i.strong,{children:"Raid Protection"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Use anti-raid bots like Wick or Dyno"}),`
`,e.jsx(i.li,{children:"Configure automatic lock-down settings for suspicious activity"}),`
`]}),e.jsxs(i.p,{children:["c) ",e.jsx(i.strong,{children:"Privacy Settings"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Server Settings > Privacy Settings"}),`
`,e.jsx(i.li,{children:'Disable "Allow direct messages from server members"'}),`
`]}),e.jsxs(i.p,{children:["d) ",e.jsx(i.strong,{children:"Integration Whitelisting"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Server Settings > Integrations > Allow new integrations to be added by:"}),`
`,e.jsx(i.li,{children:'Set to "Only Administrators" to prevent unauthorized bot additions'}),`
`]}),e.jsxs(i.p,{children:["e) ",e.jsx(i.strong,{children:"Server Insights"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Enable Server Insights for detailed analytics"}),`
`,e.jsx(i.li,{children:"Use this data to inform moderation strategies and server improvements"}),`
`]}),e.jsxs(i.p,{children:["f) ",e.jsx(i.strong,{children:"Backup Systems"})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Use a bot like ServerBackup to regularly backup your server configuration"}),`
`,e.jsx(i.li,{children:"Store backups securely off-platform"}),`
`]}),e.jsxs(i.p,{children:["g) ",e.jsx(i.strong,{children:"Audit New Integration/Link Safety Settings"})]}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Regularly review ",e.jsx(i.strong,{children:"Server Settings > Integrations"})," for newly added apps or link shorteners."]}),`
`,e.jsx(i.li,{children:"Disable suspicious integrations or automate link scanning with a bot that checks URLs against known phishing databases."}),`
`]}),e.jsxs(i.p,{children:["h) ",e.jsx(i.strong,{children:"Enable Safe Direct Messaging for All Users"})]}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["In ",e.jsx(i.strong,{children:"User Settings > Privacy & Safety"}),", select ",e.jsx(i.strong,{children:"Keep Me Safe"})," for direct messages."]}),`
`,e.jsx(i.li,{children:"Encourages moderators and community members to adopt the same setting to minimize phishing DMs."}),`
`]}),e.jsxs(i.h2,{id:"additional-resources",children:["Additional Resources",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional-resources",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://discord.com/community/securing-your-server",children:"Securing Your Server - Discord"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://discord.com/safety/360043653152-four-steps-to-a-super-safe-server",children:"Four Steps for a Super Safe Server - Discord"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://www.ledger.com/academy/basic-basics/launch-a-crypto-project-securely/how-to-set-up-a-crypto-project-discord-server-securely",children:"How to setup a Discord server securely"})}),`
`]}),e.jsx(i.hr,{})]})}function g(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{g as default,s as frontmatter};
