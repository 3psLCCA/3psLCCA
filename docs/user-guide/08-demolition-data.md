---
sidebar_position: 8
title: "Demolition Data"
---

The Demolition Data page defines end-of-life inputs for the LCCA, expressed as percentages of initial construction and carbon costs, plus the demolition duration. These values feed into both economic and environmental pillar calculations when Calculate is run.

---

## G.1 Overview of the Demolition Data page

Click **Demolition Data** in the left navigation menu. The page contains:

- A section header **End of Life**
- Three required numeric fields under **End of Life**
- Action buttons: **Load Suggested Values** and **Clear All**


*[TODO - screenshot not yet available: `documentation_images/partG/01_demolition_data_overview.png`]*

---

## G.2 End of Life Fields

All three fields are required and expressed relative to initial values from Construction Works Data and Carbon Emission pages.

### G.2.1 Field reference

| Field | Required | Input range | Description |
|-------|----------|-------------|-------------|
| **Demolition & Disposal Costs (%)** | Yes | 0.00–100.00 (%) | End-of-life demolition and disposal cost as a percentage of initial construction cost from Construction Works Data. |
| **Demolition & Disposal Carbon Cost (%)** | Yes | 0.00–100.00 (%) | End-of-life carbon emission cost as a percentage of initial construction carbon cost from Carbon Emission → Material Emissions. |
| **Demolition & Disposal Duration** | Yes | 0–60 (months) | Expected time to complete demolition and disposal work in months. Affects road user cost during end-of-life closure. |

### G.2.2 Role in LCCA

| Parameter | Role in the analysis |
|-----------|----------------------|
| **Demolition & Disposal Costs (%) | Scales the initial construction cost total to estimate end-of-life economic cost in present value. |
| **Demolition & Disposal Carbon Cost (%)** | Scales the initial carbon emission total to estimate end-of-life environmental cost in present value. |
| **Demolition & Disposal Duration** | Defines the length of end-of-life road closure for calculating detour and delay costs in the social pillar. |

---

## G.3 Load Suggested Values

Click **Load Suggested Values** to fill all three fields with built-in defaults.

**Values applied by Load Suggested Values:**

| Field | Value |
|-------|-------|
| Demolition & Disposal Costs (%) | 10.00 % |
| Demolition & Disposal Carbon Cost (%) | 10.00 % |
| Demolition & Disposal Duration | 1 month |

> These defaults are starting points for typical bridge demolitions. Replace them with project-specific values before final reporting.


*[TODO - screenshot not yet available: `documentation_images/partG/02_after_load_suggested.png`]*

---

## G.4 Clear All

Click **Clear All**. A confirmation dialog asks whether to reset all fields on this page.

On confirmation:

- All numeric fields return to their minimum (0 for duration, 0.00 for percentages)
- Validation highlighting is cleared

> **Clear All** affects only the Demolition Data page.

---

## G.5 Validation

Validation runs when **Calculate** is clicked. Results are **errors** (blocking) and **warnings** (non-blocking but highlighted).

### G.5.1 Required-field errors

All three fields are required. A field still at its minimum value is treated as unset.

| Condition | Result |
|-----------|--------|
| Demolition & Disposal Costs (%) left at 0.00 | Error: `Required: Demolition & Disposal Costs (%)` - red border |
| Demolition & Disposal Carbon Cost (%) left at 0.00 | Error: `Required: Demolition & Disposal Carbon Cost (%)` - red border |
| Demolition & Disposal Duration left at 0 | Error: `Required: Demolition & Disposal Duration` - red border |

### G.5.2 Range warnings

Values outside typical ranges trigger an orange warning border.

| Field | Warning threshold | Message |
|-------|-------------------|---------|
| Demolition & Disposal Costs (%) | < 0.10 % or > 50.00 % | Demolition & Disposal Cost is 0% - if end-of-life demolition costs apply, enter a percentage of the initial construction cost / Demolition & Disposal Cost exceeds 50% of construction cost - this is unusually high; confirm the value is correct |
| Demolition & Disposal Carbon Cost (%) | < 0.10 % or > 50.00 % | Demolition & Disposal Carbon Cost is 0% - if carbon costs apply at end of life, enter a percentage of the initial carbon emission cost / Demolition & Disposal Carbon Cost exceeds 50% - this is unusually high; confirm this is the correct proportion of the initial carbon cost |
| Demolition & Disposal Duration | < 1 month or > 24 months | Demolition & Disposal Duration is 0 months - enter the expected time to complete demolition and disposal work / Demolition & Disposal Duration exceeds 24 months - this is a long demolition period; confirm the value is in months, not years |

---

## G.6 Example values - Sone River Road Bridge

For the guide example (India, INR, 50-year design life), use either **Load Suggested Values** or enter the following explicitly:

```
Demolition & Disposal Costs (%)       : 10.00 %
Demolition & Disposal Carbon Cost (%) : 10.00 %
Demolition & Disposal Duration       : 1 month
```

---

## G - Screenshot checklist

| Checklist Item | File |
|----------------|------|
| Demolition Data - Overview (annotated) | `documentation_images/partG/01_demolition_data_overview.png` |
| After Load Suggested Values (annotated) | `documentation_images/partG/02_after_load_suggested.png` |

---
