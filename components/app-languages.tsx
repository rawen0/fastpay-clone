import { languages } from "@/constants/languages";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {};

const ACTIVE_LANGUAGE = "english";

const AppLanguages = (props: Props) => {
  return languages.map((l, i) => (
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
  ));
};

export default AppLanguages;
