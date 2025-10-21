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
  logoUrl: 'https://frameworks-static.s3.us-east-2.amazonaws.com/images/logo/frameworks-full.svg',
  iconUrl: 'https://frameworks-static.s3.us-east-2.amazonaws.com/images/logo/favicon.svg',
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
                { text: 'TL;DR', link: '/opsec/travel/tldr', dev: true },
              ]
            },
            { text: 'Governance & Program Management', link: '/opsec/governance-program-management', dev: true },
            { text: 'Control Domains', link: '/opsec/control-domains/overview', dev: true },
            { text: 'Lifecycle', link: '/opsec/lifecycle/overview', dev: true },
            { text: 'Monitoring & Detection', link: '/opsec/monitoring-detection', dev: true },
            { text: 'Incident Response & Recovery', link: '/opsec/incident-response-recovery', dev: true },
            { text: 'Continuous Improvement & Metrics', link: '/opsec/continuous-improvement-metrics', dev: true },
            { text: 'Integration & Mapping to Other Frameworks', link: '/opsec/integration/overview', dev: true },
            { text: 'Appendices', link: '/opsec/appendices/overview', dev: true }
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
          dev: true,
          items: [
            { text: 'Overview', link: '/vulnerability-disclosure/overview', dev: true },
            { text: 'Security Contact', link: '/vulnerability-disclosure/security-contact', dev: true },
            { text: 'Bug Bounties', link: '/vulnerability-disclosure/bug-bounties', dev: true },
          ]
        },
        {
          text: 'Infrastructure',
          collapsed: false,
          dev: true,
          items: [
            { text: 'Overview', link: '/infrastructure/overview', dev: true },
            { text: 'Asset Inventory', link: '/infrastructure/asset-inventory', dev: true },
            { text: 'Cloud Infrastructure', link: '/infrastructure/cloud', dev: true },
            { text: 'DDoS Protection', link: '/infrastructure/ddos-protection', dev: true },
            { text: 'DNS and Domain Registration', link: '/infrastructure/dns-and-domain-registration', dev: true },
            { text: 'Identity and Access Management', link: '/infrastructure/identity-and-access-management', dev: true },
            { text: 'Network Security', link: '/infrastructure/network-security', dev: true },
            { text: 'Operating System Security', link: '/infrastructure/operating-system-security', dev: true },
            { text: 'Zero-Trust Principles', link: '/infrastructure/zero-trust-principles', dev: true },
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
          text: 'Front-End/Web Application',
          collapsed: false,
          dev: true,
          items: [
            { text: 'Overview', link: '/front-end-web-app/overview', dev: true },
            { text: 'Web Application Security', link: '/front-end-web-app/web-application-security', dev: true },
            { text: 'Mobile Application Security', link: '/front-end-web-app/mobile-application-security', dev: true },
            { text: 'Common Vulnerabilities', link: '/front-end-web-app/common-vulnerabilities', dev: true },
            { text: 'Security Tools and Resources', link: '/front-end-web-app/security-tools-resources', dev: true },
          ]
        },
        {
          text: 'Incident Management',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/incident-management/overview', dev: true },
            { text: 'Communication Strategies', link: '/incident-management/communication-strategies', dev: true },
            { text: 'Incident Detection and Response', link: '/incident-management/incident-detection-and-response', dev: true },
            { text: 'Lessons Learned', link: '/incident-management/lessons-learned', dev: true },
            { text: 'SEAL 911 War Room Guidelines', link: '/incident-management/playbooks/seal-911-war-room-guidelines' },
            { text: 'Decentralized Incident Response Framework (DeIRF)', link: '/incident-management/playbooks/decentralized-ir' },
            {
              text: 'Playbooks',
              collapsed: false,
              dev: true,
              items: [
                { text: 'Overview', link: '/incident-management/playbooks/overview', dev: true },
                { text: 'Malware Infection', link: '/incident-management/playbooks/malware', dev: true },
                { text: 'North Korea (DPRK) Attack', link: '/incident-management/playbooks/hacked-dprk', dev: true },
                { text: 'Wallet Drainer Attack', link: '/incident-management/playbooks/hacked-drainer', dev: true },
                { text: 'ELUSIVE COMET Attack', link: '/incident-management/playbooks/hacked-elusive-comet', dev: true },
                { text: 'SEAL 911 War Room Guidelines', link: '/incident-management/playbooks/seal-911-war-room-guidelines', dev: true },
                { text: 'Decentralized Incident Response Framework (DeIRF)', link: '/incident-management/playbooks/decentralized-ir', dev: true },
              ]
            },
          ]
        },
        {
          text: 'Threat Modeling',
          collapsed: false,
          dev: true,
          items: [
            { text: 'Overview', link: '/threat-modeling/overview', dev: true },
            { text: 'Create and Maintain Threat Models', link: '/threat-modeling/create-maintain-threat-models', dev: true },
            { text: 'Identity Mitigate Threats', link: '/threat-modeling/identity-mitigate-threats', dev: true },
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
          dev: true,
          items: [
            { text: 'Overview', link: '/governance/overview', dev: true },
            { text: 'Compliance with Regulatory Requirements', link: '/governance/compliance-regulatory-requirements', dev: true },
            { text: 'Risk Management', link: '/governance/risk-management', dev: true },
            { text: 'Security Metrics and KPIs', link: '/governance/security-metrics-kpis', dev: true },
          ]
        },
        {
          text: 'DevSecOps',
          collapsed: false,
          dev: true,
          items: [
            { text: 'Overview', link: '/devsecops/overview', dev: true },
            { text: 'Code Signing', link: '/devsecops/code-signing', dev: true },
            { text: 'Continuous Integration and Deployment', link: '/devsecops/continuous-integration-continuous-deployment', dev: true },
            { text: 'Integrated Development Environments', link: '/devsecops/integrated-development-environments', dev: true },
            { text: 'Repository Hardening', link: '/devsecops/repository-hardening', dev: true },
            { text: 'Security Testing', link: '/devsecops/security-testing', dev: true },
          ]
        },
        {
          text: 'Privacy',
          collapsed: false,
          dev: true,
          items: [
            { text: 'Overview', link: '/privacy/overview', dev: true },
            { text: 'Secure Browsing', link: '/privacy/secure-browsing', dev: true },
            { text: 'Data Removal Services', link: '/privacy/data-removal-services', dev: true },
            { text: 'Digital Footprint', link: '/privacy/digital-footprint', dev: true },
            { text: 'Encrypted Communication Tools', link: '/privacy/encrypted-communication-tools', dev: true },
            { text: 'Financial Privacy Services', link: '/privacy/financial-privacy-services', dev: true },
            { text: 'Privacy-Focused Operating Systems and Tools', link: '/privacy/privacy-focused-operating-systems-tools', dev: true },
            { text: 'VPN Services', link: '/privacy/vpn-services', dev: true },
          ]
        },
        {
          text: 'Supply Chain',
          collapsed: false,
          dev: true,
          items: [
            { text: 'Overview', link: '/supply-chain/overview', dev: true },
            { text: 'Dependency Awareness', link: '/supply-chain/dependency-awareness', dev: true },
            { text: 'Supply Chain Levels for Software Artifacts', link: '/supply-chain/supply-chain-levels-software-artifacts', dev: true },
          ]
        },
        {
          text: 'Security Automation',
          collapsed: false,
          dev: true,
          items: [
            { text: 'Overview', link: '/security-automation/overview', dev: true },
            { text: 'Threat Detection and Response', link: '/security-automation/threat-detection-response', dev: true },
            { text: 'Compliance Checks', link: '/security-automation/compliance-checks', dev: true },
            { text: 'Infrastructure as Code', link: '/security-automation/infrastructure-as-code', dev: true },
          ]
        },
        {
          text: 'Identity and Access Management IAM',
          collapsed: false,
          dev: true,
          items: [
            { text: 'Overview', link: '/iam/overview' },
            { text: 'Role-Based Access Control', link: '/iam/role-based-access-control', dev: true },
            { text: 'Secure Authentication', link: '/iam/secure-authentication', dev: true },
            { text: 'Access Management Best Practices', link: '/iam/access-management', dev: true },
          ]
        },
        {
          text: 'Secure Software Development',
          collapsed: false,
          dev: true,
          items: [
            { text: 'Overview', link: '/secure-software-development/overview', dev: true },
            { text: 'Secure Coding Standards Guidelines', link: '/secure-software-development/secure-coding-standards-guidelines', dev: true },
            { text: 'Code Reviews and Peer Audits', link: '/secure-software-development/code-reviews-peer-audits', dev: true },
            { text: 'Secure Code Repositories and Version Control', link: '/secure-software-development/secure-code-repositories-version-control', dev: true },
            { text: 'Threat Modeling and Secure Design Principles', link: '/secure-software-development/threat-modeling-secure-design-principles', dev: true },
            { text: 'Devcontainers', link: '/secure-software-development/secure-development-environments', dev: true },
            { text: 'Devcontainer Security', link: '/secure-software-development/devcontainer-security', dev: true },
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
