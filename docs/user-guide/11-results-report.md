---
sidebar_position: 11
title: "Results and Report"
---

The Results and Report page validates your inputs, runs the LCCA calculation, and displays results.

---

## J.1 Overview of Results Page

Click **Results** in the left navigation menu. The page contains:
- "Validate inputs" button
- Results display area (once calculated)
- Report generation (once calculated)


*[TODO - screenshot not yet available: `documentation_images/partJ/01_results_overview.png`]*

---

## J.2 Running Calculation

### J.2.1 Validate Inputs

Click **Validate inputs** to check all input sections. The page shows errors (blocking) and warnings (non-blocking).

### J.2.2 Run Calculation

If validation passes (no errors), click **Run the Life Cycle Cost (LCC) analysis**. The app calculates:
- Economic costs
- Environmental costs
- Social costs
- Total LCC


*[TODO - screenshot not yet available: `documentation_images/partJ/02_calculation_running.png`]*

---

## J.3 Reading Results

Results are displayed as:
- **Total Life Cycle Cost card**: Displays total LCC, and (in non-narrow view) an "About This Analysis" section with analysis period and year of construction
- Summary cards: Economic, Environmental, Social costs
- Stage-wise summary (Initial, Use, End-of-Life)
- Key findings / smart insights
- Charts: pie chart for cost breakdown, bar chart for stage-wise costs
- Detailed tables for each cost category


*[TODO - screenshot not yet available: `documentation_images/partJ/03_results_display.png`]*

---

## J.4 Generating PDF Report

Click **Generate PDF Report** to open the **Report Section Dialog**. This dialog lets you select which sections and data tables to include in the final PDF.

### J.4.1 Report Section Dialog

The dialog contains:
- A tree view of all available report sections, with checkboxes to include/exclude individual sections
- Real-time count of selected sections
- "Cancel" button to close the dialog without generating a report
- "Generate PDF" button to proceed with PDF creation


*[TODO - screenshot not yet available: `documentation_images/partJ/05_report_section_dialog.png`]*

### J.4.2 Final PDF Generation

After selecting the desired sections, click **Generate PDF**. A file browser opens to choose where to save the PDF. The final report includes:
- Project metadata
- Selected input data sections
- Calculation results
- Charts and tables
- Conclusion


*[TODO - screenshot not yet available: `documentation_images/partJ/04_pdf_report.png`]*

---

## J.5 Example Workflow

For the Sone River Road Bridge:
1. Navigate to Results
2. Click Validate inputs
3. Fix any errors
4. Run calculation
5. Review results
6. Generate PDF report

---

## J - Screenshot Checklist

| Checklist Item | File |
|----------------|------|
| Results - Overview (annotated) | `documentation_images/partJ/01_results_overview.png` |
| Calculation Running (annotated) | `documentation_images/partJ/02_calculation_running.png` |
| Results Display (annotated) | `documentation_images/partJ/03_results_display.png` |
| Report Section Dialog (annotated) | `documentation_images/partJ/05_report_section_dialog.png` |
| PDF Report (annotated) | `documentation_images/partJ/04_pdf_report.png` |

---
