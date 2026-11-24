import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Check } from "lucide-react";
import { SITE_CONFIG } from "@/content/site-config";

export default function CheckoutSuccessPage() {
  const router = useRouter();

  // Extract query parameters with clean fallbacks
  const query = router.query;
  const userEmail = (query.email as string) || "ca.firm@audit.in";
  const paymentId = (query.pay_id as string) || "pay_01JK89AZ45";
  const amountPaid = (query.amount as string) || "₹1,999.00";

  const protocolHref = `mash://payment/success?plan=pro&payment_id=${encodeURIComponent(paymentId)}`;

  const executeHandoff = React.useCallback(async () => {
    // 1. Silent local loopback ping (if Mash Desktop is already running on port 8000)
    try {
      fetch("http://localhost:8000/api/license/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, payment_id: paymentId, plan: "pro" }),
      }).catch(() => {});
    } catch {
      // Loopback inactive
    }

    // 2. Trigger Chromium's built-in native ExternalProtocolDialog
    try {
      window.location.href = protocolHref;
    } catch {
      // Handled by browser
    }
  }, [userEmail, paymentId, protocolHref]);

  // Settle document and auto-trigger native protocol prompt
  React.useEffect(() => {
    if (!router.isReady) return;

    const timer = setTimeout(() => {
      executeHandoff();
    }, 400);

    return () => clearTimeout(timer);
  }, [router.isReady, executeHandoff]);

  const handleManualClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    executeHandoff();
  };

  return (
    <>
      <Head>
        <title>{`Payment Successful · ${SITE_CONFIG.name}`}</title>
        <meta
          name="description"
          content="Your Mash Pro subscription is active. Launch Mash on Windows or download the installer."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans selection:bg-slate-200 flex flex-col items-center justify-center p-4 sm:p-6">
        <main className="max-w-md w-full">
          {/* Focused Stripe/Raycast-Style Confirmation Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-sm text-center">
            
            {/* Emerald Checkmark Badge */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-5 border border-emerald-100">
              <Check className="h-6 w-6 stroke-[2.5]" />
            </div>

            {/* Primary Heading */}
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-sans mb-2">
              Payment Successful
            </h1>

            {/* Reassurance Subtitle */}
            <p className="text-sm text-slate-600 font-sans leading-relaxed mb-6">
              Your Mash Pro subscription is now active. A confirmation receipt has been sent to{" "}
              <span className="font-medium text-slate-900">{userEmail}</span>.
            </p>

            {/* Compact 4-Row Order Summary Pill */}
            <div className="bg-slate-50/80 rounded-xl border border-slate-200/60 p-4 mb-6 text-left space-y-2 text-xs font-sans">
              <div className="flex justify-between items-center text-slate-600">
                <span>Plan</span>
                <span className="font-semibold text-slate-900">Mash Pro</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Amount Paid</span>
                <span className="font-semibold text-slate-900">{amountPaid}</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Status</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Paid
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Payment Reference</span>
                <span className="font-mono text-slate-700 font-medium">{paymentId}</span>
              </div>
            </div>

            {/* Native Protocol Fallback Link (No Bulky Buttons) */}
            <p className="text-xs text-slate-500 font-sans leading-relaxed mb-6">
              You should be redirected back to the product.{" "}
              <a
                href={protocolHref}
                onClick={handleManualClick}
                className="text-blue-600 hover:text-blue-700 underline font-medium cursor-pointer transition-colors"
              >
                Click here
              </a>{" "}
              if not working.
            </p>

            {/* Secondary Action for Web-First Buyers */}
            <div className="text-xs text-slate-500 pt-5 border-t border-slate-100">
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

          {/* Clean Return Link */}
          <div className="mt-6 text-center">
            <Link 
              href="/" 
              className="text-xs text-slate-400 hover:text-slate-700 transition-colors"
            >
              ← Return to homepage
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
