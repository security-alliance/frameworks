---
tags:
  - Security Specialist
  - Operations & Strategy
  - Engineer/Developer
  - Security Specialist
  - Devops
  - SRE
contributors:
  - role: wrote
    users: [mattaereal]
  - role: reviewed
    users: []
  - role: fact-checked
    users: []
---

# Personal security travel guide — full

> 🔑 Key Takeaway: Minimize data exposure by carrying only essential devices with full-disk encryption and updated software. Secure accounts with backup 2FA methods, avoid biometrics at borders, use trusted networks with VPNs, and never leave devices unattended. Guard against USB attacks, shoulder surfing, and hidden cameras. For crypto, use strong passphrases and never travel with seed phrases. Upon returning, scan devices for malware and consider resetting high-risk devices.

> ❗ This is not, by any means, an extensive guide on this subject or expected to be followed at its core. Its intention is to guide and provide hints as to where to apply security. This will vary depending on case to case, or, in other words, the risks you expose yourself to, by specifically traveling.

This guide is categorized into four sections:

1. **Before traveling:** All the things you could do before you depart, such as hardening some devices or making sure you have a backup of the data you’ll be traveling with, even letting know someone you’ll be calling in case of an emergency and how to identify you. This does not necessarily mean that if you’re reading this while traveling you cannot do anything from that list, only that it might be more challenging to execute depending on your context.
2. **While traveling:** All the things you have to pay attention to or take care of while on the move. Is it necessary to connect to that conference’s WiFi? Have you checked if there is a camera that might be recording your keystrokes? Leaving your computer unattended or just running whatever software your hackathon teammate asks you to download in order for your promising project to win.
3. **Returning home:** Not in the literal sense of it, but directed toward all the things you have to do after your travels. From updating your processes based on experience to wiping exposed devices before rejoining them to your networks.
4. **Additional information for high-profile targets:** If you are a high-profile target, you’ll evidently realize that some of these initial suggestions fall short within your threat model. This section provides a hint toward profiles like yours.

## Before traveling

> 💡**Remove or securely store** any data, devices, printed files, and documents **you don’t absolutely need on the trip**. The less sensitive information and fewer critical assets you carry, the lower the risk and impact if loss, theft, or inspection occurs. Minimize your digital and physical footprint by leaving backups and originals securely at home or in trusted locations, and encrypt what must travel with you. This principle applies to laptops, phones, hardware wallets, paper backups, and any portable storage media.

### **Perform a quick threat model**

Even if you are already traveling, take 5 minutes to map out your risks. Identify **what assets** you’re carrying (laptops, phones, hardware wallets, seed phrases, account access), **who might target them** (thieves, cybercrmiminals, border agents, etc.), and **how attacks might happen** (device theft, tampering, malware, coercion). For each threat, plan a mitigation. For example, if you’re carrying a hardware wallet, a threat is pickpocketing – mitigation could be keeping it attached to yourself (just don’t use ledger’s necklace) and securing it with a secure PIN/passphrase (no patterns, not repeated across devices).

This exercise keeps security measures proportionate to your situation.

### **Secure devices with encryption & updates**

Enable full-disk encryption on all devices (laptops, phones, tablets) to protect data if lost or stolen. Most modern OSes have this by default (e.g. BitLocker for Windows, FileVault for MacOS, LUKS for Linux,or Android/iOS encryption – just ensure a strong password/PIN is set).

Use popular devices like iPhones and Pixels. Install the latest OS and app updates since these patch security vulnerabilities, you can install any of the mobile security applications there are, which adds a layer of security and also reminds you of important security updates.

If you must bring high-risk confidential data, consider encrypting those files individually using tools like VeraCrypt.

### **Back up and prepare for loss**

Back up your devices before travel (and ensure cloud backups like iCloud/Google are up to date). This way, if a device is lost or confiscated, you won’t lose important information. Record device details (make, model, serial numbers, IMEI for phones) and keep that list separate – it will help in filing reports or remote-wipe commands.

If your company uses Mobile Device Management (MDM) on phones or laptops, verify the device is enrolled and you know how to trigger a remote wipe or “lost mode.” Test “Find My” or equivalent device-finding services so you can use them if needed. Pack chargers and cables so you won’t need to borrow unknown ones (which could be malicious).

### **Protect Accounts with 2FA redundancy**

