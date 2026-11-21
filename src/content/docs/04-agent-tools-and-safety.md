---
title: "Agent Tools & Safety"
slug: "agent-tools-and-safety"
description: "How Mash executes shell commands, file searches, and edits within a local boundary."
order: 4
---

# Agent Tools & Safety Architecture

Mash treats the agent as a local collaborator. Rather than relying on simulated mock data, the agent invokes real system tools within strict user-granted boundaries.

## Core Tool Definitions

1. **`run_shell_command`**
   - Executes terminal scripts within your workspace directory.
   - Streams `stdout` and `stderr` directly into the chat interface.

2. **`search_file_content`**
   - High-speed ripgrep-based search across large codebases or datasets.
   - Returns line-numbered matches with surrounding context.

3. **`write_file` & `edit_file`**
   - Writes verified deliverables or applies granular line-level diffs to your local project files.

## Sandboxing & Trust Model

- **Local Execution:** All tools run on your local machine; your files and proprietary spreadsheets are never uploaded to a third-party training pool.
- **Explicit Confirmation:** Shell commands and file overwrites require user approval unless autonomous permissions are explicitly granted in project settings.
