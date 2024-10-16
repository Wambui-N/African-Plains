import React from "react";
import Button from "./Button";

interface ProjectsFeatureProps {
  bg: string;
  title: string;
  p: string;
}

const ProjectFeature = ({ bg, title, p }: ProjectsFeatureProps) => {
  return (
    <div
      className={`text-white bg-conservation ${bg} object-cover rounded-2xl bg-no-repeat h-full`}
    >
      <div className="bg-brown/50 rounded-2xl py-12 px-6 flex flex-col justify-between h-full">
        <h6 className="text-xl font-bold uppercase">{title}</h6>
        <div className="flex flex-col gap-6">
          <p className="text-sm">{p}</p>
          <div className="self-start">
            <Button
              buttonStyle="bg-yellow capitalize text-brown"
              title="Learn More"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFeature;
