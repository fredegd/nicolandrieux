import React from "react";
import Link from "next/link";
import ScrambleEffect from "../ScrambleEffect";
import { ArrowIcon } from "@/components/ArrowIcon";

const navItems = {
  "/": {
    name: "home",
    icn: "",
    target: "",
  },
  "/work": {
    name: "work",
    icn: "",
    target: "",
  },
  "/about": {
    name: "about",
    icn: "",
    target: "",
  },
  "https://www.instagram.com/exhausted_lab/": {
    name: "instagram",
    icn: { ArrowIcon },
    target: "_blank",
  },
  "https://www.linkedin.com/in/nicolaslandrieux/": {
    name: "linkedin",
    icn: { ArrowIcon },
    target: "_blank",
  },
};

export default function Index() {
  return (
    <aside className="tracking-tight ">
      <div className=" h-24 w-full fixed top-0 z-50 flex items-center justify-center backdrop-blur-sm   bg-neutral-50 bg-opacity-10 ">
        <nav
          className="h-full w-[90%] flex items-center justify-start gap-4   fade md:overflow-auto px-3 sm:px-6"
          id="nav"
        >
          {Object.entries(navItems).map(([path, { name, icn, target }]) => {
            return (
              <Link
                scroll={false}
                key={path}
                href={path}
                target={target}
                className="transition-all flex  items-center  cursor-pointer uppercase text-sm sm:text-[1.2rem] "
              >
                <ScrambleEffect tInput={name} />

                {icn && <ArrowIcon />}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
