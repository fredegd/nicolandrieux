import React from "react";
import ScrambleEffect from "../ScrambleEffect";
export default function Hero() {
  return (
    <section className=" min-h-screen w-full  flex justify-center items-center ">
      <div className="max-w-[80%] flex flex-col items-center">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <h1
            className=" text-black font-semibold tracking-tighter text-center lg:text-left "
            style={{ fontSize: "clamp(2.3rem, 4.15vw, 5.0rem)" }}
          >
            {" NICOLAS LANDRIEUX "}{" "}
          </h1>
          <h1
            className=" text-black font-semibold tracking-tighter"
            style={{ fontSize: "5.2rem" && "clamp(2.3rem, 4.15vw, 5.0rem)" }}
          >
            &nbsp;{"––"}&nbsp;
          </h1>
          <h1
            className=" text-black font-semibold tracking-tighter"
            style={{ fontSize: "5.2rem" && "clamp(2.3rem, 4.15vw, 5.0rem)" }}
          >
            {"ART DIRECTOR"}
            {"  "}
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row justify-between items-center  w-3/6 lg:w-full mt-6 lg:mt-0">
          <p
            className=" text-black text-center"
            style={{ fontSize: "1.0rem" && "clamp(0.85rem, 0.92vw, 1rem)" }}
          >
            SPECIALIST IN BRANDING, CRAFTING UNIQUE DESIGN AND EXPERIENCE
            THROUGH CREATIVE CODING AND MOTION DESIGN
          </p>
          <p
            className=" text-black text-center"
            style={{ fontSize: "1.0rem" && "clamp(0.85rem, 0.92vw, 1rem)" }}
          >
            ––
          </p>
          <p
            className=" text-black text-center"
            style={{ fontSize: "1.0rem" && "clamp(0.85rem, 0.92vw, 1rem)" }}
          >
            I AM A DESIGNER WHO CODES
          </p>
          <ScrambleEffect phrases={["DESIGNER", "DEVELOPER", "CREATOR"]} />
        </div>
      </div>
    </section>
  );
}
