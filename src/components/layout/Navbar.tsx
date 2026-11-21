import * as React from "react";
import Link from "next/link";
import { 
  Download, 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  Layers, 
  Table, 
  Terminal, 
  Lock, 
  FileText, 
  Sparkles,
  Command
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MashBrandIcon } from "@/components/ui/MashBrandIcon";
import { SITE_CONFIG } from "@/content/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFeaturesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-[#FCFCFD]/85 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Monogram & Wordmark */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <MashBrandIcon size={26} className="transition-transform group-hover:scale-105" />
            <span className="font-bold text-slate-900 tracking-tight text-base font-sans">
              Mash
            </span>
          </Link>

          {/* Release Version Pill */}
          <Link href="/changelog" className="hidden sm:inline-flex">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-100/70 px-2.5 py-0.5 text-[11px] font-mono font-medium text-slate-700 hover:bg-slate-200/70 hover:border-slate-300 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              v{SITE_CONFIG.version}
            </span>
          </Link>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-600">
          <Link
            href="/"
            className="px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
          >
            Overview
          </Link>

          {/* Features Dropdown Menu (Modeled on Cursor / Linear) */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setFeaturesDropdownOpen(!featuresDropdownOpen)}
              className={cn(
                "flex items-center gap-1 px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100/70 transition-colors cursor-pointer",
                featuresDropdownOpen && "text-slate-900 bg-slate-100/70"
              )}
            >
              <span>Capabilities</span>
              <ChevronDown className={cn("h-3 w-3 text-slate-400 transition-transform duration-200", featuresDropdownOpen && "rotate-180")} />
            </button>

            {featuresDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 rounded-xl border border-slate-200/90 bg-white p-3 shadow-xl z-50 animate-in fade-in-0 zoom-in-95">
                <div className="space-y-1">
                  <Link
                    href="/#features"
                    onClick={() => setFeaturesDropdownOpen(false)}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <div className="mt-0.5 p-1.5 rounded-md bg-slate-100 text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <Layers className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Dual-Pane Workbench</div>
                      <div className="text-[11px] text-slate-500 leading-tight">Agent reasoning alongside 880px live sheets.</div>
                    </div>
                  </Link>

                  <Link
                    href="/docs/spreadsheet-3d-engine"
                    onClick={() => setFeaturesDropdownOpen(false)}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <div className="mt-0.5 p-1.5 rounded-md bg-amber-50 text-[#C8522C] group-hover:bg-[#C8522C] group-hover:text-white transition-colors">
                      <Table className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">3D Vector Spreadsheets</div>
                      <div className="text-[11px] text-slate-500 leading-tight">Interactive spatial charts with live formula recalculations.</div>
                    </div>
                  </Link>

                  <Link
                    href="/docs/agent-tools-and-safety"
                    onClick={() => setFeaturesDropdownOpen(false)}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <div className="mt-0.5 p-1.5 rounded-md bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                      <Terminal className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Local Tool Execution</div>
                      <div className="text-[11px] text-slate-500 leading-tight">Real shell execution, ripgrep search, and file diffs.</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/docs"
            className="px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
          >
            Docs
          </Link>

          <Link
            href="/changelog"
            className="px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
          >
            Changelog
          </Link>
        </nav>

        {/* Right Action Stack: Search Pill & Download CTA */}
        <div className="flex items-center gap-3">
          {/* Quick Search Shortcut Pill (Linear style) */}
          <Link
            href="/docs"
            className="hidden lg:flex items-center gap-2 rounded-md border border-slate-200/80 bg-slate-50/70 px-2.5 py-1 text-[11px] text-slate-500 hover:border-slate-300 hover:bg-slate-100 transition-colors font-mono"
          >
            <Search className="h-3 w-3 text-slate-400" />
            <span>Search docs...</span>
            <kbd className="rounded bg-white px-1 py-0.5 text-[9px] border border-slate-200 text-slate-400 shadow-2xs">
              Ctrl K
            </kbd>
          </Link>

          {/* Primary Download CTA */}
          <Link href="/download">
            <Button size="sm" variant="default" className="gap-2 font-medium shadow-xs text-xs">
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
              <span className="hidden sm:inline-block text-slate-400 font-mono text-[10px]">
                {SITE_CONFIG.installer.sizeDisplay}
              </span>
            </Button>
          </Link>

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
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Overview
          </Link>
          <Link
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Capabilities
          </Link>
          <Link
            href="/docs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Documentation
          </Link>
          <Link
            href="/changelog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Changelog
          </Link>
          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/download"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-900 text-white font-medium text-xs shadow-sm"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download Mash for Windows ({SITE_CONFIG.installer.sizeDisplay})</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
