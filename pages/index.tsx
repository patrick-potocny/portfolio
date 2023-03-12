import WelcomeScreen from "@/components/WelcomeScreen";
import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/Layout";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import styles from "@/styles/pages/Home.module.scss";
import Image from "next/image";
import boyReading from "../public/images/boyComputer.png";
import Link from "next/link";
import SkillsRadar from "@/components/SkillsRadar";

// Shows the welcome screen only when user first visits the site or refreshes
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
          <Layout>
            <div className={styles.heroContainer}>
              <section className={styles.hero}>
                {/* <h1 className={styles.title}>Transforming ideas<br/>into digital realities</h1> */}
                <h1 className={styles.title}>
                  Looking for a <br />
                  <span className={styles.job}>
                    talented Front-End Developer ?
                  </span>
                  <br />
                  <span className={styles.stopLooking}>Look no further!</span>
                </h1>
                <p className={styles.introduction}>
                  <span className={styles.firstWord}>Hi</span>, I'm Patrik,
                  experienced Front-End Developer with a passion for creating
                  visually pleasing websites and web applications, that deliver
                  exceptional user experiences. Since knowledge is power, I'm
                  always looking for new challenges and opportunities to improve
                  my skills.
                </p>
                <p className={styles.introduction}>
                  To back up my claims, here are my most recent{" "}
                  <Link href="/projects" className={styles.link}>
                    PROJECTS
                  </Link>
                </p>
                <p className={styles.introduction}>
                  Want to learn more?{" "}
                  <Link href="/about" className={styles.link}>
                    ABOUT ME
                  </Link>
                </p>
              </section>
                <section className={styles.right}>
                  <SkillsRadar />
                </section>
            </div>
          </Layout>
        )}
      </AnimatePresence>
    </>
  );
}
