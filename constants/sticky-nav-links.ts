import { LinkProps } from "@/types";
import { FileText, Home, QrCode, UserPlus, Waypoints } from "lucide-react";

export const links: LinkProps[] = [
  { label: "home", href: "/", Icon: Home },
  { label: "referral", href: "home", Icon: UserPlus },
  { label: "", href: "qrcode", Icon: QrCode },
  {
    label: "branches",
    href: "branches",
    Icon: Waypoints,
  },
  {
    label: "transaction",
    href: "transaction",
    Icon: FileText,
  },
];
