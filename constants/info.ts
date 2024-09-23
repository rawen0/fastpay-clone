import { LinkProps } from "@/types";
import { Globe, Headphones, Mail, MapPinned } from "lucide-react";
export default [
  {
    Icon: Headphones,
    label: "06623100000",
  },
  {
    Icon: Mail,
    label: "info@fast-pay.iq",
  },
  {
    Icon: Globe,
    label: "www.fast-pay.iq",
  },
  {
    Icon: MapPinned,
    label:
      "Allai Newroz Group Building, Baherka Road, Erbil Kurdistan, 44001, Iraq",
  },
] as Omit<LinkProps, "href">[];