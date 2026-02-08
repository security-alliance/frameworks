export interface Control {
    id: string;
    title: string;
    description: string;
    baselines?: string[];
    justification?: string;
    evidence?: string;
}

export type ControlState = "no" | "yes" | "na";

export interface ControlData {
    state: ControlState;
    justification: string;
    evidence: string;
}

export interface Section {
    id: string;
    title: string;
    description?: string;
    controls: Control[];
}

export interface CertListProps {
    sections: Section[];
    name: string;
}
