---
sidebar_position: 2
title: Getting Started
---

import DownloadCards from '@site/src/components/DownloadCards';

<p align="center">
  <img src="/img/logo.png" alt="3psLCCA logo" width="88" height="88" class="spin-logo" />
</p>

# Getting Started

This page covers installing and launching the 3psLCCA desktop application. A web application
is [TODO].

## Download

<DownloadCards />

## Installer setup (Windows / Linux)

1. Run the downloaded installer (`.exe` on Windows, `.sh` on Linux) and follow the setup prompts.
2. Launch **3psLCCA** from the Start Menu (Windows) or your applications launcher (Linux).

## Conda setup (all platforms)

:::tip
This option bundles a portable LaTeX distribution needed for PDF report generation, and is the
only option on macOS.
:::

```bash
conda config --remove channels defaults
conda config --add channels conda-forge
conda config --add channels osdag
conda config --add channels zehen-249

conda create -n 3pslcca
conda activate 3pslcca
conda install three-ps-lcca-gui

threePSLCCA
```

## System requirements

- Windows or Linux (64-bit) for the installer; Windows, Linux, or macOS (64-bit) for the Conda package
- Conda package requires Python 3.10–3.12 and Miniconda

## Next steps

Continue to [Concepts](./concepts.md) to understand how the 3psLCCA framework structures a
bridge life cycle cost assessment.
