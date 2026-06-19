import type { Category, FrameworkLink } from "../attack-surface/threatData";

export { categoryMeta } from "../attack-surface/threatData";
export type { Category, FrameworkLink } from "../attack-surface/threatData";

export interface StageThreat {
  id: string;
  label: string;
  category: Category;
  /** Short description shown in the detail panel */
  description: string;
  /** ID of the primary defense that counters this threat. */
  defenseRef: string;
}

export interface StageDefense {
  id: string;
  label: string;
}

export interface SDLCStage {
  id: string;
  index: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  /** Hash fragment on the page this stage anchors to (no leading #). */
  anchor: string;
  purpose: string;
  threats: StageThreat[];
  defenses: StageDefense[];
  frameworkLinks: FrameworkLink[];
}

export const sdlcStages: SDLCStage[] = [
  {
    id: "plan",
    index: 1,
    title: "Plan",
    subtitle: "Architecture, roles, change control",
    anchor: "stage-1-plan",
    purpose:
      "Decide what is changing and who is authorized to change it before a single line of code is written. Governance failures at this stage lock in risk that no later audit can fully remove.",
    threats: [
      {
        id: "plan-unclear-upgrade-authority",
        label: "Undefined upgrade authority",
        category: "governance",
        description:
          "No explicit owner for upgradeTo() / ProxyAdmin, unclear multisig role, or a single EOA holding upgrade rights — letting an attacker with one credential rewrite the protocol.",
        defenseRef: "plan-roles",
      },
      {
        id: "plan-rogue-proposer",
        label: "Rogue or compromised proposer",
        category: "human",
        description:
          "A compromised or malicious insider submits a proposal that looks routine but embeds a parameter change or delegatecall target that hands over control.",
        defenseRef: "plan-change-management",
      },
      {
        id: "plan-missing-pause",
        label: "Missing emergency pause / rollback",
        category: "operational",
        description:
          "No pause switch, no forward-fix plan, and no tested rollback — so when something goes wrong during execution the protocol has no safe stop.",
        defenseRef: "plan-emergency",
      },
      {
        id: "plan-unmapped-downstream-effects",
        label: "Unmapped downstream effects",
        category: "operational",
        description:
          "Developers haven't thought through and enumerated every downstream flow-on effect of the proposal in the system being modified, so second-order consequences only surface after execution. The more complex the system, the more this matters.",
        defenseRef: "plan-change-management",
      },
    ],
    defenses: [
      { id: "plan-architecture", label: "Documented upgrade architecture (proxy pattern, admin, timelock)" },
      { id: "plan-roles", label: "Explicit roles: proposer, reviewer, approver, executor" },
      { id: "plan-change-management", label: "Formal change-management process with written proposal spec" },
      { id: "plan-emergency", label: "Tested emergency pause and rollback / forward-fix plan" },
    ],
    frameworkLinks: [
      { label: "Security Council Best Practices", href: "/governance/council-best-practices" },
      { label: "Multisig Overview", href: "/multisig-for-protocols/overview" },
      { label: "Emergency Procedures", href: "/multisig-for-protocols/emergency-procedures" },
    ],
  },
  {
    id: "build-and-test",
    index: 2,
    title: "Build and Test",
    subtitle: "Implementation, storage, invariants",
    anchor: "stage-2-build-and-test",
    purpose:
      "Write the implementation, protect its state, and prove with tests — against live mainnet state — that the proposal does what the spec says and nothing more.",
    threats: [
      {
        id: "build-storage-collision",
        label: "Storage layout collision",
        category: "smart-contract",
        description:
          "Reordered, retyped, or mid-inserted state variables corrupt user balances and admin slots after the proxy points at the new implementation.",
        defenseRef: "build-storage",
      },
      {
        id: "build-reinit",
        label: "Re-initialization attack",
        category: "smart-contract",
        description:
          "Unprotected initialize() on the new implementation lets an attacker reset owner, role admin, or critical parameters after the upgrade lands.",
        defenseRef: "build-initializer",
      },
      {
        id: "build-invariant-gap",
        label: "No proposal-level invariant suite",
        category: "smart-contract",
        description:
          "Without invariants asserting user positions are preserved, a proposal that silently widens an access-control ring or zeroes a reserve can pass unit tests.",
        defenseRef: "build-invariants",
      },
      {
        id: "build-stale-fork-state",
        label: "Tests do not fork live state",
        category: "operational",
        description:
          "Tests run against a clean deployment instead of the real mainnet state, so interactions with existing user positions, oracles, and integrators are untested.",
        defenseRef: "build-fork",
      },
      {
        id: "build-tests-bypass-deploy-script",
        label: "Tests don't run against the deployment script",
        category: "operational",
        description:
          "Integration and invariant tests exercise a hand-wired test setup rather than the actual deploy script, so the system state under test is not the system state that ships. A passing suite gives false confidence and has caused real upgrade incidents.",
        defenseRef: "build-script-test",
      },
      {
        id: "build-fork-unmodified",
        label: "Fork-test of the unmodified protocol",
        category: "operational",
        description:
          "Forking mainnet at HEAD and running tests without first executing the proposal's calldata tests the status quo, not the post-proposal world. A proposal that breaks an invariant slips through because the fork never saw the change.",
        defenseRef: "build-fork",
      },
    ],
    defenses: [
      { id: "build-storage", label: "Storage layout compatibility checks (OpenZeppelin upgrades, Slither)" },
      { id: "build-initializer", label: "Initializer protection and _disableInitializers() on implementations" },
      { id: "build-access-control", label: "Least-privilege access control on upgrade functions" },
      { id: "build-invariants", label: "Invariant suite asserting no user position is materially harmed" },
      { id: "build-fork", label: "Fork mainnet at HEAD, execute the proposal's calldata, then run the integration and invariant suite against the post-execution state" },
      { id: "build-script-test", label: "Integration and invariant tests execute the actual deployment script" },
    ],
    frameworkLinks: [
      { label: "Fuzz Testing", href: "/security-testing/fuzz-testing" },
      { label: "Formal Verification", href: "/security-testing/formal-verification" },
      { label: "Integration Testing", href: "/security-testing/integration-testing" },
    ],
  },
  {
    id: "review-and-audit",
    index: 3,
    title: "Review & Audit",
    subtitle: "Independent eyes on code and scripts",
    anchor: "stage-3-review-and-audit",
    purpose:
      "Get independent eyes on the full change — not just the .sol diff but the deployment scripts, proposal payload, and operational runbooks that actually reach mainnet.",
    threats: [
      {
        id: "review-narrow-scope",
        label: "Audit scoped to .sol only",
        category: "operational",
        description:
          "The audit covers the Solidity diff but excludes deploy scripts, multisig transaction builders, and initialization code — where many real upgrade bugs hide.",
        defenseRef: "review-scope",
      },
      {
        id: "review-script-bug",
        label: "Deployment-script bug",
        category: "smart-contract",
        description:
          "A typo in a constructor argument, a wrong address literal, an incorrect parameter, or an incorrect proxy initializer silently ships a broken or hostile deployment.",
        defenseRef: "review-scripts",
      },
      {
        id: "review-unresolved-findings",
        label: "Undocumented risk acceptance",
        category: "governance",
        description:
          "Medium / low audit findings are closed without public rationale, so signers and voters do not know what risks were accepted on their behalf.",
        defenseRef: "review-findings",
      },
      {
        id: "review-tests-diverge-from-deploy-script",
        label: "Tests diverge from the deployment script",
        category: "operational",
        description:
          "Integration tests set up the system a different way than the deployment script actually will, so the behavior that was tested is not the behavior that ships. A passing suite gives false confidence and has caused real upgrade incidents.",
        defenseRef: "review-script-integration",
      },
    ],
    defenses: [
      { id: "review-scope", label: "Audit scope includes contracts, deploy scripts, and proposal payloads" },
      { id: "review-scripts", label: "Line-by-line review of upgrade and migration scripts" },
      { id: "review-peer", label: "Internal code review of the governance proposal by a reviewer who is not the author" },
      { id: "review-findings", label: "All findings resolved or explicitly, publicly accepted with rationale" },
      { id: "review-script-integration", label: "Integration tests execute the actual deployment script, so the system state under test is bit-identical to what will ship" },
    ],
    frameworkLinks: [
      { label: "External Security Reviews", href: "/external-security-reviews/overview" },
      { label: "Audit Preparation Guide", href: "/external-security-reviews/smart-contracts/preparation" },
      { label: "Governance Supply Chain (Repo Hardening)", href: "/devsecops/repository-hardening" },
    ],
  },
  {
    id: "propose-and-monitor",
    index: 4,
    title: "Propose, Verify Onchain Calldata & Monitor",
    subtitle: "Reproducible calldata, execution hygiene, continuous monitoring",
    anchor: "stage-4-propose-verify-onchain-calldata-and-monitor",
    purpose:
      "Everything converges here: the proposal is posted onchain, calldata becomes immutable, multisig signers and voters must verify what they are approving, and the protocol must stay observable long after execution.",
    threats: [
      {
        id: "propose-calldata-mismatch",
        label: "Calldata does not match audited code",
        category: "smart-contract",
        description:
          "The bytes posted onchain differ from the reviewed source — because of a last-minute edit, a different compiler, or a hostile build machine — and no one can tell by eye.",
        defenseRef: "propose-reproducible",
      },
      {
        id: "propose-supply-chain",
        label: "Governance supply-chain compromise",
        category: "supply-chain",
        description:
          "A compromised dependency, CI runner, IDE extension, or developer machine rewrites calldata between review and proposal. Pure code audits miss this.",
        defenseRef: "propose-ci-witness",
      },
      {
        id: "propose-blind-signing",
        label: "Blind multisig signing",
        category: "human",
        description:
          "Signers approve the proposal payload without independently decoding calldata, simulating the transaction, or cross-checking against published reproduction scripts.",
        defenseRef: "propose-signer-verification",
      },
      {
        id: "propose-governance-attack",
        label: "Governance attack on vote",
        category: "governance",
        description:
          "Flash-loaned voting power, bribed delegates, or low quorum push through a malicious proposal inside the voting window.",
        defenseRef: "propose-timelock",
      },
      {
        id: "propose-no-post-monitor",
        label: "No post-execution monitoring",
        category: "operational",
        description:
          "Once the upgrade lands, no one watches the invariants — so a slow-draining exploit enabled by the upgrade can run for days before it is noticed.",
        defenseRef: "propose-monitoring",
      },
    ],
    defenses: [
      { id: "propose-reproducible", label: "Reproducible proposal calldata built from a clean checkout" },
      { id: "propose-ci-witness", label: "CI-verified calldata verified against what is onchain as a third-party witness, matched exactly, byte-for-byte" },
      { id: "propose-signer-verification", label: "Signer runbook: decode calldata, simulate tx, compare hashes" },
      { id: "propose-timelock", label: "Timelock delay with upgrade intent visible onchain" },
      { id: "propose-execution-hygiene", label: "High-threshold multisig, hardware wallets, scheduled windows" },
      { id: "propose-monitoring", label: "Continuous onchain invariants, alerting, and on-call rotation" },
    ],
    frameworkLinks: [
      { label: "CI/CD Security", href: "/devsecops/continuous-integration-continuous-deployment" },
      { label: "Repository Hardening", href: "/devsecops/repository-hardening" },
      { label: "Multisig Runbooks", href: "/multisig-for-protocols/runbooks/overview" },
      { label: "Monitoring Overview", href: "/monitoring/overview" },
      { label: "IDE Security", href: "/devsecops/integrated-development-environments" },
    ],
  },
];
