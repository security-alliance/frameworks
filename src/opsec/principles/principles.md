---
tags:
  - Security Specialist
  - Operations & Strategy
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

# Operational Security Principles

The goal is to prevent adversaries from gaining access to information that could be harmful if disclosed or compromised.

> **Practical Example: Web3 Organization**
>
> Consider a Web3 project managing a DeFi protocol with a treasury of $10M in assets. Proper operational security would involve:
>
> - **Multiple security layers**: Hardware wallets for cold storage, multi-signature requirements for transactions, regular security audits, and continuous monitoring
> - **Access control**: Only specific team members have access to deployment keys, with different permission levels for development, testing, and production environments
> - **Compartmentalized information**: Private keys for multi-signature wallets are distributed among trusted team members with no single person having access to all keys, and sensitive incident response procedures are only shared with the security team
> - **Regular threat assessment**: The team conducts quarterly reviews of potential attack vectors, from smart contract vulnerabilities to [social engineering](../awareness/social-engineering.md) attempts targeting team members

## 1. Defense in Depth

Defense in Depth is the practice of layering security controls throughout your systems and processes, so that if one control fails, others will provide protection.

> **🔗 Related Framework:** This principle is applied across multiple frameworks including [Infrastructure](../infrastructure/) with [Zero-Trust Principles](../infrastructure/zero-trust-principles.md) and [Network Security](../infrastructure/network-security.md).

### Implementation

1. Deploy multiple security controls that address the same risk in different ways
2. Implement security at various layers: physical, technical, administrative, and human
3. Ensure no single point of failure exists in your security architecture
4. Review the effectiveness of security layers regularly to identify gaps
5. Foster a [security-aware mindset](../awareness/cultivating-a-security-aware-mindset.md) across all team members

## 2. Principle of Least Privilege

The Principle of Least Privilege dictates that users, systems, and processes should have only the minimum access rights necessary to perform their functions.

> **🔗 Related Framework:** For comprehensive implementation, see [Identity and Access Management](../iam/) and [Role-Based Access Control](../iam/role-based-access-control.md).

### Implementation

1. Grant the minimum level of access required for users to perform their duties
2. Review and adjust access rights when roles change
3. Implement role-based access control (RBAC) to standardize permissions
4. Use time-limited and just-in-time access for administrative privileges
5. Regularly audit access rights to identify and remove excessive permissions
6. Establish a thorough offboarding process to immediately revoke access when team members leave
7. Remove credentials for deactivated accounts, as these can become security liabilities even when dormant

## 3. Need-to-Know Basis

Information should only be shared with individuals who require that information to perform their duties.

> **🔗 Related Framework:** This principle is supported by practices in [Data Protection](../operational-security/data-protection/) and aspects of [Privacy](../privacy/).

### Implementation

1. Classify information based on sensitivity and restrict access accordingly
2. Compartmentalize sensitive information to limit exposure in case of a breach
3. Implement clear data handling and sharing policies
4. Train team members on proper handling and sharing of sensitive information through regular [security training](../awareness/security-training.md)
5. Use secure communication channels for sensitive information

## 4. Compartmentalization

Dividing information and systems into isolated segments to limit the impact of a breach.

### Implementation

1. Segment networks and systems based on functionality and sensitivity
2. Isolate critical assets from general-purpose systems
3. Separate development, testing, and production environments
4. Use separate accounts and access methods for different security domains
5. Implement firewalls and access controls between segments

## 5. Continuous Monitoring and Improvement

Security is not a one-time implementation but a continuous process of monitoring, evaluating, and improving.

> **🔗 Related Framework:** For implementation details, see the [Monitoring](../monitoring/) framework, including [Guidelines](../monitoring/guidelines.md) and [Thresholds](../monitoring/thresholds.md). Also relevant is [Incident Management](../incident-management/) for response to detected issues.

### Implementation

1. Establish security metrics to measure the effectiveness of controls
2. Implement monitoring systems to detect security events and anomalies
3. Conduct regular security assessments and penetration tests
4. Learn from security incidents and near-misses
5. Update security controls based on new threats, vulnerabilities, and technologies
6. Ensure team members are [staying informed and continuously learning](../awareness/staying-informed-and-continuous-learning.md) about evolving security threats
7. Utilize available [security resources](../awareness/resources-and-further-reading.md) to keep your security practices current
