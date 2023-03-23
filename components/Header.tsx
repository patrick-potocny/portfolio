import React from "react";
import styles from "@/styles/components/Header.module.scss";
import Link from "@/lib/link";
import { useRouter } from "next/router";
import BurgerMenu from "@/components/BurgerMenu";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  // Extract the text after the last `/`
  const currentPage = pathname.substring(pathname.lastIndexOf("/") + 1);

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>&lt;/patrikp&gt;</Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={currentPage === "" ? styles.selected : ""}>
              <Link href="/">HOME</Link>
            </li>
            <li className={currentPage === "projects" ? styles.selected : ""}>
              <Link href="/projects">PROJECTS</Link>
            </li>
            <li className={currentPage === "about" ? styles.selected : ""}>
              <Link href="/about">ABOUT</Link>
            </li>
            <li className={currentPage === "contact" ? styles.selected : ""}>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
        <BurgerMenu currentPage={currentPage} />
      </header>
      <div className={styles.headerUnderline} />
    </>
  );
}
