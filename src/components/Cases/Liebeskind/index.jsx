import React from "react";
import Image from "next/image";
import ScrambleEffect from "../../ScrambleEffect";

function Liebeskind({ gallery }) {
  return (
    <ul className="    p-0 m-0">
      <li
        id="gallery-item-1"
        className="w-[100vw] h-[71vw] flex items-center bg-white bg-cover bg-center bg-no-repeat sticky -top-52"
        // style={{
        //   backgroundImage: `url(${gallery[0].caseImg})`,
        // }}
      >
        <div className="flex items-center justify-end  w-full h-full">
          <div className="flex items-center w-1/2 p-0 m-0">
            <p
              className="text-black   text-[1.0rem]"
              style={{
                fontSize:
                  "1.0rem" &&
                  "clamp(0.85rem, 1.07vw, 1.15rem) flex-grow-2 w-[90%]",
              }}
            >
              <ScrambleEffect tInput={gallery[0].subtitle} />
            </p>
            <h1
              className="text-black self-center text-[3.5rem] font-semibold -rotate-90 flex-grow-0 h-full te"
              // style={{ fontSize: "clamp(2.9rem, 4.5vw, 4.7rem) flex-grow-0" }}
            >
              <ScrambleEffect tInput={gallery[0].title} />
            </h1>
          </div>
          <Image
            src={gallery[0].caseImg}
            alt="Liebeskind Berlin"
            width={800}
            height={570}
            className="w-1/2 h-full object-cover object-center"
          />
        </div>
      </li>
      <li
        id="gallery-item-2"
        className="w-[100vw] h-[71vw]   flex flex-col items-center justify-start bg-white bg-cover bg-center bg-no-repeat  px-48"
      >
        <p
          className="text-black   w-full py-32 text-[1.7rem] leading-[1.5rem]  sticky -top-48"
          style={{
            fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)",
          }}
        >
          <ScrambleEffect tInput={gallery[1].subtitle} />
        </p>

        <iframe
          src="https://drive.google.com/file/d/1jCjX6ERPtVf0iLvBK4AAwMfnpIEhH8wS/preview?t=50"
          autoPlay={true}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          className="w-full h-full border border-slate-950"
        ></iframe>
      </li>
      <li
        id="gallery-item-3"
        className="w-[100vw] h-[71vw]   flex flex-col items-center bg-cover bg-center bg-no-repeat sticky -top-24"
        style={{
          backgroundImage: `url(${gallery[2].caseImg})`,
        }}
      >
        <div className="flex flex-col items-center justify-center max-w-[92%]  h-full">
          <h1
            className="text-white self-center text-[4.7rem] font-semibold"
            style={{ fontSize: "clamp(2.9rem, 4.5vw, 4.7rem)" }}
          >
            <ScrambleEffect tInput={gallery[3].title} />
          </h1>
          <p
            className="text-black  self-end text-[1.7rem]"
            style={{
              fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)",
            }}
          >
            <ScrambleEffect tInput={gallery[2].subtitle} />
          </p>
        </div>
      </li>

      <li
        id="gallery-item-3"
        className="w-[100vw] h-[75vw]   flex flex-col items-center bg-cover bg-center bg-no-repeat sticky -top-[50%]"
        style={{
          backgroundColor: "#fff",
          // backgroundImage: `url(${gallery[3].caseImg})`,
        }}
      >
        <div className="flex">
          <Image
            src={gallery[3].caseImg}
            alt="Liebeskind Berlin"
            width={800}
            height={570}
            className="w-1/2 h-full object-cover object-center"
          />

          <Image
            src={gallery[3].caseImg1}
            alt="Liebeskind Berlin"
            width={800}
            height={570}
            className="w-1/2 h-full object-cover object-center"
          />
        </div>
        <p className="rotate-90 text-left   pt-24 pl-96 fixed top-24">
          <ScrambleEffect tInput={gallery[3].subtitle} />
        </p>
        <p className="-rotate-90 pt-24 pr-96 text-end fixed top-24">
          <ScrambleEffect tInput={gallery[3].subtitle} />
        </p>
      </li>

      <li
        id="gallery-item-5"
        className="w-[100vw] h-[75vw]   flex flex-col items-center bg-cover bg-center bg-no-repeat sticky -top-[50%]"
        style={{
          backgroundColor: "#fff",
          // backgroundImage: `url(${gallery[3].caseImg})`,
        }}
      >
        <div className="flex w-full p-8 gap-12">
          <Image
            src={gallery[4].caseImg}
            alt="Liebeskind Berlin"
            width={800}
            height={570}
            className="w-1/2 h-full object-cover object-center"
          />
          <div className="flex flex-col gap-8">
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
        id="gallery-item-4"
        className="w-[100vw] h-[75vw]   flex flex-col items-center bg-cover bg-center bg-no-repeat sticky -top-[50%]"
        style={{
          backgroundColor: "#fff",
          // backgroundImage: `url(${gallery[3].caseImg})`,
        }}
      >
        <div className="flex gap-12">
          <Image
            src={gallery[5].caseImg}
            alt="Liebeskind Berlin"
            width={800}
            height={570}
            className="w-1/2 h-full object-cover object-center"
          />
          <Image
            src={gallery[5].caseImg1}
            alt="Liebeskind Berlin"
            width={800}
            height={570}
            className="w-1/2 h-full object-cover object-center"
          />
        </div>
      </li>
      <li
        id="gallery-item-6"
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
          src="https://drive.google.com/file/d/1vHFXwc0BShBr4tF0GeC8PE68TEO-25_l/preview"
          autoPlay={true}
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
