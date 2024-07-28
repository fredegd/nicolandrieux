"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useContext } from "react";
import { TransitionContext } from "@/context/TransitionContext";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { allWorks } from "../../allWorks";
import ScrambleEffect from "../ScrambleEffect";

export default function SelectedWorks() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);

  // useGSAP(
  //   () => {
  //     const targets = gsap.utils.toArray(["work"]);
  //     gsap.fromTo(targets, { y: 200 }, { y: 0, stagger: 0.2 });
  //     timeline.add(gsap.to(container.current, { opacity: 0 }));
  //   },
  //   { scope: container }
  // );

  return (
    <section
      className=" min-h-screen w-full   pt-36 md:pt-24 mb-24 flex flex-col justify-center items-center"
      id="work"
      ref={container}
    >
      <div className="w-10/12 flex flex-col gap-4 md:gap-8">
        {allWorks
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((project) => (
            <Link
              key={project.slug}
              className="flex flex-col space-y-1 mb-6 brightness-90  hover:brightness-105  hover:bg-white hover:text-black  transition duration-120 ease-in-out "
              id="work-card"
              href={`/work/${project.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row md:items-center  gap-6 md:gap-12  space-x-0 md:space-x-2">
                <Image
                  className="w-full md:max-w-[400px] h-auto aspect-[400/220]  object-cover"
                  src={project.metadata.image || ""}
                  alt={project.metadata.title}
                  width={400}
                  height={220}
                />

                <div className="text-sm md:text-md lg:text-[1.12vw] w-full">
                  <p className=" font-semibold  tracking-tight">
                    <ScrambleEffect tInput={project.metadata.title} />
                  </p>

                  <p className="  tracking-tight">
                    <ScrambleEffect tInput={project.metadata.summary} />
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
