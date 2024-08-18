"use client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
  const container = useRef(null);

  const gallery = props.specificCaseData.metadata.slides;

  const metadata = props.specificCaseData.metadata;

  const slug = props.specificCaseData.slug;
  useGSAP(() => {
    // Animate li elements
    const listItems = gsap.utils.toArray("li");

    listItems.forEach((item) => {
      gsap
        .timeline({
          scrollTrigger: {
            // markers: true,
            trigger: item,
            start: "top 100%",
            end: "top 30%",
            scrub: true,
          },
        })
        .from(item, {
          filter: "blur(15px)",
        })
        .to(item, {
          filter: "blur(0px)",
        });
    });

    return () => {
      listItems.forEach((item) => {
        gsap.killTweensOf(item);
      });
    };
  }, []);

  const router = useRouter();

  if (props.hasError) {
    return <h1>Error - please try another parameter</h1>;
  }

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>{slug.toUpperCase()} —— NICOLAS LANDRIEUX</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={slug.toUpperCase()} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:alt" content={metadata.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.landrieux.design/work/${slug}`}
        />
      </Head>
      <section className="w-[100vw] h-[71vw]  -mt-24 " ref={container}>
        {slug == "salted" ? (
          <Salted gallery={gallery} />
        ) : slug == "liebeskind" ? (
          <Liebeskind gallery={gallery} />
        ) : slug == "kunstkraftwerk" ? (
          <Kunstkraftwerk gallery={gallery} />
        ) : null}
      </section>
    </>
  );
}


