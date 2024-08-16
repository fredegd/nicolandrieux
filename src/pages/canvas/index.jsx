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

      p5Instance.changeHandler(zoomValue, pulseValue, trailValue);

      return () => {
        p5Instance.remove();
      };
    }
  }, [inputValue, zoomValue, pulseValue, trailValue]);

  return (
    <div className="h-[100vh] min-h-fit w-full bg-black  text-white  pt-36  md:pt-24 flex flex-col items-center">
      <div
        className=" w-10/12 md:w-[600px] h-auto max-h-[600px]  aspect-square p-0 m-0  "
        ref={canvasRef}
      ></div>
      <div className="w-10/12 h-full pb-20 fixed bottom-0 " id="canvasGUI">
        <div className="flex flex-col gap-2 justify-end h-full w-full sm:w-[500px] md:w-[400px]">
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
            className="rounded-none appearance-none outline-none bg-white  w-full h-1 -px-3"
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
            className="rounded-none appearance-none outline-none bg-white  w-full h-1 -px-3"
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
            className="rounded-none appearance-none outline-none bg-white  w-full h-1 -px-3"
            type="range"
            id="trail-slider"
            value={trailValue}
            min="0"
            max="250"
            onChange={handleTrailChange}
          />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(CanvasPage), { ssr: false });
