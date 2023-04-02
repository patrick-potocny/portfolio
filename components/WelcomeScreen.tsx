import React, { useState } from "react";
import styles from "@/styles/components/WelcomeScreen.module.scss";
import { VT323 } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
import MatrixRain from "./MatrixRain";

const vt323 = VT323({ subsets: ["latin"], display: "swap", weight: "400" });

export default function WelcomeScreen({
  setSeenWelcomePage,
}: {
  setSeenWelcomePage: (show: boolean) => void;
}) {
  const [showAccessGranted, setShowAccessGranted] = useState(false);
  const [showMatrixRain, setShowMatrixRain] = useState(false);

  return (
    <>
      <div className={`${styles.terminal} ${vt323.className}`}>
        <TypeAnimation sequence={[300, "Hello there..."]} cursor={false} />
        <TypeAnimation
          sequence={[1500, "I've been expecting You"]}
          cursor={false}
        />
        <TypeAnimation
          sequence={[
            3300,
            () => setShowAccessGranted(true),
            200,
            () => setShowMatrixRain(true),
            2500,
            () => setSeenWelcomePage(true),
          ]}
          cursor={false}
        />
        {showAccessGranted && (
          <p className={styles.accesGranted}>ACCESS GRANTED</p>
        )}
      </div>
      {showMatrixRain && <MatrixRain />}
    </>
  );
}
