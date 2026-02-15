# SEAL Certs ↔ Frameworks Gap Analysis

_Auto-generated 2026-02-15_

## Summary

| Metric | Count | % |
|--------|-------|---|
| Total controls | 111 | 100% |
| Full coverage (≥1 full ref) | 64 | 58% |
| Partial coverage only | 37 | 33% |
| No coverage | 10 | 9% |

## sfc-devops-infrastructure

### ✅ di-1.1.1: DevOps Security Owner

| Page | Header | Coverage |
|------|--------|----------|
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | access control best practices | full |
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | — | partial |
| [Secure Code Repositories & Version Control | SEAL](/secure-software-development/secure-code-repositories-version-control) | best practices for secure code repositories | partial |
| [Unit Testing](/security-testing/unit-testing) | overview | partial |
| [Infrastructure as Code Security | SEAL](/security-automation/infrastructure-as-code) | best practices for secure iac | partial |

### ⚠️ di-1.1.2: DevOps Security Policy

| Page | Header | Coverage |
|------|--------|----------|
| [Supply Chain Levels Software Artifacts | SEAL](/supply-chain/supply-chain-levels-software-artifacts) | best practices for securing supply chain levels | partial |
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | — | partial |
| [Unit Testing](/security-testing/unit-testing) | overview | partial |
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | — | partial |
| [Infrastructure as Code Security | SEAL](/security-automation/infrastructure-as-code) | — | partial |

### ❌ di-1.1.3: Development Environment Isolation

**No framework coverage found.**

### ❌ di-1.1.4: Development Tools Approval

**No framework coverage found.**

### ⚠️ di-2.1.1: Repository Security

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Code Repositories & Version Control | SEAL](/secure-software-development/secure-code-repositories-version-control) | best practices for secure code repositories | partial |

### ❌ di-2.1.2: Secret Scanning

**No framework coverage found.**

### ❌ di-2.1.3: External Contributor Review

**No framework coverage found.**

### ❌ di-2.1.4: Dependency and Supply Chain Security

**No framework coverage found.**

### ❌ di-3.1.1: Pipeline Security Controls

**No framework coverage found.**

### ❌ di-3.1.2: Secrets Management

**No framework coverage found.**

### ⚠️ di-3.1.3: Security Testing Integration

| Page | Header | Coverage |
|------|--------|----------|
| [DevSecOps](/devsecops/overview) | — | partial |

### ⚠️ di-4.1.1: Infrastructure as Code

| Page | Header | Coverage |
|------|--------|----------|
| [Infrastructure as Code Security | SEAL](/security-automation/infrastructure-as-code) | — | partial |

### ⚠️ di-4.1.2: Infrastructure Access Controls

| Page | Header | Coverage |
|------|--------|----------|
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | dns record monitoring | partial |

### ❌ di-4.1.3: Backup and Disaster Recovery

**No framework coverage found.**

### ✅ di-4.1.4: Cloud Security Monitoring

| Page | Header | Coverage |
|------|--------|----------|
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | dns record monitoring | full |
| [DNSSEC, CAA, SMTP DANE and Email Security | SEAL](/infrastructure/domain-and-dns-security/dnssec-and-email) | dnssec implementation | partial |
| [Cloud Infrastructure](/infrastructure/cloud) | — | partial |
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | domain expiration protection | partial |
| [On-Chain Monitoring Guidelines](/monitoring/guidelines) | implement monitoring tools | partial |

## sfc-dns-registrar

### ✅ dns-1.1.1: Domain Security Owner

| Page | Header | Coverage |
|------|--------|----------|
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | practical application | full |
| [OpSec Core Principles](/opsec/principles/principles) | 2. principle of least privilege | full |
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | access control best practices | full |
| [OpSec Implementation Process | SEAL](/opsec/core-concepts/implementation-process) | implementation actions | full |
| [OpSec Case Studies](/opsec/appendices/case-studies) | case study 1: private key compromise | full |

### ✅ dns-1.1.2: Domain Inventory and Documentation

| Page | Header | Coverage |
|------|--------|----------|
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | enterprise-grade registrars (recommended) | full |
| [DNSSEC, CAA, SMTP DANE and Email Security | SEAL](/infrastructure/domain-and-dns-security/dnssec-and-email) | dnssec implementation | full |
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | dns record monitoring | full |
| [Domain & DNS Security | SEAL](/infrastructure/domain-and-dns-security/overview) | standards and best practices | partial |
| [Travel Security Guide](/opsec/travel/guide) | — | partial |

### ✅ dns-2.1.1: Domain Classification and Compliance

| Page | Header | Coverage |
|------|--------|----------|
| [DNSSEC, CAA, SMTP DANE and Email Security | SEAL](/infrastructure/domain-and-dns-security/dnssec-and-email) | dnssec implementation | full |
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | dns record monitoring | partial |
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | practical application | partial |
| [OpSec Core Principles](/opsec/principles/principles) | implementation | partial |
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | enterprise-grade registrars (recommended) | partial |

### ✅ dns-2.1.2: Enterprise Registrar Security Requirements

| Page | Header | Coverage |
|------|--------|----------|
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | consumer registrars to avoid for critical domains | full |
| [DNSSEC, CAA, SMTP DANE and Email Security | SEAL](/infrastructure/domain-and-dns-security/dnssec-and-email) | dnssec implementation | full |
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | critical alerts (immediate response required) | full |
| [Domain & DNS Security | SEAL](/infrastructure/domain-and-dns-security/overview) | notable domain security incidents | partial |
| [Personnel Security Controls](/opsec/control-domains/people) | key components | partial |

### ✅ dns-3.1.1: Registrar Access Control

| Page | Header | Coverage |
|------|--------|----------|
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | access control best practices | full |
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | critical alerts (immediate response required) | partial |
| [DNSSEC, CAA, SMTP DANE and Email Security | SEAL](/infrastructure/domain-and-dns-security/dnssec-and-email) | dnssec implementation | partial |
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | 2. minimal access scopes | partial |
| [Travel Security Guide](/opsec/travel/guide) | — | partial |

