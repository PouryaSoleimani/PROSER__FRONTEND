import type { Metadata } from "next";
import "./globals.css";
import HeaderComponent from "@/components/layout/header";
import FooterComponent from "@/components/layout/footer";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata: Metadata = {
  title: "PROSER",
  description: "Access all platform subscription within one place",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", "font-mono", jetbrainsMono.variable)}>
      <body className="min-h-full grid flex-col grid-rows-3 dark">
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
