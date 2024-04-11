import React, { useEffect, useState } from "react";

const typewriterIntervalMS = 5;

const Typewriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= text.length) {
      return; // No need to continue if we've finished typing
    }

    const interval = setInterval(() => {
      setDisplayText((prevText) => prevText + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, typewriterIntervalMS);

    return () => clearInterval(interval);
  }, [text, currentIndex]);

  return <div>{displayText}</div>;
};

export default Typewriter;
