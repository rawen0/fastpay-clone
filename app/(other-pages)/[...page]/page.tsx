import { notFound } from "next/navigation";
import RechargeList from "./_components/recharge-list";
import { GridWrapper } from "./_components/grid";
import Heading from "./_components/heading";
import ShopList from "./_components/shops-list";
import PromotionList from "./_components/promotion-list";

type Props = {
  params: { page: string[] };
};

const ElectronicContents = ({ params }: Props) => {
  const { page } = params;

  switch (page[0]) {
    case "mobile-card":
    case "online-card":
    case "internet-card":
      return (
        <GridWrapper>
          <Heading title={`${page[0].replace("-", " ")}s`} />
          <RechargeList path={page[0]} />
        </GridWrapper>
      );

    case "shops":
    case "promotions":
    case "online-store":
      if (page[0] === "promotions")
        return (
          <GridWrapper>
            <Heading title="promotions" />
            <PromotionList />
          </GridWrapper>
        );

      return (
        <GridWrapper>
          <Heading
            title={
              page[0].includes("online")
                ? "online shops accept FastPay"
                : "shops accept FastPay"
            }
          />
          <ShopList url={page[0]} />
        </GridWrapper>
      );

    case "help":
    case "how-to-videos":
      return (
        <GridWrapper>
          <Heading title={page[0] === "help" ? "support" : "how to videos"} />
          {/* help & how to video component */}
        </GridWrapper>
      );

    default:
      return notFound();
  }
};

export default ElectronicContents;
