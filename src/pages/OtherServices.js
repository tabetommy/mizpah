import React from "react";
import WhatWeDoSection from "../components/WhatWeDoSection";

const OtherServices = () => {
  return (
    <div>
      <WhatWeDoSection
        hideHeadings={true}
        items={[
          "Plumbing",
          "Sandblasting",
          "Welding & Fabrication",
          "Tanks & Piping Works",
          "Corrossion Protection",
          "Civil Works",
          "Transportation",
          "Construction",
        ]}
      />
    </div>
  );
};

export default OtherServices;
