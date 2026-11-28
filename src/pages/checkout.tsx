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
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SITE_CONFIG } from "@/content/site-config";
import {
  ApiError,
  WebSession,
  apiJson,
  clearWebSession,
  getWebSession,
  startGoogleSignIn,
} from "@/lib/utils";

interface RazorpayHandlerResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayInstance {
  open: () => void;
  on: (event: string, cb: (resp: { error?: { description?: string } }) => void) => void;
}

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => RazorpayInstance;
  }
}

interface CheckoutOrderView {
  order_id: string;
  provider: string;
  provider_order_id: string;
  provider_payment_id?: string;
  amount_paise: number;
  currency: string;
  status: string;
}

interface CheckoutResponse {
  order: CheckoutOrderView;
  key_id: string;
  provider: string;
  provider_order_id: string;
  redirect_url?: string;
}

const PRO_SKU_ID = "plan_pro_1m";

const OAUTH_ERROR_MESSAGES: Record<string, string> = {
  OAUTH_STATE_INVALID: "Your Google sign-in session expired. Please try again.",
  OAUTH_EMAIL_UNVERIFIED: "Please use a Google account with a verified email address.",
  OAUTH_PROVIDER_ERROR: "Google sign-in was cancelled or could not be completed.",
  OAUTH_DISABLED: "Google sign-in is temporarily unavailable. Please try again later.",
};

