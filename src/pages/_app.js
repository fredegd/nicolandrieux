import "@/styles/globals.css";

import { TransitionProvider } from "@/context/TransitionContext";
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
      className={` antialiased max-w-screen max-height-screen m-0  ${ibmMono.className} uppercase`}
    >
      <TransitionProvider>
        <Header />
        <div className=" pt-24 ">
          <Transition>
            <Component key={router.route} {...pageProps} />
          </Transition>
        </div>
      </TransitionProvider>
    </div>
  );
}
