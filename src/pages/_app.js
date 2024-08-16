import "@/styles/globals.css";


import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/Header";
import Transition from "@/components/Transition";

import { IBM_Plex_Mono } from "next/font/google";

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

export default function App({ Component, pageProps, router }) {
  return (
    <div
      className={` antialiased max-w-screen max-height-screen m-0  ${ibmMono.className} uppercase selection:bg-slate-200/30 selection:text-slate-600 selection:backdrop:blur-md`}
    >
      <NextUIProvider>
        <Header />
        <Transition>
          <Component key={router.route} {...pageProps} />
        </Transition>
      </NextUIProvider>
    </div>
  );
}
