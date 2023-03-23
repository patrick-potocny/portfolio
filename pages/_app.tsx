import type { AppProps } from "next/app";
import "@/styles/global.scss";
import localFont from "next/font/local";
import { useState } from "react";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import  CustomAnimatePresence  from "@/lib/customAnimatePresence";

const mainFont = localFont({ src: "../public/fonts/monofonto.ttf", display: "swap"});

export default function App({ Component, pageProps }: AppProps) {
  const [seenWelcomePage, setSeenWelcomePage] = useState(false);

  return (
      <CustomAnimatePresence
        className={mainFont.className}
      >
        <SeenWelcomeScreenCtx.Provider value={{ seenWelcomePage, setSeenWelcomePage }}>
          <Component {...pageProps} />
        </SeenWelcomeScreenCtx.Provider>
        <div className="scanline" />
      </CustomAnimatePresence>
  );
}
