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
      const p5Instance = new p5((p) => sketch(p), canvasRef.current);

      // p5Instance.changeHandler(zoomValue, pulseValue, trailValue);

      return () => {
        p5Instance.remove();
      };
    }
  }, [inputValue, zoomValue, pulseValue, trailValue]);

  return (
    <>
      <div className="h-auto min-h-[100vh] w-full bg-[#202020]  text-white  pt-36  md:pt-24 flex flex-col  items-center">
        <div
          className="md:w-10/12 w-full h-fit flex flex-col lg:flex-row items-center"
          id="canvasContainer"
        >
          <div
            className=" w-full md:w-[600px] h-auto max-h-[600px]  aspect-square p-0 m-0  border-black bg-black flex justify-center  relative"
            ref={canvasRef}
            id="canvas"
          ></div>
          <div className="flex flex-col gap-4 pt-4 pb-32  lg:pl-5 w-10/12 md:w-full self-center">
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
