"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface MermaidRendererProps {
  code: string;
  id: string;
}

const MermaidRenderer: React.FC<MermaidRendererProps> = ({ code, id }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
  
    const renderMermaid = async () => {
      try {
        mermaid.initialize({ startOnLoad: false });
  
        const cleanCode = code.trim();
        const { svg } = await mermaid.render(id, cleanCode);
  
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (err: any) {
        if (containerRef.current) {
          containerRef.current.innerHTML = `<pre style="color:red;">Error rendering Mermaid diagram: ${err.message}</pre>`;
        }
        console.error(err);
      }
    };
  
    renderMermaid();
  }, [code, id]);

  return <div ref={containerRef} className="mermaid" />;
};

export default MermaidRenderer;
