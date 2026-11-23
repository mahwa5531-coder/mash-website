import * as React from "react";
import { FileSpreadsheet, MessageSquare, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <FileSpreadsheet className="h-5 w-5 text-slate-800" />,
      title: "Open Any Workbook",
      description:
        "Select your .xlsx or .csv spreadsheets directly from your local computer. Supports complex multi-tab audit ledgers with zero file conversions or cloud uploads.",
    },
    {
      number: "02",
      icon: <MessageSquare className="h-5 w-5 text-slate-800" />,
      title: "Ask in Plain English",
      description:
        "Prompt the assistant to check tax calculations, detect ledger variances, reconcile accounts, or cross-reference quarterly expenses in seconds.",
    },
    {
      number: "03",
      icon: <CheckCircle2 className="h-5 w-5 text-slate-800" />,
      title: "Verify Side-by-Side",
      description:
        "Inspect highlighted discrepancy rows and live formulas in the built-in spreadsheet canvas. Export verified reports with 100% on-device confidentiality.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 border-t border-slate-200/80 bg-[#FAF9F6]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="secondary" className="mb-3 text-[11px] font-mono uppercase tracking-wider font-semibold">
            SIMPLE WORKFLOW
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-2 mb-3 font-sans">
            How Mash works in three simple steps.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-sans">
            No complex setup. No developer tools needed. Run deep audits directly on your spreadsheets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                    {step.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-slate-300">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-sans">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
