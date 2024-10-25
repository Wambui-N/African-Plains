import React from "react";
import Partnerships from "@/sections/Partnerships";
import { Donations } from "@/sections/Donations";
import Internships from "@/sections/Internships";

const page = () => {
  return (
    <div>
      <Internships />
      <Partnerships />
      <Donations />
    </div>
  );
};

export default page;
