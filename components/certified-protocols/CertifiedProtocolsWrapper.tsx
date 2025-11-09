import React, { useEffect, useState } from 'react';
import { CertifiedProtocols, CertifiedProtocol, Certification } from './CertifiedProtocols';

interface Attestation {
  id: string;
  recipient: string;
  certificationType: string;
  schemaUID: string;
  issuanceTimestamp: number;
}

interface ProtocolFrontmatter {
  name: string;
  logo: string;
  website: string;
}

interface CertifiedProtocolsWrapperProps {
  protocolInfo: ProtocolFrontmatter[];
}

const API_ENDPOINT = 'https://certs-db.robert-9db.workers.dev/attestations';

const certTypeMap: Record<string, string> = {
  'SCF-IR-v1.0': 'sfc-ir',
  'SCF-MS-v1.0': 'sfc-ms',
  'SCF-DNS-v1.0': 'sfc-dns',
  'SCF-TRO-v1.0': 'sfc-tro',
  'SCF-WS-v1.0': 'sfc-ws',
};

export function CertifiedProtocolsWrapper({ protocolInfo }: CertifiedProtocolsWrapperProps) {
  const [protocols, setProtocols] = useState<CertifiedProtocol[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log('Fetching attestations from API...');
    fetch(API_ENDPOINT)
      .then(res => res.json())
      .then((attestations: Attestation[]) => {
        console.log('Fetched attestations:', attestations);
        const protocolMap = new Map<string, Attestation[]>();
        const frontmatterMap = new Map<string, ProtocolFrontmatter>(protocolInfo.map(p => [p.name, p]));

        // Group by protocol name
        attestations.forEach((att: Attestation) => {
          if (!protocolMap.has(att.recipient)) {
            protocolMap.set(att.recipient, []);
          }
          protocolMap.get(att.recipient)!.push(att);
        });

        // Build final list
        const result: CertifiedProtocol[] = [];
        protocolMap.forEach((certs: Attestation[], name: string) => {
          const info: ProtocolFrontmatter | undefined = frontmatterMap.get(name);

          const certMap = new Map<string, Certification>();
          certs.forEach((cert: Attestation) => {
            const type: string = certTypeMap[cert.certificationType] || cert.certificationType;
            if (!certMap.has(type)) {
              certMap.set(type, {
                type,
                attestationUrl: `https://base.easscan.org/attestation/view/${cert.id}`
              });
            }
          });

          result.push({
            name,
            logo: info?.logo || 'https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg',
            website: info?.website || '',
            certifications: Array.from(certMap.values())
          });
        });

        setProtocols(result);
        setLoading(false);
      });
  }, [protocolInfo]);

  if (loading) return <div>Loading...</div>;

  return <CertifiedProtocols protocols={protocols} />;
}
