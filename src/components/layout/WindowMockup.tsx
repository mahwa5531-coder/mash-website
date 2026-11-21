import * as React from "react";
import { Table, ShieldCheck, FileSpreadsheet, Sparkles, Terminal } from "lucide-react";
import { cn, assetPath } from "@/lib/utils";

interface WindowMockupProps {
  title?: string;
  badge?: string;
  activeFile?: string;
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function WindowMockup({
  title = "Mash — Financial Forensic Workbench",
  badge,
  activeFile = "Audit_Deliverables / mash_full_feature_audit.xlsx",
  src,
  alt,
  className,
  priority = false,
}: WindowMockupProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative mx-auto w-full max-w-5xl rounded-xl border border-slate-200/90 bg-white shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)] hover:shadow-[0_35px_80px_-15px_rgba(15,23,42,0.18)] transition-all duration-500 overflow-hidden",
        className
      )}
    >
      {/* Top Window Titlebar (macOS / Windows Hybrid with Active File Tab) */}
      <div className="flex h-11 items-center justify-between border-b border-slate-200/80 bg-slate-50/95 px-4 select-none backdrop-blur-sm">
        {/* Left: Window Controls (Traffic Lights with Hover Colors) */}
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "h-3 w-3 rounded-full transition-colors duration-200",
              isHovered ? "bg-[#FF5F56] border border-[#E0443E]" : "bg-slate-300/90 border border-slate-400/30"
            )}
          />
          <div
            className={cn(
              "h-3 w-3 rounded-full transition-colors duration-200",
              isHovered ? "bg-[#FFBD2E] border border-[#DEA123]" : "bg-slate-300/90 border border-slate-400/30"
            )}
          />
          <div
            className={cn(
              "h-3 w-3 rounded-full transition-colors duration-200",
              isHovered ? "bg-[#27C93F] border border-[#1AAB29]" : "bg-slate-300/90 border border-slate-400/30"
            )}
          />
        </div>

        {/* Center: Active File Tab & Title */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-2xs">
            <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />
            <span className="font-mono text-[11px] truncate max-w-[280px] sm:max-w-md">
              {activeFile}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
          </div>

          {badge && (
            <span className="hidden sm:inline-flex rounded bg-slate-200/70 px-1.5 py-0.5 text-[10px] text-slate-700 font-mono font-medium">
              {badge}
            </span>
          )}
        </div>

        {/* Right: Security & Workstation Badge */}
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span className="hidden md:inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 font-sans text-[10px] font-medium">
            <ShieldCheck className="h-3 w-3 text-emerald-600" />
            Local Sandbox
          </span>
          <span className="text-slate-400">v0.1.0</span>
        </div>
      </div>

      {/* Screenshot Frame with Inner Hairline Highlight */}
      <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(src)}
          alt={alt}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-top select-none transition-transform duration-700 group-hover:scale-[1.004]"
        />

        {/* Subtle Bottom Vignette / Hairline */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-slate-900/5 to-transparent" />
      </div>
    </div>
  );
}