### ⚠️ dns-3.1.2: Dedicated Domain Security Contact Email

| Page | Header | Coverage |
|------|--------|----------|
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | — | partial |
| [DNSSEC, CAA, SMTP DANE and Email Security | SEAL](/infrastructure/domain-and-dns-security/dnssec-and-email) | — | partial |
| [Travel Security Guide](/opsec/travel/guide) | — | partial |
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | — | partial |

### ✅ dns-3.1.3: Change Management for Domain Operations

| Page | Header | Coverage |
|------|--------|----------|
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | choosing a secure registrar | full |
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | critical alerts (immediate response required) | partial |
| [DNSSEC, CAA, SMTP DANE and Email Security | SEAL](/infrastructure/domain-and-dns-security/dnssec-and-email) | dnssec implementation | partial |

### ✅ dns-4.1.1: DNS Security Standards

| Page | Header | Coverage |
|------|--------|----------|
| [DNSSEC, CAA, SMTP DANE and Email Security | SEAL](/infrastructure/domain-and-dns-security/dnssec-and-email) | dnssec implementation | full |
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | dns record monitoring | partial |
| [Domain & DNS Security | SEAL](/infrastructure/domain-and-dns-security/overview) | standards and best practices | partial |

### ✅ dns-4.1.2: Email Authentication Standards

| Page | Header | Coverage |
|------|--------|----------|
| [DNSSEC, CAA, SMTP DANE and Email Security | SEAL](/infrastructure/domain-and-dns-security/dnssec-and-email) | mta-sts (mail transfer agent strict transport security) | full |
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | dns record monitoring | partial |
| [Google Workspace Security](/opsec/google/overview) | best practices & ongoing maintenance | partial |
| [Travel Security Guide](/opsec/travel/guide) | **secure your wallets and keys** | partial |
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | practical application | partial |

### ⚠️ dns-4.1.3: Domain Lock Implementation

| Page | Header | Coverage |
|------|--------|----------|
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | — | partial |
| [Travel Security Guide](/opsec/travel/guide) | — | partial |

### ⚠️ dns-4.1.4: TLS Certificate Lifecycle Management

| Page | Header | Coverage |
|------|--------|----------|
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | dns record monitoring | partial |

### ✅ dns-5.1.1: Domain and DNS Monitoring

| Page | Header | Coverage |
|------|--------|----------|
| [DNSSEC, CAA, SMTP DANE and Email Security | SEAL](/infrastructure/domain-and-dns-security/dnssec-and-email) | dnssec implementation | full |
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | dns record monitoring | full |
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | enterprise-grade registrars (recommended) | full |
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | relationship to implementation process | full |
| [OpSec Core Principles](/opsec/principles/principles) | 5. continuous monitoring and improvement | partial |

### ✅ dns-5.1.2: Certificate Transparency Monitoring

| Page | Header | Coverage |
|------|--------|----------|
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | dns record monitoring | full |
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | relationship to implementation process | full |
| [DNSSEC, CAA, SMTP DANE and Email Security | SEAL](/infrastructure/domain-and-dns-security/dnssec-and-email) | dnssec implementation | partial |
| [On-Chain Monitoring Guidelines](/monitoring/guidelines) | implement monitoring tools | partial |
| [OpSec Core Principles](/opsec/principles/principles) | 5. continuous monitoring and improvement | partial |

### ⚠️ dns-5.1.3: Domain Expiration Prevention

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | before traveling | partial |
| [Technical Security Controls](/opsec/control-domains/technical) | encrypted storage & backups | partial |
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | domain expiration protection | partial |

### ✅ dns-6.1.1: Alerting and Emergency Contacts

| Page | Header | Coverage |
|------|--------|----------|
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | choosing a secure registrar | full |
| [Travel Security Guide](/opsec/travel/guide) | **protect crypto keys with multi-party controls** | partial |
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | critical alerts (immediate response required) | partial |
| [DNSSEC, CAA, SMTP DANE and Email Security | SEAL](/infrastructure/domain-and-dns-security/dnssec-and-email) | dnssec implementation | partial |
| [OpSec Case Studies](/opsec/appendices/case-studies) | — | partial |

### ✅ dns-6.1.2: Domain Incident Response Plan

| Page | Header | Coverage |
|------|--------|----------|
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | choosing a secure registrar | full |
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | critical alerts (immediate response required) | partial |
| [Travel Security Guide](/opsec/travel/guide) | **plan emergency and incident responses** | partial |
| [OpSec Case Studies](/opsec/appendices/case-studies) | case study 1: private key compromise | partial |
| [DNSSEC, CAA, SMTP DANE and Email Security | SEAL](/infrastructure/domain-and-dns-security/dnssec-and-email) | dnssec implementation | partial |

## sfc-incident-response

### ⚠️ ir-1.1.1: IR Team and Role Assignments

| Page | Header | Coverage |
|------|--------|----------|
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | documentation & communication | partial |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | security team contact | partial |
| [Backup Signing & Infrastructure | SEAL](/multisig-for-protocols/backup-signing-and-infrastructure) | rpc backup options | partial |
| [Compliance & Regulatory Requirements | SEAL](/governance/compliance-regulatory-requirements) | 2. develop a robust security policy framework | partial |
| [SEAL 911 War Room Guidelines | SEAL](/incident-management/playbooks/seal-911-war-room-guidelines) | — | partial |

### ⚠️ ir-1.1.2: Stakeholder Coordination and Contacts

| Page | Header | Coverage |
|------|--------|----------|
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | security team contact | partial |
| [SEAL 911 War Room Guidelines | SEAL](/incident-management/playbooks/seal-911-war-room-guidelines) | — | partial |

### ✅ ir-2.1.1: Monitoring Coverage

