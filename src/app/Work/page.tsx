import Community from "@/Sections/Community";
import Conservation from "@/Sections/Conservation";
import Education from "@/Sections/Education";
import Livestock from "@/Sections/Livestock";
import WorkHero from "@/Sections/WorkHero";

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