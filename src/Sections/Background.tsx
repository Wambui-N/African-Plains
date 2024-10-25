import Exposition from "../../components/Exposition";
import Image from "next/image";
import React from "react";

const Background = () => {
  return (
    <div className="responsive">
      <div className="section">
        <Exposition
          title="Background"
          children={
            <div className="flex flex-col gap-3">
              <p className="">
                Private and community land in Kenya supports the bulk of Kenya’s
                wildlife and are critical to the survival of protected areas as
                they serve as the dispersal and feeding areas for the wildlife
                in these mainstream protected areas.
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
              <Image
                className="py-4 w-full rounded-2xl"
                src="/Background.png"
                alt="alt"
                quality={100}
                width={500}
                height={500}
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Background;