| Page | Header | Coverage |
|------|--------|----------|
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | recovery | full |
| [SEAL 911 War Room Guidelines | SEAL](/incident-management/playbooks/seal-911-war-room-guidelines) | perform in parallel by role | full |
| [On-Chain Monitoring Guidelines](/monitoring/guidelines) | implement monitoring tools | full |
| [Wallet Security Tools & Resources | SEAL](/wallet-security/tools-and-resources) | monitoring & alerting | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | active monitoring | full |

### ⚠️ ir-2.1.2: Alerting, Paging, and Escalation

| Page | Header | Coverage |
|------|--------|----------|
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | documentation & communication | partial |
| [Backup Signing & Infrastructure | SEAL](/multisig-for-protocols/backup-signing-and-infrastructure) | rpc backup options | partial |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | security team contact | partial |

### ⚠️ ir-2.1.3: Logging Integrity and Retention

| Page | Header | Coverage |
|------|--------|----------|
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | dns record monitoring | partial |
| [SEAL 911 War Room Guidelines | SEAL](/incident-management/playbooks/seal-911-war-room-guidelines) | perform in parallel by role | partial |
| [Compliance & Regulatory Requirements | SEAL](/governance/compliance-regulatory-requirements) | 6. continuous monitoring and auditing | partial |
| [On-Chain Monitoring Guidelines](/monitoring/guidelines) | define monitoring objectives | partial |

### ✅ ir-3.1.1: Response Playbooks

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | setup best practices | full |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | security team contact | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | self-hosted multisig ui | partial |
| [Multisig Registration & Documentation | SEAL](/multisig-for-protocols/registration-and-documentation) | ongoing maintenance | partial |
| [Secure Multisig Signing Process | SEAL](/wallet-security/signing-and-verification/secure-multisig-signing-process) | phase 1: signing the off-chain message | partial |

### ✅ ir-3.1.2: Signer Reachability and Coordination

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | for multisig administrators | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | solana | full |
| [Multisig Security Framework | SEAL](/multisig-for-protocols/overview) | how to use this guide | full |
| [Multisig Registration & Documentation | SEAL](/multisig-for-protocols/registration-and-documentation) | protocol documentation | full |

### ✅ ir-3.1.3: Emergency Transaction Readiness

| Page | Header | Coverage |
|------|--------|----------|
| [Backup Signing & Infrastructure | SEAL](/multisig-for-protocols/backup-signing-and-infrastructure) | rpc backup options | full |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | documentation & communication | full |
| [Seed Phrase Management](/wallet-security/seed-phrase-management) | tamper evident bags: | full |
| [Multisig Personal Security (OpSec) | SEAL](/multisig-for-protocols/personal-security-opsec) | basic requirements | full |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | immediate steps | full |

### ✅ ir-4.1.1: Incident Communication Channels

| Page | Header | Coverage |
|------|--------|----------|
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | documentation & communication | full |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | immediate steps | partial |
| [Backup Signing & Infrastructure | SEAL](/multisig-for-protocols/backup-signing-and-infrastructure) | rpc backup options | partial |
| [Compliance & Regulatory Requirements | SEAL](/governance/compliance-regulatory-requirements) | 2. develop a robust security policy framework | partial |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | thresholds & configuration | partial |

### ⚠️ ir-4.1.2: Internal Status Updates

| Page | Header | Coverage |
|------|--------|----------|
| [Registrar Security & Registry Locks | SEAL](/infrastructure/domain-and-dns-security/registrar-and-locks) | — | partial |

### ⚠️ ir-4.1.3: Public Communication and Information Management

| Page | Header | Coverage |
|------|--------|----------|
| [SEAL 911 War Room Guidelines | SEAL](/incident-management/playbooks/seal-911-war-room-guidelines) | — | partial |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | — | partial |

### ⚠️ ir-5.1.1: IR Drills and Testing

| Page | Header | Coverage |
|------|--------|----------|
| [Decentralized Incident Response | SEAL](/incident-management/playbooks/decentralized-ir) | 6. eradication and recovery | partial |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | security team contact | partial |
| [DNS Monitoring & Incident Response | SEAL](/infrastructure/domain-and-dns-security/monitoring-and-alerting) | critical alerts (immediate response required) | partial |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | emergency response multisigs | partial |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | operational best practices | partial |

## sfc-multisig-ops

### ✅ ms-1.1.1: Named Multisig Operations Owner

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | for multisig administrators | full |
| [Multisig Security Framework | SEAL](/multisig-for-protocols/overview) | how to use this guide | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | solana | full |
| [Multisig Registration & Documentation | SEAL](/multisig-for-protocols/registration-and-documentation) | protocol documentation | full |

### ✅ ms-1.1.2: Multisig Registry and Documentation

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | for multisig administrators | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | solana | full |
| [Multisig Security Framework | SEAL](/multisig-for-protocols/overview) | how to use this guide | full |
| [Multisig Registration & Documentation | SEAL](/multisig-for-protocols/registration-and-documentation) | protocol documentation | full |

### ✅ ms-2.1.1: Multisig Classification and Risk-Based Controls

| Page | Header | Coverage |
|------|--------|----------|
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | for multisig administrators | full |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Multisig Security Framework | SEAL](/multisig-for-protocols/overview) | how to use this guide | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | solana | full |
| [Multisig Registration & Documentation | SEAL](/multisig-for-protocols/registration-and-documentation) | protocol documentation | full |

### ✅ ms-2.1.2: Contract-Level Security Controls

| Page | Header | Coverage |
|------|--------|----------|
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | for multisig administrators | full |
| [Multisig Security Framework | SEAL](/multisig-for-protocols/overview) | how to use this guide | full |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | solana | full |
| [Multisig Registration & Documentation | SEAL](/multisig-for-protocols/registration-and-documentation) | protocol documentation | full |

### ✅ ms-2.1.3: Exception Approval Process

| Page | Header | Coverage |
|------|--------|----------|
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | for multisig administrators | full |
| [Multisig Security Framework | SEAL](/multisig-for-protocols/overview) | how to use this guide | full |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | solana | full |
| [Multisig Registration & Documentation | SEAL](/multisig-for-protocols/registration-and-documentation) | protocol documentation | full |

