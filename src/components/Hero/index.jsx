import React from "react";
import ScrambleEffect from "../ScrambleEffect";
export default function Hero() {
  return (
    <section
      className=" min-h-screen w-full  flex justify-center items-center "
      id="hero"
    >
      <div
        className="max-w-[90%] flex flex-col items-center sticky top-0"
        id="hero-title"
      >
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <h1
            className="  font-semibold tracking-tighter text-center lg:text-left "
            style={{ fontSize: "clamp(2.3rem, 5vw, 6rem)" }}
          >
            <ScrambleEffect tInput={"NICOLAS LANDRIEUX"} />
          </h1>
          <h1
            className="  font-semibold tracking-tighter"
            style={{ fontSize: "5.2rem" && "clamp(2.3rem, 5vw, 6rem)" }}
          >
            <ScrambleEffect tInput={"––"} />
          </h1>
          <h1
            className="  font-semibold tracking-tighter"
            style={{ fontSize: "5.2rem" && "clamp(2.3rem, 5vw, 6rem)" }}
          >
            <ScrambleEffect tInput={"ART DIRECTOR"} />
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row justify-between items-center  w-3/6 lg:w-full mt-6 lg:mt-0 ">
          <p
            className="  text-center"
            style={{ fontSize: "1.0rem" && "clamp(0.85rem, 1.05vw, 1.10rem)" }}
          >
            <ScrambleEffect
              tInput={
                "SPECIALIST IN BRANDING, CRAFTING UNIQUE DESIGN AND EXPERIENCE THROUGH CREATIVE CODING AND MOTION DESIGN"
              }
            />
          </p>
          <p
            className="  text-center"
            style={{ fontSize: "1.0rem" && "clamp(0.85rem, 1.05vw, 1.10rem)" }}
          >
            ––
          </p>
          <p
            className="  text-center"
            style={{ fontSize: "1.0rem" && "clamp(0.85rem, 1.05vw, 1.10rem)" }}
          >
            <ScrambleEffect tInput={"I AM A DESIGNER WHO CODES"} />
          </p>
        </div>
      </div>
    </section>
  );
}
