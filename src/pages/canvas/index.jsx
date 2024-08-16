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
    <div className="h-[100vh] w-full bg-black">
      <div
        className="w-full  flex items-center justify-center bg-black text-white -mt-48 md:-mt-24 pt-48 md:pt-24"
        ref={canvasRef}
      ></div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(CanvasPage), { ssr: false });
