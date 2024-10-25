import React from "react";
import Button from "./Button";

interface ProjectsFeatureProps {
  style: string;
  title: string;
  p: string;
}

const Involvement = ({ style, title, p }: ProjectsFeatureProps) => {
  return (
    <div
      className={`text-brown ${style} object-cover rounded-2xl bg-no-repeat h-full`}
    >
      <div className="rounded-2xl py-12 px-6 flex flex-col gap-2 justify-between h-full">
        <h6 className="text-xl font-bold uppercase">{title}</h6>
        <div className="flex flex-col gap-6 font-semibold">
          <p className="text-sm">{p}</p>
        </div>
      </div>
    </div>
  );
};

export default Involvement;
