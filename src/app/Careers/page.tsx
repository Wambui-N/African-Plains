import Exposition from "@/components/Exposition";
import SectionHero from "@/components/SectionHero";
import React from "react";

const page = () => {
  return (
    <div>
      <SectionHero
        title="Working with us"
        p="At the African Plains, we work as a team to serve environment and communities. We cherish everyone’s perspective, and we collectively gain strength from the knowledge and insights drawn from our diversity"
        image="/career.png"
      />
      <div className="responsive">
        <div className="section">
          <Exposition
            title="Employment Policy"
            children={
              <div className="flex flex-col gap-3">
                <p className="">
                  Our trust is an equal opportunity employer providing equal
                  opportunity to all employees and applicants for employment and
                  complying with employment laws.
                </p>
              </div>
            }
          />
          <Exposition
            title="Job Opennings"
            children={
              <div className="flex flex-col gap-3">
                <p className="">There are currently no open vacancies.</p>
                <p className="">
                  If you wish to be considered for any future positions,
                  relevant to your interests and qualifications, send us your CV
                  at ...
                  {/* TODO add Email */}
                </p>
                <p className="">There are currently no open vacancies.</p>
                <p className="">
                  By sending your CV you comply to the collection and use of
                  your personal data including being a recipient of our outreach
                  communications
                </p>
              </div>
            }
          />
          <Exposition
            title="Internship Positions"
            children={
              <div className="flex flex-col gap-3">
                <p className="">
                  We work with partners to finance a 3-month internship in
                  Olerai Conservancy twice per year. Interns are engaged in
                  conservation, wildlife studies and research, tourism and tour
                  guiding and community service.
                </p>
                <p className="">
                  We have an active internship program for young people across
                  different backgrounds and interests. As active citizens of the
                  world, young people have the power to catalyze positive social
                  change in conservation and community development.
                </p>
                <p className="">
                  Internships opportunities are subject to funding
                </p>
                <p className="">To apply for internship, click here</p>
                <p className="">To support internship program, click here</p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default page;
