import { cn } from "@/lib/utils";
import React from "react";

const GridWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    className={cn(
      "lg:container p-2.5 grid grid-cols-12 gap-2 place-items-center",
      className
    )}
    {...props}
  />
));

const GridItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "w-full col-span-full sm:col-span-4 lg:col-span-3 bg-[#EFF6F8] p-3 text-center font-medium",
      className
    )}
    {...props}
  />
));

export { GridWrapper, GridItem };
