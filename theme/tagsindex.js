const tagsIndex = {
  "Cloud": ["infrastructure/cloud.html", "infrastructure/ddos-protection.html", "infrastructure/network-security.html", "infrastructure/index.html", "security-automation/compliance-checks.html", "security-automation/infrastructure-as-code.html", "security-automation/index.html", "encryption/cloud-data-encryption.html", "encryption/index.html"],
  "Community & Marketing": ["community-management/discord.html", "community-management/twitter.html", "community-management/telegram.html", "community-management/google.html", "community-management/index.html", "awareness/core-awareness-principles.html", "awareness/understanding-threat-vectors.html", "awareness/cultivating-a-security-aware-mindset.html", "awareness/staying-informed-and-continuous-learning.html", "awareness/resources-and-further-reading.html", "awareness/index.html"],
  "DAO": ["safe-harbor/protocol.html", "safe-harbor/index.html"],
  "Devops": ["operational-security/g-suite-security.html", "operational-security/standard-operating-environment.html", "operational-security/index.html", "external-security-reviews/preparation.html", "external-security-reviews/index.html", "vulnerability-disclosure/index.html", "infrastructure/asset-inventory.html", "infrastructure/cloud.html", "infrastructure/ddos-protection.html", "infrastructure/network-security.html", "infrastructure/operating-system-security.html", "infrastructure/index.html", "front-end-web-app/common-vulnerabilities.html", "front-end-web-app/index.html", "incident-management/lessons-learned.html", "incident-management/index.html", "threat-modeling/identity-mitigate-threats.html", "governance/compliance-regulatory-requirements.html", "devsecops/code-signing.html", "devsecops/continuous-integration-continuous-deployment.html", "devsecops/integrated-development-environments.html", "devsecops/repository-hardening.html", "devsecops/security-testing.html", "devsecops/index.html", "privacy/index.html", "supply-chain/index.html", "security-automation/threat-detection-response.html", "security-automation/compliance-checks.html", "security-automation/infrastructure-as-code.html", "security-automation/index.html", "iam/role-based-access-control.html", "iam/secure-authentication.html", "iam/access-management-best-practices.html", "secure-software-development/secure-code-repositories-version-control.html", "secure-software-development/index.html", "security-testing/index.html", "encryption/cloud-data-encryption.html", "encryption/index.html"],
  "Engineer/Developer": ["user-team-security/phishing-social-engineering.html", "operational-security/g-suite-security.html", "operational-security/standard-operating-environment.html", "key-management/cold-vs-hot-wallet.html", "key-management/custodial-vs-non-custodial.html", "key-management/hardware-wallets.html", "key-management/signing-schemes.html", "key-management/software-wallets.html", "key-management/index.html", "vulnerability-disclosure/security-contact.html", "vulnerability-disclosure/bug-bounties.html", "vulnerability-disclosure/index.html", "infrastructure/asset-inventory.html", "infrastructure/cloud.html", "infrastructure/ddos-protection.html", "infrastructure/dns-and-domain-registration.html", "infrastructure/identity-and-access-management.html", "infrastructure/network-security.html", "infrastructure/operating-system-security.html", "infrastructure/zero-trust-principles.html", "infrastructure/index.html", "monitoring/guidelines.html", "monitoring/thresholds.html", "monitoring/index.html", "front-end-web-app/web-application-security.html", "front-end-web-app/mobile-application-security.html", "front-end-web-app/common-vulnerabilities.html", "front-end-web-app/security-tools-resources.html", "front-end-web-app/index.html", "threat-modeling/create-maintain-threat-models.html", "threat-modeling/identity-mitigate-threats.html", "threat-modeling/index.html", "devsecops/code-signing.html", "devsecops/continuous-integration-continuous-deployment.html", "devsecops/integrated-development-environments.html", "devsecops/repository-hardening.html", "devsecops/security-testing.html", "devsecops/index.html", "privacy/secure-browsing.html", "privacy/data-removal-services.html", "privacy/digital-footprint.html", "privacy/encrypted-communication-tools.html", "privacy/financial-privacy-services.html", "privacy/privacy-focused-operating-systems-tools.html", "privacy/vpn-services.html", "privacy/index.html", "supply-chain/dependency-awareness.html", "supply-chain/supply-chain-levels-software-artifacts.html", "supply-chain/index.html", "security-automation/threat-detection-response.html", "security-automation/compliance-checks.html", "security-automation/infrastructure-as-code.html", "security-automation/index.html", "iam/role-based-access-control.html", "iam/secure-authentication.html", "iam/access-management-best-practices.html", "iam/index.html", "secure-software-development/secure-coding-standards-guidelines.html", "secure-software-development/code-reviews-peer-audits.html", "secure-software-development/secure-code-repositories-version-control.html", "secure-software-development/threat-modeling-secure-design-principles.html", "secure-software-development/index.html", "security-testing/dynamic-application-security-testing.html", "security-testing/fuzz-testing.html", "security-testing/index.html", "encryption/cloud-data-encryption.html", "encryption/communication-encryption.html", "encryption/database-encryption.html", "encryption/email-encryption.html", "encryption/encryption-in-transit.html", "encryption/file-encryption.html", "encryption/full-disk-encryption.html", "encryption/hardware-encryption.html", "encryption/partition-encryption.html", "encryption/volume-encryption.html", "encryption/index.html"],
  "Finance": ["key-management/hardware-wallets.html"],
  "HR": ["awareness/core-awareness-principles.html", "awareness/understanding-threat-vectors.html", "awareness/cultivating-a-security-aware-mindset.html", "awareness/staying-informed-and-continuous-learning.html", "awareness/resources-and-further-reading.html", "awareness/index.html", "user-team-security/security-training.html", "user-team-security/security-aware-culture.html", "operational-security/g-suite-security.html", "external-security-reviews/security-policies-procedures.html", "governance/compliance-regulatory-requirements.html", "iam/role-based-access-control.html", "iam/secure-authentication.html", "iam/access-management-best-practices.html"],
  "Legal & Compliance": ["external-security-reviews/security-policies-procedures.html", "governance/compliance-regulatory-requirements.html", "governance/risk-management.html", "governance/security-metrics-kpis.html", "governance/index.html"],
  "Operations & Strategy": ["intro/overview-of-each-framework.html", "awareness/core-awareness-principles.html", "awareness/understanding-threat-vectors.html", "awareness/cultivating-a-security-aware-mindset.html", "awareness/staying-informed-and-continuous-learning.html", "awareness/resources-and-further-reading.html", "awareness/index.html", "user-team-security/security-training.html", "user-team-security/security-aware-culture.html", "user-team-security/index.html", "operational-security/detecting-and-mitigating-insider-threats.html", "operational-security/g-suite-security.html", "operational-security/password-secrets-management.html", "operational-security/physical-security.html", "operational-security/sim-swapping.html", "operational-security/telegram.html", "operational-security/wireless-security.html", "operational-security/index.html", "key-management/hardware-wallets.html", "external-security-reviews/expectation.html", "external-security-reviews/preparation.html", "external-security-reviews/security-policies-procedures.html", "external-security-reviews/vendor-selection.html", "external-security-reviews/index.html", "infrastructure/cloud.html", "infrastructure/ddos-protection.html", "infrastructure/dns-and-domain-registration.html", "infrastructure/network-security.html", "infrastructure/operating-system-security.html", "infrastructure/zero-trust-principles.html", "incident-management/communication-strategies.html", "incident-management/incident-detection-and-response.html", "incident-management/lessons-learned.html", "incident-management/playbooks.html", "incident-management/seal-911-war-room-guidelines.html", "incident-management/index.html", "governance/compliance-regulatory-requirements.html", "governance/risk-management.html", "governance/security-metrics-kpis.html", "governance/index.html", "iam/role-based-access-control.html", "iam/secure-authentication.html", "iam/access-management-best-practices.html", "iam/index.html", "security-testing/index.html"],
  "Protocol": ["safe-harbor/protocol.html", "safe-harbor/index.html"],
  "SEAL/Initiative": ["intro/introduction.html", "safe-harbor/protocol.html", "safe-harbor/whitehat.html", "safe-harbor/index.html"],
  "SRE": ["operational-security/standard-operating-environment.html", "operational-security/index.html", "infrastructure/asset-inventory.html", "infrastructure/cloud.html", "infrastructure/ddos-protection.html", "infrastructure/network-security.html", "infrastructure/operating-system-security.html", "infrastructure/index.html", "incident-management/lessons-learned.html", "incident-management/index.html", "devsecops/continuous-integration-continuous-deployment.html", "devsecops/security-testing.html", "devsecops/index.html", "security-automation/threat-detection-response.html", "security-automation/compliance-checks.html", "security-automation/infrastructure-as-code.html", "security-automation/index.html", "security-testing/index.html"],
  "Security Specialist": ["intro/overview-of-each-framework.html", "community-management/discord.html", "community-management/google.html", "awareness/core-awareness-principles.html", "awareness/understanding-threat-vectors.html", "awareness/cultivating-a-security-aware-mindset.html", "awareness/staying-informed-and-continuous-learning.html", "awareness/resources-and-further-reading.html", "awareness/index.html", "user-team-security/security-training.html", "user-team-security/security-aware-culture.html", "user-team-security/phishing-social-engineering.html", "user-team-security/index.html", "operational-security/detecting-and-mitigating-insider-threats.html", "operational-security/g-suite-security.html", "operational-security/password-secrets-management.html", "operational-security/physical-security.html", "operational-security/sim-swapping.html", "operational-security/standard-operating-environment.html", "operational-security/telegram.html", "operational-security/wireless-security.html", "operational-security/index.html", "key-management/cold-vs-hot-wallet.html", "key-management/custodial-vs-non-custodial.html", "key-management/hardware-wallets.html", "key-management/signing-schemes.html", "key-management/software-wallets.html", "key-management/index.html", "external-security-reviews/expectation.html", "external-security-reviews/preparation.html", "external-security-reviews/security-policies-procedures.html", "external-security-reviews/vendor-selection.html", "external-security-reviews/index.html", "vulnerability-disclosure/security-contact.html", "vulnerability-disclosure/bug-bounties.html", "vulnerability-disclosure/index.html", "infrastructure/asset-inventory.html", "infrastructure/cloud.html", "infrastructure/ddos-protection.html", "infrastructure/dns-and-domain-registration.html", "infrastructure/identity-and-access-management.html", "infrastructure/network-security.html", "infrastructure/operating-system-security.html", "infrastructure/zero-trust-principles.html", "infrastructure/index.html", "monitoring/guidelines.html", "monitoring/thresholds.html", "monitoring/index.html", "front-end-web-app/web-application-security.html", "front-end-web-app/mobile-application-security.html", "front-end-web-app/common-vulnerabilities.html", "front-end-web-app/security-tools-resources.html", "front-end-web-app/index.html", "incident-management/communication-strategies.html", "incident-management/incident-detection-and-response.html", "incident-management/lessons-learned.html", "incident-management/playbooks.html", "incident-management/seal-911-war-room-guidelines.html", "incident-management/index.html", "threat-modeling/create-maintain-threat-models.html", "threat-modeling/identity-mitigate-threats.html", "threat-modeling/index.html", "devsecops/code-signing.html", "devsecops/continuous-integration-continuous-deployment.html", "devsecops/integrated-development-environments.html", "devsecops/repository-hardening.html", "devsecops/security-testing.html", "devsecops/index.html", "privacy/secure-browsing.html", "privacy/data-removal-services.html", "privacy/digital-footprint.html", "privacy/encrypted-communication-tools.html", "privacy/financial-privacy-services.html", "privacy/privacy-focused-operating-systems-tools.html", "privacy/vpn-services.html", "privacy/index.html", "supply-chain/dependency-awareness.html", "supply-chain/supply-chain-levels-software-artifacts.html", "supply-chain/index.html", "security-automation/threat-detection-response.html", "security-automation/compliance-checks.html", "security-automation/infrastructure-as-code.html", "security-automation/index.html", "iam/role-based-access-control.html", "iam/secure-authentication.html", "iam/access-management-best-practices.html", "iam/index.html", "secure-software-development/secure-coding-standards-guidelines.html", "secure-software-development/code-reviews-peer-audits.html", "secure-software-development/secure-code-repositories-version-control.html", "secure-software-development/threat-modeling-secure-design-principles.html", "secure-software-development/index.html", "security-testing/dynamic-application-security-testing.html", "security-testing/fuzz-testing.html", "security-testing/security-regression-testing.html", "security-testing/static-application-security-testing.html", "security-testing/index.html", "encryption/cloud-data-encryption.html", "encryption/communication-encryption.html", "encryption/database-encryption.html", "encryption/email-encryption.html", "encryption/encryption-in-transit.html", "encryption/file-encryption.html", "encryption/full-disk-encryption.html", "encryption/hardware-encryption.html", "encryption/partition-encryption.html", "encryption/volume-encryption.html", "encryption/index.html"],
  "Whitehat": ["safe-harbor/whitehat.html", "safe-harbor/index.html"],
};
