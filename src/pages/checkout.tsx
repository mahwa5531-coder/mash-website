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
  ExternalLink,
  Smartphone,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { MashBrandIcon } from "@/components/ui/MashBrandIcon";
import { SITE_CONFIG } from "@/content/site-config";

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = React.useState<"upi" | "netbanking" | "cards">("upi");
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [userEmail] = React.useState("ca.practice@firm.in");

  // Simulated countdown timer for UPI QR validity (8 minutes)
  const [secondsLeft, setSecondsLeft] = React.useState(480);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainder.toString().padStart(2, "0")}`;
  };

  const handleSimulatedPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      router.push("/checkout/success");
    }, 1200);
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
        {/* Main Content: 2-Column Split Layout */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16 md:pt-36 md:pb-20">
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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Order Summary & Features (5 Cols) */}
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

                {/* What is Included */}
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
              
              {/* Safe Payment Guarantee Reassurance Box */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 text-xs text-slate-600 font-sans space-y-1.5">
                <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Safe Payment Guarantee</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-600">
                  If money is debited from your bank but your screen does not update, our automated webhook will activate your account within 5 minutes, or Razorpay will automatically refund 100% of the funds within 24–48 hours.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Payment Method Selector & Instant Action (7 Cols) */}
            <div className="md:col-span-7 space-y-6">
              <Card className="rounded-2xl border-2 border-slate-900 bg-white p-6 sm:p-8 shadow-md">
                
                {/* User Account Pill */}
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
                        <div className="text-[10px] text-slate-500">License will automatically bind to this Google account</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Payment Method Selector Tabs */}
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
                      <span className="font-semibold">Instant UPI QR</span>
                      <span className={`text-[9px] ${selectedMethod === "upi" ? "text-slate-300" : "text-slate-400"}`}>
                        Fastest (GPay/PhonePe)
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

                {/* Interactive Payment Mode View */}
                {selectedMethod === "upi" && (
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 mb-6 text-center">
                    <div className="inline-block p-3 bg-white rounded-xl shadow-xs border border-slate-200 mb-3">
                      {/* Stylized QR Code Graphic */}
                      <div className="w-36 h-36 bg-slate-950 p-2 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-2 border-2 border-white/20 rounded grid grid-cols-4 grid-rows-4 p-1 gap-1">
                          <div className="bg-white rounded-xs"></div>
                          <div className="bg-white/40 rounded-xs"></div>
                          <div className="bg-white rounded-xs"></div>
                          <div className="bg-white/80 rounded-xs"></div>
                          <div className="bg-white/60 rounded-xs"></div>
                          <div className="bg-white rounded-xs"></div>
                          <div className="bg-white/20 rounded-xs"></div>
                          <div className="bg-white rounded-xs"></div>
                          <div className="bg-white rounded-xs"></div>
                          <div className="bg-white/40 rounded-xs"></div>
                          <div className="bg-white rounded-xs"></div>
                          <div className="bg-white/70 rounded-xs"></div>
                          <div className="bg-white/90 rounded-xs"></div>
                          <div className="bg-white rounded-xs"></div>
                          <div className="bg-white/50 rounded-xs"></div>
                          <div className="bg-white rounded-xs"></div>
                        </div>
                        <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center z-10 shadow-md">
                          <MashBrandIcon size={20} />
                        </div>
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-slate-900 mb-1">
                      Scan QR with any UPI App
                    </div>
                    <p className="text-[11px] text-slate-500 max-w-xs mx-auto mb-2.5">
                      Open Google Pay, PhonePe, Paytm, or CRED to approve ₹1,999.00
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                      <span>QR Valid For:</span>
                      <span className="text-slate-900 font-bold">{formatTimer(secondsLeft)}</span>
                    </div>
                  </div>
                )}

                {selectedMethod === "netbanking" && (
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 mb-6">
                    <div className="text-xs font-semibold text-slate-900 mb-2">
                      Popular Indian Banks Supported:
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-700 font-medium mb-3">
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-center">HDFC Bank</div>
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-center">ICICI Bank</div>
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-center">State Bank of India</div>
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-center">Axis Bank</div>
                    </div>
                    <p className="text-[10px] text-slate-500 text-center">
                      +46 other commercial, cooperative, and rural banks available in the Razorpay gateway.
                    </p>
                  </div>
                )}

                {selectedMethod === "cards" && (
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 mb-6 text-center">
                    <div className="text-xs font-semibold text-slate-900 mb-1">
                      Domestic RuPay, Visa &amp; Mastercard
                    </div>
                    <p className="text-[11px] text-slate-500 mb-3">
                      Both corporate practice cards and personal debit/credit cards are accepted with instant OTP authentication.
                    </p>
                    <div className="flex justify-center gap-2 text-[10px] font-mono text-slate-600">
                      <span className="bg-white px-2.5 py-1 rounded border border-slate-200">RuPay</span>
                      <span className="bg-white px-2.5 py-1 rounded border border-slate-200">Visa</span>
                      <span className="bg-white px-2.5 py-1 rounded border border-slate-200">Mastercard</span>
                    </div>
                  </div>
                )}

                {/* Primary Pay Action Button */}
                <Button 
                  onClick={handleSimulatedPayment}
                  disabled={isProcessing}
                  className="w-full h-12 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white shadow-md gap-2"
                >
                  <Zap className="h-4 w-4 text-amber-400" />
                  <span>{isProcessing ? "Connecting to Razorpay..." : "Proceed to Pay ₹1,999.00"}</span>
                </Button>

                {/* Non-recurring and Legal Microcopy */}
                <div className="mt-4 pt-4 border-t border-slate-100 text-center space-y-1">
                  <div className="text-[11px] font-semibold text-slate-700">
                    One-time payment for 30 calendar days · Zero auto-debit
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    By completing this payment, you agree to our{" "}
                    <Link href="/terms" className="underline hover:text-slate-800">
                      Terms of Use
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="underline hover:text-slate-800">
                      Privacy Policy
                    </Link>
                    . Software license and AI agent capacity are provisioned immediately upon transaction confirmation.
                  </p>
                </div>
              </Card>

              {/* Razorpay Trust Badge */}
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
                <span>Authorized payment processing via</span>
                <span className="font-semibold text-slate-700">Razorpay Software Pvt. Ltd.</span>
                <span>(RBI Regulated)</span>
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
