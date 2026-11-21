import * as React from "react";
import { 
  Layers, 
  Table, 
  Brain, 
  MessageSquare, 
  CheckCircle2, 
  BarChart3, 
  Search, 
  ShieldCheck,
  FileSpreadsheet,
  ArrowRight
} from "lucide-react";
import { WindowMockup } from "@/components/layout/WindowMockup";
import { Badge } from "@/components/ui/badge";

interface ZigZagItem {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  proofPoints: { icon: React.ReactNode; label: string; detail: string }[];
  screenshot: string;
  alt: string;
  activeFile: string;
  windowBadge: string;
  reverseLayout: boolean; // if true, text on left, image on right. if false, image on left, text on right.
}

const ZIGZAG_ITEMS: ZigZagItem[] = [
  {
    id: "dual-pane",
    badge: "WORKSPACE ARCHITECTURE",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/60",
    title: "Dual-Pane Split: Conversation and Spreadsheets Side-by-Side.",
    subtitle: "Stop toggling between 10 different windows.",
    description:
      "Mash docks an interactive AI conversational assistant directly beside an 880px-wide spreadsheet canvas. As the assistant audits ledgers, calculates variances, or detects discrepancies, the spreadsheet updates in real time on your screen.",
    proofPoints: [
      {
        icon: <Layers className="h-4 w-4 text-blue-600" />,
        label: "880px Resizable Split View",
        detail: "Spreadsheets sit side-by-side with chat without horizontal compression or awkward scrolling.",
      },
      {
        icon: <CheckCircle2 className="h-4 w-4 text-emerald-600" />,
        label: "Live Bi-Directional Sync",
        detail: "Modifying values or formulas in the chat instantly updates cell rows in the active workbook.",
      },
      {
        icon: <ShieldCheck className="h-4 w-4 text-slate-800" />,
        label: "Zero Context Switching",
        detail: "Ask questions, review voucher lines, and inspect calculations in one unified workspace.",
      },
    ],
    screenshot: "/screenshots/mash_real_llm_hero_dual_pane_top_light.png",
    alt: "Mash dual-pane split workspace showing chat on left and Excel workbook with 3D chart on right",
    activeFile: "Audit_Deliverables / mash_full_feature_audit.xlsx",
    windowBadge: "Live Dual-Pane Execution",
    reverseLayout: false, // Image Left, Text Right
  },
  {
    id: "spreadsheet-engine",
    badge: "SPREADSHEET ENGINE",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    title: "Multi-Sheet Excel Viewer with 3D Spatial Visual Projections.",
    subtitle: "Built from the ground up for high-volume financial workbooks.",
    description:
      "Seamlessly open complex multi-tab workbooks (.xlsx, .csv). Switch between Executive Dashboards, Monthly Trends, and General Ledger listings with full formula evaluation, zoom controls, and interactive 3D spatial charts.",
    proofPoints: [
      {
        icon: <Table className="h-4 w-4 text-emerald-600" />,
        label: "Multi-Sheet Tab Navigation",
        detail: "Effortlessly toggle between summary dashboards, trend analyses, and voucher listings.",
      },
      {
        icon: <BarChart3 className="h-4 w-4 text-amber-600" />,
        label: "3D Orbital Chart Depth",
        detail: "Visualize quarterly variance magnitudes in interactive 3D space with orbital rotation.",
      },
      {
        icon: <FileSpreadsheet className="h-4 w-4 text-blue-600" />,
        label: "Built-in Calculation Engine",
        detail: "Real-time formula bar supporting SUM, AVERAGE, and custom accounting variance models.",
      },
    ],
    screenshot: "/screenshots/excel_pw_light_maximized_sheet1.png",
    alt: "Maximized light mode Excel workbook showing executive dashboard and 3D bar chart",
    activeFile: "Workbooks / Executive_Dashboard_FY25.xlsx",
    windowBadge: "Maximized Spreadsheet View",
    reverseLayout: true, // Text Left, Image Right
  },
  {
    id: "audit-trace",
    badge: "AUDIT TRANSPARENCY",
    badgeColor: "bg-amber-50 text-[#C8522C] border-amber-200/60",
    title: "Step-by-Step Verification: Full Audit Trail Transparency.",
    subtitle: "Trust in numbers requires an auditable deduction trail.",
    description:
      "Inspect the exact calculation checkpoints and reasoning trail behind every answer. Mash shows how numbers were cross-referenced, which voucher rows were scanned, and what formulas were applied before deliverables are generated.",
    proofPoints: [
      {
        icon: <Brain className="h-4 w-4 text-[#C8522C]" />,
        label: "Transparent Thought Traces",
        detail: "Click the reasoning disclosure to review intermediate verification steps and token duration.",
      },
      {
        icon: <Search className="h-4 w-4 text-blue-600" />,
        label: "Instant Voucher Search",
        detail: "Scans thousands of ledger rows across local spreadsheets in milliseconds to flag discrepancies.",
      },
      {
        icon: <CheckCircle2 className="h-4 w-4 text-emerald-600" />,
        label: "Zero Silent Overwrites",
        detail: "Every suggested correction requires explicit user approval before updating files.",
      },
    ],
    screenshot: "/screenshots/mash_single_pane_chat_thought_expanded_light.png",
    alt: "Agent chat showing expanded thought steps and audit verification badges",
    activeFile: "Audit_Reports / reconciliation_trace.log",
    windowBadge: "Verification Trace",
    reverseLayout: false, // Image Left, Text Right
  },
  {
    id: "focused-chat",
    badge: "DISTRACTION-FREE MODE",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/60",
    title: "Focused Single-Pane Chat with Clickable Deliverables.",
    subtitle: "Collapse the canvas when you need pure conversational focus.",
    description:
      "When reviewing executive summaries or discussing high-level accounting strategies, collapse the right sidebar with one click. Generated audit tables, discrepancy summaries, and verified .xlsx workbooks appear as clean, actionable cards.",
    proofPoints: [
      {
        icon: <MessageSquare className="h-4 w-4 text-purple-600" />,
        label: "100% Focused Viewport",
        detail: "Maximized reading width for long-form statutory audit reports and financial summaries.",
      },
      {
        icon: <FileSpreadsheet className="h-4 w-4 text-emerald-600" />,
        label: "One-Click Deliverable Cards",
        detail: "Generated Excel workbooks and reports appear as clickable download badges.",
      },
      {
        icon: <ShieldCheck className="h-4 w-4 text-slate-800" />,
        label: "100% On-Device Privacy",
        detail: "All spreadsheets, code, and chat transcripts remain strictly on your local PC.",
      },
    ],
    screenshot: "/screenshots/mash_single_pane_chat_light.png",
    alt: "Single-pane focused chat view with statutory audit deliverable card",
    activeFile: "Agent_Session / financial_statutory_audit.md",
    windowBadge: "Single-Pane Focus",
    reverseLayout: true, // Text Left, Image Right
  },
];

