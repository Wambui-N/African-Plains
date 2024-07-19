"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.main
      style={{ x }}
      ref={targetRef}
      className="flex overflow-x-auto w-screen h-screen"
    >
      {children}
    </motion.main>
  );
};

export default Main;
