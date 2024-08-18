import Head from "next/head";
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
    <>
      <Head>
        <title>NICOLAS LANDRIEUX —— ART DIRECTOR</title>
        <meta
          name="description"
          content="SPECIALIST IN BRANDING, CRAFTING UNIQUE DESIGN AND EXPERIENCE THROUGH CREATIVE CODING AND MOTION DESIGN —— I AM A DESIGNER WHO CODES."
        />
        <meta
          name="keywords"
          content="Design, Creative, director, coding, motion, branding, experience, art, designer, web, digital, interactive, portfolio, nicolas, landrieux, nicolaslandrieux, landrieux.design, exhausted, exhausted-lab, exhaustedlab, exhausted-lab.com"
        />
        <meta name="author" content="Nicolas Landrieux" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Portfolio | Nicolas Landrieux" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="NICOLAS LANDRIEUX —— ART DIRECTOR" />
        <meta
          property="og:description"
          content="SPECIALIST IN BRANDING, CRAFTING UNIQUE DESIGN AND EXPERIENCE THROUGH CREATIVE CODING AND MOTION DESIGN —— I AM A DESIGNER WHO CODES."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.landrieux.design/" />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/3vlhcozis/Nicolandrieux/SEO/preview.png?tr=w-1200,h-630,fo-auto"
        />
        <meta
          property="og:image:alt"
          content="Nicolas Landrieux –– Art Director"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:secure_url"
          content="https://ik.imagekit.io/3vlhcozis/Nicolandrieux/SEO/preview.png?tr=w-1200,h-630,fo-auto"
        />

        <meta
          property="article:author"
          content="https://www.linkedin.com/in/nicolaslandrieux/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@exhausted_lab" />
        <meta name="twitter:creator" content="@exhausted_lab" />
        <meta
          name="twitter:title"
          content="Nicolas Landrieux –– Art Director"
        />
        <meta name="twitter:description" content="I AM A DESIGNER WHO CODES" />
        <meta
          name="twitter:image"
          content="https://ik.imagekit.io/3vlhcozis/Nicolandrieux/SEO/preview.png?tr=w-1200,h-630,fo-auto"
        />
        <link rel="canonical" href="https://landrieux.design/" />
        <link rel="canonical" href="https://landrieux.design/about" />
        <link rel="canonical" href="https://landrieux.design/work" />
        <link rel="canonical" href="https://landrieux.design/ballerina" />
        <link rel="canonical" href="https://fredegd.dev" />
      </Head>
      <div
        className={` antialiased max-w-screen max-height-screen m-0  ${ibmMono.className} uppercase selection:bg-slate-200/30 selection:text-yellow-600 selection:backdrop:blur-md`}
      >
        <NextUIProvider>
          <Header />
          <Transition>
            <Component key={router.route} {...pageProps} />
          </Transition>
        </NextUIProvider>
      </div>
    </>
  );
}
