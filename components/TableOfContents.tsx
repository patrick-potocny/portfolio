import React from "react";
import styles from "@/styles/components/TableOfContents.module.scss";

function TableOfContents({ headings }: { headings: string[] }) {
  function handleClick(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.toc}>
      <div className={styles.leftCorners}></div>
      <div className={styles.rightCorners}></div>
      <h2 className={styles.title}>Table of Contents</h2>
      <ul className={styles.links}>
        {headings.map((heading) => (
          <li key={heading}>
            <a href={`#${heading}`} className={styles.link} onClick={() => handleClick(heading)}>
              {heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContents;
