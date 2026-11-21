import * as React from "react";
import { Check, Download, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/content/site-config";

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = React.useState<"monthly" | "annual">("monthly");

  return (
    <section id="pricing" className="py-24 border-t border-slate-200/80 bg-[#FCFCFD]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3 text-[11px] font-mono">
            SIMPLE PRICING
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3 font-sans">
            Two simple plans. Zero hidden fees.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-sans">
            Start auditing spreadsheets for free on your local desktop, or upgrade to Pro for commercial licensing and advanced forensic models.
          </p>

          {/* Billing Switcher */}
          <div className="mt-6 inline-flex items-center gap-1.5 p-1 rounded-lg border border-slate-200 bg-slate-100/80 text-xs">
            <button
              type="button"
              onClick={() => setBillingPeriod("monthly")}
              className={`px-3 py-1 rounded-md font-medium transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod("annual")}
              className={`flex items-center gap-1 px-3 py-1 rounded-md font-medium transition-colors ${
                billingPeriod === "annual"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 2-Card Side-by-Side Pricing Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Plan 1: Starter (Free) */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 font-sans">Starter</h3>
                <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  Free Forever
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-6 font-sans">
                Essential AI workbench for individual accountants, freelance analysts, and students.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-slate-900 tracking-tight font-sans">$0</span>
                <span className="text-xs text-slate-500 font-medium">/ forever</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Full Windows desktop application (64-bit)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Unlimited local spreadsheet viewing (.xlsx, .csv)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Side-by-side dual-pane workspace</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Bring your own model or local API key</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Standard variance and audit prompts</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>100% on-device privacy guarantee</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a href={SITE_CONFIG.installer.downloadPath} download className="block">
                <Button variant="secondary" className="w-full gap-2 text-xs font-semibold h-11 border-slate-200 hover:bg-slate-100">
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Free (.exe)</span>
                </Button>
              </a>
              <span className="block text-center text-[10px] text-slate-400 mt-2 font-mono">
                No credit card required · Instant install
              </span>
            </div>
          </div>

          {/* Plan 2: Pro (Business) */}
          <div className="relative rounded-2xl border-2 border-slate-900 bg-white p-8 shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow">
            {/* Top Recommended Pill */}
            <div className="absolute -top-3 right-6">
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-0.5 text-[10px] font-semibold text-white tracking-wide shadow-xs uppercase">
                <Sparkles className="h-3 w-3 text-amber-400" />
                Recommended for Teams
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 font-sans">Pro</h3>
                <span className="text-xs font-mono font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                  Commercial License
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-6 font-sans">
                For CPAs, audit firms, and finance teams needing advanced forensic capabilities and priority support.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                  {billingPeriod === "monthly" ? "$20" : "$16"}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {billingPeriod === "monthly" ? "/ user / month" : "/ user / month (billed annually)"}
                </span>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2.5 font-medium text-slate-900">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Everything in Starter, plus:</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Advanced statutory forensic & reconciliation templates</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Multi-sheet cross-workbook batch audits</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Interactive 3D vector chart projections</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Commercial organizational use license</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Priority customer & onboarding support</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a href="#download" className="block">
                <Button className="w-full gap-2 text-xs font-semibold h-11 bg-slate-900 hover:bg-slate-800 text-white shadow-sm">
                  <span>Get Pro License</span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </Button>
              </a>
              <span className="block text-center text-[10px] text-slate-400 mt-2 font-mono">
                Includes 14-day risk-free trial
              </span>
            </div>
          </div>

        </div>

        {/* Security & Offline Privacy Assurance Bar */}
        <div className="mt-12 rounded-xl border border-slate-200/80 bg-white p-5 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <span className="font-semibold text-slate-900">Both plans include 100% on-device data confidentiality.</span>
              <p className="text-slate-500 text-[11px]">Your spreadsheet cells and company financial ledgers never touch an external cloud training pool.</p>
            </div>
          </div>
          <span className="text-[11px] font-mono text-slate-400 whitespace-nowrap">
            Windows 10 / 11 64-bit
          </span>
        </div>
      </div>
    </section>
  );
}
