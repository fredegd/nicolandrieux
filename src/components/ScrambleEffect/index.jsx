import React, { useState, useEffect } from "react";

const ScrambleEffect = ({ tInput }) => {
  const scramblerChars = "!<>-_\\/[]{}—=+*^?#__$§X¢";

  const [scrambledText, setScrambledText] = useState(tInput);
  const [hoveredIndex, setHoveredIndex] = useState(
    Math.random() * tInput.length - 1
  );
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    let interval;
    let counter = 0;
    let minRange = !hovered ? hoveredIndex - 12 : hoveredIndex - 15;
    let maxRange = !hovered ? hoveredIndex + 12 : hoveredIndex + 15;

    interval = setInterval(() => {
      minRange = minRange < 0 ? 0 : minRange;
      maxRange = maxRange > tInput.length ? tInput.length : maxRange;
      setScrambledText((prevText) => {
        return prevText
          .split("")
          .map((char, index) =>
            index >= minRange && index <= maxRange && Math.random() > 0.5
              ? scramblerChars[
                  Math.floor(Math.random() * scramblerChars.length)
                ]
              : char
          )
          .join("");
      });

      counter += 1;
    }, 50);

    if (!hovered) {
      setTimeout(() => {
        clearInterval(interval);
        setScrambledText(tInput);
      }, 2000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [hovered, tInput]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered((prevState) => !prevState);
    // setHoveredIndex(Math.random() * tInput.length - 1);
  };

  return scrambledText.split("").map((char, index) => (
    <span
      key={index}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      className="cursor-default"
    >
      {char}
    </span>
  ));
};

export default ScrambleEffect;