### ⚠️ ms-2.1.4: Wallet Segregation

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | additional precautions for high-risk travelers | partial |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | — | partial |
| [TEE-based Encumbered Wallets](/wallet-security/encumbered-wallets) | — | partial |
| [Web3 Security Considerations](/opsec/core-concepts/web3-considerations) | suggested steps | partial |
| [OpSec Implementation Process | SEAL](/opsec/core-concepts/implementation-process) | implementation actions | partial |

### ✅ ms-3.1.1: Signer Address Verification

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | for multisig administrators | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | solana | full |
| [Multisig Security Framework | SEAL](/multisig-for-protocols/overview) | how to use this guide | full |
| [Multisig Registration & Documentation | SEAL](/multisig-for-protocols/registration-and-documentation) | protocol documentation | full |

### ✅ ms-3.1.2: Signer Key Management Standards

| Page | Header | Coverage |
|------|--------|----------|
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | for multisig administrators | full |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | thresholds & configuration | full |
| [Multisig Security Framework | SEAL](/multisig-for-protocols/overview) | how to use this guide | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | solana | full |
| [Multisig Registration & Documentation | SEAL](/multisig-for-protocols/registration-and-documentation) | protocol documentation | full |

### ✅ ms-3.1.3: Seed Phrase Backup and Protection

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Travel Security Guide](/opsec/travel/guide) | **protect crypto keys with multi-party controls** | partial |
| [Seed Phrase Management](/wallet-security/seed-phrase-management) | advanced backup options | partial |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | evm networks (ethereum, base, etc.) | partial |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | recovery process | partial |

### ✅ ms-3.1.4: Signer Lifecycle Management

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | delegated proposer | full |
| [Secure Multisig Signing Process | SEAL](/wallet-security/signing-and-verification/secure-multisig-signing-process) | process | full |
| [Multisig Registration & Documentation | SEAL](/multisig-for-protocols/registration-and-documentation) | initial registration | full |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | identity verification process | full |

### ✅ ms-3.1.5: Signer Training and Assessment

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | communication & documentation | full |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | planning & setup | partial |
| [OpSec Case Studies](/opsec/appendices/case-studies) | case study 2: social engineering attack | partial |
| [Travel Security Guide](/opsec/travel/guide) | **screen privacy and social engineering** | partial |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | identity verification process | partial |

### ✅ ms-3.1.6: Hardware Wallet Standards

| Page | Header | Coverage |
|------|--------|----------|
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | hardware & security setup | full |
| [Multisig Security Framework | SEAL](/multisig-for-protocols/overview) | how to use this guide | full |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | thresholds & configuration | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | next steps | full |
| [Backup Signing & Infrastructure | SEAL](/multisig-for-protocols/backup-signing-and-infrastructure) | eternal safe - decentralized fork of safe\{wallet\} | full |

### ✅ ms-3.1.7: Secure Signing Environment

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Multisig Personal Security (OpSec) | SEAL](/multisig-for-protocols/personal-security-opsec) | — | partial |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | identity verification process | partial |
| [Secure Multisig Signing Process | SEAL](/wallet-security/signing-and-verification/secure-multisig-signing-process) | process | partial |
| [Backup Signing & Infrastructure | SEAL](/multisig-for-protocols/backup-signing-and-infrastructure) | administrator responsibilities | partial |

### ✅ ms-3.1.8: Signer Diversity

| Page | Header | Coverage |
|------|--------|----------|
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | for multisig administrators | full |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Multisig Security Framework | SEAL](/multisig-for-protocols/overview) | how to use this guide | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | solana | full |
| [Multisig Registration & Documentation | SEAL](/multisig-for-protocols/registration-and-documentation) | protocol documentation | full |

### ✅ ms-4.1.1: Transaction Handling Process

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | thresholds & configuration | full |
| [Secure Multisig Signing Process | SEAL](/wallet-security/signing-and-verification/secure-multisig-signing-process) | phase 1: signing the off-chain message | partial |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | evm networks (ethereum, base, etc.) | partial |
| [Multisig Use Case Requirements | SEAL](/multisig-for-protocols/use-case-specific-requirements) | additional requirements: | partial |
| [Web3 Security Considerations](/opsec/core-concepts/web3-considerations) | suggested steps | partial |

### ❌ ms-4.1.2: Transaction Audit Trails

**No framework coverage found.**

### ✅ ms-4.1.3: Tool and Platform Evaluation

| Page | Header | Coverage |
|------|--------|----------|
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | for multisig administrators | full |
| [Multisig Security Framework | SEAL](/multisig-for-protocols/overview) | how to use this guide | full |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Backup Signing & Infrastructure | SEAL](/multisig-for-protocols/backup-signing-and-infrastructure) | eternal safe - decentralized fork of safe\{wallet\} | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | solana | full |

### ✅ ms-4.1.4: Backup Signing Infrastructure

| Page | Header | Coverage |
|------|--------|----------|
| [Backup Signing & Infrastructure | SEAL](/multisig-for-protocols/backup-signing-and-infrastructure) | rpc backup options | full |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | documentation & communication | full |
| [Travel Security Guide](/opsec/travel/guide) | before traveling | full |
| [Technical Security Controls](/opsec/control-domains/technical) | encrypted storage & backups | full |
| [Seed Phrase Management](/wallet-security/seed-phrase-management) | tamper evident bags: | partial |

### ✅ ms-5.1.1: Secure Communication Procedures

| Page | Header | Coverage |
|------|--------|----------|
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | for multisig administrators | full |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Backup Signing & Infrastructure | SEAL](/multisig-for-protocols/backup-signing-and-infrastructure) | eternal safe - decentralized fork of safe\{wallet\} | full |
| [Multisig Security Framework | SEAL](/multisig-for-protocols/overview) | how to use this guide | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | solana | full |

### ✅ ms-5.1.2: Emergency Contact List

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | for multisig administrators | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | solana | full |
| [Multisig Security Framework | SEAL](/multisig-for-protocols/overview) | how to use this guide | full |
| [Backup Signing & Infrastructure | SEAL](/multisig-for-protocols/backup-signing-and-infrastructure) | eternal safe - decentralized fork of safe\{wallet\} | full |

