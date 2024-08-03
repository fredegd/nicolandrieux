import React, { useRef, useContext } from "react";
import { TransitionContext } from "@/context/TransitionContext";
import About from "../../components/About";
export default function Index() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);

  return (
    <div
      ref={container}
      className="min-h-[100vh] flex bg-black text-white -mt-24"
    >
      <About />
    </div>
  );
}
