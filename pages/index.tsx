import WelcomeScreen from "@/components/WelcomeScreen";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/Layout";

export default function Home() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <>
      <AnimatePresence initial={false}>
        {showWelcomeScreen && (
          <motion.div
            exit={{
              x: [-20, 10, -10, 20, 5, -20, -5, 10],
              y: [0, 10, 5, -5, 0, 10, -20, 5],
              opacity: [1, 0, 1, 0, 1, 0, 1, 0],
            }}
            transition={{ duration: 0.2, type: "keyframes" }}
            onAnimationComplete={() => setShowMainContent(true)}
          >
            <WelcomeScreen setShowWelcomeScreen={setShowWelcomeScreen} />
          </motion.div>
        )}
      </AnimatePresence>
      {showMainContent && <Layout>.</Layout>}
    </>
  );
}