### ✅ ms-6.1.1: Emergency Playbooks

| Page | Header | Coverage |
|------|--------|----------|
| [Backup Signing & Infrastructure | SEAL](/multisig-for-protocols/backup-signing-and-infrastructure) | rpc backup options | full |
| [Travel Security Guide](/opsec/travel/guide) | before traveling | partial |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | documentation & communication | partial |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | security team contact | partial |
| [Seed Phrase Management](/wallet-security/seed-phrase-management) | tamper evident bags: | partial |

### ✅ ms-6.1.2: Signer Reachability and Escalation

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | security team contact | partial |
| [Multisig Planning & Classification | SEAL](/multisig-for-protocols/planning-and-classification) | identify stakeholders | partial |
| [Multisig Use Case Requirements | SEAL](/multisig-for-protocols/use-case-specific-requirements) | training & drills: | partial |
| [Secure Multisig Signing Process | SEAL](/wallet-security/signing-and-verification/secure-multisig-signing-process) | process | partial |

### ✅ ms-6.1.3: Multisig Monitoring and Alerts

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | for multisig administrators | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | solana | full |
| [Multisig Security Framework | SEAL](/multisig-for-protocols/overview) | how to use this guide | full |
| [Multisig Registration & Documentation | SEAL](/multisig-for-protocols/registration-and-documentation) | protocol documentation | full |

### ❌ ms-6.1.4: Emergency Drills and Improvement

**No framework coverage found.**

## sfc-treasury-ops

### ✅ tro-1.1.1: Treasury Operations Owner

| Page | Header | Coverage |
|------|--------|----------|
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | security monitoring & logging | full |
| [TEE-based Encumbered Wallets](/wallet-security/encumbered-wallets) | key benefits & features | full |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | security team contact | full |
| [SEAL 911 War Room Guidelines | SEAL](/incident-management/playbooks/seal-911-war-room-guidelines) | issue description | full |
| [Compliance & Regulatory Requirements | SEAL](/governance/compliance-regulatory-requirements) | 2. develop a robust security policy framework | full |

### ✅ tro-1.1.2: Treasury Registry and Documentation

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | access security | full |
| [Treasury Transaction Verification | SEAL](/treasury-operations/transaction-verification) | address verification | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | delegated proposer | full |
| [Multisig Registration & Documentation | SEAL](/multisig-for-protocols/registration-and-documentation) | initial registration | full |

### ✅ tro-1.1.3: Custody Architecture Rationale

| Page | Header | Coverage |
|------|--------|----------|
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | for multisig administrators | full |
| [Treasury Transaction Verification | SEAL](/treasury-operations/transaction-verification) | pre-transfer setup (48 hours before) | full |
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | access security | full |
| [Multisig Security Framework | SEAL](/multisig-for-protocols/overview) | how to use this guide | full |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |

### ✅ tro-1.1.4: Treasury Infrastructure Change Management

| Page | Header | Coverage |
|------|--------|----------|
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | access security | full |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | evm networks (ethereum, base, etc.) | partial |
| [Treasury Transaction Verification | SEAL](/treasury-operations/transaction-verification) | pre-transfer setup (48 hours before) | partial |
| [Multisig Registration & Documentation | SEAL](/multisig-for-protocols/registration-and-documentation) | signer verification process | partial |

### ✅ tro-2.1.1: Treasury Wallet Risk Classification

| Page | Header | Coverage |
|------|--------|----------|
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | mpc for large holdings | full |
| [Treasury Security Classification | SEAL](/treasury-operations/classification) | step 4: document your decision | partial |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | thresholds & configuration | partial |
| [Treasury Operations Security | SEAL](/treasury-operations/overview) | [classification framework](./classification) | partial |
| [Monitoring Alert Thresholds](/monitoring/thresholds) | set thresholds for alerts | partial |

### ✅ tro-2.1.2: Fund Allocation Limits and Rebalancing

| Page | Header | Coverage |
|------|--------|----------|
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | access security | full |
| [Treasury Transaction Verification | SEAL](/treasury-operations/transaction-verification) | pre-transfer setup (48 hours before) | full |
| [Treasury Security Classification | SEAL](/treasury-operations/classification) | step 1: impact assessment | partial |
| [Multisig Use Case Requirements | SEAL](/multisig-for-protocols/use-case-specific-requirements) | treasury multisigs | partial |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | partial |

### ✅ tro-3.1.1: Custody Platform Security Configuration

| Page | Header | Coverage |
|------|--------|----------|
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | mpc for large holdings | full |
| [Treasury Transaction Verification | SEAL](/treasury-operations/transaction-verification) | pre-transfer setup (48 hours before) | partial |
| [Custodial Account Registration | SEAL](/treasury-operations/registration-documents) | security configuration template | partial |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | thresholds & configuration | partial |
| [TEE-based Encumbered Wallets](/wallet-security/encumbered-wallets) | security considerations & best practices | partial |

### ⚠️ tro-3.1.2: Credential and Secret Management

| Page | Header | Coverage |
|------|--------|----------|
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | access security | partial |
| [Multisig Personal Security (OpSec) | SEAL](/multisig-for-protocols/personal-security-opsec) | dns security | partial |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | partial |

### ⚠️ tro-3.1.3: Access Reviews for Treasury Systems

| Page | Header | Coverage |
|------|--------|----------|
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | access security | partial |
| [Custodial Account Registration | SEAL](/treasury-operations/registration-documents) | — | partial |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | — | partial |
| [Multisig Personal Security (OpSec) | SEAL](/multisig-for-protocols/personal-security-opsec) | — | partial |
| [Backup Signing & Infrastructure | SEAL](/multisig-for-protocols/backup-signing-and-infrastructure) | — | partial |

### ✅ tro-3.1.4: Personnel Operational Security

