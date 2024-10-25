import GetInvolved from "@/Sections/GetInvolved";
import Hero from "@/Sections/Hero";
import KnowAboutUs from "@/Sections/KnowAboutUs";
import WhatWeDo from "@/Sections/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return(
    <div className="">
      <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      <Hero />
      <KnowAboutUs />
      <WhatWeDo />
      <GetInvolved />
    </div>
  )
}