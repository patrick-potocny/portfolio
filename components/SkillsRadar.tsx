import React from "react";
import styles from "@/styles/components/SkillsRadar.module.scss";

export default function SkillsRadar() {
  return (
    <>
    <h2 className={styles.title}>SKILLS</h2>
    <div className={styles.panel}>
      <div className={styles.scanner}></div>
      <ul className={styles.items}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>TYPESCRIPT</li>
        <li>REACT</li>
        <li>GIT</li>
        <li>SCSS</li>
        <li>NEXT.JS</li>
      </ul>
    </div>
    </>
  );
}
