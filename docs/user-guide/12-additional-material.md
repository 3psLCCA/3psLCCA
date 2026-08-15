---
sidebar_position: 12
title: Additional Material
---

> This page is earlier draft material for the Construction Work Data section, kept for reference. See [Construction Work Data](./04-construction-data.md) for the current guide.

# Additional Material - Construction Works Data (earlier draft)

The **Construction Works Data** section captures all physical materials and quantities that make up the bridge structure. It is organised into four tabs: **Foundation**, **Sub-Structure**, **Super-Structure**, and **Miscellaneous**. Each tab follows the same general layout: a global toolbar in the upper-right corner for bulk operations, and one or more expandable component groups that each contain a standardised material entry form.

> All cost, quantity, and emission values entered here feed directly into the Economic and Environmental pillars of the life cycle cost calculation.

---

## B.1 Foundation

### B.1.1 Workspace Overview

The Foundation tab captures all structural components constructed below ground or riverbed level. The workspace provides:

- A **global toolbar** (upper-right) with buttons for bulk excel import and trash repository access.
- A **manual entry form** for registering individual material profiles, including structural grading, unit costing, and carbon emission factor data.

## Foundation  Overview

---

### B.1.2 Bulk Data Import

To populate the Foundation table from a pre-formatted Excel schedule:

1. Click **Upload Excel** in the upper-right toolbar (Download link for excel).
2. Select your  excel filefrom the file explorer.
3. Confirm the import. All valid rows are appended to the component table.

---

### B.1.3 Trash Repository

To audit or restore previously deleted line items:

1. Click the **Trash** button adjacent to the Upload control.
2. Inside the recycling workspace, click **Upload to Excel** to export the archived records for external review, or click **Back to Work** to return to the active layout without making changes.

---

### B.1.4 Manual Material Entry

To register a material profile that is not available in the standard database:

1. Navigate to the **Foundation** tab within the Construction Works Data section.
2. Click into the manual entry sub-pane.

Fill in the fields as follows:

| Field | Description |
|-------|-------------|
| **Custom Material Name** | Free-text name for the non-standard material specification. |
| **Item ID / SOR Code** | Unique catalog identification index or Schedule of Rates code. |
| **Allow Editing DB Filled Values** | Check this box to unlock and modify values that have been pre-filled from the master database. Located directly beneath the identification fields. |
| **Quantity** | Numeric quantity of the material required. |
| **Unit** | Unit of measure corresponding to the quantity (e.g., m³, kg, m). |
| **Rate (Unit Cost)** | Economic unit price for the material. |
| **Rate Source** | Reference for the rate used (e.g., *DSR 2024*). |

**Carbon Emission Factor**

Enter the environmental impact metric for this material:

| Field | Description |
|-------|-------------|
| **Emission Factor per Unit (kgCO₂e)** | Quantitative carbon footprint multiplier per unit of material. |
| **Source** | Verification origin for the emission factor (e.g., inventory database or regulatory publication). |

**Recyclability**

To account for end-of-life recovery:

- Activate the **Include** checkbox within the Recyclability parameters sub-section. This enables the material to contribute to the Environmental pillar's end-of-life recovery calculation.

**Material Classification**

| Field | Description |
|-------|-------------|
| **Grade** | Structural grade designation (e.g., *M25*, *Fe500*). |
| **Type** | Material category selected from the dropdown list (e.g., *Concrete*, *Steel*). |

---

### B.1.5 Saving or Discarding the Entry

Once all fields are complete, choose one of the three bottom actions:

| Action | Result |
|--------|--------|
| **Save to Custom DB** | Commits the material profile permanently to the regional library for reuse across future projects. |
| **Add to Table** | Appends the row strictly to the current project - the profile is not saved to the library. |
| **Cancel** | Discards all inputs and closes the manual entry form without saving. |

> To remove an existing component from the table, click **Delete Component** on the corresponding row.

---

## B.2 Sub-Structure

### B.2.1 Workspace Overview

The Sub-Structure tab captures all structural elements built above ground level that support the bridge deck. It tracks four explicit components: **Piers**, **Pier Caps**, **Pedestals**, and **Bearings**.

The workspace is structured in two tiers:

- A **global toolbar** (upper-right) that applies bulk actions across all four components simultaneously.
- **Per-component controls** - each component group contains its own **Add Material** and **Delete Component** buttons for localised management.

## Sub-Structure Overview

---

### B.2.2 Global Component Management

| Action | Description |
|--------|-------------|
| **Upload Excel** (global) | Executes bulk data onboarding for all four components simultaneously from a single formatted Excel file. |
| **Trash** (global) | Opens the recycling workspace to audit or restore deleted structural line items across all components. |

