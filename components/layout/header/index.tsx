/* eslint-disable react-hooks/set-state-in-effect */
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
import useGlobalLoading from "@/store/globalLoading";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const location = usePathname();
  const isLoading = useGlobalLoading((s) => s.isLoading);
  const setLoadingFalse = useGlobalLoading((s) => s.setLoadingFalse);

  useEffect(() => {
    const raw = localStorage.getItem("dark");
    const isDarkLocalStorage = raw ? JSON.parse(raw) : false;

    if (isDarkLocalStorage == true) {
      document.body.classList.add("dark");
    }
    setIsDarkMode(isDarkLocalStorage);

    setTimeout(() => {
      setLoadingFalse();
    }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    const isDark = !!document.body.classList.contains("dark");
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("dark", JSON.stringify(isDark));
    setIsDarkMode(isDark);
  };

  // PROMOBAR SCROLL HANDLER
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY >= 50;
      setIsScrolled((prev: boolean) => {
        if (prev === scrolled) return prev;
        return scrolled;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // TOGGLE NAVBAR ACTIVE
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const toggleActiveNav = (e: any) => {
      document.querySelectorAll("header__anchor").forEach((item) => {
        item.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    };

    document.querySelectorAll(".header__anchor").forEach((item) => {
      item.addEventListener("click", toggleActiveNav);
    });

    return () => {
      document.querySelectorAll(".header__anchor").forEach((item) => {
        item.removeEventListener("click", toggleActiveNav);
      });
    };
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className={cn("fixed left-0 right-0 top-0 z-2 transition-all duration-500 ease-in-out", isScrolled && "-top-9")}>
          {/* PROMO BAR */}
          <div className="banner bg-black text-white py-2 grid justify-center">
            <span className="flex items-center gap-3 text-sm font-bold">
              <StarFourIcon weight="fill" className="text-yellow-500 size-5" /> 30% OFF FOR 4TH OF JULY
            </span>
          </div>

          {/* HEADER MAIN */}
          <div className="bg-accent/50 w-full backdrop-blur-3xl py-1.5 shadow-xs shadow-muted grid grid-cols-2 items-center justify-between rounded-none mx-auto px-24">
            {/* MAIN LEFT */}
            <Link href={"/"} className="flex gap-4 items-center" id="LOGO">
              <h2 className="text-3xl m-0 blackops text-background grid items-center h-fit bg-foreground px-4 py-1 font-semibold">ON-LOAD</h2>
            </Link>

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
          {location == "/" && (
            <nav className="bg-background border-b border-b-foreground/10 text-foreground font-semibold pt-2 pb-1 flex items-center justify-between px-25 text-xs">
              {navLinks.map((link) => (
                <a onClick={() => setActiveNav(link.href.replace("#", ""))} key={link.id} href={link.href} className={cn("header__anchor", link.href.replace("#", "") == activeNav && "active")}>
                  {link.text}
                </a>
              ))}
            </nav>
          )}
        </div>
      ) : (
        <div className="fixed min-h-vh inset-0 bg-black text-white flex items-center flex-col gap-6 justify-center z-3">
          <div className="loader">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          LOADING
        </div>
      )}
    </>
  );
};

export default HeaderComponent;

const navLinks = [
  { id: 1, text: "Categories", href: "#CATEGORIES" },
  { id: 2, text: "Products", href: "#PRODUCTS" },
  { id: 3, text: "Outlet", href: "#OUTLET" },
  { id: 4, text: "Frequently Added", href: "#FREQUENTLY_ADDED" },
  { id: 5, text: "Subscribe", href: "#SUBSCRIBE" },
  { id: 6, text: "Become A Seller", href: "#BECOME" },
];
