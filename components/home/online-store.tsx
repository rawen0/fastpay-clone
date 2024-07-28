import ThreeColCard from "@/components/three-col-card";
import { links } from "@/constants/online-store";
import LinkCard from "../link-card";

type Props = {};

const OnlineStore = (props: Props) => {
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

export default OnlineStore;
