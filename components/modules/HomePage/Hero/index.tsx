"use client";
import ShapeGrid from "@/components/ShapeGrid";
import { Button } from "@/components/ui/button";
import { CaretDownIcon } from "@phosphor-icons/react";

const HomePageHeroSection = () => {
  return (
    <div style={{ width: '100%', height: '1200px', position: 'relative' }}>
      <ShapeGrid
        speed={0.5}
        squareSize={40}
        direction='diagonal'
        borderColor="#303030"
        hoverFillColor='#222'
        shape='square'
        hoverTrailAmount={0}
        hoverColor="#222222"
        size={40}
      />
      <div className="absolute inset-0 border border-t-0 h-full grid align-items-center items-center justify-center justify-items-center">
        <div className="content flex flex-col items-center-safe gap-16">
          <div className="pill h-fit bg-fuchsia-950/10 backdrop-blur-lg rounded-full flex items-center gap-3 pl-2 py-2 pr-4 border">
            <span className="bg-white text-black py-1 px-3 font-semibold text-sm rounded-full">NEW</span>
            <h4 className="text-zinc-300 font-bold">
              <span className="text-foreground">DESERT EAGLE</span> <span className="text-muted-foreground">9mm</span>
            </h4>
          </div>
          <div className="hero__moto text-3xl font-bold text-center">
            <h2 className="text-6xl underline m-0 blackops font-semibold bg-background py-1 w-fit px-3 rounded-xs mx-auto">ON-LOAD</h2>
            <h4 className="jetbrains leading-10 mt-3 bg-transparent backdrop-blur-3xl p-1 rounded-xl text-foreground ">Choose and Load Your Weapons Online. <br /> We Will Take Care Of Cups</h4>
          </div>
          <div className="buttons flex gap-4">
            <Button role="link" variant={"white"} size={"xl"} className={"rounded-sm"}>
              See Products
            </Button>
            <Button variant={"blur"} size={"xl"} className={"rounded-sm"}>
              Learn More
            </Button>
          </div>
          <a href="#products__h3" className="bg-foreground p-2 text-background rounded-lg animate-bounce cursor-pointer">
            <CaretDownIcon className="size-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeroSection;
