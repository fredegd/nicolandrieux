"use client";
import { useRouter } from "next/router";
import { useContext, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/context/TransitionContext";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrambleEffect from "@/components/ScrambleEffect";
import path from "path";
import fs from "fs/promises";
import Image from "next/image";

async function getData() {
  const filePath = path.join(process.cwd(), "src", "allWorks.json");
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData.toString());
  return data;
}

export const getStaticProps = async (context) => {
  const itemID = context.params?.slug;
  const data = await getData();
  const foundItem = data.find((item) => itemID === item.slug);

  if (!foundItem) {
    return {
      props: { hasError: true },
    };
  }

  return {
    props: {
      specificCaseData: foundItem,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await getData();
  const pathsWithParams = data.map((work) => ({
    params: { slug: work.slug },
  }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
};

gsap.registerPlugin(ScrollTrigger);

export default function Page(props) {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const image = useRef();

  const gallery = props.specificCaseData.metadata.slides;

  const slug = props.specificCaseData.slug;
  console.log(slug);
  useGSAP(
    () => {
      const targets = gsap.utils.toArray([
        "p",
        "h1",
        "li",
        "img",
        image.current,
      ]);
      gsap.fromTo(
        targets,
        { y: "20%", opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "none", stagger: 0.05 }
      );
      timeline.add(
        gsap.to(container.current, {
          opacity: 0,
          filter: "none",
        })
      );
    },
    { scope: container }
  );

  const router = useRouter();

  if (props.hasError) {
    return <h1>Error - please try another parameter</h1>;
  }

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="w-[100vw] h-[71vw]  -mt-24 ">
      {slug == "salted" ? (
        <ul ref={container} className="    p-0 m-0">
          <li
            id="gallery-item-1"
            className="w-[100vw] h-[71vw] flex flex-col items-center bg-cover bg-center bg-no-repeat sticky -top-80"
            style={{
              backgroundImage: `url(${gallery[0].caseImg})`,
            }}
          >
            <div
              ref={image}
              className="flex flex-col items-center justify-center max-w-[92%]  h-full"
            >
              <h1
                className="text-white self-center text-[4.7rem] font-semibold"
                style={{ fontSize: "clamp(2.9rem, 4.5vw, 4.7rem)" }}
              >
                <ScrambleEffect tInput={gallery[0].title} />
              </h1>
              <p
                className="text-black  self-end text-[1.7rem]"
                style={{
                  fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)",
                }}
              >
                <ScrambleEffect tInput={gallery[0].subtitle} />
              </p>
            </div>
          </li>
          <li
            id="gallery-item-2"
            className="w-[100vw] h-[71vw]   flex flex-col items-end justify-center bg-cover bg-center bg-no-repeat sticky -top-24"
            style={{
              backgroundImage: `url(${gallery[1].caseImg})`,
            }}
          >
            <p
              className="text-black self-end  max-w-[33%] pr-4 text-[1.7rem] leading-[1.5rem]"
              style={{
                fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)",
              }}
            >
              <ScrambleEffect tInput={gallery[1].subtitle} />
            </p>
          </li>
          <li
            id="gallery-item-3"
            className="w-[100vw] h-[60vw]   flex flex-col items-center bg-cover bg-center bg-no-repeat sticky -top-24"
            style={{
              backgroundColor: "#fff",
              backgroundImage: `url(${gallery[2].caseImg})`,
            }}
          >
            <div></div>
          </li>
          <li
            id="gallery-item-4"
            className="w-[100vw] h-[71vw]   flex flex-col items-center  bg-no-repeat sticky -top-24"
            style={{
              backgroundImage: `url(${gallery[3].caseImg})`,
              backgroundPosition: "0% 10%",
              backgroundSize: "130% 120%",
            }}
          >
            <div
              ref={image}
              className="flex flex-col items-center justify-center w-10/12  h-full"
            >
              <p
                className="text-black self-start  leading-[1.2rem] max-w-[66%]"
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
            className="w-[100vw] h-[71vw]   flex flex-col items-center  bg-no-repeat sticky -top-24"
            style={{
              backgroundImage: `url(${gallery[4].caseImg})`,
              backgroundPosition: "0% 50%",
              backgroundSize: "130%",
            }}
          >
            <div
              ref={image}
              className="flex flex-col items-center justify-center w-10/12  h-full"
            >
              <p
                className="text-white self-start  leading-[1.2rem] max-w-[60%]"
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
              ref={image}
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
              ref={image}
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
              ref={image}
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
              ref={image}
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
      ) : slug == "liebeskind" ? (
        <ul ref={container} className="    p-0 m-0">
          <li
            id="gallery-item-1"
            className="w-[100vw] h-[71vw] flex items-center bg-white bg-cover bg-center bg-no-repeat sticky -top-52"
            // style={{
            //   backgroundImage: `url(${gallery[0].caseImg})`,
            // }}
          >
            <div
              ref={image}
              className="flex items-center justify-end  w-full h-full"
            >
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
              src="https://drive.google.com/file/d/1jCjX6ERPtVf0iLvBK4AAwMfnpIEhH8wS/preview"
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
            <div
              ref={image}
              className="flex flex-col items-center justify-center max-w-[92%]  h-full"
            >
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
      ) : slug == "kunstkraftwerk" ? (
        <ul ref={container} className="    p-0 m-0">
          <li
            id="gallery-item-1"
            className="w-[100vw] h-[71vw] flex flex-col items-center bg-cover bg-center bg-black bg-no-repeat sticky -top-80"
            style={
              {
                // backgroundImage: `url(${gallery[0].caseImg})`,
              }
            }
          >
            <iframe
              id="vimeo-video"
              src="https://player.vimeo.com/video/869508192?h=d7442cbbca&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1"
              autoPlay={true}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              className="w-full h-full"
            ></iframe>
          </li>
        </ul>
      ) : (
        <div></div>
      )}
    </section>
  );
}
