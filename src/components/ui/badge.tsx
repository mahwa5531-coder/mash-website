import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors select-none",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white",
        secondary:
          "bg-slate-100 text-slate-700 border border-slate-200/80",
        outline:
          "border border-slate-200 text-slate-800 bg-white",
        verified:
          "bg-emerald-50 text-emerald-700 border border-emerald-200/80",
        terracotta:
          "bg-amber-50 text-[#C8522C] border border-amber-200/80",
        new:
          "bg-emerald-500 text-white font-semibold text-[10px] uppercase tracking-wider px-2 py-0.5",
        improved:
          "bg-blue-500 text-white font-semibold text-[10px] uppercase tracking-wider px-2 py-0.5",
        fix:
          "bg-slate-600 text-white font-semibold text-[10px] uppercase tracking-wider px-2 py-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
