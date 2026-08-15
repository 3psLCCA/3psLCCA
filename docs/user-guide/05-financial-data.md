---
sidebar_position: 5
title: "Financial Data"
sidebar_label: "Financial Data"
---

The Financial Data page defines **economic parameters** used to bring all life-cycle costs to a **common present value** and to model **financing and price escalation** over the analysis period. These values feed directly into the LCCA engine when **Calculate** is run.

---

## D.1 Overview of the Financial Data page

Click **Financial Data** in the left navigation menu. The page contains:

- A section header **Economic Parameters**
- Four required numeric parameters (each with an optional **Source** text field)
- Action buttons: **Load Suggested Values** and **Clear All**


*[TODO - screenshot not yet available: `documentation_images/partD/01_financial_data_overview.png`]*

---

## D.2 Economic Parameters

All monetary results in **Results** and **Compare** are expressed in the project currency (INR for the example project). The parameters below control how future-year costs are discounted, escalated, and financed.

### D.2.1 Field reference

| Field | Required | Input range | Description |
|-------|----------|-------------|-------------|
| **Discount Rate** | Yes | 0.00–100.00 (%) | Rate used to convert future cash flows into **present value**. Reflects the time value of money and investment risk. |
| **Source: Discount Rate** | No | Text | Citation or basis for the discount rate (e.g. government guidance, agency policy). |
| **Inflation Rate** | Yes | 0.00–100.00 (%) | Expected **annual** increase in general price levels. Used to escalate costs that occur in future years. |
| **Source: Inflation Rate** | No | Text | Citation or basis for the inflation assumption. |
| **Interest Rate** | Yes | 0.00–100.00 (%) | **Borrowing or lending rate** applied to the financed portion of capital. |
| **Source: Interest Rate** | No | Text | Citation or basis for the interest assumption. |
| **Investment Ratio** | Yes | 0.0000–1.0000 | Proportion of total cost **financed through investment** (equity/debt mix), expressed as a decimal from 0 to 1. Example: `0.5` = 50% of costs financed. |
| **Source: Investment Ratio** | No | Text | Citation or basis for the financing split. |

> Each rate field shows a **(%)** suffix. **Investment Ratio** has no percent suffix; enter `0.5` for 50%, not `50`.

> Fields marked required must be set before **Calculate** succeeds. Optional **Source** fields appear in the generated report when filled.

### D.2.2 Role in LCCA

| Parameter | Role in the analysis |
|-----------|----------------------|
| **Discount Rate** | Brings maintenance, demolition, traffic, carbon, and other future costs to **present value** so they can be summed with initial construction cost. A higher rate reduces the present value of distant future costs. |
| **Inflation Rate** | Adjusts nominal costs that occur in later years of the service life. Works with the discount rate to represent real versus nominal cost streams over the analysis period. |
| **Interest Rate** | Applies to the **financed share** of capital. Used when spreading or costing borrowed funds over the life cycle. |
| **Investment Ratio** | Defines how much of the life-cycle cost stream is treated as **investment-financed** (0 = none, 1 = fully financed). The complement represents non-investment funding. Typical bridge studies use values between 0.3 and 0.7 depending on funding structure. |

Together, these four values are passed to the calculation engine as `GeneralParameters` along with bridge life, construction duration, and carbon parameters from other pages.

---

## D.3 Load Suggested Values

Click **Load Suggested Values** to fill the numeric fields with built-in defaults. The button does not modify optional **Source** text fields.

**Values applied by Load Suggested Values:**

| Field | Value |
|-------|-------|
| Discount Rate | 6.70 % |
| Inflation Rate | 5.15 % |
| Interest Rate | 7.75 % |
| Investment Ratio | 0.5 |

> These defaults are starting points for Indian public-infrastructure style analyses. Replace them with project-specific or agency-approved values before final reporting.

After loading, the page marks data as changed and autosaves to the project when the project is saved.


*[TODO - screenshot not yet available: `documentation_images/partD/02_after_load_suggested.png`]*

---

## D.4 Clear All

Click **Clear All**. A confirmation dialog asks whether to reset all fields on this page.

On confirmation:

- All numeric fields return to their minimum (0)
- All text **Source** fields are cleared
- Validation highlighting is cleared

> **Clear All** affects only the Financial Data page. It does not change Construction Work Data, Bridge Data, or other sections.

---

## D.5 Validation

Validation runs when **Calculate** is clicked (and when the page’s `validate()` method is invoked). Results are **errors** (blocking) and **warnings** (non-blocking but highlighted).

### D.5.1 Required-field errors

The four numeric parameters are required. A spin box still at its **minimum value (0)** is treated as **unset** because 0 is the field default.

| Condition | Result |
|-----------|--------|
| Discount Rate, Inflation Rate, Interest Rate, or Investment Ratio left at 0 (initial default) | Error: `Required: <field title>` - red border |
| User enters any value above the minimum | Required check passes for that field |

> To use **Load Suggested Values** as a fast path, click the button after creating a new project. To enter custom values, type directly into each spin box.

### D.5.2 Range warnings

Values above typical public-infrastructure ranges trigger an **orange warning border** and a verification message. Warnings do not block calculation by themselves; the app prompts for confirmation when warnings are present.

| Field | Warning threshold | Message |
|-------|-------------------|---------|
| **Discount Rate** | > 30.00 % | Discount rate exceeds 30% - please verify |
| **Inflation Rate** | > 25.00 % | Inflation rate exceeds 25% - please verify |
| **Interest Rate** | > 35.00 % | Interest rate exceeds 35% - please verify |

**Investment Ratio** has no high-range warning rule. Valid range is enforced by the control: 0.0000–1.0000.


*[TODO - screenshot not yet available: `documentation_images/partD/03_validation_warning.png`]*

---

## D.6 Example values - Sone River Road Bridge

For the guide example (India, INR, 50-year design life), use either **Load Suggested Values** or enter the following explicitly:

```
Discount Rate     : 6.70 %
Inflation Rate      : 5.15 %
Interest Rate       : 7.75 %
Investment Ratio    : 0.5

Source: Discount Rate   : MoRTH / RBI long-term guidance (example)
Source: Inflation Rate  : CPI-based assumption (example)
Source: Interest Rate   : Lending rate assumption (example)
Source: Investment Ratio: 50% financed (example)
```

> Source text is optional. Use it to document assumptions for peer review and PDF reports.

---

## D - Screenshot checklist

| Checklist Item | File |
|----------------|------|
| Financial Data - Overview (annotated) | `documentation_images/partD/01_financial_data_overview.png` |
| After Load Suggested Values (annotated) | `documentation_images/partD/02_after_load_suggested.png` |
| Validation warning - high discount rate (annotated) | `documentation_images/partD/03_validation_warning.png` |

---
