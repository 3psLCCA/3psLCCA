---
sidebar_position: 9
title: "Carbon Emission"
---

The Carbon Emission page captures greenhouse gas emissions across five categories: Social Cost of Carbon (SCC), Material Emissions, Transportation Emissions, Machinery/Equipment Emissions, and Traffic Rerouting Emissions.

---

## H.1 Overview of Carbon Emission Page

Click **Carbon Emission** in the left navigation menu. The page contains five tabs:
- Social Cost of Carbon
- Material Emissions
- Transportation Emissions
- Machinery/Equipment Emissions
- Traffic Rerouting Emissions


*[TODO - screenshot not yet available: `documentation_images/partH/01_carbon_emission_overview.png`]*

---

## H.2 Social Cost of Carbon (SCC)

The Social Cost of Carbon tab calculates the economic cost of carbon emissions. Two modes are available:

### H.2.1 K. Ricke et al. (Country-Level)

This mode uses country-level SCC estimates from the paper "Country-level social cost of carbon" (K. Ricke et al.). The page pulls in country data from your project's General Information.

### H.2.2 Custom / Manual Override

This mode allows you to enter a custom SCC value manually.


*[TODO - screenshot not yet available: `documentation_images/partH/02_social_cost_of_carbon.png`]*

---

## H.3 Material Emissions

The Material Emissions tab shows carbon emissions from construction materials, pulled directly from your Construction Works Data. The table displays:

- Category (Foundation, Sub-Structure, Super-Structure, Misc)
- Material name
- Quantity and unit
- Conversion factor
- Emission factor and unit
- Total emissions for the material
- Action (edit, exclude/include)

The page includes:
- Summary bar showing total emissions and count of included items
- "Show Details" toggle to display category-wise breakdown
- Included and Excluded tables

### H.3.1 Editing Material Emissions

Click the **edit** icon next to a material to open the Material Dialog and modify emission factors.

### H.3.2 Excluding Materials

Click the **exclude** icon to remove a material from the calculation; click **include** to add it back.


*[TODO - screenshot not yet available: `documentation_images/partH/03_material_emissions.png`]*

---

## H.4 Transportation Emissions

The Transportation Emissions tab captures emissions from transporting materials to the construction site.

### H.4.1 Adding a Delivery

Click **+ Add Delivery** to open the Transportation Dialog, where you can:

- Select materials to include in this delivery
- Enter vehicle details (name, capacity, gross weight, empty weight, emission factor)
- Enter route details (origin, distance in km)


*[TODO - screenshot not yet available: `documentation_images/partH/04_transportation_emissions.png`]*

### H.4.2 Add Delivery Dialog


*[TODO - screenshot not yet available: `documentation_images/partH/05_add_delivery_dialog.png`]*

 

---

## H.5 Machinery/Equipment Emissions

The Machinery/Equipment Emissions tab captures emissions from construction equipment. Two input methods are available: Detailed Equipment List or Lump Sum.

### H.5.1 Detailed Equipment List

This mode uses a table to list each piece of equipment with:
- Equipment name
- Energy source (Diesel, Electricity (Grid), Electricity (Solar/Renewable), Other)
- Fuel/power rating
- Average hours/day
- Number of days
- Emission factor (EF)
- Consumption
- Emissions
- Action (edit, delete)

Click **Load Defaults** to populate the table with common construction equipment.

### H.5.2 Lump Sum

This mode allows you to enter total electricity and fuel consumption directly:
- Electricity: consumption/day, number of days, EF
- Fuel: consumption/day, number of days, EF


*[TODO - screenshot not yet available: `documentation_images/partH/05_machinery_emissions.png`]*

---

## H.6 Traffic Rerouting Emissions

The Traffic Rerouting Emissions tab calculates emissions from traffic rerouting during construction. The mode is automatically set based on your Traffic and Road Data:
- If Traffic Data is in INDIA mode: "Calculate by Vehicle"
- Otherwise: "Enter Directly"

### H.6.1 Calculate by Vehicle Mode

This mode shows:
- Reroute distance (pulled from Traffic Data)
- Vehicle emission factors table
- Total daily emissions

Click **Load Default Factors** to use default emission factors.

### H.6.2 Enter Directly Mode

This mode lets you enter a single total daily emission value.


*[TODO - screenshot not yet available: `documentation_images/partH/06_traffic_diversion_emissions.png`]*

---

## H.7 Example Values

For the Sone River Road Bridge, use the following:
- Material Emissions: populated from Construction Works Data
- Transportation Emissions: add one delivery for each major material category
- Machinery Emissions: use Load Defaults
- Traffic Diversion: use Load Default Factors

---

## H - Screenshot Checklist

| Checklist Item | File |
|----------------|------|
| Carbon Emission - Overview (annotated) | `documentation_images/partH/01_carbon_emission_overview.png` |
| Social Cost of Carbon (annotated) | `documentation_images/partH/02_social_cost_of_carbon.png` |
| Material Emissions (annotated) | `documentation_images/partH/03_material_emissions.png` |
| Transportation Emissions (annotated) | `documentation_images/partH/04_transportation_emissions.png` |
| Machinery/Equipment Emissions (annotated) | `documentation_images/partH/05_machinery_emissions.png` |
| Traffic Rerouting Emissions (annotated) | `documentation_images/partH/06_traffic_diversion_emissions.png` |

---
