import React from "react";

export default function AboutUsSection() {
  return (
    <div style={{ background: "#848688", paddingTop: 100, paddingBottom: 100 }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="title-1 text-white">
              <span className="bold-header ">About</span> Us
            </h1>
            <p className="text-white pe-lg-5">
              Mizpah Industrial Company Limited is a registered limited
              liability company incorporated under the company&#39;s code, 1963
              (Act 179) of the Republic of Ghana, providing technical support in
              a number of fields namely: engineering, all-materials procurement,
              mining and construction – focused on the formal and informal
              sectors in Ghana and the West African Sub Region.
            </p>
            <p className="text-white pe-lg-5">
              Mizpah has a very competent workforce with the requisite skill and
              experience to carry out all the works detailed in our Scope of
              Services. Our greatest competitive advantage is the expertise and
              passion of our people. We are motivated to excel in the elements
              needed to provide project success and deliver products that will
              leave a lasting impression on our clients, our society and our
              communities.
            </p>
            <p className="text-white pe-lg-5">
              The company also builds on its ability to employ from a wide range
              of human resources made up of competent, professional and highly
              skilled experts who have worked in the mining, oil and gas
              industry in Ghana and the West African Sub Region. The company has
              over 20 permanent and part- time personnel in its work force made
              up of the Project Manager, Electrical, Mechanical and Civil
              Engineers, Project Supervisors, Accountants &amp; Administration,
              Technicians, and Artisans. All technicians and artisans employed
              are tested by the relevant agencies for example, welders undergo
              welding qualification testing before being assigned to work on our
              projects. Whenever necessary, we increase the capacity of our
              workforce with temporary employees to meet project employee
              overflow requirements. Our company believes in diversity,
              therefore as at and when required, we will source national and
              international workers as needed.
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex mt-4">
              <span
                style={{ fontSize: 60, fontWeight: "bold", color: "#39f48c" }}
                className="material-symbols-outlined me-3"
              >
                chevron_right
              </span>
              <div>
                <h3 className="text-white fw-bold">We Believe in Quality</h3>
                <p className="mt-0 text-white" style={{ fontSize: "19px" }}>
                  Quality comes as standard. Mizpah Industrial Limited is
                  committed to meeting international quality standards as well
                  as any local or regional codes and be among the top tier
                  performers. Our mission is to deploy resources with the
                  necessary skills to reshape and redefine the parameters of the
                  services that we provide.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <span
                style={{ fontSize: 60, fontWeight: "bold", color: "#39f48c" }}
                className="material-symbols-outlined me-3"
              >
                chevron_right
              </span>
              <div>
                <h3 className="text-white fw-bold">Vision Statement</h3>
                <p className="mt-0 text-white" style={{ fontSize: "19px" }}>
                  Our vision is to become a preferred service provider in the
                  management, execution and delivery of projects in various
                  disciplines/fields based on the capabilities of the company.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <span
                style={{ fontSize: 60, fontWeight: "bold", color: "#39f48c" }}
                className="material-symbols-outlined me-3"
              >
                chevron_right
              </span>
              <div>
                <h3 className="text-white fw-bold">Mission Statement</h3>
                <p className="mt-0 text-white" style={{ fontSize: "19px" }}>
                  Mizpah Industrial Limited has one aim:{" "}
                  <span className="fw-bold">Excellence in All We Do.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
