"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface MermaidRendererProps {
  code: string;
  id: string;
}

const MermaidRenderer: React.FC<MermaidRendererProps> = ({ code, id }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const renderCount = useRef(0);
  useEffect(() => {
    if (!containerRef.current) return;
    const renderMermaid = async () => {
      try {
        const isDark = document.documentElement.classList.contains("dark");
        mermaid.initialize({ startOnLoad: false, theme: isDark ? "dark" : "default" });
        const cleanCode = code.trim();
        const uniqueId = `${id}-${++renderCount.current}`;
        const { svg } = await mermaid.render(uniqueId, cleanCode);
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
    const observer = new MutationObserver(() => renderMermaid());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [code, id]);

  return <div ref={containerRef} className="mermaid" />;
};

export default MermaidRenderer;
