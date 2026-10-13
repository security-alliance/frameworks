import {
  ASSESSMENT_STATE_LABELS,
  ASSESSMENT_STATES,
  type AssessmentState,
} from "./types";

export function SecurityMapAssessment({
  controlId,
  state,
  onAssess,
}: {
  controlId: string;
  state: AssessmentState;
  onAssess: (id: string, next: AssessmentState) => void;
}) {
  return (
    <div className="sm-assess">
      <fieldset>
        <legend>Local control assessment</legend>
        {ASSESSMENT_STATES.map((value) => (
          <label key={value}>
            <input
              type="radio"
              name={`sm-assess-${controlId}`}
              value={value}
              checked={state === value}
              onChange={() => onAssess(controlId, value)}
            />{" "}
            {ASSESSMENT_STATE_LABELS[value]}
          </label>
        ))}
      </fieldset>
      <p className="sm-privacy">
        <strong>Stored in this browser.</strong> The Security Map does not upload assessments.
        Exported files may reveal security weaknesses. Implemented means you believe the control
        is deployed. Verified means you checked it. Neither proves a threat is gone.
      </p>
    </div>
  );
}
