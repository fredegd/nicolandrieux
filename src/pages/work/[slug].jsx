"use client";
import { useRouter } from "next/router";
import { useContext, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/context/TransitionContext";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Salted from "../../components/Cases/Salted";
import Liebeskind from "../../components/Cases/Liebeskind";
import Kunstkraftwerk from "../../components/Cases/Kunstkraftwerk";
import { getData } from "../../utils/readJson";


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
  // console.log(slug);
  useGSAP(
    () => {
      const targets = gsap.utils.toArray(["p", "h1", "li", "img", "iframe"]);
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
    <section className="w-[100vw] h-[71vw]  -mt-24 " ref={container}>
      {slug == "salted" ? (
        <Salted gallery={gallery} />
      ) : slug == "liebeskind" ? (
        <Liebeskind gallery={gallery} />
      ) : slug == "kunstkraftwerk" ? (
        <Kunstkraftwerk gallery={gallery} />
      ) : null}
    </section>
  );
}
