import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion, useAnimationControls } from "framer-motion";
import { glitchAnimation, exitGlitchAnimation } from "./utils";

type Props = {
  children: React.ReactNode;
  className: string;
};

// This component is a replacement for the default AnimatePresence component used in 
// _app.tsx to animate page transitions because using the default component removed the 
// scss styles from the page before exit animation finished. This issue and solution is described
// more in this issue: 
// https://github.com/vercel/next.js/discussions/18724#discussioncomment-4421594
export default function CustomAnimatePresence({ children, className }: Props) {
  const router = useRouter();

  /* Animation settings */
  const ANIMATION_DURATION = .1;
  const controls = useAnimationControls();
  const variants = {
    hidden: exitGlitchAnimation,
    visible: glitchAnimation,
  };
  const transition = {
    duration: ANIMATION_DURATION,
    type: "keyframes",
  };

  useEffect(() => {
    /* On click, animate exit and push new route */
    // @ts-ignore
    const handleLinkClick = async (event) => {
      await controls.start("hidden");

      if (event.detail.replace) {
        router.replace(event.detail.href, undefined, {
          shallow: event.detail.shallow,
        });
      } else {
        router.push(event.detail.href, undefined, {
          shallow: event.detail.shallow,
        });
      }
    };

    /* After route change complete, animate enter */
    const handleRouteChangeComplete = () => {
      controls.start("visible");
    };

    /* Event listeners */
    document.addEventListener("onLinkClicked", handleLinkClick);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      document.removeEventListener("onLinkClicked", handleLinkClick);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);

  return (
    <motion.div
      variants={variants}
      initial={{opacity: 1, x: 0, y: 0}}
      animate={controls}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
