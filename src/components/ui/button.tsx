import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Updated button variants with outline-to-fill effect on hover
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#4E9F3D] text-white hover:bg-[#3D8F2C]", // Soothing green
        destructive: "bg-[#F76C6C] text-white hover:bg-[#E55A5A]", // Soft red for destructive
        outline: "border border-[#007BFF] text-[#007BFF] bg-transparent hover:bg-[#007BFF] hover:text-white", // Blue outline with fill on hover
        secondary: "bg-[#92A9BD] text-white hover:bg-[#7C9CBC]", // Calming blue tone
        ghost: "hover:bg-gray-100 hover:text-gray-800", // Subtle ghost hover
        link: "text-[#007BFF] underline-offset-4 hover:underline", // Blue for links
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "outline", // Default variant set to outline
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
