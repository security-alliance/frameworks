# Operating System Security

This document outlines some general best practises one should follow with regards to operating system security, however if you're interested in a much more comprehensive guide you could look at [NIST 800-123](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-123.pdf).

## Best Practices

- **Regular Updates and Patch Management**: Keep your operating systems updated with the latest security patches and updates.
- **Remote Shell**: Block the remote shell port from all but required IPs
- **Ports Blocking**: Blocking all ports except absolutely required ones from public.
- **Tools**: Using tools such as fail2ban to protect against attacks
- **Remote Access**: Block remote root access unless necessary
- **Authentication**: Enforce personal account and SSH key login
- **MFA**: Enable multi factor authentication.
- **Access Controls**: Implement strict access controls to limit administrative privileges and use role-based access control (RBAC).
- **Antivirus and Anti-Malware**: Use antivirus and anti-malware software to detect and prevent malicious activities on systems where relevant
- **Firewalls**: Configure host-based firewalls to control incoming and outgoing network traffic.
- **Intrusion Detection and Prevention**: Implement host-based intrusion detection and prevention systems (HIDS/HIPS).
- **Secure Configurations**: Follow secure configuration guides, such as the NIST 800-123 guidelines, to harden your operating systems.
- **Regular Audits and Monitoring**: Conduct regular security audits and continuous monitoring of your operating systems.
