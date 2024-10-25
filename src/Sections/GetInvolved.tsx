import Button from "@/components/Button";
import Involvement from "@/components/Involvement";
import Title from "@/components/Title";
import React from "react";

const GetInvolved = () => {
  return (
    <div className="py-12 responsive flex flex-col gap-6">
      <div className="section flex flex-col gap-6">
        <Title title="Get Involved" />
        <h5 className="font-bold text-2xl">
          You can channel your assistance in the following capacities. We
          welcome your involvement!
        </h5>
      </div>
      <div className="grid grid-cols-3 gap-8 py-4 h-64">
        <Involvement
          style="bg-yellow"
          title="Donations"
          p="We are grateful and proud of our supporters and donors who continue to advance our goals."
        />
        <Involvement
          style="bg-orange"
          title="Partnerships"
          p="We recognize that environmental conservation and community development require collaboration. "
        />
        <Involvement
          style="bg-brown text-white"
          title="Internships"
          p="We have an active internship program for young people across different backgrounds and interests"
        />
      </div>
      <div className="inline-flex justify-end">
      <Button
                buttonStyle="bg-none text-Brown gap-1 hover:gap-2 transition-all ease-in-out delay-50 duration-200"
                title="Reach Out"
                href="/Get_Involved"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                }
              />
      </div>
    </div>
  );
};

export default GetInvolved;
