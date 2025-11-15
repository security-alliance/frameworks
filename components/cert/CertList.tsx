import { useCallback, useEffect, useRef, useState } from "react";
import "./control.css";
import { CertListProps, ControlData } from "./types";
import { CertSection } from "./CertSection";
import { exportToExcel, importFromExcel } from "./excelHelpers";

export function CertList({ sections, name }: CertListProps) {
    const storageKey = `certList-${name}`;
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [controlData, setControlData] = useState<Record<string, ControlData>>({});

    useEffect(() => {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            setControlData(JSON.parse(saved));
        }
    }, [storageKey]);

    useEffect(() => {
        if (Object.keys(controlData).length > 0 || localStorage.getItem(storageKey)) {
            localStorage.setItem(storageKey, JSON.stringify(controlData));
        }
    }, [controlData, storageKey]);

    const handleControlChange = useCallback((controlId: string, data: ControlData) => {
        setControlData(prev => ({
            ...prev,
            [controlId]: data
        }));
    }, []);

    const handleExport = async () => {
        try {
            setError(null);
            await exportToExcel(sections, controlData, name);
        } catch (err) {
            setError(`Export failed: ${err instanceof Error ? err.message : "Unknown error"}`);
        }
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            setError(null);
            const newData = await importFromExcel(file);
            setControlData(newData);
        } catch (err) {
            setError(`Import failed: ${err instanceof Error ? err.message : "Unknown error"}`);
        }

        // Reset file input so the same file can be selected again
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="cert-list-container">
            <div className="cert-actions">
                <button
                    type="button"
                    onClick={handleExport}
                    className="cert-action-btn cert-export-btn"
                >
                    Export
                </button>
                <button
                    type="button"
                    onClick={handleImportClick}
                    className="cert-action-btn cert-import-btn"
                >
                    Import
                </button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                    aria-label="Import Excel file"
                />
            </div>

            {error && (
                <div className="cert-error-message" role="alert">
                    {error}
                </div>
            )}

            <div className="grid gap-4">
                {sections.map((section, i) => (
                    <CertSection
                        key={section.id}
                        section={section}
                        index={i}
                        controlData={controlData}
                        onControlChange={handleControlChange}
                    />
                ))}
            </div>
        </div>
    );
}

CertList.displayName = "CertList";
