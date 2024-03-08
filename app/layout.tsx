import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/layout/Hero";
import SmoothScroll from "./components/SmoothScroll";
import Script from "next/script";
import AnimatedCursor from "react-animated-cursor";
import gsap from "gsap";


const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "İnox",
  description: "Paslanmaz çelik imalatında sonsuz şıklık ve kaliteli üretim.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <AnimatedCursor
          innerSize={16}
          outerSize={32}
          outerScale={2}
          color="196,195,201"
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
          outerStyle={{
            border: "3px solid var #F2F3F3",
          }}
          innerStyle={{
            backgroundColor: "#FFFFFF",
          }}
        />
        <Navbar />
        <Hero />

        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
