import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { 
  FileSpreadsheet, 
  Search, 
  BarChart3, 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  ArrowRight,
  TrendingUp,
  Receipt,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { WindowMockup } from "@/components/layout/WindowMockup";
import { SITE_CONFIG } from "@/content/site-config";

export default function UseCasesPage() {
  const cases = [
    {
      id: "statutory-audit",
      badge: "AUDIT & ASSURANCE",
      title: "Statutory & Forensic Financial Auditing",
      subtitle: "Reconcile thousands of journal vouchers in minutes instead of days.",
      problem:
        "Auditing enterprise ledgers often means manually cross-referencing 50,000+ rows across multiple Excel workbooks, hunting for missing tax invoices, duplicate transactions, and rounding errors.",
      solution:
        "Drop your general ledger and trial balance into Mash. Prompt the assistant to scan voucher lines, flag VAT rate discrepancies, and verify balance sheet reconciliations side-by-side on your screen.",
      screenshot: "/screenshots/mash_real_llm_hero_dual_pane_top_light.png",
      alt: "Mash dual pane forensic audit view",
      activeFile: "Audit_Deliverables / statutory_audit_fy26.xlsx",
      metrics: [
        "Instant discrepancy highlighting",
        "Automated VAT/Tax variance detection",
        "Zero data transmission to cloud pools",
      ],
      promptExample:
        '"Audit the FY26 statutory vouchers in the workspace, verify zero material variance against bank feeds, and reconcile ledger accounts into mash_full_feature_audit.xlsx."',
    },
    {
      id: "fpa-variance",
      badge: "CORPORATE FP&A",
      title: "Budget Variance & Financial Forecasting",
      subtitle: "Consolidate quarterly actuals against budget with automated variance flags.",
      problem:
        "Stitching together quarterly department budgets and comparing actuals against forecasts requires complex spreadsheet macros that break easily and obscure underlying variance drivers.",
      solution:
        "Mash evaluates multi-tab Excel workbooks, dynamically recalculates SUM and AVERAGE formulas across cost centers, and highlights cost overruns and ledger variances with cell-level precision.",
      screenshot: "/screenshots/excel_pw_light_maximized_sheet1.png",
      alt: "Maximized Excel sheet showing quarterly variance and monthly trend tabs",
      activeFile: "Workbooks / Executive_Dashboard_FY25.xlsx",
      metrics: [
        "Automated variance & overrun tagging (>5%)",
        "Multi-tab Executive vs Trend navigation",
        "Live recalculation on formula updates",
      ],
      promptExample:
        '"Compare Q1-Q3 actual expenditures against FY25 department budgets, highlight variances exceeding 5%, and generate a consolidated quarterly summary sheet."',
    },
    {
      id: "tax-reconciliation",
      badge: "TAX & COMPLIANCE",
      title: "Vendor Invoice & Tax Reconciliation",
      subtitle: "Cross-reference accounts payable against bank records securely.",
      problem:
        "Checking supplier invoice listings against accounts payable ledgers is tedious and carries severe compliance penalties if confidential taxpayer identification numbers leak into public clouds.",
      solution:
        "Mash executes 100% locally on your Windows PC. It reconciles invoice numbers, purchase order records, and tax withholdings with complete air-gapped security.",
      screenshot: "/screenshots/mash_single_pane_chat_thought_expanded_light.png",
      alt: "Audit verification trail with calculation checks",
      activeFile: "Tax_Compliance / ap_reconciliation.log",
      metrics: [
        "100% on-device air-gapped security",
        "Exact reasoning deduction checkpoints",
        "Full audit trail for regulatory reviews",
      ],
      promptExample:
        '"Reconcile AP invoice list with bank settlement vouchers, flag missing tax IDs, and output a clean discrepancy log with line numbers."',
    },
    {
      id: "executive-reporting",
      badge: "EXECUTIVE REPORTING",
      title: "Executive Data Discovery & Board Deliverables",
      subtitle: "Ask questions in plain English; receive verified board-ready summaries.",
      problem:
        "CFOs and managing partners often need urgent financial answers before meetings without waiting hours for an analyst to build new summary pivot tables.",
      solution:
        "Type your inquiry into the focused chat interface. Mash reads the underlying workbooks, summarizes the exact findings, and generates clean, verified .xlsx deliverable files with direct download buttons.",
      screenshot: "/screenshots/mash_single_pane_chat_light.png",
      alt: "Single-pane focused chat view with deliverable card",
      activeFile: "Executive_Memos / Q3_board_summary.md",
      metrics: [
        "Plain-English workbook querying",
        "One-click verified Excel download cards",
        "Clean markdown tables for executive memos",
      ],
      promptExample:
        '"Summarize Q3 gross margins by territory, identify top 3 cost surges, and generate a downloadable executive audit summary table."',
    },
  ];

  return (
    <>
      <Head>
        <title>Use Cases — {SITE_CONFIG.name} for Business &amp; Finance</title>
        <meta
          name="description"
          content="Explore real-world use cases for Mash: Statutory forensic audits, corporate FP&A variance analysis, tax reconciliation, and executive board reporting."
        />
        <link rel="canonical" href={`${SITE_CONFIG.url}/use-cases/`} />
        <meta property="og:title" content="Mash Use Cases — Auditing, FP&A, and Tax Reconciliation" />
        <meta property="og:description" content="Explore real-world use cases for Mash on Windows. 100% on-device confidentiality." />
        <meta property="og:url" content={`${SITE_CONFIG.url}/use-cases/`} />
      </Head>

      <main className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#FAF9F6]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Badge variant="secondary" className="mb-3 text-[11px] font-mono uppercase tracking-wider">
              REAL-WORLD APPLICATIONS
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 font-sans">
              Engineered for high-stakes <br className="hidden sm:inline" />
              spreadsheet workflows.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              See how corporate finance executives, CPAs, statutory auditors, and analysts use Mash to eliminate hours of manual spreadsheet cross-referencing.
            </p>
          </div>

          {/* Use Case Blocks */}
          <div className="space-y-24 md:space-y-32">
            {cases.map((cs, idx) => (
              <div
                key={cs.id}
                className="rounded-3xl border border-slate-200/90 bg-white p-8 md:p-12 shadow-sm space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <Badge
                      variant="secondary"
                      className="mb-2 text-[11px] font-mono uppercase tracking-wider font-semibold"
                    >
                      {cs.badge}
                    </Badge>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans">
                      {cs.title}
                    </h2>
                    <p className="text-xs text-slate-500 font-mono mt-1 font-medium">
                      {cs.subtitle}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="font-mono text-xs text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60">
                      Use Case 0{idx + 1}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  {/* Left: Problem & Solution Narrative */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 font-mono">
                        The Challenge
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {cs.problem}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 font-mono">
                        The Mash Solution
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {cs.solution}
                      </p>
                    </div>

                    {/* Example Prompt Box */}
                    <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-4 space-y-2">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 font-semibold">
                        <span className="h-2 w-2 rounded-full bg-slate-700" />
                        <span>Example Audit Prompt</span>
                      </div>
                      <p className="text-xs font-mono text-slate-800 leading-relaxed select-all">
                        {cs.promptExample}
                      </p>
                    </div>

                    {/* Verified Metrics Checklist */}
                    <div className="space-y-2 pt-2">
                      {cs.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Real App Visual Mockup */}
                  <div>
                    <WindowMockup
                      title={`Mash — ${cs.title}`}
                      activeFile={cs.activeFile}
                      badge={cs.badge}
                      src={cs.screenshot}
                      alt={cs.alt}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Card */}
          <div className="mt-24 rounded-2xl border border-slate-200/90 bg-white p-8 md:p-12 shadow-md text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 font-sans">
              Bring automated audit intelligence to your spreadsheets.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed font-sans">
              Install the desktop AI workbench on Windows with 100% on-device client confidentiality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={SITE_CONFIG.installer.downloadPath} download>
                <Button size="lg" className="gap-2 text-xs font-semibold h-12 px-6 bg-slate-900 hover:bg-slate-800 text-white shadow-sm">
                  <Download className="h-4 w-4" />
                  <span>Download for Windows</span>
                </Button>
              </a>
              <Link href="/pricing">
                <Button variant="secondary" size="lg" className="gap-2 text-xs font-medium h-12 px-5 border-slate-200 hover:bg-slate-100">
                  <span>View Plans &amp; Pricing</span>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
