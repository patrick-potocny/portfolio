import React from "react";
import styles from "@/styles/components/AboutSection.module.scss";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
  children: React.ReactNode;
  imageUrl?: StaticImageData;
  applyFilter?: boolean;
};

export default function AboutSection({
  children,
  imageUrl,
  applyFilter,
}: Props) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.section
      className={styles.section}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.text}>{children}</div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="image"
          className={applyFilter ? styles.imgFilter : ""}
        />
      )}
    </motion.section>
  );
}
