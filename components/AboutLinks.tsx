import React, { useState } from "react";
import styles from "@/styles/components/AboutLinks.module.scss";
import linkedIn from "../public/images/linkedIn.svg";
import linkedInHover from "@/public/images/linkedInHover.svg";
import gitHub from "@/public/images/gitHub.svg";
import gitHubHover from "@/public/images/gitHubHover.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutLinks() {
  const [linkedInIcon, setLinkedInIcon] = useState(linkedIn);
  const [gitHubIcon, setGitHubIcon] = useState(gitHub);
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 1 }}
      className={styles.links}
    >
      <a
        href="https://www.linkedin.com/in/mutai-kipkoech/"
        target="_blank"
        className={styles.link}
        onMouseEnter={() => setLinkedInIcon(linkedInHover)}
        onMouseLeave={() => setLinkedInIcon(linkedIn)}
      >
        <Image src={linkedInIcon} alt="LinkedIn icon" className={styles.icon} />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/Mutai-Gilbert"
        target="_blank"
        className={styles.link}
        onMouseEnter={() => setGitHubIcon(gitHubHover)}
        onMouseLeave={() => setGitHubIcon(gitHub)}
      >
        <Image src={gitHubIcon} alt="GitHub icon" className={styles.icon} />
        <span>GitHub</span>
      </a>
    </motion.section>
  );
}
