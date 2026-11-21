import * as React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/content/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-12 text-xs text-slate-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white font-mono font-bold text-xs">
                M
              </span>
              <span className="font-semibold text-slate-900 tracking-tight text-sm">
                Mash
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              The autonomous AI workbench for complex data, statutory forensic audits, and local code execution.
            </p>
            <p className="text-[11px] text-slate-400 font-mono">
              Windows x64 · v{SITE_CONFIG.version}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3 text-xs tracking-wider uppercase">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-slate-900 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-slate-900 transition-colors">
                  Dual-Pane Workbench
                </Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-slate-900 transition-colors">
                  Download Installer
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="hover:text-slate-900 transition-colors">
                  Release History
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3 text-xs tracking-wider uppercase">
              Documentation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/docs/getting-started" className="hover:text-slate-900 transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/docs/workbench-modes" className="hover:text-slate-900 transition-colors">
                  Workbench Modes
                </Link>
              </li>
              <li>
                <Link href="/docs/spreadsheet-3d-engine" className="hover:text-slate-900 transition-colors">
                  3D Spreadsheet Engine
                </Link>
              </li>
              <li>
                <Link href="/docs/agent-tools-and-safety" className="hover:text-slate-900 transition-colors">
                  Agent Tools & Safety
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3 text-xs tracking-wider uppercase">
              Integrity & Trust
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-2">
              All tools run locally within your machine boundary. SHA-256 binary validation verified.
            </p>
            <div className="font-mono text-[10px] text-slate-400 break-all bg-slate-50 p-2 rounded border border-slate-200/60">
              SHA: {SITE_CONFIG.installer.sha256.substring(0, 24)}...
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Mash Workbench. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Windows 10 / 11 64-bit</span>
            <span>·</span>
            <span>Local-First Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
