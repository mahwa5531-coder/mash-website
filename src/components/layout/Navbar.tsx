import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLockup } from "@/components/ui/BrandLockup";
import { SITE_CONFIG } from "@/content/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const router = useRouter();

  const navLinks = [
    { label: "Product", href: "/" },
    { label: "Capabilities", href: "/#features" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Pricing & Plans", href: "/pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-[#FCFCFD]/90 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Unified Brand Lockup */}
        <div className="flex items-center gap-3">
          <BrandLockup size="default" />
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 rounded-md transition-colors",
                  isActive
                    ? "text-slate-900 font-semibold bg-slate-100/80"
                    : "hover:text-slate-900 hover:bg-slate-100/60"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Download CTA */}
        <div className="flex items-center gap-3">
          <Link href="/download" className="hidden sm:inline-block">
            <Button size="sm" variant="default" className="gap-2 font-medium shadow-xs text-xs h-9 px-4 bg-slate-900 hover:bg-slate-800">
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/download"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-900 text-white font-medium text-xs shadow-sm"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download for Windows</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
