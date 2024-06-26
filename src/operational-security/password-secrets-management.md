# Password/Secrets Management
Unfortunately this section is incomplete, nevertheless, you may find some of the current definitions
useful.

TODO:
- [ ] Add intro to the sub-section.
- [ ] Explain difference between passwords, keys, credentials, etc.
- [ ] Explain how to create private keys!

---

## Password and Key Security
*It encompasses tools and strategies to create, manage, and secure passwords and
cryptographic keys.*
- [ ] Longer passwords are better? Insert xkdc horse joke.
- [ ] Add xkdc joke socket drawer.

#### Passphrases
Utilizing long, memorable phrases as passwords. It is easier to remember than complex passwords and can be equally secure.

#### Password Cards (e.g., Qwertycards)
Aids in generating and recalling complex passwords using a physical card as a mnemonic device.

#### Non-default BIP-44 Derivation Path
Using custom paths for key generation in crypto wallets to enhance security. (MyEtherWallet)

#### Password Managers
Digital solutions for securely storing and managing various passwords, reducing the risk of password reuse and simplifying password management.

---

## Key Storage and Recovery

#### Memory and Notebook
Relying on human memory or physical writing to store keys. It's highly secure against digital theft but vulnerable to forgetting or physical loss.

#### Paper Wallets 
Involves printing or writing down keys on paper. Offers protection from online hacks but can be lost, damaged, or deteriorate over time.

#### Encrypted Drives
Storing keys ondrives with encryption. Balances digital convenience with security, but is vulnerable to physical theft and damage.

#### Back-ups / Rotation / Recovery
 Regular backup and update of key information to ensure recovery. Critical for maintaining access in case of primary key loss.

#### Shamir back-up

---

## Authentication and Access Control
*It focuses on methods to verify identity and control access to systems and data,
enhancing security through multiple layers of authentication.*

#### 2FA / MFA (Multi-Factor Authentication)
Employs multiple verification methods, significantly increasing security by
adding layers beyond just passwords.

#### SSO (Single Sign-On)
Allows using one set of credentials to access multiple services, convenient but
necessitates strong security for the primary credentials.

#### Trusted Key Management System (KMS)
Systems designed to manage and protect digital keys, critical for securing
cryptographic operations and sensitive data.

#### Hardware Security Keys
Physical devices used for authentication, offering a high level of security
against remote attacks.

---

## Biometric Security
*Biometric security uses unique physical characteristics for authentication,
providing a convenient and often more secure alternative to traditional methods.*
- [ ] Add configurations examples like fprint service

#### Fingerprint Scanners
Uses fingerprints, unique to every individual, as a means of secure and
convenient authentication.

#### Facial Recognition
Employs facial characteristics for verification, increasingly popular in mobile
and personal devices.
