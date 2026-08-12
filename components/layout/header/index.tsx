"use client";
import HeaderDialog from "@/components/modules/Header/HeaderDialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MoonIcon, StarFourIcon, SunIcon } from "@phosphor-icons/react";
import HeaderBasketComponent from "@/components/modules/Header/HeaderBasket";
import HeaderSearchInputComponent from "@/components/modules/Header/HeaderSearchInput";
import { cn } from "@/lib/utils";

const HeaderComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDarkMode(document.body.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setIsDarkMode(document.body.classList.contains("dark"));
  };

  return (
    <div className={cn("fixed left-0 right-0 top-0 z-2 transition-all duration-500 ease-in-out", scrollY >= 50 && '-top-9')}>
      <div className="banner bg-background text-foreground py-2 grid justify-center">
        <span className="flex items-center gap-3 text-sm font-bold"><StarFourIcon weight="fill" className="text-yellow-500 size-5" /> 30% OFF FOR 4TH OF JULY</span>
      </div>
      <div className="bg-white/10 w-full backdrop-blur-2xl py-1.5 border-1 border-muted shadow-xs shadow-muted grid grid-cols-2 items-center justify-between rounded-none mx-auto px-6">
        <div className="flex gap-4 items-center" id="LOGO">
          <h2 className="text-3xl m-0 blackops text-background grid items-center h-fit bg-foreground px-4 py-1 mix-blend-difference font-semibold">ON-LOAD</h2>
        </div>
        <div className="flex gap-2 justify-self-end">
          <HeaderSearchInputComponent />
          <Separator orientation="vertical" />

          <Button onClick={toggleDarkMode} variant="ghost" size="icon" className="p-3">
            {isDarkMode ? <SunIcon className="size-6" /> : <MoonIcon className="size-6" />}
          </Button>

          <Separator orientation="vertical" />
          <HeaderBasketComponent />

          <Separator orientation="vertical" />
          <HeaderDialog mode="LOGIN" />
          <HeaderDialog mode="SIGNUP" />
        </div>
      </div>
      <nav className="bg-background pt-2 pb-1 flex items-center justify-around text-xs">
        <a href="#CATEGORIES" className="underline decoration-2 border-foreground underline-offset-6">Categories</a>
        <a href="#" className="">Products</a>
        <a href="#" className="">Outlet</a>
        <a href="#FREQUENTLY_ADDED" className="">Frequently Added</a>
        <a href="#" className="">Subscribe</a>
        <a href="#" className="">Become A Seller</a>
      </nav>
    </div>

  );
};

export default HeaderComponent;
