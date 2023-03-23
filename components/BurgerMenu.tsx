import React, { useState } from "react";
import styles from "@/styles/components/BurgerMenu.module.scss";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "@/lib/link";

export default function BurgerMenu({ currentPage }: { currentPage: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.burgerMenu}>
      <Hamburger
        size={38}
        color="#1bff80"
        onToggle={() => setOpen((prev) => !prev)}
        toggled={open}
        duration={0.05}
        hideOutline={false}
      />
      <AnimatePresence>
        {open && (
          <motion.nav
            key={"burgerMenu"}
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{
              opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1],
              scale: [0, 1, 1, 1, 1, 1, 1, 1, 1],
              y: [0, 10, 5, -5, 0, 10, -20, 10, 0],
            }}
            exit={{
              opacity: [1, 0, 1, 0, 1, 0, 1, 0],
              scale: [1, 1, 1, 1, 1, 1, 1, 0],
              y: [10, 5, -5, 0, 10, -20, 10, 0],
            }}
            transition={{ duration: 0.2, type: "keyframes" }}
            className={styles.menu}
          >
            <ul className={styles.menuList}>
              <li
                className={`${currentPage === "" ? styles.selected : ""} ${
                  styles.menuItem
                }`}
              >
                <Link href="/">HOME</Link>
              </li>
              <li
                className={`${
                  currentPage === "projects" ? styles.selected : ""
                } ${styles.menuItem}`}
              >
                <Link href="/projects">PROJECTS</Link>
              </li>
              <li
                className={`${currentPage === "about" ? styles.selected : ""} ${
                  styles.menuItem
                }`}
              >
                <Link href="/about">ABOUT</Link>
              </li>
              <li
                className={`${
                  currentPage === "contact" ? styles.selected : ""
                } ${styles.menuItem}`}
              >
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
