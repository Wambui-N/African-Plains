import GetInvolved from "@/Sections/GetInvolved";
import Hero from "@/Sections/Hero";
import KnowAboutUs from "@/Sections/KnowAboutUs";
import WhatWeDo from "@/Sections/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return(
    <div className="">
      <Image src="/Icon.svg" alt="alt" width={500} height={500} />
      <Hero />
      <KnowAboutUs />
      <WhatWeDo />
      <GetInvolved />
    </div>
  )
}