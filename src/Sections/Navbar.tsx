"use client";

import Button from "..//components/Button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import menuAnimation from "..//../Public/menuAnimation.json";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Work", label: "What We Do" },
  { path: "/Contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<any>(null);
  const [hidden, setHidden] = useState(false);

  const toggleMenu = () => {
    if (!isOpen) {
      menuRef.current.playSegments([0, 40], true);
    } else {
      menuRef.current.playSegments([40, 0], true);
    }
    setIsOpen(!isOpen);
  };

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // Ensure 'previous' is defined
    if (previous !== undefined) {
      if (latest > previous && latest > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  return (
    <motion.div
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`sticky w-full bg-white py-4 shadow top-0 z-50`}
    >
      <div className="flex flex-row justify-between items-center responsive">
        <div className="object-cover z-30">
          <Link href="/">
            <Image src="/Icon.svg" alt="logo" width={100} height={100} />
          </Link>
        </div>
        <div className="max-lg:hidden">
          <ul className="w-full flex flex-row">
            {menuLinks.map((link, index) => (
              <li className="text-brown px-4 font-medium" key="index">
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-lg:hidden">
          <Button
            buttonStyle="bg-yellow uppercase text-brown text-sm"
            title="Join Us"
            href="/Get_Involved"
          />
        </div>
        <div className="lg:hidden">
          <div className="relative z-30" onClick={toggleMenu}>
            <Lottie
              className="h-20 p-0"
              lottieRef={menuRef}
              animationData={menuAnimation}
              autoplay={false}
              loop={false}
            />
          </div>
          <motion.div
            animate={{ x: isOpen ? "0" : "100%" }}
            transition={{
              ease: "linear",
              duration: 1,
            }}
            className="absolute left-0 top-0 flex flex-col items-center justify-around h-screen w-screen bg-yellow"
          >
            <div className="text-brown">
              <ul className="">
                {menuLinks.map((link, index) => (
                  <li
                    className="text-brown text-center uppercase text-2xl font-medium list-none py-2"
                    key="index"
                    onClick={toggleMenu}
                  >
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <div onClick={toggleMenu} className="flex items-center justify-center">
                <Button
                  buttonStyle="uppercase bg-brown text-yellow text-2xl my-2 font-semibold"
                  title="Join Us"
                  href="/Get_Involved"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
