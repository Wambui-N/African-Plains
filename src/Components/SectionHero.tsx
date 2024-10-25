import Image from "next/image";
import React from "react";

interface SectionHeroProps{
    title: string;
    p: string;
    image: string;
}

const SectionHero = ({title, p, image}:SectionHeroProps) => {
  return (
    <div className="responsive py-8">
  <div className="h-full grid md:grid-cols-2 gap-4">
    <div className="h-full flex flex-col justify-center">
      <h3 className="capitalize font-black text-lg py-4">{title}</h3>
      <p className="">
        {p}
      </p>
    </div>
    <div className="h-full w-full flex justify-center items-center">
      <Image
        className="object-cover w-full h-[60vh] rounded-2xl"
        src={image}
        alt="alt"
        width={500}
        height={500}
      />
    </div>
  </div>
</div>

  );
};

export default SectionHero;
