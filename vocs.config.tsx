import { defineConfig } from 'vocs'

const MAIN_SITE_URL = 'https://frameworks.securityalliance.org'

const isMainBranch = process.env.CF_PAGES_BRANCH === 'main'

const config = {
  head({ path }: { path: string }) {
    const cleanPath = path.replace(/\/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '')
    if (!isMainBranch && devOnlyLinks.has(cleanPath)) return <></>
    const canonicalUrl = `${MAIN_SITE_URL}${cleanPath || '/'}`
    return <link rel="canonical" href={canonicalUrl} />
  },
  vite: {
    define: {
      __IS_MAIN_BRANCH__: JSON.stringify(isMainBranch)
    }
  },
  banner: {
    content: '***This is a work in progress and not a release. We are looking for volunteers. See [Issues](https://github.com/security-alliance/frameworks/issues) and [Contribution](https://github.com/security-alliance/frameworks/blob/develop/docs/pages/contribute/contributing.mdx) to know how to collaborate.***',
    height: '30px',
    backgroundColor: '#8b5cf6',
    textColor: 'white',
    dismissable: false
  },
  title: 'Security Frameworks by SEAL',
  titleTemplate: '%s',
  description: 'Comprehensive security framework documentation for Web3 projects and blockchain security best practices.',
  logoUrl: 'https://frameworks-static.s3.us-east-2.amazonaws.com/images/logo/frameworks-full.svg',
  iconUrl: 'https://frameworks-static.s3.us-east-2.amazonaws.com/images/logo/favicon.svg',
  ogImageUrl: {
    '/': 'https://frameworks-static.s3.us-east-2.amazonaws.com/images/logo/frameworks-full-cropped.png'
  },
  checkDeadlinks: "warn" as const,
  sidebar: [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Introduction to Frameworks', link: '/intro/introduction' },
        { text: 'How to Navigate the Website', link: '/intro/how-to-navigate-the-website' },
        { text: 'Overview of each Framework', link: '/intro/overview-of-each-framework' },
        { text: 'Attack Surface Overview', link: '/intro/attack-surface', dev: true },
      ]
    },
    {
      text: 'Frameworks',
      collapsed: false,
      items: [
        {
          text: 'AI Security',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/ai-security/overview' },
            { text: 'Prompt Injection Defenses', link: '/ai-security/prompt-injection-defenses' },
            { text: 'AI Browsers', link: '/ai-security/ai-browsers' },
            { text: 'AI Workflows: Developers vs Non-Developers', link: '/ai-security/ai-workflows-developers-vs-non-developers' },
            { text: 'Data Exfiltration via Generative Systems', link: '/ai-security/data-exfiltration-via-generative-systems' },
            { text: 'Execution-Path Enforcement', link: '/ai-security/execution-path-enforcement' },
            { text: 'DevSecOps Isolation & Sandboxing (Brief Reference)', link: '/ai-security/devsecops-isolation-sandboxing-reference' },
          ]
        },
        {
          text: 'Awareness',
          collapsed: true,
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
          text: 'Community Management',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/community-management/overview' },
            { text: 'Discord', link: '/community-management/discord' },
            { text: 'Twitter', link: '/community-management/twitter' },
            { text: 'Telegram', link: '/community-management/telegram' },
          ]
        },
        {
          text: 'DevSecOps',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/devsecops/overview' },
            {
              text: 'Isolation & Sandboxing',
              collapsed: false,
              items: [
                { text: 'Sandboxing & Isolation', link: '/devsecops/isolation/sandboxing-and-isolation' },
                { text: 'Execution Sandboxing', link: '/devsecops/isolation/execution-sandboxing' },
                { text: 'Capability-Based Isolation', link: '/devsecops/isolation/capability-based-isolation' },
                { text: 'Sandboxing for Tool Execution', link: '/devsecops/isolation/sandboxing-for-tool-execution' },
                { text: 'Network & Resource Isolation', link: '/devsecops/isolation/network-and-resource-isolation' },
                { text: 'Sandboxing & Policy Enforcement', link: '/devsecops/isolation/sandboxing-and-policy-enforcement' },
                { text: 'Execution Sandboxing: A Practical Guide', link: '/devsecops/isolation/execution-sandboxing-practical-guide' },
                { text: 'Developer Machine Sandboxing', link: '/devsecops/isolation/developer-machine-sandboxing' },
              ]
            },
            { text: 'Code Signing', link: '/devsecops/code-signing' },
            { text: 'Continuous Integration and Deployment', link: '/devsecops/continuous-integration-continuous-deployment' },
            { text: 'Data Security Checklist', link: '/devsecops/data-security-upgrade-checklist' },
            { text: 'Governance Proposal Security Across the SDLC', link: '/devsecops/governance-proposal-security' },
            { text: 'Integrated Development Environments', link: '/devsecops/integrated-development-environments' },
            { text: 'Repository Hardening', link: '/devsecops/repository-hardening' },
            { text: 'Security Testing', link: '/devsecops/security-testing' },
          ]
        },
        {
          text: 'DPRK IT Workers',
          collapsed: true,
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
          text: 'Encryption',
          collapsed: true,
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
        {
          text: 'ENS',
          collapsed: true,
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
          text: 'External Security Reviews',
          collapsed: true,
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
          text: 'Front-End/Web Application',
          collapsed: true,
          dev: true,
          items: [
            { text: 'Overview', link: '/front-end-web-app/overview', dev: true },
            { text: 'Web Application Security', link: '/front-end-web-app/web-application-security', dev: true },
            { text: 'Third-Party Script Security', link: '/front-end-web-app/third-party-script-security', dev: true },
            { text: 'Mobile Application Security', link: '/front-end-web-app/mobile-application-security', dev: true },
            { text: 'Common Vulnerabilities', link: '/front-end-web-app/common-vulnerabilities', dev: true },
            { text: 'Security Tools and Resources', link: '/front-end-web-app/security-tools-resources', dev: true },
          ]
        },
        {
          text: 'Governance',
          collapsed: true,
          dev: true,
          items: [
            { text: 'Overview', link: '/governance/overview', dev: true },
            { text: 'Compliance with Regulatory Requirements', link: '/governance/compliance-regulatory-requirements', dev: true },
            { text: 'Risk Management', link: '/governance/risk-management', dev: true },
            { text: 'Security Metrics and KPIs', link: '/governance/security-metrics-kpis', dev: true },
            { text: 'Security Council Best Practices', link: '/governance/council-best-practices', dev: true },
          ]
        },
        {
          text: 'Identity and Access Management IAM',
          collapsed: true,
          dev: true,
          items: [
            { text: 'Overview', link: '/iam/overview', dev: true },
            { text: 'Role-Based Access Control', link: '/iam/role-based-access-control', dev: true },
            { text: 'Secure Authentication', link: '/iam/secure-authentication', dev: true },
            { text: 'Access Management Best Practices', link: '/iam/access-management', dev: true },
          ]
        },
        {
          text: 'Incident Management',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/incident-management/overview' },
            { text: 'Communication Strategies', link: '/incident-management/communication-strategies' },
            { text: 'Incident Detection and Response', link: '/incident-management/incident-detection-and-response' },
            { text: 'Forensic Readiness', link: '/incident-management/forensic-readiness', dev: true },
            { text: 'Lessons Learned', link: '/incident-management/lessons-learned' },
            {
              text: 'Playbooks',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/incident-management/playbooks/overview' },
                { text: 'Malware Infection', link: '/incident-management/playbooks/malware' },
                { text: 'North Korea (DPRK) Attack', link: '/incident-management/playbooks/hacked-dprk' },
                { text: 'Wallet Drainer Attack', link: '/incident-management/playbooks/hacked-drainer' },
                { text: 'ELUSIVE COMET Attack', link: '/incident-management/playbooks/hacked-elusive-comet' },
                { text: 'SEAL 911 War Room Guidelines', link: '/incident-management/playbooks/seal-911-war-room-guidelines' },
                { text: 'Decentralized Incident Response Framework (DeIRF)', link: '/incident-management/playbooks/decentralized-ir' },
              ]
            },
            {
              text: 'Incident Response Template',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/incident-management/incident-response-template/overview' },
                { text: 'Incident Response Policy', link: '/incident-management/incident-response-template/incident-response-policy' },
                { text: 'Roles and Staffing', link: '/incident-management/incident-response-template/roles-and-staffing' },
                { text: 'Communications', link: '/incident-management/incident-response-template/communications' },
                { text: 'Contacts', link: '/incident-management/incident-response-template/contacts' },
                {
                  text: 'Templates',
                  collapsed: true,
                  items: [
                    { text: 'Overview', link: '/incident-management/incident-response-template/templates/overview' },
                    { text: 'Incident Log Template', link: '/incident-management/incident-response-template/templates/incident-log-template' },
                    { text: 'Post-Mortem Template', link: '/incident-management/incident-response-template/templates/post-mortem-template' },
                    { text: 'Runbook Template', link: '/incident-management/incident-response-template/templates/runbook-template' },
                    { text: 'Example Incident Log', link: '/incident-management/incident-response-template/templates/example-incident-log' },
                    { text: 'Example Post-Mortem', link: '/incident-management/incident-response-template/templates/example-post-mortem' },
                  ]
                },
                {
                  text: 'Runbooks',
                  collapsed: true,
                  items: [
                    { text: 'Overview', link: '/incident-management/incident-response-template/runbooks/overview' },
                    { text: 'Smart Contract Exploit', link: '/incident-management/incident-response-template/runbooks/smart-contract-exploit' },
                    { text: 'Key Compromise', link: '/incident-management/incident-response-template/runbooks/key-compromise' },
                    { text: 'Frontend Compromise', link: '/incident-management/incident-response-template/runbooks/frontend-compromise' },
                    { text: 'DNS Hijack', link: '/incident-management/incident-response-template/runbooks/dns-hijack' },
                    { text: 'CDN/Hosting Compromise', link: '/incident-management/incident-response-template/runbooks/cdn-hosting-compromise' },
                    { text: 'Dependency Attack', link: '/incident-management/incident-response-template/runbooks/dependency-attack' },
                    { text: 'Build Pipeline Compromise', link: '/incident-management/incident-response-template/runbooks/build-pipeline-compromise' },
                    { text: 'DDoS Attack', link: '/incident-management/incident-response-template/runbooks/ddos-attack' },
                    { text: 'Third-Party Outage', link: '/incident-management/incident-response-template/runbooks/third-party-outage' },
                  ]
                },
              ]
            },
          ]
        },
        {
          text: 'Infrastructure',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/infrastructure/overview', dev: true },
            { text: 'Asset Inventory', link: '/infrastructure/asset-inventory', dev: true },
            { text: 'Cloud Infrastructure', link: '/infrastructure/cloud', dev: true },
            { text: 'DDoS Protection', link: '/infrastructure/ddos-protection', dev: true },
            {
              text: 'Domain & DNS Security',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/infrastructure/domain-and-dns-security/overview' },
                { text: 'DNS Basics & Common Attacks', link: '/infrastructure/domain-and-dns-security/dns-basics-and-attacks' },
                { text: 'DNSSEC, CAA, SMTP DANE and Email Security', link: '/infrastructure/domain-and-dns-security/dnssec-and-email' },
                { text: 'Registrar Security & Registry Locks', link: '/infrastructure/domain-and-dns-security/registrar-and-locks' },
                { text: 'Monitoring, Alerts, and GitOps', link: '/infrastructure/domain-and-dns-security/monitoring-and-alerting' },
              ]
            },
            { text: 'Identity and Access Management', link: '/infrastructure/identity-and-access-management', dev: true },
            { text: 'Network Security', link: '/infrastructure/network-security', dev: true },
            { text: 'Operating System Security', link: '/infrastructure/operating-system-security', dev: true },
            { text: 'Zero-Trust Principles', link: '/infrastructure/zero-trust-principles', dev: true },
          ]
        },
        {
          text: 'Monitoring',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/monitoring/overview' },
            { text: 'Guidelines', link: '/monitoring/guidelines' },
            { text: 'Tools', link: '/monitoring/tools' },
            { text: 'Thresholds', link: '/monitoring/thresholds' },
          ]
        },
        {
          text: 'Multisig for Protocols',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/multisig-for-protocols/overview' },

            {
              text: 'Multisig Administration',
              collapsed: false,
              items: [
                { text: 'Planning & Classification', link: '/multisig-for-protocols/planning-and-classification' },
                { text: 'Setup & Configuration', link: '/multisig-for-protocols/setup-and-configuration' },
                { text: 'Registration & Documentation', link: '/multisig-for-protocols/registration-and-documentation' },
                { text: 'Communication Setup', link: '/multisig-for-protocols/communication-setup' },
                { text: 'Use-Case Specific Requirements', link: '/multisig-for-protocols/use-case-specific-requirements' },
                {
                  text: 'Operational Runbooks',
                  collapsed: false,
                  items: [
                    { text: 'Overview', link: '/multisig-for-protocols/runbooks/overview', dev: true },
                    { text: 'Token Transfer', link: '/multisig-for-protocols/runbooks/token-transfer', dev: true },
                    { text: 'Signer Rotation', link: '/multisig-for-protocols/runbooks/signer-rotation', dev: true },
                    { text: 'Threshold Change', link: '/multisig-for-protocols/runbooks/threshold-change', dev: true },
                    { text: 'Emergency Pause', link: '/multisig-for-protocols/runbooks/emergency-pause', dev: true },
                  ]
                },
              ]
            },
            {
              text: 'For Signers',
              collapsed: false,
              items: [
                { text: 'Joining a Multisig', link: '/multisig-for-protocols/joining-a-multisig', dev: true },
                { text: 'Emergency Procedures', link: '/multisig-for-protocols/emergency-procedures', dev: true },
                { text: 'Backup Signing & Infrastructure', link: '/multisig-for-protocols/backup-signing-and-infrastructure', dev: true },
                { text: 'Personal Security & OPSEC', link: '/multisig-for-protocols/personal-security-opsec', dev: true },
                { text: 'Incident Reporting', link: '/multisig-for-protocols/incident-reporting', dev: true },
                { text: 'Offboarding', link: '/multisig-for-protocols/offboarding', dev: true },
              ]
            },
            { text: 'Implementation Checklist', link: '/multisig-for-protocols/implementation-checklist' },
          ]
        },
        {
          text: 'Operational Security',
          collapsed: true,
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
            { text: 'Secure Operating Systems', link: '/opsec/secure-operating-systems', dev: true },
            { text: 'Endpoint Security', link: '/opsec/endpoint/overview', dev: true },
            { text: 'Browser Security', link: '/opsec/browser/overview', dev: true },
            { text: 'Multi-Factor Authentication', link: '/opsec/mfa/overview', dev: true },
            { text: 'Password Management', link: '/opsec/passwords/overview', dev: true },
            { text: 'Google Workspace Security', link: '/opsec/google/overview', dev: true },
            { text: 'Control Domains', link: '/opsec/control-domains/overview', dev: true },
            { text: 'Continuous Improvement & Metrics', link: '/opsec/continuous-improvement-metrics', dev: true },
            { text: 'Integration & Mapping to Other Frameworks', link: '/opsec/integration/overview', dev: true },
            {
              text: 'While Traveling',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/opsec/travel/overview' },
                { text: 'Guide', link: '/opsec/travel/guide' },
                { text: 'TL;DR', link: '/opsec/travel/tldr', dev: true },
              ]
            },
            { text: 'Appendices', link: '/opsec/appendices/overview', dev: true }
          ]
        },
        {
          text: 'Privacy',
          collapsed: true,
          dev: true,
          items: [
            { text: 'Overview', link: '/privacy/overview', dev: true },
            { text: 'Secure Browsing', link: '/privacy/secure-browsing', dev: true },
            { text: 'Data Removal Services', link: '/privacy/data-removal-services', dev: true },
            { text: 'Digital Footprint', link: '/privacy/digital-footprint', dev: true },
            { text: 'Encrypted Communication Tools', link: '/privacy/encrypted-communication-tools', dev: true },
            { text: 'Financial Privacy Services', link: '/privacy/financial-privacy-services', dev: true },
            { text: 'Privacy-Focused Operating Systems and Tools', link: '/privacy/privacy-focused-operating-systems-tools', dev: true },
            {
              text: 'VPN Services',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/privacy/vpns/overview', dev: true },
                { text: 'HTTPS vs VPN', link: '/privacy/vpns/https-vs-vpn', dev: true },
                { text: 'Attack Surfaces on Public Networks', link: '/privacy/vpns/attack-surfaces-public-networks', dev: true },
                { text: 'When to Use a VPN', link: '/privacy/vpns/when-to-use-vpn', dev: true },
                { text: 'VPN Limitations', link: '/privacy/vpns/vpn-limitations', dev: true },
                { text: 'VPN Providers and Tools', link: '/privacy/vpns/vpn-providers-and-tools', dev: true },
              ],
            },
          ]
        },
        {
          text: 'Safe Harbor',
          collapsed: true,
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
          text: 'Secure Software Development',
          collapsed: true,
          dev: true,
          items: [
            { text: 'Overview', link: '/secure-software-development/overview', dev: true },
            { text: 'Secure Coding Standards Guidelines', link: '/secure-software-development/secure-coding-standards-guidelines', dev: true },
            { text: 'Code Reviews and Peer Audits', link: '/secure-software-development/code-reviews-peer-audits', dev: true },
            { text: 'Secure Code Repositories and Version Control', link: '/secure-software-development/secure-code-repositories-version-control', dev: true },
            { text: 'Threat Modeling and Secure Design Principles', link: '/secure-software-development/threat-modeling-secure-design-principles', dev: true },
          ]
        },
        {
          text: 'Security Automation',
          collapsed: true,
          dev: true,
          items: [
            { text: 'Overview', link: '/security-automation/overview', dev: true },
            { text: 'Threat Detection and Response', link: '/security-automation/threat-detection-response', dev: true },
            { text: 'Compliance Checks', link: '/security-automation/compliance-checks', dev: true },
            { text: 'Infrastructure as Code', link: '/security-automation/infrastructure-as-code', dev: true },
          ]
        },
        {
          text: 'Security Testing',
          collapsed: true,
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
          text: 'Supply Chain',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/supply-chain/overview' },
            { text: 'Supply Chain Levels for Software Artifacts', link: '/supply-chain/supply-chain-levels-software-artifacts' },
            { text: 'Dependency Awareness', link: '/supply-chain/dependency-awareness' },
            { text: 'Web3 Supply Chain Threats', link: '/supply-chain/web3-supply-chain-threats' },
            { text: 'Vendor Risk Management', link: '/supply-chain/vendor-risk-management' },
            { text: 'Incident Response', link: '/supply-chain/incident-response-supply-chain' },
          ]
        },
        {
          text: 'Threat Modeling',
          collapsed: true,
          dev: true,
          items: [
            { text: 'Overview', link: '/threat-modeling/overview', dev: true },
            { text: 'Create and Maintain Threat Models', link: '/threat-modeling/create-maintain-threat-models', dev: true },
            { text: 'Identity Mitigate Threats', link: '/threat-modeling/identity-mitigate-threats', dev: true },
          ]
        },
        {
          text: 'Treasury Operations',
          collapsed: true,
          dev: true,
          items: [
            { text: 'Overview', link: '/treasury-operations/overview', dev: true },
            { text: 'Custodial Inventory & Controls', link: '/treasury-operations/classification', dev: true },
            { text: 'Registration Documents', link: '/treasury-operations/registration-documents', dev: true },
            { text: 'Enhanced Controls for High-Risk Accounts', link: '/treasury-operations/enhanced-controls', dev: true },
            { text: 'Guide: Large Cryptocurrency Transfers', link: '/treasury-operations/transaction-verification', dev: true },
          ]
        },
        {
          text: 'Vulnerability Disclosure',
          collapsed: true,
          dev: true,
          items: [
            { text: 'Overview', link: '/vulnerability-disclosure/overview', dev: true },
            { text: 'Security Contact', link: '/vulnerability-disclosure/security-contact', dev: true },
            { text: 'Bug Bounties', link: '/vulnerability-disclosure/bug-bounties', dev: true },
          ]
        },
        {
          text: 'Wallet Security',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/wallet-security/overview' },
            { text: 'Custodial vs Non-Custodial', link: '/wallet-security/custodial-vs-non-custodial' },
            { text: 'Cold vs Hot Wallet', link: '/wallet-security/cold-vs-hot-wallet' },
            { text: 'Wallets For Beginners & Small Balances', link: '/wallet-security/for-beginners-and-small-balances' },
            { text: 'Wallets For Intermediates & Medium Funds', link: '/wallet-security/intermediates-and-medium-funds' },
            { text: 'Multisig Wallets For Advanced Users & High Funds', link: '/wallet-security/secure-multisig-best-practices' },
            { text: 'Account Abstraction Wallets', link: '/wallet-security/account-abstraction' },
            { text: 'TEE-based Encumbered Wallets', link: '/wallet-security/encumbered-wallets' },
            {
              text: 'Signing & Verification',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/wallet-security/signing-and-verification/signing-verification' },
                { text: 'Verifying Standard Transactions (EOA)', link: '/wallet-security/signing-and-verification/verifying-standard-transactions' },
                { text: 'Multisig Signing Process', link: '/wallet-security/signing-and-verification/secure-multisig-signing-process' },
                { text: 'Safe Multisig: Step-by-Step Verification', link: '/wallet-security/signing-and-verification/secure-multisig-safe-verification', dev: true },
                { text: 'Squads Multisig: Step-by-Step Verification', link: '/wallet-security/signing-and-verification/secure-multisig-squads-verification', dev: true },
                { text: 'Using EIP-7702', link: '/wallet-security/signing-and-verification/verifying-7702' },
              ]
            },
            { text: 'Smart Contract Interaction Security', link: '/wallet-security/smart-contract-interaction-security', dev: true },
            { text: 'Seed Phrase Management', link: '/wallet-security/seed-phrase-management' },
            { text: 'Tools & Resources', link: '/wallet-security/tools-and-resources' },
          ]
        },
      ]
    },
    {
      text: 'Guides',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/guides/overview' },
        {
          text: 'Account Management',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/guides/account-management/overview' },
            { text: 'Discord Security', link: '/guides/account-management/discord' },
            { text: 'GitHub Security', link: '/guides/account-management/github' },
            { text: 'GoDaddy Security', link: '/guides/account-management/godaddy' },
            { text: 'Linear Security', link: '/guides/account-management/linear' },
            { text: 'Mercury Security', link: '/guides/account-management/mercury' },
            { text: 'Notion Security', link: '/guides/account-management/notion' },
            { text: 'Render Security', link: '/guides/account-management/render' },
            { text: 'Sentry Security', link: '/guides/account-management/sentry' },
            { text: 'Signal Security', link: '/guides/account-management/signal' },
            { text: 'Slack Security', link: '/guides/account-management/slack' },
            { text: 'Telegram Security', link: '/guides/account-management/telegram' },
            { text: 'Trello Security', link: '/guides/account-management/trello' },
            { text: 'Twitter/X Security', link: '/guides/account-management/twitter' },
            { text: 'Vercel Security', link: '/guides/account-management/vercel' },
          ]
        },
        {
          text: 'Endpoint Security',
          collapsed: true,
          items: [
            { text: 'SSH Client and Key Management Hardening', link: '/guides/endpoint-security/ssh-client-and-key-management-hardening' },
            { text: 'Hardware Security Keys', link: '/guides/endpoint-security/hardware-security-keys' },
            { text: 'Password Manager Endpoint Hardening', link: '/guides/endpoint-security/password-manager-endpoint-hardening', dev: true },
            { text: 'Zoom Hardening', link: '/guides/endpoint-security/zoom-hardening' },
          ]
        },
      ]
    },
    {
      text: 'SEAL Certifications',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/certs/overview' },
        { text: 'Certified Partners', link: '/certs/certified-partners' },
        {
          text: 'SEAL Certification Frameworks', collapsed: true, items: [
            { text: 'DevOps & Infrastructure', link: '/certs/sfc-devops-infrastructure' },
            { text: 'DNS Registrar', link: '/certs/sfc-dns-registrar' },
            { text: 'Identity & Accounts', link: '/certs/sfc-identity-accounts' },
            { text: 'Incident Response', link: '/certs/sfc-incident-response' },
            { text: 'Multisig Operations', link: '/certs/sfc-multisig-ops' },
            { text: 'Treasury Operations', link: '/certs/sfc-treasury-ops' },
          ]
        },
        { text: 'Certification Guidelines', link: '/certs/certification-guidelines' },
        { text: 'Changelog', link: '/certs/changelog' },
        { text: 'Contributions', link: '/certs/contributions' },
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
        { text: 'LLMs', link: '/intro/llms' },
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

function collectDevLinks(items: any[], parentIsDev = false): Set<string> {
  const links = new Set<string>()
  for (const item of items) {
    const isDev = item.dev || parentIsDev
    if (isDev && item.link) links.add(item.link)
    if (item.items) {
      for (const link of collectDevLinks(item.items, isDev)) links.add(link)
    }
  }
  return links
}

const devOnlyLinks = collectDevLinks(config.sidebar)

if (isMainBranch) {
  config.sidebar = filterDevItems(config.sidebar)
}

export default defineConfig(config)
