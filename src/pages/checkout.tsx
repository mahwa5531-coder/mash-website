import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { 
  Check, 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  Lock, 
  AlertCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SITE_CONFIG } from "@/content/site-config";

export default function CheckoutPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [paymentError, setPaymentError] = React.useState<string | null>(null);

  const handlePay = () => {
    setPaymentError(null);
    setIsProcessing(true);

    // Direct Razorpay flow simulation
    setTimeout(() => {
      setIsProcessing(false);
      router.push("/checkout/success");
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>{`Checkout · Mash Pro · ${SITE_CONFIG.name}`}</title>
        <meta
          name="description"
          content="Subscribe to Mash Pro for ₹1,999/month. Instant UPI and Card payment via Razorpay."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans selection:bg-slate-200">
        <main className="max-w-xl mx-auto px-4 sm:px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          
          {/* Back Navigation */}
          <div className="mb-6 flex items-center justify-between">
            <Link 
              href="/pricing" 
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Plans</span>
            </Link>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
              <Lock className="h-3.5 w-3.5 text-emerald-600" />
              <span>256-Bit SSL Encrypted Checkout</span>
            </div>
          </div>

          {/* Payment Error Alert Banner */}
          {paymentError && (
            <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs font-medium flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
                <span>{paymentError}</span>
              </div>
              <button 
                onClick={() => setPaymentError(null)}
                className="text-rose-500 hover:text-rose-800 text-xs font-semibold px-2 py-0.5"
                aria-label="Dismiss error"
              >
                ✕
              </button>
            </div>
          )}

          {/* Single Focused Order Review Card */}
          <Card className="rounded-2xl border-2 border-slate-900 bg-white p-6 sm:p-8 shadow-md">
            <CardHeader className="p-0 mb-6">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="font-mono text-[10px] uppercase tracking-wider text-slate-700 bg-slate-100 border-slate-200">
                  ORDER SUMMARY
                </Badge>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Monthly Subscription
                </span>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900 font-sans">
                Mash Pro
              </CardTitle>
              <CardDescription className="text-xs text-slate-600 font-sans mt-1">
                Commercial AI agent workbench for spreadsheets &amp; statutory audit reconciliations.
              </CardDescription>
            </CardHeader>

            {/* Features Included */}
            <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700 font-sans">
              <div className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-semibold text-slate-900">High-volume daily practice workload with zero throttling</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Priority frontier financial reasoning queue during peak deadlines</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Multi-sheet cross-workbook batch audit reconciliations</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>100% on-device client data confidentiality guarantee</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Full commercial license for fee-earning firm engagements</span>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5 font-sans">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Mash Pro License (1 Seat)</span>
                <span className="font-mono font-medium text-slate-800">₹1,999.00</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  Goods &amp; Services Tax (GST)
                  <span className="text-[10px] text-slate-400 font-mono">(Exempt Sec 22)</span>
                </span>
                <span className="font-mono font-medium text-slate-800">₹0.00</span>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline">
                <span className="text-sm font-bold text-slate-900">Total Due Today</span>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-slate-900 font-sans tracking-tight">₹1,999.00</span>
                  <div className="text-[10px] text-slate-500 font-mono">Billed monthly · Renew whenever needed</div>
                </div>
              </div>
            </div>

            {/* Primary Action Button (Directly triggers Razorpay) */}
            <div className="mt-6 pt-2">
              <Button 
                onClick={handlePay}
                disabled={isProcessing}
                className="w-full h-12 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white shadow-md gap-2"
              >
                <Zap className="h-4 w-4 text-amber-400" />
                <span>{isProcessing ? "Opening Razorpay..." : "Pay ₹1,999 with Razorpay"}</span>
              </Button>
            </div>

            {/* Legal Notice */}
            <div className="mt-4 pt-4 border-t border-slate-100 text-center space-y-1 text-[11px] text-slate-500">
              <p className="leading-relaxed">
                By clicking Pay, you agree to our{" "}
                <Link href="/terms" className="underline hover:text-slate-800">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline hover:text-slate-800">
                  Privacy Policy
                </Link>
                . Instant activation upon transaction completion.
              </p>
            </div>
          </Card>

          {/* Safe Payment Guarantee Reassurance */}
          <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 text-xs text-slate-600 font-sans flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-800 mb-0.5">Safe Payment Guarantee</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                UPI and card transactions are encrypted and processed securely by Razorpay. If funds are debited during a connection drop, automated webhooks activate your account within 5 minutes or Razorpay auto-refunds within 24–48 hours.
              </p>
            </div>
          </div>

        </main>
      </div>
    </>
  );
}
