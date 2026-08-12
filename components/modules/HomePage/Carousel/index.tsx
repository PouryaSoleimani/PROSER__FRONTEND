import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const HomePageCarouselComponent = () => {
  return (
    <Carousel className="w-full my-12 drop-shadow-sm rounded-lg drop-shadow-accent outline-[8px] border-0 ring-0 outline-outline">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="border-none ">
            <div className="p-1">
              <Card className="rounded-sm border-none ring-0 ">
                <CardContent className="flex h-100 items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HomePageCarouselComponent;
