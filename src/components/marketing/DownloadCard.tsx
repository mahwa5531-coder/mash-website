import * as React from "react";
import Link from "next/link";
import { Download, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SITE_CONFIG } from "@/content/site-config";

export function DownloadCard() {
  return (
    <section className="py-20 border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Card className="border-slate-200/90 shadow-sm p-8 md:p-12 text-center bg-[#FCFCFD]">
          <div className="max-w-xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans tracking-tight">
              Start auditing spreadsheets on Windows today.
            </h2>

            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-sans">
              Download the desktop application for financial ledgers, tax reconciliation, and audit workpapers.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a href={SITE_CONFIG.installer.downloadPath} download>
                <Button size="lg" className="gap-2 text-sm px-7 h-12 font-semibold shadow-md bg-slate-900 hover:bg-slate-800 text-white">
                  <Download className="h-4 w-4" />
                  <span>Download for Windows</span>
                </Button>
              </a>
              <Link href="/pricing">
                <Button variant="secondary" size="lg" className="gap-2 text-sm h-12 px-5 font-medium border-slate-200 hover:bg-slate-100">
                  <span>View Plans &amp; Pricing</span>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-2 font-sans">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>100% on-device execution · Your spreadsheets never leave your computer</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
