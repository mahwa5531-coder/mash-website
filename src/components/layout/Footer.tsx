import * as React from "react";
import Link from "next/link";
import { BrandLockup } from "@/components/ui/BrandLockup";
import { SITE_CONFIG } from "@/content/site-config";

export function Footer() {
  const platformLinks = [
    { label: "Product Overview", href: "/" },
    { label: "Capabilities", href: "/#features" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Pricing & Plans", href: "/pricing" },
    { label: "Download for Windows", href: "/download" },
  ];

  const policyLinks = [
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cancellation & Refund", href: "/policies" },
  ];

  return (
    <footer className="border-t border-slate-200/80 bg-white py-12 text-xs text-slate-500 font-sans">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-100">
          {/* Column 1: Brand & Executive One-Liner */}
          <div className="space-y-3 md:col-span-2 max-w-sm">
            <BrandLockup size="sm" />
            <p className="text-xs text-slate-500 leading-relaxed">
              Autonomous financial verification and spreadsheet auditing on local Windows hardware.
            </p>
          </div>

          {/* Column 2: Platform Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 tracking-tight">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium text-slate-900 hover:text-slate-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Terms & Policies (OpenAI Pattern) */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 tracking-tight">
              Terms &amp; Policies
            </h4>
            <ul className="space-y-2.5">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium text-slate-900 hover:text-slate-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.supportEmail}`}
                  className="text-xs font-medium text-slate-900 hover:text-slate-600 transition-colors"
                >
                  Billing Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar: Copyright Only, Clean and Simple */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Mash. All rights reserved.
          </div>
          <div>
            <span>India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
