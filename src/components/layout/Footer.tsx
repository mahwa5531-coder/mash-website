import * as React from "react";
import Link from "next/link";
import { BrandLockup } from "@/components/ui/BrandLockup";
import { SITE_CONFIG } from "@/content/site-config";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  const navLinks = [
    { label: "Product", href: "/" },
    { label: "Capabilities", href: "/#features" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Pricing", href: "/pricing" },
    { label: "Download", href: "/download" },
  ];

  return (
    <footer className="border-t border-slate-200/80 bg-white py-10 text-xs text-slate-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main Row: Brand Lockup + Authoritative One-Liner on Left, Clean Nav Links on Right */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="space-y-2 max-w-md">
            <BrandLockup size="sm" />
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              Autonomous financial verification and spreadsheet auditing on local Windows hardware.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-slate-950 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Sub-bar: Copyright on Left, Verified Security & Platform on Right */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 font-sans">
          <div>
            &copy; {new Date().getFullYear()} Mash. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 font-medium">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>100% On-Device Confidentiality · Windows 10 / 11 (64-bit)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
