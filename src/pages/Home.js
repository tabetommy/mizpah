import React,{ useRef } from "react";
import Footer from "../components/Footer";
import Header from "../routeComponents/Header";
import ScrollComponent from "./scrollcomponent/scroll";
import ParticlesBackground from "../components/Particles/Particles.js";
import Pump from "../assets/tools-svgrepo-com.svg"; 
import Construction from "../assets/construction.svg";
import Thruflo from "../assets/productimages/truflo_506.png";
import Mudex from "../assets/image 1.png";
import Tkk from "../assets/image_23_506.png";
import Paint from "../assets/painting.svg";
import { useMediaQuery } from "react-responsive";
import Card from 'react-bootstrap/Card';
import "bootstrap-icons/font/bootstrap-icons.css";
import './pages.css';

import { useNavigate } from "react-router-dom"

function Home() {
  const isNotDesktop = useMediaQuery({
    query: "(max-width: 992px)",
  });



  const scrollRef= useRef(null);
  const navigate = useNavigate();
 
  return (
    <div className="home">
      <Header/>
      <ParticlesBackground />
      <div className="home-main-container">
        <section className="container text-white blast-paint-cont">
          <h1>Discover the MIZPAH Experience</h1>
          <p className="mb-5 py-5 text-center page-para home-text">
           where cutting-edge technology and <br/>exceptional service  converge to create unparalleled value for our clients.<br/><span className="home-title-CTA">Join us in building a sustainable future, one project at a time.</span>
          </p>
        </section>
        <ScrollComponent scrollreference={scrollRef}/>
      </div>
      <div className="home-contents" ref={scrollRef}>
      
          <section className="heading-para">
            <h1 className="white-header" > 
              Our Services 
              <hr className="centered-line" width="200px"/>
            </h1>
          </section>
          <section className="container">
            <div className="row my-5 d-md-flex">
               <div className="col-xxl-4 col-lg-12 text-center p-5">
                 <img src={Pump} style={{width:'60px'}} alt="Pump repairs"/>
                 <h3 className="pt-2">Pump Repairs</h3>
                 <p>
                    We specialize in providing expert solutions for all your pumping needs, from installation to maintenance and repair.
                    <br/>
                    <span className="find-out-more-btn" onClick={()=>navigate('/services/pumping')}>
                    Find out more 
                    <i className="bi bi-arrow-right px-1"></i> 
                    </span>
                 </p>
               </div>
                <div className="col-xxl-4 col-lg-12 text-center p-5">
                  <img src={Paint} style={{width:'60px'}} alt="Sandblasting/Painting & Corrosion Protection"/>
                  <h3 className="pt-2">Sandblasting/Painting & Corrosion Protection</h3>
                   <p>
                      Our expert team provides top-notch sand blasting and painting services to rejuvenate and protect your surfaces.
                      <br/>
                      <span className="find-out-more-btn"  onClick={()=>navigate('/services/sandblasting')}>
                      Find out more 
                      <i className="bi bi-arrow-right px-1"></i> 
                      </span>
                   </p>
                </div>
                <div className="col-xxl-4 col-lg-12 text-center p-5">
                  <img src={Construction} style={{width:'60px'}} alt="construction services"/>
                  <h3 className="pt-2">Constuction Works</h3>
                   <p>
                      Your trusted partner in comprehensive construction services.
                      <br/>
                      <span className="find-out-more-btn" onClick={()=>navigate('/services/construction')}>
                      Find out more 
                      <i className="bi bi-arrow-right px-1"></i> 
                      </span>
                   </p>
                </div> 
            </div>
          </section>
         
      </div>
      <div className="home-contentsssss ">
          <section className="container text-white heading-para blast-paint-cont">
            <h1>Who we are</h1>
            <p className="mb-5 py-5 text-center page-para home-text ">
              Welcome to MIZPAH, where innovation meets reliability <br/>With decades of experience, we proudly supply top-tier goods and services across diverse fields such as construction, water pumping, drilling, and beyond. Our expertise drives your projects forward, from groundbreaking infrastructure to seamless water solutions.
              
              <p className="text-center mt-4">
                  <span 
                  className="transparent-btn"
                  onClick={()=>navigate('/about-us')}
                  >Get to know us more</span>
               </p>
            </p>
           
          </section>
      </div>
      <div className="home-contents">
      
          <section className="heading-para">
            <h1 className="white-header"> Our Products</h1>
          </section>
         <section className="container home-prod-con">
           <div className="row my-5">
            <div className="col-xxl-4 col-lg-12 my-4">
              <Card className="d-flex flex-column">
                <Card.Img variant="top" src={Thruflo} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Thruflo Pumping systems</Card.Title>
                  <Card.Text className="mb-3" >
                    We provide truflo pumping systems tailored to meet the most demanding industrial needs. <span className="text-white">xxxxxxxxxxxxxxxxxxxxx</span>
                  </Card.Text>
                  <div className="mt-auto" onClick={()=>navigate('/products/pumps/truflo')}>
                    <span className="home-prod-btn">Find out more</span>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xxl-4 col-lg-12 my-4">
              <Card className="d-flex flex-column">
                <Card.Img variant="top" src={Mudex}/>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Drilling Additives</Card.Title>
                  <Card.Text className="mb-3">
                    we specialize in providing high-quality Mudex additives designed to enhance the performance and efficiency of drilling fluids.
                  </Card.Text> 
                  <div className="mt-auto" onClick={()=>navigate('/products/additives')}>
                    <span className="home-prod-btn">Find out more</span>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xxl-4 col-lg-12 my-4">
              <Card className="d-flex flex-column">
                <Card.Img variant="top" src={Tkk}/>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Lifting Gears/Equipments</Card.Title>
                  <Card.Text className="mb-3">
                    We supply  high-quality TKK lifting gears/equipments. <span className="text-white">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxx</span>
                    
                  </Card.Text> 
                 <div className="mt-auto" onClick={()=>navigate('/products/gears')}>
                   <span className="home-prod-btn">Find out more</span>
                 </div>
                </Card.Body>
              </Card>
            </div>
           </div>
          </section>
      </div>
     <Footer/>
    </div>
  );
}

export default Home;
