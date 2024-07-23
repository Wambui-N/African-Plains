"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-67%"]);

  if (typeof window !== "undefined" && window.innerWidth >= 768) {
    return (
      <main className="relative h-auto md:h-[500vh]" ref={targetRef}>
        <div className="md:sticky md:top-0 md:overflow-hidden md:h-screen py-[120px] responsive">
          <motion.div
            style={{ x }}
            className="md:h-full flex flex-col md:flex-row gap-4 w-full md:w-[100%] overflow-x-hidden"
          >
            {children}
          </motion.div>
        </div>
      </main>
    );
  } else {
    return (
      <main className="relative h-auto">
        <div className="pt-[120px] pb-2 responsive">
          <div
            className="flex flex-col md:flex-row gap-4 w-full overflow-x-hidden"
          >
            {children}
          </div>
        </div>
      </main>
    );
  }
};

export default Main;
