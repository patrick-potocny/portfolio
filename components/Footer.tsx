import React, { useState } from "react";
import styles from "@/styles/components/Footer.module.scss";
import linkedIn from "@/public/images/linkedIn.svg";
import linkedInHover from "@/public/images/linkedInHover.svg";
import gitHub from "@/public/images/gitHub.svg";
import gitHubHover from "@/public/images/gitHubHover.svg";
import email from "@/public/images/email.svg";
import emailHover from "@/public/images/emailHover.svg";
import resume from "@/public/images/resume.svg";
import resumeHover from "@/public/images/resumeHover.svg";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AnimatePresence, motion } from "framer-motion";

export default function Footer() {
  const [linkedInIcon, setLinkedInIcon] = useState(linkedIn);
  const [gitHubIcon, setGitHubIcon] = useState(gitHub);
  const [emailIcon, setEmailIcon] = useState(email);
  const [resumeIcon, setResumeIcon] = useState(resume);
  const [copied, setCopied] = useState(false);

  function showCopied() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  }

  return (
    <>
      <div className={styles.footerUnderline} />
      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          className={styles.link}
          onMouseEnter={() => setLinkedInIcon(linkedInHover)}
          onMouseLeave={() => setLinkedInIcon(linkedIn)}
        >
          <Image
            src={linkedInIcon}
            alt="LinkedIn icon"
            className={styles.icon}
          />
          <span>LinkedIn</span>
        </a>
        <a
          href="#"
          target="_blank"
          className={styles.link}
          onMouseEnter={() => setGitHubIcon(gitHubHover)}
          onMouseLeave={() => setGitHubIcon(gitHub)}
        >
          <Image src={gitHubIcon} alt="GitHub icon" className={styles.icon} />
          <span>Github</span>
        </a>
        <CopyToClipboard text="myemail@gmail.com" onCopy={showCopied}>
          <button
            className={styles.link}
            onMouseEnter={() => setEmailIcon(emailHover)}
            onMouseLeave={() => setEmailIcon(email)}
          >
            <Image src={emailIcon} alt="Email icon" className={styles.icon} />
            <span>myemail@email.com</span>
            <AnimatePresence>
              {copied && (
                <motion.div
                  key="copied"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1],
                    y: [0, 10, 5, -5, 0, 10, -20, 10, 0],
                    x: [0, 10, 5, -5, 0, 10, -20, 10, 0],
                  }}
                  exit={{
                    opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1],
                    y: [0, 10, 5, -5, 0, 10, -20, 10, 0],
                    x: [0, 10, 5, -5, 0, 10, -20, 10, 0],
                  }}
                  transition={{ duration: 0.2 }}
                  className={styles.copied}
                >
                  Copied to Clipboard
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </CopyToClipboard>
        <a
          href="/files/dummy.pdf"
          target="_blank"
          className={styles.link}
          onMouseEnter={() => setResumeIcon(resumeHover)}
          onMouseLeave={() => setResumeIcon(resume)}
        >
          <Image src={resumeIcon} alt="File icon" className={styles.icon} />
          <span>Resume</span>
        </a>
      </footer>
    </>
  );
}
