---
title: "Workbench Modes"
slug: "workbench-modes"
description: "Switching between focused single-pane chat and the dual-pane spreadsheet workspace."
order: 2
---

# Workbench Modes

Mash provides two complementary operational layouts to accommodate both conversational exploration and multi-dimensional spreadsheet inspection.

## 1. Single-Pane Chat Mode

When executing broad natural-language queries or high-level code generation, Mash provides an uncluttered, single-column chat view.

- **Reasoning Tokens:** Click the `Thought for Xs` accordion to inspect the agent's internal deduction trace before tool execution.
- **Tool Traces:** View real-time terminal outputs from `run_shell_command` or file operations directly below the message.
- **Deliverables:** Formatted tables and downloadable files (e.g. `.xlsx`, `.pdf`) appear as clickable cards with direct file shortcuts.

## 2. Dual-Pane Split Workbench

For complex financial workflows, open the right-hand inspection sidebar:

- **Left Column:** Interactive conversational agent with persistent context.
- **Right Column:** An 880px-wide spreadsheet canvas with formula support, sheet tabs, and 3D spatial projections.
- **Bi-directional Sync:** As the agent writes calculations or audits rows, the spreadsheet viewer updates in real time.

## Workspace Controls & Navigation

- **Toggling the Inspection Pane:** Click the layout toggle icon in the top navigation bar or click any deliverable badge (such as `.xlsx` or terminal logs) within a message turn to open the right sidebar.
- **Resizing the Pane:** Drag the border handle between the chat canvas and the inspection pane to adjust the width (default: 880px).

## Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Enter` | Submit prompt to agent |
| `Shift + Enter` | Insert newline in composer |
| `Ctrl + ;` | Open workspace / project selector |
| `Esc` | Close active modal or lightbox preview |
