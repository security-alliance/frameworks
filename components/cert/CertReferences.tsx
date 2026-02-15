import { memo, useMemo } from "react";
import { frameworkToControls, CertRef } from "./cert-framework-map";
import "./control.css";

// Map cert names to human-readable labels
const certLabels: Record<string, string> = {
  "sfc-devops-infrastructure": "DevOps & Infrastructure",
  "sfc-dns-registrar": "DNS & Registrar",
  "sfc-incident-response": "Incident Response",
  "sfc-multisig-ops": "Multisig Operations",
  "sfc-treasury-ops": "Treasury Operations",
  "sfc-workspace-security": "Workspace Security",
};

interface CertReferencesProps {
  /** The framework page path, e.g. "/wallet-security/secure-multisig-best-practices" */
  pagePath?: string;
}

/**
 * Shows which SEAL Certification controls reference this framework page.
 * Drop this component into any framework page to show the reverse mapping.
 * 
 * If pagePath is not provided, it attempts to derive from window.location.
 */
export const CertReferences = memo(function CertReferences({ pagePath }: CertReferencesProps) {
  const refs = useMemo(() => {
    let path = pagePath;
    if (!path && typeof window !== "undefined") {
      path = window.location.pathname.replace(/\/$/, "").replace(/\.html$/, "");
    }
    if (!path) return [];
    return frameworkToControls[path] || [];
  }, [pagePath]);

  if (refs.length === 0) return null;

  // Group by cert name
  const grouped = useMemo(() => {
    const groups: Record<string, CertRef[]> = {};
    for (const ref of refs) {
      const key = ref.certName;
      if (!groups[key]) groups[key] = [];
      groups[key].push(ref);
    }
    return groups;
  }, [refs]);

  return (
    <div className="cert-references">
      <div className="cert-references-header">
        🔒 SEAL Certification Controls
      </div>
      <div className="cert-references-subtitle">
        This page provides guidance for the following certification controls:
      </div>
      <div className="cert-references-groups">
        {Object.entries(grouped).map(([certName, certRefs]) => (
          <div key={certName} className="cert-references-group">
            <div className="cert-references-group-label">
              <a href={`/certs/${certName}`}>{certLabels[certName] || certName}</a>
            </div>
            <ul className="cert-references-list">
              {certRefs.map((ref) => (
                <li key={ref.controlId} className="cert-references-item">
                  <a href={`/certs/${ref.certName}#${ref.controlId}`} className="cert-references-control-id">
                    {ref.controlId}
                  </a>
                  <span className="cert-references-control-title">{ref.controlTitle}</span>
                  <span className={`cert-references-coverage cert-references-coverage-${ref.coverage}`}>
                    {ref.coverage}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
});

CertReferences.displayName = "CertReferences";
