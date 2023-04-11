import Link from "@/lib/link";
import React, { useState } from "react";
import styles from "@/styles/components/HomeLink.module.scss";
import Image from "next/image";
import rightArrow from "@/public/images/rightArrow.svg";
import rightArrowHover from "@/public/images/rightArrowHover.svg";

type Props = {
  linkTo: string;
  text: string;
};

export default function HomeLink({ linkTo, text }: Props) {
  const [rightArrowIcon, setRightArrowIcon] = useState(rightArrow);

  return (
    <Link
      className={styles.link}
      href={linkTo}
      onMouseEnter={() => setRightArrowIcon(rightArrowHover)}
      onMouseLeave={() => setRightArrowIcon(rightArrow)}
    >
      {text}{" "}
      <Image
        className={styles.icon}
        src={rightArrowIcon}
        alt="Right arrow icon"
      />
    </Link>
  );
}
