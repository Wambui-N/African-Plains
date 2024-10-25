import Button from "@/components/Button";
import Exposition from "@/components/Exposition";
import Link from "next/link";
import React from "react";

export const Donations = () => {
  return (
    <div className="responsive">
      <div className="section">
        <Exposition
          title="Donation"
          children={
            <div className="flex flex-col gap-6 py-6">
              <p className="leading-relaxed">
                Your support plays a crucial role in the success of our
                projects. We deeply appreciate our donors, whose contributions
                enable us to conserve Olerai Conservancy and support local
                communities.
              </p>

              <h2 className="text-xl font-bold text-brown">How to Donate</h2>

              <div className="w-full flex flex-col gap-5">
                <p className="leading-relaxed">
                  You can direct your donations toward any of our projects,
                  ensuring that your contributions have a meaningful impact.
                  Here are some ways your donation can help:
                </p>

                <ul className="font-semibold list-disc list-inside ml-4">
                  <li className="pl-2">Conservancy Operations</li>
                  <li className="pl-2">Community Projects</li>
                  <li className="pl-2">Conservation Education</li>
                </ul>

                <p className="leading-relaxed">
                  For detailed information on how your donations can help, visit
                  our{" "}
                  <Link href="/FinancialNeeds">
                    <span className="text-orange/80 underline hover:text-orange">
                      Financial Needs page
                    </span>
                  </Link>
                  .
                </p>

                <p className="text-sm italic text-brown/70">
                  *100% of your donation goes directly to the target projects,
                  as administrative costs are covered by Ankaa Africa.
                </p>

                <p className="text-lg font-bold text-brown">
                  <Button
                    buttonStyle="bg-yellow capitalize text-brown"
                    title="Make a Donation"
                  />
                  {/* TODO implement donation */}
                </p>

                <p className="text-brown font-semibold mt-4">
                  Thank you generously!
                </p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};
