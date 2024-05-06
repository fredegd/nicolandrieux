import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/context/TransitionContext";
import gsap from "gsap";

import { ScrollTrigger } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

import { useContext, useRef, useEffect } from "react";
import Hero from "../components/Hero";
import SelectedWorks from "../components/SelectedWorks";
import About from "../components/About";

export default function Home() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const image = useRef();

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(["h1", "p"]);
      gsap.fromTo(
        targets,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.25 }
      );
      timeline.add(gsap.to(container.current, { opacity: 0 }));
    },
    { scope: container }
  );

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="h-[100vh] w-full">
      <div ref={container} className="h-[100vh] flex flex-col ">
        <Hero />
      </div>
      <SelectedWorks />
      <About />
    </div>
  );
}
