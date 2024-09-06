import links from "@/constants/voucher-card";
import ThreeColCard from "@/components/three-col-card";
import LinkCard from "@/components/link-card";

type Props = {};

const VoucherCard = (props: Props) => {
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

export default VoucherCard;
