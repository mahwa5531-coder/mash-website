# Mash — Official Website & Product Showcase

> The desktop AI workbench for spreadsheets & financial data. Understand your ledgers, inspect formulas, and reconcile journal vouchers alongside an autonomous agent executing 100% locally on your computer.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Platform](https://img.shields.io/badge/Platform-Windows_x64-0078D6?style=flat&logo=windows)](https://mash.ai/download)

---

## Overview

This repository contains the production source code for the **Mash** marketing website, enterprise use cases showcase, pricing and checkout portal, and verified Windows installer distribution hub.

### Architectural Highlights

- **Pure Static Export (SSG):** Compiled at build time via Next.js Turbopack (`output: 'export'`) into zero-runtime static HTML/CSS/JS. Deployable to Cloudflare Pages, Vercel, GitHub Pages, or any CDN edge.
- **Executive FinTech Aesthetic:** Clean porcelain canvas (`#FAF9F6`), slate ink typography (`#0F172A`), hairline structural borders (`#E2E8F0`), Plus Jakarta Sans typography, and subtle emerald accent highlights.
- **Assistant UI Primitives:** Collapsible reasoning token drawers (`Thought for 6s`) and structured tool execution badges (`run_shell_command`, `search_file_content`, `write_file`).
- **Enterprise Scenarios (`/use-cases`):** Dedicated showcases for Statutory Auditing, FP&A Budget Variance, and Vendor Invoice Reconciliation with realistic dual-pane window mockups.
- **Transparent Commercial Licensing (`/pricing`):** Free forever tier vs. Pro practice pass (₹1,999/month flat fee) aligned with Indian jurisdiction (Bengaluru courts) and CGST Act Section 22 threshold exemptions.
- **Streamlined Checkout (`/checkout`):** Minimalist order review, Razorpay UPI & card flow, and post-purchase desktop launcher (`mash://`).
- **Verified Download Hub (`/download`):** Direct installer link (`Mash-Setup-0.1.0.exe`, 224.54 MB) with one-click copyable SHA-256 cryptographic checksum.

---

## Repository Structure

```
├── public/
│   ├── releases/             # Windows installer binaries
│   ├── screenshots/          # Curated Light-Mode UI workflow screenshots
│   ├── favicon.ico
│   ├── sitemap.xml           # Verified production routes
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/           # Floating island Navbar, Footer, WindowMockup
│   │   ├── marketing/        # HeroSection, HowItWorks, ZigZagFeatures, DownloadCard
│   │   └── ui/               # Radix & Tailwind primitives (Button, Badge, Card, Accordion)
│   ├── content/
│   │   └── site-config.ts    # Single source of truth (version, size, SHA-256)
│   ├── lib/
│   │   └── utils.ts          # Class merging utility (cn)
│   ├── pages/
│   │   ├── _app.tsx          # Font loading & layout shell
│   │   ├── _document.tsx     # JSON-LD SoftwareApplication schema
│   │   ├── index.tsx         # Landing page & feature showcase
│   │   ├── download.tsx      # Dedicated download portal
│   │   ├── pricing.tsx       # Free vs Pro pricing matrix
│   │   ├── use-cases.tsx     # Enterprise audit scenarios
│   │   ├── checkout.tsx      # Order review & payment
│   │   ├── checkout/
│   │   │   └── success.tsx   # Payment confirmation & desktop app launcher
│   │   ├── terms.tsx         # Terms of Use
│   │   ├── privacy.tsx       # Local-first Privacy Policy
│   │   └── policies.tsx      # Cancellation & Refund Policy
│   └── styles/
│       └── globals.css       # Tailwind v4 theme & design tokens
├── next.config.js            # Next.js static export configuration
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
git clone https://github.com/mahwa5531-coder/mash-website.git
cd mash-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Production Build

```bash
npm run build
```

The exported static site is generated in `out/`.

### Automated Verification

```bash
node test_website_production.mjs
```

---

## License

Proprietary / All Rights Reserved © Mash Team.
