import Layout from "@/components/Layout";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import Head from "next/head";
import React, { useContext, useEffect } from "react";
import styles from "@/styles/pages/About.module.scss";
import boyComputer from "@/public/images/boyComputer.png";
import boyReading from "@/public/images/boyReading.gif";
import Link from "@/lib/link";
import computer from "@/public/images/experience.png";
import techBoy from "@/public/images/tech-boy.png";
import AboutSection from "@/components/AboutSection";
import SkillsRadar from "@/components/SkillsRadar";
import AboutLinks from "@/components/AboutLinks";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function About() {
  const { setSeenWelcomePage } = useContext(SeenWelcomeScreenCtx);
  const { ref, inView } = useInView({ triggerOnce: true });

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
        <AboutSection imageUrl={boyComputer}>
          <h1>Patrik Potocny</h1>
          <p>
            Front-end developer with 1+ year of experience in website and web
            application development focusing on React applications. I specialize
            in turning an idea into a fully functional website or web
            application that provides an exceptional user experience and is
            visually appealing.
          </p>
          <p>
            I love learning and would like to continue doing so alongside
            talented individuals. I am committed to delivering top-quality code
            and exceptional user experiences.
          </p>

          <p>Give me a problem and I'll give you a solution!</p>
        </AboutSection>

        <AboutLinks />

        <AboutSection imageUrl={computer} applyFilter>
          <h1>Experience</h1>
          <p>
            During the past year, I have focused on translating ideas into
            fully-functional websites and web applications, with my latest
            project being:
          </p>
          <p>
            <strong>
              <Link href="/projects/01-jobly">Jobly</Link>
            </strong>{" "}
            - Web application that can help manage and organize all aspects of
            job search, including job postings, interviews, and notes, making
            life easier for job seekers.
          </p>
          <p>
            Check out my other <Link href="/projects">PROJECTS</Link>
          </p>
        </AboutSection>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className={styles.skills}
        >
          <SkillsRadar />
        </motion.div>

        <AboutSection>
          <h1>Education</h1>
          <p>
            <strong>GOOGLE UX DESIGN</strong> - course taught me the
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
        </AboutSection>

        <AboutSection imageUrl={boyReading} applyFilter>
          <h1>My Approach</h1>
          <p>
            When it comes to creating web applications, my approach is a
            combination of creativity and problem-solving. I begin by analyzing
            the needs and goals of the project, and then work to create a design
            that meets those goals. During development, I take a methodical and
            strategic approach, breaking down complex issues into smaller steps
            and leveraging my skills to provide the best possible solution.
          </p>
          <p>
            As a developer, I understand the importance of soft skills such as
            communication and teamwork, and I strive to demonstrate them in
            every work environment.
          </p>
        </AboutSection>

        <AboutSection imageUrl={techBoy} applyFilter>
          <h1>My Journey</h1>
          <p>
            I have had a lifelong interest in technology, starting from a young
            age when I enjoyed building and tinkering with various gadgets and
            machines. From building drones to constructing my own motorcycle, I
            loved the challenge of solving complex problems and seeing my
            creations come to life. It was through this love of building and
            creating that I discovered my passion for programming and the
            endless possibilities it offers for creating amazing projects.
          </p>
          <p>
            My ultimate goal is to become a lead front-end developer and lead a
            team of talented individuals, bringing my creativity and
            problem-solving skills to projects that make a positive impact.
          </p>
        </AboutSection>

        <AboutSection>
          <h1>Get in Touch</h1>
          <p>
            If you're interested in learning more about my skills and
            experience, please feel free to{" "}
            <Link href="/contact">CONTACT ME</Link>
          </p>
        </AboutSection>
      </div>
    </Layout>
  );
}
