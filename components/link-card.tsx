import { cn } from "@/lib/utils";
import { LinkProps } from "@/types";
import Link from "next/link";

type Props = {
  link: LinkProps;
  className?: string;
  childClassName?: string;
};

const LinkCard = ({ link, className, childClassName }: Props) => {
  return (
    <Link
      href={link.href}
      draggable={false}
    >
      <div
        className={cn(
          "bg-[#EFF6F8]  rounded flex flex-col items-center justify-center p-3 sm:p-4 relative",
          className
        )}
      >
        <div
          className={cn(
            "rounded-full bg-[#E2EBEF] p-4 flex flex-col items-center justify-center stroke-[#446187]",
            childClassName
          )}
        >
          {<link.Icon className="size-8  max-sm:size-5 stroke-inherit" />}
        </div>
        <span className={cn("text-nowrap whitespace-nowrap text-[#2F496B]")}>
          {link.label}
        </span>
      </div>
    </Link>
  );
};

export default LinkCard;
