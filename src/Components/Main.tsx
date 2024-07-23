"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <main className="relative h-auto md:h-[500vh]" ref={targetRef}>
      <div className="sticky top-0 overflow-hidden md:h-screen py-[120px] responsive">
        <motion.div
          style={{ x }}
          className="md:h-full flex flex-col md:flex-row gap-4 w-full md:w-[100%]"
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
};

export default Main;
