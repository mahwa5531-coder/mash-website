import * as React from "react";
import { 
  Layers, 
  Table, 
  Brain, 
  MessageSquare, 
  CheckCircle2, 
  Search, 
  ShieldCheck,
  FileSpreadsheet,
  FileCheck2,
  FileSearch,
  Scale
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
  reverseLayout: boolean;
}

const ZIGZAG_ITEMS: ZigZagItem[] = [
  {
    id: "dual-pane",
    badge: "AUDIT WORKBENCH",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/60",
    title: "Dual-Pane Split: AI Audit Partner Beside Your Live Workbooks.",
    subtitle: "Review flagged voucher lines and audit findings without leaving your sheet.",
    description:
      "Mash docks an autonomous audit assistant directly beside your active Excel spreadsheet. Prompt the assistant to verify journal vouchers, calculate quarterly variance percentages, or investigate suspicious accounts while watching your workbook update live on your screen.",
    proofPoints: [
      {
        icon: <Layers className="h-4 w-4 text-blue-600" />,
        label: "Side-by-Side Audit Canvas",
        detail: "Keep general ledgers open alongside the assistant without juggling multiple Excel windows.",
      },
      {
        icon: <CheckCircle2 className="h-4 w-4 text-emerald-600" />,
        label: "Instant Cell-Level Verification",
        detail: "Flagged ledger discrepancies and accounting adjustments update directly in the active sheet.",
      },
      {
        icon: <Search className="h-4 w-4 text-slate-800" />,
        label: "Eliminate Manual VLOOKUPs",
        detail: "Cross-reference account codes, tax rates, and voucher dates automatically across multi-tab files.",
      },
    ],
    screenshot: "/screenshots/mash_real_llm_hero_dual_pane_top_light.png",
    alt: "Mash dual-pane split workspace showing chat on left and Excel workbook with reconciliation table on right",
    activeFile: "Audit_Deliverables / mash_full_feature_audit.xlsx",
    windowBadge: "Live Audit Execution",
    reverseLayout: false,
  },
  {
    id: "full-scope-audit",
    badge: "STATUTORY RECONCILIATION",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    title: "Full-Scope Transaction Auditing: Moving Beyond Risky Sampling.",
    subtitle: "Scan 100% of journal vouchers across multi-tab workbooks in seconds.",
    description:
      "Manual 5% sampling leaves material errors and fraud risks undetected. Mash scans every single voucher line across multiple ledger tabs, performing automated debit/credit balancing, bank feed matching, and Benford's Law anomaly checks in seconds.",
    proofPoints: [
      {
        icon: <Scale className="h-4 w-4 text-emerald-600" />,
        label: "100% Ledger Coverage",
        detail: "Audit every transaction voucher rather than taking statistical sample guesses.",
      },
      {
        icon: <Table className="h-4 w-4 text-blue-600" />,
        label: "Multi-Tab Workpaper Sync",
        detail: "Reconcile trial balances, revenue schedules, and ledger voucher listings simultaneously.",
      },
      {
        icon: <CheckCircle2 className="h-4 w-4 text-amber-600" />,
        label: "Automated Anomaly Detection",
        detail: "Instantly flags duplicate invoice numbers, threshold breaches, and uncredited deposits.",
      },
    ],
    screenshot: "/screenshots/excel_pw_light_maximized_sheet1.png",
    alt: "Maximized light mode Excel workbook showing statutory audit summary and ledger reconciliation",
    activeFile: "Workbooks / Executive_Dashboard_FY25.xlsx",
    windowBadge: "Statutory Reconciliation View",
    reverseLayout: true,
  },
  {
    id: "audit-trace",
    badge: "WORKPAPER TRANSPARENCY",
    badgeColor: "bg-amber-50 text-[#C8522C] border-amber-200/60",
    title: "Step-by-Step Audit Trail: Documented Proof for Review Partners.",
    subtitle: "Every calculation is backed by an auditable deduction trail.",
    description:
      "Black-box AI is unacceptable in statutory audits. Mash details every voucher checked, every formula verified, and every intermediate ledger step. Review partners can inspect the exact reasoning trail before signing off on working papers.",
    proofPoints: [
      {
        icon: <Brain className="h-4 w-4 text-[#C8522C]" />,
        label: "Verifiable Deduction Trail",
        detail: "Complete transparency into how variances were computed and which voucher rows were tested.",
      },
      {
        icon: <FileSearch className="h-4 w-4 text-blue-600" />,
        label: "Zero Silent Overwrites",
        detail: "Suggested journal adjustments and ledger corrections require explicit auditor confirmation.",
      },
      {
        icon: <ShieldCheck className="h-4 w-4 text-emerald-600" />,
        label: "Compliance Review Ready",
        detail: "Audit trails are formatted for external peer reviews, tax inspections, and permanent workpapers.",
      },
    ],
    screenshot: "/screenshots/mash_single_pane_chat_thought_expanded_light.png",
    alt: "Agent chat showing expanded thought steps and audit verification checkpoints",
    activeFile: "Audit_Reports / reconciliation_trace.log",
    windowBadge: "Audit Trail Trace",
    reverseLayout: false,
  },
  {
    id: "focused-chat",
    badge: "CLIENT DELIVERABLES",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/60",
    title: "Instant Audit Schedules & Verified Client Deliverables.",
    subtitle: "Generate working papers with live formulas intact.",
    description:
      "Collapse the spreadsheet pane when discussing strategic accounting opinions or drafting audit memorandums. When finished, export final audit schedules as native .xlsx workbooks with working formulas intact for clients or review committees.",
    proofPoints: [
      {
        icon: <FileSpreadsheet className="h-4 w-4 text-purple-600" />,
        label: "Working Formula Integrity",
        detail: "Exported workbooks retain real Excel formulas (=SUM, =AVERAGE) rather than static values.",
      },
      {
        icon: <FileCheck2 className="h-4 w-4 text-emerald-600" />,
        label: "Executive Audit Memos",
        detail: "Clean markdown tables and findings ready for inclusion in board packs and audit reports.",
      },
      {
        icon: <ShieldCheck className="h-4 w-4 text-slate-800" />,
        label: "100% On-Device Client Privacy",
        detail: "Client financial statements, tax IDs, and bank transactions never leave your local PC.",
      },
    ],
    screenshot: "/screenshots/mash_single_pane_chat_light.png",
    alt: "Single-pane focused chat view with statutory audit deliverable card",
    activeFile: "Agent_Session / financial_statutory_audit.md",
    windowBadge: "Executive Deliverables",
    reverseLayout: true,
  },
];

export function ZigZagFeatures() {
  return (
    <section id="features" className="py-24 border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Badge variant="secondary" className="mb-3 text-[11px] font-mono uppercase tracking-wider">
            AUDIT CAPABILITIES
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 font-sans">
            Engineered for practicing CAs, CPAs, and auditors.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Explore the real software interfaces designed to audit general ledgers, reconcile statutory tax returns, and automate workpaper verification.
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
              {/* Visual Column */}
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

              {/* Text Description Column */}
              <div className="w-full lg:w-5/12 space-y-5">
                <div>
                  <Badge
                    variant="secondary"
                    className="mb-3 text-[11px] font-mono uppercase tracking-wider font-semibold"
                  >
                    {item.badge}
                  </Badge>
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
