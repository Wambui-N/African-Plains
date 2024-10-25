import Exposition from "..//components/Exposition";
import React from "react";

const Internships = () => {
  return (
    <div className="responsive">
      <div className="section">
        <Exposition
          title="Internship"
          children={
            <div className="flex flex-col gap-3">
              <p className="">
                Join us at the African Plains Conservation Trust to gain
                valuable experience while contributing to meaningful
                conservation and community development initiatives. Our
                internship program offers hands-on training and the opportunity
                to engage with local communities and wildlife conservation
                efforts.
              </p>
              <p>Internship Details</p>
              <div className="w-full py-6 flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                  <p className="font-bold basis-2/5">Accomodation</p>
                  <p className="basis-3/5">40 USD per day</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold basis-2/5">Stipend</p>
                  <p className="basis-3/5">25 USD per week</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold basis-2/5">
                    Stationery and Equipment
                  </p>
                  <p className="basis-3/5">10 USD per day</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold basis-2/5">Ranger Patrol Allowance</p>
                  <p className="basis-3/5">15 USD per day</p>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Internships;
