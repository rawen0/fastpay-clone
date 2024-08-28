import { LinkProps } from "@/types";
import { ShoppingCart, Store, Volume1 } from "lucide-react";

export const links: LinkProps[] = [
  {
    label: "online store",
    Icon: ShoppingCart,
    href: "online-store",
  },
  {
    label: "shops",
    Icon: Store,
    href: "shops",
  },
  {
    label: "promotions",
    Icon: Volume1,
    href: "promotions",
  },
];
