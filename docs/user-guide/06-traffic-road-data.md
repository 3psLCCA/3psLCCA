---
sidebar_position: 6
title: "Traffic and Road Data"
---

The Traffic and Road Data page supplies **road user cost (RUC)** inputs for the social pillar of LCCA. In **INDIA** mode, the app computes delay, accident, and operating costs from vehicle counts, road geometry, traffic flow, and Wholesale Price Index (WPI) adjustment factors. In **GLOBAL** mode, a single aggregated daily road user cost replaces the detailed India model.

---

## E.1 Calculation Mode

Click **Traffic and Road Data** in the left navigation menu. The first control is **Calculation Mode**.

| Mode | When available | Panel shown |
|------|----------------|-------------|
| **INDIA** | Project country is India | Vehicle table, alternate route, road parameters, peak hours, WPI section |
| **GLOBAL** | Any project; forced when country is not India | **Road User Cost per Day** only |

### E.1.1 Country-dependent behaviour

On page display, the app reads **Project Country** from General Information:

- **India:** **Calculation Mode** is enabled. The user may switch between **INDIA** and **GLOBAL**.
- **Not India:** **Calculation Mode** is locked to **GLOBAL**. The INDIA panel is hidden.

The active mode is stored in the project as `mode` (`INDIA` or `GLOBAL`).


*[TODO - screenshot not yet available: `documentation_images/partE/01_calculation_mode_india.png`]*


*[TODO - screenshot not yet available: `documentation_images/partE/02_calculation_mode_global.png`]*

### E.1.2 GLOBAL mode validation

| Condition | Result |
|-----------|--------|
| **Road User Cost per Day** ≤ 0 | Warning: `Road User Cost per Day is 0 - road user cost will not be included` - orange border |

No other fields appear in GLOBAL mode.

---

## E.2 Vehicle Traffic Data

Available in **INDIA** mode only. The **Vehicle Traffic Data** table lists eight fixed vehicle categories.

### E.2.1 Vehicle categories and columns

| Vehicle Type | Vehicles / Day | Accident % | PWR |
|--------------|----------------|------------|-----|
| Small Car | Editable (0–9,999,999) | Editable (0.00–100.00) | - |
| Big Car | Editable | Editable | - |
| Two Wheeler | Editable | Editable | - |
| Ordinary Buses | Editable | Editable | - |
| Deluxe Buses | Editable | Editable | - |
| LCV | Editable | Editable | - |
| HCV | Editable | Editable | Editable (0.00–999.90); default **7.22** |
| MCV | Editable | Editable | Editable (0.00–999.90); default **8.00** |

| Column | Meaning |
|--------|---------|
| **Vehicles / Day** | Average daily traffic (ADT) for that vehicle class on the bridge approach road. |
| **Accident %** | Share of total accident involvement attributed to that vehicle class. All classes must sum to **100%** when any traffic is entered (see E.2.3). |
| **PWR** | **Power-to-weight ratio** - used for HCV and MCV only. Shown as **-** for other classes. |

### E.2.2 Force free-flow conditions off-peak

Checkbox below the vehicle table: **Force free-flow conditions off-peak**.

- Default: **checked**
- When checked, off-peak periods are modelled as free-flow for operating-cost calculations
- Stored as `force_free_flow_off_peak`


*[TODO - screenshot not yet available: `documentation_images/partE/03_vehicle_traffic_table.png`]*

### E.2.3 Validation rules (vehicle table)

Validation applies when the sum of **Vehicles / Day** across all classes is **greater than zero**.

| Condition | Result |
|-----------|--------|
| Sum of **Vehicles / Day** = 0 | Warning: `No vehicle traffic data - all vehicles per day are 0` - road user cost from detailed traffic is skipped; vehicle-table checks below are not run |
| Sum of **Accident %** ≠ 100% (tolerance ±0.1) | Error: `Vehicle accident percentages must sum to 100% - currently X.X%` - red border on table |
| **HCV** or **MCV** has Vehicles / Day > 0 and PWR ≤ 0 | Error: `PWR must be > 0 for HCV when vehicles per day > 0` (or MCV) |

