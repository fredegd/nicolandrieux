import { useState, useContext } from "react";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/context/TransitionContext";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const { timeline } = useContext(TransitionContext);
  const { contextSafe } = useGSAP();

  const exit = contextSafe(() => {
    timeline.play().then(() => {
      // window.scrollTo(0, 0);
      setDisplayChildren(children);
      timeline.pause().clear();
    });
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
