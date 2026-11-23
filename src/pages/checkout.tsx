import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { 
  Check, 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  QrCode, 
  Building2, 
  CreditCard, 
  Lock, 
  X,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MashBrandIcon } from "@/components/ui/MashBrandIcon";
import { SITE_CONFIG } from "@/content/site-config";

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = React.useState<"upi" | "netbanking" | "cards">("upi");
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [showUpiModal, setShowUpiModal] = React.useState(false);
  const [paymentError, setPaymentError] = React.useState<string | null>(null);
  const userEmail = "ca.practice@firm.in";

  const handleProceedToPay = () => {
    setPaymentError(null);
    if (selectedMethod === "upi") {
      setShowUpiModal(true);
    } else {
      setIsProcessing(true);
      setTimeout(() => {
        router.push("/checkout/success");
      }, 1200);
    }
  };

  return (
    <>
      <Head>
        <title>{`Checkout · 30-Day Pro Practice Pass · ${SITE_CONFIG.name}`}</title>
        <meta
          name="description"
          content="Complete your one-time purchase of the Mash 30-Day Pro Practice Pass for ₹1,999. Zero auto-debit, instant UPI QR & NetBanking via Razorpay."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans selection:bg-slate-200">
        <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16 md:pt-36 md:pb-20">
          
          {/* Top Navigation Row */}
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

          {/* Payment Error Alert Banner (Matches ChatGPT failure screen) */}
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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Order Summary (5 Cols) */}
            <div className="md:col-span-5 space-y-6">
              <Card className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
                <CardHeader className="p-0 mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="font-mono text-[10px] uppercase tracking-wider text-slate-700 bg-slate-100 border-slate-200">
                      ORDER SUMMARY
                    </Badge>
                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Non-Recurring
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 font-sans flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-slate-800" />
                    <span>30-Day Pro Practice Pass</span>
                  </CardTitle>
                  <CardDescription className="text-xs text-slate-600 font-sans mt-1">
                    Autonomous desktop AI agent workbench for spreadsheets &amp; financial audit reconciliations.
                  </CardDescription>
                </CardHeader>

                {/* Features List */}
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
                    <span>100% on-device client confidentiality guarantee</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Commercial firm license for fee-earning engagements</span>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5 font-sans">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>30-Day Practice License (1 Seat)</span>
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
                      <span className="text-2xl font-extrabold text-slate-900 font-sans tracking-tight">₹1,999.00</span>
                      <div className="text-[10px] text-slate-500 font-mono">One-time flat fee · No auto-renew</div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Safe Payment Guarantee */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 text-xs text-slate-600 font-sans space-y-1.5">
                <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Safe Payment Guarantee</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-600">
                  If funds are debited but your session is interrupted, automated webhooks activate your account within 5 minutes, or Razorpay refunds 100% within 24–48 hours.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Payment Method Selector (7 Cols) */}
            <div className="md:col-span-7 space-y-6">
              <Card className="rounded-2xl border-2 border-slate-900 bg-white p-6 sm:p-8 shadow-md">
                
                {/* Account Details */}
                <div className="mb-6 pb-5 border-b border-slate-100">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1.5 font-semibold">
                    FULFILLMENT ACCOUNT
                  </label>
                  <div className="flex items-center justify-between bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold font-mono">
                        {userEmail.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 font-sans">{userEmail}</div>
                        <div className="text-[10px] text-slate-500">License activates instantly for this Google account</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Method Tabs */}
                <div className="mb-6">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2 font-semibold">
                    SELECT PAYMENT METHOD
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setSelectedMethod("upi")}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-medium transition-all ${
                        selectedMethod === "upi"
                          ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                          : "border-slate-200 hover:border-slate-300 bg-white text-slate-700"
                      }`}
                    >
                      <QrCode className="h-5 w-5 mb-1" />
                      <span className="font-semibold">UPI QR / App</span>
                      <span className={`text-[9px] ${selectedMethod === "upi" ? "text-slate-300" : "text-slate-400"}`}>
                        Instant QR scan
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedMethod("netbanking")}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-medium transition-all ${
                        selectedMethod === "netbanking"
                          ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                          : "border-slate-200 hover:border-slate-300 bg-white text-slate-700"
                      }`}
                    >
                      <Building2 className="h-5 w-5 mb-1" />
                      <span className="font-semibold">NetBanking</span>
                      <span className={`text-[9px] ${selectedMethod === "netbanking" ? "text-slate-300" : "text-slate-400"}`}>
                        50+ Indian Banks
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedMethod("cards")}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-medium transition-all ${
                        selectedMethod === "cards"
                          ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                          : "border-slate-200 hover:border-slate-300 bg-white text-slate-700"
                      }`}
                    >
                      <CreditCard className="h-5 w-5 mb-1" />
                      <span className="font-semibold">Cards</span>
                      <span className={`text-[9px] ${selectedMethod === "cards" ? "text-slate-300" : "text-slate-400"}`}>
                        Corporate / RuPay
                      </span>
                    </button>
                  </div>
                </div>

                {/* Method Preview Box */}
                {selectedMethod === "upi" && (
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 mb-6 text-center">
                    <p className="text-xs text-slate-700 font-medium mb-1">
                      Pay with any UPI App
                    </p>
                    <p className="text-[11px] text-slate-500 mb-3">
                      Click below to open the dynamic QR code modal to scan with Google Pay, PhonePe, Paytm, or BHIM.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-slate-600">
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-200">GPay</span>
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-200">PhonePe</span>
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Paytm</span>
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-200">BHIM UPI</span>
                    </div>
                  </div>
                )}

                {selectedMethod === "netbanking" && (
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 mb-6">
                    <div className="text-xs font-semibold text-slate-900 mb-2">
                      Popular Indian Banks Supported:
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-700 font-medium mb-2">
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-center">HDFC Bank</div>
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-center">ICICI Bank</div>
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-center">SBI</div>
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-center">Axis Bank</div>
                    </div>
                    <p className="text-[10px] text-slate-500 text-center">
                      +46 other commercial banks available via Razorpay.
                    </p>
                  </div>
                )}

                {selectedMethod === "cards" && (
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 mb-6 text-center">
                    <div className="text-xs font-semibold text-slate-900 mb-1">
                      Domestic RuPay, Visa &amp; Mastercard
                    </div>
                    <p className="text-[11px] text-slate-500 mb-2">
                      Corporate practice cards and personal debit/credit cards with instant OTP authentication.
                    </p>
                    <div className="flex justify-center gap-2 text-[10px] font-mono text-slate-600">
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-200">RuPay</span>
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Visa</span>
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Mastercard</span>
                    </div>
                  </div>
                )}

                {/* Primary Button */}
                <Button 
                  onClick={handleProceedToPay}
                  disabled={isProcessing}
                  className="w-full h-12 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white shadow-md gap-2"
                >
                  <Zap className="h-4 w-4 text-amber-400" />
                  <span>{isProcessing ? "Connecting to Razorpay..." : "Proceed to Pay ₹1,999.00"}</span>
                </Button>

                {/* Microcopy */}
                <div className="mt-4 pt-4 border-t border-slate-100 text-center space-y-1">
                  <div className="text-[11px] font-semibold text-slate-700">
                    One-time payment for 30 calendar days · Zero auto-debit
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    By completing payment, you agree to our{" "}
                    <Link href="/terms" className="underline hover:text-slate-800">
                      Terms of Use
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="underline hover:text-slate-800">
                      Privacy Policy
                    </Link>
                    . Software license activates immediately upon transaction confirmation.
                  </p>
                </div>
              </Card>

              {/* Razorpay Trust Indicator */}
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
                <span>Authorized payment processing via</span>
                <span className="font-semibold text-slate-700">Razorpay</span>
                <span>(RBI Regulated)</span>
              </div>
            </div>

          </div>
        </main>

        {/* UPI QR Modal (Directly modeled on ChatGPT UPI QR modal from user screenshot) */}
        {showUpiModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
            <div className="relative w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 text-center">
              
              {/* Close Button */}
              <button 
                type="button"
                onClick={() => {
                  setShowUpiModal(false);
                  setPaymentError("Payment was not completed. Please try again.");
                }}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors p-1"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Headline */}
              <h3 className="text-xl font-bold text-slate-900 font-sans tracking-tight mb-1.5">
                Authorize payment with your app
              </h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed max-w-xs mx-auto mb-5">
                Scan this QR code using your preferred UPI app and follow the instructions to pay.
              </p>

              {/* QR Code Container */}
              <div className="inline-block p-4 bg-white rounded-2xl shadow-sm border border-slate-200/90 mb-4">
                <div className="w-44 h-44 bg-slate-950 p-2.5 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-2 border-2 border-white/20 rounded grid grid-cols-5 grid-rows-5 p-1 gap-1">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`rounded-xs ${i % 2 === 0 ? "bg-white" : i % 3 === 0 ? "bg-white/40" : "bg-white/80"}`} 
                      />
                    ))}
                  </div>
                  <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center z-10 shadow-md">
                    <MashBrandIcon size={22} />
                  </div>
                </div>
              </div>

              {/* Amount Display */}
              <div className="mb-4">
                <div className="text-sm font-bold text-slate-900 font-sans">₹1,999.00</div>
                <div className="text-[10px] text-slate-500 font-mono">Mash 30-Day Pro Practice Pass</div>
              </div>

              {/* UPI Supported Apps */}
              <div className="space-y-2 mb-6">
                <div className="text-[11px] text-slate-500 font-medium">
                  UPI is supported in multiple apps
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="px-2.5 py-1 bg-slate-100 rounded text-[11px] font-bold text-slate-800">GPay</span>
                  <span className="px-2.5 py-1 bg-purple-50 rounded text-[11px] font-bold text-purple-700">PhonePe</span>
                  <span className="px-2.5 py-1 bg-sky-50 rounded text-[11px] font-bold text-sky-700">Paytm</span>
                  <span className="px-2.5 py-1 bg-emerald-50 rounded text-[11px] font-bold text-emerald-700">BHIM</span>
                </div>
              </div>

              {/* Simulation Controls */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2">
                <Button
                  onClick={() => {
                    setShowUpiModal(false);
                    router.push("/checkout/success");
                  }}
                  className="h-9 px-4 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"
                >
                  Simulate Approved Payment
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowUpiModal(false);
                    setPaymentError("Payment was not completed. Please try again.");
                  }}
                  className="h-9 px-3 text-xs text-rose-600 hover:bg-rose-50 border-rose-200"
                >
                  Simulate Failure
                </Button>
              </div>

              {/* Modal Footer */}
              <div className="mt-4 text-[10px] text-slate-400 space-y-0.5">
                <div>Powered by <strong className="text-slate-600">Razorpay</strong></div>
                <div>
                  <Link href="/terms" className="hover:underline">Terms</Link>
                  <span className="mx-1.5">·</span>
                  <Link href="/privacy" className="hover:underline">Privacy</Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
