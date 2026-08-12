"use client";
import MoltenMetal from "@/components/MoltenMetal";
import { Button } from "@/components/ui/button";

const HomePageHeroSection = () => {
  return (
    <div style={{ width: "100%", height: "900px", position: "relative" }}>
      <MoltenMetal color1="#5227FF" color2="#FF9FFC" color3="#FFFFFF" speed={0.35} scale={4} detail={3} glow={1.6} coreSize={0.1} swirl={1} fold={-0.2} blackPoint={0.05} brightness={1.3} colorMode="molten" grain grainIntensity={0.05} mouseInteraction mouseStrength={0.3} opacity={1} className="relative" />
      <div className="absolute inset-0 border border-t-0 h-full grid align-items-center items-center justify-center justify-items-center">
        <div className="content flex flex-col items-center-safe gap-16">
          <div className="pill h-fit bg-fuchsia-950/10 backdrop-blur-lg rounded-full flex items-center gap-3 pl-2 py-2 pr-4 border">
            <span className="bg-white text-black py-1 px-3 font-semibold text-sm rounded-full">NEW</span>
            <h4 className="text-zinc-300 font-bold">SoundCloud Go+</h4>
          </div>
          <div className="hero__moto max-w-1/2 text-5xl font-bold text-center">
            <h4 className="jetbrains">ACCESS EVERY SUBSCRIPTION YOUT WANT IN JUST ON PLACE</h4>
          </div>
          <div className="buttons flex gap-4">
            <Button variant={"white"} size={"xl"} className={"rounded-sm"}>
              Get Started
            </Button>
            <Button variant={"blur"} size={"xl"} className={"rounded-sm"}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeroSection;
