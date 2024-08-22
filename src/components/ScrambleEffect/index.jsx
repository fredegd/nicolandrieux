import React, { useEffect, useState, useRef, use } from "react";
const scramblerCharsToChooseFrom = ["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const ScrambleEffect = ({ tInput }) => {
  const scrambleSpeed = 50;
  const revealSpeed = Math.floor(1000.0 / tInput.length);
  const [scramblerChars, setScramblerChars] = useState(
    scramblerCharsToChooseFrom[
      Math.floor(Math.random() * scramblerCharsToChooseFrom.length)
    ]
  );

  const [scrambledText, setScrambledText] = useState(tInput);
  const [hoveredIndex, setHoveredIndex] = useState(-1); //assigning at firs a negative nr to cause the whole text to scramble
  const [hovered, setHovered] = useState(false);
  const [visibleIndices, setVisibleIndices] = useState([]);
  const [shouldReveal, setShouldReveal] = useState(false);

  const [minRng, setMinRng] = useState(0);
  const [maxRng, setMaxRng] = useState(tInput?.length);

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.05) {
            setShouldReveal(true);
          } else {
            // setShouldReveal(false);//this line would make the text disappear when not leaving the viewport
            // setVisibleIndices([]);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (hoveredIndex < 0) {
      setMinRng(0);
      setMaxRng(tInput?.length);
    }
    if (hoveredIndex >= 0) {
      setMinRng(
        hovered
          ? hoveredIndex - Math.max(2, tInput?.length / 4)
          : hoveredIndex - Math.max(2, tInput?.length / 20)
      );
      setMaxRng(
        hovered
          ? hoveredIndex + Math.max(2, tInput?.length / 4)
          : hoveredIndex + Math.max(2, tInput?.length / 20)
      );
    }
  }, [hoveredIndex, tInput, hovered]);

  useEffect(() => {
    let interval;
    let counter = 0;

    interval = setInterval(() => {
      setScrambledText((prevText) => {
        return prevText
          ?.split("")
          .map((char, index) =>
            char !== " " &&
            index >= minRng &&
            index <= maxRng &&
            Math.random() > 0.6
              ? scramblerChars[
                  Math.floor(Math.random() * scramblerChars?.length)
                ]
              : char
          )
          .join("");
      });

      //make sure the text ceases to scramble after max 180 iterations
      if (counter >= 180) {
        clearInterval(interval);
        setScrambledText(tInput);
      }
      counter += 1;
    }, scrambleSpeed);
    //if the user leaves the object, stop the scrambling effect
    if (!hovered) {
      setTimeout(() => {
        clearInterval(interval);
        setScrambledText(tInput);
      }, 1800);
    }
    return () => {
      clearInterval(interval);
    };
  }, [
    hovered,
    tInput,
    hoveredIndex,
    scramblerChars,
    shouldReveal,
    minRng,
    maxRng,
  ]);

  //revealing the content on first load
  useEffect(() => {
    if (shouldReveal) {
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
    }
  }, [tInput, shouldReveal, revealSpeed]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    // setHoveredIndex(-1); //this line would reset the hoveredIndex to -1 when the user leaves the object
  };

  return (
    <span ref={containerRef}>
      {scrambledText.split("").map((char, index) => (
        <span
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onTouchStart={() => handleMouseEnter(index)}
          onTouchCancel={handleMouseLeave}
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
