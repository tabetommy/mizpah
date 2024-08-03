import React from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";
import Header from "../routeComponents/Header";

const GenericPageLayout = ({ title, route, component }) => {
  const isNotDesktop = useMediaQuery({
    query: "(max-width: 992px)",
  });
  return (
    <div>
      <Header />
      <div className="container">
        <div
          style={{ marginTop: 50, marginBottom: 50 }}
          className="d-flex flex-wrap justify-content-between align-items-end"
        >
          <span
            className="title-2"
            style={
              isNotDesktop
                ? { fontWeight: 800, fontSize: 30 }
                : { fontWeight: 800 }
            }
          >
            {title}
          </span>
          <div style={{ color: "#263238" }} className="d-flex fw-bold">
            <a
              className="mp-breadcrumps-link"
              style={{ color: "#263238", textDecoration: "none" }}
              href="/"
            >
              Home
            </a>
            <span
              style={{ color: "#41AE51" }}
              className="material-symbols-outlined fw-bold"
            >
              chevron_right
            </span>
            <span>{title}</span>
          </div>
        </div>
        {component}
      </div>

      <Footer />
    </div>
  );
};

export default GenericPageLayout;
