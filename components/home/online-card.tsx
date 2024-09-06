import links from "@/constants/online-card";
import ThreeColCard from "@/components/three-col-card";
import LinkCard from "@/components/link-card";

type Props = {};

const OnlineCard = (props: Props) => {
  return (
    <ThreeColCard title="Recharge & gift cards">
      {links.map((link) => (
        <LinkCard
          key={link.label}
          link={link}
        />
      ))}
    </ThreeColCard>
  );
};

export default OnlineCard;
