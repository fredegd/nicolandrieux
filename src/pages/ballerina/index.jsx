import Head from "next/head";
import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import CanvasSection from "../../components/CanvasSection";

const CanvasPage = () => {
  return (
    <>
      <Head>
        <title>Ballerina –– Nicolas Landrieux</title>
      </Head>
      <CanvasSection />
    </>
  );
};

export default dynamic(() => Promise.resolve(CanvasPage), { ssr: false });
