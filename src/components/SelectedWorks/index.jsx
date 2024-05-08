"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { allWorks } from "../../allWorks";
import ScrambleEffect from "../ScrambleEffect";

export default function SelectedWorks() {
  const image = useRef();
  return (
    <section className="w-full  py-24  flex flex-col justify-center items-center">
      <div className="sm:max-w-[80%] md:max-w-[90%] w-full flex flex-col gap-40 md:gap-8 p-8">
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
              className="flex flex-col space-y-1 mb-6"
              href={`/work/${project.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row items-center  gap-8 space-x-0 md:space-x-2">
                <Image
                  ref={image}
                  src={project.metadata.image || ""}
                  alt={project.metadata.title}
                  width={350}
                  height={0}
                  className="rounded-lg w-full md:w-1/4"
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
