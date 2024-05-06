import React, { useRef, useContext } from "react";
import Portrait from "../../../public/images/portrait.png";
import Link from "next/link";
import Image from "next/image";
import { TransitionContext } from "@/context/TransitionContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import About from "../../components/About";
export default function Index() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const image = useRef();

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(["p", image.current]);
      gsap.fromTo(
        targets,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.25 }
      );
      timeline.add(gsap.to(container.current, { opacity: 0 }));
    },
    { scope: container }
  );

  return (
    <div ref={container} className="min-h-[100vh] flex ">
      <About />
    </div>
  );
}
