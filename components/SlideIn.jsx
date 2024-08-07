"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const SlideIn = ({ children, side }) => {
  const controls = useAnimation();
  const leftVariants = {
    hidden: { opacity: 0, x: -200, transition: { duration: 1 } },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: 200, transition: { duration: 1 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 200, transition: { duration: 1 } },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: -200, transition: { duration: 1 } },
  };

  const topVariants = {
    hidden: { opacity: 0, y: -200, transition: { duration: 1 } },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: 200, transition: { duration: 1 } },
  };

  const bottomVariants = {
    hidden: { opacity: 0, y: 200, transition: { duration: 1 } },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: -200, transition: { duration: 1 } },
  };

  const variants = {
    top: topVariants,
    bottom: bottomVariants,
    left: leftVariants,
    right: rightVariants,
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      key="slide-in"
      initial="hidden"
      animate={controls}
      variants={variants[side]}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
