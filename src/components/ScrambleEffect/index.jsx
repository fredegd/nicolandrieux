import React, { useState, useEffect } from "react";

const ScrambleEffect = ({ tInput }) => {
  const [hoveredWordIndex, setHoveredWordIndex] = useState(-1);
  const [scrambledText, setScrambledText] = useState(tInput);
  const scramblerChars = "!<>-_\\/[]{}—=+*^?#__$§X¢";
  const words = tInput.split(" ");

  const [scrambleContinuously, setScrambleContinuously] = useState(true);
  const [scrambledWords, setScrambledWords] = useState(() =>
    words.map((word) => ({
      original: word,
      scrambled: word,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrambleContinuously) {
        setScrambledWords((prevScrambledWords) =>
          prevScrambledWords.map((wordObj) => ({
            ...wordObj,
            scrambled: scrambleWord(wordObj.original),
          }))
        );
      }
    }, 50);

    // Stop continuous scrambling after 1500ms
    setTimeout(() => {
      setScrambleContinuously(false);
    }, 1500);

    return () => clearInterval(interval);
  }, [scrambleContinuously]);

  useEffect(() => {
    let timeout;
    if (hoveredWordIndex !== -1) {
      timeout = setTimeout(() => {
        setScrambledWords((prevScrambledWords) =>
          prevScrambledWords.map((wordObj, index) => {
            if (index === hoveredWordIndex) {
              return {
                ...wordObj,
                scrambled: scrambleWord(wordObj.original),
              };
            }
            return wordObj;
          })
        );
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [hoveredWordIndex]);

  const handleMouseEnter = (index) => {
    setHoveredWordIndex(index);
    setScrambleContinuously(true); // Allow continuous scrambling when hovering over a word
  };

  const handleMouseLeave = () => {
    setHoveredWordIndex(-1);
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
    <span className="p-1 min-w-max">
      {scrambledWords.map((wordObj, index) => (
        <span
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className="cursor-default"
        >
          {wordObj.scrambled}{" "}
        </span>
      ))}
    </span>
  );
};

export default ScrambleEffect;
