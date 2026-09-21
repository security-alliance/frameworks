"use client";

import { useEffect, useState } from 'react';
import { DONATE_URL } from '../shared/donate'
import './ContributeFooter.css'

interface ContributeFooterProps {
  learnMoreUrl?: string;
  contributeUrl?: string;
  donateUrl?: string;
}

export function ContributeFooter({
  learnMoreUrl = "/contribute/contributing",
  contributeUrl = "https://github.com/security-alliance/frameworks/blob/develop/docs/pages/",
  donateUrl = DONATE_URL
}: ContributeFooterProps) {
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    const sanitizedPath = window.location.pathname.replace(/^\/+|\/+$/g, "");
    const filePath = sanitizedPath ? `${sanitizedPath}.mdx` : "";
    
    setCurrentPath(filePath);
  }, []);

  return (
    <div className="contribute-footer">
      <div className="contribute-footer-content">
        <h3 className="contribute-footer-title">Help us improve!</h3>
        <p className="contribute-footer-text">
          Spotted an error or have ideas to enhance this content?
        </p>
        <p className="contribute-footer-subtitle">
          Your contributions are valuable to us.{' '}
          <a href={learnMoreUrl} className="contribute-footer-link">
            Learn more
          </a>
        </p>
        <div className="contribute-footer-actions">
          <a
            href={`${contributeUrl}${currentPath}`}
            className="contribute-footer-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✏️ Contribute today!
          </a>
          <a
            href={donateUrl}
            className="contribute-footer-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            💜 Keep this work funded
          </a>
        </div>
        <p className="contribute-footer-note">
          Short on time? Supporting SEAL keeps the Frameworks free and independent.
        </p>
      </div>
    </div>
  );
}
