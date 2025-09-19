import { useEffect, useState } from 'react';
import './ContributeFooter.css'

interface ContributeFooterProps {
  learnMoreUrl?: string;
  contributeUrl?: string;
}

export function ContributeFooter({ 
  learnMoreUrl = "/contribute/contributing", 
  contributeUrl = "https://github.com/security-alliance/frameworks/blob/develop/docs/pages/"
}: ContributeFooterProps) {
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    const pathname = window.location.pathname;
    const filePath = `${pathname.slice(1)}.mdx`;
    
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
        <a 
          href={`${contributeUrl}${currentPath}`} 
          className="contribute-footer-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          ✏️ Contribute today!
        </a>
      </div>
    </div>
  );
}

