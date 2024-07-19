"use client";

import React, { useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import menu from "@/../public/menu.json";
import Menu from "./Menu";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const IconRef = useRef<LottieRefCurrentProps>(null);

  const mouseHover = () => {
    if (isOpen) {
      IconRef.current?.playSegments([70, 31], true);
    } else {
      IconRef.current?.playSegments([0, 31], true);
    }
  };

  const mouseLeave = () => {
    if (isOpen) {
      IconRef.current?.playSegments([31, 70], true);
    } else {
      IconRef.current?.playSegments([31, 0], true);
    }
  };

  const toggleMenu = () => {
    if (isOpen) {
      IconRef.current?.playSegments([31, 0], true);
    } else {
      IconRef.current?.playSegments([31, 70], true);
    }
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    IconRef.current?.playSegments([70, 0], true); // Revert animation
  };

  const selectButton = () => {
    if(isOpen){
      closeMenu()
    }
  }

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 lg:px-[8vw] sm:px-[6vw] px-[2vw] w-[100vw] flex flex-row items-end justify-between z-50">
        <div
          className=" bg-orange shadow-sm h-[100px] w-auto flex items-end"
          onMouseEnter={mouseHover}
          onMouseLeave={mouseLeave}
        >
          <Lottie
            onClick={toggleMenu}
            animationData={menu}
            lottieRef={IconRef}
            autoplay={false}
            loop={false}
            className="w-16 h-auto text-white rotate-180"
          />
        </div>
        <div className="flex flex-row md:gap-6 gap-2">

        <Button onClick={selectButton} href="/Join" text="Get Involved" style="bg-orange" />
        <Button onClick={selectButton} href="/Contact" text="Contact Us" style="bg-yellow" />
        </div>
      </div>
      <Menu isOpen={isOpen} onClose={closeMenu} />
    </div>
  );
};

export default Navbar;
