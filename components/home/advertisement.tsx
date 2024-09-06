import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const AdsCarousel = () => {
  /* API call to get carousel content */
  return (
    <div className="col-span-12 lg:col-start-3 w-full rounded  lg:col-span-8">
      <Carousel className="w-full  col-span-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              {/* link to promotions/[] */}
              <Link href="#">
                <Image
                  width={500}
                  height={500}
                  alt=""
                  src={"/ads.jpg"}
                  priority
                  className="w-full aspect-[18/6] rounded"
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AdsCarousel;
