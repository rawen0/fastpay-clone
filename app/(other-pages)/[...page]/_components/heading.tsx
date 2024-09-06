import Search from "@/components/search";

type Props = {
  title: string;
  placeHolder?: string;
};

const Heading = ({ title, placeHolder }: Props) => {
  return (
    <div className="col-span-12 max-sm:flex-col space-y-2 flex w-full items-center">
      <h2 className="mr-auto max-sm:text-lg capitalize font-medium text-xl text-[var(--primary-text)]">
        {title}
      </h2>
      <Search
        placeholder={placeHolder}
        className=" ml-auto w-full sm:w-1/3"
      />
    </div>
  );
};

export default Heading;
