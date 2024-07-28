import Link from "next/link";
import ThreeColCard from "../three-col-card";
import { links } from "@/constants/help-support";
import LinkCard from "../link-card";

type Props = {};

const HelpSupport = (props: Props) => {
  return (
    <ThreeColCard title="Pay with FastPay">
      {links.map((link) => (
        <LinkCard
          key={link.label}
          link={link}
        />
      ))}
    </ThreeColCard>
  );
};

export default HelpSupport;
