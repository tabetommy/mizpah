import React from "react";
import UnderConstruction from "../components/UnderConstruction";
import Footer from "../components/Footer";
import Header from "../routeComponents/Header";
import ScrollComponent from "./scrollcomponent/scroll";
import ParticlesBackground from "../components/Particles/Particles.js";


function AboutUs() {

  const scrollRef= React.useRef(null);
  return (
    <div>
     <Header />
     <ParticlesBackground />
     <div className="about-main-container">
       <div className="container">
           <section className="text-white blast-paint-cont img-title">
             <h1>About</h1>
             <p className="mb-5 text-center page-para home-text py-3">Who we are, Our Mission and Vision</p>
           </section>
       </div>
       <ScrollComponent scrollreference={scrollRef}/>
     </div>
     <div className="container py-5" ref={scrollRef}>
      <div className="row g-5">
        <div className="col p-4">
          <div id="vision" className="mb-5">
            <h3 className="text-start left-bor" >Vision Statement</h3>
            <p className="mt-0">
              As a company, we are committed to becoming a preferred provider of products and services in a variety of disciplines/fields.
            </p>
          </div>
          <div id="mission" className="mb-5">
            <h3 className="text-start left-bor" >Mission Statement</h3>
            <p className="mt-0">
              Our mission is to become indispensable to our customers by providing differentiated products and services that help them achieve their goals.
            </p>
          </div>
          <div>
            <h3 className="text-start left-bor">Who we are</h3>
            <p className="mt-0" >
             We are a company specialised in product and general services sales for a wide variety of industries. Mizpah Industrial Company Limited was established in 2019.
            </p>
            <p className="mt-0" >
              Despite being based in Ghana, Mizpah operates all over Africa.
            </p>
            <p className="mt-0" >
             Since its establishment in 2019, Mizpah has aimed at providing value-added products and general services to its customers by establishing successful partnerships with their reliable suppliers.
            </p>
            <p className="mt-0" >
            We strive to build lasting relationships with our suppliers and customers by exceeding their expectations and gaining their trust through exceptional delivery and performance by every member of our team.
            </p>
          </div>
        </div>
       
        <div class="col p-4" style={{borderLeft: '3px solid rgb(38 216 202)' }}>
          <div id="safety" >
            <h3 className="text-start left-bor">Safety Policies & Objectives</h3>
            <p style={{ margin: 0 }} className="quote">
              <i className="fa fa-quote-left me-2" aria-hidden="true" style={{ color: 'rgb(38, 216, 202)' }}></i>
              Safety is not a gadget but a state of mind.
              <i className="fa fa-quote-right ms-2" aria-hidden="true" style={{ color: 'rgb(38, 216, 202)' }}></i>
            </p>
            <p className="mt-0">
              The general Company safety philosophy has been developed to reflect
              and communicate the proactive safety attitude maintained at Mizpah
              Industrial Company Limited. The Company will comply with appropriate
              safety and security laws and regulations such as those established by:
              <ul className="about-list">
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
      </div>  
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
