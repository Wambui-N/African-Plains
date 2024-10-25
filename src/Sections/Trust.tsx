import Exposition from "@/components/Exposition";
import React from "react";

const Trust = () => {
  return (
    <div className="responsive">
      <div className="section">
        <Exposition
          title="The Trust"
          children={
            <div className="flex flex-col gap-3">
              <p className="">
                <b>African Plains Conservation Trust </b>
                is founded on this principle. It seeks to support the
                conservation and management of African plains that host wildlife
                outside protected areas while supporting the communities in
                these areas to carve a beneficial association with wildlife. The
                trust also works to directly support the people in different
                aspects of their livelihoods through curated economic, education
                and health programmes that enhance community prosperity.
              </p>
              <p className="">
                Protection and conservation of these wildlife habitats in the
                community lands is an important component of national
                conservation efforts and survival of wildlife. But most
                important is preserving the connection between the communities
                and their land by ensuring there is sustainable harmony and
                mutual benefit.
              </p>
              <p className="">
                This is only possible when the communities derive value from the
                wildlife and their livelihoods are enhanced by the association.
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Trust;
