import { links } from "@/constants/sticky-nav-links";
import LinkCard from "@/components/link-card";
import { QrCode } from "lucide-react";

type Props = {};

const StickyNav = (props: Props) => {
  return (
    <div className="uppercase w-full text-sm max-sm:text-xxs  rounded-md bg-[#E2EBEF] sticky bottom-0 lg:bottom-5 lg:w-1/2 lg:left-1/2 lg:-translate-x-1/2">
      <div className="flex items-center justify-between mr-3">
        {links.map((link) => (
          <LinkCard
            key={link.label}
            link={link}
            className={
              link.Icon == QrCode
                ? "bg-transparent w-full -mt-3 z-20  before:-z-10 before:left-1/2 before:transform before:-translate-x-1/2 before:bg-[var(--primary-text)] before:size-full before:rounded-full before:absolute "
                : "bg-transparent p-1 w-[12ch]"
            }
            childClassName={
              link.Icon == QrCode ? "bg-transparent  stroke-white p-1" : "p-1"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default StickyNav;
