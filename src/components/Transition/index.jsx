import { useState, useContext } from "react";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/context/TransitionContext";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const { timeline, setTimeline } = useContext(TransitionContext);
  const { contextSafe } = useGSAP();

  const exit = contextSafe(() => {
    setDisplayChildren(children);
    // timeline.play().then(() => {
    //   setDisplayChildren(children);
    //   // window.scrollTo(0, 0);
    //   timeline.pause().clear();
    //   setTimeline(gsap.timeline({ paused: true }));
    // });
  });

  useGSAP(() => {
    console.log(children.key, displayChildren.key);
    //if page is not the current page
    if (children.key !== displayChildren.key) {
      exit();
    }
  }, [children, children.key]);

  return <div>{displayChildren}</div>;
}
