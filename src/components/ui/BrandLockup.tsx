import * as React from "react";
import Link from "next/link";
import { MashBrandIcon } from "@/components/ui/MashBrandIcon";
import { cn } from "@/lib/utils";

interface BrandLockupProps {
  size?: "sm" | "default" | "lg";
  href?: string;
  className?: string;
}

export function BrandLockup({
  size = "default",
  href = "/",
  className,
}: BrandLockupProps) {
  const iconSize = size === "sm" ? 22 : size === "lg" ? 32 : 26;
  const textSize = size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base";

  const content = (
    <div
      className={cn(
        "group inline-flex items-center gap-2.5 select-none transition-all duration-150 cursor-pointer",
        className
      )}
    >
      <MashBrandIcon
        size={iconSize}
        className="transition-transform duration-200 group-hover:scale-105 shrink-0"
      />
      <span
        className={cn(
          "font-bold text-slate-900 tracking-[-0.03em] font-sans transition-colors group-hover:text-slate-950",
          textSize
        )}
      >
        Mash
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
}
