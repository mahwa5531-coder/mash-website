import * as React from "react";
import { 
  Table, 
  MessageSquare, 
  Terminal, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  BarChart3, 
  Cpu, 
  FileSpreadsheet,
  ArrowRight
} from "lucide-react";
import { WindowMockup } from "@/components/layout/WindowMockup";
import { cn } from "@/lib/utils";

interface FeatureTabItem {
  id: string;
  title: string;
  shortLabel: string;
  icon: React.ReactNode;
  description: string;
  screenshot: string;
  alt: string;
  badge: string;
  activeFile: string;
  proofPoints: { icon: React.ReactNode; label: string; detail: string }[];
}

const FEATURE_TABS: FeatureTabItem[] = [
  {
    id: "dual-pane",
    title: "Dual-Pane AI Workbench",
    shortLabel: "Dual-Pane Split",
    icon: <Layers className="h-4 w-4" />,
    description: "Pair real-time conversational agent execution with an 880px interactive spreadsheet canvas. Edit formulas and audit general ledgers simultaneously.",
    screenshot: "/screenshots/mash_real_llm_hero_dual_pane_top_light.png",
    alt: "Dual-Pane view pairing Sarvam AI chat with 880px Excel sheet and live 3D chart",
    badge: "Dual-Pane Split",
    activeFile: "Audit_Deliverables / mash_full_feature_audit.xlsx",
    proofPoints: [
      {
        icon: <Layers className="h-3.5 w-3.5 text-blue-600" />,
        label: "880px Interactive Canvas",
        detail: "Spreadsheet viewer sits side-by-side with chat without viewport compression.",
      },
      {
        icon: <BarChart3 className="h-3.5 w-3.5 text-emerald-600" />,
        label: "Spatial 3D Chart Sync",
        detail: "Modifying values in the chat table instantly re-projects the 3D bar visualization.",
      },
      {
        icon: <CheckCircle2 className="h-3.5 w-3.5 text-slate-700" />,
        label: "Statutory Ledger Validation",
        detail: "Automated variance calculation flagging accounting discrepancies.",
      },
    ],
  },
  {
    id: "single-pane",
    title: "Focused Single-Pane Chat",
    shortLabel: "Single-Pane Chat",
    icon: <MessageSquare className="h-4 w-4" />,
    description: "Distraction-free agent conversation with the spreadsheet pane fully collapsed. Inspect generated markdown tables, copy calculations, and manage deliverables.",
    screenshot: "/screenshots/mash_single_pane_chat_light.png",
    alt: "Single-pane chat view showing prompt, thought duration, and statutory audit table",
    badge: "Right Sidebar Closed",
    activeFile: "Agent_Session / financial_statutory_audit.md",
    proofPoints: [
      {
        icon: <MessageSquare className="h-3.5 w-3.5 text-blue-600" />,
        label: "100% Focused Viewport",
        detail: "Right sidebar cleanly collapses to maximize readability of audit tables.",
      },
      {
        icon: <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />,
        label: "One-Click Deliverable Card",
        detail: "Generated .xlsx and .pdf files appear as verified download pills.",
      },
      {
        icon: <Sparkles className="h-3.5 w-3.5 text-amber-600" />,
        label: "Reasoning Step Pill",
        detail: "Quickly view thought duration (6s) and token count before message stream.",
      },
    ],
  },
  {
    id: "reasoning-trace",
    title: "Audit Trail & Verification Trace",
    shortLabel: "Audit Trace",
    icon: <Terminal className="h-4 w-4" />,
    description: "Inspect the exact reasoning steps and calculation trail behind every answer. Full visibility into how ledger numbers are verified before deliverables are created.",
    screenshot: "/screenshots/mash_single_pane_chat_thought_expanded_light.png",
    alt: "Agent chat showing expanded thought steps and audit verification badges",
    badge: "Full Audit Trace",
    activeFile: "Audit_Reports / reconciliation_trace.log",
    proofPoints: [
      {
        icon: <Terminal className="h-3.5 w-3.5 text-slate-900" />,
        label: "Step-by-Step Transparency",
        detail: "Examines the assistant's intermediate calculation steps and formula checks.",
      },
      {
        icon: <Cpu className="h-3.5 w-3.5 text-blue-600" />,
        label: "Deep Ledger Search",
        detail: "Instantly scans thousands of rows across local spreadsheets to pinpoint discrepancies.",
      },
      {
        icon: <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />,
        label: "Verified Deliverables",
        detail: "Outputs clean spreadsheet reports with formulas intact and zero data loss.",
      },
    ],
  },
  {
    id: "spreadsheet-engine",
    title: "3D Spreadsheet & Vector Analytics",
    shortLabel: "3D Spreadsheets",
    icon: <Table className="h-4 w-4" />,
    description: "Multi-tab workbooks with spatial 3D bar charts, monthly trend lines, and automated statutory audit variance highlighting.",
    screenshot: "/screenshots/excel_pw_light_maximized_sheet1.png",
    alt: "Maximized Light Mode Excel workbook showing 3D bar chart and Executive Dashboard",
    badge: "Vector Projection",
    activeFile: "Workbooks / Executive_Dashboard_FY25.xlsx",
    proofPoints: [
      {
        icon: <Table className="h-3.5 w-3.5 text-emerald-600" />,
        label: "Multi-Sheet Tabs",
        detail: "Toggle seamlessly between Executive Dashboard, Trends, and General Ledger.",
      },
      {
        icon: <BarChart3 className="h-3.5 w-3.5 text-amber-600" />,
        label: "True 3D Spatial Projection",
        detail: "Columns extrude in 3D space with interactive orbital rotation and depth.",
      },
      {
        icon: <FileSpreadsheet className="h-3.5 w-3.5 text-blue-600" />,
        label: "Native Formula Bar",
        detail: "Live calculation engine supporting SUM, AVERAGE, and audit variance models.",
      },
    ],
  },
];

