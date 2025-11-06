import React from 'react';
import './CertifiedProtocols.css';

interface Certification {
  type: string;
  attestationUrl: string;
}

interface CertifiedProtocol {
  name: string;
  logo: string;
  website: string;
  certifications: Certification[];
}

interface CertifiedProtocolsProps {
  protocols: CertifiedProtocol[];
}

interface ProtocolCardProps {
  protocol: CertifiedProtocol;
}

const certTypeToName: Record<string, string> = {
  'sfc-ir': 'Incident Response',
  'sfc-ms': 'Multisig Operations',
  'sfc-dns': 'DNS Registrar',
  'sfc-tro': "Treasury Operations",
  'sfc-ws': "Workspace Security",
};

function ProtocolCard({ protocol }: ProtocolCardProps) {
  return (
    <div className="protocol-card">
      <a href={protocol.website} target="_blank" rel="noopener noreferrer" className="protocol-header">
        <img src={protocol.logo} alt={`${protocol.name} logo`} className="protocol-logo" />
        <h3 className="protocol-name">{protocol.name}</h3>
      </a>
      <div className="cert-badges">
        {protocol.certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.attestationUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={certTypeToName[cert.type] || cert.type}
            className={`cert-badge ${cert.type}`}
          >
            {cert.type.charAt(4)}
          </a>
        ))}
      </div>
    </div>
  );
}

export function CertifiedProtocols({ protocols }: CertifiedProtocolsProps) {
  return (
    <div className="certified-protocols">
      {protocols.map((protocol) => (
        <ProtocolCard key={protocol.name} protocol={protocol} />
      ))}
    </div>
  );
}
