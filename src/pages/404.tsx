import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/content/site-config";
import { assetPath } from "@/lib/utils";

export default function Custom404Page() {
  return (
    <>
      <Head>
        <title>{`404 — Page Not Found · ${SITE_CONFIG.name}`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans flex flex-col items-center justify-center p-6 text-center selection:bg-slate-200">
        <main className="max-w-md w-full flex flex-col items-center">
          
          {/* Brand Lockup */}
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src={assetPath("/brand-logo.svg")}
                alt={SITE_CONFIG.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-3xl font-semibold text-slate-900 tracking-tight">
              {SITE_CONFIG.name}
            </span>
          </div>

          {/* 404 Code Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-mono font-semibold mb-4">
            ERROR 404
          </div>

          <h1 className="text-3xl font-bold text-slate-900 tracking-tight font-sans mb-3">
            Page Not Found
          </h1>

          <p className="text-sm text-slate-600 font-sans leading-relaxed mb-8 max-w-sm">
            The page you are looking for doesn&apos;t exist, has been removed, or was moved to another URL.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link href="/" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto h-11 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white gap-2 shadow-sm px-6">
                <ArrowLeft className="h-4 w-4" />
                <span>Return to Homepage</span>
              </Button>
            </Link>

            <a href={SITE_CONFIG.installer.downloadPath} download className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto h-11 text-xs font-semibold border-slate-300 hover:bg-slate-100 gap-2 px-6">
                <Download className="h-4 w-4 text-slate-600" />
                <span>Download App</span>
              </Button>
            </a>
          </div>

        </main>
      </div>
    </>
  );
}
