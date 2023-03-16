import type { AppProps } from "next/app";
import "@/styles/global.scss";
import localFont from "next/font/local";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import { glitchAnimation } from "@/lib/utils";

const mainFont = localFont({ src: "../public/fonts/monofonto.ttf", display: "swap"});

export default function App({ Component, pageProps }: AppProps) {
  const [seenWelcomePage, setSeenWelcomePage] = useState(false);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={Component.name}
        initial={{ opacity: 0, x: 0 }}
        animate={glitchAnimation}
        exit={glitchAnimation}
        transition={{ duration: 0.2, type: "keyframes" }}
        className={mainFont.className}
      >
        <SeenWelcomeScreenCtx.Provider value={{ seenWelcomePage, setSeenWelcomePage }}>
          <Component {...pageProps} />
        </SeenWelcomeScreenCtx.Provider>
        <div className="scanline" />
      </motion.main>
    </AnimatePresence>
  );
}
