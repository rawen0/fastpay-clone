import { LinkProps } from "@/types";
import { Clapperboard, Info } from "lucide-react";

export default [
  {
    label: "help center",
    Icon: Info,
    href: "help",
  },
  {
    label: "how to videos",
    Icon: Clapperboard,
    href: "how-to-videos",
  },
] as LinkProps[];
