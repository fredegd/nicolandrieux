"use client";
import React from "react";
import ScrambleEffect from "../../ScrambleEffect";
import ModalDisplay from "../../ModalDisplay";

function Kunstkraftwerk({ gallery }) {
  return (
    <ul className="    p-0 m-0 bg-black">
      <li
        id="gallery-item-1"
        className="w-[100vw] md:w-[100vw] h-[120vh]  flex flex-col items-center justify-center  text-white
        bg-[length:300%] md:bg-cover bg-[left_40%_top_-5rem]  md:bg-center bg-no-repeat sticky -top-[40%] md:-top-48"
        style={{
          backgroundImage: `url(${gallery[0].caseImg})`,
        }}
      >
        {/* desktop */}
        {/* desktop */}
        <div className="hidden md:flex flex-col      w-10/12">
          <h1 className="  tracking-normal   font-semibold  md:text-[4.08vw] leading-tight">
            <ScrambleEffect tInput={gallery[0].title1} />
          </h1>
        </div>
        <div className="hidden md:flex  items-end  w-10/12 ">
          <p className="   w-4/12 md:w-1/2 text-sm md:text-md lg:text-[1.12vw] font-medium">
            <ScrambleEffect tInput={gallery[0].subtitle} />
          </p>
          <h1 className="  md:w-1/2  tracking-normal font-semibold md:text-[4.08vw] leading-5 text-right">
            <ScrambleEffect tInput={gallery[0].title2} />
          </h1>
        </div>

        {/* mobile */}
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
        className="w-[100vw] md:w-[100vw] min-h-[100vh] h-[100vh] md:h-[71vw] flex flex-col items-center justify-center  sticky -top-[60%]"
        id="gallery-item-2"
      >
        <ModalDisplay
          buttonBgStyle={{
            backgroundImage: `url(${gallery[1].caseImg1})`,
          }}
          classNames={
            "w-full h-full rounded-none p-0  cursor-default flex items-center justify-center relative, bg-cover  bg-center bg-no-repeat"
          }
          buttonColor={"white"}
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
        className="w-[100vw] md:w-[100vw] min-h-[100vh] h-[100vh] md:min-h-[71vw] 
        flex flex-col items-center justify-center  sticky top-0 sm:-top-48 bg-[#f2f2f2] md:bg-white
        pt-0 md:pt-24"
        id="gallery-item-4"
      >
        <ModalDisplay
          buttonBgStyle={{
            backgroundImage: `url(${gallery[3].caseImg1})`,
          }}
          classNames={
            "w-full h-full rounded-none p-0 bg-center bg-no-repeat bg-cover cursor-default flex items-center justify-center pb-52 md:p-0 relative, bg-[length:250%] bg-right-top  sm:bg-[length:180vw] md:bg-[length:100%] md:bg-[left_top_5rem] lg:bg-[left_top_0rem] bg-no-repeat"
          }
          buttonColor={"black"}
          video={gallery[3].caseImg}
          title={gallery[3].title}
        />

        <div
          className="w-full h-auto  md:w-10/12 lg:w-[33%] flex flex-col  items-center md:items-start justify-center  bg-white lg:bg-transparent text-black 
                        absolute bottom-0 md:bottom-32 lg:bottom-48 lg:left-[25vw]  py-8 md:p-0  "
        >
          <p className="w-10/12 md:w-full   text-sm md:text-md lg:text-[1.12vw] leading-tight">
            <ScrambleEffect tInput={gallery[3].subtitle} />
          </p>
          <p className="w-10/12 md:w-full   text-sm md:text-md lg:text-[1.12vw] leading-tight">
            <ScrambleEffect tInput={gallery[3].subtitle1} />
          </p>
        </div>
      </li>
    </ul>
  );
}

export default Kunstkraftwerk;
