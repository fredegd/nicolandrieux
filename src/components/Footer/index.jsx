import React from "react";
import ScrambleEffect from "../ScrambleEffect";
export default function Footer() {
  return (
    <section
      className=" h-auto w-full  py-10   flex flex-col justify-center items-center gap-12 md:gap-24  md:h-a border border-red-500 "
      id="about"
    >
      <div className=" w-10/12 flex flex-col md:flex-row items-center md:justify-start gap-12">
        <div
          className=" max-w-[460px] flex flex-col gap-4  tracking-tight leading-[1.5rem]"
          style={{ fontSize: "clamp(1.1rem, 1.25vw, 1.36rem)" }}
        >
          <p className=" uppercase font-medium ">
            <ScrambleEffect tInput={"——"} />
          </p>
          <p className=" uppercase font-medium ">
            <ScrambleEffect tInput={"DESIGNED BY NICOLAS LANDRIEUX"} />
          </p>
          <p className=" uppercase font-medium ">
            <ScrambleEffect tInput={"DEVELOPED BY FRED TAPIWO"} />
          </p>
          <p className=" uppercase font-medium ">
            <ScrambleEffect tInput={"©2024 —— ALL RIGHTS RESERVED "} />
          </p>
        </div>
      </div>
    </section>
  );
}
