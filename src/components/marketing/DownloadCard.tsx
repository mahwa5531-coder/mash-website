import * as React from "react";
import { Download, ShieldCheck, Copy, Check, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/content/site-config";

export function DownloadCard() {
  const [copied, setCopied] = React.useState(false);

  const copyHash = () => {
    navigator.clipboard.writeText(SITE_CONFIG.installer.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Card className="border-slate-300/80 shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Verified Windows Production Release</span>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">
                Download Mash for Windows
              </CardTitle>
              <CardDescription className="text-sm text-slate-600">
                Version {SITE_CONFIG.version} · {SITE_CONFIG.installer.platform} · {SITE_CONFIG.installer.sizeDisplay}
              </CardDescription>
            </div>

            <a href={SITE_CONFIG.installer.downloadPath} download>
              <Button size="lg" className="gap-2 text-sm px-6 font-semibold shadow-md whitespace-nowrap">
                <Download className="h-4 w-4" />
                <span>Download Installer (.exe)</span>
              </Button>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
              <span className="font-medium text-slate-700">SHA-256 Checksum Verification:</span>
              <button
                type="button"
                onClick={copyHash}
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-mono text-[11px] bg-slate-50 px-2 py-1 rounded border border-slate-200/60 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-600" />
                    <span className="text-emerald-700">Checksum Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 text-slate-400" />
                    <span>Copy SHA-256 Hash</span>
                  </>
                )}
              </button>
            </div>

            <div className="font-mono text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-200/70 break-all select-all">
              {SITE_CONFIG.installer.sha256}
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1 font-mono">
              <Terminal className="h-3 w-3" />
              <span>Verify in PowerShell: Get-FileHash .\Mash-Setup-0.1.0.exe -Algorithm SHA256</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
