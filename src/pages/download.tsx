import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { Download, ShieldCheck, Copy, Check, Terminal, FileCode, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/content/site-config";

export default function DownloadPage() {
  const [copied, setCopied] = React.useState(false);

  const copyHash = () => {
    navigator.clipboard.writeText(SITE_CONFIG.installer.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Head>
        <title>Download {SITE_CONFIG.name} — {SITE_CONFIG.version} for Windows</title>
        <meta
          name="description"
          content={`Download Mash ${SITE_CONFIG.version} for Windows 10/11 64-bit. Verified installer (${SITE_CONFIG.installer.sizeDisplay}).`}
        />
      </Head>

      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Download Mash for Windows
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              Standalone desktop application with full local tool support, 3D spreadsheet engine, and verified cryptographic integrity.
            </p>
          </div>

          {/* Main Download Card */}
          <Card className="border-slate-300/80 shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 mb-1">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Official Stable Release</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {SITE_CONFIG.installer.fileName}
                </h2>
                <p className="text-xs text-slate-500 font-mono">
                  {SITE_CONFIG.installer.platform} · {SITE_CONFIG.installer.sizeDisplay} · Released {SITE_CONFIG.releaseDate}
                </p>
              </div>

              <a href={SITE_CONFIG.installer.downloadPath} download>
                <Button size="lg" className="gap-2 text-sm px-6 font-semibold shadow-md whitespace-nowrap">
                  <Download className="h-4 w-4" />
                  <span>Download (.exe)</span>
                </Button>
              </a>
            </div>

            {/* Checksum Box */}
            <div className="pt-6 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium">SHA-256 Checksum:</span>
                <button
                  type="button"
                  onClick={copyHash}
                  className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 font-mono text-[11px] bg-slate-50 px-2 py-1 rounded border border-slate-200"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 text-slate-400" />
                      <span>Copy Hash</span>
                    </>
                  )}
                </button>
              </div>

              <div className="font-mono text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200/80 break-all select-all">
                {SITE_CONFIG.installer.sha256}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono pt-1">
                <Terminal className="h-3.5 w-3.5" />
                <span>Verify in terminal: Get-FileHash .\Mash-Setup-0.1.0.exe -Algorithm SHA256</span>
              </div>
            </div>
          </Card>

          {/* Quick Installation Guide */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-2">
              <div className="h-7 w-7 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Download Installer</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Save <code>Mash-Setup-0.1.0.exe</code> to your local computer.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-2">
              <div className="h-7 w-7 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Verify Integrity</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Optional: Confirm the SHA-256 matches our cryptographic fingerprint.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-2">
              <div className="h-7 w-7 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Launch Mash</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Execute the setup to start auditing ledgers and querying spreadsheets.
              </p>
            </div>
          </div>

          {/* System Requirements */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider text-xs">
              System Specifications
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block mb-1">OS</span>
                <span className="font-medium text-slate-800">Windows 10/11 64-bit</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Memory</span>
                <span className="font-medium text-slate-800">8 GB RAM (16 GB rec.)</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Disk</span>
                <span className="font-medium text-slate-800">500 MB free space</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Architecture</span>
                <span className="font-medium text-slate-800">x86_64 / x64</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
