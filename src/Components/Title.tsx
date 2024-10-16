import React from "react";

interface titleProps {
  title: string;
}

const Title = ({ title }: titleProps) => {
  return (
    <div className="flex flex-row items-center">
      <h6 className="relative uppercase text-brown leading-tight font-black">
        <span className="absolute -left-24 top-[50%] w-16 h-[2px] bg-brown"></span>{" "}
        {title}
      </h6>
    </div>
  );
};

export default Title;