| Page | Header | Coverage |
|------|--------|----------|
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | device security | full |
| [Seed Phrase Management](/wallet-security/seed-phrase-management) | multisig social recovery | partial |
| [Multisig Personal Security (OpSec) | SEAL](/multisig-for-protocols/personal-security-opsec) | what not to bring | partial |
| [Treasury Transaction Verification | SEAL](/treasury-operations/transaction-verification) | pre-transfer setup (48 hours before) | partial |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | treasury multisigs | partial |

### ⚠️ tro-4.1.1: Transaction Verification and Execution

| Page | Header | Coverage |
|------|--------|----------|
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | mpc for large holdings | partial |
| [Treasury Transaction Verification | SEAL](/treasury-operations/transaction-verification) | pre-transfer setup (48 hours before) | partial |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | thresholds & configuration | partial |
| [Secure Multisig Signing Process | SEAL](/wallet-security/signing-and-verification/secure-multisig-signing-process) | phase 1: signing the off-chain message | partial |
| [Multisig Use Case Requirements | SEAL](/multisig-for-protocols/use-case-specific-requirements) | additional requirements: | partial |

### ✅ tro-4.1.2: Signer and Approver Knowledge

| Page | Header | Coverage |
|------|--------|----------|
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | access security | full |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | communication & documentation | partial |
| [Treasury Transaction Verification | SEAL](/treasury-operations/transaction-verification) | communication security | partial |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | planning & setup | partial |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | delegated proposer | partial |

### ✅ tro-4.1.3: Secure Communication Procedures

| Page | Header | Coverage |
|------|--------|----------|
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | treasury multisigs | full |
| [Backup Signing & Infrastructure | SEAL](/multisig-for-protocols/backup-signing-and-infrastructure) | rpc backup options | full |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | immediate steps | partial |
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | access security | partial |
| [Multisig Personal Security (OpSec) | SEAL](/multisig-for-protocols/personal-security-opsec) | basic requirements | partial |

### ✅ tro-5.1.1: Protocol Evaluation and Exposure Limits

| Page | Header | Coverage |
|------|--------|----------|
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | access security | full |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | who this is for | partial |
| [Account Abstraction Wallets](/wallet-security/account-abstraction) | primary goal | partial |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | address whitelisting | partial |
| [Multisig Use Case Requirements | SEAL](/multisig-for-protocols/use-case-specific-requirements) | operational constraints: | partial |

### ⚠️ tro-5.1.2: Position Lifecycle Management

| Page | Header | Coverage |
|------|--------|----------|
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | who this is for | partial |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | smart contract control multisigs | partial |
| [Account Abstraction Wallets](/wallet-security/account-abstraction) | primary goal | partial |
| [Backup Signing & Infrastructure | SEAL](/multisig-for-protocols/backup-signing-and-infrastructure) | — | partial |
| [Multisig Setup & Configuration | SEAL](/multisig-for-protocols/setup-and-configuration) | address whitelisting | partial |

### ✅ tro-6.1.1: Monitoring and Threat Awareness

| Page | Header | Coverage |
|------|--------|----------|
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | security monitoring & logging | full |
| [SEAL 911 War Room Guidelines | SEAL](/incident-management/playbooks/seal-911-war-room-guidelines) | issue description | full |
| [Wallet Security Tools & Resources | SEAL](/wallet-security/tools-and-resources) | network security | full |
| [Treasury Transaction Verification | SEAL](/treasury-operations/transaction-verification) | pre-transfer setup (48 hours before) | partial |
| [On-Chain Monitoring Guidelines](/monitoring/guidelines) | define monitoring objectives | partial |

### ✅ tro-6.1.2: Incident Response Plan

| Page | Header | Coverage |
|------|--------|----------|
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | security monitoring & logging | full |
| [Secure Multisig Best Practices | SEAL](/wallet-security/secure-multisig-best-practices) | core concept: m-of-n scheme | full |
| [Treasury Transaction Verification | SEAL](/treasury-operations/transaction-verification) | pre-transfer setup (48 hours before) | partial |
| [Multisig Emergency Procedures | SEAL](/multisig-for-protocols/emergency-procedures) | security team contact | partial |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | planning & setup | partial |

### ⚠️ tro-7.1.1: Vendor Security Management

| Page | Header | Coverage |
|------|--------|----------|
| [SEAL 911 War Room Guidelines | SEAL](/incident-management/playbooks/seal-911-war-room-guidelines) | issue description | partial |
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | access security | partial |
| [Compliance & Regulatory Requirements | SEAL](/governance/compliance-regulatory-requirements) | 6. continuous monitoring and auditing | partial |
| [Wallet Security Tools & Resources | SEAL](/wallet-security/tools-and-resources) | monitoring & alerting | partial |
| [Treasury Transaction Verification | SEAL](/treasury-operations/transaction-verification) | pre-transfer setup (48 hours before) | partial |

### ✅ tro-7.1.2: Backup Infrastructure and Alternate Access

| Page | Header | Coverage |
|------|--------|----------|
| [Backup Signing & Infrastructure | SEAL](/multisig-for-protocols/backup-signing-and-infrastructure) | rpc backup options | full |
| [Multisig Implementation Checklist | SEAL](/multisig-for-protocols/implementation-checklist) | treasury multisigs | full |
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | access security | full |
| [Seed Phrase Management](/wallet-security/seed-phrase-management) | private key & seed phrase management | full |
| [Multisig Personal Security (OpSec) | SEAL](/multisig-for-protocols/personal-security-opsec) | basic requirements | partial |

### ✅ tro-8.1.1: Financial Recordkeeping and Reconciliation

| Page | Header | Coverage |
|------|--------|----------|
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | access security | full |
| [Treasury Transaction Verification | SEAL](/treasury-operations/transaction-verification) | pre-transfer setup (48 hours before) | partial |
| [Treasury Security Classification | SEAL](/treasury-operations/classification) | step 1: impact assessment | partial |
| [Treasury Operations Security | SEAL](/treasury-operations/overview) | what is treasury operations security? | partial |

### ✅ tro-8.1.2: Insurance Coverage

