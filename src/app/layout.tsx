import "./globals.css";

import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Footer from "@/components/base/footer/footer";
import Header from "@/components/base/header/header";

// const inter = Inter({ subsets: ["latin"] });
const pretendard = localFont({
  src: "PretendardVariable.woff2",
  display: "swap",
});
export const metadata: Metadata = {
  title: "GRETA Inc.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