export function FeatureTabs() {
  const [activeTab, setActiveTab] = React.useState<string>("dual-pane");

  const current = FEATURE_TABS.find((t) => t.id === activeTab) || FEATURE_TABS[0];

  return (
    <section id="features" className="py-24 border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 mb-3">
            <Sparkles className="h-3 w-3 text-slate-500" />
            <span>Interactive Visual Workflows</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 font-sans">
            Engineered for high-stakes workflows.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Four specialized interfaces designed to navigate complex datasets, inspect codebases, and run local agent workflows.
          </p>
        </div>

        {/* Tab Selector Pill Bar (Cursor / Linear style) */}
        <div className="flex justify-center mb-10">
          <div 
            className="inline-flex items-center gap-1.5 p-1.5 rounded-xl border border-slate-200/80 bg-slate-100/70 shadow-2xs"
            role="tablist"
          >
            {FEATURE_TABS.map((tab) => {
              const isSelected = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all select-none cursor-pointer",
                    isSelected
                      ? "bg-slate-900 text-white shadow-xs font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  )}
                >
                  {tab.icon}
                  <span>{tab.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Header & 3-Column Proof Points */}
        <div className="mb-8 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-sans">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {current.description}
            </p>
          </div>

          {/* 3-Column Proof Points Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {current.proofPoints.map((point, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-slate-200/80 bg-slate-50/70 p-3.5 space-y-1 shadow-2xs hover:bg-white transition-colors"
              >
                <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 font-sans">
                  {point.icon}
                  <span>{point.label}</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                  {point.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Window Mockup */}
        <div className="relative mt-4">
          <WindowMockup
            title={`Mash — ${current.title}`}
            activeFile={current.activeFile}
            badge={current.badge}
            src={current.screenshot}
            alt={current.alt}
          />
        </div>
      </div>
    </section>
  );
}