When all **Vehicles / Day** values are zero, the user effectively opts out of India-model road user costs; only the WPI zero-value check still runs (see E.7).

---

## E.3 Alternate Road Configuration

Section **Alternate Road Configuration** defines the detour route used during construction and maintenance closures.

### E.3.1 Fields

| Field | Required | Description |
|-------|----------|-------------|
| **Alternate Road Carriageway** | Yes | Lane configuration of the alternate route. First option: **- Select -** (invalid for calculation). |
| **Carriageway Width** | Yes | Width of the alternate carriageway in metres. |
| **Hourly Capacity** | Yes | Design hourly capacity of the alternate route (veh/hr). |

### E.3.2 Lane-type options and auto-fill

Selecting a lane type auto-fills **Carriageway Width** and **Hourly Capacity** from built-in IRC-style defaults:

| Alternate Road Carriageway | Carriageway Width (m) | Hourly Capacity (veh/hr) |
|----------------------------|----------------------|--------------------------|
| Single Lane | 3.75 (locked) | 435 |
| Intermediate Lane | 5.50 (locked) | 1,158 |
| Two Lane (Two Way) | 7.00 (locked) | 2,400 |
| Two Lane (One Way) | 7.00 (locked) | 2,700 |
| Three Lane (One Way) | 10.50 (locked) | 4,200 |
| Four Lane (Two Way) | 7.00 (locked) | 5,400 |
| Six Lane (Two Way) | 10.50 (locked) | 8,400 |
| Eight Lane (Two Way) | 14.00 (locked) | 13,600 |
| 4 Lane Expressway (Two Way) | User entry (enabled) | 5,000 |
| 6 Lane Expressway (Two Way) | User entry (enabled) | 7,500 |
| 8 Lane Expressway (Two Way) | User entry (enabled) | 9,200 |

- **- Select -:** **Carriageway Width** and **Hourly Capacity** reset to 0; width field disabled.
- Fixed-width lane types: **Carriageway Width** is auto-filled and **disabled**.
- Expressway types: width is **not** preset (`None` in data); **Carriageway Width** is **enabled** for manual entry.

The selected display name is stored internally as an IRC **code** (e.g. `2L` for Two Lane (Two Way)).


*[TODO - screenshot not yet available: `documentation_images/partE/04_alternate_road_autofill.png`]*

### E.3.3 Validation rules

| Condition | Result |
|-----------|--------|
| **Alternate Road Carriageway** = **- Select -** | Error: `Alternate Road Carriageway must be selected` |
| **Carriageway Width** = 0 | Error: `Carriageway Width cannot be 0` |
| **Hourly Capacity** = 0 (when total ADT > 0) | Error: `Hourly Capacity cannot be 0` |

> Hourly Capacity and carriageway checks are skipped when all **Vehicles / Day** values are zero.

---

## E.4 Accident Severity Distribution

Section **Accident Severity Distribution** splits accidents by injury outcome. Three percentage fields:

| Field | Range | Description |
|-------|-------|-------------|
| **Minor Injury** | 0.00–100.00 (%) | Percentage of accidents resulting in minor injury |
| **Major Injury** | 0.00–100.00 (%) | Percentage of accidents resulting in major injury |
| **Fatal Accident** | 0.00–100.00 (%) | Percentage of accidents resulting in fatal injury |

### E.4.1 Auto-balancing behaviour

The three fields are linked so the total remains 100%:

- Editing **Minor Injury:** **Fatal Accident** adjusts to `100 − Minor − Major` if Major ≤ remaining; otherwise Major is capped and Fatal set to 0.
- Editing **Major Injury:** if Minor + Major > 100, Major is capped; **Fatal Accident** = `100 − Minor − Major`.
- Editing **Fatal Accident:** if Minor + Fatal > 100, Fatal is capped; **Major Injury** = `100 − Minor − Fatal`.

### E.4.2 Validation rules

When total ADT > 0:

| Condition | Result |
|-----------|--------|
| Minor + Major + Fatal ≠ 100% (tolerance 1×10⁻⁴) | Error: `Accident severity must sum to 100% - currently X.X%` |


