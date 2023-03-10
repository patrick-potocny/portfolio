import type { AppProps } from "next/app";
import "@/styles/global.scss";
import localFont from "next/font/local";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";

const mainFont = localFont({ src: "../public/fonts/monofonto.ttf" });

export default function App({ Component, pageProps }: AppProps) {
  const [seenWelcomePage, setSeenWelcomePage] = useState(false);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={Component.name}
        initial={{ opacity: 0, x: 0 }}
        animate={{
          opacity: [0.2, 0, 0.4, 0, 0.6, 0, 0.8, 0, 1],
          y: [0, 20, -10, 10, 0, 20, -40, 20, 0],
          x: [0, 20, -10, 10, 0, 20, -40, 20, 0],
        }}
        exit={{
          opacity: [0.2, 0, 0.4, 0, 0.6, 0, 0.8, 0, 1],
          y: [0, 20, -10, 10, 0, 20, -40, 20, 0],
          x: [0, 20, -10, 10, 0, 20, -40, 20, 0],
        }}
        transition={{ duration: 0.1, type: "keyframes" }}
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
