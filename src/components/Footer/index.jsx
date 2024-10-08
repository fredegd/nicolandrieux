import React from "react";
import ScrambleEffect from "../ScrambleEffect";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <section
      className="  min-h-24 h-auto w-full    flex flex-col items-center justify-center gap-12 md:gap-24  py-"
      id="about"
    >
      <div className="  w-10/12 flex flex-col lg:flex-row items-center justify-start gap-12">
        <div className="w-full flex flex-col  pt-24 md:pt-8  pb-16    md:pb-32 tracking-tight leading-[1.5rem] text-sm md:text-[1rem]">
          <p className=" uppercase font-medium ">
            <ScrambleEffect tInput={"——"} />
          </p>
          <p className=" uppercase font-medium ">
            <ScrambleEffect tInput={"DESIGNED BY NICOLAS LANDRIEUX"} />
          </p>
          <p className=" uppercase font-medium ">
            <ScrambleEffect tInput={"DEVELOPED BY" + " "} />
            <a
              href="http://fredegd.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              <ScrambleEffect tInput={"TAPIWO (FRED)↗"} />
            </a>
          </p>
          <p className=" uppercase font-medium ">
            <ScrambleEffect tInput={`©${year} —— ALL RIGHTS RESERVED `} />
          </p>
        </div>
      </div>
    </section>
  );
}
