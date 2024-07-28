import Action from "./home/action";
import { CarouselSize } from "./home/advertisement";
import HelpSupport from "./home/help-support";
import OnlineCard from "./home/online-card";
import OnlineStore from "./home/online-store";
import Profile from "./home/profile";

type Props = {};

const AppBody = (props: Props) => {
  return (
    <section className="grid grid-cols-12 justify-items-center gap-4 w-full sm:p-4 p-2 ">
      <Profile />
      <Action />
      <OnlineCard />
      <OnlineStore />
      <CarouselSize />
      <HelpSupport />
      {/* <div className="col-start-3  col-span-8 bg-blue-500 text-white text-center p-4">
        More Card
      </div> */}
    </section>
  );
};

export default AppBody;
