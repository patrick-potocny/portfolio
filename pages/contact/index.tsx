import Layout from "@/components/Layout";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import Head from "next/head";
import React, { useContext, useEffect } from "react";
import styles from "@/styles/pages/Contact.module.scss";
import Image from "next/image";
import email from "@/public/images/email.svg";
import linkedIn from "@/public/images/linkedIn.svg";
import phone from "@/public/images/phone.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

export default function Contact() {
  const { setSeenWelcomePage } = useContext(SeenWelcomeScreenCtx);

  // Set seenWelcomePage to true so that the welcome screen is not shown
  // when user redirects to home page.
  useEffect(() => {
    setSeenWelcomePage(true);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={styles.title}
      >
        Get in touch
      </motion.h1>
      <motion.div className={styles.container}>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.contactCard}
        >
          <div className={styles.leftCorners} />
          <div className={styles.rightCorners} />
          <Image className={styles.icon} src={email} alt="Email" />
          <h2 className={styles.title}>Email</h2>
          <p className={styles.contact}>patrik@patrikp.dev</p>
          <CopyToClipboard text="patrik@patrikp.dev">
            <button className={styles.btn}>Copy Email</button>
          </CopyToClipboard>
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className={styles.contactCard}
        >
          <div className={styles.leftCorners} />
          <div className={styles.rightCorners} />
          <Image className={styles.icon} src={linkedIn} alt="LinkedIn" />
          <h2 className={styles.title}>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/patrikpotocny/" target="_blank" className={styles.btn}>My Profile</a>
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className={styles.contactCard}
        >
          <div className={styles.leftCorners} />
          <div className={styles.rightCorners} />
          <Image className={styles.icon} src={phone} alt="Phone" />
          <h2 className={styles.title}>Phone Number</h2>
          <p className={styles.contact}>+421 940 116 860</p>
          <CopyToClipboard text="+421 940 116 860">
            <button className={styles.btn}>Copy Number</button>
          </CopyToClipboard>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
