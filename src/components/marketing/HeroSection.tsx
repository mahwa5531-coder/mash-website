import * as React from "react";
import Link from "next/link";
import { 
  Download, 
  ChevronRight, 
  ShieldCheck, 
  Brain, 
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WindowMockup } from "@/components/layout/WindowMockup";
import { SITE_CONFIG } from "@/content/site-config";

export function HeroSection() {

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-36 bg-[#FCFCFD]">
      {/* Background Engineering Dotted Grid Mask (Subtle, Crisp, Non-AI) */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#94A3B8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 40%, transparent 100%)"
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Eyebrow Status Pill */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-3.5 py-1 text-xs font-medium text-slate-700 shadow-2xs mb-6 backdrop-blur-sm transition-transform hover:scale-[1.01]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-slate-900">Mash {SITE_CONFIG.version} for Windows</span>
            <span className="text-slate-400">·</span>
            <span>Desktop Edition</span>
          </div>

          {/* Main Headline */}
          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold tracking-tight text-slate-900 leading-[1.08] mb-6 font-sans">
            The desktop AI workbench for <br className="hidden sm:inline" />
            spreadsheets & financial data.
          </h1>

          {/* Subhead */}
          <p className="max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-sans">
            Cross-reference ledgers, detect calculation discrepancies, and inspect complex Excel workbooks side-by-side. Your confidential numbers never leave your computer.
          </p>

          {/* Action CTAs Stack */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-6 w-full sm:w-auto">
            <a href={SITE_CONFIG.installer.downloadPath} download className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2 text-sm shadow-md h-12 px-6 font-semibold bg-slate-900 hover:bg-slate-800 transition-all hover:scale-[1.01]">
                <Download className="h-4 w-4" />
                <span>Download for Windows</span>
                <span className="text-slate-400 font-mono text-xs font-normal">({SITE_CONFIG.installer.sizeDisplay})</span>
              </Button>
            </a>

            <Link href="/pricing" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2 text-sm h-12 px-5 font-medium border-slate-200/90 hover:bg-slate-100 transition-all">
                <span>View Plans &amp; Pricing</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </Button>
            </Link>
          </div>

          {/* Trust Metrics Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500 mb-14">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              Windows 10 / 11 (64-bit)
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-600 font-medium">Free for individual practitioners</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-600 font-medium">100% on-device client confidentiality</span>
          </div>
        </div>

        {/* Live Context Prompt Floating Card (Assistant UI style) */}
        <div className="mx-auto max-w-4xl mb-4">
          <div className="rounded-xl border border-slate-200/90 bg-white/95 p-3.5 shadow-sm backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-start sm:items-center gap-2.5 overflow-hidden">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-900 text-white font-mono font-bold text-[10px]">
                ›_
              </div>
              <div className="truncate">
                <span className="text-slate-400 font-mono mr-1.5 font-medium">User:</span>
                <span className="text-slate-800 font-medium truncate">
                  "Audit financial ledgers for FY24-25, flag VAT discrepancies, and highlight variance rows"
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto font-mono text-[11px]">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                <Brain className="h-3 w-3 text-slate-500" />
                Thought for 6s (632 tokens)
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-sans font-medium text-[10px]">
                <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                Audit Verified
              </span>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup: Dual-Pane Top Light with Enhanced Bezel */}
        <div className="relative">
          <WindowMockup
            title="Mash — Financial Forensic Workbench"
            activeFile="Audit_Deliverables / mash_full_feature_audit.xlsx"
            badge="Live Model Execution"
            src="/screenshots/mash_real_llm_hero_dual_pane_top_light.png"
            alt="Mash Dual-Pane Workbench showing agent chat generating statutory audit table and live Excel sheet"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
