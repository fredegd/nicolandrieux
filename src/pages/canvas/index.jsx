import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { sketch } from "../../p5Sketches/sketch";

const CanvasPage = () => {
  const canvasRef = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const p5 = require("p5");

      const p5Instance = new p5(sketch, canvasRef.current);

      return () => {
        p5Instance.remove();
      };
    }
  }, []);

  return (
    <div
      className="w-full  bg-black text-white -mt-48 md:-mt-24 pt-48 md:pt-24"
      ref={canvasRef}
    ></div>
  );
};

export default dynamic(() => Promise.resolve(CanvasPage), { ssr: false });
