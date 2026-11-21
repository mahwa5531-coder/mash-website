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
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Official Windows Production Release</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans">
              Start auditing spreadsheets on Windows today.
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Version {SITE_CONFIG.version} · {SITE_CONFIG.installer.platform} · {SITE_CONFIG.installer.sizeDisplay}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={SITE_CONFIG.installer.downloadPath} download>
                <Button size="lg" className="gap-2 text-xs font-semibold h-12 px-7 bg-slate-900 hover:bg-slate-800 text-white shadow-md">
                  <Download className="h-4 w-4" />
                  <span>Download for Windows ({SITE_CONFIG.installer.sizeDisplay})</span>
                </Button>
              </a>
              <Link href="/pricing">
                <Button variant="secondary" size="lg" className="gap-2 text-xs font-medium h-12 px-5 border-slate-200 hover:bg-slate-100">
                  <span>View Plans &amp; Pricing</span>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </Button>
              </Link>
            </div>

            <p className="text-[11px] text-slate-400 font-sans pt-1">
              Free forever for individual practitioners · 100% on-device data confidentiality
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
