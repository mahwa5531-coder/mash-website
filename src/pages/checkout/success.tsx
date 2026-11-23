import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { Check, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/content/site-config";

export default function CheckoutSuccessPage() {
  const userEmail = "ca.practice@firm.in";

  const handleLaunchApp = () => {
    // Triggers Windows app protocol if installed
    window.location.href = `mash://`;
  };

  return (
    <>
      <Head>
        <title>{`Payment Successful · ${SITE_CONFIG.name}`}</title>
        <meta
          name="description"
          content="Your Mash 30-Day Pro Practice Pass is confirmed. Launch Mash on Windows or download the installer."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans selection:bg-slate-200">
        <main className="max-w-md mx-auto px-4 sm:px-6 pt-32 pb-20 md:pt-40 md:pb-28">
          {/* Minimalist Single-Card Confirmation */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-10 shadow-sm text-center">
            
            {/* Emerald Checkmark Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-5 border border-emerald-100">
              <Check className="h-6 w-6 stroke-[2.5]" />
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-sans mb-2">
              Payment Successful
            </h1>

            {/* Description */}
            <p className="text-sm text-slate-600 font-sans leading-relaxed mb-6">
              Your 30-Day Pro Pass is now active. A confirmation receipt has been sent to{" "}
              <span className="font-medium text-slate-900">{userEmail}</span>.
            </p>

            {/* Receipt Summary Pill */}
            <div className="bg-slate-50/80 rounded-xl border border-slate-200/60 p-4 mb-6 text-left space-y-2 text-xs font-sans">
              <div className="flex justify-between items-center text-slate-600">
                <span>Plan</span>
                <span className="font-semibold text-slate-900">30-Day Pro Practice Pass</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Amount Paid</span>
                <span className="font-semibold text-slate-900">₹1,999.00</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Billing</span>
                <span className="text-slate-700">One-time (Non-recurring)</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <Button
                onClick={handleLaunchApp}
                className="w-full h-11 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white shadow-sm gap-2"
              >
                <span>Open Mash Desktop</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </Button>

              <div className="text-xs text-slate-500">
                <span>Don&apos;t have Mash installed? </span>
                <a
                  href={SITE_CONFIG.installer.downloadPath}
                  download
                  className="font-medium text-slate-900 hover:underline"
                >
                  Download for Windows
                </a>
              </div>
            </div>

          </div>

          {/* Clean Return Link */}
          <div className="mt-6 text-center">
            <Link 
              href="/" 
              className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
            >
              ← Return to homepage
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
