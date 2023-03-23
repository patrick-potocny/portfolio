import Layout from "@/components/Layout";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import Head from "next/head";
import React, { useContext, useEffect } from "react";
import styles from "@/styles/pages/About.module.scss";
import Image from "next/image";
import boyComputer from "@/public/images/boyComputer.png";
import boyReading from "@/public/images/boyReading.gif";
import Link from "@/lib/link";
import computer from "@/public/images/experience.png";
import SkillsRadar from "@/components/SkillsRadar";

export default function About() {
  const { setSeenWelcomePage } = useContext(SeenWelcomeScreenCtx);

  // Set seenWelcomePage to true so that the welcome screen is not shown
  // when user redirects to home page.
  useEffect(() => {
    setSeenWelcomePage(true);
  }, []);

  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.text}>
            <h1 className={styles.title}>Hi</h1>
            <p className={styles.paragraph}>
              My name is Patrik Potocny, and I am a dedicated Front-End
              developer with a passion for creating beautiful and functional
              websites. I have a strong background in HTML, CSS, JavaScript,
              React, and TypeScript.
            </p>
            <p className={styles.paragraph}>
              I am eager to continue expanding my skillset and work with
              talented individuals to bring ideas to life. I am committed to
              delivering top-quality code and exceptional user experiences.
            </p>

            <p className={styles.paragraph}>
              Give me a problem and i'll give you a solution.
            </p>
          </div>
          <Image
            priority
            className={styles.image}
            src={boyComputer}
            alt="Boy sitting on computer"
          />
        </section>

        <section className={styles.section}>
          <div className={styles.text}>
            <h1 className={styles.title}>Experience</h1>
            <p className={styles.paragraph}>
              When the COVID pandemic hit back in 2020, I immediately took that
              as an opportunity to learn something new and I dove deep into the
              world of programming. After three years, I still haven't stopped.
            </p>
            <p className={styles.paragraph}>
              During this time, I have gained a lot of experience in end-to-end
              web application development, which means going from an idea to a
              working web application/website. To prove my experience, you can
              check out some of my latest{" "}
              <Link className={styles.link} href="/projects">
                PROJECTS
              </Link>
            </p>
          </div>
          <Image priority className={styles.expImage} src={computer} alt="Computer" />
        </section>

        <section className={styles.section}>
          <div className={styles.text}>
            <h1 className={styles.title}>Skills</h1>
            <p className={styles.paragraph}>
              I have a strong background in: <br />
              - HTML, CSS, JavaScript, React, TypeScript, NextJS, Git
            </p>
            <p className={styles.paragraph}>
              Among my other skills are: <br />
              - Figma, attention to detail, problem solving, communication, and time management
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.text}>
            <h1 className={styles.title}>Education</h1>
            <p className={styles.paragraph}>
              <strong>GOOGLE UX DESIGN</strong> - course tought me the
              fundamentals of UX design, including research, prototyping, and
              testing, to create user-centered digital experiences -{" "}
              <a
                href="/files/google-certificate.pdf"
                target="_blank"
                className={styles.link}
              >
                CERTIFICATE
              </a>
            </p>
            <p className={styles.paragraph}>
              <strong>THE ODIN PROJECT</strong> - is an online curriculum that
              provides comprehensive courses and resources centered on front-end
              development. I opted for this platform due to its hands-on,
              project-based learning methodology, which significantly enhanced
              my independence in designing and developing my own projects.
            </p>
          </div>
          <Image priority className={styles.gif} src={boyReading} alt="Boy reading" />
        </section>

        <section className={styles.section}>
          <div className={styles.text}>
            <h1 className={styles.title}>Let's work together</h1>
            <p className={styles.paragraph}>
              If you'r interested, feel free to{" "}
              <Link className={styles.link} href="/contact">
                CONTACT ME
              </Link>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
