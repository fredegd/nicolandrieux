import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ScrambleEffect from "../ScrambleEffect";
import { ArrowIcon } from "@/components/ArrowIcon";

const navItems = {
  "/#about": {
    name: "about",
    href: "/#about",
    icn: null,
    target: "",
    query: { id: "about" },
  },
  "/#work": {
    name: "work",
    href: "/#work",
    icn: null,
    target: "",
  },
  "https://www.instagram.com/exhausted_lab/": {
    name: "INSTAGRAM ↗",
    href: "https://www.instagram.com/exhausted_lab/",
    icn: { ArrowIcon },
    target: "_blank",
  },
  "https://www.linkedin.com/in/nicolaslandrieux/": {
    name: "LINKEDIN ↗",
    href: "https://www.linkedin.com/in/nicolaslandrieux/",
    icn: { ArrowIcon },
    target: "_blank",
  },
};

export default function Index() {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Update currentPath whenever the route changes
    setCurrentPath(router.asPath);
  }, [router.asPath]);
  return (
    <>
      <aside className="tracking-tight">
        <div
          className="h-36 md:h-24 w-full fixed top-0 z-50 flex items-center justify-center hover:backdrop-blur-lg mix-blend-difference"
          id="menu"
        >
          <nav className="h-full w-10/12 flex flex-col gap-1 pt-10 md:flex-row md:items-center md:justify-start md:gap-16  md:p-0 text-slate-500  ">
            {Object.entries(navItems).map(
              ([path, { name, href, target, query }]) => {
                const isActive =
                  currentPath === path || currentPath.split("/")[1] === name;
                // console.log(currentPath.split("/")[1], name, isActive);
                return (
                  <Link
                    scroll={true}
                    key={name}
                    href={href}
                    target={target}
                    className={`mix-blend-difference transition-all items-center cursor-pointer uppercase text-sm md:text-md lg:text-[1.12vw] w-fit nav-link ${
                      isActive ? "text-white" : ""
                    } ${isActive ? "font-bold" : ""}`}
                  >
                    <p className=" flex items-center tracking-normal align-middle">
                      <ScrambleEffect tInput={name} />
                    </p>
                  </Link>
                );
              }
            )}
          </nav>
        </div>
      </aside>
    </>
  );
}
