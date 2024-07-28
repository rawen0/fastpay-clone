import { links } from "@/constants/sticky-nav-links";
import LinkCard from "./link-card";
import { QrCode } from "lucide-react";

type Props = {};

const StickyNav = (props: Props) => {
  return (
    <div className="uppercase w-full text-sm max-sm:text-xxs  rounded-md bg-[#E2EBEF] sticky bottom-0 lg:bottom-5 lg:w-1/2 lg:left-1/2 lg:-translate-x-1/2">
      <div className="flex items-center justify-around ">
        {links.map((link) => (
          <LinkCard
            key={link.label}
            link={link}
            className={
              link.Icon == QrCode
                ? "bg-[var(--primary-text)] rounded-full ring-1 p-5 sm:p-5 -mt-2"
                : "bg-transparent p-1 sm:p-1"
            }
            childClassName={
              link.Icon == QrCode
                ? "bg-transparent p-1 sm:p-1  stroke-white"
                : "p-1 sm:p1"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default StickyNav;
