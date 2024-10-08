import React,{ useRef } from "react";
import Footer from "../components/Footer";
import Header from "../routeComponents/Header";
import ScrollComponent from "./scrollcomponent/scroll";
import ParticlesBackground from "../components/Particles/Particles.js";
// import UnderConstruction from "../components/UnderConstruction";
// import ImageOne from "../assets/dark-main.png";
// import ImageTwo from "../assets/dark-newmain.png";
// import BartailImage from "../assets/bartail.png";
// import Welding from "../assets/welding.jpeg";
// import ConstructionImage from "../assets/Construction.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import AboutUsSection from "../components/AboutUsSection";
// import WhatWeDoSection from "../components/WhatWeDoSection";
// import ProductsHeadline from "../components/ProductsHeadline";
// import TransportationImage from "../assets/productimages/transportation.png";
// import CorrosionProtectionImage from "../assets/corrosion-protection.jpg";
// import TanksAndPipingImage from "../assets/productimages/tanks-and-piping.png";
// import Pipe from "../assets/pipes-svgrepo-com.svg"; 
// import Tank from "../assets/tanks.svg"; 

import Pump from "../assets/tools-svgrepo-com.svg"; 
import Construction from "../assets/construction.svg";
import Thruflo from "../assets/image 16.png";
import Bartail from "../assets/image 22.png";
import Mudex from "../assets/image 1.png";
import Tkk from "../assets/image 23.png";
import Machine from "../assets/machinery.svg"; 
import Electric from "../assets/electric.svg"; 
import Paint from "../assets/painting.svg";
import Corrotion from "../assets/corrotion.svg";
import { useMediaQuery } from "react-responsive";
import Button from 'react-bootstrap/Button';
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
        <div className="container home-title-con">
         <h1 className="intro-title"> Discover the MIZPAH difference, where cutting-edge technology and <br/>exceptional service  converge to create unparalleled value for our clients.<br/><span className="home-title-CTA">Join us in building a sustainable future, one project at a time.</span></h1>
        </div>
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
               <div className="col-lg-4 col-md-6 col-12 text-center p-5">
                 <img src={Pump} style={{width:'60px'}} alt="Pump repairs"/>
                 <h3 className="pt-2">Pump Repairs</h3>
                 <p>
                    We specialize in providing expert solutions for all your pumping needs, from installation to maintenance and repair.
                    <br/>
                    <span style={{cursor:"pointer", color:'rgb(38 216 202)'}} onClick={()=>navigate('/services/pumping')}>
                    Find out more 
                    <i className="bi bi-arrow-right px-1"></i> 
                    </span>
                 </p>
               </div>
               <div className="col-lg-4 col-md-6 col-12 text-center p-5">
                  <img src={Machine} style={{width:'60px'}} alt="Machinery Hiring"/>
                  <h3 className="pt-2">Machinery Hiring</h3>
                   <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                      <br/>
                      <span style={{cursor:"pointer", color:'rgb(38 216 202)'}} onClick={()=>navigate('/services/pumping')}>
                      Find out more 
                      <i className="bi bi-arrow-right px-1"></i> 
                      </span>
                   </p>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-center p-5">
                  <img src={Paint} style={{width:'60px'}} alt="Sandblasting And Painting"/>
                  <h3 className="pt-2">Sandblasting & Painting</h3>
                   <p>
                      Our expert team provides top-notch sand blasting and painting services to rejuvenate and protect your surfaces.
                      <br/>
                      <span style={{cursor:"pointer", color:'rgb(38 216 202)'}} onClick={()=>navigate('/services/sandblasting')}>
                      Find out more 
                      <i className="bi bi-arrow-right px-1"></i> 
                      </span>
                   </p>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-lg-4 col-md-6 col-12 text-center p-5">
                  <img src={Corrotion} style={{width:'60px'}} alt="Corrotion Protection"/>
                  <h3 className="pt-2">Corrotion Protection</h3>
                   <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                      <br/>
                      <span style={{cursor:"pointer", color:'rgb(38 216 202)'}} onClick={()=>navigate('/services/pumping')}>
                      Find out more 
                      <i className="bi bi-arrow-right px-1"></i> 
                      </span>
                   </p>
                </div>
                <div className="col-lg-4 col-md-6 col-12 col-sm-12 text-center p-5">
                  <img src={Electric} style={{width:'60px'}} alt="Electrical works"/>
                  <h3 className="pt-2">Electrical works</h3>
                   <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                      <br/>
                      <span style={{cursor:"pointer", color:'rgb(38 216 202)'}} onClick={()=>navigate('/services/pumping')}>
                      Find out more 
                      <i className="bi bi-arrow-right px-1"></i> 
                      </span>
                   </p>
                </div>
                <div className="col-lg-4 col-md-6 col-12 col-sm-12 text-center p-5">
                  <img src={Construction} style={{width:'60px'}} alt="construction services"/>
                  <h3 className="pt-2">Constuction Works</h3>
                   <p>
                      Your trusted partner in comprehensive construction services.
                      <br/>
                      <span style={{cursor:"pointer", color:'rgb(38 216 202)'}} onClick={()=>navigate('/services/construction')}>
                      Find out more 
                      <i className="bi bi-arrow-right px-1"></i> 
                      </span>
                   </p>
                </div> 
            </div>
          </section>
         
      </div>
      <div className="home-contentsssss ">
          <section className="container text-white heading-para">
            <h1>Who we are</h1>
            <p className="mb-5">
              Welcome to MIZPAH, where innovation meets reliability. With decades of experience, we proudly supply top-tier goods and services across diverse fields such as construction, water pumping, drilling, and beyond. Our expertise drives your projects forward, from groundbreaking infrastructure to seamless water solutions.
            </p>
           <p className="text-center">
              <span 
              className="transparent-btn"
              onClick={()=>navigate('/about-us')}
              >Get to know us more</span>
           </p>
          </section>
      </div>
      <div className="home-contents">
      
          <section className="heading-para">
            <h1 className="white-header">
              Our Products
              {/* <hr className="centered-line" width="500px"/> */}
              </h1>
          </section>
         <section className="container home-prod-con">
           <div className="row my-5">
            <div className="col-xxl-3 col-xl-6 col-12 my-4">
              <Card className="d-flex flex-column">
                <Card.Img variant="top" src={Thruflo} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Thruflo Pumping systems</Card.Title>
                  <Card.Text className="mb-3" >
                    We provide truflo pumping systems tailored to meet the most demanding industrial needs.
                  </Card.Text>
                  <div className="mt-auto" onClick={()=>navigate('/products/pumps/truflo')}>
                    <span className="home-prod-btn">Find out more</span>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xxl-3 col-xl-6 col-12 my-4">
              <Card className="d-flex flex-column">
                <Card.Img variant="top" src={Bartail} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Bartail Pumps</Card.Title>
                  <Card.Text className="mb-3">
                    MIZPAH is your trusted partner for high-quality bartail pumps.
                  </Card.Text>
                  <div className="mt-auto" onClick={()=>navigate('/products/pumps/bartail')}>
                    <span className="home-prod-btn">Find out more</span>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xxl-3 col-xl-6 col-12 my-4">
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
            <div className="col-xxl-3 col-xl-6 col-12 my-4">
              <Card className="d-flex flex-column">
                <Card.Img variant="top" src={Tkk}/>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Lifting Gears/Equipments</Card.Title>
                  <Card.Text className="mb-3">
                    We supply  high-quality TKK lifting gears/equipments.
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
