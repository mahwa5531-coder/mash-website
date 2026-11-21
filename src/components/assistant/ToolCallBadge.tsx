import * as React from "react";
import { Terminal, Check, Clock, Search, FileEdit } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolCallProps {
  toolName: "run_shell_command" | "search_file_content" | "write_file" | string;
  command: string;
  status?: "completed" | "running" | "failed";
  output?: string;
}

export function ToolCallBadge({
  toolName,
  command,
  status = "completed",
  output,
}: ToolCallProps) {
  const [showOutput, setShowOutput] = React.useState(false);

  const getIcon = () => {
    switch (toolName) {
      case "run_shell_command":
        return <Terminal className="h-3.5 w-3.5 text-slate-700" />;
      case "search_file_content":
        return <Search className="h-3.5 w-3.5 text-slate-700" />;
      case "write_file":
        return <FileEdit className="h-3.5 w-3.5 text-slate-700" />;
      default:
        return <Terminal className="h-3.5 w-3.5 text-slate-700" />;
    }
  };

  return (
    <div className="rounded-md border border-slate-200/80 bg-white shadow-2xs font-mono text-xs overflow-hidden">
      <div
        className={cn(
          "flex items-center justify-between px-3 py-1.5 bg-slate-50/70 border-b border-slate-100 cursor-pointer select-none",
          !output && "border-b-0 cursor-default"
        )}
        onClick={() => output && setShowOutput(!showOutput)}
      >
        <div className="flex items-center gap-2 overflow-hidden">
          {getIcon()}
          <span className="font-semibold text-slate-800 text-[11px]">{toolName}</span>
          <span className="text-slate-400 text-[10px] truncate max-w-xs">{command}</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {status === "completed" && (
            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60 font-sans">
              <Check className="h-2.5 w-2.5" />
              Done
            </span>
          )}
          {status === "running" && (
            <span className="inline-flex items-center gap-1 text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200/60 font-sans">
              <Clock className="h-2.5 w-2.5 animate-spin" />
              Running
            </span>
          )}
        </div>
      </div>

      {showOutput && output && (
        <pre className="p-2.5 text-[10px] text-slate-700 bg-slate-900 text-slate-100 overflow-x-auto max-h-40">
          {output}
        </pre>
      )}
    </div>
  );
}
