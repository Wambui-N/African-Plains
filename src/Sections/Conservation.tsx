import Exposition from "..//components/Exposition";
import React from "react";

const Conservation = () => {
  return (
    <div className="responsive">
      <div className="section">
        <Exposition
          title="Conservation of Olerai Conservancy"
          children={
            <div className="flex flex-col gap-3">
              <p className="">
                Olerai is young and small wildlife Conservancy about 20
                kilometers southwest of Nairobi National Park. For many years,
                the area served as an important wildlife dispersal area for
                Nairobi Park connecting it to distant ecosystems such as
                Amboseli and Tsavo. Most of this has now changed over the last
                two decades which have seen rapid urbanization, fragmentation
                and fencing of small private land parcels leaving small pockets
                of wilderness areas and without the traditional wildlife
                dispersal.
              </p>
              <p className="">
                The owners of the land preserved the landscape for wildlife
                conservation and tourism and are in business partnership with
                Ankaa Africa.
              </p>
              <p className="">
                The trust is supporting this young conservancy to establish and
                strengthen its operations to ensure the ecological island
                survives and thrives and hopefully stand a chance for a
                reconnection with adjoining areas such as Athi Kapiti and
                Soralo.
              </p>
              <div className="flex flex-col gap-3 py-3">
                <p>Conservancy programme focuses on three key activities:</p>
                <div className="">
                  <h6 className="font-bold">Operation</h6>
                  <p>
                    Which includes the Manager’s training, remuneration and
                    vehicle. Plus Conservancy office and equipment.
                  </p>
                </div>
                <div className="">
                  <h6 className="font-bold">Security</h6>
                  <p>
                    Which includes training of rangers, construction of a
                    rangers’ post and purchase of equipment.
                  </p>
                </div>
                <div className="">
                  <h6 className="font-bold">Species</h6>
                  <p>
                    Which includes wildlife restocking and ecological monitoring
                    and species inventory.
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

export default Conservation;
