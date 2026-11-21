import * as React from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MashBrandIcon } from "@/components/ui/MashBrandIcon";
import { SITE_CONFIG } from "@/content/site-config";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-[#FCFCFD]/90 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Monogram & Wordmark */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <MashBrandIcon size={26} className="transition-transform group-hover:scale-105" />
            <span className="font-bold text-slate-900 tracking-tight text-base font-sans">
              Mash
            </span>
          </Link>

          {/* Windows Desktop Pill */}
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-100/70 px-2.5 py-0.5 text-[11px] font-mono font-medium text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Windows Desktop
          </span>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-600">
          <a
            href="#features"
            className="px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
          >
            Capabilities
          </a>
          <a
            href="#how-it-works"
            className="px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
          >
            Pricing &amp; Plans
          </a>
        </nav>

        {/* Right Action: Download CTA */}
        <div className="flex items-center gap-3">
          <a href="#download" className="hidden sm:inline-block">
            <Button size="sm" variant="default" className="gap-2 font-medium shadow-xs text-xs h-9 px-4 bg-slate-900 hover:bg-slate-800">
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
              <span className="text-slate-400 font-mono text-[10px]">
                {SITE_CONFIG.installer.sizeDisplay}
              </span>
            </Button>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-md text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white px-4 py-4 space-y-3 animate-in slide-in-from-top-2">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Capabilities
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Pricing &amp; Plans
          </a>
          <div className="pt-2 border-t border-slate-100">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-900 text-white font-medium text-xs shadow-sm"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download for Windows ({SITE_CONFIG.installer.sizeDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
