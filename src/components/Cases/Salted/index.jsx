import React from "react";
import Image from "next/image";
import ScrambleEffect from "../../ScrambleEffect";

function Salted({ gallery }) {
  return (
    <ul className="    p-0 m-0">
      <li
        id="gallery-item-1"
        className="w-[100vw] md:w-[100vw] h-[100vh] md:h-[71vw] flex flex-col items-center bg-[length:530%] md:bg-cover bg-[left_40%_top_0rem]  md:bg-center bg-no-repeat sticky -top-80"
        style={{
          backgroundImage: `url(${gallery[0].caseImg})`,
        }}
      >
        <div className="flex flex-col items-start  justify-center w-10/12 h-full">
          <h1
            className="text-white tracking-normal text-[12vw] md:text-[4.5vw] leading-none font-semibold"
            style={{ fontSize: "clamp(2.9rem, 4.5vw, 4.7rem)" }}
          >
            <ScrambleEffect tInput={gallery[0].title} />
          </h1>
          <p className="hidden md:inline text-end text-black   md:w-full text-sm md:text-md lg:text-[1.12vw]">
            <ScrambleEffect tInput={gallery[0].subtitle} />
          </p>
          <p className="md:hidden text-black   w-4/12 md:w-full text-sm md:text-md lg:text-[1.12vw]">
            <ScrambleEffect tInput={gallery[0].subtitle.replace(/\|/g, "")} />
          </p>
        </div>
      </li>
      <li
        id="gallery-item-2"
        className="w-[100vw] md:w-[100vw] h-[100vh] md:h-[71vw] flex flex-col-reverse md:flex-row  items-center md:bg-cover bg-center bg-no-repeat sticky -top-24"
      >
        <Image
          className="w-full md:w-8/12  h-full aspect-[400/400]  object-cover"
          src={gallery[1].caseImg || ""}
          alt={gallery[1].content}
          width={800}
          height={800}
        />{" "}
        <div className="w-full h-full bg-white flex flex-col items-center justify-center">
          <p className="w-10/12 md:w-11/12 text-black  text-sm md:text-md lg:text-[1.12vw] leading-[1.5rem] font-semibold mb-4">
            <ScrambleEffect tInput={gallery[1].title} />
          </p>
          <p className="w-10/12 md:w-11/12 text-black  text-sm md:text-md lg:text-[1.12vw] leading-[1.5rem]">
            <ScrambleEffect tInput={gallery[1].subtitle} />
          </p>
        </div>
      </li>
      <li
        id="gallery-item-3"
        className="w-[100vw] md:w-[100vw] h-[100vh] md:h-[71vw] flex flex-col items-center bg-[length:400%] md:bg-cover bg-[left_2%_top_20%] bg-no-repeat sticky -top-24"
        style={{
          backgroundColor: "#fff",
          backgroundImage: `url(${gallery[2].caseImg})`,
        }}
      >
        <div></div>
      </li>
      <li
        id="gallery-item-4"
        className="w-[100vw] md:w-[100vw] h-[100vh] md:h-[71vw] flex flex-col items-center  bg-[length:530%] md:bg-[length:130%_120%]  bg-[left_58%_top_10%] md:bg-[left_0%_top_10%] bg-no-repeat sticky -top-24"
        style={{
          backgroundImage: `url(${gallery[3].caseImg})`,
        }}
      >
        <div className="flex flex-col items-center  w-10/12  h-full pt-36">
          <p
            className="text-black self-start  leading-[1.2rem] md:max-w-[66%]"
            style={{
              fontSize: "1.0rem" && "clamp(0.85rem, 1.05vw, 1.12rem)",
            }}
          >
            <ScrambleEffect tInput={gallery[3].subtitle} />
          </p>
        </div>
      </li>
      <li
        id="gallery-item-5"
        className="w-[100vw] md:w-[100vw] h-[100vh] md:h-[71vw] flex flex-col items-center  bg-[length:330%] md:bg-[length:130%_120%]  bg-[left_58%_top_40%] md:bg-[left_0%_top_10%] bg-no-repeat sticky -top-24"
        style={{
          backgroundImage: `url(${gallery[4].caseImg})`,
        }}
      >
        <div className="flex flex-col items-center  w-10/12  h-full pt-36">
          <p
            className="text-white self-start  leading-[1.2rem] md:max-w-[66%]"
            style={{
              fontSize: "1.0rem" && "clamp(0.85rem, 1.05vw, 1.12rem)",
            }}
          >
            <ScrambleEffect tInput={gallery[4].subtitle} />
          </p>
        </div>
      </li>
      <li
        id="gallery-item-6"
        className="w-[100vw] h-[71vw]   flex flex-col items-center bg-cover bg-center bg-no-repeat sticky -top-24"
        style={{
          backgroundColor: "#fff",
          backgroundImage: `url(${gallery[5].caseImg})`,
        }}
      >
        <div
          //   ref={image}
          className="flex flex-col items-center justify-center max-w-[92%]  h-full"
        >
          <h1
            className="text-white self-center text-[4.7rem] font-semibold"
            style={{ fontSize: "clamp(2.9rem, 4.5vw, 4.7rem)" }}
          >
            <ScrambleEffect tInput={gallery[5].title} />
          </h1>
          <p
            className="text-black self-end text-[1.7rem]"
            style={{
              fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)",
            }}
          >
            <ScrambleEffect tInput={gallery[5].subtitle} />
          </p>
        </div>
      </li>
      <li
        id="gallery-item-7"
        className="w-[100vw] h-[71vw]   flex flex-col items-center bg-cover bg-center bg-no-repeat bg-white sticky -top-24"
        style={{
          backgroundImage: `url(${gallery[6].caseImg})`,
          backgroundSize: "120%",
        }}
      >
        <div
          //   ref={image}
          className="flex  items-center justify-between w-full  h-full"
        >
          <Image
            className="  object-cover object-center max-w-[43%]"
            width={600}
            height={400}
            src={gallery[6].caseImg1}
            alt="Salted Beauty Campaign 01"
          />
          <Image
            className="  object-cover object-center max-w-[43%]"
            width={600}
            height={400}
            src={gallery[6].caseImg2}
            alt="Salted Beauty Campaign 02"
          />
        </div>
      </li>
      <li
        id="gallery-item-8"
        className="w-[100vw] h-[71vw]   flex flex-col items-center  sticky -top-80"
      >
        <div
          //   ref={image}
          className="w-full h-full bg-white flex justify-between"
        >
          <div
            className="w-5/12 h-full   bg-no-repeat relative"
            style={{
              backgroundImage: `url(${gallery[7].caseImg})`,
              backgroundPosition: "60% 30%",
              backgroundSize: "200%",
            }}
          >
            <p
              className="text-black  absolute  origin-top-left -right-4 lg:-right-6 top-4 lg:top-10 writing-vertical-rl"
              style={{
                fontSize: "1.0rem" && "clamp(0.6rem, 1.07vw, 1.15rem)",
              }}
            >
              <ScrambleEffect tInput={gallery[7].title} />
            </p>
          </div>

          <div
            className="w-6/12 self-end h-full  bg-no-repeat relative"
            style={{
              backgroundImage: `url(${gallery[7].caseImg1})`,
              backgroundPosition: "50% 0%",
              backgroundSize: "100%",
            }}
          >
            <p
              className="text-black  absolute  bottom-3 lg:bottom-10 -left-4 lg:-left-12  writing-vertical-rl rotate-180 lg:max-h-[30%] "
              style={{
                fontSize: "1.0rem" && "clamp(0.6rem, 1.07vw, 1.15rem)",
              }}
            >
              <ScrambleEffect tInput={gallery[7].subtitle} />
            </p>
          </div>
        </div>
      </li>
      <li
        id="gallery-item-9"
        className="w-[100vw] h-[55vw] aspect-[100/50]  flex flex-col items-center m-0 p-0 sticky -top-10  bg-black"
      >
        <iframe
          src="https://player.vimeo.com/video/840869673?h=0886893cd2?autoplay=1&loop=1&autopause=0"
          autoPlay={true}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          className="w-full h-full"
        ></iframe>
      </li>
      <li
        id="gallery-item-10"
        className="w-[100vw] h-[71vw]   flex flex-col items-center bg-cover bg-center bg-no-repeat sticky -top-24"
        style={{
          backgroundImage: `url(${gallery[9].caseImg})`,
        }}
      >
        <div
          //   ref={image}
          className="flex flex-col items-center justify-center max-w-[92%]  h-full"
        >
          <p
            className="text-black self-end text-[1.7rem] font-medium leading-none tracking-wide"
            style={{
              fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)",
            }}
          >
            <ScrambleEffect tInput={gallery[9].subtitle} />
          </p>
        </div>
      </li>
    </ul>
  );
}

export default Salted;
