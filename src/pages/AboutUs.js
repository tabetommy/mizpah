import React from "react";
import UnderConstruction from "../components/UnderConstruction";
import Footer from "../components/Footer";
import Header from "../routeComponents/Header";
import ScrollComponent from "./scrollcomponent/scroll";


function AboutUs() {

  const scrollRef= React.useRef(null);
  return (
    <div>
     <Header />
     <div className="about-main-container">
       <div className="home-contents">
           <section className="heading-para">
             <h1>About</h1>
             <p>Who we are. Our Mission and Vision</p>
           </section>
       </div>
       <ScrollComponent scrollreference={scrollRef}/>
     </div>
     <div className="container py-5 opacity-75" ref={scrollRef}>
        <div id="mission" className="py-3">
          <h3 className="text-start" >Mission Statement</h3>
          <p className="mt-0" style={{ fontSize: "19px" }}>
            Mizpah Industrial Limited has one aim:{" "}
            <span className="fw-bold">Excellence in All We Do.</span>
          </p>
        </div>
        <div id="vision" className="py-3">
          <h3 className="text-start">Vision Statement</h3>
          <p className="mt-0" style={{ fontSize: "19px" }}>
            Our vision is to become a preferred service provider in the
            management, execution and delivery of projects in various
            disciplines/fields based on the capabilities of the company.
          </p>
        </div>
        <div id="safety"  className="py-3">
          <h3 className="text-start">Safety Policies & Objectives</h3>
          <p style={{ margin: 0 }} className="quote">
            <i class="fa fa-quote-left me-2 text-muted" aria-hidden="true"></i>
            Safety is not a gadget but a state of mind.
            <i class="fa fa-quote-right ms-2 text-muted" aria-hidden="true"></i>
          </p>
          <p className="mt-0" style={{ fontSize: "19px" }}>
            The general Company safety philosophy has been developed to reflect
            and communicate the proactive safety attitude maintained at Mizpah
            Industrial Company Limited. The Company will comply with appropriate
            safety and security laws and regulations such as those established by:
            <ul>
              <li className="mt-3">The Ghana Labour Act 651 to ensure that employees are not exposed
              to conditions that would lead to work related injuries or illnesses.
              Employees are also required to exhibit thier duty of care in
              ensuring that they work as per the employers' standard operating
              procedures which must incorporate Health and Safety requirements.
              </li>
              <li className="mt-3">
                The EPA (Environmental Protection Agency)
              </li>
              <li className="mt-3">
               All other safety procedures. Mizpah Industrial Company Limited is
               committed to the protection of all its resources, including
               employees and physical assets , from accidental injury or loss. In
               fulfilling this commitment to protect both people and equipment,
               management will strive to eliminate any foreseeable hazards, which
               may result in property damage, accidents or personal injury or
               illness. Management will provide necessary mechanical equipment,
               Instruments and personal protective equipment, along with
               instruction for their use and care. Employees will be equally
               responsible for minimizing accidents at their job sites. Safe work
               practice and procedures will be defined in the Safety requirements
               as they relate to planning, operation and maintenance of machinery
               and equipment . All employees will perform their jobs properly, in
               accordance with established procedures and safe work practices.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