export function ZigZagFeatures() {
  return (
    <section id="features" className="py-24 border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Badge variant="secondary" className="mb-3 text-[11px] font-mono uppercase tracking-wider">
            PRODUCT CAPABILITIES
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 font-sans">
            Engineered for high-stakes spreadsheet work.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Explore the real software interfaces designed to audit financial ledgers, inspect complex Excel workbooks, and automate reconciliation.
          </p>
        </div>

        {/* Alternating Zig-Zag Rows */}
        <div className="space-y-28 md:space-y-36">
          {ZIGZAG_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ${
                item.reverseLayout ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Visual Column (7 Cols on Desktop) */}
              <div className="w-full lg:w-7/12">
                <div className="relative group transition-transform duration-300 hover:scale-[1.01]">
                  <WindowMockup
                    title={`Mash — ${item.windowBadge}`}
                    activeFile={item.activeFile}
                    badge={item.windowBadge}
                    src={item.screenshot}
                    alt={item.alt}
                  />
                </div>
              </div>

              {/* Text Description Column (5 Cols on Desktop) */}
              <div className="w-full lg:w-5/12 space-y-5">
                <div>
                  <span
                    className={`inline-block text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border mb-3 ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider font-mono">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Proof Point Cards */}
                <div className="space-y-3 pt-2">
                  {item.proofPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5 space-y-1 hover:bg-white hover:shadow-2xs transition-all"
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 font-sans">
                        {point.icon}
                        <span>{point.label}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-sans pl-6">
                        {point.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
