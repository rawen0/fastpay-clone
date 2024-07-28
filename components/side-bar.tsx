import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { CheckCircle2, Menu } from "lucide-react";
import Image from "next/image";
import SocialIcon from "./social-icon";
import SideNav from "./side-nav";
import AppLanguages from "./app-languages";

type Props = {};

const SHEET_SIDES = ["left", "right"] as const;

type Sidebar = (typeof SHEET_SIDES)[number];

const Sidebar = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu stroke="var(--dark-primary-text)" />
      </SheetTrigger>

      <SheetContent
        className="space-y-8 overflow-y-auto overflow-x-hidden"
        side={SHEET_SIDES[0]}
      >
        <SheetHeader className="flex-row text-left space-x-4 items-center w-full">
          <Image
            src={"/user.jpeg"}
            width={48}
            height={48}
            alt="user image"
            className="w-12 h-12 rounded"
            priority
          />
          <div>
            <SheetTitle className="font-semibold text-xs sm:text-sm">
              anya jhon
            </SheetTitle>
            <SheetDescription className="text-xs sm:text-sm">
              +964 770 246 3176
            </SheetDescription>
          </div>
          <CheckCircle2 className="!ml-auto w-4 h-4 stroke-green-300" />
        </SheetHeader>

        <components.AppNavigation />
        <components.AppLanguage />
        <components.AppSocial />

        <SheetFooter className="block text-center text-black/40 text-sm">
          FastPay Version 2.75
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

const components = {
  AppNavigation: () => (
    <div className="grid gap-4 py-4 text-xs">
      <SideNav />
    </div>
  ),
  AppLanguage: () => (
    <div className="space-y-4 text-sm">
      <h4 className="text-[var(--dark-primary-text)] opacity-70">
        App Language
      </h4>
      <div className="flex  gap-x-4 text-sm">
        <AppLanguages/>
      </div>
    </div>
  ),
  AppSocial: () => (
    <div className="space-y-4 text-sm">
      <h4 className="text-[var(--dark-primary-text)] opacity-70">Follow Us:</h4>
      <div className="flex  gap-x-8 text-sm">
        <SocialIcon />
      </div>
    </div>
  ),
};

export default Sidebar;
