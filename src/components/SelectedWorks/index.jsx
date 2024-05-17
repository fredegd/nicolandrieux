"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { allWorks } from "../../allWorks";
import ScrambleEffect from "../ScrambleEffect";

export default function SelectedWorks() {
  const image = useRef();
  return (
    <section
      className="w-full  py-24  flex flex-col justify-center items-center"
      id="work"
    >
      <div className="w-10/12 flex flex-col gap-40 md:gap-8 ">
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
              className="flex flex-col space-y-1 mb-6 brightness-90  hover:brightness-105 hover:bg-white hover:text-black"
              href={`/work/${project.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row items-center  gap-12 space-x-0 md:space-x-2">
                <Image
                  ref={image}
                  className="w-full md:w-[275px] h-auto aspect-[275/220] "
                  src={project.metadata.image || ""}
                  alt={project.metadata.title}
                  width={275}
                  height={220}
                />

                <div>
                  <p className="text-[1.8rem] font-semibold  tracking-tight">
                    <ScrambleEffect tInput={project.metadata.title} />
                  </p>

                  <p className=" text-[1.5rem]  tracking-tight">
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
