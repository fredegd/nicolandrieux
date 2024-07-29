import React from "react";
import Image from "next/image";
import ScrambleEffect from "../../ScrambleEffect";

function Liebeskind({ gallery }) {
  return (
    <ul className="    p-0 m-0">
      <li
        id="gallery-item-1"
        className="w-[100vw] md:w-[100vw] h-[100vh]  flex flex-col md:flex-col-reverse lg:flex-col items-center md:items-start lg:items-center md:justify-center
                    bg-[length:170%] md:bg-[length:70%] lg:bg-[length:50%] bg-[right_35%_top_100%]  
                    md:bg-right bg-no-repeat sticky top-0 bg-white"
        style={{
          backgroundImage: `url(${gallery[0].caseImg})`,
        }}
      >
        {/* desktop */}

        <div className="hidden md:flex flex-col gap-8 text-[3.3vw] w-[46vw]  lg:-rotate-90">
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
        <div className="flex flex-col md:hidden items-start  justify-center w-10/12 h-full">
          <h1 className="text-white tracking-normal text-[11vw] md:text-[4.2vw] leading-none font-semibold my-4">
            <ScrambleEffect tInput={gallery[0].title} />
          </h1>
          <p className="md:hidden text-black   w-4/12 md:w-full text-sm md:text-md lg:text-[1.12vw] font-medium">
            <ScrambleEffect tInput={gallery[0].subtitle.replace(/\|/g, "")} />
          </p>
        </div>
      </li>
      <li
        id="gallery-item-2-mobile"
        className="w-[100vw] md:w-[100vw] h-[150vh] md:h-[71vw] flex flex-col md:hidden items-center  bg-[length:120%]  bg-[left_60%_top_12rem]  bg-no-repeat sticky top-[-24rem] bg-white"
        style={{ backgroundImage: `url(${gallery[3].caseImg1})` }}
      >
        <div className="w-10/12 pt-56">
          <p className="md:hidden text-white   w-full text-sm font-medium">
            <ScrambleEffect tInput={gallery[1].subtitle} />
          </p>
        </div>
      </li>
      <li
        id="gallery-item-2"
        className="w-[100vw] h-[100vw] md:h-[100vh] flex flex-col items-center bg-white"
      >
        <div className="w-10/12 h-[100vw] flex flex-col gap-8 justify-center ">
          <p className="hidden md:block text-black  w-full  text-sm md:text-md lg:text-[1.12vw] leading-[1.5rem]   ">
            <ScrambleEffect tInput={gallery[1].subtitle} />
          </p>

          <iframe
            src="https://player.vimeo.com/video/824497699?h=8a2c0ffafd&color=ffffff&title=0&byline=0&portrait=0"
            frameborder="1"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            className="w-[100%] h-[100%]"
          ></iframe>

          <p className="block md:hidden  text-black  w-6/12 text-sm leading-[1.5rem] mb-16">
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
        <div className=""></div>
      </li>

      <li
        id="gallery-item-4"
        className="w-[100vw] h-[100vh] md:h-[75vw]   flex flex-col items-center bg-cover bg-center bg-no-repeat sticky top-0 bg-white border border-blue-300"
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
        <p className="hidden md:block rotate-90 text-left   pt-24 pl-96 fixed top-24 ">
          <ScrambleEffect tInput={gallery[3].subtitle} />
        </p>
        <p className="hidden md:block -rotate-90 pt-24 pr-96 text-end fixed top-24">
          <ScrambleEffect tInput={gallery[3].subtitle} />
        </p>
      </li>

      <li
        id="gallery-item-5"
        className="w-[100vw] h-[100vh] md:h-[75vw]   flex flex-col items-center bg-cover bg-center bg-no-repeat sticky top-0 md:-top-[50%] bg-white"
      >
        <div className="flex w-full  gap-12">
          <Image
            src={gallery[4].caseImg}
            alt="Liebeskind Berlin"
            width={1600}
            height={1140}
            className="w-full md:w-1/2 h-[140%] object-cover object-center"
          />
          <p className="hidden md:block text-left   fixed left-[35%] top-[30%]">
            <ScrambleEffect tInput={gallery[3].subtitle} />
          </p>
          <div className="hidden md:flex flex-col gap-8">
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
        id="gallery-item-7"
        className="w-[100vw] h-[71vw]   flex flex-col items-center justify-start bg-white bg-cover bg-center bg-no-repeat sticky -top-24 px-48"
      >
        <p
          className="text-black   w-full py-32 text-[1.7rem] leading-[1.5rem]  "
          style={{
            fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)",
          }}
        >
          <ScrambleEffect tInput={gallery[6].subtitle} />
        </p>

        <iframe
          src="https://drive.google.com/file/d/1vHFXwc0BShBr4tF0GeC8PE68TEO-25_l/preview?t=50.0&loop=1"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          className="w-full h-full"
        ></iframe>
      </li>
    </ul>
  );
}

export default Liebeskind;






