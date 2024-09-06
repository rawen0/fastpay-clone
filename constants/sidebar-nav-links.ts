import { LinkProps } from "@/types";
import {
  Calculator,
  FileText,
  LifeBuoy,
  Power,
  Settings,
  Tags,
  User2,
} from "lucide-react";

export default [
  {
    label: "my account",
    href: "#",
    Icon: User2,
  },
  {
    label: "transaction history",
    href: "#",
    Icon: FileText,
  },
  {
    label: "limits",
    href: "#",
    Icon: Calculator,
  },
  {
    label: "promotions",
    href: "#",
    Icon: Tags,
  },
  {
    label: "app settings",
    href: "#",
    Icon: Settings,
  },
  {
    label: "support/help",
    href: "#",
    Icon: LifeBuoy,
  },
  {
    label: "log out",
    href: "#",
    Icon: Power,
  },
] as LinkProps[];
