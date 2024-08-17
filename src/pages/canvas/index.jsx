import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import CanvasSection from "../../components/CanvasSection";

const CanvasPage = () => {
  return <CanvasSection />;
};

export default dynamic(() => Promise.resolve(CanvasPage), { ssr: false });
