import * as React from "react";
import { ChevronDown, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReasoningStep {
  title: string;
  detail?: string;
}

interface ReasoningAccordionProps {
  duration?: string;
  steps: ReasoningStep[];
  defaultOpen?: boolean;
}

export function ReasoningAccordion({
  duration = "6s",
  steps,
  defaultOpen = false,
}: ReasoningAccordionProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="rounded-lg border border-slate-200/80 bg-slate-50/60 text-xs overflow-hidden transition-all">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-3 py-2 text-left font-medium text-slate-700 hover:bg-slate-100/70 transition-colors"
      >
        <span className="flex items-center gap-2">
          <Brain className="h-3.5 w-3.5 text-slate-500" />
          <span>Thought for {duration}</span>
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-slate-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="border-t border-slate-200/60 bg-white/70 px-3 py-2.5 space-y-1.5 font-mono text-[11px] text-slate-600">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-slate-400 select-none">›</span>
              <div>
                <span className="text-slate-800 font-medium">{step.title}</span>
                {step.detail && (
                  <p className="text-[10px] text-slate-500 font-sans mt-0.5">
                    {step.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
