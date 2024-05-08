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
      const targets = gsap.utils.toArray([
        "img",
        "li",
        "h1",
        "p",
        image.current,
      ]);
      gsap.fromTo(
        targets,
        { x: "20%", opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1 }
      );
      timeline.add(gsap.to(container.current, { opacity: 0 }));
    },
    { scope: container }
  );

  const router = useRouter();

  useEffect(() => {
    const gallery = document.querySelector(".gallery");
    const galleryContainer = document.querySelector(".gallery-wrapper");

    const pinTrigger = ScrollTrigger.create({
      trigger: galleryContainer,
      pin: true,
      start: "top top",
      end: "+=" + gallery.offsetWidth,
      scrub: 1,
    });

    let amoutToScroll = (gallery.offsetWidth - window.innerWidth) * 0.9;
    let tl = gsap.timeline();
    tl.to(gallery, {
      x: -amoutToScroll,
      ease: "none",
      scrollTrigger: {
        trigger: galleryContainer,
        start: "top 0px",
        end: "+=" + amoutToScroll,
        scrub: 1,
      },
    });
    return () => {
      pinTrigger.kill();
      tl.kill();
    };
  }, []);

  if (props.hasError) {
    return <h1>Error - please try another parameter</h1>;
  }

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="w-[100vw] h-[100vh] -mt-24">
      <div
        ref={container}
        className="gallery-wrapper  h-full w-[1000%] overflow-scroll p-0 m-0 max-h-[100vh]"
      >
        <ul className=" flex gallery   p-0 m-0">
          {props.specificCaseData.metadata.slides.map((slide) => {
            const cls = slide?.classNames;
            const styles = slide?.styles;
            return (
              <li
                key={slide.content}
                className="w-[95vw] h-[98vh]  static flex"
                style={{
                  minWidth: "95vw",
                  minHeight: "98vh",
                  backgroundImage: `url(${slide.caseImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div style={{ ...styles }}>
                  <h1>
                    <ScrambleEffect tInput={slide.title} />
                  </h1>
                  <p>
                    <ScrambleEffect tInput={slide.subtitle} />
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}