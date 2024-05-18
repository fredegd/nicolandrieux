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

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(["img", "p", image.current]);
      gsap.fromTo(
        targets,
        { y: "20%", opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05 }
      );
      timeline.add(gsap.to(container.current, { opacity: 0 }));
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
    <section className="w-[100vw] h-[100vh] -mt-24 ">
      <ul
        ref={container}
        className="  gallery w-[100%]  h-full max-h-[100vh]   p-0 m-0"
      >
        {props.specificCaseData.metadata.slides.map((slide, idx) => {
          const cls = slide?.classNames;
          const cls_h1 = slide?.classNames_h1;
          const cls_p = slide?.classNames_p;
          console.log(cls_h1, cls_p, cls);
          return (
            <li
              key={slide.content}
              className="w-[100vw] h-[100vh]  static flex flex-col"
              style={{
                minWidth: "100vw",
                minHeight: "100vh",
                backgroundImage: `url(${slide.caseImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={cls}>
                <h1 className={cls_h1}>
                  <ScrambleEffect tInput={slide.title} />
                </h1>
                <p className={cls_p}>
                  <ScrambleEffect tInput={slide.subtitle} />
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}