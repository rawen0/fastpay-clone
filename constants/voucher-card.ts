import { LinkProps } from "@/types";
import { Coins, Gift, Wifi } from "lucide-react";

export default [
  {
    label: "mobile card",
    Icon: Coins,
    href: "mobile-card",
  },
  {
    label: "internet card",
    Icon: Wifi,
    href: "internet-card",
  },
  {
    label: "online card",
    Icon: Gift,
    href: "online-card",
  },
] as LinkProps[];
