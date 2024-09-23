import Search from "@/components/search";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  placeHolder?: string;
  hideSearch?: boolean;
  className?: string;
};

const Heading = ({
  title,
  placeHolder,
  hideSearch = false,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        "col-span-12 max-sm:flex-col space-y-2 flex w-full items-center",
        className
      )}
    >
      <h2 className="mr-auto max-sm:text-lg capitalize font-medium text-xl text-[var(--primary-text)]">
        {title}
      </h2>
      {!hideSearch && (
        <Search
          placeholder={placeHolder}
          className=" ml-auto w-full sm:w-1/3"
        />
      )}
    </div>
  );
};

export default Heading;
