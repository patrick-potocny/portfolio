import React, { useState } from "react";
import styles from "@/styles/components/Footer.module.scss";
import linkedIn from "@/public/images/linkedIn.svg";
import linkedInHover from "@/public/images/linkedInHover.svg";
import gitHub from "@/public/images/gitHub.svg";
import gitHubHover from "@/public/images/gitHubHover.svg";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AnimatePresence, motion } from "framer-motion";
import { glitchAnimation } from "@/lib/utils";

export default function Footer() {
  const [linkedInIcon, setLinkedInIcon] = useState(linkedIn);
  const [gitHubIcon, setGitHubIcon] = useState(gitHub);
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
          href="https://www.linkedin.com/in/mutai-kipkoech/"
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
          href="https://github.com/Mutai-Gilbert"
          target="_blank"
          className={styles.link}
          onMouseEnter={() => setGitHubIcon(gitHubHover)}
          onMouseLeave={() => setGitHubIcon(gitHub)}
        >
          <Image src={gitHubIcon} alt="GitHub icon" className={styles.icon} />
          <span>GitHub</span>
        </a>
        <CopyToClipboard text="mutai@pkoech.dev" onCopy={showCopied}>
          <button
            className={styles.link}
          >
            <span>patrik@patrikp.dev</span>
            <AnimatePresence>
              {copied && (
                <motion.div
                  key="copied"
                  initial={{ opacity: 0, y: -10 }}
                  animate={glitchAnimation}
                  exit={glitchAnimation}
                  transition={{ duration: 0.2 }}
                  className={styles.copied}
                >
                  Copied to Clipboard
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </CopyToClipboard>
      </footer>
    </>
  );
}
