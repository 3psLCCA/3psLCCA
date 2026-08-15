---
sidebar_position: 1
---

# Introduction

**3psLCCA** (Three Pillars of Sustainability Life Cycle Cost) is a graphical, bridge-specific
Life Cycle Cost Assessment (LCCA) tool that integrates the **economic**, **environmental**, and
**social** pillars of sustainability into a single, monetary decision-making metric.

## Why 3psLCCA?

Conventional bridge design decisions often prioritize minimizing initial construction cost while
overlooking impacts that accrue over the full service life - operation, inspection, maintenance,
rehabilitation, hazard-induced repairs (e.g. after earthquakes or extreme events), and
decommissioning. These activities carry significant economic, environmental, and social
consequences.

Existing tools address these dimensions in isolation:

- General-purpose environmental LCA tools (openLCA, One Click LCA, SimaPro) are not bridge-specific
  and do not integrate economic or social dimensions.
- Bridge-specific tools such as **BridgeLCC** focus mainly on economic evaluation, while
  **GreenBridge** focuses on environmental assessment with limited LCCA integration.

**3psLCCA** closes this gap by combining all three pillars into a single bridge-specific workflow,
expressed in monetary terms so that alternatives can be compared directly.

## What the tool does

- Estimates total life cycle cost of a bridge across its service life.
- Analyzes cost distribution across life cycle stages (construction, operation, maintenance,
  rehabilitation, hazard-induced repair, decommissioning).
- Assesses environmental impacts (e.g. carbon emissions) in monetary terms.
- Evaluates social/user-related costs (e.g. disruption costs).
- Compares alternative design options on a consistent, unified basis.

## Scope

The current implementation supports all bridge types, with a primary focus on **steel** and
**prestressed concrete (PSC) girder** short-span bridges. The default database is developed for
**India**, but the tool allows users to define project-specific parameters and databases for
other regions. Its modular architecture is designed to extend to additional bridge typologies,
span ranges, and region-specific databases over time.

## Where to go next

- [Getting Started](./getting-started.md) - install and run the tool.
- [Concepts](./concepts.md) - understand the 3psLCCA framework.
