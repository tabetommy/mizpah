import React,{ useRef } from "react";
import Footer from "../components/Footer";
import Header from "../routeComponents/Header";
import ScrollComponent from "./scrollcomponent/scroll";
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
import './pages.css';

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

  return (
    <div>
      <Header/>
      <div className="home-main-container">
        <div className="home-contents">
     
            <section className="heading-para">
              <h1>  Pioneering management and <br/>technology consulting for digital change</h1>
            </section>
            {/* <section className="home-services">
              <p>
                We are shaping construction in Ghana and designing strategies for a world that is constantly changing.<br/>
                Together with our clients, we forge ahead into the future - Guiding Ahead. <br/>In this way, we help corporations, SMEs and the public sector to recognise and implement relevant opportunities in a constantly changing environment.
              </p>
            </section> */}
        </div>
        <ScrollComponent/>
      </div>
      <div className="home-contents">
      
          <section className="heading-para">
            <h1 className="white-header"> Our Services</h1>
          </section>
          <section className="container">
            <div className="row my-5">
               <div className="col text-center">
                 <img src={Pump} style={{width:'100px'}} alt="Pump repairs"/>
                 <h5>Pump Repairs</h5>
               </div>
               <div className="col text-center">
                  <img src={Machine} style={{width:'100px'}} alt="Machinery Hiring"/>
                  <p>Machinery Hiring</p>
                </div>
                <div className="col text-center">
                  <img src={Tank} style={{width:'100px'}} alt="Tanks And Pipe Works"/>
                  <p>Tanks And Pipe Works</p>
                </div>
                <div className="col text-center">
                  <img src={Paint} style={{width:'100px'}} alt="Sandblasting And Painting"/>
                  <p>Sandblasting And Painting</p>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                  <img src={Corrotion} style={{width:'100px'}} alt="Corrotion Protection"/>
                  <p>Corrotion Protection</p>
                </div>
                <div className="col text-center">
                  <img src={Pipe} style={{width:'100px'}} alt="Plumbing services"/>
                  <p>Plumbing Works</p>
                </div>
                <div className="col text-center">
                  <img src={Electric} style={{width:'100px'}} alt="Electrical works"/>
                  <p>Electrical works</p>
                </div>
                <div className="col text-center">
                  <img src={Construction} style={{width:'100px'}} alt="construction services"/>
                  <p>Constuction Works</p>
                </div>
            </div>
          </section>
         
      </div>
      <div className="home-contentsssss">
          <section className="text-white heading-para">
            <h1>Products</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          </section>
      </div>
      <div className="home-contents">
      
          <section className="heading-para">
            <h1 className="white-header">PORTFOLIO OF EXPERIENCE</h1>
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
