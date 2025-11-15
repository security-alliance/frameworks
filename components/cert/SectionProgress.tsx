import { memo } from "react";

interface SectionProgressProps {
    completed: number;
    na: number;
    total: number;
}

export const SectionProgress = memo(function SectionProgress({
    completed,
    na,
    total
}: SectionProgressProps) {
    const completedPercentage = total > 0 ? (completed / total) * 100 : 0;
    const naPercentage = total > 0 ? (na / total) * 100 : 0;

    return (
        <div className="section-progress">
            <div className="section-progress-bar">
                <div
                    className="section-progress-fill-yes"
                    style={{ width: `${completedPercentage}%` }}
                />
                <div
                    className="section-progress-fill-na"
                    style={{ width: `${naPercentage}%` }}
                />
            </div>
            <span className="section-progress-text">{completed + na}/{total}</span>
        </div>
    );
});

SectionProgress.displayName = "SectionProgress";
