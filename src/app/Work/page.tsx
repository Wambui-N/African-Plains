import Community from "@/sections/Community";
import Conservation from "@/sections/Conservation";
import Education from "@/sections/Education";
import Livestock from "@/sections/Livestock";
import WorkHero from "@/sections/WorkHero";

export default function Work() {
    return(
        <div className="">
            <WorkHero />
            <Conservation />
            <Community />
            <Education />
            <Livestock />
        </div>
    )
}