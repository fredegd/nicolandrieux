"use client";
import React from "react";
import ScrambleEffect from "../../ScrambleEffect";
import ModalDisplay from "../../ModalDisplay";

function Kunstkraftwerk({ gallery }) {
  return (
    <ul className="    p-0 m-0 bg-black">
      <li
        id="gallery-item-1"
        className="w-[100vw] md:w-[100vw] h-[120vh]  flex flex-col items-center justify-center text-white
        bg-[length:300%] md:bg-cover bg-[left_40%_top_-5rem]  md:bg-center bg-no-repeat sticky -top-[40%] md:-top-48"
        style={{
          backgroundImage: `url(${gallery[0].caseImg})`,
        }}
      >
        {/* desktop */}
        <div className="hidden md:flex flex-col gap-8 md:text-[4.2vw]    w-10/12">
          <h1 className="  tracking-normal   font-semibold  h-5 ">
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
        <div className="flex flex-col md:hidden items-start  justify-end w-10/12 h-full pb-60 md:pb-32">
          <h1 className=" tracking-normal text-[11vw] sm:text[11vw]  leading-none font-semibold my-4">
            <ScrambleEffect tInput={gallery[0].title} />
          </h1>
          <p className="md:hidden    w-5/12 md:w-full text-sm md:text-base lg:text-[1.12vw] font-medium">
            <ScrambleEffect tInput={gallery[0].subtitle.replace(/\|/g, "")} />
          </p>
        </div>
      </li>

      <li
        className="w-[100vw] md:w-[100vw] min-h-[100vh] h-[100vh] md:h-[71vw] flex flex-col items-center justify-center  sticky top-0 sm:-top-48"
        id="gallery-item-2"
      >
        <ModalDisplay
          buttonContent={gallery[1].caseImg1}
          video={gallery[1].caseImg}
          title={gallery[1].title}
        />

        <div className="w-full h-auto flex flex-col gap-4 items-center justify-center text-white absolute bottom-0 md:bottom-32 lg:bottom-48 pb-8">
          <p className="w-10/12    text-sm md:text-md lg:text-[1.12vw] leading-[1.5rem]">
            <ScrambleEffect tInput={gallery[1].subtitle} />
          </p>
          <p className="w-10/12    text-sm md:text-md lg:text-[1.12vw] leading-[1.5rem]">
            <ScrambleEffect tInput={gallery[1].subtitle1} />
          </p>
        </div>
      </li>

      <li
        className="w-[100vw] md:w-[100vw] min-h-[100vh] h-[100vh] md:h-[71vw] flex flex-col items-center justify-center  sticky top-0 sm:-top-48 bg-white"
        id="gallery-item-4"
      >
        <ModalDisplay
          buttonContent={gallery[3].caseImg1}
          video={gallery[3].caseImg}
          title={gallery[3].title}
        />

        <div className="w-full h-auto  md:w-[35%] flex flex-col  items-center md:items-start justify-center   text-black absolute bottom-0 md:bottom-32 lg:bottom-48 pb-8">
          <p className="w-10/12    text-sm md:text-md lg:text-[1.12vw] leading-[1.5rem] ">
            <ScrambleEffect tInput={gallery[3].subtitle} />
          </p>
          <p className="w-10/12    text-sm md:text-md lg:text-[1.12vw] leading-[1.5rem]">
            <ScrambleEffect tInput={gallery[3].subtitle1} />
          </p>
        </div>
      </li>
    </ul>
  );
}

export default Kunstkraftwerk;
