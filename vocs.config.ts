import { defineConfig } from 'vocs'

const config = {
  banner: {
    content: '***This is a work in progress and not a release. We are looking for volunteers. See [Issues](https://github.com/security-alliance/frameworks/issues) and [Contribution](https://github.com/security-alliance/frameworks/blob/develop/docs/pages/contribute/contributing.mdx) to know how to collaborate.***',
    height: '30px',
    backgroundColor: '#8b5cf6',
    textColor: 'white',
    dismissable: false
  },
  title: 'Security Frameworks by SEAL',
  description: 'Comprehensive security framework documentation for Web3 projects and blockchain security best practices.',
  logoUrl: '/logo/frameworks-full.svg',
  iconUrl: '/logo/favicon.svg',
  sidebar: [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Introduction to Frameworks', link: '/intro/introduction' },
        { text: 'How to Navigate the Website', link: '/intro/how-to-navigate-the-website' },
        { text: 'Overview of each Framework', link: '/intro/overview-of-each-framework' },
      ]
    },
    {
      text: 'Frameworks',
      collapsed: false,
      items: [
        {
          text: 'Community Management',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/community-management/overview' },
            { text: 'Discord', link: '/community-management/discord' },
            { text: 'Twitter', link: '/community-management/twitter' },
            { text: 'Telegram', link: '/community-management/telegram' },
            { text: 'Google', link: '/community-management/google' },
          ]
        },
        {
          text: 'Awareness',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/awareness/overview' },
            { text: 'Core Awareness Principles', link: '/awareness/core-awareness-principles' },
            { text: 'Understanding Threat Vectors', link: '/awareness/understanding-threat-vectors' },
            { text: 'Cultivating a Security-Aware Mindset', link: '/awareness/cultivating-a-security-aware-mindset' },
            { text: 'Staying Informed & Continuous Learning', link: '/awareness/staying-informed-and-continuous-learning' },
            { text: 'Resources & Further Reading', link: '/awareness/resources-and-further-reading' },
          ]
        },
        {
          text: 'Operational Security',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/opsec/overview' },
            {
              text: 'OpSec Core Concepts',
              collapsed: false,
              items: [
                { text: 'Security Fundamentals', link: '/opsec/core-concepts/security-fundamentals' },
                { text: 'Implementation Process', link: '/opsec/core-concepts/implementation-process' },
                { text: 'Web3 considerations', link: '/opsec/core-concepts/web3-considerations' },
              ]
            },
            { text: 'Threat Modeling Overview', link: '/opsec/threat-modeling-overview' },
            { text: 'Risk Management Overview', link: '/opsec/risk-management-overview' },
            {
              text: 'While Traveling',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/opsec/travel/overview' },
                { text: 'Guide', link: '/opsec/travel/guide' },
                { text: 'TL;DR', link: '/opsec/travel/tldr' },
              ]
            },
            { text: 'Governance & Program Management', link: '/opsec/governance-program-management' },
            { text: 'Control Domains', link: '/opsec/control-domains' },
            { text: 'Lifecycle', link: '/opsec/lifecycle' },
            { text: 'Monitoring & Detection', link: '/opsec/monitoring-detection' },
            { text: 'Incident Response & Recovery', link: '/opsec/incident-response-recovery' },
            { text: 'Continuous Improvement & Metrics', link: '/opsec/continuous-improvement-metrics' },
            { text: 'Integration & Mapping to Other Frameworks', link: '/opsec/integration' },
            { text: 'Appendices', link: '/opsec/appendices' },
          ]
        },
        {
          text: 'Wallet Security',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/wallet-security/overview' },
            { text: 'Custodial vs Non-Custodial', link: '/wallet-security/custodial-vs-non-custodial' },
            { text: 'Cold vs Hot Wallet', link: '/wallet-security/cold-vs-hot-wallet' },
            { text: 'Wallets For Beginners & Small Balances', link: '/wallet-security/for-beginners-&-small-balances' },
            { text: 'Wallets For Intermediates & Medium Funds', link: '/wallet-security/intermediates-&-medium-funds' },
            { text: 'Multisig Wallets For Advanced Users & High Funds', link: '/wallet-security/secure-multisig-best-practices' },
            { text: 'Account Abstraction Wallets', link: '/wallet-security/account-abstraction' },
            {
              text: 'Signing & Verification',
              collapsed: false,
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
          collapsed: false,
          items: [
            { text: 'Overview', link: '/external-security-reviews/overview' },
            {
              text: 'Smart Contract Audits',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/external-security-reviews/smart-contracts/overview' },
                { text: 'Manual Review', link: '/external-security-reviews/smart-contracts/manual-review' },
                { text: 'Expectations', link: '/external-security-reviews/smart-contracts/expectation' },
                { text: 'Preparation Guide', link: '/external-security-reviews/smart-contracts/preparation' },
                { text: 'Vendor Selection', link: '/external-security-reviews/smart-contracts/vendor-selection' },
              ]
            },
            { text: 'Security Policies and Procedures', link: '/external-security-reviews/security-policies-procedures' },
          ]
        },
        {
          text: 'Vulnerability Disclosure',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/vulnerability-disclosure/overview' },
            { text: 'Security Contact', link: '/vulnerability-disclosure/security-contact' },
            { text: 'Bug Bounties', link: '/vulnerability-disclosure/bug-bounties' },
          ]
        },
        {
          text: 'Infrastructure',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/infrastructure/overview' },
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
          collapsed: false,
          items: [
            { text: 'Overview', link: '/monitoring/overview' },
            { text: 'Guidelines', link: '/monitoring/guidelines' },
            { text: 'Thresholds', link: '/monitoring/thresholds' },
          ]
        },
        {
          text: 'Front-End/Web Application',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/front-end-web-app/overview' },
            { text: 'Web Application Security', link: '/front-end-web-app/web-application-security' },
            { text: 'Mobile Application Security', link: '/front-end-web-app/mobile-application-security' },
            { text: 'Common Vulnerabilities', link: '/front-end-web-app/common-vulnerabilities' },
            { text: 'Security Tools and Resources', link: '/front-end-web-app/security-tools-resources' },
          ]
        },
        {
          text: 'Incident Management',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/incident-management/overview' },
            { text: 'Communication Strategies', link: '/incident-management/communication-strategies' },
            { text: 'Incident Detection and Response', link: '/incident-management/incident-detection-and-response' },
            { text: 'Lessons Learned', link: '/incident-management/lessons-learned' },
            { text: 'Playbooks', link: '/incident-management/playbooks' },
            { text: 'SEAL 911 War Room Guidelines', link: '/incident-management/seal-911-war-room-guidelines' },
            { text: 'Decentralized Incident Response Framework (DeIRF)', link: '/incident-management/decentralized-ir', dev: true },
          ]
        },
        {
          text: 'Threat Modeling',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/threat-modeling/overview' },
            { text: 'Create and Maintain Threat Models', link: '/threat-modeling/create-maintain-threat-models' },
            { text: 'Identity Mitigate Threats', link: '/threat-modeling/identity-mitigate-threats' },
          ]
        },
        {
          text: 'DPRK IT Workers',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/dprk-it-workers/overview' },
            { text: 'General Information', link: '/dprk-it-workers/general-information' },
            { text: 'Techniques, Tactics and Procedures', link: '/dprk-it-workers/techniques-tactics-and-procedures' },
            { text: 'Mitigating DPRK IT Workers', link: '/dprk-it-workers/mitigating-dprk-it-workers' },
            { text: 'Case Studies', link: '/dprk-it-workers/case-studies' },
            { text: 'Summary', link: '/dprk-it-workers/summary' },
          ]
        },
        {
          text: 'Governance',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/governance/overview' },
            { text: 'Compliance with Regulatory Requirements', link: '/governance/compliance-regulatory-requirements' },
            { text: 'Risk Management', link: '/governance/risk-management' },
            { text: 'Security Metrics and KPIs', link: '/governance/security-metrics-kpis' },
          ]
        },
        {
          text: 'DevSecOps',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/devsecops/overview' },
            { text: 'Code Signing', link: '/devsecops/code-signing' },
            { text: 'Continuous Integration and Deployment', link: '/devsecops/continuous-integration-continuous-deployment' },
            { text: 'Integrated Development Environments', link: '/devsecops/integrated-development-environments' },
            { text: 'Repository Hardening', link: '/devsecops/repository-hardening' },
            { text: 'Security Testing', link: '/devsecops/security-testing' },
          ]
        },
        {
          text: 'Privacy',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/privacy/overview' },
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
          collapsed: false,
          items: [
            { text: 'Overview', link: '/supply-chain/overview' },
            { text: 'Dependency Awareness', link: '/supply-chain/dependency-awareness' },
            { text: 'Supply Chain Levels for Software Artifacts', link: '/supply-chain/supply-chain-levels-software-artifacts' },
          ]
        },
        {
          text: 'Security Automation',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/security-automation/overview' },
            { text: 'Threat Detection and Response', link: '/security-automation/threat-detection-response' },
            { text: 'Compliance Checks', link: '/security-automation/compliance-checks' },
            { text: 'Infrastructure as Code', link: '/security-automation/infrastructure-as-code' },
          ]
        },
        {
          text: 'Identity and Access Management IAM',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/iam/overview' },
            { text: 'Role-Based Access Control', link: '/iam/role-based-access-control' },
            { text: 'Secure Authentication', link: '/iam/secure-authentication' },
            { text: 'Access Management Best Practices', link: '/iam/access-management' },
          ]
        },
        {
          text: 'Secure Software Development',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/secure-software-development/overview' },
            { text: 'Secure Coding Standards Guidelines', link: '/secure-software-development/secure-coding-standards-guidelines' },
            { text: 'Code Reviews and Peer Audits', link: '/secure-software-development/code-reviews-peer-audits' },
            { text: 'Secure Code Repositories and Version Control', link: '/secure-software-development/secure-code-repositories-version-control' },
            { text: 'Threat Modeling and Secure Design Principles', link: '/secure-software-development/threat-modeling-secure-design-principles' },
          ]
        },
        {
          text: 'Security Testing',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/security-testing/overview' },
            { text: 'Unit Testing', link: '/security-testing/unit-testing' },
            { text: 'Integration Testing', link: '/security-testing/integration-testing' },
            { text: 'Fuzz Testing', link: '/security-testing/fuzz-testing' },
            { text: 'Static Analysis', link: '/security-testing/static-analysis' },
            { text: 'Formal Verification', link: '/security-testing/formal-verification' },
            { text: 'Mutation Testing', link: '/security-testing/mutation-testing' }
          ]
        },
        {
          text: 'ENS',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/ens/overview' },
            { text: 'Data Integrity & Verification', link: '/ens/data-integrity-verification' },
            { text: 'Cross-Chain Compatibility', link: '/ens/cross-chain-compatibility' },
            { text: 'Smart Contract Integration', link: '/ens/smart-contract-integration' },
            { text: 'Interface Compliance', link: '/ens/interface-compliance' },
            { text: 'Name Handling & Normalization', link: '/ens/name-handling-normalization' },
          ]
        },
        {
          text: 'Safe Harbor',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/safe-harbor/overview' },
            { text: 'Safe Harbor Eligibility Checklist', link: '/safe-harbor/self-checklist' },
            { text: 'Self-Adoption Guide', link: '/safe-harbor/self-adoption-guide' },
            { text: 'Safe Harbor Scope Terms', link: '/safe-harbor/scope-terms' },
            { text: 'On-Chain Adoption Guide', link: '/safe-harbor/on-chain-adoption-guide' },
            { text: 'Whitehat', link: '/safe-harbor/whitehat' },
          ]
        },
        {
          text: 'Monitoring',
          collapsed: false,
          dev: true,
          items: [
            { text: 'Overview', link: '/monitoring/overview', dev: true },
            { text: 'Guidelines', link: '/monitoring/guidelines', dev: true },
            { text: 'Thresholds', link: '/monitoring/thresholds', dev: true },
          ]
        },
        {
          text: 'Encryption',
          collapsed: false,
          dev: true,
          items: [
            { text: 'Overview', link: '/encryption/overview', dev: true },
            { text: 'Cloud Data Encryption', link: '/encryption/cloud-data-encryption', dev: true },
            { text: 'Communication Encryption', link: '/encryption/communication-encryption', dev: true },
            { text: 'Database Encryption', link: '/encryption/database-encryption', dev: true },
            { text: 'Email Encryption', link: '/encryption/email-encryption', dev: true },
            { text: 'Encryption in Transit', link: '/encryption/encryption-in-transit', dev: true },
            { text: 'File Encryption', link: '/encryption/file-encryption', dev: true },
            { text: 'Full Disk Encryption', link: '/encryption/full-disk-encryption', dev: true },
            { text: 'Hardware Encryption', link: '/encryption/hardware-encryption', dev: true },
            { text: 'Partition Encryption', link: '/encryption/partition-encryption', dev: true },
            { text: 'Volume Encryption', link: '/encryption/volume-encryption', dev: true },
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
        {
          text: 'Contributing',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/contribute/contributing' },
            { text: 'Spotlight Zone', link: '/contribute/spotlight-zone' },
            { text: 'Stewardship', link: '/contribute/stewards' },

          ]
        },
      ]
    }
  ],
  socials: [
    {
      icon: 'github' as const,
      link: 'https://github.com/security-alliance/frameworks',
    },
    {
      icon: 'discord' as const,
      link: 'https://discord.com/invite/securityalliance',
    },
  ],
  editLink: {
    pattern: 'https://github.com/security-alliance/frameworks/edit/develop/docs/pages/:path',
    text: 'Suggest changes to this page'
  }
}

function filterDevItems(items: any[]): any[] {
  return items
    .filter(item => !item.dev)
    .map(item => ({
      ...item,
      items: item.items ? filterDevItems(item.items) : undefined,
    }))
}

if (process.env.VERCEL_GIT_COMMIT_REF === 'main') {
  config.sidebar = filterDevItems(config.sidebar)
}

export default defineConfig(config)