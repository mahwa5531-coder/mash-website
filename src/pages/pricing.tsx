import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { 
  Check, 
  Download, 
  Sparkles, 
  ArrowRight, 
  HelpCircle, 
  Minus 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/content/site-config";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = React.useState<"monthly" | "annual">("monthly");

  const comparisonFeatures = [
    {
      category: "Audit Workspace & Interface",
      items: [
        { name: "Windows 10 / 11 64-bit Desktop Application", free: true, pro: true },
        { name: "Side-by-Side Dual-Pane Audit Canvas", free: true, pro: true },
        { name: "Single-Pane Executive Review Mode", free: true, pro: true },
        { name: "Built-in Financial Intelligence (Zero API setup)", free: true, pro: true },
        { name: "100% On-Device Client Data Confidentiality", free: true, pro: true },
      ],
    },
    {
      category: "Transaction Testing & Reconciliation",
      items: [
        { name: "Open & Audit .xlsx, .csv, and .tsv Ledgers", free: true, pro: true },
        { name: "Multi-Tab Workbook Reconciliation", free: true, pro: true },
        { name: "Automated Debit / Credit Balancing & Variance Flagging", free: true, pro: true },
        { name: "Full-Scope Anomaly & Duplicate Detection", free: "Standard", pro: "Full Anomaly Suite" },
        { name: "Multi-Sheet Batch Reconciliation (Bank vs Books)", free: false, pro: true },
      ],
    },
    {
      category: "Statutory Schedules & Workpapers",
      items: [
        { name: "General Ledger Line-by-Line Voucher Flagging", free: true, pro: true },
        { name: "Statutory Tax & VAT/GST Mismatch Detection", free: "Basic", pro: "Full Statutory Schedules" },
        { name: "Benford's Law Digital Analysis", free: false, pro: true },
        { name: "Export Working Papers with Formula Integrity", free: true, pro: true },
        { name: "Custom Audit Rules & Materiality Thresholds", free: false, pro: true },
      ],
    },
    {
      category: "Commercial Practice & Support",
      items: [
        { name: "Engagement License", free: "Individual / Non-Commercial", pro: "Commercial Firm License" },
        { name: "Financial Reasoning Model Access", free: "Standard", pro: "Priority Frontier Models" },
        { name: "Support Channel", free: "Standard Support", pro: "Priority Firm Support" },
        { name: "Pricing (All Taxes Included)", free: "₹0 Forever", pro: "₹1,999 / mo (incl. taxes)" },
      ],
    },
  ];

  const faqs = [
    {
      question: "What is included in the ₹1,999 Pro plan?",
      answer:
        "The Pro plan is ₹1,999 per month, inclusive of all taxes. It provides a full commercial practice license for fee-earning client engagements, priority access to frontier financial reasoning models, multi-sheet cross-workbook batch reconciliation, full statutory tax schedules, and priority firm support.",
    },
    {
      question: "Are there any credit limits, token caps, or usage meters?",
      answer:
        "No. Mash does not charge per-token, per-credit, or per-prompt fees. You never need to purchase credit packs or monitor token allowances. Workbooks and audit queries execute smoothly as part of your plan.",
    },
    {
      question: "Do I need to configure API keys or connect third-party AI models?",
      answer:
        "No. Mash includes built-in financial and audit intelligence ready out of the box. Zero API configuration, zero BYOK, and no cloud accounts required. Just launch the app and start auditing.",
    },
    {
      question: "Is client financial data protected under professional confidentiality standards?",
      answer:
        "Yes, 100%. All ledger scanning, formula calculations, and audit voucher checks execute strictly on your local Windows PC. Your client spreadsheets, company bank transactions, and permanent working papers never touch external cloud training pools.",
    },
    {
      question: "Can Mash be used for official statutory audits and peer reviews?",
      answer:
        "Yes. Mash generates documented step-by-step audit trails and working papers with live calculation formulas intact (=SUM, =AVERAGE, variance models), making workpapers fully verifiable for audit review partners and regulatory authorities.",
    },
    {
      question: "Do I need Microsoft Excel installed on my machine?",
      answer:
        "No. Mash features a native built-in spreadsheet viewer that opens, navigates, and recalculates multi-tab .xlsx and .csv workbooks directly without requiring Microsoft Office or Excel licenses.",
    },
  ];

  return (
    <>
      <Head>
        <title>Pricing &amp; Plans — {SITE_CONFIG.name} for CAs, CPAs &amp; Auditors</title>
        <meta
          name="description"
          content="Simple, transparent pricing for Mash. Free plan for individual practitioners. Pro plan at ₹1,999/month (incl. taxes) for practicing CA firms and CPAs."
        />
        <link rel="canonical" href="https://mash.ai/pricing/" />
        <meta property="og:title" content="Mash Pricing — Free vs Pro Commercial License for Audit Firms" />
        <meta property="og:description" content="Simple, transparent pricing for Mash. Free plan and Pro at ₹1,999/month inclusive of taxes." />
        <meta property="og:url" content="https://mash.ai/pricing/" />
      </Head>

      <main className="py-16 md:py-24 bg-[#FCFCFD]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-3 text-[11px] font-mono uppercase tracking-wider">
              PRACTICE LICENSING
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 font-sans">
              Simple, transparent pricing. <br className="hidden sm:inline" />
              Built for accounting practices.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Choose the plan that fits your practice. All core audit capabilities are available on Windows with 100% on-device client confidentiality.
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
            {/* Plan 1: Free */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-slate-900 font-sans">Free</h2>
                  <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    Free Forever
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-sans">
                  Essential AI audit workbench for individual accountants, finance students, and sole practitioners.
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">₹0</span>
                  <span className="text-xs text-slate-500 font-medium">/ forever</span>
                </div>

                <div className="space-y-3.5 pt-6 border-t border-slate-100 text-xs text-slate-700 font-sans">
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Full Windows desktop application (64-bit)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Unlimited local spreadsheet &amp; ledger auditing (.xlsx, .csv)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Side-by-side dual-pane audit canvas</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Built-in financial intelligence (Zero API setup required)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Automated debit/credit balancing &amp; variance detection</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-900">100% on-device client confidentiality guarantee</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a href={SITE_CONFIG.installer.downloadPath} download className="block">
                  <Button variant="secondary" className="w-full gap-2 text-xs font-semibold h-12 border-slate-200 hover:bg-slate-100">
                    <Download className="h-4 w-4" />
                    <span>Download Free for Windows</span>
                  </Button>
                </a>
                <span className="block text-center text-[10px] text-slate-400 mt-2 font-mono">
                  No credit card required · Instant setup
                </span>
              </div>
            </div>

            {/* Plan 2: Pro (Commercial) */}
            <div className="relative rounded-2xl border-2 border-slate-900 bg-white p-8 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-shadow">
              {/* Recommended Badge */}
              <div className="absolute -top-3.5 right-6">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3.5 py-1 text-[10px] font-semibold text-white tracking-wide shadow-md uppercase">
                  <Sparkles className="h-3 w-3 text-amber-400" />
                  Recommended for Audit Firms
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-slate-900 font-sans">Pro</h2>
                  <span className="text-xs font-mono font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                    Commercial Practice License
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-sans">
                  For CPAs, Chartered Accountants, and audit partnerships handling client engagements and statutory reviews.
                </p>

                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
                    {billingPeriod === "monthly" ? "₹1,999" : "₹1,599"}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {billingPeriod === "monthly" ? "/ month" : "/ month (billed annually)"}
                  </span>
                </div>
                <div className="text-[11px] font-medium text-emerald-700 mb-6">
                  Inclusive of all taxes
                </div>

                <div className="space-y-3.5 pt-6 border-t border-slate-100 text-xs text-slate-700 font-sans">
                  <div className="flex items-start gap-2.5 font-semibold text-slate-900">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Everything in Free, plus:</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Full commercial firm license for client audit engagements</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Priority access to frontier financial reasoning models</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Multi-sheet cross-workbook batch reconciliation (Bank vs Books)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Automated statutory tax &amp; VAT/GST audit return schedules</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>100% transaction coverage &amp; Benford&apos;s Law anomaly scanning</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Priority firm onboarding &amp; dedicated audit support</span>
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
                Audit Feature Comparison
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-sans">
                Detailed comparison of capabilities between Free and Pro commercial license.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs">
              <table className="w-full text-left text-xs border-collapse font-sans">
                <thead>
                  <tr className="border-b border-slate-200/80 bg-slate-50/70">
                    <th className="py-4 px-6 font-semibold text-slate-900 w-1/2">Audit Capabilities</th>
                    <th className="py-4 px-4 font-semibold text-slate-900 text-center w-1/4">Free (₹0)</th>
                    <th className="py-4 px-4 font-semibold text-slate-900 text-center w-1/4">Pro (₹1,999/mo)</th>
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
                            {typeof item.free === "boolean" ? (
                              item.free ? (
                                <Check className="h-4 w-4 text-emerald-600 mx-auto" />
                              ) : (
                                <Minus className="h-4 w-4 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-slate-600 font-mono text-[11px]">{item.free}</span>
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
                Clear answers regarding client confidentiality, statutory schedules, and practice licensing.
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
              Start auditing client spreadsheets on your Windows PC today.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed font-sans">
              Download the official Windows installer. 100% on-device client data confidentiality guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={SITE_CONFIG.installer.downloadPath} download>
                <Button size="lg" className="gap-2 text-xs font-semibold h-12 px-6 bg-slate-900 hover:bg-slate-800 text-white shadow-sm">
                  <Download className="h-4 w-4" />
                  <span>Download Mash for Windows</span>
                </Button>
              </a>
              <Link href="/use-cases">
                <Button variant="secondary" size="lg" className="gap-2 text-xs font-medium h-12 px-5 border-slate-200 hover:bg-slate-100">
                  <span>Explore Practice Use Cases</span>
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
