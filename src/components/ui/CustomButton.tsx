import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";

const buttonVariants = cva(
  "text-white font-bold transition-colors duration-200 shadow-lg",
  {
    variants: {
      variant: {
        action:
          "bg-accent hover:bg-accent-dark shadow-accent/30 cursor-pointer",
        outline:
          "bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 cursor-pointer",
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

type CustomButtonProps = HTMLMotionProps<"button"> &
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
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default CustomButton;
