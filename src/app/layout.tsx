import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSemiBold = Inter({ 
  subsets: ["latin"],
  weight: ["600"], // Semi Bold weight
  display: "swap",
  variable: "--font-inter-semibold",
});

const interRegular = Inter({ 
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-inter-regular",
});

export const metadata: Metadata = {
  title: "Bitcoin (BTC) Price, Charts, and News | CoinMarketCap",
  description: "Get detailed information about Bitcoin including price, market cap, volume, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSemiBold.variable} ${interRegular.variable} font-sans bg-[#0d1421]`}>{children}</body>
    </html>
  );
} 