import Exposition from "@/Components/Exposition";
import React from "react";

const Education = () => {
  return (
    <div className="responsive">
      <div className="section">
        <Exposition
          title="Education"
          children={
            <div className="flex flex-col gap-3">
              <p className="">
                Education is the foundation of a stable society as it equips
                young people with vital knowledge, insight and survival skills.
                We support community education through three main activities:
              </p>
              <div className="w-full py-6 flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                  <p className="font-bold basis-2/5">School Bursary</p>
                  <p className="basis-3/5">
                    We are working to support education of girls and boys from
                    poor families to advance their education as a contribution
                    to social advancement and equity
                  </p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold basis-2/5">Conservation Education</p>
                  <p className="basis-3/5">
                    We aim at setting up an education auditorium at Olerai
                    Conservancy and purchase of bus for school trips to uplift
                    conservation education of the youth and community
                  </p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold basis-2/5">School Support</p>
                  <p className="basis-3/5">
                    We support the local schools with learning facilities and
                    necessary materials to boost learning as the best investment
                    for empowered future generation
                  </p>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Education;
