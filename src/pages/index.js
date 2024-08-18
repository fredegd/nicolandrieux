import { useEffect } from "react";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";

import Hero from "../components/Hero";
import SelectedWorks from "../components/SelectedWorks";
import About from "../components/About";

import Scroll from "react-scroll";
import Footer from "../components/Footer";

// const { Element: ScrollElement } = Scroll;

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const { query } = useRouter();
  //scroll to the selected section based on the url query
  useEffect(() => {
    if (query.id === "work") {
      setTimeout(() => {
        Scroll.scroller.scrollTo("work", {
          duration: 100,
          smooth: true,
          offset: 0,
        });
      }, 100);
    } else if (query.id === "about") {
      setTimeout(() => {
        Scroll.scroller.scrollTo("about", {
          duration: 100,
          smooth: true,
          offset: 0,
        });
      }, 100);
    }
  }, [query]);

  // ScrollTrigger for the background color transition
  useEffect(() => {
    // Ensure ScrollTrigger is loaded
    if (!gsap.plugins.scrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Create a timeline to control the background color transition
    const backgroundTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "20% top",
          end: "100% top",
          scrub: true, // Smooth scrubbing
        },
      })
      .to("body", {
        backgroundColor: "#000000",
        color: "#ffffff",
      });

    // create a timeline to control the nav background color
    const menuBgTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero-title",
          start: "top top",
          end: "35% top",
          scrub: true, // Smooth scrubbing
        },
      })
      .to("#menu", {
        color: "#ffffff",
        duration: 1,
      });

    // Set initial background color to white
    gsap.set("body", {
      backgroundColor: "#ffffff",
      color: "#000000",
    });
    // Set initial menu  color to black
    gsap.set("#menu", { color: "#000000" });

    //create a timeline to control the Hero text
    // letting it fade out when the user scrolls down
    const heroTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top", //[trigger][scroller]
          end: "50% top", //[trigger][scroller]
          scrub: true, // Smooth scrubbing
        },
      })
      .to("#hero-title , #hero-subtitle", {
        opacity: 0,
        duration: 1.2,
      });

    // let the Hero text opacity gradually go to 0  when the user scrolls down
    // and go back to 1 when the user scrolls up
    gsap.set(" #hero-subtitle", { opacity: 1, y: 0 });
    gsap.set(" #hero-title", { opacity: 1, y: 0 });
  }, []);
  return (
    <>
      <Hero />
      <SelectedWorks />
      <About />
      <Footer />
    </>
  );
}
