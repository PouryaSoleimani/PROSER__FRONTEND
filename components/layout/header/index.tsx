"use client";
import Image from "next/image";
import LOGO from "@/public/logo.png";
import HeaderDialog from "@/components/modules/Header/HeaderDialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

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
    <div className="bg-accent/50 mt-2 w-11/12 backdrop-blur-xl sticky top-2 z-2 py-2 outline-4 outline-outline grid grid-cols-2 items-center justify-between rounded-lg mx-auto px-16">
      <div className="flex gap-4 items-center" id="LOGO">
        <Image src={LOGO} width={30} alt="logo" className="-translate-y-0.5" />
        <h2 className="text-3xl m-0 jetbrains font-semibold">PROSER</h2>
      </div>
      <div className="flex gap-2 justify-self-end">
        <Button onClick={toggleDarkMode} variant="ghost" size="icon" className="p-3">
          {isDarkMode ? <SunIcon className="size-6" /> : <MoonIcon className="size-6" />}
        </Button>
        <Separator orientation="vertical" />
        <HeaderDialog mode="LOGIN" />
        <HeaderDialog mode="SIGNUP" />
      </div>
    </div>
  );
};

export default HeaderComponent;
