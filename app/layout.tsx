import type { Metadata } from "next";
import "./globals.css";
import HeaderComponent from "@/components/layout/header";
import FooterComponent from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "PROSER",
  description: "Access all platform subscription within one place",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full grid flex-col grid-rows-3 dark">
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
