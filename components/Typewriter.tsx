import React, { useState, useEffect } from "react";

type TypewriterProps = {
  text: string;
  onEnd: () => void;
};

const Typewriter: React.FC<TypewriterProps> = ({ text, onEnd }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [delay, setDelay] = useState(0);

  function randomDelay() {
    return Math.floor(Math.random() * (70 - 10 + 1)) + 10;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        setDelay(randomDelay());
      } else {
        onEnd();
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex, text, onEnd]);

  return <>{displayText}</>;
};

export default Typewriter;
