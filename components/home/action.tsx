import { actions } from "@/constants/action";
import ThreeColCard from "../three-col-card";

type Props = {};

const Action = (props: Props) => {
  return (
    <ThreeColCard>
      {actions.map((action) => (
        <div
          key={action.label}
          className="truncate  bg-[#EFF6F8]  rounded flex flex-col items-center justify-center p-2 sm:p-4"
        >
          <div className=" rounded-full bg-[#E2EBEF] p-4">
            {<action.Icon className="size-8 stroke-[#446187] max-sm:size-5" />}
          </div>
          <span className="text-nowrap whitespace-nowrap text-[#2F496B]">
            {action.label}
          </span>
        </div>
      ))}
    </ThreeColCard>
  );
};

export default Action;
