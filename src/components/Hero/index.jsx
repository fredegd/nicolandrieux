import React from "react";
import ScrambleEffect from "../ScrambleEffect";
export default function Hero() {
  return (
    <section
      className=" min-h-screen w-full  flex justify-center items-center "
      id="hero"
    >
      <div
        className="max-w-[92%] flex flex-col items-center sticky top-0"
        id="hero-title"
      >
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:-mb-6 tracking-normal">
          <h1
            className="font-semibold  text-center lg:text-left "
            style={{ fontSize: "clamp(2.9rem, 4.5vw, 4.7rem)" }}
          >
            <ScrambleEffect tInput={"NICOLAS LANDRIEUX "} />
          </h1>
          <h1
            className="  font-semibold "
            style={{ fontSize: "5.2rem" && "clamp(2.9rem, 4.5vw, 4.7rem)" }}
          >
            &nbsp;
            <ScrambleEffect tInput={"––"} />
            &nbsp;
          </h1>
          <h1
            className="  font-semibold "
            style={{ fontSize: "5.2rem" && "clamp(2.9rem, 4.5vw, 4.7rem)" }}
          >
            <ScrambleEffect tInput={"ART DIRECTOR"} />
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row justify-start items-center  w-3/6 lg:w-full mt-6 lg:mt-0  tracking-normal lg:tracking-wide ">
          <p
            className="  text-center"
            style={{ fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)" }}
          >
            <ScrambleEffect
              tInput={
                "SPECIALIST IN BRANDING, CRAFTING UNIQUE DESIGN AND EXPERIENCE THROUGH CREATIVE CODING AND MOTION DESIGN"
              }
            />
          </p>
          <p
            className="  text-center"
            style={{ fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)" }}
          >
            &nbsp;
            <ScrambleEffect tInput={"––"} />
            &nbsp;
          </p>
          <p
            className="  text-center"
            style={{ fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)" }}
          >
            <ScrambleEffect tInput={"I AM A DESIGNER WHO CODES."} />
          </p>
        </div>
      </div>
    </section>
  );
}
