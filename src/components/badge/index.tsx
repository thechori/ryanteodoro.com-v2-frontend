import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
//
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "mono inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium tracking-[0.05em]",
  {
    variants: {
      variant: {
        default: "bg-[var(--accent)] text-white border-transparent",
        secondary: "bg-[var(--accent-soft)] text-[var(--text-main)] border-[var(--line)]",
        tertiary: "bg-[var(--chip)] text-[var(--text-main)] border-[var(--line)]",
        destructive: "bg-red-500 text-white border-transparent",
        outline: "bg-transparent text-[var(--accent)] border-[var(--accent)]",
        outlineSecondary: "bg-[var(--chip)] text-[var(--text-main)] border-[var(--line)]"
      },
      size: {
        sm: "px-2 py-0.5 text-[11px]",
        md: "px-2.5 py-1 text-xs",
        lg: "px-3 py-1.5 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
