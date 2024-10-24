import Exposition from "@/Components/Exposition";
import Link from "next/link";
import React from "react";

export const Donations = () => {
  return (
    <div className="responsive">
      <div className="section">
        <Exposition
          title="Donation"
          children={
            <div className="flex flex-col gap-3">
              <p className="">
                Your support plays a crucial role in the success of our
                projects. We deeply appreciate our donors, whose contributions
                enable us to conserve Olerai Conservancy and support local
                communities.
              </p>
              <p>How to Donate</p>
              <div className="w-full py-6 flex flex-col gap-4">
                <p>
                  You can direct your donations toward any of our projects,
                  ensuring that your contributions have a meaningful impact.
                  Here are some ways your donation can help:
                </p>
                <ul className="font-bold list-disk">
                  <li className="">Conservancy Operations</li>
                  <li className="">Community Projects</li>
                  <li className="">Conservation Education</li>
                </ul>
                <p>
                  For detailed information on how your donations can help, visit
                  our <span><Link href="/FinancialNeeds">Financial Needs page</Link></span> .
                </p>
                {/* TODO add Style */}
                <p>
                  100% of your donation goes directly to the target projects, as
                  administrative costs are covered by Ankaa Africa.
                </p>
                <p>To make a donation, please click here.</p>
                {/* TODO implement donation */}
                <p>Thank you generously!</p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};
