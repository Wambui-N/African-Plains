import React from "react";
import Title from "./Title";

interface ExpositionProp{
  children: JSX.Element;
  title: string;
}

const Exposition = ({children, title}:ExpositionProp) => {
  return (
    <div className="py-6 flex flex-col gap-6">
      <Title title={`${title}`} />
      <div className="">
        {children}
      </div>
    </div>
  );
};

export default Exposition;
