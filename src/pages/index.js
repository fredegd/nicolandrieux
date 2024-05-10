import { useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/context/TransitionContext";

import Hero from "../components/Hero";
import SelectedWorks from "../components/SelectedWorks";
import About from "../components/About";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const image = useRef();

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(["h1", "p"]);
      gsap.fromTo(
        targets,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.1 }
      );
      timeline.add(gsap.to(container.current, { opacity: 0 }));
    },
    { scope: container }
  );

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    // Ensure ScrollTrigger is loaded
    if (!gsap.plugins.scrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Create a timeline to control the background color transition
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-title",
        start: "top top",
        end: "bottom top",
        scrub: true, // Smooth scrubbing
      },
    });

    // Define the background color keyframes
    tl.to("body", { backgroundColor: "#000000", color: "#ffffff" });

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
      .to("#hero-title h1", {
        opacity: 0,
        y: -50,
        duration: 1,
      });

    // create a timeline to control the menu background color
    const menuTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero-title",
          start: "top top",
          end: "bottom top",
          scrub: true, // Smooth scrubbing
        },
      })
      .to("#menu", {
        color: "#ffffff",
        duration: 1,
      });

    // Set initial background color to white
    gsap.set("body", { backgroundColor: "#ffffff", color: "#000000" });
    // let the Hero text opacity gradually go to 0  when the user scrolls down
    // and go back to 1 when the user scrolls up
    gsap.set("#hero-title h1", { opacity: 1 });
    // Set initial menu background color to white
    gsap.set("#menu", { color: "#000000" });
  }, []);
  return (
    <div className="h-[100vh] w-full ">
      <div ref={container} className="h-[100vh] flex flex-col ">
        <Hero />
      </div>
      <SelectedWorks />
      <About />
    </div>
  );
}
