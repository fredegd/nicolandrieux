import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Portrait from "../../../public/images/portrait.png";
import ScrambleEffect from "@/components/ScrambleEffect";

const About = () => {
  const image = useRef();
  return (
    <section
      className="min-h-screen h-auto w-full  pt-24   flex flex-col justify-center items-center gap-12 md:gap-24 md:pt-32 md:h-a"
      id="about"
    >
      <div className=" w-10/12 flex flex-col lg:flex-row items-center gap-12">
        <div
          ref={image}
          className="w-full  sm:w-10/12 md:w-8/12 lg:w-4/12 xl:w-3/12"
          // className="relative w-full md:w-[400px] min-w-[300px] max-h-[545px]"
        >
          <Image
            className="w-full h-auto aspect-[400/400] lg:aspect-[400/545]"
            src={Portrait}
            alt="portrait"
            placeholder="blur"
            style={{ objectFit: "cover" }}
            width={{ md: 400, lg: 400, xl: 400 }}
            height={{ md: 400, lg: 400, xl: 545 }}
          />
        </div>
        <div
          className=" w-full lg:w-[460px] flex flex-col gap-4  tracking-tight leading-[1.5rem]"
          // className=" max-w-[460px] flex flex-col gap-4  tracking-tight leading-[1.5rem]"
          style={{ fontSize: "clamp(1.1rem, 1.25vw, 1.36rem)" }}
        >
          <p
            className=" uppercase font-medium "
            style={{ fontSize: "clamp(1.2rem, 1.3vw, 1.45rem)" }}
          >
            <ScrambleEffect tInput={"NICOLAS LANDRIEUX"} />
          </p>
          <p>
            <ScrambleEffect
              tInput={
                "I am a Berlin-based graphic designer building visual identities for print and web, driven by a dynamic experience through coding systems and motion design. I create brand strategies, Brand identities, products, campaigns, and set designs."
              }
            />
          </p>
          <p>
            <ScrambleEffect
              tInput={
                "Currently based in Berlin, engaging in freelance collaborations with brands and studios worldwide. feel free to reach out for work inquiries or just to connect."
              }
            />
          </p>

          <p className="lowercase">
            <Link href={"mailto:nico@landrieux.design"} target="_blank">
              <ScrambleEffect tInput={"   nico@landrieux.design"} />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
