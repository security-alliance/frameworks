import { memo, useMemo, useState } from "react";
import { ControlData, Section } from "./types";
import { ControlCard } from "./ControlCard";
import { SectionProgress } from "./SectionProgress";

interface CertSectionProps {
    index: number;
    section: Section;
    controlData: Record<string, ControlData>;
    onControlChange: (controlId: string, data: ControlData) => void;
}

export const CertSection = memo(function CertSection({
    index,
    section,
    controlData,
    onControlChange
}: CertSectionProps) {
    const [expanded, setExpanded] = useState(true);

    const completedCount = useMemo(
        () => section.controls.filter(control => controlData[control.id]?.state === "yes").length,
        [section.controls, controlData]
    );

    const naCount = useMemo(
        () => section.controls.filter(control => controlData[control.id]?.state === "na").length,
        [section.controls, controlData]
    );

    const handleToggle = () => setExpanded(!expanded);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
        }
    };

    return (
        <div className="cert-section">
            <div
                className="flex items-center justify-between cursor-pointer mb-3"
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
                aria-expanded={expanded}
                aria-controls={`section-content-${section.id}`}
                aria-label={`${expanded ? "Collapse" : "Expand"} section ${index + 1}: ${section.title}`}
            >
                <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">Section {index + 1}: {section.title}</h3>
                    {section.description && (
                        <p className="text-sm opacity-80">{section.description}</p>
                    )}
                </div>
                <SectionProgress completed={completedCount} na={naCount} total={section.controls.length} />
                <button
                    type="button"
                    className="w-6 h-6 rounded-full border border-solid bg-transparent cursor-pointer flex items-center justify-center text-sm font-medium cert-section-toggle"
                    aria-hidden="true"
                    tabIndex={-1}
                >
                    {expanded ? "−" : "+"}
                </button>
            </div>
            <div
                id={`section-content-${section.id}`}
                className={`cert-section-content ${expanded ? "expanded" : ""}`}
            >
                <div className="grid gap-3 control-list">
                    {section.controls.map((control) => (
                        <ControlCard
                            key={control.id}
                            control={control}
                            data={controlData[control.id] || { state: "no", justification: control.guide || "", evidence: control.evidence || "" }}
                            onControlChange={(data) => onControlChange(control.id, data)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
});

CertSection.displayName = "CertSection";
