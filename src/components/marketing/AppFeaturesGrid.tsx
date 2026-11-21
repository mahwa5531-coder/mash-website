import * as React from "react";
import { 
  Columns2, 
  FileSpreadsheet, 
  Terminal, 
  Brain, 
  ShieldCheck,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AppFeaturesGrid() {
  return (
    <section className="py-20 border-t border-slate-200/80 bg-[#FCFCFD]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="secondary" className="mb-3 text-[11px] font-mono">
            CORE APP ARCHITECTURE
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3 font-sans">
            How the workbench actually works.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-sans">
            Mash brings together autonomous LLM reasoning with a native Windows desktop inspection environment.
          </p>
        </div>

        {/* 5-Card Asymmetrical Bento Matrix (Only Coded App Features) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: Resizable Dual-Pane Workspace (2 Columns Wide) */}
          <Card className="md:col-span-2 overflow-hidden hover:shadow-md transition-all duration-300 border-slate-200/90 flex flex-col justify-between">
            <div className="p-6 pb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-md bg-slate-100 text-slate-800">
                  <Columns2 className="h-4 w-4" />
                </div>
                <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  Layout Engine
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-sans">
                Dual-Pane Split with Collapsible Sidebar
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-xl font-sans">
                Work in an uncluttered single-pane chat or slide open the resizable 880px right sidebar to inspect spreadsheets, audit logs, and document deliverables alongside the agent.
              </p>
            </div>

            {/* Bleeding Visual Preview */}
            <div className="mt-4 border-t border-slate-200/80 bg-slate-50/60 p-4 pt-3">
              <div className="rounded-lg border border-slate-200/90 bg-white p-3 shadow-2xs font-mono text-xs flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-[11px]">RightSidebar.tsx</span>
                  <span className="text-slate-400 text-[10px]">· Active Width: 880px</span>
                </div>
                <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                  Resizable Split View
                </span>
              </div>
            </div>
          </Card>

          {/* Card 2: Transparent Reasoning Drawer (1 Column) */}
          <Card className="hover:shadow-md transition-all duration-300 border-slate-200/90 flex flex-col justify-between">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-md bg-amber-50 text-[#C8522C]">
                  <Brain className="h-4 w-4" />
                </div>
                <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  Deduction Trace
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-sans">
                Thinking Token Inspector
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Inspect every step the agent takes before generating deliverables. Shows exact token count and execution duration.
              </p>
            </div>

            <div className="border-t border-slate-200/80 bg-slate-50/60 p-4">
              <div className="rounded-md border border-slate-200/80 bg-white p-2.5 font-mono text-[11px] text-slate-700 space-y-1">
                <div className="flex items-center justify-between text-slate-800 font-medium">
                  <span>Thought for 6s</span>
                  <span className="text-slate-400 text-[10px]">632 tokens</span>
                </div>
                <div className="text-[10px] text-slate-500">
                  › Reading ledger schema...<br />
                  › Calculating VAT variance...
                </div>
              </div>
            </div>
          </Card>

          {/* Card 3: Interactive Spreadsheet Canvas (1 Column) */}
          <Card className="hover:shadow-md transition-all duration-300 border-slate-200/90 flex flex-col justify-between">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-md bg-emerald-50 text-emerald-700">
                  <FileSpreadsheet className="h-4 w-4" />
                </div>
                <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  Spreadsheet Engine
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-sans">
                Multi-Sheet Excel Viewer
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Full support for multi-tab workbooks (.xlsx), formula evaluations, and spatial 3D bar/pie visual projections.
              </p>
            </div>

            <div className="border-t border-slate-200/80 bg-slate-50/60 p-4">
              <div className="rounded-md border border-slate-200/80 bg-white p-2.5 font-mono text-[11px] space-y-1.5">
                <div className="flex items-center gap-1.5 text-slate-700">
                  <span className="text-emerald-600 font-bold text-[10px]">fx</span>
                  <span className="text-slate-500 text-[10px]">=SUM(C4:C28)</span>
                </div>
                <div className="flex gap-1 text-[9px] text-slate-500 pt-1">
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded font-medium text-slate-700">Executive</span>
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded">Trends</span>
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded">Ledger</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 4: Streaming Terminal & Real Tools (2 Columns Wide) */}
          <Card className="md:col-span-2 overflow-hidden hover:shadow-md transition-all duration-300 border-slate-200/90 flex flex-col justify-between">
            <div className="p-6 pb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-md bg-slate-900 text-white">
                  <Terminal className="h-4 w-4" />
                </div>
                <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  Tool Execution
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-sans">
                Real Local Shell & Ripgrep Search
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-xl font-sans">
                The agent invokes genuine local tools within your workspace directory. Streams real-time terminal output with full stdout and stderr inspection.
              </p>
            </div>

            <div className="mt-4 border-t border-slate-200/80 bg-slate-900 p-4 text-slate-100 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 text-[10px] mb-2 pb-1 border-b border-slate-800">
                <span>TerminalViewer.tsx</span>
                <span className="text-emerald-400">● live stream</span>
              </div>
              <div className="space-y-1 text-[11px]">
                <div className="text-slate-300">$ search_file_content --query "DISCREPANCY" --path "./ledgers"</div>
                <div className="text-emerald-400">› 4 matches found in general_ledger_audit.xlsx:line 182</div>
              </div>
            </div>
          </Card>

        </div>

        {/* Local Security & Sandbox Bar */}
        <div className="mt-6 rounded-xl border border-slate-200/80 bg-white p-5 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200/60 text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">100% Local Workstation Privacy</div>
              <div className="text-slate-500 text-[11px]">All spreadsheets, code, and deliverables remain stored on your machine.</div>
            </div>
          </div>

          <Link href="/docs/agent-tools-and-safety" className="inline-flex items-center gap-1 font-medium text-slate-700 hover:text-slate-900 text-xs">
            <span>Read safety docs</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
