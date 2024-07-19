import Main from "@/Components/Main";
import { crimson } from "../fonts";

export default function About() {
  return (
    <Main>
      <div className="md:w-[50vw] w-full md:h-full h-auto py-6 flex flex-col gap-6 justify-center">
        <h3 className={`uppercase text-4xl font-semibold ${crimson.className}`}>
          About
        </h3>
        <p className="">
          African Plains Conservation of Trust is a non-profit organization that
          works towards sustainable conservation of select habitats and
          ecosystems in Kenya as well as development of neighbouring communities
        </p>
      </div>
      <div className="md:w-[50vw] w-full md:h-full h-auto bg-orange"></div>
      <div className="md:w-[50vw] w-full md:h-full h-auto bg-orange"></div>
      <div className="md:w-[50vw] w-full md:h-full h-auto bg-orange"></div>
    </Main>
  );
}
