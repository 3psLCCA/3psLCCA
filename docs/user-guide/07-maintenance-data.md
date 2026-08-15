---
sidebar_position: 7
title: "Maintenance Data"
---

The Maintenance Data page defines **use-stage maintenance and repair costs** for the economic pillar, **carbon emission costs** linked to maintenance activities for the environmental pillar, and **closure durations** that drive road user costs during major repair and bearing replacement for the social pillar. All percentage-based costs are applied against totals computed from Construction Work Data and Carbon Emissions Data when **Calculate** is run.

Click **Maintenance Data** in the left navigation menu (listed as **Maintenance and Repair** under **Input Parameters**). The page contains four form sections, action buttons (**Load Suggested Values**, **Clear All**), and inline **ⓘ** documentation links on each field.

---

## F.1 Overview of the Maintenance Data page

The form is organised into four sections on a single scrollable page:

| Section | Purpose |
|---------|---------|
| **Routine Maintenance** | Annual-style inspection cost and interval |
| **Periodic Maintenance** | Periodic upkeep cost, linked carbon cost, and interval |
| **Major Works** | Major inspection and major repair - each with cost, interval, and (for repair) duration |
| **Bearings & Expansion Joints** | Replacement cost, interval, and on-site duration |

Major Works appears in the UI as two consecutive section headers: **Major Inspection** and **Major Repair**.


*[TODO - screenshot not yet available: `documentation_images/partF/01_maintenance_data_overview.png`]*

---

## F.2 Routine Maintenance

Section **Routine Maintenance** contains two fields that schedule routine bridge inspections over the design life.

### F.2.1 Field reference

| Field | Required | Input range | Unit | Description |
|-------|----------|-------------|------|-------------|
| **Routine Inspection Cost** | Yes | 0.000–100.000 | (% of initial construction cost) | Inspection expenditure expressed as a percentage of **initial construction cost** (from Construction Work Data). |
| **Routine Inspection Frequency** | Yes | 0–50 | (year) | Interval between routine inspections, in years. |

> Each field label is followed by helper text and an **ⓘ** link that opens the in-app field documentation.

### F.2.2 Role in LCCA

| Output (Results) | Pillar |
|------------------|--------|
| Routine Inspection Costs | Economic - use stage |

The cost percentage and frequency are combined with design life and Financial Data discounting to produce a present-value total at each inspection interval.

---

## F.3 Periodic Maintenance

Section **Periodic Maintenance** defines recurring upkeep beyond routine inspection, including an environmental cost component.

### F.3.1 Field reference

| Field | Required | Input range | Unit | Description |
|-------|----------|-------------|------|-------------|
| **Periodic Maintenance Cost** | Yes | 0.000–100.000 | (% of initial construction cost) | Periodic maintenance expenditure as a percentage of **initial construction cost**. |
| **Periodic Maintenance Carbon Cost** | Yes | 0.000–100.000 | (% of initial construction cost) | Carbon emission cost of periodic maintenance as a percentage of **initial carbon emissions cost** (from Carbon Emissions Data). The unit suffix matches other cost fields; the helper text defines the carbon basis. |
| **Periodic Maintenance Frequency** | Yes | 0–100 | (year) | Interval between periodic maintenance events, in years. |

### F.3.2 Role in LCCA

| Output (Results) | Pillar |
|------------------|--------|
| Periodic Maintenance Costs | Economic - use stage |
| Periodic Maintenance related Carbon Emissions | Environmental - use stage |


*[TODO - screenshot not yet available: `documentation_images/partF/02_periodic_carbon_basis.png`]*

---

## F.4 Major Works

Major Works covers **major inspection** and **major repair** activities. The UI renders these as two separate section headers on the same page.

### F.4.1 Major Inspection

| Field | Required | Input range | Unit | Description |
|-------|----------|-------------|------|-------------|
| **Major Inspection Cost** | Yes | 0.000–100.000 | (% of initial construction cost) | Cost of a major inspection event as a percentage of **initial construction cost**. |
| **Major Inspection Frequency** | Yes | 0–100 | (year) | Interval between major inspections, in years. |

| Output (Results) | Pillar |
|------------------|--------|
| Major Inspection Costs | Economic - use stage |

### F.4.2 Major Repair

