import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { 
  Check, 
  Download, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  Zap,
  Building2,
  FileSpreadsheet
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/accordion";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from "@/components/ui/table";
import { SITE_CONFIG } from "@/content/site-config";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = React.useState<"monthly" | "annual">("monthly");

  const comparisonCategories = [
    {
      name: "Practice Workload & Capacity",
      rows: [
        { feature: "Daily Audit & Ledger Capacity", free: "Standard daily volume", pro: "High-volume practice workload" },
        { feature: "Financial Reasoning Intelligence", free: "Standard financial model", pro: "Frontier forensic reasoning models" },
        { feature: "Processing Queue & Speed", free: "Standard queue", pro: "Priority queue during peak deadlines" },
        { feature: "Multi-Workbook Batch Processing", free: "Standard file batches", pro: "Heavy cross-workbook batches" },
      ],
    },
    {
      name: "Audit Tools & Forensic Analysis (Fully Included)",
      rows: [
        { feature: "Open & Audit .xlsx, .csv, and .tsv Ledgers", free: true, pro: true },
        { feature: "Side-by-Side Dual-Pane Audit Canvas", free: true, pro: true },
        { feature: "Automated Debit / Credit Balancing & Variance Flagging", free: true, pro: true },
        { feature: "Full-Scope Anomaly & Duplicate Voucher Scanning", free: true, pro: true },
        { feature: "Statutory Tax & VAT/GST Mismatch Schedules", free: true, pro: true },
        { feature: "Benford's Law Digital Anomaly Analysis", free: true, pro: true },
        { feature: "Multi-Sheet Reconciliation (Bank vs Books)", free: true, pro: true },
        { feature: "Export Working Papers with Live Formula Integrity", free: true, pro: true },
      ],
    },
    {
      name: "Licensing, Privacy & Support",
      rows: [
        { feature: "Practice License", free: "Individual / Sole Practice", pro: "Commercial Firm Practice License" },
        { feature: "Client Data Confidentiality", free: "100% On-Device (Zero Cloud)", pro: "100% On-Device (Zero Cloud)" },
        { feature: "Built-in Financial Intelligence (Zero API Setup)", free: true, pro: true },
        { feature: "Support Channel", free: "Standard Support", pro: "Priority Dedicated Firm Support" },
        { feature: "Price (All Taxes Included)", free: "₹0 Forever", pro: "₹1,999 / mo (incl. taxes)" },
      ],
    },
  ];

  const faqs = [
    {
      question: "How do the Free and Pro plans differ?",
      answer:
        "Both plans include all core audit tools, spreadsheet viewers, and formula calculations. The difference is in practice workload volume and model intelligence: Pro provides heavy daily practice capacity, priority access to frontier financial reasoning models for deep multi-step forensics, and an instant priority queue during peak filing deadlines.",
    },
    {
      question: "Are any audit or spreadsheet features locked in the Free plan?",
      answer:
        "No. All audit capabilities—including multi-sheet ledger reconciliation, debit/credit balancing, voucher control tests, tax mismatch schedules, Benford's Law anomaly detection, and formula-intact workpaper export—work completely in both plans.",
    },
    {
      question: "Is there a free trial period or credit card required?",
      answer:
        "No. There are no trial countdowns or credit card requirements. The Free plan is free forever. When your practice needs higher daily volume and frontier model intelligence, you can subscribe to Pro directly.",
    },
    {
      question: "Are there token meters, credit packs, or usage counters?",
      answer:
        "No. Mash does not charge per-token, per-credit, or per-prompt fees. You never need to purchase credit packs or monitor token allowances. Workbooks and audit queries execute smoothly as part of your plan.",
    },
    {
      question: "Do I need to configure API keys or connect third-party AI models?",
      answer:
        "No. Mash includes built-in financial and audit intelligence ready out of the box. Zero API configuration, zero BYOK, and no cloud accounts required. Just launch the app and start auditing.",
    },
    {
      question: "How is client financial data protected under professional confidentiality standards?",
      answer:
        "100% on-device execution. All ledger scanning, formula calculations, and audit voucher checks execute strictly on your local Windows PC. Your client spreadsheets, company bank transactions, and permanent working papers never touch external cloud training pools.",
    },
  ];

  return (
    <>
      <Head>
        <title>{`Pricing & Plans — ${SITE_CONFIG.name} for CAs, CPAs & Auditors`}</title>
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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-3 text-[11px] font-mono uppercase tracking-wider font-semibold">
              PRICING &amp; PLANS
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 font-sans">
              Simple, transparent plans <br className="hidden sm:inline" />
              for your practice.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              All core spreadsheet auditing tools are included on Windows with 100% local confidentiality. Choose the plan matching your practice workload.
            </p>

            {/* Billing Switcher (shadcn Tabs primitive) */}
            <div className="mt-8 flex justify-center">
              <Tabs
                value={billingPeriod}
                onValueChange={(val) => setBillingPeriod(val as "monthly" | "annual")}
              >
                <TabsList className="bg-slate-100 p-1 rounded-xl border border-slate-200/90 shadow-2xs">
                  <TabsTrigger value="monthly" className="px-5 py-1.5 text-xs">
                    Monthly Billing
                  </TabsTrigger>
                  <TabsTrigger value="annual" className="px-5 py-1.5 text-xs flex items-center gap-1.5">
                    <span>Annual Billing</span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Save 20%
                    </span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* 2-Card Side-by-Side Pricing Matrix (shadcn Card primitives) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-20">
            {/* Plan 1: Free */}
            <Card className="rounded-2xl border-slate-200/90 bg-white p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl font-bold text-slate-900 font-sans flex items-center gap-2">
                      <FileSpreadsheet className="h-5 w-5 text-slate-600" />
                      <span>Free</span>
                    </CardTitle>
                    <Badge variant="outline" className="font-mono text-xs text-slate-600 bg-slate-50">
                      Free Forever
                    </Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-600 leading-relaxed font-sans">
                    Essential desktop audit workbench for individual practitioners, accountants, and everyday reconciliation.
                  </CardDescription>
                </CardHeader>

                <div className="flex items-baseline gap-1.5 my-6">
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
                    <span>Standard daily audit workload capacity</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Standard financial reasoning intelligence</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>All audit tools fully enabled (debit/credit balancing, voucher checks)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Side-by-side dual-pane spreadsheet canvas</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-900">100% on-device client confidentiality guarantee</span>
                  </div>
                </div>
              </div>

              <CardFooter className="p-0 mt-8 pt-6 border-t border-slate-100 flex flex-col gap-2">
                <a href={SITE_CONFIG.installer.downloadPath} download className="w-full">
                  <Button variant="secondary" className="w-full gap-2 text-xs font-semibold h-12 border-slate-200 hover:bg-slate-100">
                    <Download className="h-4 w-4" />
                    <span>Download Free for Windows</span>
                  </Button>
                </a>
                <span className="text-center text-[10px] text-slate-400 font-mono">
                  No credit card required · Instant setup
                </span>
              </CardFooter>
            </Card>

            {/* Plan 2: Pro */}
            <Card className="relative rounded-2xl border-2 border-slate-900 bg-white p-8 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-shadow">
              {/* Highlight Badge */}
              <div className="absolute -top-3.5 right-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-1 text-[10px] font-semibold text-white tracking-wide shadow-md uppercase">
                  <Sparkles className="h-3 w-3 text-amber-400" />
                  Recommended for Audit Practices
                </span>
              </div>

              <div>
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl font-bold text-slate-900 font-sans flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-slate-900" />
                      <span>Pro</span>
                    </CardTitle>
                    <Badge variant="secondary" className="font-mono text-xs text-emerald-700 bg-emerald-50 border border-emerald-200/80 font-medium">
                      Commercial Practice License
                    </Badge>
                  </div>
                  <CardDescription className="text-xs text-slate-600 leading-relaxed font-sans">
                    For practicing Chartered Accountants, CPAs, and audit partnerships handling continuous client engagements.
                  </CardDescription>
                </CardHeader>

                <div className="my-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
                      {billingPeriod === "monthly" ? "₹1,999" : "₹1,599"}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {billingPeriod === "monthly" ? "/ month" : "/ month (billed annually)"}
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-700 mt-1">
                    Inclusive of all taxes
                  </div>
                </div>

                <div className="space-y-3.5 pt-6 border-t border-slate-100 text-xs text-slate-700 font-sans">
                  <div className="flex items-start gap-2.5 font-semibold text-slate-900">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Everything in Free, plus:</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-900">High-volume daily practice workload with zero throttling</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Priority frontier financial reasoning models for deep multi-step forensics</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Priority processing queue during peak tax &amp; audit filing deadlines</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Multi-sheet cross-workbook batch reconciliation across massive ledgers</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Full commercial firm license for fee-earning audit engagements</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dedicated firm onboarding &amp; priority audit support</span>
                  </div>
                </div>
              </div>

              <CardFooter className="p-0 mt-8 pt-6 border-t border-slate-100 flex flex-col gap-2">
                <a href={SITE_CONFIG.installer.downloadPath} download className="w-full">
                  <Button className="w-full gap-2 text-xs font-semibold h-12 bg-slate-900 hover:bg-slate-800 text-white shadow-md">
                    <Zap className="h-4 w-4 text-amber-400" />
                    <span>Subscribe to Pro</span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </Button>
                </a>
                <span className="text-center text-[10px] text-slate-400 font-mono">
                  Instant activation · Cancel anytime
                </span>
              </CardFooter>
            </Card>
          </div>

          {/* Full Feature Comparison Table (shadcn Table primitive) */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
                Capability &amp; Workload Comparison
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-sans">
                Clear comparison of workload volume, model intelligence, and practice licensing.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-slate-200/80 bg-slate-50/80 hover:bg-slate-50/80">
                    <TableHead className="py-4 px-6 font-semibold text-slate-900 w-1/2 text-xs">Capabilities &amp; Tiers</TableHead>
                    <TableHead className="py-4 px-4 font-semibold text-slate-900 text-center w-1/4 text-xs">Free (₹0)</TableHead>
                    <TableHead className="py-4 px-4 font-semibold text-slate-900 text-center w-1/4 text-xs">Pro (₹1,999/mo)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonCategories.map((group, groupIdx) => (
                    <React.Fragment key={groupIdx}>
                      <TableRow className="bg-slate-50/50 hover:bg-slate-50/50 border-b border-slate-100">
                        <TableCell colSpan={3} className="py-3 px-6 font-mono text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                          {group.name}
                        </TableCell>
                      </TableRow>
                      {group.rows.map((row, rowIdx) => (
                        <TableRow key={rowIdx} className="hover:bg-slate-50/60 transition-colors">
                          <TableCell className="py-3.5 px-6 font-medium text-slate-800 text-xs">
                            {row.feature}
                          </TableCell>
                          <TableCell className="py-3.5 px-4 text-center text-xs">
                            {typeof row.free === "boolean" ? (
                              <Check className="h-4 w-4 text-emerald-600 mx-auto" />
                            ) : (
                              <span className="text-slate-600 font-mono text-[11px]">{row.free}</span>
                            )}
                          </TableCell>
                          <TableCell className="py-3.5 px-4 text-center text-xs">
                            {typeof row.pro === "boolean" ? (
                              <Check className="h-4 w-4 text-emerald-600 mx-auto" />
                            ) : (
                              <span className="font-semibold text-slate-900 font-mono text-[11px]">{row.pro}</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Interactive FAQs (shadcn Radix Accordion primitive) */}
          <div className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-sans">
                Clear answers regarding practice licensing, model reasoning, and client data privacy.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="rounded-xl border border-slate-200/80 bg-white px-5 shadow-2xs"
                >
                  <AccordionTrigger className="text-sm font-semibold text-slate-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Bottom Call to Action Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-8 md:p-12 shadow-md text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 font-sans">
              Start auditing client spreadsheets on your Windows PC today.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed font-sans">
              Download the official Windows desktop workbench. 100% on-device client data confidentiality guaranteed.
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
