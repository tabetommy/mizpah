import React from "react";
import UnderConstructionGraphic from "../assets/under-construction.svg";
import PlaceholderImage from "../assets/placeholder.jpg";

function UnderConstruction({ spaceAtTop }) {
  return (
    <div className="h-100 w-100 d-flex  flex-column justify-content-center align-items-center ">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <img
            src={PlaceholderImage}
            style={{ width: "100%", marginTop: spaceAtTop || 150 }}
          />
        </div>
      </div>

      <h5 className="text-center mt-3 fw-bold">Under Construction</h5>
    </div>
  );
}

export default UnderConstruction;
