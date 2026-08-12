/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import HeaderDialog from "@/components/modules/Header/HeaderDialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MoonIcon, StarFourIcon, SunIcon } from "@phosphor-icons/react";
import HeaderBasketComponent from "@/components/modules/Header/HeaderBasket";
import HeaderSearchInputComponent from "@/components/modules/Header/HeaderSearchInput";
import { cn } from "@/lib/utils";
import HeaderSheetComponent from "@/components/modules/Header/HeaderSheet";

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

  useEffect(() => {
    const toggleActiveNav = (e: any) => {
      document.querySelectorAll("a").forEach(item => {
        item.classList.remove('active')
      })
      e.currentTarget.classList.add('active')
    }

    document.querySelectorAll('.header__anchor').forEach(item => {
      item.addEventListener('click', toggleActiveNav)
    })

    return () => {
      document.querySelectorAll('.header__anchor').forEach(item => {
        item.removeEventListener('click', toggleActiveNav)
      })
    }
  }, [])

  return (
    <div className={cn("fixed left-0 right-0 top-0 z-2 transition-all duration-500 ease-in-out", scrollY >= 50 && '-top-9')}>
      {/* PROMO BAR */}
      <div className="banner bg-black text-white py-2 grid justify-center">
        <span className="flex items-center gap-3 text-sm font-bold"><StarFourIcon weight="fill" className="text-yellow-500 size-5" /> 30% OFF FOR 4TH OF JULY</span>
      </div>

      {/* HEADER MAIN */}
      <div className="bg-accent/30 w-full backdrop-blur-2xl py-1.5 shadow-xs shadow-muted grid grid-cols-2 items-center justify-between rounded-none mx-auto px-24">
        {/* MAIN LEFT */}
        <div className="flex gap-4 items-center" id="LOGO">
          <h2 className="text-3xl m-0 blackops text-background grid items-center h-fit bg-foreground px-4 py-1 mix-blend-difference font-semibold">ON-LOAD</h2>
        </div>

        {/* MAIN RIGHT */}
        <div className="flex gap-2 justify-self-end">

          <HeaderSearchInputComponent />
          <Separator orientation="vertical" />

          <HeaderSheetComponent />
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

      {/* BOTTOM NAV */}
      <nav className="bg-black text-white pt-2 pb-1 flex items-center justify-between px-25 text-xs">
        <a href="#CATEGORIES" className="header__anchor">Categories</a>
        <a href="#" className="header__anchor">Products</a>
        <a href="#" className="header__anchor">Outlet</a>
        <a href="#FREQUENTLY_ADDED" className="header__anchor">Frequently Added</a>
        <a href="#" className="header__anchor">Subscribe</a>
        <a href="#" className="header__anchor">Become A Seller</a>
      </nav>
    </div>

  );
};

export default HeaderComponent;