| Page | Header | Coverage |
|------|--------|----------|
| [Enhanced Controls for High-Risk Accounts | SEAL](/treasury-operations/enhanced-controls) | access security | full |
| [Treasury Transaction Verification | SEAL](/treasury-operations/transaction-verification) | pre-transfer setup (48 hours before) | partial |
| [Treasury Security Classification | SEAL](/treasury-operations/classification) | step 1: impact assessment | partial |
| [Treasury Operations Security | SEAL](/treasury-operations/overview) | what is treasury operations security? | partial |

## sfc-workspace-security

### ✅ ws-1.1.1: Workspace Security Owner

| Page | Header | Coverage |
|------|--------|----------|
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | practical application | full |
| [OpSec Core Principles](/opsec/principles/principles) | 2. principle of least privilege | full |
| [Travel Security Guide](/opsec/travel/guide) | — | full |
| [Discord Security](/guides/account_management/discord) | summary | full |
| [Physical & Environmental Security](/opsec/control-domains/physical-environmental) | secure workspace components | full |

### ⚠️ ws-1.1.2: Workspace Security Policy

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | **screen privacy and social engineering** | partial |
| [Understanding Threat Vectors](/awareness/understanding-threat-vectors) | 2.1.1. social engineering & phishing | partial |
| [Cultivating A Security Aware Mindset | SEAL](/awareness/cultivating-a-security-aware-mindset) | practical tips | partial |
| [OpSec Case Studies](/opsec/appendices/case-studies) | exercise 3: team member device compromise | partial |
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | — | partial |

### ✅ ws-1.1.3: Asset Inventory

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | **secure devices with encryption & updates** | full |
| [Volume Encryption](/encryption/volume-encryption) | what is volume encryption? | partial |
| [Partition Encryption](/encryption/partition-encryption) | what is partition encryption? | partial |
| [Encryption](/encryption/overview) | contents | partial |
| [Cloud Data Encryption](/encryption/cloud-data-encryption) | best practices | partial |

### ✅ ws-1.1.4: System and Data Classification

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | **secure devices with encryption & updates** | full |
| [Technical Security Controls](/opsec/control-domains/technical) | implementation steps | full |
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | relationship to implementation process | full |
| [Cloud Data Encryption](/encryption/cloud-data-encryption) | best practices | full |
| [Volume Encryption](/encryption/volume-encryption) | what is volume encryption? | full |

### ✅ ws-2.1.1: Device Security Standards

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | **secure devices with encryption & updates** | full |
| [Volume Encryption](/encryption/volume-encryption) | what is volume encryption? | partial |
| [Partition Encryption](/encryption/partition-encryption) | what is partition encryption? | partial |
| [Telegram Security](/guides/account_management/telegram) | device-level security | partial |
| [Cloud Data Encryption](/encryption/cloud-data-encryption) | best practices | partial |

### ⚠️ ws-2.1.2: Device Lifecycle Management

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | **screen privacy and social engineering** | partial |
| [Technical Security Controls](/opsec/control-domains/technical) | — | partial |
| [Physical & Environmental Security](/opsec/control-domains/physical-environmental) | — | partial |
| [Understanding Threat Vectors](/awareness/understanding-threat-vectors) | 2.1.1. social engineering & phishing | partial |

### ✅ ws-2.1.3: Endpoint Protection

| Page | Header | Coverage |
|------|--------|----------|
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | relationship to implementation process | full |
| [Travel Security Guide](/opsec/travel/guide) | **secure devices with encryption & updates** | partial |
| [Discord Security](/guides/account_management/discord) | summary | partial |
| [OpSec Core Principles](/opsec/principles/principles) | 5. continuous monitoring and improvement | partial |
| [Technical Security Controls](/opsec/control-domains/technical) | key components | partial |

### ⚠️ ws-2.1.4: Physical and Travel Security

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | — | partial |
| [Physical & Environmental Security](/opsec/control-domains/physical-environmental) | — | partial |
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | relationship to implementation process | partial |
| [Travel Security Quick Reference](/opsec/travel/tldr) | — | partial |

### ⚠️ ws-3.1.1: Account Lifecycle Management

| Page | Header | Coverage |
|------|--------|----------|
| [Discord Security](/guides/account_management/discord) | — | partial |
| [Travel Security Guide](/opsec/travel/guide) | **screen privacy and social engineering** | partial |
| [DPRK IT Worker TTPs](/dprk-it-workers/techniques-tactics-and-procedures) | — | partial |

### ⚠️ ws-3.1.2: Multi-Factor Authentication

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | **secure devices with encryption & updates** | partial |
| [Technical Security Controls](/opsec/control-domains/technical) | key components | partial |
| [Discord Security](/guides/account_management/discord) | summary | partial |
| [Telegram Security](/guides/account_management/telegram) | educate community members on security practices | partial |
| [Web3 Security Considerations](/opsec/core-concepts/web3-considerations) | self-custody responsibility | partial |

### ⚠️ ws-3.1.3: Organizational Account Security

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | — | partial |
| [Discord Security](/guides/account_management/discord) | — | partial |
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | relationship to implementation process | partial |
| [Telegram Security](/guides/account_management/telegram) | — | partial |
| [Google Workspace Security](/opsec/google/overview) | — | partial |

### ✅ ws-3.1.4: Credential Management Standards

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | **screen privacy and social engineering** | full |
| [Cultivating A Security Aware Mindset | SEAL](/awareness/cultivating-a-security-aware-mindset) | practical tips | partial |
| [Telegram Security](/guides/account_management/telegram) | account security checklist | partial |
| [Understanding Threat Vectors](/awareness/understanding-threat-vectors) | 2.1.1. social engineering & phishing | partial |
| [Google Workspace Security](/opsec/google/overview) | account security checklist | partial |

### ⚠️ ws-3.1.5: Access Reviews

