import React, { useEffect, useState } from "react";
const scramblerCharsToChooseFrom = [
  "FCKYUOUALL",
  "!<>/[]{}=+*^?#$@§X¢",
  "NOWAY",
  "H€Ll0WOrLD",
];

const ScrambleEffect = ({ tInput }) => {
  const scrambleSpeed = 50;
  const revealSpeed = Math.floor(1500.0 / tInput.length);
  const [scramblerChars, setScramblerChars] = useState(
    scramblerCharsToChooseFrom[
      Math.floor(Math.random() * scramblerCharsToChooseFrom.length)
    ]
  );

  const [scrambledText, setScrambledText] = useState(tInput);
  const [hoveredIndex, setHoveredIndex] = useState(
    // Math.random() * tInput?.length - 1
    tInput?.length / 2
  );
  const [hovered, setHovered] = useState(false);
  const [visibleIndices, setVisibleIndices] = useState([]);

  useEffect(() => {
    let interval;
    let counter = 0;

    // let minRange = !hovered ? hoveredIndex - 12 : hoveredIndex - 15;
    // let maxRange = !hovered ? hoveredIndex + 12 : hoveredIndex + 15;
    let minRange = !hovered
      ? hoveredIndex - tInput?.length / 2
      : hoveredIndex - Math.max(2, tInput?.length / 10);
    let maxRange = !hovered
      ? hoveredIndex + tInput?.length / 2
      : hoveredIndex + Math.max(2, tInput?.length / 10);

    interval = setInterval(() => {
      minRange = Math.max(0, minRange);

      maxRange = Math.min(tInput.length, maxRange);

      setScrambledText((prevText) => {
        return prevText
          ?.split("")
          .map((char, index) =>
            char !== " " &&
            index >= minRange &&
            index <= maxRange &&
            Math.random() > 0.5
              ? scramblerChars[
                  Math.floor(Math.random() * scramblerChars?.length)
                ]
              : char
          )
          .join("");
      });

      counter += 1;
    }, scrambleSpeed);

    if (!hovered) {
      setTimeout(() => {
        clearInterval(interval);
        setScrambledText(tInput);
      }, 1500);
    }
    return () => {
      clearInterval(interval);
    };
  }, [hovered, tInput, hoveredIndex, scramblerChars]);

  //revealing the content on first load
  useEffect(() => {
    const revealInterval = setInterval(() => {
      setVisibleIndices((prevIndices) => {
        const nextIndex = prevIndices.length;
        if (nextIndex >= tInput.length) {
          clearInterval(revealInterval);
          return prevIndices;
        }
        return [...prevIndices, nextIndex];
      });
    }, revealSpeed);

    return () => clearInterval(revealInterval);
  }, [tInput]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setHoveredIndex(-1);
    setScramblerChars(
      scramblerCharsToChooseFrom[
        Math.floor(Math.random() * scramblerCharsToChooseFrom.length)
      ]
    );
  };

  return (
    <span>
      {scrambledText.split("").map((char, index) => (
        <span
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onTouchStart={() => handleMouseEnter(index)}
          onTouchEnd={handleMouseLeave}
          onMouseLeave={handleMouseLeave}
          className="cursor-default"
          style={{
            visibility: visibleIndices.includes(index) ? "visible" : "hidden",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default ScrambleEffect;
