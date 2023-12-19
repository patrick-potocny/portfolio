import React from "react";
import styles from "@/styles/components/SkillsRadar.module.scss";

export default function SkillsRadar() {
  return (
    <>
    <div className={styles.panel}>
      <div className={styles.scanner}></div>
      <ul className={styles.items}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>TYPESCRIPT</li>
        <li>Tailwind CSS</li>
        <li>Bootstrap</li>
        <li>REACT</li>
        <li>GIT</li>
        <li>SCSS</li>
        <li>NEXT.JS</li>
        <li>UI/UX</li>
        <li>REST API</li>
        <li>AGILE/SCRUM</li>
      </ul>
    </div>
    </>
  );
}
