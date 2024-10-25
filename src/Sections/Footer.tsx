"use client";

import Button from "..//components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Work", label: "What We Do" },
  { path: "/Careers", label: "Careers" },
  { path: "/Contact", label: "Contact" },
];
const socialLinks = [
  { path: "#", label: "Facebook" },
  { path: "#", label: "Instagram" },
  { path: "#", label: "X" },
  { path: "#", label: "LinkedIn" },
  { path: "#", label: "Email" },
];

const Footer = () => {
  const scrollToTop = () => {
    const duration = 1000; // Duration in ms (1000ms = 1 second)
    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const start = window.scrollY;
    const startTime = performance.now();

    const scroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Progress between 0 and 1
      const ease = easeOutExpo(progress);

      window.scrollTo(0, start * (1 - ease));

      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <div className="bg-brown text-white text-sm">
      <div className="responsive py-24 flex md:flex-row flex-col md:gap-0 gap-12 items-center justify-between">
        <div className="">
          <Image
            className="text-white"
            src="/APCT LOGO.svg"
            alt="alt"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-row flex-between gap-10">
          <ul className="flex flex-col">
            <li className="cursor-pointer py-2 font-bold" onClick={scrollToTop}>
              Back to the top
            </li>
            {menuLinks.map((link, index) => (
              <li className="py-2 text-white/60" key="index">
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col">
            <li className="cursor-pointer py-2 font-bold">Connect</li>
            {socialLinks.map((link, index) => (
              <li className="py-2 text-white/60" key="index">
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <p className="font-bold text-2xl">Subscribe to get latest updates</p>
          <form action="">
            <div className="">
              {/* <label
                htmlFor="email"
                className="block text-sm leading-6 text-white"
              >
                Email address
              </label> */}
              <div className="mt-2 flex flex-row border border-white/30">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email address"
                  className="bg-transparent px-3 text-white leading-6 block w-full py-1.5 placeholder:text-white/50 outline-none"
                />
                <Button
                  buttonStyle="bg-yellow uppercase text-brown text-sm"
                  title="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
