import React, { useState, useEffect } from "react";

const ScrambleEffect = ({ tInput }) => {
  const [hoveredWordIndex, setHoveredWordIndex] = useState(-1);
  const [scrambledText, setScrambledText] = useState(tInput);
  const scramblerChars = "!<>-_\\/[]{}—=+*^?#__$§X¢";

  useEffect(() => {
    let interval;

    if (hoveredWordIndex !== -1) {
      interval = setInterval(() => {
        const words = tInput.split(" ");
        const scrambledWords = words.map((word, index) => {
          if (index === hoveredWordIndex) {
            return scrambleWord(word);
          } else {
            return word;
          }
        });
        setScrambledText(scrambledWords.join(" "));
      }, 50);
    }

    return () => clearInterval(interval);
  }, [tInput, hoveredWordIndex]);

  const handleMouseEnter = (index) => {
    setHoveredWordIndex(index);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHoveredWordIndex(-1);
      setScrambledText(tInput);
    }, 1500); // Delay resetting scrambled text for 1.5 second after mouse leaves
  };

  const scrambleWord = (word) => {
    let newScrambledWord = "";
    for (let i = 0; i < word.length; i++) {
      if (Math.random() > 0.5) {
        newScrambledWord += word[i];
      } else {
        newScrambledWord +=
          scramblerChars[Math.floor(Math.random() * scramblerChars.length)];
      }
    }
    return newScrambledWord;
  };

  return (
    <span className="py-2 min-w-max cursor-default">
      {tInput.split(" ").map((word, index) => (
        <span
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {index === hoveredWordIndex ? scrambledText.split(" ")[index] : word}{" "}
        </span>
      ))}
    </span>
  );
};

export default ScrambleEffect;
