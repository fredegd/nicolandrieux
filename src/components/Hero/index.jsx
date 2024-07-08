import { useContext, useRef } from "react";
import ScrambleEffect from "../ScrambleEffect";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/context/TransitionContext";

export default function Hero() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(["#hero-title", "#hero-subtitle"]);
      gsap.fromTo(targets, { y: 100 }, { y: 0, stagger: 0.1 });
      timeline.add(gsap.to(container.current, { opacity: 0 }));
    },
    { scope: container }
  );

  return (
    <section
      className=" min-h-screen w-full  flex justify-center items-center sticky -top-24"
      id="hero"
      ref={container}
    >
      <div className="max-w-[92%] flex flex-col items-start md:items-center ">
        <div
          className="flex flex-col md:flex-row justify-start md:items-center md:justify-between   tracking-normal text-[10vw] md:text-[4.5vw]"
          id="hero-title"
        >
          <h1 className="font-semibold  ">
            <ScrambleEffect tInput={"NICOLAS LANDRIEUX "} />
          </h1>
          <h1 className="  font-semibold ">
            <span className="hidden md:inline-block">&nbsp;</span>
            <ScrambleEffect tInput={"——"} />
            &nbsp;
          </h1>
          <h1 className="  font-semibold ">
            <ScrambleEffect tInput={"ART DIRECTOR"} />
          </h1>
        </div>
        <div
          className="flex flex-col md:flex-row justify-start md:items-center  md:w-full w-9/12 mt-0  tracking-normal text-[4vw] md:text-[1.12vw]"
          id="hero-subtitle"
        >
          <p>
            <ScrambleEffect
              tInput={
                "SPECIALIST IN BRANDING, CRAFTING UNIQUE DESIGN AND EXPERIENCE THROUGH CREATIVE CODING AND MOTION DESIGN"
              }
            />
          </p>
          <p className=" hidden md:inline-block">
            &nbsp;
            <ScrambleEffect tInput={"——"} />
            &nbsp;
          </p>
          <p>
            <ScrambleEffect tInput={"I AM A DESIGNER WHO CODES."} />
          </p>
        </div>
      </div>
    </section>
  );
}
