# Mash — Official Website & Documentation Portal

> The autonomous AI workbench for complex work. Understand your data, inspect spreadsheets, and build software alongside an agent that reads, edits, and executes on your local computer.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Platform](https://img.shields.io/badge/Platform-Windows_x64-0078D6?style=flat&logo=windows)](https://mash.ai/download)

---

## Overview

This repository contains the complete production-grade source code for the **Mash** marketing website, 3-column documentation engine, changelog timeline, and installer download hub.

### Architectural Highlights

- **Pure Static Export (SSG):** Compiled at build time via Next.js Turbopack (`output: 'export'`) into zero-runtime static HTML/CSS/JS. Deployable to Cloudflare Pages, Vercel, GitHub Pages, or any CDN edge.
- **Sarvam AI & Meta Astryx Aesthetic:** Clean porcelain canvas (`#FCFCFD`), slate ink typography (`#0F172A`), hairline structural borders (`#E2E8F0`), and terracotta/emerald accent highlights. Completely eliminates generic AI gradient blobs.
- **Assistant UI Primitives:** Collapsible reasoning token drawers (`Thought for 6s`) and structured tool execution badges (`run_shell_command`, `search_file_content`, `write_file`).
- **Cursor-Grade Documentation (`/docs`):** 3-column documentation architecture with sticky left navigation tree, middle markdown article with syntax highlighting, and sticky right table of contents.
- **Linear-Grade Changelog (`/changelog`):** Vertical release timeline with sticky date rail, semver badges (`New`, `Improved`, `Security`), and high-res screenshot embeds.
- **Verified Download Hub (`/download`):** Direct installer link (`Mash-Setup-0.1.0.exe`, 224.54 MB) with one-click copyable SHA-256 cryptographic checksum.

---

## Repository Structure

```
├── public/
│   ├── releases/             # Windows installer binaries (.gitignore protected)
│   ├── screenshots/          # 4 Curated Light-Mode UI workflow screenshots
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── assistant/        # Assistant UI reasoning & tool badges
│   │   ├── changelog/        # Linear-style release timeline components
│   │   ├── docs/             # Cursor-style 3-column documentation layout
│   │   ├── layout/           # Navbar with mega-menu, Footer, WindowMockup
│   │   ├── marketing/        # HeroSection, FeatureTabs, ValueProps, DownloadCard
│   │   └── ui/               # shadcn / Radix primitives (Button, Badge, Card)
│   ├── content/
│   │   ├── docs/             # Unitised Markdown documentation chapters
│   │   ├── changelog.json    # Structured release history data
│   │   └── site-config.ts    # Single source of truth (version, size, SHA-256)
│   ├── lib/
│   │   ├── docs.ts           # Build-time Markdown parser & frontmatter extractor
│   │   ├── markdown.ts       # Zero-dependency Markdown-to-HTML engine
│   │   └── utils.ts          # Class merging utility (cn)
│   ├── pages/
│   │   ├── _app.tsx          # Font loading & layout shell
│   │   ├── _document.tsx     # JSON-LD SoftwareApplication schema
│   │   ├── index.tsx         # Landing page
│   │   ├── download.tsx      # Dedicated download portal
│   │   ├── changelog.tsx     # Release timeline
│   │   └── docs/             # Dynamic documentation routes
│   └── styles/
│       └── globals.css       # Tailwind v4 theme & Sarvam-inspired tokens
├── next.config.js            # Next.js static export configuration
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/mahwa5531-coder/mash-website.git
cd mash-website

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Production Build

```bash
# Type check and build static export
npm run build
```

The exported static site will be generated in `out/`.

### Automated Verification

```bash
# Run headless browser Playwright verification tests
node test_website_production.mjs
```

---

## License

Proprietary / All Rights Reserved © Mash Team.
