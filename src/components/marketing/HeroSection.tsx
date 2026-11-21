import * as React from "react";
import Link from "next/link";
import { Download, ChevronRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WindowMockup } from "@/components/layout/WindowMockup";
import { SITE_CONFIG } from "@/content/site-config";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-36 bg-[#FCFCFD]">
      {/* Background Engineering Dotted Grid Mask (Subtle, Crisp, Clean) */}
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
        <div className="flex flex-col items-center text-center">
          {/* Main Headline */}
          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold tracking-tight text-slate-900 leading-[1.08] mb-6 font-sans">
            The desktop AI workbench for <br className="hidden sm:inline" />
            spreadsheets &amp; financial data.
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
            <span className="text-slate-600 font-medium">100% on-device client confidentiality</span>
          </div>
        </div>

        {/* Hero Visual Mockup: Clean App Screenshot */}
        <div className="relative">
          <WindowMockup
            src="/screenshots/mash_real_llm_hero_dual_pane_top_light.png"
            alt="Mash Dual-Pane Workbench showing agent chat generating statutory audit table and live Excel sheet"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
