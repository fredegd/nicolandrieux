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
      <div className="w-full fixed top-0 z-50">
        <nav
          className="backdrop-blur-sm  h-24 flex flex-row items-start   fade md:overflow-auto scroll-pr-6 "
          id="nav"
        >
          <div className="flex flex-row space-x-0 p-5">
            {Object.entries(navItems).map(([path, { name, icn, target }]) => {
              return (
                <Link
                  scroll={false}
                  key={path}
                  href={path}
                  target={target}
                  className="transition-all flex align-middle items-center gap-2  py-1 px-2 m-1 cursor-pointer uppercase text-xs sm:text-[1rem]"
                >
                  <ScrambleEffect tInput={name} />

                  {icn && <ArrowIcon />}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
