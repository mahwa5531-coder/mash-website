import * as React from "react";
import Link from "next/link";
import { Download, ChevronRight, CheckCircle2, FileSpreadsheet, Layers, Brain, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WindowMockup } from "@/components/layout/WindowMockup";
import { SITE_CONFIG } from "@/content/site-config";

export function HeroSection() {
  const [activeTab, setActiveTab] = React.useState(0);

  const heroModes = [
    {
      id: "statutory",
      label: "Statutory Audit",
      icon: <Layers className="h-3.5 w-3.5" />,
      file: "Audit_Deliverables / mash_full_feature_audit.xlsx",
      src: "/screenshots/mash_real_llm_hero_dual_pane_top_light.png",
      alt: "Mash Dual-Pane Split: AI Chat beside Excel sheet verifying statutory audit table",
    },
    {
      id: "reconciliation",
      label: "Ledger Reconciliation",
      icon: <FileSpreadsheet className="h-3.5 w-3.5" />,
      file: "Workbooks / Executive_Dashboard_FY25.xlsx",
      src: "/screenshots/excel_pw_light_maximized_sheet1.png",
      alt: "Maximized Excel workbook showing trial balance and quarterly variance reconciliation",
    },
    {
      id: "trace",
      label: "Auditable Deduction Trail",
      icon: <Brain className="h-3.5 w-3.5" />,
      file: "Audit_Reports / reconciliation_trace.log",
      src: "/screenshots/mash_single_pane_chat_thought_expanded_light.png",
      alt: "Expanded thought steps showing verifiable calculation checkpoints and deduction trail",
    },
    {
      id: "deliverable",
      label: "Verified Workpaper",
      icon: <FileCheck className="h-3.5 w-3.5" />,
      file: "Audit_Deliverables / statutory_audit_fy26.xlsx",
      src: "/screenshots/mash_single_pane_chat_light.png",
      alt: "Focused chat view with direct download deliverable card for verified Excel workpaper",
    },
  ];

  const currentMode = heroModes[activeTab];

  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 bg-[#FAF9F6]">
      {/* Brand Ambient Atmosphere Aura: Echoes the Mash logo's Indigo and Saffron spectrum (Sarvam AI / Indus inspired) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 -top-24 sm:-top-32 h-[550px] sm:h-[620px] overflow-hidden -z-10 blur-3xl opacity-35 select-none animate-ambient-breathe"
      >
        <div className="absolute top-1/6 sm:top-1/4 left-1/2 -translate-x-[75%] w-[480px] sm:w-[560px] h-[340px] rounded-full bg-gradient-to-tr from-[#313C88]/30 via-[#3B49A2]/20 to-transparent" />
        <div className="absolute top-1/4 sm:top-1/3 left-1/2 -translate-x-[20%] w-[480px] sm:w-[560px] h-[340px] rounded-full bg-gradient-to-tl from-[#F59E0B]/25 via-[#C8522C]/15 to-transparent" />
      </div>

      {/* Background Engineering Dotted Grid Mask (Subtle, Crisp, Clean) */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(#94A3B8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 40%, transparent 100%)"
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Main Headline */}
          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold tracking-tight text-slate-900 leading-[1.08] mb-6 font-sans">
            The desktop AI workbench for <br className="hidden sm:inline" />
            spreadsheets &amp; financial data.
          </h1>

          {/* Subhead */}
          <p className="max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-sans">
            Cross-reference ledgers, detect calculation discrepancies, and inspect complex Excel workbooks side-by-side. Your raw workbooks stay on your computer without cloud file storage.
          </p>

          {/* Action CTAs Stack */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-10 w-full sm:w-auto">
            <a href={SITE_CONFIG.installer.downloadPath} download className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2 text-sm shadow-md h-12 px-6 font-semibold bg-slate-900 hover:bg-slate-800 transition-all hover:scale-[1.01]">
                <Download className="h-4 w-4" />
                <span>Download for Windows</span>
              </Button>
            </a>

            <Link href="/pricing" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2 text-sm h-12 px-5 font-medium border-slate-200/90 hover:bg-slate-100 transition-all">
                <span>View Plans &amp; Pricing</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Interactive Mode Selector Tabs */}
        <div className="mb-5 flex items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 bg-white p-1.5 sm:p-2 rounded-2xl border border-slate-200/90 shadow-2xs">
            {heroModes.map((mode, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-medium transition-all duration-150 flex items-center gap-1.5 cursor-pointer select-none ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-xs font-semibold"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/70"
                  }`}
                >
                  {mode.icon}
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Visual Mockup: Clean App Screenshot with smooth transition */}
        <div className="relative group transition-transform duration-300">
          <WindowMockup
            src={currentMode.src}
            alt={currentMode.alt}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
