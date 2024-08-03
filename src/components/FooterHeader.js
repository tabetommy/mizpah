import React from "react";

const FooterHeader = ({ text }) => {
  return (
    <>
      <h5 style={{ color: "white" }}>{text}</h5>
      <div className="d-flex" style={{ top: "-2px", position: "relative" }}>
        <div
          className="me-1"
          style={{
            width: "24px",
            height: "2px",
            backgroundColor: "#06AD50",
            display: "block-inline",
          }}
        ></div>
        <div
          style={{
            width: "36px",
            height: "2px",
            backgroundColor: "white",
            display: "block-inline",
          }}
        ></div>
      </div>
    </>
  );
};

export default FooterHeader;
