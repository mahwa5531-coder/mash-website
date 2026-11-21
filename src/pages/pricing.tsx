import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { 
  Check, 
  Download, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  Minus 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SITE_CONFIG } from "@/content/site-config";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = React.useState<"monthly" | "annual">("monthly");

  const comparisonFeatures = [
    {
      category: "Desktop Application & Core",
      items: [
        { name: "Windows 10 / 11 64-bit Desktop App", starter: true, pro: true },
        { name: "Dual-Pane Split Workspace (880px)", starter: true, pro: true },
        { name: "Single-Pane Distraction-Free Mode", starter: true, pro: true },
        { name: "100% On-Device Local File Privacy", starter: true, pro: true },
        { name: "Bring Your Own Model / Local Endpoint", starter: true, pro: true },
      ],
    },
    {
      category: "Spreadsheet & Calculation Engine",
      items: [
        { name: "Open & View .xlsx, .csv, .tsv Files", starter: true, pro: true },
        { name: "Multi-Sheet Tab Navigation", starter: true, pro: true },
        { name: "Live Formula Calculation Bar", starter: true, pro: true },
        { name: "Interactive 3D Spatial Vector Charts", starter: "Standard", pro: "Advanced Orbital" },
        { name: "Multi-Sheet Cross-Workbook Batch Audits", starter: false, pro: true },
      ],
    },
    {
      category: "Forensic Auditing & Templates",
      items: [
        { name: "Standard Account Variance Prompts", starter: true, pro: true },
        { name: "Automated Tax / VAT Mismatch Detection", starter: "Basic", pro: "Full Statutory" },
        { name: "General Ledger Line-by-Line Flagging", starter: true, pro: true },
        { name: "Advanced Forensic & Reconciliation Templates", starter: false, pro: true },
        { name: "Custom Audit Rules & Validation Schemas", starter: false, pro: true },
      ],
    },
    {
      category: "Licensing & Support",
      items: [
        { name: "Usage License", starter: "Personal / Non-commercial", pro: "Full Commercial License" },
        { name: "Automatic Binary Updates", starter: true, pro: true },
        { name: "Support Channel", starter: "Community Support", pro: "Priority Support & Onboarding" },
      ],
    },
  ];

  const faqs = [
    {
      question: "Do I need Microsoft Excel installed on my PC?",
      answer:
        "No. Mash features a built-in virtualized spreadsheet engine that natively renders, navigates, and calculates .xlsx and .csv workbooks without requiring Microsoft Office or Excel licenses.",
    },
    {
      question: "Where is my confidential financial data stored?",
      answer:
        "100% on your local computer. Your spreadsheet cells, company vouchers, client ledgers, and prompt transcripts never leave your machine. Mash adheres to a strict zero-retention, local-first privacy policy.",
    },
    {
      question: "Can I use Mash completely offline?",
      answer:
        "Yes. When connected to local air-gapped endpoints (such as Ollama or local Llama on your workstation), Mash runs entirely offline with zero outbound internet traffic.",
    },
    {
      question: "How does the commercial license work for accounting firms?",
      answer:
        "The Pro plan includes a commercial organization license permitting CPAs, advisory firms, and enterprise finance teams to use Mash across all commercial client engagements.",
    },
    {
      question: "Can I try Pro features before committing?",
      answer:
        "Yes. All Pro licenses include a 14-day risk-free trial. You can also download and use the Starter plan completely free forever with no credit card required.",
    },
  ];

  return (
    <>
      <Head>
        <title>Pricing &amp; Plans — {SITE_CONFIG.name}</title>
        <meta
          name="description"
          content="Simple, transparent pricing for Mash. Starter plan is free forever on Windows. Pro plan for commercial accounting firms and finance teams."
        />
        <link rel="canonical" href="https://mash.ai/pricing/" />
        <meta property="og:title" content="Mash Pricing — Free Starter vs Pro Commercial" />
        <meta property="og:description" content="Simple, transparent pricing for Mash. Full Windows desktop app is free forever." />
        <meta property="og:url" content="https://mash.ai/pricing/" />
      </Head>

      <main className="py-16 md:py-24 bg-[#FCFCFD]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-3 text-[11px] font-mono uppercase tracking-wider">
              PLANS &amp; PRICING
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 font-sans">
              Simple, transparent pricing. <br className="hidden sm:inline" />
              Zero hidden fees.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Start auditing spreadsheets for free with the full Windows desktop application, or upgrade to Pro for commercial licensing and advanced forensic models.
            </p>

            {/* Billing Switcher */}
            <div className="mt-8 inline-flex items-center gap-1.5 p-1 rounded-xl border border-slate-200 bg-slate-100/80 text-xs shadow-2xs">
              <button
                type="button"
                onClick={() => setBillingPeriod("monthly")}
                className={`px-4 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  billingPeriod === "monthly"
                    ? "bg-white text-slate-900 shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod("annual")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  billingPeriod === "annual"
                    ? "bg-white text-slate-900 shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>Annual Billing</span>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* 2-Card Side-by-Side Pricing Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-20">
            
            {/* Plan 1: Starter (Free) */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-slate-900 font-sans">Starter</h2>
                  <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    Free Forever
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-sans">
                  Essential AI workbench for individual accountants, freelance analysts, and students.
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">$0</span>
                  <span className="text-xs text-slate-500 font-medium">/ forever</span>
                </div>

                <div className="space-y-3.5 pt-6 border-t border-slate-100 text-xs text-slate-700 font-sans">
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
                    <span>Side-by-side dual-pane workspace (880px)</span>
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
                    <span className="font-semibold text-slate-900">100% on-device privacy guarantee</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a href={SITE_CONFIG.installer.downloadPath} download className="block">
                  <Button variant="secondary" className="w-full gap-2 text-xs font-semibold h-12 border-slate-200 hover:bg-slate-100">
                    <Download className="h-4 w-4" />
                    <span>Download Free for Windows (.exe)</span>
                  </Button>
                </a>
                <span className="block text-center text-[10px] text-slate-400 mt-2 font-mono">
                  No credit card required · Instant setup
                </span>
              </div>
            </div>

            {/* Plan 2: Pro (Business) */}
            <div className="relative rounded-2xl border-2 border-slate-900 bg-white p-8 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-shadow">
              {/* Recommended Badge */}
              <div className="absolute -top-3.5 right-6">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3.5 py-1 text-[10px] font-semibold text-white tracking-wide shadow-md uppercase">
                  <Sparkles className="h-3 w-3 text-amber-400" />
                  Recommended for Teams
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-slate-900 font-sans">Pro</h2>
                  <span className="text-xs font-mono font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                    Commercial License
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-sans">
                  For CPAs, audit firms, and finance teams needing advanced forensic capabilities and priority support.
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
                    {billingPeriod === "monthly" ? "$20" : "$16"}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {billingPeriod === "monthly" ? "/ user / month" : "/ user / month (billed annually)"}
                  </span>
                </div>

                <div className="space-y-3.5 pt-6 border-t border-slate-100 text-xs text-slate-700 font-sans">
                  <div className="flex items-start gap-2.5 font-semibold text-slate-900">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Everything in Starter, plus:</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Advanced statutory forensic &amp; reconciliation templates</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Multi-sheet cross-workbook batch audits</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Interactive 3D vector spatial chart depth</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Commercial organizational usage license</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Priority customer &amp; onboarding support</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a href={SITE_CONFIG.installer.downloadPath} download className="block">
                  <Button className="w-full gap-2 text-xs font-semibold h-12 bg-slate-900 hover:bg-slate-800 text-white shadow-md">
                    <span>Start 14-Day Free Trial</span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </Button>
                </a>
                <span className="block text-center text-[10px] text-slate-400 mt-2 font-mono">
                  Includes 14-day risk-free trial · Cancel anytime
                </span>
              </div>
            </div>

          </div>

          {/* Full Feature Comparison Table */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
                Detailed Feature Comparison
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Everything you need to know about the Starter vs. Pro plan capabilities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200/80 bg-slate-50/70">
                    <th className="py-4 px-6 font-semibold text-slate-900 w-1/2">Features</th>
                    <th className="py-4 px-4 font-semibold text-slate-900 text-center w-1/4">Starter ($0)</th>
                    <th className="py-4 px-4 font-semibold text-slate-900 text-center w-1/4">Pro ($20/mo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonFeatures.map((group, groupIdx) => (
                    <React.Fragment key={groupIdx}>
                      <tr className="bg-slate-50/40">
                        <td colSpan={3} className="py-3 px-6 font-mono text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                          {group.category}
                        </td>
                      </tr>
                      {group.items.map((item, itemIdx) => (
                        <tr key={itemIdx} className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-3.5 px-6 font-medium text-slate-800">
                            {item.name}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            {typeof item.starter === "boolean" ? (
                              item.starter ? (
                                <Check className="h-4 w-4 text-emerald-600 mx-auto" />
                              ) : (
                                <Minus className="h-4 w-4 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-slate-600 font-mono text-[11px]">{item.starter}</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            {typeof item.pro === "boolean" ? (
                              item.pro ? (
                                <Check className="h-4 w-4 text-emerald-600 mx-auto" />
                              ) : (
                                <Minus className="h-4 w-4 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="font-semibold text-slate-900 font-mono text-[11px]">{item.pro}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Business FAQ Section */}
          <div className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-sans">
                Clear answers regarding data safety, licensing, and offline usage.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-2"
                >
                  <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2 font-sans">
                    <HelpCircle className="h-4 w-4 text-slate-400 shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6 font-sans">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Call to Action Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-8 md:p-12 shadow-md text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 font-sans">
              Start auditing spreadsheets on your local PC today.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed font-sans">
              Download the official Windows installer. 100% on-device data confidentiality guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={SITE_CONFIG.installer.downloadPath} download>
                <Button size="lg" className="gap-2 text-xs font-semibold h-12 px-6 bg-slate-900 hover:bg-slate-800 text-white shadow-sm">
                  <Download className="h-4 w-4" />
                  <span>Download Mash for Windows ({SITE_CONFIG.installer.sizeDisplay})</span>
                </Button>
              </a>
              <Link href="/use-cases">
                <Button variant="secondary" size="lg" className="gap-2 text-xs font-medium h-12 px-5 border-slate-200 hover:bg-slate-100">
                  <span>Explore Use Cases</span>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
