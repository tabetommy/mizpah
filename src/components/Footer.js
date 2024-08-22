import React from "react";
import FooterHeader from "./FooterHeader";
import FooterNavItem from "./FooterNavItem";

const Footer = () => {
  return (
    <div style={{ background: "hsl(218, 28%, 13%)" }} className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-2 text-white">
            Mizpah Industrial Company is - a registered limited liability
            company incorporated under the company's code, 1963 (Act 179) of the
            republic of Ghana, to provide technical support in the field of
            Engineering.
            <div>
              <a
                href="/where-we-operate"
                className="btn btn-outline-light mt-4"
              >
                Where we operate
              </a>
            </div>
          </div>
          <div className="col-md-2 mt-2">
            <FooterHeader text="Company" />
            <div className="mt-4">
              <FooterNavItem href="/about-us" text="Our Mission" />
              <FooterNavItem href="/about-us" text="Vision" />
              <FooterNavItem
                href="/about-us"
                text="Safety Policies and Objectives"
              />
            </div>
          </div>
          <div className="col-md-2 mt-2">
            <FooterHeader text="What we do" />
            <div className="mt-4">
              <FooterNavItem href="/" text="Home" />
              <FooterNavItem href="/where-we-operate" text="Where we operate" />
              <FooterNavItem href="/contact-us" text="Contact Us" />
            </div>
          </div>
          <div className="col-md-2 mt-2">
            <FooterHeader text="Socials" />
            <div className="mt-4">
              <FooterNavItem
                href="https://www.linkedin.com/company/mizpah-industrial2019/"
                text="LinkedIn"
                blankTarget
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
