import { memo, useState } from "react";
import "./control.css";
import { Control, ControlData, ControlState } from "./types";

interface ControlCardProps {
    control: Control;
    data: ControlData;
    onControlChange: (data: ControlData) => void;
}

const nextState: Record<ControlState, ControlState> = {
    no: "yes",
    yes: "na",
    na: "no",
};

const stateLabels: Record<ControlState, string> = {
    yes: "✓",
    na: "—",
    no: "",
};

const stateActionLabels: Record<ControlState, string> = {
    no: "Mark as completed",
    yes: "Mark as not applicable",
    na: "Reset to incomplete",
};

export const ControlCard = memo(function ControlCard({
    control,
    data,
    onControlChange
}: ControlCardProps) {
    const [expanded, setExpanded] = useState(false);

    const handleCycleState = () => {
        const newState = nextState[data.state];
        onControlChange({
            ...data,
            state: newState,
        });
    };

    const handleJustificationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onControlChange({
            ...data,
            justification: e.target.value,
        });
    };

    const handleEvidenceChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onControlChange({
            ...data,
            evidence: e.target.value,
        });
    };

    const handleToggleExpanded = () => setExpanded(!expanded);

    const handleExpandKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggleExpanded();
        }
    };

    const completedStyles = data.state === "yes" ? "line-through opacity-60" : "";

    return (
        <div className="border border-solid rounded-lg p-3 control-card">
            <div className="flex items-start">
                <div className="mr-3">
                    <button
                        type="button"
                        onClick={handleCycleState}
                        className={`mt-1 control-state-btn control-state-${data.state}`}
                        aria-label={`${stateActionLabels[data.state]}: ${control.title}`}
                    >
                        {stateLabels[data.state]}
                    </button>
                </div>
                <div className="flex-1">
                    <div className={`font-bold mb-1 control-title ${completedStyles}`}>
                        {control.title}
                    </div>
                    <div className={`text-md control-description ${completedStyles}`}>
                        {control.description}
                    </div>
                </div>
                <div className="ml-auto pl-3">
                    <button
                        type="button"
                        onClick={handleToggleExpanded}
                        onKeyDown={handleExpandKeyDown}
                        className="w-6 h-6 rounded-full border border-solid bg-transparent cursor-pointer flex items-center justify-center text-sm font-medium control-info-btn"
                        aria-label={`${expanded ? "Hide" : "Show"} justification for ${control.title}`}
                        aria-expanded={expanded}
                        aria-controls={`justification-${control.id}`}
                    >
                        {expanded ? "-" : "i"}
                    </button>
                </div>
            </div>

            <div className={`control-expanded-content ${expanded ? "expanded" : ""}`}>

                <div className="mt-3 pt-3 border-t border-solid control-inputs-section">
                    <div className="mb-3">
                        <label htmlFor={`justification-${control.id}`} className="block mb-1 text-sm font-medium control-label">
                            Justification
                        </label>
                        <textarea
                            id={`justification-${control.id}`}
                            value={data.justification}
                            onChange={handleJustificationChange}
                            placeholder={control.justification || "Enter implementation justification..."}
                            className="control-textarea"
                            rows={3}
                        />
                    </div>

                    <div>
                        <label htmlFor={`evidence-${control.id}`} className="block mb-1 text-sm font-medium control-label">
                            Evidence / Notes
                        </label>
                        <textarea
                            id={`evidence-${control.id}`}
                            value={data.evidence}
                            onChange={handleEvidenceChange}
                            placeholder={control.evidence || "Enter evidence or notes..."}
                            className="control-textarea"
                            rows={3}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});

ControlCard.displayName = "ControlCard";