*[TODO - screenshot not yet available: `documentation_images/partE/05_accident_severity.png`]*

---

## E.5 Road Parameters

Section **Road Parameters** describes operating conditions on the alternate/detour route and work-zone exposure.

### E.5.1 Field reference

| Field | Required | Range | Description |
|-------|----------|-------|-------------|
| **Road Roughness** | No | 2,000–100,000 (mm/km) | Surface smoothness; lower values indicate smoother ride quality. |
| **Road Rise** | Yes | 0.000–9,999.000 (m/km) | Upward gradient of the alternate road. |
| **Road Fall** | Yes | 0.000–9,999.000 (m/km) | Downward gradient of the alternate road. |
| **Additional Reroute Distance** | No | 0.000–9,999.000 (km) | Extra distance travelled due to rerouting during construction or maintenance. |
| **Additional Travel Time** | No | 0.000–9,999.000 (min) | Extra travel time from rerouting. |
| **Crash Rate** | Yes | 0.00–999,999.00 (acc / M km) | Accidents per million vehicle-kilometres of road length per day. |
| **Work Zone Multiplier** | Yes | 0.0000–1.0000 | Multiplier for accident risk or delays under work-zone conditions. Default: **1**. |

### E.5.2 Role in LCCA

| Parameter | Role in the analysis |
|-----------|----------------------|
| **Road Roughness** | Affects vehicle operating costs (fuel, tyre wear, maintenance) on the detour route. |
| **Road Rise / Road Fall** | Gradient affects fuel consumption and travel speed for heavy and light vehicles. |
| **Additional Reroute Distance** | Length of detour; scales delay and operating costs during closures. Also referenced from Carbon Emission → Traffic Diversion. |
| **Additional Travel Time** | Fixed extra time per trip on the detour, independent of distance-based delay. |
| **Crash Rate** | Baseline accident frequency on the route; combined with vehicle mix and severity split for accident costs. |
| **Work Zone Multiplier** | Scales accident exposure near the construction/maintenance zone. Value **0** disables work-zone accident scaling (warning shown). |

### E.5.3 Validation warnings

| Field | Warning condition | Message |
|-------|-------------------|---------|
| **Road Rise** | < 0.01 or > 9,999 | Road Rise is 0 or unusually high - please verify the value |
| **Road Fall** | < 0.01 or > 9,999 | Road Fall is 0 or unusually high - please verify the value |
| **Additional Reroute Distance** | < 0.01 or > 1,000 | Additional Reroute Distance is 0 or unusually high - please verify the value |
| **Additional Travel Time** | < 0.01 or > 1,000 | Additional Travel Time is 0 or unusually high - please verify the value |
| **Crash Rate** | < 0.01 or > 10,000 | Crash Rate is 0 or unusually high - please verify the value |
| **Work Zone Multiplier** | < 0.001 | Work Zone Multiplier is 0 - work zone accident scaling will be disabled |

> **Road Rise**, **Road Fall**, and **Crash Rate** are required. A value still at the spin-box minimum (0) is treated as unset for required fields with default 0.
 
 *[TODO - screenshot not yet available: `documentation_images/partE/06_road_parameters.png`]*
---

## E.6 Traffic Flow and Peak Hour Distribution

### E.6.1 Number of Peak Hours

| Field | Required | Range | Description |
|-------|----------|-------|-------------|
| **Number of Peak Hours** | Yes | 0–24 | Count of peak traffic hours modelled per day. |

Changing **Number of Peak Hours** rebuilds the **Peak Hour Distribution** table with that many editable peak rows plus one fixed summary row.

| Warning condition | Message |
|-------------------|---------|
| < 1 or > 24 | Number of Peak Hours must be between 1 and 24 |

Default proportion for each new peak row: **4.00 %**.

### E.6.2 Peak Hour Distribution table

| Row | Editable | Description |
|-----|----------|-------------|
| **Peak Hour 1** … **Peak Hour N** | Yes (0.00–100.00 %) | Share of daily traffic occurring in that peak hour. |
| **Other Hours (Average)** | No (computed) | Average proportion for the remaining `24 − N` hours. |

