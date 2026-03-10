import { useState } from "react";
import ExcelJS from "exceljs";
import { ControlData, ControlState, Section } from "./types";
import "./control.css";

interface CertDefinition {
    name: string;
    label: string;
    sections: Section[];
}

const stateToText: Record<ControlState, string> = {
    no: "No",
    yes: "Yes",
    partial: "Partial",
    na: "N/A",
};

function getStoredData(certName: string): Record<string, ControlData> {
    try {
        const saved = localStorage.getItem(`certList-${certName}`);
        return saved ? JSON.parse(saved) : {};
    } catch {
        return {};
    }
}

function addCertSheet(
    workbook: ExcelJS.Workbook,
    label: string,
    sections: Section[],
    controlData: Record<string, ControlData>,
) {
    const sheetName = label.length > 31 ? label.slice(0, 31) : label;
    const worksheet = workbook.addWorksheet(sheetName);

    worksheet.columns = [
        { header: "Section", key: "section", width: 12 },
        { header: "Control ID", key: "id", width: 15 },
        { header: "Question", key: "question", width: 80 },
        { header: "Baseline Requirements", key: "baselines", width: 60 },
        { header: "Response", key: "response", width: 12 },
        { header: "N/A Justification", key: "justification", width: 40 },
        { header: "Evidence / Notes", key: "notes", width: 50 },
    ];

    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
    headerRow.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF4339DB" },
    };
    headerRow.alignment = { vertical: "middle", horizontal: "left" };
    headerRow.height = 25;

    let currentRow = 2;

    sections.forEach((section, sectionIndex) => {
        const sectionHeaderRow = worksheet.getRow(currentRow);
        worksheet.mergeCells(currentRow, 1, currentRow, 7);

        const sectionCell = sectionHeaderRow.getCell(1);
        sectionCell.value = `Section ${sectionIndex + 1} — ${section.title}`;
        sectionCell.font = { bold: true, size: 12 };
        sectionCell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFF3F4F6" },
        };
        sectionCell.alignment = { vertical: "middle", horizontal: "left" };
        sectionHeaderRow.height = 22;
        currentRow++;

        section.controls.forEach((control) => {
            const data = controlData[control.id] || { state: "no", justification: "", evidence: "" };
            const baselinesText = control.baselines?.length
                ? control.baselines.map((b, i) => `${i + 1}. ${b}`).join("\n")
                : "";

            const row = worksheet.addRow({
                section: `Section ${sectionIndex + 1}`,
                id: control.id,
                question: control.description,
                baselines: baselinesText,
                response: stateToText[data.state],
                justification: data.justification,
                notes: data.evidence,
            });

            const rowNumber = row.number;

            worksheet.getCell(`E${rowNumber}`).dataValidation = {
                type: "list",
                allowBlank: false,
                formulae: ['"No,Yes,Partial,N/A"'],
                showErrorMessage: true,
                errorTitle: "Invalid Response",
                error: "Please select: No, Yes, Partial, or N/A",
            };
            worksheet.getCell(`E${rowNumber}`).alignment = { vertical: "middle", horizontal: "left" };

            for (const col of ["C", "D", "F", "G"]) {
                worksheet.getCell(`${col}${rowNumber}`).alignment = { wrapText: true, vertical: "top", horizontal: "left" };
            }
            for (const col of ["A", "B"]) {
                worksheet.getCell(`${col}${rowNumber}`).alignment = { vertical: "middle", horizontal: "left" };
            }

            row.eachCell((cell) => {
                cell.border = {
                    top: { style: "thin", color: { argb: "FFD1D5DB" } },
                    left: { style: "thin", color: { argb: "FFD1D5DB" } },
                    bottom: { style: "thin", color: { argb: "FFD1D5DB" } },
                    right: { style: "thin", color: { argb: "FFD1D5DB" } },
                };
            });
            currentRow++;
        });
    });

    worksheet.autoFilter = { from: "A1", to: `G${worksheet.rowCount}` };
    worksheet.views = [{ state: "frozen", xSplit: 0, ySplit: 1, topLeftCell: "A2", activeCell: "A2" }];
}

export function ExportAllCerts() {
    const [exporting, setExporting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleExportAll = async () => {
        setExporting(true);
        setError(null);

        try {
            // Fetch cert data generated at build time
            const resp = await fetch("/cert-data.json");
            if (!resp.ok) throw new Error("Failed to load certification data");
            const certs: CertDefinition[] = await resp.json();

            const workbook = new ExcelJS.Workbook();
            workbook.creator = "SEAL Certifications";
            workbook.created = new Date();

            for (const cert of certs) {
                const controlData = getStoredData(cert.name);
                addCertSheet(workbook, cert.label, cert.sections, controlData);
            }

            const buffer = await workbook.xlsx.writeBuffer();
            const blob = new Blob([buffer], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            const timestamp = new Date().toISOString().replace(/T/, "-").replace(/:/g, "-").split(".")[0];
            a.download = `seal-certifications-all-${timestamp}.xlsx`;
            a.click();
            URL.revokeObjectURL(url);
        } catch (err) {
            setError(`Export failed: ${err instanceof Error ? err.message : "Unknown error"}`);
        } finally {
            setExporting(false);
        }
    };

    return (
        <div style={{ margin: "1rem 0" }}>
            <button
                type="button"
                onClick={handleExportAll}
                disabled={exporting}
                className="cert-action-btn cert-export-btn"
                style={{ fontSize: "0.95rem", padding: "0.5rem 1.25rem" }}
            >
                {exporting ? "Exporting…" : "Export All Certifications (XLSX)"}
            </button>
            {error && (
                <div className="cert-error-message" role="alert" style={{ marginTop: "0.5rem" }}>
                    {error}
                </div>
            )}
        </div>
    );
}

ExportAllCerts.displayName = "ExportAllCerts";
