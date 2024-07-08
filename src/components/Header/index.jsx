import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ScrambleEffect from "../ScrambleEffect";
import { ArrowIcon } from "@/components/ArrowIcon";

const navItems = {
  "/?id=about": {
    name: "about",
    href: "/#about",
    icn: null,
    target: "",
    query: { id: "about" },
  },
  "/?id=work": {
    name: "work",
    href: "/#work",
    icn: null,
    target: "",
    query: { id: "work" },
  },
  "https://www.instagram.com/exhausted_lab/": {
    name: "instagram",
    href: "https://www.instagram.com/exhausted_lab/",
    icn: { ArrowIcon },
    target: "_blank",
    query: { id: "" },
  },
  "https://www.linkedin.com/in/nicolaslandrieux/": {
    name: "linkedin",
    href: "https://www.linkedin.com/in/nicolaslandrieux/",
    icn: { ArrowIcon },
    target: "_blank",
    query: { id: "" },
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
          className="h-24 w-full fixed top-0 z-50 flex items-center justify-center hover:backdrop-blur-lg mix-blend-difference"
          id="menu"
        >
          <nav className="h-full w-10/12 flex items-center justify-start gap-16 fade md:overflow-auto p-0 text-slate-500 ">
            {Object.entries(navItems).map(
              ([path, { name, href, icn, target, query }]) => {
                const isActive =
                  currentPath === path || currentPath.split("/")[1] === name;
                // console.log(currentPath.split("/")[1], name, isActive);
                return (
                  <Link
                    scroll={true}
                    key={name}
                    href={href}
                    //{{
                    //pathname: href,
                    // query: query,
                    // }}
                    target={target}
                    className={`mix-blend-difference transition-all items-center cursor-pointer uppercase text-sm sm:text-[1.25rem]    nav-link ${
                      isActive ? "text-white" : ""
                    } ${isActive ? "font-bold" : ""}`}
                  >
                    <p
                      className=" flex items-center tracking-normal"
                      style={{
                        fontSize: "1.0rem" && "clamp(0.9rem, 1.1vw, 1.18rem)",
                      }}
                    >
                      <ScrambleEffect tInput={name} />
                      {icn && <ArrowIcon />}
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
