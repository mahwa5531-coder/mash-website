import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        // High-craft Primary Obsidian: Subtle top-to-bottom tactile gradient with top-edge inset highlight
        default:
          "bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-white border border-slate-950/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),0_1px_2px_rgba(0,0,0,0.14),0_4px_12px_rgba(15,23,42,0.08)] hover:from-slate-750 hover:to-slate-900 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_2px_4px_rgba(0,0,0,0.18),0_6px_16px_rgba(15,23,42,0.12)] active:from-slate-950 active:to-slate-950 active:scale-[0.985] active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]",
        primary:
          "bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-white border border-slate-950/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),0_1px_2px_rgba(0,0,0,0.14),0_4px_12px_rgba(15,23,42,0.08)] hover:from-slate-750 hover:to-slate-900 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_2px_4px_rgba(0,0,0,0.18),0_6px_16px_rgba(15,23,42,0.12)] active:from-slate-950 active:to-slate-950 active:scale-[0.985] active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]",
        // Polished White Surface Card Button: Crisp hairline border with subtle elevation
        secondary:
          "bg-white text-slate-800 border border-slate-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-slate-50 hover:border-slate-300 hover:text-slate-950 hover:shadow-[0_2px_5px_rgba(0,0,0,0.08)] active:bg-slate-100 active:scale-[0.985]",
        outline:
          "border border-slate-200/90 bg-transparent text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 active:scale-[0.985]",
        ghost:
          "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 active:scale-[0.985]",
        link:
          "text-slate-900 underline-offset-4 hover:underline",
        // Emerald Trust Anchor: Reserved for verified confirmations
        emerald:
          "bg-gradient-to-b from-emerald-600 to-emerald-700 text-white border border-emerald-800/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.12)] hover:from-emerald-500 hover:to-emerald-600 active:scale-[0.985]",
      },
      size: {
        default: "h-9 rounded-lg px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-[11px]",
        md: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-12 rounded-xl px-6 text-sm font-semibold tracking-tight",
        icon: "h-8 w-8 rounded-lg p-0 shrink-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
