# Operating System Security
Follow OS Hardening guide lines such as [NIST 800-123](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-123.pdf), which include (non-exhaustive list):

- Patch Management
- Blocking the remote shell port from all but required IPs
- Blocking all ports except absolutely required ones from public.
- Using tools such as fail2ban to protect against attacks
- Blocking remote root access
- Enforcing personal account and SSH key login
- MFA enabled