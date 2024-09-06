import { Send, Wallet, HandCoins, Mail, Truck, ScrollText } from "lucide-react";
import { LinkProps } from "@/types";

interface ActionProps extends Omit<LinkProps, "href"> {
  onclick: Function;
}
export default [
  {
    label: "send",
    Icon: Send,
    onclick: () => {
      console.log("🚀 ~ ():", "clicked");
    },
  },
  {
    label: "deposit",
    Icon: Wallet,
    onclick: () => {
      console.log("🚀 ~ ():", "clicked");
    },
  },
  {
    label: "withdraw",
    Icon: HandCoins,
    onclick: () => {
      console.log("🚀 ~ ():", "clicked");
    },
  },
  {
    label: "request",
    Icon: Mail,
    onclick: () => {
      console.log("🚀 ~ ():", "clicked");
    },
  },
  {
    label: "request mandoob",
    Icon: Truck,
    onclick: () => {
      console.log("🚀 ~ ():", "clicked");
    },
  },
  {
    label: "pay bills",
    Icon: ScrollText,
    onclick: () => {
      console.log("🚀 ~ ():", "clicked");
    },
  },
] as ActionProps[];
