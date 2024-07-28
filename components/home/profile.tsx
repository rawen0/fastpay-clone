import Image from "next/image";
import QrCode from "../qr-code";
import { Info } from "lucide-react";

type Props = {};

const Profile = async (props: Props) => {
  await new Promise((r) => setTimeout(r, 3000));

  return (
    <div className="lg:col-start-3 w-full col-span-full lg:col-span-8  text-center">
      <div className="overflow-hidden relative w-full rounded-xl card-bg p-4 md:px-10 md:py-8 flex">
        <div className="z-20 w-full flex justify-between">
          <ProfileCard.Info />
          <ProfileCard.QRCode />
        </div>
        <ProfileCard.CardDecoration />
      </div>
    </div>
  );
};

const ProfileCard = {
  Info: () => (
    <div
      className="space-y-4"
      id="left-side"
    >
      <div className="flex space-x-2 md:space-x-3 justify-start items-center">
        <Image
          src={"/user.jpeg"}
          width={176}
          height={176}
          alt="user image"
          className="size-10 lg:size-32 2xl:size-40 rounded-full object-contain z-30 block ring ring-white"
          priority
        />
        <div className="flex flex-col sm:space-y-2 text-white items-start">
          <h2 className="font-semibold text-xs lg:text-2xl 2xl:text-4xl">
            Alexandra Bailey
          </h2>
          <h4 className="text-xxs lg:text-sm 2xl:text-base">
            +964 770 246 3176
          </h4>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <h3 className="max-sm:text-xxs text-base text-white/80 font-mono">
          Account Balance:
        </h3>
        <h2 className="max-sm:text-xl text-4xl font-bold text-white/95 after:text-xl after:max-sm:text-xxs after:content-['IQD']">
          20,580,270
        </h2>
      </div>
    </div>
  ),
  QRCode: () => (
    <div
      id="right-side"
      className="flex flex-col items-end justify-between"
    >
      <div className="max-sm:text-xxs text-neutral-200 font-mono flex gap-x-1 before:shadow-xl before:bg-gradient-to-t from-[#2F496B] via-[#ec0c47]  to-[var(--primary-text)] before:rounded-full before:size-5 before:max-sm:size-2 items-center before:block before:items-baseline before:content-['']">
        verified
      </div>
      <div className="bg-[#e5e5e5] flex items-center size-16 max-sm:size-10 rounded-xl p-2">
        <QrCode />
      </div>
    </div>
  ),
  CardDecoration: () => (
    <div className="w-full absolute bottom-0 left-0 ">
      <Image
        width={500}
        height={500}
        alt=""
        className="w-full absolute bottom-0 left-0"
        src={"/front.svg"}
        priority
      />
      <Image
        width={500}
        height={500}
        alt=""
        className="w-full "
        src={"/back.svg"}
        priority
      />
    </div>
  ),
};

export default Profile;
