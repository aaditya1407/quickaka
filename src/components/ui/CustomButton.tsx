import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "text-white font-bold transition-colors duration-200 shadow-lg",
  {
    variants: {
      variant: {
        action: "bg-accent hover:bg-accent-dark shadow-accent/30",
        outline:
          "bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20",
      },
      size: {
        default: "px-8 py-3.5 rounded-xl text-sm",
        sm: "px-6 py-3 rounded-lg text-sm",
        lg: "px-10 py-4 rounded-xl text-base",
      },
    },
    defaultVariants: {
      variant: "action",
      size: "default",
    },
  },
);

type CustomButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
    asChild?: boolean;
  };

function CustomButton({
  className,
  variant,
  size,
  children,
  ...props
}: CustomButtonProps) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default CustomButton;
