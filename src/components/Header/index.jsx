import React from "react";
import Link from "next/link";
import ScrambleEffect from "../ScrambleEffect";
import { ArrowIcon } from "@/components/ArrowIcon";

const navItems = {
  // "/": {
  //   name: "home",
  //   icn: "",
  //   target: "",
  // },
  "/#about": {
    name: "about",
    icn: "",
    target: "",
  },
  "/#work": {
    name: "work",
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
    <>
      <aside className="tracking-tight">
        <div
          className="h-24 w-full fixed top-0 z-30 flex items-center justify-center  "
          id="menu"
        >
          <div className="w-full h-full backdrop-blur-sm "></div>
        </div>
        <div
          className="h-24 w-full fixed top-0 z-50 flex items-center justify-center "
          id="menu"
        >
          <nav className="h-full w-10/12 flex items-center justify-start gap-16 fade md:overflow-auto p-0 ">
            {Object.entries(navItems).map(([path, { name, icn, target }]) => {
              return (
                <Link
                  scroll={false}
                  key={path}
                  href={path}
                  target={target}
                  className="transition-all  items-center cursor-pointer uppercase text-sm sm:text-[1.25rem] font-extralight   nav-link"
                >
                  <p
                    className="mix-blend-difference flex items-center tracking-normal"
                    style={{
                      fontSize: "1.0rem" && "clamp(0.9rem, 1.1vw, 1.18rem)",
                    }}
                  >
                    <ScrambleEffect tInput={name} />
                    {icn && <ArrowIcon />}
                  </p>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
