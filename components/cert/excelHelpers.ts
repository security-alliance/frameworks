import ExcelJS from "exceljs";
import { ControlData, ControlState, Section } from "./types";

const stateToText: Record<ControlState, string> = {
    no: "No",
    yes: "Yes",
    na: "N/A",
};

/**
 * Exports certification checklist data to a formatted Excel file
 * with section headers and dropdown validation
 */
export async function exportToExcel(
    sections: Section[],
    controlData: Record<string, ControlData>
): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Certification Checklist");

    // Define columns with appropriate widths
    worksheet.columns = [
        { header: "Section", key: "section", width: 12 },
        { header: "Control ID", key: "id", width: 15 },
        { header: "Question", key: "question", width: 75 },
        { header: "Response", key: "response", width: 12 },
        { header: "N/A Justification", key: "justification", width: 40 },
        { header: "Evidence / Notes", key: "notes", width: 50 },
    ];

    // Style the header row
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true };
    headerRow.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF4339DB" },
    };
    headerRow.alignment = { vertical: "middle", horizontal: "left" };
    headerRow.height = 25;

    let currentRow = 2;

    // Add data rows with section headers
    sections.forEach((section, sectionIndex) => {
        // Add section header row (merged across all columns)
        const sectionHeaderRow = worksheet.getRow(currentRow);
        worksheet.mergeCells(currentRow, 1, currentRow, 6);

        const sectionCell = sectionHeaderRow.getCell(1);
        sectionCell.value = `Section ${sectionIndex + 1} — ${section.title}`;
        sectionCell.font = { bold: true, size: 12 };
        sectionCell.alignment = { vertical: "middle", horizontal: "left" };
        sectionHeaderRow.height = 22;

        currentRow++;

        // Add control rows for this section
        section.controls.forEach((control) => {
            const data = controlData[control.id] || { state: "no", justification: "", evidence: "" };
            const rowData = {
                section: `Section ${sectionIndex + 1}`,
                id: control.id,
                question: control.description,
                response: stateToText[data.state],
                justification: data.justification,
                notes: data.evidence,
            };

            const row = worksheet.addRow(rowData);
            const rowNumber = row.number;

            // Add dropdown validation for Response column (column D)
            const responseCell = worksheet.getCell(`D${rowNumber}`);
            responseCell.dataValidation = {
                type: "list",
                allowBlank: false,
                formulae: ['"No,Yes,N/A"'],
                showErrorMessage: true,
                errorTitle: "Invalid Response",
                error: "Please select: No, Yes, or N/A",
            };
            responseCell.alignment = { vertical: "middle", horizontal: "left" };

            worksheet.getCell(`C${rowNumber}`).alignment = { wrapText: true, vertical: "top", horizontal: "left" };
            worksheet.getCell(`E${rowNumber}`).alignment = { wrapText: true, vertical: "top", horizontal: "left" };
            worksheet.getCell(`F${rowNumber}`).alignment = { wrapText: true, vertical: "top", horizontal: "left" };
            worksheet.getCell(`A${rowNumber}`).alignment = { vertical: "middle", horizontal: "left" };
            worksheet.getCell(`B${rowNumber}`).alignment = { vertical: "middle", horizontal: "left" };

            // Add light border to control rows
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

    // Auto-filter on all columns (excluding section header rows)
    worksheet.autoFilter = {
        from: "A1",
        to: `F${worksheet.rowCount}`,
    };

    // Freeze the header row
    worksheet.views = [
        {
            state: "frozen",
            xSplit: 0,
            ySplit: 1,
            topLeftCell: "A2",
            activeCell: "A2",
        },
    ];

    // Generate the Excel file and trigger download
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const timestamp = new Date().toISOString().replace(/T/, '-').replace(/:/g, '-').split('.')[0];
    a.download = `sfc-${timestamp}.xlsx`;
    a.click();
    URL.revokeObjectURL(url);
}

/**
 * Imports control states from an uploaded Excel file
 * Validates the file format and returns the parsed state data
 */
export async function importFromExcel(file: File): Promise<Record<string, ControlData>> {
    // Validate file type
    if (!file.name.endsWith(".xlsx") && !file.name.endsWith(".xls")) {
        throw new Error("Invalid file type. Please upload an Excel file (.xlsx or .xls)");
    }

    const workbook = new ExcelJS.Workbook();
    const buffer = await file.arrayBuffer();

    try {
        await workbook.xlsx.load(buffer);
    } catch (error) {
        throw new Error("Failed to read Excel file. The file may be corrupted or invalid.");
    }

    const worksheet = workbook.getWorksheet("Certification Checklist");

    if (!worksheet) {
        throw new Error(
            "Invalid file format. Could not find 'Certification Checklist' worksheet."
        );
    }

    const newData: Record<string, ControlData> = {};
    const textToState: Record<string, ControlState> = {
        no: "no",
        yes: "yes",
        "n/a": "na",
    };

    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return; // Skip header row

        const idCell = row.getCell(2); // Column B: Control ID
        const responseCell = row.getCell(4); // Column D: Response
        const justificationCell = row.getCell(5); // Column E: N/A Justification
        const notesCell = row.getCell(6); // Column F: Evidence / Notes

        const id = idCell.value?.toString().trim();
        const response = responseCell.value?.toString().trim().toLowerCase();

        // Skip section header rows (no Control ID)
        if (!id || id.startsWith("Section")) return;

        if (id && response) {
            const state = textToState[response];
            if (!state) {
                throw new Error(
                    `Invalid response value "${response}" found at row ${rowNumber}. Valid values are: No, Yes, N/A`
                );
            }

            newData[id] = {
                state: state,
                justification: justificationCell.value?.toString().trim() || "",
                evidence: notesCell.value?.toString().trim() || "",
            };
        }
    });

    if (Object.keys(newData).length === 0) {
        throw new Error("No valid data found in the Excel file.");
    }

    return newData;
}
