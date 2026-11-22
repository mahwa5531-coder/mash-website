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
  const [isScrolled, setIsScrolled] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Product", href: "/" },
    { label: "Capabilities", href: "/#features" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Pricing & Plans", href: "/pricing" },
  ];

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 flex flex-col items-center px-4 sm:px-6 pointer-events-none">
      {/* Floating Island Capsule */}
      <div
        className={cn(
          "w-full max-w-4xl h-13 sm:h-14 rounded-full border px-4 sm:px-5 flex items-center justify-between pointer-events-auto transition-all duration-300",
          isScrolled
            ? "border-slate-200/90 bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)]"
            : "border-slate-200/70 bg-white/75 backdrop-blur-md shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
        )}
      >
        {/* Left: Brand Lockup */}
        <div className="flex items-center">
          <BrandLockup size="sm" />
        </div>

        {/* Center: Desktop Navigation Pills */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-1.5 rounded-full transition-all duration-150 font-sans",
                  isActive
                    ? "text-slate-950 font-semibold bg-slate-100/90 shadow-2xs"
                    : "hover:text-slate-950 hover:bg-slate-100/60"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Download CTA */}
        <div className="flex items-center gap-2.5">
          <Link href="/download" className="hidden sm:inline-block">
            <Button
              size="sm"
              variant="default"
              className="h-8 rounded-full px-4 text-xs font-medium gap-1.5 shadow-xs"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
            </Button>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Floating Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full max-w-sm mt-2 rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-xl p-4 shadow-xl space-y-2 pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/download"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 text-white font-medium text-xs shadow-sm hover:bg-slate-800 transition-colors"
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
