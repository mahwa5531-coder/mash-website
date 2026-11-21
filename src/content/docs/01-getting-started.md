---
title: "Getting Started with Mash"
slug: "getting-started"
description: "Installation, system requirements, and first-time setup for Mash on Windows."
order: 1
---

# Getting Started with Mash

Mash is an autonomous AI workbench engineered for complex data inspection, statutory forensic auditing, and software tasks on your local workstation.

## System Requirements

- **Operating System:** Windows 10 or Windows 11 (64-bit)
- **Memory:** 8 GB RAM minimum (16 GB recommended for high-volume 3D vector workbooks)
- **Storage:** 500 MB free disk space
- **Processor:** Intel Core i5 / AMD Ryzen 5 or higher

## Installation

1. Download the official installer: `Mash-Setup-0.1.0.exe` (224.54 MB).
2. Verify the SHA-256 checksum in PowerShell to confirm cryptographic authenticity:
```powershell
Get-FileHash .\Mash-Setup-0.1.0.exe -Algorithm SHA256
```
Expected hash:
`0DBD70F0507DE0614E58B0EA50276D7EE960A15FA27DB2AF0119A369D6BF6EB8`

3. Run the installer and follow the prompt. Mash launches into the single-pane agent chat view by default.

## Next Steps

- Explore the [Dual-Pane Workbench](/docs/workbench-modes) to work alongside live spreadsheets.
- Understand how [Agent Tools](/docs/agent-tools-and-safety) execute on your machine.
