import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { sketch } from "../../p5Sketches/sketch";

import ScrambleEffect from "@/components/ScrambleEffect";

const CanvasPage = () => {
  const canvasRef = useRef();

  const [showResetButton, setShowResetButton] = useState(false);
  const [inputValue, setInputValue] = useState("LETITFLOW");
  const [zoomValue, setZoomValue] = useState(50);
  const [pulseValue, setPulseValue] = useState(50);
  const [trailValue, setTrailValue] = useState(50);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setShowResetButton(true);
    setInputValue(e.target.value);
  };

  const handleZoomChange = (e) => {
    setZoomValue(e.target.value);
  };

  const handlePulseChange = (e) => {
    setPulseValue(e.target.value);
  };

  const handleTrailChange = (e) => {
    setTrailValue(e.target.value);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const p5 = require("p5");

      const p5Instance = new p5(
        (p) => sketch(p, { inputValue, zoomValue, pulseValue, trailValue }),
        canvasRef.current
      );

      return () => {
        p5Instance.remove();
      };
    }
  }, [inputValue, zoomValue, pulseValue, trailValue]);

  return (
    <div className="h-[100vh] w-full bg-black  text-white -mt-48 md:-mt-24 pt-56 md:pt-24 flex flex-col items-center">
      <div
        className="w-[400px] h-[400px] aspect-square bg-black p-0 m-0 border border-lime-600 z-50"
        ref={canvasRef}
      ></div>
      <div className="w-10/12 h-full border border-red-600 " id="canvasGUI">
        <div className="flex flex-col gap-2 justify-end h-full w-full md:w-[400px] pb-20">
          {!showResetButton && (
            <label htmlFor="text-input" className="block  ">
              <ScrambleEffect tInput={"Choose your word"} />
            </label>
          )}
          {showResetButton && (
            <div>
              <button
                className="block  "
                onClick={() => {
                  setInputValue("LETITFLOW");
                  setShowResetButton(false);
                }}
              >
                <ScrambleEffect tInput={"RESET TO ORIGINAL"} />
              </button>
            </div>
          )}
          <input
            type="text"
            id="text-input"
            defaultValue={inputValue}
            value={inputValue}
            className="text-black appearance-none block   border border-none rounded-none   focus:outline-none"
            aria-label="choose your words"
            label="Choose your word"
            onChange={handleInputChange}
          />

          <label htmlFor="dive-control" className="block ">
            <ScrambleEffect tInput={"DIVE CONTROL"} />
          </label>
          <input
            type="range"
            className="rounded-none appearance-none outline-none bg-white  w-full h-1 -px-1"
            id="dive-control"
            value={zoomValue}
            min="0"
            max="800"
            onChange={handleZoomChange}
          />

          <label htmlFor="pulse-slider" className="block ">
            <ScrambleEffect tInput={"PULSE SLIDER"} />
          </label>
          <input
            type="range"
            className="rounded-none appearance-none outline-none bg-white  w-full h-1 -px-1"
            id="pulse-slider"
            value={pulseValue}
            min="0"
            max="50"
            onChange={handlePulseChange}
          />

          <label htmlFor="trail-slider" className="block ">
            <ScrambleEffect tInput={"TRAIL SLIDER"} />
          </label>
          <input
            className="rounded-none appearance-none outline-none bg-white  w-full h-1 -px-1"
            type="range"
            id="trail-slider"
            value={trailValue}
            min="0"
            max="255"
            onChange={handleTrailChange}
          />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(CanvasPage), { ssr: false });
