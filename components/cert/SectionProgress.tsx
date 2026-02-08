import { memo } from "react";

interface SectionProgressProps {
    completed: number;
    partial: number;
    na: number;
    total: number;
}

export const SectionProgress = memo(function SectionProgress({
    completed,
    partial,
    na,
    total
}: SectionProgressProps) {
    const completedPercentage = total > 0 ? (completed / total) * 100 : 0;
    const partialPercentage = total > 0 ? (partial / total) * 100 : 0;
    const naPercentage = total > 0 ? (na / total) * 100 : 0;

    return (
        <div className="section-progress">
            <div className="section-progress-bar">
                <div
                    className="section-progress-fill-yes"
                    style={{ width: `${completedPercentage}%` }}
                />
                <div
                    className="section-progress-fill-partial"
                    style={{ width: `${partialPercentage}%` }}
                />
                <div
                    className="section-progress-fill-na"
                    style={{ width: `${naPercentage}%` }}
                />
            </div>
            <span className="section-progress-text">{completed + partial + na}/{total}</span>
        </div>
    );
});

SectionProgress.displayName = "SectionProgress";
