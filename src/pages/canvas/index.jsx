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
    <>
      <div className="h-auto min-h-[100vh] w-full bg-[#202020]  text-white  pt-36  md:pt-24 flex flex-col  items-center">
        <div className="w-10/12 h-fit flex flex-col lg:flex-row lg:items-center">
          <div
            className=" w-full md:w-[600px] h-auto max-h-[600px]  aspect-square p-0 m-0  border-black bg-black"
            ref={canvasRef}
          >
            <div className=" relative top-0 self-start" id="canvasGUI">
              <div className="flex flex-col gap-1 text-[0.75rem] justify-end h-full  w-[130px]">
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
                  max="240"
                  onChange={handleTrailChange}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-32 lg:pl-5">
            <ScrambleEffect
              tInput={
                "CREATED IN PROCESSING and then remapped in 8K resolution using Touchdesigner, the whole process was based on a few lines of codes."
              }
            />
            <ScrambleEffect
              tInput={
                "to let you enjoy playing with the ballerina, I translated the code in p5js to make it web friendly. have fun!"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(CanvasPage), { ssr: false });
