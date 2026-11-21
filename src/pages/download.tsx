import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { Download, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SITE_CONFIG } from "@/content/site-config";

export default function DownloadPage() {
  return (
    <>
      <Head>
        <title>Download {SITE_CONFIG.name} for Windows</title>
        <meta
          name="description"
          content="Download Mash for Windows. Official desktop application for financial ledgers and spreadsheets."
        />
        <link rel="canonical" href="https://mash.ai/download/" />
        <meta property="og:title" content="Download Mash for Windows" />
        <meta property="og:description" content="Official Windows installer for Mash. 100% on-device data confidentiality." />
        <meta property="og:url" content="https://mash.ai/download/" />
      </Head>

      <main className="py-16 md:py-24 bg-[#FCFCFD]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 font-sans">
              Download Mash for Windows
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-sans">
              The desktop AI workbench for spreadsheets, financial data reconciliation, and statutory audits.
            </p>
          </div>

          {/* Main Download Card */}
          <Card className="border-slate-200/90 shadow-sm p-10 md:p-14 mb-12 bg-white text-center">
            <div className="max-w-xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 font-sans tracking-tight">
                Mash for Windows
              </h2>

              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-sans">
                Install the standalone desktop application to audit financial ledgers with 100% on-device confidentiality.
              </p>

              <div className="pt-2">
                <a href={SITE_CONFIG.installer.downloadPath} download>
                  <Button size="lg" className="gap-2.5 text-sm px-8 h-13 font-semibold shadow-md bg-slate-900 hover:bg-slate-800 text-white w-full sm:w-auto">
                    <Download className="h-4 w-4" />
                    <span>Download Mash for Windows (.exe)</span>
                  </Button>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2 font-sans">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>100% on-device execution · Your spreadsheets never leave your computer</span>
              </div>
            </div>
          </Card>

          {/* 3 Simple Setup Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-2">
              <div className="h-7 w-7 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-sm font-semibold text-slate-900 font-sans">Download Installer</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Save the setup executable to your computer.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-2">
              <div className="h-7 w-7 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-sm font-semibold text-slate-900 font-sans">Run Setup</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Launch the installer to complete setup in seconds.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-2">
              <div className="h-7 w-7 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-sm font-semibold text-slate-900 font-sans">Start Auditing</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Open any Excel or CSV workbook and audit your data locally.
              </p>
            </div>
          </div>

          {/* Need help or commercial licensing link */}
          <div className="text-center pt-4">
            <Link href="/pricing" className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium">
              <span>Looking for commercial firm licensing? View Plans &amp; Pricing</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
