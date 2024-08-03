import React, { useState } from "react";

const FooterNavItem = ({ href, text, blankTarget }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="mb-2">
      <a
        onMouseEnter={() => {
          setHovering(true);
        }}
        onMouseLeave={() => {
          setHovering(false);
        }}
        style={
          hovering
            ? { textDecoration: "none", color: "#acacac", fontWeight: "bold" }
            : { textDecoration: "none", color: "#bdbdbd" }
        }
        href={href}
        target={blankTarget ? "_blank" : "_self"}
      >
        {text === "LinkedIn" ? (
          <span>
            <i class="fa fa-linkedin-square me-1" aria-hidden="true"></i> {text}
          </span>
        ) : (
          text
        )}
      </a>
    </div>
  );
};

export default FooterNavItem;
