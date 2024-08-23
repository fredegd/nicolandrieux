import React from "react";
import Image from "next/image";
import ScrambleEffect from "../../ScrambleEffect";
import ModalDisplay from "../../ModalDisplay";

function Liebeskind({ gallery }) {
  return (
    <ul className="p-0 m-0">
      <li
        id="gallery-item-1"
        className="w-[100vw] md:w-[100vw] h-[100vh]  flex flex-col md:flex-col-reverse lg:flex-col items-center md:items-start lg:items-center md:justify-center
        md:px-12 lg:px-0
                    bg-[length:170%] md:bg-[length:70%] lg:bg-[length:50%] bg-[right_35%_top_100%]  
                    md:bg-right bg-no-repeat sticky top-0 mb-24 bg-white"
        style={{
          backgroundImage: `url(${gallery[0].caseImg})`,
        }}
      >
        {/* desktop */}

        <div className="hidden md:flex flex-col gap-8 text-[3.3vw] w-[46vw]  lg:-rotate-90 ">
          <h1 className=" text-black tracking-normal   font-semibold  h-5 w-[100vw]">
            <ScrambleEffect tInput={"LIEBESKIND BERLIN"} />
          </h1>
          <h1 className=" text-black tracking-normal font-semibold self-end ">
            <ScrambleEffect tInput={"—— BRAND DESIGN"} />
          </h1>
        </div>
        <div className="hidden md:flex  items-center  w-10/12   text-[3.5vw]">
          <p className="text-black   w-4/12 md:w-full text-sm md:text-md lg:text-[1.12vw] font-medium">
            <ScrambleEffect tInput={gallery[0].subtitle} />
          </p>
        </div>
        {/* mobile */}
        <div className="flex flex-col md:hidden items-start  justify-center w-10/12 h-full pt-24">
          <h1 className="my-4 w-[90%] text-white tracking-normal text-[11vw] md:text-[4.2vw] leading-none font-semibold ">
            <ScrambleEffect tInput={gallery[0].title.replace(/——/g, "")} />
          </h1>
          <p className="md:hidden text-black   max-w-[10em] md:w-full text-base lg:text-[1.12vw] font-medium">
            <ScrambleEffect tInput={gallery[0].subtitle.replace(/\|/g, "")} />
          </p>
        </div>
      </li>
      <li
        id="gallery-item-2-mobile"
        className="w-[100vw] md:w-[100vw] h-[150vh] md:h-[71vw] flex flex-col md:hidden items-center 
                   bg-[length:120%]  bg-[left_60%_top_12rem]  bg-no-repeat sticky top-[-30rem] bg-white"
        style={{ backgroundImage: `url(${gallery[3].caseImg1})` }}
      >
        <div className="w-10/12 pt-56 sticky top-0">
          <p className="md:hidden text-white   w-full text-sm font-medium">
            <ScrambleEffect tInput={gallery[1].subtitle} />
          </p>
        </div>
      </li>
      <li
        id="gallery-item-2"
        className="w-[100vw]    min-h-[100vw] flex flex-col items-center bg-white pt-40 sm:pt-24 pb-12 sm:pb-4 sticky top-0 sm:relative"
      >
        <div className="w-10/12 h-[70vw] flex flex-col md:flex-col-reverse gap-4 justify-end items-center  ">
          <div className="m-0 p-0 border border-black w-full h-full">
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
          </div>
          <p className="hidden md:block    text-sm md:text-md lg:text-[1.12vw] leading-[1.5rem]  mt-24 text-black ">
            <ScrambleEffect tInput={gallery[1].subtitle} />
          </p>
          <p className="block md:hidden self-start    w-3/5 text-sm leading-[1.5rem] mix-blend-difference  text-slate-500 ">
            <ScrambleEffect tInput={gallery[1].subtitle1} />
          </p>
        </div>
      </li>
      <li
        id="gallery-item-3"
        className=" w-[100vw] h-[70vw] hidden  md:flex flex-col items-center bg-[length:100%] bg-center bg-no-repeat bg-white sticky -top-48 "
        style={{
          backgroundImage: `url(${gallery[2].caseImg})`,
        }}
      >
        <div></div>
      </li>

      <li
        id="gallery-item-4"
        className="w-[100vw] h-auto md:h-[75vw]   flex flex-col items-center bg-cover bg-center bg-no-repeat sticky top-0 md:-top-[302%] bg-white "
      >
        <div className="flex w-full">
          <Image
            src={gallery[3].caseImg}
            alt="Liebeskind Berlin"
            width={800}
            height={570}
            className="md:w-1/2 h-full object-cover object-center"
          />

          <Image
            src={gallery[3].caseImg1}
            alt="Liebeskind Berlin"
            width={800}
            height={570}
            className="hidden md:block w-1/2 h-full object-cover object-center"
          />
        </div>
        <p className="hidden md:block rotate-90 text-left   pt-12 pl-96 fixed top-[20%] ">
          <ScrambleEffect tInput={gallery[3].subtitle} />
        </p>
        <p className="hidden md:block -rotate-90 pt-12 pr-96 text-end fixed top-[20%] ">
          <ScrambleEffect tInput={gallery[3].subtitle} />
        </p>
      </li>

      <li
        id="gallery-item-5"
        className="w-[100vw] h-[100vh] md:h-[75vw]   flex flex-col items-center bg-cover bg-center bg-no-repeat sticky top-0 md:-top-[50%] bg-white "
      >
        <div className="flex w-full  gap-12">
          <Image
            src={gallery[4].caseImg}
            alt="Liebeskind Berlin"
            width={1600}
            height={1140}
            className="w-full md:w-1/2 h-[140%] md-h-full object-cover object-center"
          />
          <p className="hidden md:block text-left   fixed left-[6%] xl:left-[33%] top-[30%]">
            <ScrambleEffect tInput={gallery[3].subtitle} />
          </p>
          <div className="hidden md:w-1/2  md:flex flex-col gap-8">
            <Image
              src={gallery[4].caseImg1}
              alt="Liebeskind Berlin"
              width={800}
              height={570}
              className="w-full h-full object-cover object-center"
            />
            <Image
              src={gallery[4].caseImg2}
              alt="Liebeskind Berlin"
              width={800}
              height={570}
              className="object-cover object-center"
            />
          </div>
        </div>
      </li>
      <li
        id="gallery-item-6"
        className="w-[100vw] h-[100vh] md:h-[75vw]   flex flex-col items-center bg-cover bg-center bg-no-repeat sticky top-0  bg-white"
      >
        <div className="flex  gap-12">
          <Image
            src={gallery[5].caseImg}
            alt="Liebeskind Berlin"
            width={800}
            height={570}
            className="hidden md:block  w-1/2 h-full object-cover object-center"
          />
          <Image
            src={gallery[5].caseImg1}
            alt="Liebeskind Berlin"
            width={1600}
            height={1140}
            className="w-full h-[140%] md:w-1/2 md:h-full object-cover object-center"
          />
        </div>
      </li>

      <li
        id="gallery-item-6-Mobile"
        className="w-[100vw] flex md:hidden items-center bg-white pt-36 sticky top-0"
      >
        <div className="flex flex-col gap-4 items-center">
          <Image
            src={gallery[4].caseImg1}
            alt="Liebeskind Berlin"
            width={800}
            height={570}
            className="w-full h-full object-cover object-center"
          />
          <Image
            src={gallery[4].caseImg2}
            alt="Liebeskind Berlin"
            width={800}
            height={570}
            className="object-cover object-center"
          />
          <p className="w-10/12">
            <ScrambleEffect tInput={gallery[4].subtitle} />
          </p>
        </div>
      </li>

      <li
        id="gallery-item-7"
        className="w-[100vw] h-[100vh] sm:h-[120vh] md:h-[130vh] min-h-fit flex flex-col items-center bg-white filter-none sticky -top-48 "
      >
        <div className="w-10/12 flex flex-col-reverse gap-4 justify-end items-center  ">
          <Image
            src={gallery[6].caseImg2}
            alt="Liebeskind Berlin"
            width={800}
            height={570}
            className="w-full h-[47vw] md:hidden object-cover object-center"
          />

          <ModalDisplay
            buttonBgStyle={{
              backgroundImage: `url(${gallery[6].caseImg1})`,
            }}
            classNames={
              "w-full h-[50vw]  rounded-none p-0  cursor-default flex items-center justify-center relative, bg-cover  bg-center bg-no-repeat"
            }
            buttonColor={"white"}
            video={gallery[6].caseImg}
            title={gallery[6].title}
          />
          <p className=" text-black  w-full text-sm  lg:text-[1.12vw] leading-5 tracking-normal  mt-40 md:mt-24">
            <ScrambleEffect tInput={gallery[6].subtitle} />
          </p>
        </div>
      </li>
    </ul>
  );
}

export default Liebeskind;






