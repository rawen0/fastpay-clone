import AccountTabs from "./_components/tabs/account";
import { notFound } from "next/navigation";
import RechargeList from "./_components/recharge-list";
import Heading from "./_components/heading";
import ShopList from "./_components/shops-list";
import PromotionList from "./_components/promotion-list";
import Help from "./_components/tabs/help";
import VideoList from "./_components/video-list";

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
        <>
          <Heading title={`${page[0].replace("-", " ")}s`} />
          <RechargeList path={page[0]} />
        </>
      );

    case "shops":
    case "promotions":
    case "online-store":
      if (page[0] === "promotions")
        return (
          <>
            <Heading title="promotions" />
            <PromotionList />
          </>
        );

      return (
        <>
          <Heading
            title={
              page[0].includes("online")
                ? "online shops accept FastPay"
                : "shops accept FastPay"
            }
          />
          <ShopList url={page[0]} />
        </>
      );

    case "help":
      return (
        <>
          <Heading
            hideSearch
            title="support"
            className="px-2.5"
          />
          <div className="col-span-12 h-[560px] max-sm:h-screen  rounded w-full bg-muted">
            <Help />
          </div>
        </>
      );
    case "how-to-videos":
      return (
        <>
          <Heading title="how to videos" />
          <VideoList />
        </>
      );

    case "account":
      return (
        <>
          <Heading
            hideSearch
            title="MY ACCOUNT"
          />
          <div className="col-span-12 h-[560px] max-sm:h-screen  rounded w-full bg-muted">
            <AccountTabs />
          </div>
        </>
      );
    default:
      return notFound();
  }
};

export default ElectronicContents;
