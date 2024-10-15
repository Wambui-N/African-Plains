"use client";

import Button from "@/Components/Button";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import menuAnimation from "../../Public/menuAnimation.json";
import { motion } from "framer-motion";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Work", label: "What We Do" },
  { path: "/Contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<any>(null);

  const toggleMenu = () => {
    if (!isOpen) {
      menuRef.current.playSegments([0, 40], true);
    } else {
      menuRef.current.playSegments([40, 0], true);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row justify-between items-center py-6 responsive bg-white">
      <div className="object-cover z-30">
        <Link href="/">
          <Image src="./Icon.svg" alt="logo" width={100} height={100} />
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
          buttonStyle="bg-yellow text-brown text-sm"
          title="Get Involved"
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
          animate={{ x: isOpen ? "0" : "1000%" }}
          transition={{
            ease: "linear",
            duration: 0.5,
          }}
          className="absolute left-0 top-0 flex flex-col items-center justify-around h-screen w-screen bg-yellow"
        >
          <div className="text-brown">
            <ul>
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
            <div onClick={toggleMenu}>
              <Button
                buttonStyle="bg-brown text-yellow text-2xl my-2 text-sm"
                title="Get Involved"
                href="/Get_Involved"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
