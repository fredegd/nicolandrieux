import React from "react";
import Image from "next/image";
import ScrambleEffect from "../../ScrambleEffect";
import ModalDisplay from "../../ModalDisplay";
function Salted({ gallery }) {
  return (
    <ul className="p-0 m-0">
      <li
        id="gallery-item-1"
        className="w-[100vw]  h-[100vh]  flex flex-col items-center 
        bg-[length:530%] md:bg-cover bg-[left_40%_top_0rem]  md:bg-center bg-no-repeat sticky top-0 mb-24"
        style={{
          backgroundImage: `url(${gallery[0].caseImg})`,
        }}
      >
        <div className="flex flex-col items-start  justify-center w-10/12 h-full">
          <h1 className="hidden md:block text-white tracking-normal text-[11vw] md:text-[4.2vw] leading-none font-semibold mb-4">
            <ScrambleEffect tInput={gallery[0].title} />
          </h1>
          <h1 className="md:hidden w-[90%] text-white tracking-normal text-[11vw] md:text-[4.2vw] leading-none font-semibold mb-4">
            <ScrambleEffect tInput={gallery[0].title.replace(/——/g, "")} />
          </h1>
          <p className="hidden md:inline text-end text-black   md:w-full text-sm md:text-md lg:text-[1.12vw]">
            <ScrambleEffect tInput={gallery[0].subtitle} />
          </p>
          <p className="md:hidden text-black   w-4/12 md:w-full text-sm md:text-md lg:text-[1.12vw] font-medium">
            <ScrambleEffect tInput={gallery[0].subtitle.replace(/\|/g, "")} />
          </p>
        </div>
      </li>
      <li
        id="gallery-item-2"
        className="w-[100vw] md:w-[100vw] h-[108vh] md:h-[71vw] 
        flex flex-col-reverse md:flex-row  md:items-start items-center md:bg-cover bg-center bg-no-repeat sticky -top-2 md:-top-48 pb-20 bg-white"
      >
        <Image
          className="w-full md:w-8/12  h-auto aspect-[400/400]  object-[right_30%] object-cover"
          src={gallery[1].caseImg || ""}
          alt={gallery[1].content}
          width={1600}
          height={1600}
        />{" "}
        <div className="w-full md:w-4/12 h-full bg-white flex flex-col items-center justify-center pt-28 md:pt-4">
          <p className="w-10/12 md:w-11/12 text-black  text-sm md:text-md lg:text-[1.12vw] leading-tight font-semibold mb-4">
            <ScrambleEffect tInput={gallery[1].title} />
          </p>
          <p className="w-10/12 md:w-11/12 text-black  text-sm md:text-md lg:text-[1.12vw] leading-[1.5rem]">
            <ScrambleEffect tInput={gallery[1].subtitle} />
          </p>
        </div>
      </li>
      <li
        id="gallery-item-3"
        className="w-[100vw] md:w-[100vw] h-[100vh] md:h-[71vw] flex flex-col items-center bg-[length:400%] md:bg-cover bg-[left_5%_top_20%] bg-no-repeat bg-white sticky -top-[50%]"
        style={{
          backgroundImage: `url(${gallery[2].caseImg})`,
        }}
      >
        <div></div>
      </li>
      <li
        id="gallery-item-4"
        className="w-[100vw] md:w-[100vw] h-[100vh] md:h-[71vw] flex flex-col md:justify-center items-center  bg-[length:530%] md:bg-[length:130%_120%]  bg-[left_58%_top_10%] md:bg-[left_0%_top_10%] bg-no-repeat sticky -top-12"
        style={{
          backgroundImage: `url(${gallery[3].caseImg})`,
        }}
      >
        <div className="flex flex-col items-center justify-center  w-10/12 mt-48 md:m-0">
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
        className="w-[100vw] md:w-[100vw] h-[100vh] md:h-[71vw] flex flex-col items-center md:justify-center  bg-[length:300%] md:bg-[length:140%]  bg-[left_60%_top_30%]  md:bg-[left_0%_top_50%] bg-no-repeat sticky -top-12"
        style={{
          backgroundImage: `url(${gallery[4].caseImg})`,
        }}
      >
        <div className="flex flex-col items-center justify-center  w-10/12 mt-48 md:m-0">
          <p
            className="text-white self-start leading-[1.2rem] md:max-w-[66%]"
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
        className={`w-[100vw] md:w-[100vw] h-[100vh] md:h-[75vw]    
                    flex flex-col items-center  bg-[length:70%] bg-[center_top_0] bg-no-repeat sticky  top-0 md:-top-36 py-56 md:pt-24 bg-white`}
      >
        <Image
          className="  object-cover md:object-center w-9/12 hidden md:block  "
          width={600}
          height={600}
          src={gallery[5].caseImg}
          alt="Salted Beauty Campaign 01"
        />
        <Image
          className="  object-cover md:object-center md:hidden  "
          width={600}
          height={600}
          src={gallery[5].caseImg1}
          alt="Salted Beauty Campaign 01"
        />
      </li>
      <li
        id="gallery-item-7"
        className=" w-[100vw] md:w-[100vw] min-h-[100vh] md:h-[71vw]   
                   md:flex flex-col  bg-[center_top_50%] md:bg-center bg-no-repeat bg-[length:300%] md:bg-[length:140%] md:bg-white sticky top-[-100%] md:top-[-50%]"
        style={{
          backgroundImage: `url(${gallery[6].caseImg})`,
        }}
      >
        <div className="hidden md:flex flex-col md:flex-row items-center justify-end  md:justify-between md:w-full  md:h-full">
          <Image
            className="  object-cover md:object-center   md:max-w-[48%]"
            width={600}
            height={400}
            src={gallery[6].caseImg1}
            alt="Salted Beauty Campaign 01"
          />
          <Image
            className="  object-cover object-center md:max-w-[43%]"
            width={600}
            height={400}
            src={gallery[6].caseImg2}
            alt="Salted Beauty Campaign 02"
          />
        </div>
      </li>
      <li
        id="gallery-item-7-bis"
        className="md:hidden  w-[100vw] md:w-[100vw] h-[100vh] md:h-[71vw]  bg-[length:400%] md:bg-[length:130%_120%]  bg-[left_48%_top_0%] md:bg-[left_0%_top_10%] bg-no-repeat sticky top-0"
        style={{
          backgroundImage: `url(${gallery[6].caseImg2})`,
        }}
      >
        <div></div>
      </li>
      <li
        id="gallery-item-7-tris"
        className="md:hidden w-[100vw] md:w-[100vw] h-[100vh] md:h-[71vw]  bg-[length:200%]  bg-[left_45%_top_30%] md:bg-[left_0%_top_10%] bg-no-repeat sticky -top-0"
        style={{
          backgroundImage: `url(${gallery[6].caseImg1 + "?tr=rt-270"})`,
        }}
      >
        <div></div>
      </li>

      <li
        id="gallery-item-8"
        className="w-[100vw] md:w-[100vw] h-[100vh] md:h-[85vw]  hidden md:flex flex-col items-center  sticky -top-[50%]"
      >
        <div
          className="w-full h-full 
        flex justify-between bg-white"
        >
          <div className="w-[47%] h-full  flex items-center   relative  ">
            <Image
              className="w-full h-auto object-cover"
              width={300}
              height={810}
              src={gallery[7].caseImg}
              alt={gallery[7].subtitle1}
            />
            <Image
              className="w-full h-auto object-cover"
              width={300}
              height={810}
              src={gallery[7].caseImg1}
              alt={gallery[7].subtitle1}
            />
            <p
              className="text-black  absolute  origin-top-left -right-8 top-8 lg:top-44 writing-vertical-rl"
              style={{
                fontSize: "1.0rem" && "clamp(0.6rem, 1.07vw, 1.15rem)",
              }}
            >
              <ScrambleEffect tInput={gallery[7].subtitle1} />
            </p>
          </div>

          <div className="w-[45%] flex items-center h-full  relative">
            <Image
              className="w-full h-auto object-cover"
              width={600}
              height={810}
              src={gallery[7].caseImg2}
              alt={gallery[7].subtitle2}
            />
            <p
              className="text-black  h-[22rem] absolute  origin-bottom-left -left-2 top-[35vh]  writing-vertical-rl rotate-180"
              style={{
                fontSize: "1.0rem" && "clamp(0.6rem, 1.07vw, 1.15rem)",
              }}
            >
              <ScrambleEffect tInput={gallery[7].subtitle2} />
            </p>
          </div>
        </div>
      </li>
      <li
        id="gallery-item-9"
        className="w-[100vw] md:w-[100vw] h-[100vh] md:min-h-[60vw]  flex flex-col items-center m-0 p-0 bg-white sticky -top-48"
      >
        <ModalDisplay
          buttonBgStyle={{
            backgroundImage: `url(${gallery[8].caseImg1})`,
          }}
          classNames={
            "w-full h-full rounded-none p-0  cursor-default flex items-center justify-center relative, bg-cover  bg-center bg-no-repeat"
          }
          buttonColor={"white"}
          video={gallery[8].caseImg}
          title={gallery[8].title}
        />

        <div className="w-10/12  absolute top-[75vh] sm:top-[70vh] md:top-[75vh] lg:top-[60vh] xl:top-[60vh] ">
          <p
            className="w-full lg:w-[45%] text-black  text-[1.7rem] font-normal leading-none tracking-wide"
            style={{
              fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)",
            }}
          >
            <ScrambleEffect tInput={gallery[8].subtitle} />
          </p>
        </div>
      </li>
      <li
        id="gallery-item-10"
        className=" w-[100vw] md:w-[100vw] min-h-[100vh] md:h-[73vw]  
        flex flex-col items-center
        bg-cover md:bg-center bg-[left_25%_top_0] bg-no-repeat filter-none sticky -top-24"
        style={{
          backgroundImage: `url(${gallery[9].caseImg})`,
        }}
      >
        <p
          className="w-10/12 pb-[25vh] md:pb-0 
          absolute top-[40%] md:top-[53%] 
           text-white md:text-black  text-[1.7rem] font-normal leading-none tracking-wide"
          style={{
            fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)",
          }}
        >
          <ScrambleEffect tInput={gallery[9].subtitle} />
        </p>
      </li>
    </ul>
  );
}

export default Salted;
