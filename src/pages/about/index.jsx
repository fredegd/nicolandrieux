import Head from "next/head";
import React, { useRef, useContext } from "react";
import { TransitionContext } from "@/context/TransitionContext";
import About from "../../components/About";
export default function Index() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);

  return (
    <>
      <Head>
        <title>About –– Nicolas Landrieux</title>
      </Head>
      <div ref={container} className="min-h-[100vh] flex bg-black text-white">
        <About />
      </div>
    </>
  );
}
