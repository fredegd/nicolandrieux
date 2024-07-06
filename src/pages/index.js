import { useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";

import Hero from "../components/Hero";
import SelectedWorks from "../components/SelectedWorks";
import About from "../components/About";

import Scroll from "react-scroll";

const { Element: ScrollElement } = Scroll;

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const { query } = useRouter();

  useEffect(() => {
    if (query.id === "work") {
      setTimeout(() => {
        Scroll.scroller.scrollTo("work", {
          duration: 300,
          smooth: true,
          offset: 0,
        });
      }, 100);
    } else if (query.id === "about") {
      setTimeout(() => {
        Scroll.scroller.scrollTo("about", {
          duration: 300,
          smooth: true,
          offset: 0,
        });
      }, 100);
    }
  }, [query]);

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
          end: "60% top",
          scrub: true, // Smooth scrubbing
        },
      })
      .to("body", {
        backgroundColor: "#000000",
        color: "#ffffff",
      });

    // create a timeline to control the menu background color
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
    // to let it fade out when the user scrolls down
    const heroTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top", //[trigger][scroller]
          end: "30% top", //[trigger][scroller]
          scrub: true, // Smooth scrubbing
        },
      })
      .to("#hero-title , #hero-subtitle", {
        opacity: 0,
        y: -100,
        duration: 1.2,
      });

    // let the Hero text opacity gradually go to 0  when the user scrolls down
    // and go back to 1 when the user scrolls up
    gsap.set(" #hero-subtitle", { opacity: 1, y: 0 });
    gsap.set(" #hero-title", { opacity: 1, y: 0 });

    let workTimelineEnter = gsap
      .timeline({
        scrollTrigger: {
          trigger: "hero",
          start: "30% top", // when the top of the trigger hits the top of the viewport
          end: "90% top", // end after scrolling 200px beyond the start
          stagger: 0.5, // 0.5 second stagger between each start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      })
      .to("#work-card", { opacity: 1, y: 0, duration: 1, stagger: 0.5 });

    let workTimelineExit = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#work",
          start: "20% top", // when the top of the trigger hits the top of the viewport
          end: "bottom top", // end when the bottom of the trigger hits the top of the viewport
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      })
      .to("#work-card", { opacity: 0, y: -100, duration: 1, stagger: 0.5 });

    gsap.set("#work-card", { opacity: 0, y: 100 });
  }, []);
  return (
    <div className="h-[100vh] w-full -mt-24">
      <Hero />
      <SelectedWorks />
      <About />
    </div>
  );
}
