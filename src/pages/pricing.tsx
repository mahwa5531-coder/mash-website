import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { 
  Check, 
  Download, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Building2, 
  FileSpreadsheet 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { SITE_CONFIG } from "@/content/site-config";
import { getWebSession, startGoogleSignIn } from "@/lib/utils";

export default function PricingPage() {
  const router = useRouter();

  const handleUpgradePro = () => {
    if (getWebSession()) {
      router.push("/checkout");
    } else {
      startGoogleSignIn("/checkout");
    }
  };

  const faqs = [
    {
      q: "Why does Mash have a strict No-Refund policy?",
      a: "Because Mash Pro unlocks immediate commercial license entitlements and allocates cloud reasoning capacity the moment payment is confirmed, all sales (₹1,999) are final. We encourage you to test the full 64-bit Windows app on the Free Forever tier before upgrading.",
    },
    {
      q: "Does Mash auto-renew or charge my UPI/card next month?",
      a: "No. Pro is a non-recurring 30-day pass with zero auto-debit mandates or cancellation traps. When 30 days end, your account naturally returns to the Free tier. You only pay again manually when you need another 30-day pass—and early renewals stack onto your remaining days.",
    },
    {
      q: "Do my client Excel or Tally files leave my computer?",
      a: "Raw workbooks stay locally on your Windows PC and are never uploaded to cloud storage. Only your prompt query and minimal cell context needed to compute an answer transit encrypted (TLS) over commercial non-training AI APIs without cloud file retention.",
    },
    {
      q: "Can I use my Pro license on more than one Windows PC?",
      a: "Yes, for your own practice. Your Pro pass is tied to your Google account (no hardware-locked license keys), so signing in with the same Google account on your office and home PC shares your active pass.",
    },
    {
      q: "What if money is debited during a network drop or charged twice?",
      a: "Uncaptured bank debits are auto-reversed by your bank/Razorpay within 5–7 business days (typically 24–48 hours for UPI). If an order is captured asynchronously via webhook, your desktop app unlocks automatically on next sync; verified duplicate captures reported within 48 hours are refunded within 5–7 business days.",
    },
  ];

  return (
    <>
      <Head>
        <title>{`Pricing & Plans — ${SITE_CONFIG.name} for CAs, CPAs & Auditors`}</title>
        <meta
          name="description"
          content="Simple, transparent pricing for Mash. Free plan for individual practitioners. Pro plan at ₹1,999/month for practicing CA firms and CPAs."
        />
        <link rel="canonical" href={`${SITE_CONFIG.url}/pricing/`} />
        <meta property="og:title" content="Mash Pricing — Free vs Pro Commercial License for Audit Firms" />
        <meta property="og:description" content="Simple, transparent pricing for Mash. Free plan and Pro at ₹1,999/month flat fee." />
        <meta property="og:url" content={`${SITE_CONFIG.url}/pricing/`} />
      </Head>

      <main className="pt-28 pb-20 md:pt-36 md:pb-28 bg-[#FAF9F6]">
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
              All core spreadsheet auditing tools are included on Windows with local-first file isolation. Choose the plan matching your practice workload.
            </p>
          </div>

          {/* 2 Plans Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
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
                    <span className="font-semibold text-slate-900">Local-first file isolation · Raw workbooks stay on your PC</span>
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
                      ₹1,999
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      / month
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-700 mt-1">
                    Flat software license fee · Zero hidden charges
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                    Billed monthly · Renew whenever needed
                  </div>
                </div>

                <div className="space-y-3.5 pt-6 border-t border-slate-100 text-xs text-slate-700 font-sans">
                  <div className="flex items-start gap-2.5 font-semibold text-slate-900">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Everything in Free, plus:</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-900">High-volume daily practice capacity (2M 5-hr / 10M weekly token windows)</span>
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
                    <span>Priority billing &amp; technical email support</span>
                  </div>
                </div>
              </div>

              <CardFooter className="p-0 mt-8 pt-6 border-t border-slate-100 flex flex-col gap-2">
                <Button
                  type="button"
                  onClick={handleUpgradePro}
                  className="w-full gap-2 text-xs font-semibold h-12 bg-slate-900 hover:bg-slate-800 text-white shadow-md cursor-pointer"
                >
                  <Zap className="h-4 w-4 text-amber-400" />
                  <span>Upgrade to Pro</span>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Pricing & Billing FAQ */}
          <section className="mt-20 max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="secondary" className="mb-3 text-[11px] font-mono uppercase tracking-wider font-semibold">
                COMMON QUESTIONS
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans">
                Billing, licensing &amp; confidentiality
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs"
                >
                  <h3 className="text-sm font-bold text-slate-900 font-sans mb-2">
                    {item.q}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-xs text-slate-500 font-sans">
              Full details in our{" "}
              <Link href="/policies" className="font-medium text-slate-900 underline hover:text-slate-700">
                Cancellation &amp; Refund Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="font-medium text-slate-900 underline hover:text-slate-700">
                Terms of Use
              </Link>
              .
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
