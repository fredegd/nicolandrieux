import React, { useState, useEffect } from "react";

const ScrambleEffect = ({ tInput }) => {
  // const scramblerCharsToChooseFrom = [
  //   "FCKYUOUALL",
  //   "!<>-_\\/[]{}—=+*^?#__$§X¢",
  //   "NOWAY",
  //   "HELLOWORLd",
  // ];
  // const scramblerChars =
  //   scramblerCharsToChooseFrom[
  //     Math.floor(Math.random() * scramblerCharsToChooseFrom.length)
  //   ];

  const scramblerChars = "FCKYUOUALL!<>-_/[]{}";

  const [scrambledText, setScrambledText] = useState(tInput);
  const [hoveredIndex, setHoveredIndex] = useState(
    // Math.random() * tInput?.length - 1
    tInput?.length / 2
  );
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    let interval;
    let counter = 0;

    // let minRange = !hovered ? hoveredIndex - 12 : hoveredIndex - 15;
    // let maxRange = !hovered ? hoveredIndex + 12 : hoveredIndex + 15;
    let minRange = !hovered
      ? hoveredIndex - tInput?.length / 2
      : hoveredIndex - tInput?.length / 10;
    let maxRange = !hovered
      ? hoveredIndex + tInput?.length / 2
      : hoveredIndex + tInput?.length / 10;

    interval = setInterval(() => {
      minRange = minRange < 0 ? 0 : minRange;
      maxRange = maxRange > tInput.length ? tInput.length : maxRange;
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
      console.log(counter);
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
  }, [hovered, tInput, hoveredIndex]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setHovered((prevState) => !prevState);
  };

  const handleMouseLeave = () => {
    setHovered((prevState) => !prevState);
    // setHoveredIndex(Math.random() * tInput.length - 1);
  };

  return scrambledText.split("").map((char, index) => (
    <span
      key={index}
      onMouseEnter={() => handleMouseEnter(index)}
      onTouchStart={() => handleMouseEnter(index)}
      onTouchEnd={handleMouseLeave}
      onMouseLeave={handleMouseLeave}
      className="cursor-default"
    >
      {char}
    </span>
  ));
};

export default ScrambleEffect;
