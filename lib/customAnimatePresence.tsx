import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion, useAnimationControls } from "framer-motion";
import { glitchAnimation, exitGlitchAnimation } from "./utils";

type Props = {
  children: React.ReactNode;
  className: string;
};

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
