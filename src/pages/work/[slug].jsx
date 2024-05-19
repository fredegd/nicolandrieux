"use client";
import { useRouter } from "next/router";
import { useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/context/TransitionContext";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrambleEffect from "@/components/ScrambleEffect";
import path from "path";
import fs from "fs/promises";

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
      <ul
        ref={container}
        className="   w-[100%]  h-full max-h-[100vh]   p-0 m-0"
      >
        <li
          id="gallery-item-1"
          className="w-[100vw] h-[71vw] static flex flex-col items-center bg-cover bg-center bg-no-repeat"
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
              className="text-black self-end text-[1.7rem]"
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
          className="w-[100vw] h-[71vw]   static flex flex-col items-end bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${gallery[1].caseImg})`,
          }}
        >
          <div
            ref={image}
            className="flex flex-col items-center justify-center max-w-[35%] p-4  h-full"
          >
            <p
              className="text-black self-start text-[1.7rem] leading-[1.5rem]"
              style={{
                fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)",
              }}
            >
              <ScrambleEffect tInput={gallery[1].subtitle} />
            </p>
          </div>
        </li>
        <li
          id="gallery-item-3"
          className="w-[100vw] h-[71vw]   static flex flex-col items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundColor: "#fff",
            backgroundImage: `url(${gallery[2].caseImg})`,
          }}
        >
          <div></div>
        </li>
        <li
          id="gallery-item-4"
          className="w-[100vw] h-[71vw]   static flex flex-col items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${gallery[3].caseImg})`,
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
          className="w-[100vw] h-[71vw]   static flex flex-col items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${gallery[4].caseImg})`,
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
          className="w-[100vw] h-[71vw]   static flex flex-col items-center bg-cover bg-center bg-no-repeat"
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
          className="w-[100vw] h-[71vw]   static flex flex-col items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${gallery[6].caseImg})`,
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
              <ScrambleEffect tInput={gallery[6].title} />
            </h1>
            <p
              className="text-black self-end text-[1.7rem]"
              style={{
                fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)",
              }}
            >
              <ScrambleEffect tInput={gallery[6].subtitle} />
            </p>
          </div>
        </li>
        <li
          id="gallery-item-8"
          className="w-[100vw] h-[71vw]   static flex flex-col items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${gallery[7].caseImg})`,
          }}
        >
          <div
            ref={image}
            className="flex flex-col  justify-center max-w-[92%]  h-full"
          >
            <p
              className="text-black self-end text-[1.7rem] rotate-90 mr-80 -mt-80"
              style={{
                fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)",
              }}
            >
              <ScrambleEffect tInput={gallery[7].title} />
            </p>
            <p
              className="text-black self-end text-[1.7rem] -rotate-90"
              style={{
                fontSize: "1.0rem" && "clamp(0.85rem, 1.07vw, 1.15rem)",
              }}
            >
              <ScrambleEffect tInput={gallery[7].subtitle} />
            </p>
          </div>
        </li>
        <li
          id="gallery-item-9"
          className="w-[100vw] h-[71vw]   static flex flex-col items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${gallery[8].caseImg})`,
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
              <ScrambleEffect tInput={gallery[8].title} />
            </h1>
            <p
              className="text-black self-end text-[1.7rem]"
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
          className="w-[100vw] h-[71vw]   static flex flex-col items-center bg-cover bg-center bg-no-repeat"
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
    </section>
  );
}