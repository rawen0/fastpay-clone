import Image from "next/image";
import { GridItem } from "./grid";
import Link from "next/link";
import { Globe } from "lucide-react";

type Props = {
  url: string;
};

const ShopList = (props: Props) => {
  /* 'url' can be used when use API */
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => {
        const shop = [
          {
            title: "remeego LTD",
            img: "remeego.png",
            link: "https://rameego.com",
          },
          {
            title: "titan express",
            img: "titanexpress.png",
            link: "https://titanexpress.net",
          },
          {
            title: "dargakan",
            img: "dargakan.svg",
            link: "https://dargakan.net",
          },
        ][Math.round(Math.random() * 2)];
        return (
          <GridItem
            key={i}
            className="flex sm:col-span-full lg:col-span-4 col-span-full items-center justify-between"
          >
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Image
                width={300}
                height={188}
                className="size-10 sm:size-20 "
                src={"/" + shop.img}
                alt="shop image"
                priority
                draggable="false"
              />

              <div className="text-left overflow-hidden">
                <h3 className="text-sm text-[#1d2341]">{shop.title}</h3>
                <p className="text-[#1d2341] opacity-70  text-xs sm:text-sm">
                  {shop.link}
                </p>
              </div>
            </div>
            <Link
              href={shop.link}
              target="_blank"
              className="text-sm ml-auto flex items-center space-x-1 text-nowrap text-blue-400"
            >
              <Globe className="inline size-4" />
              <span>Visit Website</span>
            </Link>
          </GridItem>
        );
      })}
    </>
  );
};
export default ShopList;
