import Exposition from "@/Components/Exposition";
import React from "react";

const Partnerships = () => {
  return (
    <div className="responsive">
      <div className="section">
        <Exposition
          title="Partnership"
          children={
            <div className="flex flex-col gap-3">
              <p className="">
                We are always looking for partners who share our vision of
                sustainable conservation and community development.
                Collaborating with businesses, organizations, and individuals
                can help us enhance our programs and reach more people.
              </p>
              <p>Partnership Opportunities</p>
              <div className="w-full py-6 flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                  <p className="font-bold basis-2/5">Conservation Projects:</p>
                  <p className="basis-3/5">
                    Partner with us on wildlife conservation efforts to help
                    restore and protect vital ecosystems.
                  </p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold basis-2/5">Community Development:</p>
                  <p className="basis-3/5">
                    Work with us to support local initiatives focused on
                    education, clean water, health, and livelihoods.
                  </p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold basis-2/5">
                    Corporate Social Responsibility:
                  </p>
                  <p className="basis-3/5">
                    Join us in promoting sustainable practices and support the
                    communities around Olerai Conservancy.
                  </p>
                </div>
                <p className="">
                  If you are interested in exploring partnership opportunities,
                  please reach out to us at info@XXXX.
                  {/* TODO add email */}
                </p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Partnerships;
