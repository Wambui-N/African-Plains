import ProjectFeature from "@/components/ProjectFeature";
import Title from "@/components/Title";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="py-12 responsive flex flex-col gap-6">
      <div className="section flex flex-col gap-6">
        <Title title="What we do" />
        <h5 className="font-bold text-2xl">
          We are out to protect nature and support the people whose culture and
          history is the backbone of conservation.
        </h5>
      </div>
      <div className="grid md:grid-cols-3 gap-8 py-4 md:h-96">
        <ProjectFeature
          bg="bg-conservation"
          title="Conservation"
          p="To support the different conservation activities of the conservancy that will lead to increased diversity of wildlife, stable wildlife populations and conservation of important species"
        />
        <ProjectFeature
          bg="bg-communities"
          title="Communities"
          p="To support vital livelihood programmes such as health and clean water"
        />
        <ProjectFeature
          bg="bg-education"
          title="Education"
          p="Supporting the education of the economically vulnerable through bursaries and supporting the schools where learning takes place"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