---

### B.2.3 Per-Component Actions

Within the Sub-Structure control tree, each component group (Pier, Pier Cap, Pedestal, Bearings) provides:

- **Add Material** - initialises a new material entry row within that component.
- **Delete Component** - removes the entire component group from the active calculation.

---

### B.2.4 Detailed Material Entry

The following entry procedure applies identically to all four sub-structure components.

**Identification and Quantity**

| Field | Description |
|-------|-------------|
| **Material Name** | Structural composition name for the component material. |
| **Item ID / SOR Code** | Catalog indexing number or Schedule of Rates code. |
| **Allow Editing DB Filled Values** | Check to unlock and override locked repository data. Located directly beneath the Item ID field. |
| **Quantity** | Numeric quantity required. |
| **Unit** | Corresponding unit of measure. |

**Costing**

| Field | Description |
|-------|-------------|
| **Rate (Unit Cost)** | Unit price for the material. |
| **Rate Source** | Legislative or market reference for the rate (e.g., *DSR 2024*). |

**Carbon Emission Factor** *(conditional)*

Select the **Carbon Emission Factor** checkbox to reveal the hidden metrics panel:

| Field | Description |
|-------|-------------|
| **Emission Factor** | Raw multiplier value (e.g., *0.179*). |
| **Per Unit** | Unit denominator for the emission factor. |
| **Source** | Regulatory or inventory origin for the factor. |

**Recyclability** *(conditional)*

Select the **Recyclability** checkbox to expand the circular economy inputs:

| Field | Description |
|-------|-------------|
| **Scrape Rate (Unit Cost)** | Salvage value recovered after demolition. |
| **Recovery After Demolition (%)** | Percentage of material that can be structurally reclaimed. |

**Material Classification**

| Field | Description |
|-------|-------------|
| **Grade** | Specific strength or designation class (e.g., *M25*, *Fe500*). |
| **Type** | Raw material category selected from the dropdown (e.g., *Concrete*, *Steel*). |

---

### B.2.5 Saving or Discarding the Entry

| Action | Result |
|--------|--------|
| **Save to Custom DB** | Commits the configured item to your organisation's permanent profile library. |
| **Add to Table** | Pushes the row directly into the active project grid without saving to the library. |
| **Cancel** | Clears the form and discards all changes. |

---

## B.3 Super-Structure

### B.3.1 Workspace Overview

The Super-Structure tab captures engineering parameters for all major structural elements spanning above the support bearings that directly carry traffic loads. It tracks four core components: **Girders**, **Deck Slabs**, **Diaphragms**, and **Cross Bracings**.

The workspace layout mirrors the Sub-Structure tier: a global header cluster for bulk file ingestion and recycling, paired with per-component expandable control matrices for manual material configuration.

## Super-Structure Overview

---

### B.3.2 Global and Component-Level Actions

1. Navigate to the **Super-Structure** tab to open the main bridge deck assembly layout.
2. To import parameters for all spanning components simultaneously, click the global **Upload Excel** button in the upper-right toolbar.
3. To retrieve discarded structural items, click the adjacent **Trash** button.
4. Expand any target structural group (Girder, Deck Slab, Diaphragm, or Cross Bracings) and use its dedicated **Add Material** button to initialise an input row, or click **Delete Component** to exclude that segment from the active design session.

---

### B.3.3 Standardised Component Entry

The following entry procedure applies identically to all four super-structure components.

**Identification and Quantity**

| Field | Description |
|-------|-------------|
| **Material Name** | Exact composition designation for the structural element. |
| **Item ID / SOR Code** | Catalog identification index. Check **Allow Editing DB Filled Values** immediately underneath to modify locked master parameters. |
| **Quantity** | Dimensional requirement for the component. |
| **Unit** | Unit of measure corresponding to the quantity. |

**Costing**

| Field | Description |
|-------|-------------|
| **Rate (Unit Cost)** | Financial unit value for the material. |
| **Rate Source** | Legislative or market origin reference for the rate. |

**Environmental Impact Track** *(conditional)*

Check the **Carbon Emission Factor** box to expand the nested metrics panel:

| Field | Description |
|-------|-------------|
| **Emission Factor** | Quantitative carbon ratio per unit (e.g., *0.179*). |
| **Per Unit** | Target baseline unit for the factor. |
| **Source** | Tracking inventory or regulatory origin for the factor. |

**Lifecycle Circularity Track** *(conditional)*

Check the **Recyclability** box to expand the downstream recovery fields:

| Field | Description |
|-------|-------------|
| **Scrape Rate (Unit Cost)** | Post-demolition salvage value. |
| **Recovery After Demolition (%)** | Material processing yield as a percentage. |