function generateIdempotencyKey(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `idem_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function loadRazorpayCheckoutScript(): Promise<boolean> {
  if (typeof window === "undefined") return Promise.resolve(false);
  if (window.Razorpay) return Promise.resolve(true);

  return new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );
    if (existing) {
      existing.addEventListener("load", () => resolve(Boolean(window.Razorpay)), { once: true });
      existing.addEventListener("error", () => resolve(false), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(Boolean(window.Razorpay));
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function CheckoutPage() {
  const router = useRouter();
  const [session, setSession] = React.useState<WebSession | null>(null);
  const [sessionChecked, setSessionChecked] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [paymentError, setPaymentError] = React.useState<string | null>(null);
  const idempotencyKeyRef = React.useRef<string | null>(null);

  React.useEffect(() => {
    if (!router.isReady) return;
    setSession(getWebSession());
    setSessionChecked(true);

    const errCode = router.query.error as string | undefined;
    if (errCode) {
      setPaymentError(
        OAUTH_ERROR_MESSAGES[errCode] ||
          "Sign-in could not be completed. Please continue with Google to check out."
      );
    }
  }, [router.isReady, router.query.error]);

  const navigateSuccess = React.useCallback(
    (order: CheckoutOrderView, payId: string, email: string) => {
      idempotencyKeyRef.current = null;
      const inr = `₹${(order.amount_paise / 100).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
      router.push(
        `/checkout/success?order_id=${encodeURIComponent(order.order_id)}&pay_id=${encodeURIComponent(payId)}&email=${encodeURIComponent(email)}&amount=${encodeURIComponent(inr)}`
      );
    },
    [router]
  );

  const handlePay = async () => {
    const activeSession = getWebSession();
    if (!activeSession) {
      setSession(null);
      startGoogleSignIn("/checkout");
      return;
    }

    setPaymentError(null);
    setIsProcessing(true);

    if (!idempotencyKeyRef.current) {
      idempotencyKeyRef.current = generateIdempotencyKey();
    }

    try {
      const checkout = await apiJson<CheckoutResponse>("/v1/payments/checkout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${activeSession.access_token}`,
          "Idempotency-Key": idempotencyKeyRef.current,
        },
        body: JSON.stringify({ sku_id: PRO_SKU_ID }),
      });

      if (checkout.order.status === "paid") {
        setIsProcessing(false);
        navigateSuccess(
          checkout.order,
          checkout.order.provider_payment_id || checkout.order.order_id,
          activeSession.email
        );
        return;
      }

      if (checkout.order.status === "expired" || checkout.order.status === "failed") {
        idempotencyKeyRef.current = null;
        setIsProcessing(false);
        setPaymentError("Previous checkout attempt expired. Please click Pay again.");
        return;
      }

      if (checkout.redirect_url) {
        window.location.href = checkout.redirect_url;
        return;
      }

      if (checkout.provider === "razorpay") {
        const loaded = await loadRazorpayCheckoutScript();
        if (!loaded || !window.Razorpay) {
          setIsProcessing(false);
          setPaymentError("Could not load Razorpay Checkout. Check your network and try again.");
          return;
        }

        const rzp = new window.Razorpay({
          key: checkout.key_id,
          order_id: checkout.provider_order_id,
          amount: checkout.order.amount_paise,
          currency: checkout.order.currency || "INR",
          name: SITE_CONFIG.name,
          description: "Mash Pro — 30-Day Commercial Pass",
          prefill: {
            email: activeSession.email,
            name: activeSession.display_name || undefined,
          },
          theme: { color: "#0f172a" },
          modal: {
            ondismiss: () => {
              setIsProcessing(false);
            },
          },
          handler: async (response: RazorpayHandlerResponse) => {
            try {
              const confirmed = await apiJson<{ order: CheckoutOrderView }>(
                "/v1/payments/confirm",
                {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${activeSession.access_token}`,
                  },
                  body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                  }),
                }
              );
              setIsProcessing(false);
              navigateSuccess(
                confirmed.order,
                response.razorpay_payment_id,
                activeSession.email
              );
            } catch (confirmErr) {
              setIsProcessing(false);
              const msg =
                confirmErr instanceof Error
                  ? confirmErr.message
                  : "Payment confirmation failed.";
              setPaymentError(
                `${msg} If funds were debited, your Pro pass will activate automatically via webhook within a few minutes.`
              );
            }
          },
        });

        rzp.on("payment.failed", (resp) => {
          idempotencyKeyRef.current = null;
          setIsProcessing(false);
          setPaymentError(
            resp?.error?.description || "Payment was declined or cancelled. Please try again."
          );
        });

        rzp.open();
        return;
      }

      if (checkout.provider === "mock") {
        // Poll mock auto-capture up to ~6s so staging flows still settle cleanly
        for (let i = 0; i < 6; i++) {
          const statusRes = await apiJson<{ order: CheckoutOrderView }>(
            `/v1/payments/orders/${encodeURIComponent(checkout.order.order_id)}`,
            {
              headers: { Authorization: `Bearer ${activeSession.access_token}` },
            }
          );
          if (statusRes.order.status === "paid") {
            setIsProcessing(false);
            navigateSuccess(
              statusRes.order,
              statusRes.order.provider_payment_id || statusRes.order.order_id,
              activeSession.email
            );
            return;
          }
          await new Promise((r) => setTimeout(r, 1000));
        }
        setIsProcessing(false);
        setPaymentError("Order created, awaiting confirmation. Please check again shortly.");
        return;
      }

      setIsProcessing(false);
      setPaymentError(`Unsupported payment provider configuration: ${checkout.provider}`);
    } catch (err) {
      setIsProcessing(false);
      if (err instanceof ApiError) {
        if (err.status === 401) {
          clearWebSession();
          setSession(null);
          idempotencyKeyRef.current = null;
          setPaymentError("Your checkout session expired. Please sign in with Google again.");
          return;
        }
        if (err.code === "IDEMPOTENCY_KEY_REUSE") {
          idempotencyKeyRef.current = null;
        }
        if (err.code === "PAYMENTS_DISABLED") {
          setPaymentError("Online checkout is not enabled yet. Please check back shortly.");
          return;
        }
        setPaymentError(err.message);
        return;
      }
      setPaymentError("Unable to reach the payment server. Please check your connection and try again.");
    }
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
                type="button"
                onClick={() => setPaymentError(null)}
                className="text-rose-500 hover:text-rose-800 text-xs font-semibold px-2 py-0.5 cursor-pointer"
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
                <Badge
                  variant="secondary"
                  className="font-mono text-[10px] uppercase tracking-wider text-slate-700 bg-slate-100 border-slate-200"
                >
                  ORDER SUMMARY
                </Badge>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  30-Day Pass · Non-Recurring
                </span>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900 font-sans">
                Mash Pro
              </CardTitle>
              <CardDescription className="text-xs text-slate-600 font-sans mt-1">
                Commercial AI agent workbench for spreadsheets &amp; statutory audit reconciliations.
              </CardDescription>
            </CardHeader>

            {/* Subscriber Identity Context */}
            <div className="mb-5 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between gap-2 text-xs font-sans">
              <span className="text-slate-500 font-medium">Billed To Account</span>
              {session ? (
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="font-semibold text-slate-900 font-mono flex items-center gap-1.5 truncate">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <span className="truncate">{session.email}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => startGoogleSignIn("/checkout")}
                    className="text-[11px] text-slate-500 hover:text-slate-900 underline shrink-0 cursor-pointer"
                  >
                    Switch
                  </button>
                </div>
              ) : (
                <span className="font-medium text-amber-700 font-mono text-[11px]">
                  {sessionChecked ? "Google sign-in required" : "Checking session..."}
                </span>
              )}
            </div>

            {/* Features Included */}
            <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700 font-sans">
              <div className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-semibold text-slate-900">
                  High-volume daily practice workload with zero throttling
                </span>
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
                <span>Mash Pro License (30 Days)</span>
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
                  <span className="text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
                    ₹1,999.00
                  </span>
                  <div className="text-[10px] text-slate-500 font-mono">
                    One-time 30-day pass · Renew whenever needed
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="mt-6 pt-2">
              {session ? (
                <Button
                  type="button"
                  onClick={handlePay}
                  disabled={isProcessing}
                  className="w-full h-12 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white shadow-md gap-2 cursor-pointer"
                >
                  <Zap className="h-4 w-4 text-amber-400" />
                  <span>{isProcessing ? "Opening Razorpay..." : "Pay ₹1,999 with Razorpay"}</span>
                </Button>
              ) : (
                <div className="space-y-2">
                  <Button
                    type="button"
                    onClick={() => startGoogleSignIn("/checkout")}
                    className="w-full h-12 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white shadow-md gap-2 cursor-pointer"
                  >
                    <span>Continue with Google to Checkout</span>
                  </Button>
                  <p className="text-center text-[11px] text-slate-500">
                    Sign in with the Google account you use in the Mash desktop app.
                  </p>
                </div>
              )}
            </div>

            {/* Legal Notice */}
            <div className="mt-4 pt-4 border-t border-slate-100 text-center space-y-1 text-[11px] text-slate-500">
              <p className="leading-relaxed">
                By clicking Pay, you agree to our{" "}
                <Link href="/terms" className="underline hover:text-slate-800">
                  Terms of Use
                </Link>
                ,{" "}
                <Link href="/privacy" className="underline hover:text-slate-800">
                  Privacy Policy
                </Link>
                , and{" "}
                <Link href="/policies" className="underline hover:text-slate-800">
                  No-Refund Policy
                </Link>
                . All sales are final. AI outputs are assistive drafts and require independent professional review.
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