| Field | Required | Input range | Unit | Description |
|-------|----------|-------------|------|-------------|
| **Major Repair Cost** | Yes | 0.000–100.000 | (% of initial construction cost) | Cost of a major repair event as a percentage of **initial construction cost**. |
| **Major Repair Carbon Cost** | Yes | 0.000–100.000 | (% of initial construction cost) | Carbon emission cost of major repair as a percentage of **initial carbon emissions cost**. |
| **Major Repair Frequency** | Yes | 0–100 | (year) | Interval between major repair events, in years. |
| **Major Repair Duration** | Yes | 0–60 | (months) | Duration of major repair works on site, in **months**. Used to compute road user and rerouting carbon costs when Traffic Data is populated. |

| Output (Results) | Pillar |
|------------------|--------|
| Major Repair Costs | Economic - use stage |
| Major Repair related Carbon Emissions | Environmental - use stage |
| Carbon Emissions due to Rerouting during Major Repairs | Environmental - use stage |
| Road User Costs during Major Repairs | Social - use stage |


*[TODO - screenshot not yet available: `documentation_images/partF/03_major_works.png`]*

---

## F.5 Bearings & Expansion Joints

Section **Bearings & Expansion Joints** defines replacement of bearings and expansion joints over the bridge life.

### F.5.1 Field reference

| Field | Required | Input range | Unit | Description |
|-------|----------|-------------|------|-------------|
| **Bearing & Expansion Joint Replacement Cost** | Yes | 0.000–100.000 | (% of initial construction cost) | Replacement cost expressed as a percentage of **superstructure cost** (Super-Structure tab total from Construction Work Data). The unit suffix shows construction cost; the helper text and calculation engine use the superstructure total. |
| **Bearing & Expansion Joint Replacement Frequency** | Yes | 0–100 | (year) | Interval between replacement events, in years. |
| **Bearing & Expansion Joint Replacement Duration** | Yes | 0–365 | (days) | On-site duration of replacement works, in **days**. Used for road user and rerouting carbon costs during replacement. |

### F.5.2 Role in LCCA

| Output (Results) | Pillar |
|------------------|--------|
| Replacement Costs of Bearings and Expansion joints | Economic - use stage |
| Carbon Emissions due to Rerouting during Replacement of Bearings and Expansion joints | Environmental - use stage |
| Road User Costs during Replacement of Bearings and Expansion joints | Social - use stage |


*[TODO - screenshot not yet available: `documentation_images/partF/04_bearings_expansion_joints.png`]*

---

## F.6 Load Suggested Values

Click **Load Suggested Values** to fill all maintenance fields on this page with built-in defaults. The button resets validation highlighting on filled fields and marks the page as changed (autosaved when the project is saved).

Fields on other pages (for example Demolition Data) are not modified - keys without a widget on this page are skipped silently.

**Values applied by Load Suggested Values:**

| Field | Value |
|-------|-------|
| Routine Inspection Cost | 0.100 % |
| Routine Inspection Frequency | 1 year |
| Periodic Maintenance Cost | 0.550 % |
| Periodic Maintenance Carbon Cost | 0.550 % |
| Periodic Maintenance Frequency | 5 years |
| Major Inspection Cost | 0.500 % |
| Major Inspection Frequency | 5 years |
| Major Repair Cost | 10.000 % |
| Major Repair Carbon Cost | 0.550 % |
| Major Repair Frequency | 20 years |
| Major Repair Duration | 3 months |
| Bearing & Expansion Joint Replacement Cost | 12.500 % |
| Bearing & Expansion Joint Replacement Frequency | 25 years |
| Bearing & Expansion Joint Replacement Duration | 2 days |

> These defaults are starting points for Indian public-infrastructure style bridge studies. Replace them with project-specific or agency-approved values before final reporting.


*[TODO - screenshot not yet available: `documentation_images/partF/05_after_load_suggested.png`]*

---

## F.7 Clear All

Click **Clear All**. A confirmation dialog asks whether to reset all fields on this page.

On confirmation:

- All numeric fields return to their minimum (0)
- Validation highlighting is cleared
- The page is marked as changed

> **Clear All** affects only the Maintenance Data page. It does not change Demolition Data, Construction Work Data, or other sections.

---

## F.8 Validation

Validation runs when **Calculate** is clicked. All 14 fields are required. Results are **errors** (blocking) and **warnings** (non-blocking but highlighted).

### F.8.1 Required-field errors

A spin box still at its **minimum value (0)** is treated as **unset** because 0 is the field default.

