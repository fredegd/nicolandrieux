import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Portrait from "../../../public/images/portrait.png";
import ScrambleEffect from "@/components/ScrambleEffect";

const About = () => {
  const image = useRef();
  return (
    <section
      className="w-full  py-24  flex flex-col justify-center items-center h-auto"
      id="about"
    >
      <div className=" w-10/12 flex flex-col md:flex-row-reverse items-center md:justify-end gap-12">
        <div
          className=" max-w-[460px] flex flex-col gap-4  tracking-tight leading-[1.5rem]"
          style={{ fontSize: "clamp(1.1rem, 1.25vw, 1.36rem)" }}
        >
          <p
            className=" uppercase font-medium "
            style={{ fontSize: "clamp(1.8rem, 2.2vw, 2.1rem)" }}
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
        <div
          ref={image}
          className="relative w-full md:w-[400px] min-w-[300px] max-h-[545px]"
        >
          <Image
            className="w-full h-auto aspect-[400/545]"
            src={Portrait}
            alt="portrait"
            placeholder="blur"
            style={{ objectFit: "cover" }}
            width={400}
            height={545}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
