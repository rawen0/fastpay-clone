import Image from "next/image";
import Link from "next/link";
import { GridItem } from "./grid";

type Props = {
  path: string;
};

const RechargeList = (props: Props) => {
  return Array.from({ length: 3 }).map((_, i) => {
    const img = ["asiacell.png", "zain.jfif"][Math.round(Math.random() * 1)];
    return (
      <GridItem
        key={i}
        className="col-span-6"
      >
        <Link
          href={`/${props.path}/${img.split(".")[0]}`}
          draggable="false"
        >
          <Image
            width={300}
            height={188}
            className="mx-auto mb-2 max-sm:max-h-28 max-h-36"
            src={"/" + img}
            alt="korek image"
            priority
            draggable="false"
          />
          <h3 className="text-[var(--dark-primary-text)]">
            {img.split(".")[0]}
          </h3>
        </Link>
      </GridItem>
    );
  });
};

export default RechargeList;
