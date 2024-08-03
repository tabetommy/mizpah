import React from "react";

const WhatWeDoCell = ({ index, content }) => {
  return (
    <div className="what-we-do-cell mt-4">
      <div className="what-we-do-number d-flex justify-content-center align-items-center">
        {index + 1}
      </div>
      <div
        style={{
          fontSize: 32,
          fontWeight: "900",
          marginBottom: 50,
          lineHeight: "1em",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default WhatWeDoCell;
