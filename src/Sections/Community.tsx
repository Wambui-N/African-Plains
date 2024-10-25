import React from "react";
import Exposition from "@/components/Exposition";

const Community = () => {
  return (
    <div className="responsive">
      <div className="section">
        <Exposition
          title="Community"
          children={
            <div className="flex flex-col gap-3">
              <p className="">
                Community projects are designed to support vulnerable
                communities in select areas that enhance collective livelihood.
              </p>
              <div className="w-full py-6 flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                  <p className="font-bold basis-2/5">
                    Savings Group and Enterprise
                  </p>
                  <p className="basis-3/5">
                    We are seeking partners to collaborate in establishment of a
                    savings scheme that can mobilize savings and extending
                    affordable credits to support small scale rural enterprises
                  </p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold basis-2/5">Clean Water</p>
                  <p className="basis-3/5">
                    Clean contributes immeasurably to community health and saves
                    on labour spend in search of water
                  </p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold basis-2/5">Food Security</p>
                  <p className="basis-3/5">
                    Our food security activity intends to support the women set
                    up kitchen gardens as a means to boost food and nutrition
                    security at household level to the communities
                  </p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold basis-2/5">Medical Support</p>
                  <p className="basis-3/5">
                    Our food security activity intends to support the women set
                    up kitchen gardens as a means to boost food and nutrition
                    security at household level to the communities
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

export default Community;