**Other Hours (Average)** is calculated as:

```
Other Hours (%) = (100 − sum of peak proportions) / (24 − N)
```

When a peak proportion changes, each peak spin box’s maximum is capped so the peak total cannot exceed 100%.

### E.6.3 Validation rules (peak hours)

Applied when total ADT > 0 and **Number of Peak Hours** > 0:

| Condition | Result |
|-----------|--------|
| Any peak hour proportion = 0 | Error: `Peak hour proportion cannot be 0: Peak Hour X` (lists affected hours) |
| Sum of peak proportions > 100% | Error: `Peak hour proportions sum to X.X% - must be ≤ 100%` |

Peak values are stored as fractions (e.g. 10% → `0.1` under `peak_hour_1`, `peak_hour_2`, …).


*[TODO - screenshot not yet available: `documentation_images/partE/06_peak_hour_distribution.png`]*

---

## E.7 WPI Adjustment Factors

**INDIA** mode only. The **WPI Adjustment Factors** section applies Wholesale Price Index–based ratios to road user cost components by vehicle type.

### E.7.1 Profile selector

| Control | Behaviour |
|---------|-----------|
| **WPI Profile:** dropdown | Lists database profiles (bold) and custom profiles (prefixed with ★). |
| Integrity badge | ✅ verified, ⚠ hash mismatch, ❓ no hash - tooltip describes state and DB vs Custom. |
| **+ New** | Creates a blank custom profile (name, year, optional remark dialog). |
| **✎ Save As** | Saves current table values as a new custom profile. |
| **🗑 Delete** | Deletes the selected custom profile only (DB profiles cannot be deleted). |
| **⬆ Save to My Library** | Saves current profile + table data to the global user WPI library (`user.db`). |
| **⬇ Import from Library** | Imports a library profile as a new custom profile in this project. |

On load, if any database profile fails integrity verification, a red warning lists unlisted profile names.

### E.7.2 WPI table structure

The table has **16 cost columns** under six group headings:

| Group | Columns |
|-------|---------|
| Fuel Cost | Petrol, Diesel, Engine Oil, Other Oil, Grease |
| Vehicle Cost | Prop. Damage, Tyre Cost, Spare Parts, Fixed Depr. |
| Commodity | Hold. Cost |
| Pass. & Crew | Passenger, Crew |
| Medical Cost | Fatal, Major, Minor |
| VOT Cost | VOT Cost |

Rows:

1. Group header row (Fuel Cost, Vehicle Cost, …)
2. Column label row
3. **Common to All** checkbox row
4. One data row per vehicle: Small Car, Big Car, Two Wheeler, Ordinary Bus, Deluxe Bus, LCV, HCV, MCV

### E.7.3 Editable vs read-only behaviour

| Profile type | Table cells | Common to All checkboxes |
|--------------|-------------|--------------------------|
| **Database profile** | Read-only | Disabled (vehicle-specific columns only) |
| **Custom profile** | Editable per rules below | Enabled on vehicle-specific columns |

**Common to All** (vehicle-dimension columns only):

- Checked (default when all vehicle values in a column are equal): one value applies to all vehicles; only the first vehicle row is editable; other rows mirror the first and appear dimmed.
- Unchecked: each vehicle row is independently editable.
- Non-vehicle columns (Petrol, Diesel, Passenger, Crew, Fatal, Major, Minor): checkbox is **disabled** with tooltip *This factor is not vehicle-specific - always common to all*.

On save, the app stores a snapshot with **base** (2019 profile), **selected** (current table), and **ratio** (selected ÷ base element-wise).

### E.7.4 Validation rules (WPI)

WPI validation runs **regardless of vehicle ADT**.

| Condition | Result |
|-----------|--------|
| Any checked **Common to All** column has first-row value = 0 | Error: `WPI value cannot be zero: <Group / Label>` |
| Any unchecked column has any vehicle row = 0 | Error: `WPI value cannot be zero: <Group / Label> (<Vehicle>)` |


*[TODO - screenshot not yet available: `documentation_images/partE/07_wpi_table.png`]*