Plan for how you’ll access accounts that use two-factor authentication if your main device is unavailable. For authenticator apps (TOTP codes), **print out backup codes** for your important accounts and keep them **securely** in services like 1Password or NordPass. Alternatively, consider storing them elsewhere physically (not on your phone). If your 2FA is tied to a phone number (SMS or voice), **disable SMS for 2FA**. For technologies that are unfortunately dependent on phone numbers, use a separate line (not your personal one) from services like Google Voice, Burner App or SLYFONE. Transfer your number to an eSIM since [they are harder to physically steal or swap than a physical SIM](https://support.apple.com/en-ca/118227#:~:text=Use%20eSIM%20while%20traveling%20internationally,obtain%2C%20carry%2C%20and%20swap). You can also register a backup 2FA method (e.g. add a secondary phone or a backup hardware key to your accounts) in case of emergency.

Ensure your password manager is accessible – many like 1Password have a *Travel Mode* that removes sensitive vaults from your device while you travel (you can restore them later). This limits exposure if your [device is searched or seized](https://www.schneier.com/blog/archives/2025/04/cell-phone-opsec-for-border-crossings.html). 

### **Secure your wallets and keys**

**Hardware wallets (e.g. Ledger, Trezor):** Update the firmware and test the device before you leave, don’t do this while traveling. **Do NOT bring any written seed phrases** under any circumstance – seed backups are unencrypted keys that are far easier to steal or copy than a hardware device. Leave seed backups in a secure place and travel only with your hardware wallet. Enable all security features on the device (set a strong PIN, and use a BIP39 passphrase for example, if supported) so that even if the device is stolen, the amount of required information to access your crypto, is high. Carry hardware wallets and security keys **in your carry-on or under your sight**, not in checked luggage, to avoid loss or tampering.

**Yubikeys and 2FA tokens:** Bring them to protect logins (they’re the best MFA) and make sure they’re enabled on your critical accounts. Keep them on your person or in a separate bag from your laptop/phone so that a thief or snoop can’t easily steal both at once. If you have a **spare hardware wallet or Yubikey**, you might leave one at home as a backup in case the one you carry is lost. Add, when possible, an extra layer of security to the token, such as a PIN code.

### **Lock down phones**

On your smartphone, take advantage of security settings **before** you travel. Set a strong passcode (not just a 4-digit PIN or pattern). Consider **disabling Touch ID/Face ID** if you might face situations where someone could force-unlock your device using your biometrics – in many jurisdictions, authorities can compel a fingerprint or face scan more easily than a memorized password[.](https://www.schneier.com/blog/archives/2025/04/cell-phone-opsec-for-border-crossings.html#:~:text=deactivate%20biometric%20security%20and%20require,10%20failed%20PIN%20unlock%20attempts) At a minimum, know how to quickly and [**temporarily disable biometrics**](https://news.ycombinator.com/item?id=43630624); for example, on an iPhone, [holding the side button and a volume button will trigger an emergency mode that requires the passcode to unlock](https://www.themacguys.com/essential-travel-security-tips-for-apple-devices/). On Android, use *Lockdown* mode if available (which only temporarily disables biometrics and is different from iOS Lockdown Mode).

If you have an iPhone, enable **Lockdown Mode** (extreme protection on iOS) even if you are not at [high risk or traveling to a high-threat region](https://www.themacguys.com/essential-travel-security-tips-for-apple-devices/#:~:text=This%20mode%20is%20ideal%20when,or%20dealing%20with%20sensitive%20data) – but be aware [it restricts many features](https://www.perplexity.ai/search/what-features-does-lockdown-mo-r.c4j_bwQROXa76ynZeOMA), though totally worth it.

Disabling or restricting USB debugging on Android and using iOS USB restricted mode helps prevent unauthorized physical USB access and reduces risks from malicious cables or compromised charging stations.

If your phone is managed by work (MDM), inform your IT team of your travel so they can assist with any location-based security policies and ensure you have the latest security profile. Finally, consider using a **dedicated eSIM/local SIM** for travel data. This can protect your primary phone number (you can keep your main line on eSIM and turn it off, while using a local data eSIM for mobile internet) and avoids physical SIM issues.

**Configure additional phone protections:** On iOS devices, disable Control Center and Notification Center access from the lock screen (Settings > Face ID & Passcode) to prevent thieves from seeing notifications or enabling Airplane Mode without unlocking. Disable USB accessory connections when locked to prevent unauthorized connections. For device recovery, ensure Find My iPhone is enabled with "Send Last Location" and "Find Network" options activated so tracking continues even if the device is powered off.

On Android, similar protections can be configured: disable notifications on lock screen (Settings > Notifications > On lock screen > Don't show notifications), and enable "Find My Device" with all location services.

**Pay special attention apps security**: many financial apps default to PIN verification instead of biometrics, which means a thief who has your phone and knows your PIN could potentially access your financial accounts even if they can't bypass Face ID/Touch ID. Use unique PINs for banking apps that differ from your device PIN, or where possible, configure these apps to require biometric verification for every login.

### **Minimize digital footprint & social visibility**

It's not just cyber threats – **operational security** matters. **Avoid announcing your travel plans publicly** [on social media](https://blackcloak.io/social-media-and-travel-be-careful-of-what-you-share/) and be careful with real-time updates. Posts about being away from home can signal to criminals that you (and possibly valuable devices or even your house) are vulnerable. Consider sharing trip photos and crypto conference highlights **after** you return or only with trusted contacts. Ensure your social media privacy settings are tightened so strangers can't see your travel posts.

When registering for events, use privacy-focused tools like iOS's **Hide My Email** or create burner emails through providers like ProtonMail. Avoid giving out personal details unnecessarily during registration—use minimal, generic info to reduce your digital footprint.

**Discretion** is key: if possible, [don't advertise that you work in crypto](https://www.unchained.com/blog/7-tips-traveling-bitcoin#:~:text=,or%20clothing%20with%20bitcoin%20logos) or carry cryptocurrency. For example, **remove or cover any crypto stickers on laptops or bags**, and avoid wearing company swag or Bitcoin/Ethereum logos while in transit. These can be neon signs attracting thieves or unwanted attention ("I have valuable data or wallets!"). If asked about your work or luggage by curious strangers, have a **cover story** (e.g. "I work in finance/IT") rather than "I manage a crypto fund". High-profile team members might travel under pseudonyms or at least not list their company on luggage tags to stay low-profile. Also, be wary that you might be traveling with someone with these characteristics, so don't give them away.

### **Plan emergency and incident responses**

Before departure, know what you'll do if something goes wrong. Have a **fallback plan** in case of device loss: who will you notify & how (have safe words and beware of deepfakes or impersonations); how will you revoke access to sensitive accounts; and how will you continue working (e.g., a backup laptop or a colleague who can step in).

If traveling to [countries with strict tech](https://www.perplexity.ai/search/countries-that-list-cryptopgra-bBSItefPSUi7HP2lTNekjA) or [encryption laws](https://it.cornell.edu/security-and-policy/travel-internationally-technology#:~:text=Some%20countries%20have%20restrictions%20on,Consider%20requesting%20a%20loaner%20laptop) (e.g., China, Russia, UAE), devices like VPNs, encrypted messaging apps (Signal, or Telegram with Secret Chats only), hardware wallets (Ledger, Trezor), Yubikeys, or encryption software (VeraCrypt, BitLocker) may be flagged by border authorities. Research local laws beforehand. Consider carrying a travel letter from your organization explaining the professional need for these tools, or use sanitized loaner devices to avoid issues at border controls.

Share your itinerary and contact information with a trusted peer so they can assist or monitor for any issues.

Finally, schedule critical work (especially high-value transactions) for **before or after** your trip if possible, so you’re not forced to do ultra-sensitive actions on the road. Criminals usually play with the “time-sensitive factor,” trying to trick you into doing something quick and urgent, by committing something reckless.

## While traveling

### **Network safety – avoid untrusted Wi-Fi & Bluetooth**

Treat **every network as potentially hostile**. Whenever possible, use a **cellular connection or a personal hotspot** instead of public Wi-Fi – your mobile data is encrypted and safer than an open café or hotel network. If you must use public Wi-Fi (hotel, airport, conference), verify the network name with staff and [**disable auto-connect**](https://www.cisa.gov/sites/default/files/publications/Cybersecurity%20While%20Traveling.pdf) features so your devices don't join networks without prompting you.

**Turn off Wi-Fi and Bluetooth** on your phone and laptop when you're not using them; this reduces the risk of unsolicited connections or Bluetooth-based attacks. Also, disable any device-to-device sharing like **AirDrop** or **Nearby Share** [to prevent strangers from sending you files](https://www.cypherock.com/blogs/post-safe-vacation-tips-while-traveling-with-crypto#:~:text=Switch%20off%20any%20shared%20networks).

**Use a trustworthy VPN** for an extra layer of encryption for your internet traffic, although in most cases by using an updated device, safe hardcoded DNS records, and ensuring SSL while browsing (enforce HTTPS-only-modes or adding “http://*” to your uBlock list, might be enough. A reputable, non-logging VPN (or your company’s VPN) helps protect against snooping on public networks, especially if you’re handling highly sensitive work and using several communication channels.

Using a personal portable router combined with a trusted VPN adds a strong layer of security when connecting to public Wi-Fi networks. This setup creates a private, encrypted tunnel between your devices and the internet, minimizing exposure to malicious actors on shared networks. Whenever possible, prefer mobile data over Wi-Fi, as cellular networks provide better encryption and isolation by default. If you must use Wi-Fi, disable automatic connections and ensure you connect only to verified, trusted networks to reduce risk.

### **Device handling – keep them close and protected**

Never leave your devices (laptops, phones, hardware wallets) **unattended or unsecured** in public. Keep them on your person or within sight whenever possible. In a conference or cafe, use a cable lock for your laptop if you must step away briefly, take it with you or get someone you trust to watch it over for you.

In hotels/Airbnbs, **use the room safe** for small devices when you're out, or consider a portable travel safe/bag you can lock to a fixed object. A [**portable door lock**](https://www.travelandleisure.com/sabre-portable-door-lock-review-7643179#:~:text=schedule%20and%20explore%20fascinating%20destinations,star%20ratings%20at%20Amazon) or door jammer for your room can add an extra barrier against intruders (useful in rentals without chain locks). This simple gadget prevents anyone (even with a key) from opening your door while you're inside, giving you peace of mind at night. When out and about, be mindful of pickpockets – use bags that zip and consider a subtle anti-theft backpack for expensive gadgets or important assets.

For hardware wallets or Yubikeys, a good practice is to **separate them** from the device they authenticate: e.g. don't carry your Yubikey on the same keychain as your laptop bag key; keep it hidden on you. And, of course, **keep devices powered off** or locked when not in use – [enable short auto-lock timeouts](https://www.cisa.gov/sites/default/files/publications/Cybersecurity%20While%20Traveling.pdf#:~:text=%E2%80%A2%20%20%20%20,Some%20devices%20will) on your phone/laptop so they aren't unlocked if snatched[.](https://www.cisa.gov/sites/default/files/publications/Cybersecurity%20While%20Traveling.pdf#:~:text=%E2%80%A2%20%20%20%20,Some%20devices%20will)

### **Beware of public USB charging**

Avoid plug-and-play charging stations at airports or malls. The risk of [“**juice jacking**”](https://www.cypherock.com/blogs/post-safe-vacation-tips-while-traveling-with-crypto?srsltid=AfmBOopuzAsUtNwqCqfUBteTEyH4MOTvIaRhoXoIUyNHH8Yv5XzILrSr#:~:text=Stay%20away%20from%20Public%20charger,stations) is that a malicious charging kiosk or cable can inject malware or siphon data when you connect via USB. Stick to using your own charger plugged into a power outlet, or use a **USB data blocker** (a little adapter that only passes power, not data). Similarly, do not plug unknown USB drives into your laptop – if someone hands you a free USB stick at an event, assume it could be a trap. [**USBGuard**](https://github.com/USBGuard/usbguard#:~:text=USBGuard%20is%20a%20software%20framework,may%20interact%20with%20the%20system) software (for Linux) or equivalent can be used to restrict USB device access on your computer, allowing only whitelisted devices. This tool can prevent an unknown USB from automatically tampering with your system by requiring authorization for new devices. At a minimum, disable any “USB autorun” features and consider locking down ports if your OS allows.

### **Screen privacy and social engineering**

Practice situational awareness when working in public spaces. [**Shoulder surfing**](https://www.trio.so/blog/shoulder-surfing-in-computer-security) is a real threat – someone nearby could be watching you enter passwords or PIN codes. Use a **privacy screen filter** on your laptop or phone to narrow the viewing angle. This makes it much harder for anyone not directly in front of your screen to read it. Sit with your back to a wall when possible, and shield the keypad with your body or hand when typing sensitive info. 

In crowded conferences or airports, be cautious if someone you don't know strikes up conversation — might be trying to distract you or talk about crypto; scammers might engage you to glean info or even attempt to get you to unlock your device. **Don't log in to critical accounts in front of others** – you never know who's looking.

Also be mindful of **phishing attempts**: traveling users are prime targets for fake "urgent" emails or messages. Double-check any unusual prompts before entering credentials, especially if you're on [untrusted Wi-Fi](https://www.cisa.gov/sites/default/files/publications/Cybersecurity%20While%20Traveling.pdf#:~:text=banking%2C%20or%20sensitive%20work%2C%20using,using%20a%20public%20wireless%20network) (use your VPN and look for HTTPS).

### **Maintain OpSec in public**

While traveling, **blend in and stay discreet**. Refrain from discussing sensitive matters in public areas where eavesdropping is possible, or directly sharing things like where you are staying to people you don't know. Even hotel lobbies or rideshares might not be secure for private discussions.

When meeting people, don't give your phone to others to type down their socials, and remember to disable default options like Telegram's sharing phone number when adding a contact.

Remember that **hidden cameras or microphones** could exist in unfamiliar environments. It's rare but not unheard of, especially in [Airbnbs or rented spaces](https://www.washingtonpost.com/travel/2024/05/22/hidden-cameras-airnbnb-rental-properties/#:~:text=On%20the%20kitchen%20table%2C%20he,activate%20the%20camera%20tucked%20inside) – malicious hosts have hidden cameras in items like smoke detectors, clock radios, or USB chargers[.](https://www.washingtonpost.com/travel/2024/05/22/hidden-cameras-airnbnb-rental-properties/#:~:text=On%20the%20kitchen%20table%2C%20he,activate%20the%20camera%20tucked%20inside) Give your accommodations a scan: look for odd or [extra devices plugged in](https://www.washingtonpost.com/travel/2024/05/22/hidden-cameras-airnbnb-rental-properties/) (especially facing beds or desks) and cover or unplug them if suspicious. You can also play ambient noise (or use a noise generator app) during confidential conversations to thwart any listening devices.

**Keep a low profile**: as mentioned, [don't flaunt crypto wealth or gear.](https://www.unchained.com/blog/7-tips-traveling-bitcoin#:~:text=,or%20clothing%20with%20bitcoin%20logos) For example, if attending a blockchain conference, consider using an alias on your name badge that doesn't explicitly say your company or title, and don't display that badge outside the venue. When moving around, secure your laptop in a nondescript sleeve or bag (instead of one with a well-known conference brand). The goal is to avoid drawing the attention of both petty thieves and more organized attackers by limiting the signals that you're a high-value crypto target.

Don't fall into security by obscurity. Don't asume that by going "stealth", you cannot be the victim of an attack. These section's suggestions don't replace the rest.

### **Traveling with high-value crypto or duties**

If you *must* make crypto transactions or access sensitive systems while on the road, do so with caution. Use trusted hardware and networks: e.g. if you need to send a transaction, use your hardware wallet on your own laptop (never a shared computer), on a secured connection.

Be aware of **surveillance at events** – attackers have been known to watch for people handling sensitive info. If you need to access a seed or enter a recovery phrase, do it in a private, secure setting (never over public Wi-Fi or in view of anyone, including cameras). Consider that [**everyone knows you own crypto at a crypto event**](https://www.unchained.com/blog/7-tips-traveling-bitcoin#:~:text=If%20you%27re%20traveling%20to%20an,in%20your%20belongings%20while%20traveling), so your threat profile is elevated[.](https://www.unchained.com/blog/7-tips-traveling-bitcoin#:~:text=If%20you%27re%20traveling%20to%20an,in%20your%20belongings%20while%20traveling) Adjust your security: for instance, **enable a passphrase or a pin on any single-signature wallet** you carry so that even if someone obtains your hardware wallet, they can’t access funds without that passphrase. For large amounts, rely on multi-sig – you might carry one key on you and leave another key(s) with trusted parties so no single person has all signing power while traveling. In short, treat any on-trip crypto operations with more care than you would in the office.

### While presenting or doing public appearances

One often overlooked risk is the exposure caused by presenting or hosting technical workshops in public. Without properly hardening or isolating your computer before setting up, you may unintentionally expose network services to hostile environments or reveal sensitive information on-screen. Always prepare a clean, minimal environment and verify no confidential data or open ports are accessible before connecting to unfamiliar networks or projecting your screen.

### **Physical safety and common sense**

Operational security also has a physical aspect. **Trust your instincts** and normal travel safety rules: stick to well-lit and populated areas if carrying devices at night, don’t let strangers “shoulder surf” your ATM or credit card PIN (check for skimmers, fake interfaces), and keep your travel documents secure since identity theft can be as damaging as device theft.

Use hotel lockers at conferences if provided (for example, some events offer secure charging lockers – use them rather than leaving devices out only).

Beware of the classic “evil maid” scenario in hotels (where someone might tamper with your laptop in your room): using tamper-evident tape or seals on your laptop case can help detect this, though it’s mostly a concern for high-risk targets. If you have tamper-evident stickers or tamper-evident bags, you can seal your device in them overnight – any attempt to open or remove the device will leave a visible trace. While not foolproof against a determined adversary, it raises the bar and can deter casual snooping.

Petty thieves may look beyond obvious valuables. Simply locking items in a dorm safe or hiding them at home might deter casual theft, but savvy criminals often search inside books, behind electrical outlets, or within patterns on walls or furniture to find hidden stashes. Consider unconventional hiding spots and avoid predictable storage methods. Layer your physical security measures with tamper-evident seals or discreet decoy containers to raise the effort required for unauthorized access.

Above all, maintain an **alert posture**: be aware of who’s around when you’re working, and if something feels off (like someone persistently hovering or a device acting strangely), don’t ignore it. You can always relocate, power down your device, or otherwise cut off exposure at the first sign of trouble.

## Returning home

### **Secure your accounts and passwords**

Once you're back, if you suspect that any account credentials you used while abroad *might* have been exposed (especially if you had to log in over a hotel or conference Wi-Fi), address the issue. Change the passwords for any accounts you accessed unsafely during the trip – but if you don't feel is necessary, sometimes you pose a greater risk at doing so.

Do this from a *trusted* device/network (ideally wait till you're on your home or office network, not the airport Wi-Fi). Use this opportunity to upgrade weak passwords and ensure 2FA is still working on those accounts. Check your email filters and crypto account settings for any unauthorized changes (attackers sometimes add forwarding rules or new withdrawal addresses if they did get access).

Essentially, **rotate secrets** that may have been used under less-secure conditions.

### **Inspect and clean your devices**

After traveling, give your devices a thorough once-over. Run a reputable anti-malware scan on laptops and phones. Look for any unusual apps, processes, or device behavior (for example, unusual battery drain could indicate malware).

If you were in a high-risk environment or your device was out of your control at any point, consider wiping the device and restoring it from your pre-trip backup (or factory-resetting a phone) [to ensure it's clean](https://architectsecurity.org/2017/10/mobile-device-security-for-international-travelers-part-3-how-to-clean-up-your-mobile-devices-after-international-travel/#:~:text=Assume%2C%20whether%20correct%20or%20not%2C,and%20must%20be%20rebuilt%20anew)[.](https://architectsecurity.org/2017/10/mobile-device-security-for-international-travelers-part-3-how-to-clean-up-your-mobile-devices-after-international-travel/#:~:text=The%20goal%20after%20travel%20is,to%20a%20%E2%80%9Cknown%20good%E2%80%9D%20state) This is especially recommended for "burner" devices used on the trip – you can safely restore your data onto your main device and decommission the travel device.

For hardware wallets, verify they weren't tampered with: check the device seals if any, and when you connect, confirm the firmware is still legitimate (if the manufacturer provides verification software). If you have any suspicion that a device (or hardware wallet) was compromised, *do not continue using it for sensitive transactions*. Transfer crypto assets to new wallets (using your seed backups in a new device if necessary) once you're on a secure network and device. It's also a good idea to **disable or remove any travel-specific eSIMs or accounts** you used on the trip – for example, remove that foreign cellular plan from your phone if you no longer need it, and uninstall any travel or conference apps that are no longer required.

### **Post-travel review**

Now that you're home, **reflect on the trip** and note any security incidents or close calls. If any device was lost, stolen, or **even taken out of your sight and potentially tampered** (like held by airport security for a long inspection), inform your organization's IT or security team immediately. They may assist with forensic checks or account monitoring. Also inform colleagues if any work data might have been exposed so they can be vigilant. This is not about blame – it's about mitigating any damage early.

Re-enable any data or accounts you put in "travel mode." For instance, if you used 1Password Travel Mode to hide vaults, log in and turn those vaults back on. If you created throwaway emails or burner chat accounts for the trip, decide if you'll deactivate them now.

**Update your threat model** based on your experience: did any new threats emerge, or did some precautions prove unnecessary? Use that to improve future travel prep. Finally, share key lessons with your team. Sharing what you've learned from each trip and tweaking your security practices contributes to a stronger security culture for everyone!

## Additional precautions for high-risk travelers

*This section is for Web3 professionals who have **elevated privileges or profiles** – for example, access to multisig treasury keys, leadership roles, or possession of sensitive organizational secrets. These users may be targeted more deliberately by criminals or even nation-states. In addition to all the precautions above, high-risk travelers should take further steps:*

For high-profile or recognizable individuals, keeping a low profile is essential. Beyond avoiding branded merchandise, a simple yet effective tactic is wearing a COVID N95 mask or similar face covering. It's socially accepted, draws no attention, and helps protect your identity — making it harder for adversaries to target or track you during public events.

### **Use loaner or "burner" devices**

If feasible, travel with clean devices that **don't contain sensitive data**. Leave your primary laptop/phone at a protected location (assuming you also have security in place as well), and bring a wiped, minimal laptop or a cheap travel phone with only the basics. Log into what you absolutely need (through secure channels) and nothing more. Treat these devices as expendable – assume they *will* be compromised and plan to wipe them afterward. For example, a senior developer might bring a laptop with no source code on it and use a VPN or VDI (virtual desktop) to access company systems when necessary, leaving no data on the local disk. A hardware wallet keyholder might carry a **secondary hardware wallet** with lower privileges (or a single key to a multisig instead of full access). Keep your primary keys secured in a location that is not accompanying you. Remember, a nearly empty device can raise suspicion at some borders, so don't make it obvious – load some innocuous data (music, generic files) so it looks used, but nothing that would be harmful if inspected.

### **Plan for customs and border checks**

High-risk individuals may face increased scrutiny or device searches at borders due to the sensitive nature of their data or their roles (e.g., journalists). **Before crossing borders**, purge or secure sensitive information. Turn off devices before landing (some experts even recommend **encrypting and then powering down** devices – [a powered-off device with strong encryption is extremely hard to access](https://www.reddit.com/r/technology/comments/1jl9dxg/how_to_lock_down_your_phone_if_youre_traveling_to)).

Disable cloud auto-sync of sensitive data; you don’t want customs inadvertently accessing company cloud drives if they inspect your laptop. If asked to unlock devices, having them powered off gives you an opportunity to state that it’s encrypted and requires a passphrase (which you should have memorized, not written down). It’s wise for high-risk travelers to **disable biometrics entirely before travel** – use PIN/password only, as mentioned – so you cannot be compelled or tricked via fingerprint/face. Know your legal rights in the countries you transit; in some places you can refuse to unlock (though it may mean the device is held or you are denied entry), while in others you might face penalties. This is a personal risk decision – but the best case is to carry *nothing* truly incriminating or irreplaceable across a checkpoint. For ultra-sensitive data, use secure communication channels to retrieve it at destination rather than carrying it. For instance, an executive could store confidential files in a secure cloud drive they access over VPN once abroad, rather than carrying them on a laptop.

### **Enhanced device protections**

High-risk users should layer additional defenses. **Lockdown Mode** (on iOS) or Android’s equivalent secure modes should be enabled if there’s any chance of targeted spyware (these modes disable exploit-prone services and attachments). Use messaging apps with end-to-end encryption and disappearing messages (NOT Telegram, Signal is a good example) for any sensitive communications – assume that standard SMS or emails could be monitored. 

Consider using a **Faraday bag** for phones when not in use, if you suspect active tracking or exploitation (this prevents any signals in or out, though use sparingly as it also blocks your calls). If you leave a device in your hotel, you can put it in a tamper-evident bag and seal it, or at least take measures like noting the exact placement or taking a photo, so you can detect if it was disturbed. Some high-risk individuals even **weigh their devices** before and after travel to detect the addition of hardware implants (a change in weight could indicate something like a chip added) – this is an extreme step, but shows the level of caution possible. At the very least, physically inspect your devices for new scratches, screws that look tampered with, or unexpected behavior.

### **Protect crypto keys with multi-party controls**

If you have access to significant crypto funds (exchanges, DAO treasury, etc.), implement policies that prevent a single point of failure while you’re traveling. For example, if you’re one of N-of-M multisig signers, consider temporarily **requiring an extra signer** for transactions while you’re away (so if normally 2-of-3 can move funds, bump it to 3-of-3 or add a 4th backup signer) so that a compromised key or coerced action cannot alone execute a transfer.

If you hold hardware keys, keep them **geographically split** – e.g. bring one key device with you, leave the backup key in a safe place at home, and perhaps give a third key to a colleague, so that even a forced disclosure cannot result in an immediate loss of funds without collaboration. Use duress codes if your hardware supports it (some wallets allow a secondary PIN that opens a decoy account with minimal funds, the same can also be made with encryption volumes).

In general, **assume a determined adversary could target you** specifically for your role: use confidential communication to stay in touch with your team (so they know you’re safe daily), and establish a code word or protocol for emergencies. High-risk travelers might also arrange a “check-in” schedule with their security team or colleagues – if you don’t check in by a certain time, they can take pre-agreed actions (like disabling your accounts or alerting authorities). This kind of planning is an extra safety net when the stakes are especially high.

### **Post-trip device rebuilding**

For highly targeted individuals, the safest course after returning is to **treat every device as compromised** and rebuild it, **especially before reaching your safe zone (home, work office).** This involves wiping devices to factory settings, flashing firmware if necessary, and restoring data from known-good backups made before the trip.

Consider using **read-only operating systems** or booting from trusted live media during travel to reduce risk exposure. Before your trip, you can create a **cloned disk image** of a clean system state, so after traveling you can restore your device to that exact low-level copy — starting fresh with a known secure baseline. This approach helps eliminate stealthy malware or spyware that may have been implanted.

Additionally, review system logs if available (security apps or MDM solutions often report unusual access or configuration changes during your absence). As always, report any suspicious incidents promptly. High-risk roles may require a debrief with your security officer — be transparent about any odd encounters or possible security lapses to mitigate threats that could have followed you home.

**Sources:**

1. CISA Cybersecurity While Traveling – official tips on device updates, Wi-Fi safety, and physical device security | [cisa.gov](https://www.cisa.gov/sites/default/files/publications/Cybersecurity%20While%20Traveling.pdf#:~:text=%E2%80%A2%20%20%20%20,And%20Bluetooth)[cisa.gov](https://www.cisa.gov/sites/default/files/publications/Cybersecurity%20While%20Traveling.pdf#:~:text=%E2%80%A2%20%20%20%20,networks%20when%20you%20want%20to).
2. Cornell University IT Security – international travel security checklist (device encryption, using loaner devices, minimizing data)[it.cornell.edu](https://it.cornell.edu/security-and-policy/travel-internationally-technology#:~:text=%2A%20,computers%2C%20tablets%2C%20mobile%20phones%2C%20etc)[it.cornell.edu](https://it.cornell.edu/security-and-policy/travel-internationally-technology#:~:text=%2A%20,you%20need%20for%20your%20trip).
3. Cypherock Blog – “Safe Vacation Tips while Traveling with Crypto” (advice on MFA keys, avoiding public Wi-Fi and chargers, not carrying seed phrases) | [cypherock.com](https://www.cypherock.com/blogs/post-safe-vacation-tips-while-traveling-with-crypto?srsltid=AfmBOopuzAsUtNwqCqfUBteTEyH4MOTvIaRhoXoIUyNHH8Yv5XzILrSr#:~:text=Implement%20MFA%20on%20sensitive%20accounts,and%20apps)[cypherock.com](https://www.cypherock.com/blogs/post-safe-vacation-tips-while-traveling-with-crypto?srsltid=AfmBOopuzAsUtNwqCqfUBteTEyH4MOTvIaRhoXoIUyNHH8Yv5XzILrSr#:~:text=Stay%20away%20from%20Public%20charger,stations).
4. Schneier on Security (comments) – community OPSEC suggestions for border crossings (burner phones, no biometrics, 1Password Travel Mode) | [schneier.com](https://www.schneier.com/blog/archives/2025/04/cell-phone-opsec-for-border-crossings.html#:~:text=match%20at%20L598%20Burner,phrase%20or%20two%20to%20retrieve).
5. The MacGuys – Apple device travel tips (Lockdown Mode, separate eSIM for travel, disabling Face ID in emergencies) | [themacguys.com](https://www.themacguys.com/essential-travel-security-tips-for-apple-devices/#:~:text=Use%20a%20Separate%20eSIM%20for,Travel)[themacguys.com](https://www.themacguys.com/essential-travel-security-tips-for-apple-devices/#:~:text=Know%20How%20to%20Disable%20Biometric,Unlock).
6. Unchained Capital – “7 Tips for Traveling with Bitcoin Keys” (don’t advertise crypto holdings, leave seed backups at home, use passphrases/multisig for travel)| [unchained.com,](https://www.unchained.com/blog/7-tips-traveling-bitcoin#:~:text=,or%20clothing%20with%20bitcoin%20logos) [unchained.com](https://www.unchained.com/blog/7-tips-traveling-bitcoin#:~:text=If%20you%27re%20traveling%20to%20an,in%20your%20belongings%20while%20traveling).
7. BlackCloak – Dangers of oversharing travel on social media (real-time posts can invite burglaries or attacks) | [blackcloak.io](https://blackcloak.io/social-media-and-travel-be-careful-of-what-you-share/#:~:text=The%20Risks%20of%20Oversharing%20on,Social%20Media).
8. Trio Security Blog – Shoulder surfing and visual hacking (use privacy screens and be mindful of surroundings) | [trio.so](https://www.trio.so/blog/shoulder-surfing-in-computer-security/#:~:text=,the%20keypad%20with%20your%20hand).
9.  Washington Post – Portable door locks for travelers (added security in accommodations) | [travelandleisure.com](https://www.travelandleisure.com/sabre-portable-door-lock-review-7643179#:~:text=schedule%20and%20explore%20fascinating%20destinations,star%20ratings%20at%20Amazon) and finding hidden cameras in rentals[washingtonpost.com](https://www.washingtonpost.com/travel/2024/05/22/hidden-cameras-airnbnb-rental-properties/#:~:text=On%20the%20kitchen%20table%2C%20he,activate%20the%20camera%20tucked%20inside).
10. GitHub USBGuard – tool to enforce USB device policies on laptops (helps block malicious USB devices) | [github.com](https://github.com/USBGuard/usbguard#:~:text=USBGuard%20is%20a%20software%20framework,may%20interact%20with%20the%20system).
