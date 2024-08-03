import React from "react";
import WhatWeDoCell from "./WhatWeDoCell";

const WhatWeDoSection = ({ hideHeadings, items }) => {
  const whatWeDoList = [
    "Safety Hand Gloves",
    "Reflective Vest",
    "Berserker Submersible Pumps",
    "Super high head dewatering pumps",
    "Degreaser",
    "X Torque",
    "Foam X Plus",
    "Foam X Ultra",
    "Poly VIS LV",
    "Xpanda foam A & B",
  ];

  let captionWithLeftBorderStyle = {
    textTransform: "uppercase",
    paddingLeft: 20,
    borderLeft: "4px solid #39f48c",
    fontSize: 14,
    fontWeight: "bold",
  };
  return (
    <div
      style={
        !hideHeadings
          ? { background: "#fff", paddingTop: 100, paddingBottom: 100 }
          : { background: "#fff", paddingTop: 50, paddingBottom: 50 }
      }
    >
      <div className="container">
        {!hideHeadings && (
          <>
            <h1 className="title-1">What we do</h1>
            <div style={captionWithLeftBorderStyle}>
              Some of the services we provide
            </div>
          </>
        )}

        <div className={hideHeadings ? "mt-0" : "mt-5"}>
          <div className="row">
            {!items
              ? whatWeDoList.map((element, index) => (
                  <div className="col-md-4">
                    <WhatWeDoCell index={index} content={element} />
                  </div>
                ))
              : items.map((element, index) => (
                  <div className="col-md-4">
                    <WhatWeDoCell index={index} content={element} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
