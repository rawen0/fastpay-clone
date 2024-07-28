import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const ThreeColCard = ({ children, title }: Props) => {
  return (
    <Card className="uppercase col-span-12 lg:col-start-3 w-full rounded  lg:col-span-8 bg-[#E2EBEF] p-2 sm:p-4">
      {title && (
        <CardHeader className="p-0 pb-2">
          <CardTitle className="max-sm:text-xxs text-sm text-[var(--dark-primary-text]) opacity-40">
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className="p-0 grid grid-cols-3 gap-2 sm:gap-4 font-bold font-mono  text-xxs sm:text-base">
        {children}
      </CardContent>
    </Card>
  );
};

export default ThreeColCard;
