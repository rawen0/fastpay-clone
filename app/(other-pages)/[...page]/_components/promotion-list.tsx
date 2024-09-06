import Image from "next/image";
import { GridItem } from "./grid";

type Props = {};

const PromotionList = (props: Props) => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <GridItem className="bg-transparent p-0">
          <Image
            alt="promotion image"
            src="/ads.jpg"
            width={200}
            height={100}
            className="w-full h-36"
          />
        </GridItem>
      ))}
    </>
  );
};

export default PromotionList;