---

## E.8 Remarks and Page Validation

Shared by both calculation modes.

### E.8.1 Remarks / Notes

Rich-text **Remarks / Notes** editor at the bottom of the page. Content is stored as HTML in the project and included in reporting when populated.

### E.8.2 Clear All

Click **Clear All**. Confirmation is required.

On confirmation:

- Vehicle table, peak table, remarks, and all form fields reset to defaults
- **Alternate Road Carriageway** returns to **- Select -**
- WPI selector resets to the first listed database profile
- Validation result label is hidden

### E.8.3 Validate this page

Click **Validate this page** to run the same checks as **Calculate** for this page only. Results appear below the buttons:

| Outcome | Display |
|---------|---------|
| No errors or warnings | Green: ✔ All checks passed |
| Errors | Red ✖ lines with message text |
| Warnings | Orange ⚠ lines with message text |


*[TODO - screenshot not yet available: `documentation_images/partE/08_validate_page.png`]*

---

## E.9 Example values - Sone River Road Bridge

INDIA mode example for a 2-lane state-highway bridge (Bihar). Align **Alternate Road Carriageway** with the two-lane detour typical for this project.

**Calculation Mode:** INDIA

**Vehicle Traffic Data**

| Vehicle Type | Vehicles / Day | Accident % | PWR |
|--------------|----------------|------------|-----|
| Small Car | 2,200 | 18.00 | - |
| Big Car | 650 | 10.00 | - |
| Two Wheeler | 2,800 | 68.00 | - |
| Ordinary Buses | 15 | 1.00 | - |
| Deluxe Buses | 80 | 1.00 | - |
| LCV | 120 | 1.00 | - |
| HCV | 25 | 0.50 | 7.22 |
| MCV | 10 | 0.50 | 8.00 |

**Force free-flow conditions off-peak:** checked

**Alternate Road Configuration**

| Field | Value |
|-------|-------|
| Alternate Road Carriageway | Two Lane (Two Way) |
| Carriageway Width | 7.00 m (auto-filled) |
| Hourly Capacity | 2,400 veh/hr (auto-filled) |

**Accident Severity Distribution:** Minor Injury 30.00 %, Major Injury 55.00 %, Fatal Accident 15.00 %

**Road Parameters**

| Field | Value |
|-------|-------|
| Road Roughness | 3,500 mm/km |
| Road Rise | 2.000 m/km |
| Road Fall | 1.500 m/km |
| Additional Reroute Distance | 3.500 km |
| Additional Travel Time | 8.000 min |
| Crash Rate | 120.00 acc / M km |
| Work Zone Multiplier | 1.0000 |

**Traffic Flow**

| Field | Value |
|-------|-------|
| Number of Peak Hours | 2 |
| Peak Hour 1 | 10.00 % |
| Peak Hour 2 | 10.00 % |
| Other Hours (Average) | 3.64 % (computed) |

**WPI:** Select the latest available database profile for the analysis year (e.g. **2025**). Custom edits are optional.

> For a non-India project or a screening study, switch to **GLOBAL** and enter **Road User Cost per Day** directly.

---

## E - Screenshot checklist

| Checklist Item | File |
|----------------|------|
| Calculation Mode - INDIA panel (annotated) | `documentation_images/partE/01_calculation_mode_india.png` |
| Calculation Mode - GLOBAL panel (annotated) | `documentation_images/partE/02_calculation_mode_global.png` |
| Vehicle Traffic Data table (annotated) | `documentation_images/partE/03_vehicle_traffic_table.png` |
| Alternate Road Configuration auto-fill (annotated) | `documentation_images/partE/04_alternate_road_autofill.png` |
| Accident Severity Distribution (annotated) | `documentation_images/partE/05_accident_severity.png` |
| Peak Hour Distribution (annotated) | `documentation_images/partE/06_peak_hour_distribution.png` |
| WPI Adjustment Factors table (annotated) | `documentation_images/partE/07_wpi_table.png` |
| Validate this page (annotated) | `documentation_images/partE/08_validate_page.png` |

---
