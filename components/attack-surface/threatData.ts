export type Severity = "critical" | "high" | "medium";
export type PostureState = "no" | "yes" | "partial";
export type Category = "smart-contract" | "operational" | "human" | "infrastructure" | "supply-chain" | "governance";

export interface FrameworkLink {
  label: string;
  href: string;
}

export interface ThreatVector {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  severity: Severity;
  description: string;
  example?: string;
  /** Short attack-type tags shown in the detail card */
  attackTags: string[];
  /** The primary framework page for this vector — label text links here */
  primaryLink: string;
  /** Label for the primary link button in the detail card */
  primaryLinkLabel: string;
  frameworkLinks: FrameworkLink[];
}

export const categoryMeta: Record<Category, { label: string; color: string }> = {
  "smart-contract": { label: "Smart Contract", color: "#ef4444" },
  operational: { label: "Operational", color: "#f97316" },
  human: { label: "Human", color: "#eab308" },
  infrastructure: { label: "Infrastructure", color: "#8b5cf6" },
  "supply-chain": { label: "Supply Chain", color: "#3b82f6" },
  governance: { label: "Governance", color: "#10b981" },
};

export const severityMeta: Record<Severity, { label: string; color: string; bg: string }> = {
  critical: { label: "Critical", color: "#ef4444", bg: "rgba(239, 68, 68, 0.12)" },
  high: { label: "High", color: "#f97316", bg: "rgba(249, 115, 22, 0.12)" },
  medium: { label: "Medium", color: "#eab308", bg: "rgba(234, 179, 8, 0.12)" },
};

