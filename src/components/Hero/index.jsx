import { useContext, useRef } from "react";
import ScrambleEffect from "../ScrambleEffect";




export default function Hero() {
  const container = useRef(null);

  return (
    <section
      className=" min-h-screen w-full  flex justify-center items-center "
      id="hero"
      ref={container}
    >
      <div className=" max-w-[92%] hidden md:flex flex-col items-start md:items-center ">
        <div
          className="flex flex-col md:flex-row justify-start md:items-center md:justify-between   tracking-normal text-[12vw] md:text-[4.5vw] leading-none mb-8"
          id="hero-title"
        >
          <h1 className="font-semibold  ">
            <ScrambleEffect tInput={"NICOLAS LANDRIEUX  ——  ART DIRECTOR"} />
          </h1>
        </div>
        <div
          className="flex flex-col md:flex-row justify-start md:items-center  md:w-full w-9/12 mt-0  tracking-normal text-md md:text-[1.12vw] leading-tight"
          id="hero-subtitle"
        >
          <p>
            <ScrambleEffect
              tInput={
                "SPECIALIST IN BRANDING, CRAFTING UNIQUE DESIGN AND EXPERIENCE THROUGH CREATIVE CODING AND MOTION DESIGN  ——  I AM A DESIGNER WHO CODES."
              }
            />
          </p>
        </div>
      </div>

      <div className=" w-10/12 flex flex-col items-start md:items-center md:hidden">
        <div
          className="flex flex-col md:flex-row justify-start md:items-center md:justify-between   tracking-normal text-[11vw] md:text-[4.5vw] leading-none mb-8"
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
          className="flex flex-col md:flex-row justify-start md:items-center  md:w-full w-9/12 mt-0  tracking-normal text-md md:text-[1.12vw] leading-tight"
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
