import WelcomeScreen from "@/components/WelcomeScreen";
import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/Layout";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";

// Shows the welcome page only when user first visits the site or refreshes
// the page. Otherwise, it shows the homepage.
export default function Home() {
  const { seenWelcomePage, setSeenWelcomePage } =
    useContext(SeenWelcomeScreenCtx);

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {!seenWelcomePage ? (
          <motion.div
            key={"welcomeScreen"}
            exit={{
              x: [-20, 10, -10, 20, 5, -20, -5, 10],
              y: [0, 10, 5, -5, 0, 10, -20, 5],
              opacity: [1, 0, 1, 0, 1, 0, 1, 0],
            }}
            transition={{ duration: 0.2, type: "keyframes" }}
          >
            <WelcomeScreen setSeenWelcomePage={setSeenWelcomePage} />
          </motion.div>
        ) : (
          <Layout>.</Layout>
        )}
      </AnimatePresence>
    </>
  );
}
