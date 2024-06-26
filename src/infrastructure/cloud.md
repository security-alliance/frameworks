# Cloud infraestructure
Securing your cloud infrastructure is as important as securing your decentralized application. Here are a few areas to consider to harden your infrastructure:

- **Access Control and Identity Management**: manage user access, roles, and permissions, ensuring that only authorized individuals can interact with cloud resources.
- **Data Encryption and Privacy**: encrypt data both in transit and at rest, managing encryption keys.
- **Network Security**: configure virtual private clouds, implementing firewalls, and monitoring network traffic to protect against unauthorized access and threats.
- **Logging and Monitoring:** set up comprehensive logging, monitoring, and threat detection systems to identify and respond to security incidents in real-time.
- **Compliance and Governance:** address compliance assessments, and adherence to regulatory requirements (e.g., GDPR, HIPAA)
- **Resilience and Disaster Recovery:** ensure high availability, data backup, and disaster recovery, protecting against service disruptions.

All cloud providers have hardening guides that serve as comprehensive manuals that provide step-by-step instructions and best practices for configuring and managing various technology assets securely.

- **AWS:** https://aws.amazon.com/architecture/security-identity-compliance/
- **Azure:** https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns
- **GCP:** https://cloud.google.com/security/best-practices

To aid with vulnerability detection and compliance, a few useful open source scripts are available:

- **CloudSploit:** https://github.com/aquasecurity/cloudsploit
- **Prowler**: https://github.com/prowler-cloud/prowler
- **S3Scanner** (AWS): https://github.com/sa7mon/S3Scanner
- **Zeus** (AWS): https://github.com/DenizParlak/Zeus