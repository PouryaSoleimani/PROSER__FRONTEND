"use client";
import HeaderDialog from "@/components/modules/Header/HeaderDialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import HeaderBasketComponent from "@/components/modules/Header/HeaderBasket";

const HeaderComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDarkMode(document.body.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setIsDarkMode(document.body.classList.contains("dark"));
  };

  return (
    <div className="bg-white/10 mt-2 w-8/12 backdrop-blur-2xl fixed left-0 right-0 top-2 z-2 py-1.5 border-1 border-muted shadow-xs shadow-muted grid grid-cols-2 items-center justify-between rounded-none mx-auto px-2.5">
      <div className="flex gap-4 items-center" id="LOGO">
        <h2 className="text-3xl m-0 blackops font-semibold">ON-LOAD</h2>
      </div>
      <div className="flex gap-2 justify-self-end">
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
  );
};

export default HeaderComponent;
