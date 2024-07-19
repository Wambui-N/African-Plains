import Link from "next/link";
import React from "react";
import Contacts from "./Contacts";
import Footer from "./Footer";
import { crimson } from "@/app/fonts";

const Menu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/About", label: "About Us" },
    { path: "/WhatWeDo", label: "What We Do" },
    { path: "/Projects", label: "Projects and Programs" },
    { path: "/Blog", label: "News and Blog" },
    { path: "/Partners", label: "Our Partners" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-screen bg-brown text-white z-10 duration-500 flex flex-col justify-end gap-6 lg:px-[8vw] sm:px-[6vw] px-[2vw] pt-16 pb-2`}
      style={{
        transition: "clip-path 0.5s ease-in-out",
        clipPath: isOpen
          ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          : "polygon(0% 0%, 100% 0%, 100% 0%, 100% 0%)",
      }}
    >
      <div className="flex lg:flex-row flex-col justify-between gap-4 lg:items-end items-start">
        <div className="basis-1/2">
          {menuLinks.map((link, index) => (
            <div key={index} className="lg:py-2 py-1">
              <Link
                className={`${crimson.className} relative hover:text-yellow/80 lg:text-4xl text-2xl uppercase tracking-tight group`}
                href={link.path}
                onClick={onClose} // Close the menu when a link is clicked
              >
                {link.label}
                <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-yellow/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
            </div>
          ))}
        </div>
        <div className="basis-1/2 w-full flex flex-col items-end">

        <Contacts />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
