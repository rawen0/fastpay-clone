import languages from "@/constants/languages";
import { cn } from "@/lib/utils";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  isDropDown?: boolean;
};

/* TODO: make it dynamic get value from url */
const ACTIVE_LANGUAGE = "english";

const AppLanguages = ({ isDropDown }: Props) => {
  return isDropDown ? (
    <Select>
      <SelectTrigger className="w-[90px]">
        <SelectValue placeholder={ACTIVE_LANGUAGE} />
      </SelectTrigger>
      <SelectContent
        align="center"
        className="w-[90px] min-w-[90px]"
      >
        {languages.map((l, i) => (
          <SelectItem
            key={i}
            value={l}
            className="pr-0 pl-0 justify-center"
          >
            <Link
              href={"#"}
              className={cn("text-xs capitalize")}
            >
              {l}
            </Link>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ) : (
    languages.map((l, i) => (
      <Link
        key={i}
        href={"#"}
        className={cn(
          "rounded-full px-4 sm:px-6 py-2 text-center text-xs capitalize",
          ACTIVE_LANGUAGE == l
            ? "bg-[var(--primary-text)] text-neutral-100"
            : "bg-slate-100 text-black/40"
        )}
      >
        {l}
      </Link>
    ))
  );
};

export default AppLanguages;
