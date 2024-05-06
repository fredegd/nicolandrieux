import React, { useState } from "react";

const TextScramble = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  const setText = (newText) => {
    const oldText = displayText;
    const length = Math.max(oldText.length, newText.length);
    const queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end });
    }
    let frame = 0;
    const update = () => {
      let output = "";
      let complete = 0;
      for (let i = 0, n = queue.length; i < n; i++) {
        let { from, to, start, end, char } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = randomChar();
            queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      setDisplayText(output);
      if (complete === queue.length) {
        cancelAnimationFrame(frameRequest);
        resolve();
      } else {
        frameRequest = requestAnimationFrame(update);
        frame++;
      }
    };
    update();
  };

  const randomChar = () => {
    return chars[Math.floor(Math.random() * chars.length)];
  };

  return <span dangerouslySetInnerHTML={{ __html: displayText }} />;
};

const ScrambleEffect = ({ phrases }) => {
  const [hovered, setHovered] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  const handleNextPhrase = () => {
    setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
  };

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleMouseOut}>
      {hovered && (
        <TextScramble
          key={currentPhraseIndex}
          text={phrases[currentPhraseIndex]}
        />
      )}
    </div>
  );
};

export default ScrambleEffect;
