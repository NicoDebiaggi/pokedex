import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/lib/ui/Navbar";

const monserratSans = Montserrat({
  variable: "--montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokedex",
  description: "A simple pokedex app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monserratSans.variable} flex flex-col min-h-screend max-w-md mx-auto`}
      >
        {children}
        <Navbar />
      </body>
    </html>
  );
}
