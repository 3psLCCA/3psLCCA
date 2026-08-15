---
sidebar_position: 3
title: "Project Workspace and Basic Data Entry"
---

After creating or opening a project, the project workspace opens. This is the main working environment where all project data is entered, edited, and calculated.

---

## B.1 The Project Workspace Layout

The workspace follows a consistent three-zone layout that persists across all data entry pages.


*[TODO - screenshot not yet available: `documentation_images/partB/01_workspace_overview.png`]*

### B.1.1 Left Navigation Menu

The left sidebar provides access to all project data sections.


*[TODO - screenshot not yet available: `documentation_images/partB/02_left_navigation.png`]*

| Menu Item | Purpose | Sub-pages |
|-----------|---------|-----------|
| **General Information** | Project metadata, agency details, basic settings | - |
| **Bridge Data** | Technical specifications, location, life cycle | - |
| **Construction Work Data** | Material quantities and costs for structural components | Foundation, Sub Structure, Super Structure, Misc |
| **Financial Data** | Economic parameters (discount rate, inflation, interest) | - |
| **Traffic and Road Data** | Traffic volume, accident rates, road parameters | - |
| **Maintenance Data** | Routine, periodic, and major maintenance schedules | - |
| **Demolition Data** | End-of-life costs and duration | - |
| **Carbon Emission** | Carbon footprint calculations | Material, Transportation, Machinery, Traffic Diversion, Social Cost |
| **Recycling** | Material recyclability and recovered value | - |
| **Results** | LCCA calculation results and comparison charts | - |

> The active page is highlighted in the menu. All menu items remain clickable at all times.

### B.1.2 Project Header Bar

The top bar shows project identification and primary action buttons.


*[TODO - screenshot not yet available: `documentation_images/partB/03_project_header.png`]*

| Element | Description |
|---------|-------------|
| **Project name** | Display name of the current project. Click to edit. |
| **Status indicator** | Visual indicator of project state: white dot (unsaved), green check (saved), lock icon (calculated and locked). |
| **Save** | Creates a checkpoint. Saves all current data to the project file. |
| **Calculate** | Validates all inputs and runs the LCCA computation. Required before viewing Results or Compare. |
| **Report** | Generates a PDF report (available after calculation). |

---

## B.2 General Information

Click **General Information** in the left navigation menu. This page captures project metadata and agency details.


*[TODO - screenshot not yet available: `documentation_images/partB/04_general_info_overview.png`]*

### B.2.1 Project Information

| Field | Editable | Description |
|-------|----------|-------------|
| **Project Name** | Yes | Display name used in reports and project listings. |
| **Project Code** | Yes | Internal reference code or contract number. |
| **Description** | Yes | Brief narrative description of the project. |
| **Remarks** | Yes | Additional notes, assumptions, or special conditions. |

### B.2.2 Evaluating Agency

This section auto-populates when **Load Agency Profile** is clicked (if a profile was saved in Settings).

| Field | Description |
|-------|-------------|
| **Agency Logo** | PNG or JPG image. Appears on the cover page of generated reports. |
| **Agency Name** | Full legal name of the evaluating organisation. |
| **Contact Person** | Name of the primary assessor or engineer. |
| **Address** | Physical address of the agency. |
| **Country** | Country where the agency is based. |
| **Email** | Contact email address. |
| **Phone** | Contact phone number. |

### B.2.3 Reviewed By

| Field | Description |
|-------|-------------|
| **Name** | Reviewer or approver name. |
| **Organization** | Reviewer's organisation. |
| **Address** | Reviewer's address. |
| **Country** | Reviewer's country. |
| **Email** | Reviewer's email. |
| **Phone** | Reviewer's phone. |

### B.2.4 Project Settings

These fields are set at project creation and **cannot be changed**.

| Field | Description |
|-------|-------------|
| **Project Country** | Determines the material rate database and regional standards. |
| **Project Currency** | All monetary values use this currency. |
| **Unit System** | `Metric (SI)` or `Imperial (English)`. Affects all length and weight inputs. |
| **Material Suggestions** | Toggle auto-suggestions from the built-in material database. |

---

## B.3 Bridge Data

Click **Bridge Data** in the left navigation menu. This page captures the technical specifications and physical characteristics of the bridge.


*[TODO - screenshot not yet available: `documentation_images/partB/05_bridge_data_overview.png`]*

### B.3.1 Bridge Identification

| Field | Description |
|-------|-------------|
| **Name of the Bridge** | Official name of the bridge structure. |
| **Owner** | Name of the owner, client, or responsible agency. |

### B.3.2 Location

| Field | Description |
|-------|-------------|
| **Country** | Auto-filled from project creation. Locked. |
| **Bridge Alignment & Location** | Description of start point, end point, crossed feature (river, valley, railway), and nearby landmarks. |

### B.3.3 Technical Specifications

| Field | Description | Typical Range |
|-------|-------------|---------------|
| **Type of Bridge** | Structural classification. Options: Girder, Arch, Cable-Stayed, Suspension, Truss, Box Girder, Slab, Other. | - |
| **Span** | Total span length between supports. | 20–500 m (girder bridges typically 30–100 m) |
| **Carriageway Width** | Clear width of the roadway portion. | 3.5–15 m |
| **Number of Lanes** | Total traffic lanes. | 1–8 |
| **Vehicle Path Direction** | One Way or Two Way traffic flow. | - |
| **Footpath** | Pedestrian provision: No footpath / Footpath at one side / Footpath at both sides. | - |

> **Validation warnings:** The app highlights unusual values. Span > 5000 m, carriageway width < 1.5 m or > 50 m, or lanes > 16 trigger verification prompts.

### B.3.4 Life Cycle

| Field | Description | Typical Value |
|-------|-------------|---------------|
| **Design Life** | Expected operational service life in years. | 50–100 years |
| **Year of Construction** | Year of construction (past or future). | Current year or future |

> **Validation:** Year of Construction before the current year triggers a warning to verify the input is intentional.

### B.3.5 Construction Schedule

| Field | Description | Typical Value |
|-------|-------------|---------------|
| **Duration of Construction** | Total construction time in months. | 6–48 months |
| **Working Days per Month** | Assumed working days for scheduling. Default: 22 | 20–26 days |
| **Days per Month** | Days per month the road traffic is affected. Default: 30 | 29–31 days |

> **Cross-field validation:** Working Days per Month cannot exceed Days per Month. If violated, a warning appears on the Working Days field.

---
