import * as React from "react";
import Link from "next/link";
import { MashBrandIcon } from "@/components/ui/MashBrandIcon";
import { SITE_CONFIG } from "@/content/site-config";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-12 text-xs text-slate-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MashBrandIcon size={22} />
              <span className="font-semibold text-slate-900 tracking-tight text-sm">
                Mash
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              The desktop AI workbench for spreadsheets, financial data reconciliation, and statutory audits.
            </p>
            <p className="text-[11px] text-slate-400 font-mono">
              Windows x64 · Version {SITE_CONFIG.version}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-3 text-xs tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-slate-900 transition-colors">
                  Product Overview
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-slate-900 transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="hover:text-slate-900 transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-slate-900 transition-colors">
                  Pricing &amp; Plans
                </Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-slate-900 transition-colors">
                  Download for Windows
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Privacy & Security */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 mb-3 text-xs tracking-wider uppercase">
              Privacy &amp; Security
            </h4>
            <div className="flex items-center gap-1.5 text-slate-700 font-medium">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>100% On-Device Confidentiality</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Your financial ledgers, tax IDs, and spreadsheets never leave your personal computer.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Mash Workbench. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Windows 10 / 11 64-bit</span>
            <span>·</span>
            <span>Local Machine Storage</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
