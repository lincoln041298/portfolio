import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const headingVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl md:text-3xl lg:text-4 xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);
interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

// eslint-disable-next-line react/display-name
const LargeHeading = forwardRef<HTMLParagraphElement, LargeHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(headingVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

LargeHeading.displayName = "LargeHeading";

export default LargeHeading;
