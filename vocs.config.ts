import { defineConfig } from 'vocs'

export default defineConfig({
  banner: {
    content: '***This is a work in progress and not a release. We are looking for volunteers. See Issues and Contribution to know how to collaborate.***',
    height: '40px',
    backgroundColor: '#8b5cf6',
    textColor: 'white'
  },
  title: 'Security Frameworks by SEAL',
  description: 'Comprehensive security framework documentation for Web3 projects and blockchain security best practices.',
  logoUrl: '/logo.svg',
  iconUrl: '/favicon.svg',
  sidebar: [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Introduction to Frameworks', link: '/intro/introduction' },
        { text: 'How to Navigate', link: '/intro/how-to-navigate-the-website' },
        { text: 'Overview of each Framework', link: '/intro/overview-of-each-framework' },
      ]
    },
    {
      text: 'Frameworks',
      collapsed: false,
      items: [
        {
          text: 'Community Management',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/community-management/README' },
            { text: 'Discord', link: '/community-management/discord' },
            { text: 'Twitter', link: '/community-management/twitter' },
            { text: 'Telegram', link: '/community-management/telegram' },
            { text: 'Google', link: '/community-management/google' },
          ]
        },
        {
          text: 'Awareness',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/awareness/README' },
            { text: 'Core Awareness Principles', link: '/awareness/core-awareness-principles' },
            { text: 'Understanding Threat Vectors', link: '/awareness/understanding-threat-vectors' },
            { text: 'Cultivating a Security-Aware Mindset', link: '/awareness/cultivating-a-security-aware-mindset' },
            { text: 'Staying Informed & Continuous Learning', link: '/awareness/staying-informed-and-continuous-learning' },
            { text: 'Resources & Further Reading', link: '/awareness/resources-and-further-reading' },
          ]
        },
        {
          text: 'Operational Security',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/opsec/README' },
            {
              text: 'Overview Details', // TODO: UNDERSTAND LINK POSITION HERE
              collapsed: true,
              items: [
                { text: 'Security Fundamentals', link: '/opsec/overview/security-fundamentals' },
                { text: 'Implementation Process', link: '/opsec/overview/implementation-process' },
                { text: 'Web3 considerations', link: '/opsec/overview/web3-considerations' },
              ]
            },
            { text: 'Threat Modeling Overview', link: '/opsec/threat-modeling-overview' },
            { text: 'Risk Management Overview', link: '/opsec/risk-management-overview' },
            {
              text: 'While Traveling',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/opsec/travel/README' },
                { text: 'Guide', link: '/opsec/travel/guide' },
                { text: 'TL;DR', link: '/opsec/travel/tldr' },
              ]
            },
            // { text: 'Governance & Program Management', link: '/opsec/governance-program-management' },
            // { text: 'Control Domains', link: '/opsec/control-domains' },
            // { text: 'Lifecycle', link: '/opsec/lifecycle' },
            // { text: 'Monitoring & Detection', link: '/opsec/monitoring-detection' },
            // { text: 'Incident Response & Recovery', link: '/opsec/incident-response-recovery' },
            // { text: 'Continuous Improvement & Metrics', link: '/opsec/continuous-improvement-metrics' },
            // { text: 'Integration & Mapping to Other Frameworks', link: '/opsec/integration' },
            // { text: 'Appendices', link: '/opsec/appendices' },
          ]
        },
        {
          text: 'Wallet Security',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/wallet-security/README' },
            { text: 'Custodial vs Non-Custodial', link: '/wallet-security/custodial-vs-non-custodial' },
            { text: 'Cold vs Hot Wallet', link: '/wallet-security/cold-vs-hot-wallet' },
            { text: 'Wallets For Beginners & Small Balances', link: '/wallet-security/for-beginners-&-small-balances' },
            { text: 'Wallets For Intermediates & Medium Funds', link: '/wallet-security/intermediates-&-medium-funds' },
            { text: 'Multisig Wallets For Advanced Users & High Funds', link: '/wallet-security/secure-multisig-best-practices' },
            { text: 'Account Abstraction Wallets', link: '/wallet-security/account-abstraction' },
            {
              text: 'Signing & Verification',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/wallet-security/signing-verification' },
                { text: 'Verifying Standard Transactions (EOA)', link: '/wallet-security/verifying-standard-transactions' },
                { text: 'Multisig Signing Process', link: '/wallet-security/secure-multisig-signing-process' },
                { text: 'Using EIP-7702', link: '/wallet-security/verifying-7702' },
              ]
            },
            { text: 'Private Key & Seed Phrase Management', link: '/wallet-security/private-key-management' },
            { text: 'Tools & Resources', link: '/wallet-security/tools-&-resources' },
          ]
        },
        {
          text: 'External Security Reviews',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/external-security-reviews/README' },
            {
              text: 'Smart Contract Audits',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/external-security-reviews/smart-contracts/README' },
                { text: 'Expectations', link: '/external-security-reviews/smart-contracts/expectation' },
                { text: 'Preparation Guide', link: '/external-security-reviews/smart-contracts/preparation' },
                { text: 'Vendor Selection', link: '/external-security-reviews/smart-contracts/vendor-selection' },
              ]
            },
            { text: 'Security Policies and Procedures', link: '/external-security-reviews/security-policies-procedures' },
          ]
        },
        // TODO: UNDERSTANDING LINK POSITIONING AS IT DOESNT MATCH (GITHUB/.DEV)
        // {
        //   text: 'Security Testing',
        //   collapsed: true,
        //   items: [
        //     { text: 'Overview', link: '/security-testing/README' },
        //     { text: 'Fuzz Testing', link: '/security-testing/fuzz-testing' },
        //     { text: 'Security Regression Testing', link: '/security-testing/integration-testing' },
        //     { text: 'Static Application Security Testing', link: '/security-testing/static-analysis' },
        //   ]
        // },
        {
          text: 'ENS',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/ens/README' },
            { text: 'Data Integrity & Verification', link: '/ens/data-integrity-verification' },
            { text: 'Cross-Chain Compatibility', link: '/ens/cross-chain-compatibility' },
            { text: 'Smart Contract Integration', link: '/ens/smart-contract-integration' },
            { text: 'Interface Compliance', link: '/ens/interface-compliance' },
            { text: 'Name Handling & Normalization', link: '/ens/name-handling-normalization' },
          ]
        },
        {
          text: 'Safe Harbor',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/safe-harbor/README' },
            { text: 'Safe Harbor Eligibility Checklist', link: '/safe-harbor/self-checklist' },
            { text: 'Self-Adoption Guide', link: '/safe-harbor/self-adoption-guide' },
            { text: 'Safe Harbor Scope Terms', link: '/safe-harbor/scope-terms' },
            { text: 'On-Chain Adoption Guide', link: '/safe-harbor/on-chain-adoption-guide' },
            { text: 'Whitehat', link: '/safe-harbor/whitehat' },
          ]
        },
        {
          text: 'Vulnerability Disclosure',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/vulnerability-disclosure/README' },
            { text: 'Security Contact', link: '/vulnerability-disclosure/security-contact' },
            { text: 'Bug Bounties', link: '/vulnerability-disclosure/bug-bounties' },
          ]
        },
        {
          text: 'Infrastructure',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/infrastructure/README' },
            { text: 'Asset Inventory', link: '/infrastructure/asset-inventory' },
            { text: 'Cloud Infrastructure', link: '/infrastructure/cloud' },
            { text: 'DDoS Protection', link: '/infrastructure/ddos-protection' },
            { text: 'DNS and Domain Registration', link: '/infrastructure/dns-and-domain-registration' },
            { text: 'Identity and Access Management', link: '/infrastructure/identity-and-access-management' },
            { text: 'Network Security', link: '/infrastructure/network-security' },
            { text: 'Operating System Security', link: '/infrastructure/operating-system-security' },
            { text: 'Zero-Trust Principles', link: '/infrastructure/zero-trust-principles' },
          ]
        },
        {
          text: 'Monitoring',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/monitoring/README' },
            { text: 'Guidelines', link: '/monitoring/guidelines' },
            { text: 'Thresholds', link: '/monitoring/thresholds' },
          ]
        },
        {
          text: 'Front-End/Web Application',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/front-end-web-app/README' },
            { text: 'Web Application Security', link: '/front-end-web-app/web-application-security' },
            { text: 'Mobile Application Security', link: '/front-end-web-app/mobile-application-security' },
            { text: 'Common Vulnerabilities', link: '/front-end-web-app/common-vulnerabilities' },
            { text: 'Security Tools and Resources', link: '/front-end-web-app/security-tools-resources' },
          ]
        },
        {
          text: 'Incident Management',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/incident-management/README' },
            { text: 'Communication Strategies', link: '/incident-management/communication-strategies' },
            { text: 'Incident Detection and Response', link: '/incident-management/incident-detection-and-response' },
            { text: 'Lessons Learned', link: '/incident-management/lessons-learned' },
            { text: 'Playbooks', link: '/incident-management/playbooks' },
            { text: 'SEAL 911 War Room Guidelines', link: '/incident-management/seal-911-war-room-guidelines' },
            { text: 'Decentralized Incident Response Framework (DeIRF)', link: '/incident-management/decentralized-ir' },
          ]
        },
        {
          text: 'Threat Modeling',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/threat-modeling/README' },
            { text: 'Create and Maintain Threat Models', link: '/threat-modeling/create-maintain-threat-models' },
            { text: 'Identity Mitigate Threats', link: '/threat-modeling/identity-mitigate-threats' },
          ]
        },
        {
          text: 'Governance',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/governance/README' },
            { text: 'Compliance with Regulatory Requirements', link: '/governance/compliance-regulatory-requirements' },
            { text: 'Risk Management', link: '/governance/risk-management' },
            { text: 'Security Metrics and KPIs', link: '/governance/security-metrics-kpis' },
          ]
        },
        {
          text: 'DevSecOps',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/devsecops/README' },
            { text: 'Code Signing', link: '/devsecops/code-signing' },
            { text: 'Continuous Integration and Deployment', link: '/devsecops/continuous-integration-continuous-deployment' },
            { text: 'Integrated Development Environments', link: '/devsecops/integrated-development-environments' },
            { text: 'Repository Hardening', link: '/devsecops/repository-hardening' },
            { text: 'Security Testing', link: '/devsecops/security-testing' },
          ]
        },
        {
          text: 'Privacy',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/privacy/README' },
            { text: 'Secure Browsing', link: '/privacy/secure-browsing' },
            { text: 'Data Removal Services', link: '/privacy/data-removal-services' },
            { text: 'Digital Footprint', link: '/privacy/digital-footprint' },
            { text: 'Encrypted Communication Tools', link: '/privacy/encrypted-communication-tools' },
            { text: 'Financial Privacy Services', link: '/privacy/financial-privacy-services' },
            { text: 'Privacy-Focused Operating Systems and Tools', link: '/privacy/privacy-focused-operating-systems-tools' },
            { text: 'VPN Services', link: '/privacy/vpn-services' },
          ]
        },
        {
          text: 'Supply Chain',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/supply-chain/README' },
            { text: 'Dependency Awareness', link: '/supply-chain/dependency-awareness' },
            { text: 'Supply Chain Levels for Software Artifacts', link: '/supply-chain/supply-chain-levels-software-artifacts' },
          ]
        },
        {
          text: 'Security Automation',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/security-automation/README' },
            { text: 'Threat Detection and Response', link: '/security-automation/threat-detection-response' },
            { text: 'Compliance Checks', link: '/security-automation/compliance-checks' },
            { text: 'Infrastructure as Code', link: '/security-automation/infrastructure-as-code' },
          ]
        },
        {
          text: 'Identity and Access Management IAM',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/iam/README' },
            { text: 'Role-Based Access Control', link: '/iam/role-based-access-control' },
            { text: 'Secure Authentication', link: '/iam/secure-authentication' },
            { text: 'Access Management Best Practices', link: '/iam/access-management' },
          ]
        },
        {
          text: 'Secure Software Development',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/secure-software-development/README' },
            { text: 'Secure Coding Standards Guidelines', link: '/secure-software-development/secure-coding-standards-guidelines' },
            { text: 'Code Reviews and Peer Audits', link: '/secure-software-development/code-reviews-peer-audits' },
            { text: 'Secure Code Repositories and Version Control', link: '/secure-software-development/secure-code-repositories-version-control' },
            { text: 'Threat Modeling and Secure Design Principles', link: '/secure-software-development/threat-modeling-secure-design-principles' },
          ]
        },
        {
          text: 'Encryption',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/encryption/README' },
            { text: 'Cloud Data Encryption', link: '/encryption/cloud-data-encryption' },
            { text: 'Communication Encryption', link: '/encryption/communication-encryption' },
            { text: 'Database Encryption', link: '/encryption/database-encryption' },
            { text: 'Email Encryption', link: '/encryption/email-encryption' },
            { text: 'Encryption in Transit', link: '/encryption/encryption-in-transit' },
            { text: 'File Encryption', link: '/encryption/file-encryption' },
            { text: 'Full Disk Encryption', link: '/encryption/full-disk-encryption' },
            { text: 'Hardware Encryption', link: '/encryption/hardware-encryption' },
            { text: 'Partition Encryption', link: '/encryption/partition-encryption' },
            { text: 'Volume Encryption', link: '/encryption/volume-encryption' },
          ]
        },
      ]
    },
    {
      text: 'About this',
      collapsed: false,
      items: [
        { text: 'What It Is', link: '/intro/what-is-it' },
        { text: 'What It Isn\'t', link: '/intro/what-it-isnt' },
        { text: 'Contributing', link: '/contribute/contributing',
          collapsed: true,
          items: [
            { text: 'Contributors', link: '/contribute/contributors' },
            { text: 'Stewards', link: '/contribute/stewards' },
            
          ]
        },
      ]
    }
  ],
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/security-alliance/frameworks',
    },
    {
      icon: 'discord',
      link: 'https://discord.com/invite/securityalliance',
    },
  ],
  editLink: {
    pattern: 'https://github.com/security-alliance/frameworks/edit/develop/docs/pages/:path',
    text: 'Suggest changes to this page'
  }
})