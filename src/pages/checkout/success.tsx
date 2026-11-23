import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { 
  CheckCircle2, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Laptop, 
  Smartphone, 
  ArrowRight, 
  FileText,
  Mail,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { MashBrandIcon } from "@/components/ui/MashBrandIcon";
import { SITE_CONFIG } from "@/content/site-config";

export default function CheckoutSuccessPage() {
  const [copiedToken, setCopiedToken] = React.useState(false);
  const userEmail = "ca.practice@firm.in";
  const orderId = "ORD_98412084";
  const paymentId = "pay_Onb7X298vLK";
  const validityDate = "December 23, 2026";
  const licenseKey = "MASH-PRO-30D-8F92-4B11-9A72";

  const handleCopyKey = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  const handleLaunchApp = () => {
    // Triggers Windows custom protocol handler
    window.location.href = `mash://license/activate?token=${licenseKey}&email=${encodeURIComponent(userEmail)}`;
  };

  return (
    <>
      <Head>
        <title>{`Payment Successful · Pro License Activated · ${SITE_CONFIG.name}`}</title>
        <meta
          name="description"
          content="Your Mash 30-Day Pro Practice Pass is confirmed. Download the desktop installer or launch Mash on Windows to begin auditing."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans selection:bg-slate-200">
        {/* Success Container */}
        <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="space-y-8">
            
            {/* Success Headline Card */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 mb-2 shadow-xs">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                Payment Confirmed
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto font-sans leading-relaxed">
                Your <span className="font-semibold text-slate-900">30-Day Pro Practice Pass</span> is active and cryptographically linked to{" "}
                <span className="font-mono font-medium text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">{userEmail}</span>.
              </p>
            </div>

            {/* License Metadata Summary Bar */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">Order ID</span>
                <span className="font-mono font-bold text-slate-800">{orderId}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">Payment ID</span>
                <span className="font-mono text-slate-700 truncate block">{paymentId}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">Amount Paid</span>
                <span className="font-mono font-bold text-slate-900">₹1,999.00 (Flat Fee)</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">Active Through</span>
                <span className="font-semibold text-emerald-700">{validityDate}</span>
              </div>
            </div>

            {/* The 2-Path Activation Hub */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Path 1: App Already Installed */}
              <Card className="rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    <Laptop className="h-4 w-4 text-slate-800" />
                    <span>ALREADY INSTALLED?</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900 font-sans mb-2">
                    Launch Mash Desktop
                  </CardTitle>
                  <CardDescription className="text-xs text-slate-600 leading-relaxed font-sans mb-6">
                    If you already have Mash installed on this Windows PC, launch the application to immediately authenticate Pro capacity.
                  </CardDescription>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <Button 
                    onClick={handleLaunchApp}
                    className="w-full h-11 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white shadow-md gap-2"
                  >
                    <Zap className="h-4 w-4 text-amber-400" />
                    <span>Launch Mash Desktop App</span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </Button>
                  <p className="text-[10px] text-slate-400 text-center font-mono">
                    Executes mash:// protocol handler on Windows
                  </p>
                </div>
              </Card>

              {/* Path 2: App NOT Installed Yet */}
              <Card className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    <Download className="h-4 w-4 text-emerald-600" />
                    <span>FIRST TIME ON THIS PC?</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900 font-sans mb-2">
                    Install Mash for Windows
                  </CardTitle>
                  <CardDescription className="text-xs text-slate-600 leading-relaxed font-sans mb-4">
                    Download the official Windows 64-bit installer to set up the workbench on your machine.
                  </CardDescription>

                  <div className="space-y-2 text-xs text-slate-600 font-sans mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold font-mono shrink-0 mt-0.5">1</span>
                      <span>Run <strong className="text-slate-900">Mash-Setup-x64.exe</strong></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold font-mono shrink-0 mt-0.5">2</span>
                      <span>Launch app and click <strong className="text-slate-900">Sign in with Google</strong></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold font-mono shrink-0 mt-0.5">3</span>
                      <span>Pro capacity unlocks automatically!</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <a href={SITE_CONFIG.installer.downloadPath} download className="w-full block">
                    <Button variant="secondary" className="w-full h-11 text-xs font-semibold border-slate-200 hover:bg-slate-100 gap-2">
                      <Download className="h-4 w-4 text-slate-700" />
                      <span>Download Installer (64-bit)</span>
                    </Button>
                  </a>
                </div>
              </Card>

            </div>

            {/* Mobile Handoff & Expense Receipt Utility Row */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Purchased on your mobile phone?</div>
                  <div className="text-[11px] text-slate-500">We have sent the Windows installer link and license credentials to {userEmail}.</div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleCopyKey} 
                  className="text-xs h-9 font-mono"
                >
                  {copiedToken ? "License Key Copied!" : "Copy License Key"}
                </Button>
                <Link href="/pricing" className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5">
                  Done
                </Link>
              </div>
            </div>

            {/* Tax & Accounting Voucher Notice */}
            <div className="text-center text-[11px] text-slate-400 font-sans">
              Commercial Payment Receipt issued under Section 22 CGST Act (Turnover exemption threshold).<br />
              Eligible as 100% tax-deductible professional expenditure under Section 37(1) of the Indian Income Tax Act, 1961.
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
