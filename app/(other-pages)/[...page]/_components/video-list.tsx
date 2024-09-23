import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GridItem } from "./grid";

type Props = {};

const VideoList = (props: Props) => {
  return (
    <>
      {Array.from({ length: 2 }).map((_, i) => (
        <GridItem
          className="bg-transparent lg:col-span-4"
          key={i}
        >
          <Card className="bg-[#EFF6F8] shadow-none border-0 rounded-none">
            <iframe
              className="w-full sm:h-52"
              src={
                [
                  "https://www.youtube.com/embed/S84cUVfu9xw?si=fW6z-p_crB5aEpxk",
                  "https://www.youtube.com/embed/S42yQl678Sc?si=3-FNdB6c1UgBEe4O",
                ][i % 2]
              }
              title={
                [
                  "How to open a Fastpay account",
                  "How to deposit and withdraw cash in Fastpay",
                ][i % 2]
              }
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <CardFooter className="pt-5 font-mono">
              {
                [
                  "How to open a Fastpay account",
                  "Deposit and Withdraw",
                ][i % 2]
              }
            </CardFooter>
          </Card>
        </GridItem>
      ))}
    </>
  );
};

export default VideoList;
