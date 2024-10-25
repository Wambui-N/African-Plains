import {Community} from "@/sections";
import {Conservation} from "@/sections";
import {Education} from "@/sections";
import {Livestock} from "@/sections";
import {WorkHero} from "@/sections";

export default function Work() {
  return (
    <div className="">
      <WorkHero />
      <Conservation />
      <Community />
      <Education />
      <Livestock />
    </div>
  );
}
