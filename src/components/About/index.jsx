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
      id="aboutte"
    >
      <div className=" sm:max-w-[80%] md:max-w-[90%] w-full flex flex-col md:flex-row-reverse items-center md:justify-end gap-5 p-8">
        <div
          className="flex flex-col gap-8 md:max-w-[320px] lg:min-w-[60%]"
          style={{ fontSize: "clamp(1.1rem, 1.32vw, 1.5rem)" }}
        >
          <p
            className=" mb-2  "
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

          <p>
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
            className="w-full"
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
