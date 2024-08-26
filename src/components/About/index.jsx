import React, { useRef, useState } from "react";
import Image from "next/image";
import ScrambleEffect from "@/components/ScrambleEffect";

const About = () => {
  const image = useRef();
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  let portrait = "https://ik.imagekit.io/3vlhcozis/Nicolandrieux/portrait.png";
  const email = "nico@landrieux.design";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Hide the copied message after 2 seconds
    });
  };
  return (
    <section
      className=" min-h-screen  w-full  pt-40 md:pt-24 lg:pt-0   flex flex-col justify-center items-center "
      id="about"
    >
      <div className=" w-10/12 h-[100vh] flex flex-col lg:flex-row items-center sm:items-start lg:items-center gap-8 text-sm md:text-md lg:text-[1.12vw] ">
        <div
          ref={image}
          className=" w-full  sm:w-10/12 md:w-8/12 lg:w-4/12 xl:w-3/12 "
        >
          <Image
            className="w-full h-auto aspect-[400/400] lg:aspect-[400/545]"
            src={portrait}
            alt="portrait"
            placeholder="blur"
            blurDataURL={portrait}
            style={{ objectFit: "cover" }}
            width={400}
            height={545}
          />
        </div>
        <div className=" w-full lg:w-[460px] flex flex-col gap-4  tracking-tight leading-[1.1rem]">
          <p className=" uppercase font-medium ">
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

          <div
            className="relative flex"
            onMouseEnter={() => setIsPopoverVisible(true)}
            onMouseLeave={() => setIsPopoverVisible(false)}
            onTouchStart={() => setIsPopoverVisible(true)}
            onTouchEnd={() => setIsPopoverVisible(false)}
            onClick={handleCopy}
          >
            <p className="lowercase cursor-pointer p-1">{email}</p>
            {isPopoverVisible && (
              <div className=" w-fit p-1 bg-slate-800 text-white text-xs ">
                {isCopied ? "Address Copied!" : "Copy address"}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
