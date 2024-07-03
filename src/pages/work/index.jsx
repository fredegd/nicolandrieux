"use client";
import React, { useContext, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/context/TransitionContext";
import gsap from "gsap";
import SelectedWorks from "../../components/SelectedWorks";

export default function Index() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const image = useRef();

  useGSAP(
    () => {
      const targets = gsap.utils.toArray([
        "a",
        image.current,
        SelectedWorks.container,
      ]);
      gsap.fromTo(
        targets,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.25 }
      );
      timeline.add(gsap.to(container.current, { opacity: 0 }));
    },
    { scope: container }
  );

  return (
    <div ref={container} className=" w-full flex bg-black text-white -mt-24">
      <SelectedWorks />
    </div>
  );
}
