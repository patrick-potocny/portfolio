import WelcomeScreen from "@/components/WelcomeScreen";
import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Layout from "@/components/Layout";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import styles from "@/styles/pages/Home.module.scss";
import Link from "next/link";
import SkillsRadar from "@/components/SkillsRadar";
import Typewriter from "@/components/Typewriter";
import { glitchAnimation } from "@/lib/utils";

// Shows the welcome screen only when user first visits the site or refreshes
// the page. Otherwise, it shows the homepage.
export default function Home() {
  const { seenWelcomePage, setSeenWelcomePage } =
    useContext(SeenWelcomeScreenCtx);
  const [partOne] = useState(true);
  const [partTwo, setPartTwo] = useState(false);
  const [partThree, setPartThree] = useState(false);
  const [partFour, setPartFour] = useState(false);
  const [showContent, setShowContent] = useState({});
  const commonProps = {
    initial: { opacity: 0, y: 20 },
    style: { opacity: 0, y: 20 },
    animate: showContent,
  };

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {!seenWelcomePage ? (
          <motion.div
            key={"welcomeScreen"}
            exit={glitchAnimation}
            transition={{ duration: 0.2, type: "keyframes" }}
          >
            <WelcomeScreen setSeenWelcomePage={setSeenWelcomePage} />
          </motion.div>
        ) : (
          <Layout>
            <div className={styles.heroContainer}>
              <section className={styles.hero}>
                <h1 className={styles.title}>
                  {partOne && (
                    <Typewriter
                      text="Looking for a"
                      onEnd={() => setPartTwo(true)}
                    />
                  )}
                  <br />
                  <span className={styles.job}>
                    <span className={styles.talented}>
                      {partTwo && (
                        <Typewriter
                          text="talented"
                          onEnd={() => setPartThree(true)}
                        />
                      )}
                    </span>{" "}
                    {partThree && (
                      <Typewriter
                        text="Front-End Developer ?"
                        onEnd={() => setPartFour(true)}
                      />
                    )}
                  </span>
                  <br />
                  <span className={styles.stopLooking}>
                    {partFour && (
                      <Typewriter
                        text="Look no further!"
                        onEnd={() => setShowContent({ opacity: 1, y: 0 })}
                      />
                    )}
                  </span>
                </h1>
                <motion.p
                  {...commonProps}
                  transition={{ duration: 1 }}
                  className={styles.introduction}
                >
                  <span className={styles.firstWord}>Hi</span>, I'm Patrik,
                  experienced Front-End Developer with a passion for creating
                  visually pleasing websites and web applications, that deliver
                  exceptional user experiences. Since knowledge is power, I'm
                  always looking for new challenges and opportunities to improve
                  my skills.
                </motion.p>
                <motion.p
                  {...commonProps}
                  transition={{ duration: 1 }}
                  className={styles.link}
                >
                  To back up my claims, here are my most recent{" "}
                  <Link href="/projects" className={styles.linkBtn}>
                    PROJECTS
                  </Link>
                </motion.p>
                <motion.p
                  {...commonProps}
                  transition={{ duration: 1 }}
                  className={styles.link}
                >
                  Want to learn more{" "}
                  <Link href="/about" className={styles.linkBtn}>
                    ABOUT ME
                  </Link>{" "}
                  ?
                </motion.p>
              </section>
              <motion.section
                {...commonProps}
                transition={{ duration: 1, delay: 0.5 }}
                className={styles.right}
              >
                <SkillsRadar />
              </motion.section>
            </div>
          </Layout>
        )}
      </AnimatePresence>
    </>
  );
}