**Material Characterisation**

| Field | Description |
|-------|-------------|
| **Grade** | Specific strength or designation class (e.g., *M35*, *Fe500*). |
| **Type** | Material category selected from the dropdown (e.g., *Concrete*, *Steel*). |

---

### B.3.4 Saving or Discarding the Entry

| Action | Result |
|--------|--------|
| **Add to Table** | Inserts the configured row directly into the active super-structure calculation sheet. |
| **Save to Custom DB** | Writes the component permanently to the local library for future reuse. |
| **Cancel** | Discards the entry form and clears all inputs. |

---

## B.4 Miscellaneous

### B.4.1 Workspace Overview

The Miscellaneous tab captures auxiliary highway, safety, and water management components required to complete the full bridge deck assembly. It is organised into three functional groups:

- **Roadside Safety** - Railing_Crash Barrier_Median
- **Water & Service Management** - Drainage, Waterproofing, Utilities & Other Materials
- **Wearing Course** - Asphalt

Each component group uses a standardised manual entry form designed to capture geometric quantities, unit rates, environmental footprint coefficients, and end-of-life circular economy metrics.

## Miscellaneous Overview

---

### B.4.2 Group and Section Selection

1. Navigate to the **Miscellaneous** tab.
2. Expand the target component category from the available groups listed above.
3. Click the localised **Add Material** button within that category to generate a new input row, or click **Delete Component** to remove the entire component group from your life cycle calculation sheet.

---

### B.4.3 Standardised Material Entry

**Identification and Quantity**

| Field | Description |
|-------|-------------|
| **Material Name** | Exact product specification, brand, or material compound name. |
| **Item ID / SOR Code** | Official catalog indexing code. Select **Allow Editing DB Filled Values** directly below to override locked ledger parameters from the master database. |
| **Quantity** | Project-specific quantity (e.g., linear metres for railings, m² for waterproofing, m³ for asphalt). |
| **Unit** | Unit of measure corresponding to the quantity. |

**Costing**

| Field | Description |
|-------|-------------|
| **Rate (Unit Cost)** | Baseline unit price for the asset. |
| **Rate Source** | Verification baseline reference for the rate (e.g., *DSR 2024*). |

---

### B.4.4 Environmental Tracking and Circular Economy

**Carbon Emission Factor Tracking** *(conditional)*

Select the **Carbon Emission Factor** checkbox to expand the nested emission fields:

| Field | Description |
|-------|-------------|
| **Emission Factor** | Quantitative footprint multiplier per unit of material. |
| **Per Unit** | Denominator baseline for the emission factor. |
| **Source** | Regulatory validation database or inventory origin for the factor. |

**Material Circularity Assessment** *(conditional)*

Select the **Recyclability** checkbox to reveal the post-demolition parameters panel:

| Field | Description |
|-------|-------------|
| **Scrape Rate (Unit Cost)** | Projected salvage credit value recovered after demolition. |
| **Recovery After Demolition (%)** | Real-world reclamation yield as a percentage. |

---

### B.4.5 Material Classification and Saving

1. Enter the component's structural material strength or manufacture code in the **Grade** column.
2. Select its broad material classification from the adjacent **Type** dropdown (e.g., *Bitumen*, *PVC*, *Steel*, *Concrete*).
3. Finalise the entry using one of the three bottom actions:

| Action | Result |
|--------|--------|
| **Add to Table** | Inserts the asset row strictly into the current project sheet. |
| **Save to Custom DB** | Commits the component parameters to your global user library for future reuse. |
| **Cancel** | Discards the form layout and clears all inputs. |



## B.6 Frequently Asked Questions

**Q: Can I import data for only one component instead of all components at once?**
The global **Upload Excel** button imports data across all components simultaneously. To populate a single component, use the per-component **Add Material** button and enter values manually.

**Q: What does "Allow Editing DB Filled Values" do?**
Some fields are pre-filled from the master material database and locked to prevent accidental overrides. Checking this box unlocks those fields for the current entry session only - it does not permanently alter the database.

**Q: What is the difference between "Save to Custom DB" and "Add to Table"?**
**Add to Table** adds the material only to the current project. **Save to Custom DB** writes it to your organisation's local library, making it available for selection in all future projects without re-entering the details.

**Q: Which components support the Recyclability and Carbon Emission Factor fields?**
All components across Foundation, Sub-Structure, Super-Structure, and Miscellaneous support both fields. The fields are conditional - they remain hidden until the corresponding checkbox is selected.

**Q: I deleted a material row by mistake. Can I recover it?**
Yes. Click the **Trash** button in the upper-right toolbar to open the recycling workspace. Deleted items are held there and can be reviewed, exported, or restored.
