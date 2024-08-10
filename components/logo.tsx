import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <Image
      className={cn("mr-auto ml-4", className)}
      width={80}
      height={20}
      src={"/logo.svg"}
      alt={"fast-pay logo"}
      priority
    />
  );
};

export default Logo;