export const threatVectors: ThreatVector[] = [
  {
    id: "smart-contract-exploits",
    title: "Smart Contract Exploits",
    subtitle: "Code vulnerabilities in on-chain logic",
    category: "smart-contract",
    severity: "critical",
    description:
      "Reentrancy attacks, logic bugs, oracle manipulation, flash loan exploits, and unaudited upgrade paths that drain protocol funds.",
    example: "Euler Finance: $197M flash loan exploit",
    attackTags: ["Reentrancy", "Flash loan exploit", "Oracle manipulation", "Logic bug"],
    primaryLink: "/external-security-reviews/overview",
    primaryLinkLabel: "Security Reviews Framework",
    frameworkLinks: [
      { label: "Incident Playbooks", href: "/incident-management/playbooks" },
      { label: "DevSecOps", href: "/devsecops/overview" },
      { label: "External Security Reviews", href: "/external-security-reviews/overview" },
      { label: "Security Testing", href: "/security-testing/overview" },
    ],
  },
  {
    id: "multisig-failures",
    title: "Multisig Operational Failures",
    subtitle: "Signer and threshold mismanagement",
    category: "operational",
    severity: "critical",
    description:
      "Signer unavailability, lost keys, weak thresholds, no rotation policy, and lack of emergency procedures leave protocol treasuries exposed.",
    example: "Ronin Bridge: $625M via compromised validator keys",
    attackTags: ["Signer unavailability", "Weak threshold", "Key loss", "No rotation policy"],
    primaryLink: "/multisig-for-protocols/overview",
    primaryLinkLabel: "Multisig Framework",
    frameworkLinks: [
      { label: "Multisig Overview", href: "/multisig-for-protocols/overview" },
      { label: "Emergency Procedures", href: "/multisig-for-protocols/emergency-procedures" },
      { label: "Signer Onboarding", href: "/multisig-for-protocols/signer-onboarding" },
      { label: "Multisig Runbooks", href: "/multisig-for-protocols/runbooks/overview" },
    ],
  },
  {
    id: "dprk-threat-actors",
    title: "DPRK / Threat Actor Hiring",
    subtitle: "Nation-state infiltration via hiring",
    category: "human",
    severity: "critical",
    description:
      "Unknowingly hiring North Korean IT workers or other threat actors as contractors who gain access to codebases, infrastructure, and signing keys.",
    example: "Multiple protocols compromised via DPRK contractors",
    attackTags: ["Fake identity", "Contractor infiltration", "Code backdoor", "Key theft"],
    primaryLink: "/incident-management/playbooks/dprk-it-worker",
    primaryLinkLabel: "DPRK Playbook",
    frameworkLinks: [
      { label: "DPRK IT Worker Playbook", href: "/incident-management/playbooks/dprk-it-worker" },
      { label: "Insider Threat Mitigation", href: "/opsec/control-domains/people/insider-threat-mitigation" },
      { label: "Personnel Controls", href: "/opsec/control-domains/people/overview" },
    ],
  },
  {
    id: "leadership-phishing",
    title: "Leadership Phishing",
    subtitle: "Targeted spearphishing of key personnel",
    category: "human",
    severity: "critical",
    description:
      "Spearphishing campaigns targeting founders, executives, and multisig signers to steal credentials, signing keys, or trick them or employees into approving malicious transactions.",
    attackTags: ["Spearphishing", "Credential theft", "Malicious signing", "Impersonation"],
    primaryLink: "/awareness/understanding-threat-vectors",
    primaryLinkLabel: "Threat Vectors Guide",
    frameworkLinks: [
      { label: "Understanding Threat Vectors", href: "/awareness/understanding-threat-vectors" },
      { label: "Phishing & Social Engineering", href: "/user-team-security/phishing-social-engineering" },
      { label: "Security Training", href: "/user-team-security/security-training" },
    ],
  },
  {
    id: "infrastructure-compromise",
    title: "Infrastructure Compromise",
    subtitle: "Cloud, server, and network breaches",
    category: "infrastructure",
    severity: "critical",
    description:
      "Cloud misconfigurations, exposed APIs, server compromise, weak network segmentation, and missing zero-trust architecture leading to full infrastructure takeover.",
    attackTags: ["AWS key leak", "RPC manipulation", "Server compromise", "API exfiltration"],
    primaryLink: "/infrastructure/overview",
    primaryLinkLabel: "Infrastructure Framework",
    frameworkLinks: [
      { label: "Infrastructure Overview", href: "/infrastructure/overview" },
      { label: "Cloud Security", href: "/infrastructure/cloud-security" },
      { label: "Network Security", href: "/infrastructure/network-security" },
      { label: "Zero Trust Architecture", href: "/infrastructure/zero-trust-architecture" },
    ],
  },
  {
    id: "frontend-dns-hijacking",
    title: "Frontend / DNS Hijacking",
    subtitle: "Website and domain takeover attacks",
    category: "infrastructure",
    severity: "critical",
    description:
      "DNS hijacking, compromised frontend deployments, UI spoofing, and registrar account takeovers that redirect users to malicious interfaces draining wallets.",
    example: "Curve Finance: DNS hijack redirected users to drainer",
    attackTags: ["DNS hijack", "UI spoofing", "Registrar takeover", "Frontend injection"],
    primaryLink: "/infrastructure/domain-and-dns-security/overview",
    primaryLinkLabel: "DNS Security Framework",
    frameworkLinks: [
      { label: "DNS Security", href: "/infrastructure/domain-and-dns-security/overview" },
      { label: "Monitoring & Alerting", href: "/infrastructure/domain-and-dns-security/monitoring-and-alerting" },
      { label: "Front-End Security", href: "/front-end-web-application/overview" },
      { label: "DNS Registrar Cert", href: "/certs/sfc-dns-registrar" },
    ],
  },
  {
    id: "opsec-failures",
    title: "Operational Security Failures",
    subtitle: "Day-to-day security hygiene gaps",
    category: "operational",
    severity: "high",
    description:
      "Poor device hygiene, leaked credentials, weak access controls, unencrypted communications, and lack of security policies across the team.",
    attackTags: ["Leaked credentials", "Weak access controls", "Unencrypted comms", "No MFA"],
    primaryLink: "/opsec/overview",
    primaryLinkLabel: "OpSec Framework",
    frameworkLinks: [
      { label: "OpSec Overview", href: "/opsec/overview" },
      { label: "Technical Controls", href: "/opsec/control-domains/technical/overview" },
      { label: "Device Hardening", href: "/opsec/control-domains/technical/device-hardening" },
      { label: "IAM", href: "/iam/overview" },
    ],
  },
  {
    id: "supply-chain-attacks",
    title: "Supply Chain Attacks",
    subtitle: "Compromised dependencies and CI/CD",
    category: "supply-chain",
    severity: "high",
    description:
      "Dependency poisoning, typosquatting, compromised CI/CD pipelines, malicious npm/crate packages, and build system backdoors that inject malicious code.",
    example: "Ledger Connect Kit: compromised npm package",
    attackTags: ["Dependency poisoning", "Typosquatting", "CI/CD backdoors", "Malicious package"],
    primaryLink: "/supply-chain/overview",
    primaryLinkLabel: "Supply Chain Framework",
    frameworkLinks: [
      { label: "Supply Chain Overview", href: "/supply-chain/overview" },
      { label: "DevSecOps", href: "/devsecops/overview" },
      { label: "CI/CD Security", href: "/devsecops/ci-cd-security" },
      { label: "Code Signing", href: "/devsecops/code-signing" },
    ],
  },
  {
    id: "monitoring-gaps",
    title: "Monitoring & Alerting Gaps",
    subtitle: "Blind spots in threat detection",
    category: "operational",
    severity: "high",
    description:
      "No on-chain monitoring, slow anomaly detection, missing alerts for critical operations, and no automated response — letting attackers operate undetected.",
    attackTags: ["No on-chain monitoring", "Slow detection", "Missing alerts", "No auto-response"],
    primaryLink: "/monitoring/overview",
    primaryLinkLabel: "Monitoring Framework",
    frameworkLinks: [
      { label: "Monitoring Overview", href: "/monitoring/overview" },
      { label: "Threat Detection", href: "/security-automation/threat-detection-response" },
      { label: "DNS Monitoring", href: "/infrastructure/domain-and-dns-security/monitoring-and-alerting" },
    ],
  },
  {
    id: "social-engineering",
    title: "Social Engineering",
    subtitle: "Manipulation beyond phishing",
    category: "human",
    severity: "high",
    description:
      "Impersonation of partners or investors, fake collaboration requests, community manipulation, and trust exploitation to gain access or influence decisions.",
    attackTags: ["Impersonation", "Fake partnership", "Community manipulation", "Trust exploit"],
    primaryLink: "/awareness/overview",
    primaryLinkLabel: "Awareness Framework",
    frameworkLinks: [
      { label: "Awareness Overview", href: "/awareness/overview" },
      { label: "Threat Vectors", href: "/awareness/understanding-threat-vectors" },
      { label: "Security Culture", href: "/user-team-security/security-aware-culture" },
      { label: "Community Management", href: "/community-management/overview" },
    ],
  },
  {
    id: "duress-situations",
    title: "Duress Situations",
    subtitle: "Physical threats and coercion",
    category: "human",
    severity: "high",
    description:
      "Physical threats, kidnapping, extortion, and coercion targeting key personnel to force transaction signing or credential disclosure.",
    attackTags: ["Physical threat", "Kidnapping", "Extortion", "Forced signing"],
    primaryLink: "/opsec/travel/guide",
    primaryLinkLabel: "Travel Security Guide",
    frameworkLinks: [
      { label: "Travel Security", href: "/opsec/travel/guide" },
      { label: "Emergency Procedures", href: "/multisig-for-protocols/emergency-procedures" },
      { label: "Physical Controls", href: "/opsec/control-domains/physical-environmental/overview" },
    ],
  },
  {
    id: "governance-attacks",
    title: "Governance Attacks",
    subtitle: "Malicious proposals and vote manipulation",
    category: "governance",
    severity: "medium",
    description:
      "Proposal manipulation, vote buying, flash loan governance attacks, and unauthorized upgrades that alter protocol behavior or drain treasuries.",
    attackTags: ["Proposal manipulation", "Vote buying", "Rogue upgrades"],
    primaryLink: "/governance/overview",
    primaryLinkLabel: "Governance Framework",
    frameworkLinks: [
      { label: "Governance Overview", href: "/governance/overview" },
      { label: "Security Council Best Practices", href: "/governance/security-council-best-practices" },
      { label: "Multisig for Protocols", href: "/multisig-for-protocols/overview" },
    ],
  },
];
