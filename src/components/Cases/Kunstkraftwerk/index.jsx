import React from "react";
import Image from "next/image";
import ScrambleEffect from "../../ScrambleEffect";

function Kunstkraftwerk({ gallery }) {
  return (
    <ul className="    p-0 m-0 bg-black">
      <li
        id="gallery-item-1"
        className="w-[100vw] md:w-[100vw] h-[100vh]  flex flex-col items-center justify-center text-white
        bg-[length:300%] md:bg-cover bg-[left_40%_top_0rem]  md:bg-center bg-no-repeat sticky top-0"
        style={{
          backgroundImage: `url(${gallery[0].caseImg})`,
        }}
      >
        {/* desktop */}
        <div className="hidden md:flex flex-col gap-8 md:text-[3.7vw]    w-10/12">
          <h1 className="  tracking-normal   font-semibold  h-5 w-[100vw]">
            <ScrambleEffect tInput={gallery[0].title1} />
          </h1>
          <h1 className="  tracking-normal font-semibold self-end ">
            <ScrambleEffect tInput={gallery[0].title2} />
          </h1>
        </div>
        <div className="hidden md:flex  items-center  w-10/12  -mt-16">
          <p className="   w-4/12 md:w-full text-sm md:text-md lg:text-[1.12vw] font-medium">
            <ScrambleEffect tInput={gallery[0].subtitle} />
          </p>
        </div>
        {/* mobile */}
        <div className="flex flex-col md:hidden items-start  justify-end w-10/12 h-full pb-24">
          <h1 className=" tracking-normal text-[11vw] sm:text[11vw]  leading-none font-semibold my-4">
            <ScrambleEffect tInput={gallery[0].title} />
          </h1>
          <p className="md:hidden    w-5/12 md:w-full text-sm md:text-base lg:text-[1.12vw] font-medium">
            <ScrambleEffect tInput={gallery[0].subtitle.replace(/\|/g, "")} />
          </p>
        </div>
      </li>
      <li className="w-[100vw] md:w-[100vw] h-[100vh] md:h-[71vw] flex flex-col items-center bg-white pt-40 sm:pt-24 pb-12 sm:pb-4 sticky top-0 sm:-top-48">
        <div className="w-10/12 h-full flex flex-col md:flex-col-reverse gap-4 justify-end items-center">
          <div className="p-0 m-0 w-full h-[47vw] bg-white flex flex-col justify-start items-start border border-slate-800">
            <iframe
              className="w-full h-full"
              src={gallery[1].caseImg}
              title="Kunstkraftwerk"
            />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <p className="w-10/12 md:w-11/12 text-black  text-sm md:text-md lg:text-[1.12vw] leading-[1.5rem] font-semibold mb-4">
              <ScrambleEffect tInput={gallery[1].title} />
            </p>
            <p className="w-10/12 md:w-11/12 text-black  text-sm md:text-md lg:text-[1.12vw] leading-[1.5rem]">
              <ScrambleEffect tInput={gallery[1].subtitle} />
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default Kunstkraftwerk;