| Condition | Result |
|-----------|--------|
| Any maintenance field left at 0 (initial default) | Error: `'<field title>' is required - enter a value above the minimum` - red border |
| User enters any value above the minimum | Required check passes for that field |

> Click **Load Suggested Values** after creating a new project to satisfy all required fields in one step.

### F.8.2 Range warnings

Values outside typical ranges trigger an **orange warning border** and a verification message. Warnings do not block calculation by themselves; the app prompts for confirmation when warnings are present.

**Cost fields** (all `*_cost` keys): warning when value **&lt; 0.01** or **&gt; 100.00**.

| Field | Message when &lt; 0.01 |
|-------|------------------------|
| Routine Inspection Cost | Routine Inspection Cost is 0 - cost will not be included |
| Periodic Maintenance Cost | Periodic Maintenance Cost is 0 - cost will not be included |
| Periodic Maintenance Carbon Cost | Periodic Maintenance Carbon Cost is 0 - cost will not be included |
| Major Inspection Cost | Major Inspection Cost is 0 - cost will not be included |
| Major Repair Cost | Major Repair Cost is 0 - cost will not be included |
| Major Repair Carbon Cost | Major Repair Carbon Cost is 0 - cost will not be included |
| Bearing & Expansion Joint Replacement Cost | Bearing & Expansion Joint Cost is 0 - cost will not be included |

**Frequency fields**: warning when value **&lt; 1** or above the section maximum.

| Field | Valid range (no warning) | Message when out of range |
|-------|--------------------------|---------------------------|
| Routine Inspection Frequency | 1–50 years | Routine Inspection Frequency seems unusual - expected between 1 and 50 years |
| Periodic Maintenance Frequency | 1–100 years | Periodic Maintenance Frequency seems unusual - expected between 1 and 100 years |
| Major Inspection Frequency | 1–100 years | Major Inspection Frequency seems unusual - expected between 1 and 100 years |
| Major Repair Frequency | 1–100 years | Major Repair Frequency seems unusual - expected between 1 and 100 years |
| Bearing & Expansion Joint Replacement Frequency | 1–100 years | Bearing & Expansion Joint Frequency seems unusual - expected between 1 and 100 years |

**Duration fields**: warning when value **&lt; 1** or above the section maximum.

| Field | Valid range (no warning) | Message when out of range |
|-------|--------------------------|---------------------------|
| Major Repair Duration | 1–60 months | Major Repair Duration seems unusual - expected between 1 and 60 months |
| Bearing & Expansion Joint Replacement Duration | 1–365 days | Replacement Duration seems unusual - expected between 1 and 365 days |


*[TODO - screenshot not yet available: `documentation_images/partF/06_validation_warning.png`]*

---

## F.9 Example values - Sone River Road Bridge

For the guide example (India, INR, 50-year design life, 2024 construction), use either **Load Suggested Values** or enter the following explicitly:

```
Routine Inspection Cost              : 0.100 %
Routine Inspection Frequency         : 1 year

Periodic Maintenance Cost            : 0.550 %
Periodic Maintenance Carbon Cost     : 0.550 %
Periodic Maintenance Frequency       : 5 years

Major Inspection Cost                : 0.500 %
Major Inspection Frequency           : 5 years

Major Repair Cost                    : 10.000 %
Major Repair Carbon Cost             : 0.550 %
Major Repair Frequency               : 20 years
Major Repair Duration                : 3 months

Bearing & Expansion Joint Replacement Cost      : 12.500 %
Bearing & Expansion Joint Replacement Frequency : 25 years
Bearing & Expansion Joint Replacement Duration  : 2 days
```

> Ensure Construction Work Data (especially Super-Structure) and Carbon Emissions Data are populated before **Calculate**. Percentage-based maintenance costs are derived from those totals.

---

## F - Screenshot checklist

| Checklist Item | File |
|----------------|------|
| Maintenance Data - Overview (annotated) | `documentation_images/partF/01_maintenance_data_overview.png` |
| Periodic Maintenance - carbon cost basis (annotated) | `documentation_images/partF/02_periodic_carbon_basis.png` |
| Major Works - inspection and repair (annotated) | `documentation_images/partF/03_major_works.png` |
| Bearings & Expansion Joints (annotated) | `documentation_images/partF/04_bearings_expansion_joints.png` |
| After Load Suggested Values (annotated) | `documentation_images/partF/05_after_load_suggested.png` |
| Validation warning (annotated) | `documentation_images/partF/06_validation_warning.png` |
