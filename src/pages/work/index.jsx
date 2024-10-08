import Head from "next/head";
import React, { useContext, useRef } from "react";
import { TransitionContext } from "@/context/TransitionContext";
import SelectedWorks from "../../components/SelectedWorks";

export default function Index() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);

  return (
    <>
      <Head>
        <title>Work –– Nicolas Landrieux</title>
      </Head>
      <div ref={container} className=" w-full flex bg-black text-white">
        <SelectedWorks />
      </div>
    </>
  );
}
