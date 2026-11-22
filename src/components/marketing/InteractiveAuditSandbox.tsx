import * as React from "react";
import { 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Play, 
  RotateCcw, 
  FileSpreadsheet, 
  Table, 
  TrendingUp, 
  Scale, 
  ArrowRight,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface AuditScenario {
  id: string;
  title: string;
  category: string;
  prompt: string;
  rowCount: string;
  executionTime: string;
  status: "PASSED" | "EXCEPTIONS_FOUND" | "FLAGGED";
  statusText: string;
  summary: string;
  tableHeaders: string[];
  tableRows: {
    cells: string[];
    isFlagged?: boolean;
    flagReason?: string;
  }[];
}

const SCENARIOS: AuditScenario[] = [
  {
    id: "vat-audit",
    title: "Statutory Tax & Rate Variance Scan",
    category: "GST & Statutory Compliance",
    prompt: "Scan FY25 purchase vouchers in workspace, verify applicable tax rates against statutory classification, and flag material rate variances exceeding ₹10,000.",
    rowCount: "14,280 voucher rows",
    executionTime: "1.18s (Local CPU)",
    status: "EXCEPTIONS_FOUND",
    statusText: "1 Material Rate Discrepancy Tagged",
    summary: "Scanned 14,280 input tax credits. 14,279 lines match statutory tax schedules. Row 1,842 applied 18% GST instead of prescribed 12% capital equipment rate.",
    tableHeaders: ["Voucher ID", "Vendor Name", "Invoice Value", "Tax Applied", "Expected Tax", "Variance"],
    tableRows: [
      { cells: ["VCH-2025-0812", "Apex Industrial Gear Ltd", "₹4,25,000", "₹76,500 (18%)", "₹51,000 (12%)", "+₹25,500"], isFlagged: true, flagReason: "Statutory Rate Mismatch (HSN 8483)" },
      { cells: ["VCH-2025-0813", "Zenith Power Solutions", "₹1,80,000", "₹32,400 (18%)", "₹32,400 (18%)", "₹0.00"] },
      { cells: ["VCH-2025-0814", "Matrix Logistics Corp", "₹95,000", "₹4,750 (5%)", "₹4,750 (5%)", "₹0.00"] },
      { cells: ["VCH-2025-0815", "Bharat Precision Tools", "₹3,40,000", "₹40,800 (12%)", "₹40,800 (12%)", "₹0.00"] },
    ],
  },
  {
    id: "bank-reconciliation",
    title: "Bank Statement vs Cash Book Feed",
    category: "Cash & Ledger Reconciliation",
    prompt: "Cross-reference monthly HDFC Current Account statement against ERP General Ledger, auto-match cleared vouchers, and isolate uncredited cheques.",
    rowCount: "3,840 transaction lines",
    executionTime: "0.84s (Local CPU)",
    status: "EXCEPTIONS_FOUND",
    statusText: "Reconciled with 2 Timing Differences",
    summary: "Matched 3,838 lines with ₹0.00 variance. Identified 2 uncredited client deposits deposited on 30-Mar-2025, clearing in April statement.",
    tableHeaders: ["Date", "Bank Reference", "Ledger Voucher", "Debit", "Credit", "Reconciliation Status"],
    tableRows: [
      { cells: ["29-Mar-2025", "NEFT-N08912348", "VCH-CB-9411", "₹5,40,000", "₹0.00", "MATCHED (100%)"] },
      { cells: ["30-Mar-2025", "CHQ-892101", "VCH-CB-9480", "₹1,25,000", "₹0.00", "UNCREDITED DEPOSIT"], isFlagged: true, flagReason: "Cleared on 02-Apr-2025" },
      { cells: ["30-Mar-2025", "RTGS-R0994112", "VCH-CB-9492", "₹18,50,000", "₹0.00", "MATCHED (100%)"] },
      { cells: ["31-Mar-2025", "CMS-COL-4412", "VCH-CB-9510", "₹72,400", "₹0.00", "UNCREDITED CHEQUE"], isFlagged: true, flagReason: "Timing variance (FY25/26 cutoff)" },
    ],
  },
  {
    id: "benford-fraud",
    title: "Benford's Law Fraud & Anomaly Test",
    category: "Forensic Audit & Risk Assessment",
    prompt: "Run first-digit frequency analysis across all Accounts Payable disbursements. Flag abnormal clusters near mandatory approval thresholds.",
    rowCount: "28,600 disbursement records",
    executionTime: "1.42s (Local CPU)",
    status: "FLAGGED",
    statusText: "Threshold Clustering Anomaly (p < 0.01)",
    summary: "Identified anomalous spike in digit '4' amounts (28.4% vs expected 9.7%). 42 purchase orders clustered between ₹49,500 and ₹49,950 to avoid ₹50,000 partner sign-off.",
    tableHeaders: ["First Digit", "Observed Freq", "Benford Expectation", "Variance (%)", "Risk Level", "Audit Recommendation"],
    tableRows: [
      { cells: ["Digit 1", "30.8%", "30.1%", "+0.7%", "NORMAL", "Pass control test"] },
      { cells: ["Digit 2", "17.4%", "17.6%", "-0.2%", "NORMAL", "Pass control test"] },
      { cells: ["Digit 4", "28.4%", "9.7%", "+18.7%", "CRITICAL", "Inspect 42 vouchers under ₹50,000 threshold"], isFlagged: true, flagReason: "Approval Threshold Bypass" },
      { cells: ["Digit 5", "7.1%", "7.9%", "-0.8%", "NORMAL", "Pass control test"] },
    ],
  },
];

export function InteractiveAuditSandbox() {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = React.useState(0);
  const [isSimulating, setIsSimulating] = React.useState(false);
  const [progress, setProgress] = React.useState(100);

  const scenario = SCENARIOS[selectedScenarioIndex];

  const handleSelectScenario = (idx: number) => {
    if (idx === selectedScenarioIndex && !isSimulating) return;
    setSelectedScenarioIndex(idx);
    setIsSimulating(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          return 100;
        }
        return prev + 25;
      });
    }, 180);
  };

  return (
    <section className="py-20 border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3 text-[11px] font-mono uppercase tracking-wider font-semibold">
            INTERACTIVE AUDIT TEST-DRIVE
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 font-sans">
            Experience real financial reasoning in action.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Select a statutory audit procedure below to see how Mash scans complex workbooks and isolates discrepancies on local hardware.
          </p>
        </div>

        {/* Interactive Scenario Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {SCENARIOS.map((sc, idx) => {
            const isSelected = selectedScenarioIndex === idx;
            return (
              <button
                key={sc.id}
                type="button"
                onClick={() => handleSelectScenario(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-2 border cursor-pointer select-none ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-950 shadow-md scale-[1.01]"
                    : "bg-[#FCFCFD] text-slate-700 border-slate-200/80 hover:bg-slate-100/80 hover:text-slate-950"
                }`}
              >
                {idx === 0 && <Table className="h-3.5 w-3.5" />}
                {idx === 1 && <FileSpreadsheet className="h-3.5 w-3.5" />}
                {idx === 2 && <Scale className="h-3.5 w-3.5" />}
                <span>{sc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Simulation Console Card */}
        <Card className="rounded-2xl border-slate-200/90 bg-[#FCFCFD] shadow-lg overflow-hidden">
          {/* Top Terminal Bar */}
          <div className="border-b border-slate-200/80 bg-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 font-mono text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-900">{scenario.category}</span>
              <span className="text-slate-300">·</span>
              <span>{scenario.rowCount}</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono">
              <span className="text-slate-500">Execution Speed:</span>
              <span className="font-semibold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/60">
                {scenario.executionTime}
              </span>
              <span className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                100% On-Device
              </span>
            </div>
          </div>

          {/* Prompt Inquiry Box */}
          <div className="p-5 sm:p-6 bg-slate-50/70 border-b border-slate-200/80">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 h-6 w-6 rounded-md bg-slate-900 text-white font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                ›_
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-mono text-slate-400 font-semibold uppercase tracking-wider">
                  Auditor Natural Language Prompt
                </div>
                <p className="text-xs sm:text-sm font-mono text-slate-900 leading-relaxed font-medium">
                  &ldquo;{scenario.prompt}&rdquo;
                </p>
              </div>
            </div>

            {/* Execution Progress Bar */}
            {isSimulating && (
              <div className="mt-4 space-y-1.5 animate-in fade-in duration-150">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Executing statutory control rules locally on CPU...</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-slate-900 transition-all duration-200 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Findings Summary & Action Bar */}
          <div className="p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                    scenario.status === "FLAGGED"
                      ? "bg-amber-50 text-amber-800 border-amber-200"
                      : "bg-emerald-50 text-emerald-800 border-emerald-200"
                  }`}>
                    {scenario.status === "FLAGGED" ? <AlertCircle className="h-3.5 w-3.5 text-amber-600" /> : <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />}
                    <span>{scenario.statusText}</span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Verified by Mash</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {scenario.summary}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleSelectScenario(selectedScenarioIndex)}
                  className="px-3 py-1.5 rounded-lg border border-slate-200/90 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Re-run Test</span>
                </button>
              </div>
            </div>

            {/* Structured Findings Table */}
            <div className="rounded-xl border border-slate-200/90 bg-white overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="border-b border-slate-200/80 bg-slate-50/80 text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      {scenario.tableHeaders.map((head, idx) => (
                        <th key={idx} className="px-4 py-3 font-semibold">
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {scenario.tableRows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={`transition-colors ${
                          row.isFlagged
                            ? "bg-amber-50/60 hover:bg-amber-50/90 font-medium"
                            : "hover:bg-slate-50/80"
                        }`}
                      >
                        {row.cells.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-3 text-slate-800">
                            {row.isFlagged && cIdx === row.cells.length - 1 ? (
                              <span className="inline-flex items-center gap-1 text-amber-800 font-semibold">
                                <AlertCircle className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                                <span>{cell}</span>
                              </span>
                            ) : (
                              <span>{cell}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table Bottom Guarantee */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 font-sans border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Audited directly from local .xlsx file without uploading records to any server</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                Formula recalculation engine: local Python openpyxl sandbox
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
