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
      gsap.fromTo(
        targets,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1 }
      );
      timeline.add(gsap.to(container.current, { opacity: 0 }));
    },
    { scope: container }
  );

  return (
    <section
      className=" min-h-screen w-full  flex justify-center items-center sticky -top-24"
      id="hero"
    >
      <div className="max-w-[92%] flex flex-col items-center ">
        <div
          className="flex  items-center flex-row justify-between lg:-mb-5  tracking-normal"
          id="hero-title"
        >
          <h1
            className="font-semibold  text-center lg:text-left "
            style={{ fontSize: "clamp(1.1rem, 4.5vw, 4.7rem)" }}
          >
            <ScrambleEffect tInput={"NICOLAS LANDRIEUX "} />
          </h1>
          <h1
            className="  font-semibold "
            style={{ fontSize: "5.2rem" && "clamp(1.1rem, 4.5vw, 4.7rem)" }}
          >
            &nbsp;
            <ScrambleEffect tInput={"——"} />
            &nbsp;
          </h1>
          <h1
            className="  font-semibold "
            style={{ fontSize: "5.2rem" && "clamp(1.1rem, 4.5vw, 4.7rem)" }}
          >
            <ScrambleEffect tInput={"ART DIRECTOR"} />
          </h1>
        </div>
        <div
          className="flex flex-row justify-start items-center  w-full mt-0  tracking-normal lg:tracking-wide pl-1"
          id="hero-subtitle"
        >
          <p
            className="  text-center"
            style={{
              fontSize: "1.0rem" && "clamp(0.25rem, 1.05vw, 1.12rem)",
            }}
          >
            <ScrambleEffect
              tInput={
                "SPECIALIST IN BRANDING, CRAFTING UNIQUE DESIGN AND EXPERIENCE THROUGH CREATIVE CODING AND MOTION DESIGN"
              }
            />
          </p>
          <p
            className="  text-center"
            style={{
              fontSize: "1.0rem" && "clamp(0.25rem, 1.05vw, 1.12rem)",
            }}
          >
            &nbsp;
            <ScrambleEffect tInput={"——"} />
            &nbsp;
          </p>
          <p
            className="  text-center"
            style={{
              fontSize: "1.0rem" && "clamp(0.25rem, 1.05vw, 1.12rem)",
            }}
          >
            <ScrambleEffect tInput={"I AM A DESIGNER WHO CODES."} />
          </p>
        </div>
      </div>
    </section>
  );
}
