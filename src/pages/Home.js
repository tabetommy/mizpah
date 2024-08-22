import React,{ useRef, useState, useEffect } from "react";
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
import Construction from "../assets/construction.svg";
import Pump from "../assets/tools-svgrepo-com.svg"; 
import Pipe from "../assets/pipes-svgrepo-com.svg"; 
import Machine from "../assets/machinery.svg"; 
import Tank from "../assets/tanks.svg"; 
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

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let slideWelcomeText = {
    color: "#fff",
    textTransform: "uppercase",
    paddingLeft: 20,
    borderLeft: "4px solid #39f48c",
    fontSize: 14,
  };

  const sliderRef = useRef();
  const scrollRef= useRef(null);
  const navigate = useNavigate();
  

  
 
  return (
    <div className="home">
      <Header/>
      <ParticlesBackground />
      <div className="home-main-container">
        <div className="home-contents">
         <h1 className="img-title">  Pioneering management and <br/>technology consulting for digital change</h1>
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
            <div className="row my-5">
               <div className="col text-center p-5">
                 <img src={Pump} style={{width:'60px'}} alt="Pump repairs"/>
                 <h3 className="pt-2">Pump Repairs</h3>
                 <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    <br/>
                    <span style={{cursor:"pointer", color:'rgb(38 216 202)'}} onClick={()=>navigate('/services/pumping')}>
                    Find out more 
                    <i className="bi bi-arrow-right px-1"></i> 
                    </span>
                 </p>
               </div>
               <div className="col text-center p-5">
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
                <div className="col text-center p-5">
                  <img src={Tank} style={{width:'60px'}} alt="Tanks And Pipe Works"/>
                  <h3 className="pt-2">Tanks And Pipe Works</h3>
                   <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                      <br/>
                      <span style={{cursor:"pointer", color:'rgb(38 216 202)'}} onClick={()=>navigate('/services/pumping')}>
                      Find out more 
                      <i className="bi bi-arrow-right px-1"></i> 
                      </span>
                   </p>
                </div>
                <div className="col text-center p-5">
                  <img src={Paint} style={{width:'60px'}} alt="Sandblasting And Painting"/>
                  <h3 className="pt-2">Sandblasting & Painting</h3>
                   <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                      <br/>
                      <span style={{cursor:"pointer", color:'rgb(38 216 202)'}} onClick={()=>navigate('/services/pumping')}>
                      Find out more 
                      <i className="bi bi-arrow-right px-1"></i> 
                      </span>
                   </p>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center p-5">
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
                <div className="col text-center p-5">
                  <img src={Pipe} style={{width:'60px'}} alt="Plumbing services"/>
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
                <div className="col text-center p-5">
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
                <div className="col text-center p-5">
                  <img src={Construction} style={{width:'60px'}} alt="construction services"/>
                  <h3 className="pt-2">Constuction Works</h3>
                   <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                      <br/>
                      <span style={{cursor:"pointer", color:'rgb(38 216 202)'}} onClick={()=>navigate('/services/pumping')}>
                      Find out more 
                      <i className="bi bi-arrow-right px-1"></i> 
                      </span>
                   </p>
                </div> 
            </div>
          </section>
         
      </div>
      <div className="home-contentsssss">
          <section className="text-white heading-para">
            <h1>Products</h1>
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
           <p className="text-center">
              <span 
              className="transparent-btn"
              onClick={()=>navigate('/products')}
              >Our Products</span>
           </p>
          </section>
      </div>
      <div className="home-contents">
      
          <section className="heading-para">
            <h1 className="white-header">
              PORTFOLIO OF EXPERIENCE
              <hr className="centered-line" width="500px"/>
              </h1>
          </section>
         <section className="container">
           <div className="row my-5">
            <div className="col">
              <Card>
                <Card.Img variant="top" src="https://placehold.co/400" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card>
                <Card.Img variant="top" src="https://placehold.co/400" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card>
                <Card.Img variant="top" src="https://placehold.co/400" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text> 
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
