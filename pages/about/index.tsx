import Layout from "@/components/Layout";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import Head from "next/head";
import React, { useContext, useEffect } from "react";
import styles from "@/styles/pages/About.module.scss";
import boyComputer from "@/public/images/boyComputer.png";
import boyReading from "@/public/images/boyReading.gif";
import Link from "@/lib/link";
import computer from "@/public/images/experience.png";
import teamwork from "@/public/images/teamwork.png";
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
          <h1>Hi</h1>
          <p>
            My name is Patrik Potocny, and I am a dedicated Front-End developer
            with a passion for creating beautiful and functional websites. I
            have a strong background in HTML, CSS, JavaScript, React, TypeScript
            and many other related technologies.
          </p>
          <p>
            I am eager to continue expanding my skillset and work with talented
            individuals to bring ideas to life. I am committed to delivering
            top-quality code and exceptional user experiences.
          </p>

          <p>Give me a problem and i'll give you a solution.</p>
        </AboutSection>

        <AboutLinks />

        <AboutSection imageUrl={computer} applyFilter>
          <h1>Experience</h1>
          <p>
            During the past year, I have focused on translating designs into
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
        </AboutSection>

        <AboutSection imageUrl={boyReading} applyFilter>
          <h1>My Approach</h1>
          <p>
            When it comes to problem-solving, I take a methodical and strategic
            approach, breaking down complex issues into manageable steps and
            leveraging my skills to provide the best possible solution.
          </p>
          <p>
            As a developer, I understand the importance of soft skills, and I
            strive to demonstrate them in every work environment. Communication
            is key to the success of any project, and I make sure to keep all
            team members updated on my progress and any issues that arise.
            Finally, adaptability is essential in the fast-paced world of
            front-end development, and I am always eager to learn and grow,
            keeping up-to-date with the latest trends and technologies in the
            field.
          </p>
        </AboutSection>

        <AboutSection imageUrl={teamwork} applyFilter>
          <h1>Goal</h1>
          <p>
            My ultimate goal is to become a lead developer in a team of talented
            and like-minded individuals. I strive to be the driving force behind
            successful projects and to take on a leadership role in creating
            innovative solutions that push the boundaries of what is possible.
            With my passion for learning and my eagerness to take on new
            challenges, I am confident that I can achieve this goal and make a
            positive impact on any team I am a part of.
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
