import React, { useState } from "react";
import "./Benchmark.css";

// ---- Types ----
export interface Benchmark {
    title: string;
    description: string;
    rationale?: string;
    verification: string;
    evidence?: string[];
    guide?: string;
}

export interface BenchmarkProps {
    benchmarks: Benchmark[];
}

// ---- Components ----
function BenchmarkCard({ benchmark }: { benchmark: Benchmark }) {
    const [checked, setChecked] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const hasInfo =
        !!benchmark.rationale ||
        !!benchmark.verification ||
        (benchmark.evidence && benchmark.evidence.length > 0) ||
        !!benchmark.guide;

    return (
        <div className="border border-solid rounded-lg p-3 benchmark-card benchmark-card-container">
            <div className="flex items-start">
                <div className="mr-3">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => {
                            setChecked(e.target.checked);
                            if (e.target.checked) {
                                setExpanded(false);
                            }
                        }}
                        className="cursor-pointer"
                    />
                </div>
                <div className="flex-1">
                    <div className={`font-bold mb-1 benchmark-title ${checked ? 'line-through opacity-60' : ''}`}>{benchmark.title}</div>
                    <div className={`text-sm benchmark-description ${checked ? 'line-through opacity-60' : ''}`}>{benchmark.description}</div>
                </div>
                {hasInfo && (
                    <div className="ml-auto pl-3">
                        <button
                            type="button"
                            onClick={() => setExpanded(!expanded)}
                            className="w-6 h-6 rounded-full border border-solid bg-transparent cursor-pointer flex items-center justify-center text-sm font-medium benchmark-info-btn"
                        >
                            {expanded ? '−' : 'i'}
                        </button>
                    </div>
                )}
            </div>
            {hasInfo && (
                <div className={`benchmark-expanded-content ${expanded ? 'expanded' : ''}`}>
                    <div className="pt-3 mt-3 border-t border-solid text-sm benchmark-expanded-inner">
                        {benchmark.rationale && (
                            <div className="mb-2">
                                <strong className="block mb-0.5 benchmark-popup-strong">Rationale:</strong> {benchmark.rationale}
                            </div>
                        )}
                        {benchmark.verification && (
                            <div className="mb-2">
                                <strong className="block mb-0.5 benchmark-popup-strong">Verification:</strong> {benchmark.verification}
                            </div>
                        )}
                        {benchmark.evidence && benchmark.evidence.length > 0 && (
                            <div className="mb-2">
                                <strong className="block mb-0.5 benchmark-popup-strong">Evidence:</strong>
                                <ul className="list-disc list-outside pl-5 my-1">
                                    {benchmark.evidence.map((e, i) => (
                                        <li key={i}>{e}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {benchmark.guide && (
                            <div>
                                <strong className="block mb-0.5 benchmark-popup-strong">Guide:</strong> {benchmark.guide}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export function BenchmarkList({ benchmarks }: BenchmarkProps) {
    return (
        <div className="grid gap-3 benchmark-list">
            {benchmarks.map((b, idx) => (
                <BenchmarkCard key={`${b.title}-${idx}`} benchmark={b} />
            ))}
        </div>
    );
}