| Page | Header | Coverage |
|------|--------|----------|
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | relationship to implementation process | partial |
| [Discord Security](/guides/account_management/discord) | server settings checklist | partial |
| [Travel Security Guide](/opsec/travel/guide) | — | partial |
| [Mitigating DPRK IT Worker Threats | SEAL](/dprk-it-workers/mitigating-dprk-it-workers) | hardening your organization | partial |
| [DPRK IT Worker TTPs](/dprk-it-workers/techniques-tactics-and-procedures) | did i hire a dprk it worker? | partial |

### ⚠️ ws-4.1.1: Software Evaluation and Approval

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | — | partial |
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | relationship to implementation process | partial |

### ⚠️ ws-4.1.2: Source Code and Repository Security

| Page | Header | Coverage |
|------|--------|----------|
| [GitHub Security](/guides/account_management/github) | repository settings | partial |
| [Travel Security Guide](/opsec/travel/guide) | **screen privacy and social engineering** | partial |
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | practical application | partial |
| [Discord Security](/guides/account_management/discord) | summary | partial |
| [OpSec Core Principles](/opsec/principles/principles) | 2. principle of least privilege | partial |

### ⚠️ ws-5.1.1: Network Security

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | — | partial |
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | 1. layered protection | partial |
| [Technical Security Controls](/opsec/control-domains/technical) | — | partial |
| [OpSec Core Principles](/opsec/principles/principles) | 1. defense in depth | partial |
| [Security Glossary](/opsec/appendices/glossary) | — | partial |

### ✅ ws-5.1.2: Secure Communications

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | **screen privacy and social engineering** | full |
| [Telegram Security](/guides/account_management/telegram) | account security checklist | partial |
| [Technical Security Controls](/opsec/control-domains/technical) | key components | partial |
| [Discord Security](/guides/account_management/discord) | additional recommendations | partial |
| [Web3 Security Considerations](/opsec/core-concepts/web3-considerations) | suggested steps | partial |

### ⚠️ ws-6.1.1: Security Onboarding

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | — | partial |
| [Personnel Security Controls](/opsec/control-domains/people) | security training & culture | partial |
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | — | partial |
| [Discord Security](/guides/account_management/discord) | — | partial |
| [DPRK IT Worker TTPs](/dprk-it-workers/techniques-tactics-and-procedures) | — | partial |

### ⚠️ ws-6.1.2: Security Offboarding

| Page | Header | Coverage |
|------|--------|----------|
| [Travel Security Guide](/opsec/travel/guide) | **screen privacy and social engineering** | partial |
| [Understanding Threat Vectors](/awareness/understanding-threat-vectors) | 2.1.1. social engineering & phishing | partial |

### ⚠️ ws-6.1.3: Security Awareness and Training

| Page | Header | Coverage |
|------|--------|----------|
| [Staying Informed And Continuous Learning | SEAL](/awareness/staying-informed-and-continuous-learning) | 4.1.1. training approaches | partial |
| [Personnel Security Controls](/opsec/control-domains/people) | key components | partial |
| [OpSec Case Studies](/opsec/appendices/case-studies) | case study 2: social engineering attack | partial |
| [Discord Security](/guides/account_management/discord) | server settings checklist | partial |
| [Travel Security Guide](/opsec/travel/guide) | **screen privacy and social engineering** | partial |

### ✅ ws-7.1.1: Workspace Security Monitoring and Incident Response

| Page | Header | Coverage |
|------|--------|----------|
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | relationship to implementation process | full |
| [OpSec Case Studies](/opsec/appendices/case-studies) | case study 1: private key compromise | partial |
| [Travel Security Guide](/opsec/travel/guide) | **screen privacy and social engineering** | partial |
| [OpSec Core Principles](/opsec/principles/principles) | implementation | partial |
| [Discord Security](/guides/account_management/discord) | server settings checklist | partial |

### ⚠️ ws-7.1.2: Insider Threat Assessment

| Page | Header | Coverage |
|------|--------|----------|
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | practical application | partial |
| [Travel Security Guide](/opsec/travel/guide) | — | partial |
| [Personnel Security Controls](/opsec/control-domains/people) | key components | partial |
| [OpSec Core Principles](/opsec/principles/principles) | implementation | partial |
| [Technical Security Controls](/opsec/control-domains/technical) | key components | partial |

### ⚠️ ws-7.1.3: Third-Party Access Management

| Page | Header | Coverage |
|------|--------|----------|
| [Security Fundamentals](/opsec/core-concepts/security-fundamentals) | relationship to implementation process | partial |
| [Security Glossary](/opsec/appendices/glossary) | — | partial |
| [Discord Security](/guides/account_management/discord) | — | partial |
| [Telegram Security](/guides/account_management/telegram) | — | partial |
| [Travel Security Guide](/opsec/travel/guide) | — | partial |

## Most Referenced Framework Pages

| Page | Controls Referencing |
|------|---------------------|
| /wallet-security/secure-multisig-best-practices | 46 |
| /opsec/travel/guide | 41 |
| /multisig-for-protocols/implementation-checklist | 35 |
| /multisig-for-protocols/setup-and-configuration | 33 |
| /multisig-for-protocols/backup-signing-and-infrastructure | 31 |
| /multisig-for-protocols/emergency-procedures | 27 |
| /opsec/core-concepts/security-fundamentals | 25 |
| /infrastructure/domain-and-dns-security/monitoring-and-alerting | 21 |
| /multisig-for-protocols/use-case-specific-requirements | 21 |
| /multisig-for-protocols/registration-and-documentation | 20 |
| /treasury-operations/enhanced-controls | 20 |
| /infrastructure/domain-and-dns-security/registrar-and-locks | 18 |
| /wallet-security/signing-and-verification/secure-multisig-signing-process | 18 |
| /treasury-operations/transaction-verification | 17 |
| /opsec/control-domains/technical | 16 |
| /multisig-for-protocols/overview | 16 |
| /opsec/principles/principles | 14 |
| /multisig-for-protocols/personal-security-opsec | 14 |
| /guides/account_management/discord | 14 |
| /infrastructure/domain-and-dns-security/dnssec-and-email | 13 |

