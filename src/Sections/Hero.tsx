import Button from "../components/Button";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[85vh] bg-hero-img bg-no-repeat bg-cover bg-[position:70%_center] object-cover object-top">
      <div className="bg-brown/40 h-full py-24">
        <div className="responsive h-full">
          <div className="h-full lg:w-[70%] w-full flex flex-col gap-5 justify-end text-white font-bold">
            <h1 className="text-3xl max-sm:font-bold">
              Welcome to African Plains Conservation Trust &#x2010; Preserving
              Nature, Empowering Communities
            </h1>
            <div className="flex flex-row justify-start gap-6">
              <Button
                buttonStyle="bg-white text-brown"
                title="Get Involved"
                href="/Get_Involved"
              />
              <Button
                buttonStyle="bg-none text-white gap-1 hover:gap-2 transition-all ease-in-out delay-50 duration-200"
                title="Reach Out"
                href="/Contact"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
