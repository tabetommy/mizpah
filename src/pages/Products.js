import React, { useRef } from "react";
import Footer from "../components/Footer";
import Header from "../routeComponents/Header";
import SupavacImage from "../assets/supavac.jpeg";
import TKKLogo from "../assets/hoistandcrane.png";
import TruFlow from "../assets/truflow.webp";
import BartailLogo from "../assets/bartail-logo.png";
import ScrollComponent from "./scrollcomponent/scroll";

import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import MudexLogo from "../assets/Mudex.png";
import SlurryForce from "../assets/Slurry-Force.jpeg";
import Varisco from "../assets/varisco.png";
import Arc from "../assets/arc.png";
import ProductsOne from "../assets/products_1.png";
import ProductsTwo from "../assets/products_2.png";
import ProductsThree from "../assets/products_3.png";
import ProductsFour from "../assets/products_4.png";
import ProductsFive from "../assets/products_5.png";
import ProductsSix from "../assets/products_6.png";

import ImageOne from "../assets/image 1.png";
import ImageTwo from "../assets/image 2.png";
import ImageThree from "../assets/image 3.png";
import ImageFour from "../assets/image 4.png";
import ImageFive from "../assets/image 5.png";
import ImageSix from "../assets/image 6.png";
import ImageSeven from "../assets/image 7.png";
import ImageEight from "../assets/image 8.png";
import ImageNine from "../assets/image 9.png";
import ImageTen from "../assets/image 10.png";
import ImageEleven from "../assets/image 11.png";
import ImageTwelve from "../assets/image 12.png";
import ImageThirteen from "../assets/image 13.png";
import ImageFourteen from "../assets/image 14.png";
import ImageFifteen from "../assets/image 15.png";
import ImageSixteen from "../assets/image 16.png";
import ImageSeventeen from "../assets/jumbo-pump-1.png";
import ImageSeventeenTwo from "../assets/jumbo-pump-2.png";
import ImageSeventeenThree from "../assets/jumbo-pump-3.png";
import ImageEighteen from "../assets/image 18.png";
import ImageNineteen from "../assets/image 19.png";
import ImageTwenty from "../assets/image 20.png";
import ImageTwentyOne from "../assets/image 21.png";
import ImageTwentyTwo from "../assets/image 22.png";
import ImageTwentyThree from "../assets/image 23.png";
import ImageTwentyFour from "../assets/image 24.png";
import ImageTwentyFive from "../assets/image 25.png";
import ImageTwentySix from "../assets/image 26.png";

import Slider from "react-slick";

import ProductImageOne from "../assets/productimages/IMG-20220209-WA0001.jpg";
import ProductImageTwo from "../assets/productimages/IMG-20220214-WA0016.jpg";
import ProductImageThree from "../assets/productimages/IMG-20220214-WA0017.jpg";
import ProductImageFour from "../assets/productimages/IMG-20220905-WA0053.jpg";
import ProductImageFive from "../assets/productimages/IMG-20220905-WA0056.jpg";
import ProductImageSix from "../assets/productimages/IMG-20220905-WA0057.jpg";
import ProductImageSeven from "../assets/productimages/IMG-20220905-WA0062.jpg";
import ProductImageEight from "../assets/productimages/IMG-20220905-WA0063.jpg";
import ProductImageNine from "../assets/productimages/IMG-20220905-WA0064.jpg";
import ProductImageTen from "../assets/productimages/IMG-20220905-WA0070.jpg";
import ProductImageEleven from "../assets/productimages/IMG-20220905-WA0071.jpg";
import ProductImageTwelve from "../assets/productimages/IMG-20220905-WA0073.jpg";
import ProductImageThirteen from "../assets/productimages/IMG-20221123-WA0020.jpg";
import ProductImageFourteen from "../assets/productimages/IMG-20221123-WA0021.jpg";
import ProductImageFifteen from "../assets/productimages/IMG-20221126-WA0009.jpg";
import ProductImageSixteen from "../assets/productimages/IMG-20221126-WA0010.jpg";
import ProductImageSeventeen from "../assets/productimages/IMG-20221126-WA0011.jpg";
import ProductImageEighteen from "../assets/productimages/IMG-20221126-WA0012.jpg";
import ProductImageNineTeen from "../assets/productimages/IMG-20221126-WA0013.jpg";
import ProductImageTwenty from "../assets/productimages/IMG-20221126-WA0014.jpg";
import ProductImageTwentyOne from "../assets/productimages/IMG-20221126-WA0015.jpg";
import ProductImageTwentyTwo from "../assets/productimages/IMG-20221126-WA0017.jpg";
import ProductImageTwentyThree from "../assets/productimages/IMG-20221126-WA0018.jpg";
import ProductImageTwentyFour from "../assets/productimages/IMG-20221126-WA0020.jpg";
import ProductImageTwentySix from "../assets/productimages/IMG-20221126-WA0021.jpg";
import AustralianMadeLogo from "../assets/austalianmade.png";

import { useMediaQuery } from "react-responsive";

const Products = () => {
  const isNotDesktop = useMediaQuery({
    query: "(max-width: 992px)",
  });

  let slideWelcomeText = {
    textTransform: "uppercase",
    paddingLeft: 20,
    borderLeft: "4px solid #39f48c",
    fontSize: 14,
    marginBottom: 40,
  };

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const sliderRef = useRef();
  const scrollRef = useRef();
  
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };
  
  
  const [responsive,setResponsive]=React.useState({
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    });
  
  const setCarouselResp=()=>{
   window.dispatchEvent(new Event('resize'));
  }
  
  return (
    <div id="products-page">
      <Header />
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
        <ScrollComponent scrollreference={scrollRef}/>
      </div>

      {/* <Slider style={{ height: 600 }} ref={sliderRef} {...settings}>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5 position-relative" style={{ height: 600 }}>
              <img
                src={ProductsTwo}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
              <img
                src={AustralianMadeLogo}
                style={{
                  width: 100,
                  height: 100,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5 position-relative" style={{ height: 600 }}>
              <img
                src={ProductsThree}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
              <img
                src={AustralianMadeLogo}
                style={{
                  width: 100,
                  height: 100,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5 position-relative" style={{ height: 600 }}>
              <img
                src={ProductsFour}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
              <img
                src={AustralianMadeLogo}
                style={{
                  width: 100,
                  height: 100,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5 position-relative" style={{ height: 600 }}>
              <img
                src={ProductsFive}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
              <img
                src={AustralianMadeLogo}
                style={{
                  width: 100,
                  height: 100,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5" style={{ height: 600 }}>
              <img
                src={ProductImageFive}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5" style={{ height: 600 }}>
              <img
                src={ProductImageTwo}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5" style={{ height: 600 }}>
              <img
                src={ProductImageThree}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5" style={{ height: 600 }}>
              <img
                src={ProductImageFour}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5" style={{ height: 600 }}>
              <img
                src={ProductImageFive}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5" style={{ height: 600 }}>
              <img
                src={ProductImageSix}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5" style={{ height: 600 }}>
              <img
                src={ProductImageSeven}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5" style={{ height: 600 }}>
              <img
                src={ProductImageEight}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5" style={{ height: 600 }}>
              <img
                src={ProductImageNine}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5" style={{ height: 600 }}>
              <img
                src={ProductImageTen}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5" style={{ height: 600 }}>
              <img
                src={ProductImageEleven}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5" style={{ height: 600 }}>
              <img
                src={ProductImageTwelve}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5" style={{ height: 600 }}>
              <img
                src={ProductImageThirteen}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5" style={{ height: 600 }}>
              <img
                src={ProductImageFourteen}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%" }}
            className="bg-dark row justify-content-center"
          >
            <div className="col-md-5" style={{ height: 600 }}>
              <img
                src={ProductImageFifteen}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </Slider> */}
      
      
      <Container className="py-5">
        <Row>
          <Col>
            <Accordion defaultActiveKey={['0']}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <img src={TruFlow} style={{ width: 200 }} />
                </Accordion.Header>
                <Accordion.Body onEntering={setCarouselResp}>
                <h3 className="product-title">Truflo Pumping systems</h3>
                  <Carousel responsive={responsive}>
                    <div className="me-5 mb-5 position-relative">
                      <img
                        src={ProductsTwo}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                      <img
                        src={AustralianMadeLogo}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                      />
                    </div>
                    <div className="me-5 mb-5 position-relative">
                      <img
                        src={ProductsThree}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                      <img
                        src={AustralianMadeLogo}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                      />
                    </div>
                    <div className="me-5 mb-5 position-relative">
                      <img
                        src={ProductsFour}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                      <img
                        src={AustralianMadeLogo}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                      />
                    </div>
                    <div className="me-5 mb-5 position-relative">
                      <img
                        src={ProductsFive}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                      <img
                        src={AustralianMadeLogo}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                      />
                    </div>
                    <div className="me-5 mb-5 position-relative">
                      <img
                        src={ImageEleven}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                      <img
                        src={AustralianMadeLogo}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                      />
                    </div>
                    <div className="me-5 mb-5 position-relative">
                      <img
                        src={ImageTwelve}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                      <img
                        src={AustralianMadeLogo}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                      />
                    </div>
                    <div className="me-5 mb-5 position-relative">
                      <img
                        src={ImageThirteen}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                      <img
                        src={AustralianMadeLogo}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageFourteen}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5 position-relative">
                      <img
                        src={ImageFifteen}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                      <img
                        src={AustralianMadeLogo}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                      />
                    </div>
                    <div className="me-5 mb-5 position-relative">
                      <img
                        src={ImageSixteen}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                      <img
                        src={AustralianMadeLogo}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                      />
                    </div>
                    <div className="me-5 mb-5 position-relative">
                      <img
                        src={ImageSeventeen}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                      <img
                        src={AustralianMadeLogo}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                      />
                    </div>
                    <div className="me-5 mb-5 position-relative">
                      <img
                        src={ImageSeventeenTwo}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                      <img
                        src={AustralianMadeLogo}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                      />
                    </div>
                    <div className="me-5 mb-5 position-relative">
                      <img
                        src={ImageSeventeenThree}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                      <img
                        src={AustralianMadeLogo}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                      />
                    </div>
                    <div className="me-5 mb-5 position-relative">
                      <img
                        src={ImageEighteen}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                      <img
                        src={AustralianMadeLogo}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                      />
                    </div>
                  </Carousel>
                </Accordion.Body>
              </Accordion.Item>
              
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                 <img src={MudexLogo} style={{ width: 200 }} />
                </Accordion.Header>
                <Accordion.Body onEntering={setCarouselResp}>
                  <h3 className="product-title">Mudex Products</h3>
                  <Carousel responsive={responsive}>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageOne}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageTwo}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageThree}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageFour}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageFive}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageSix}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageSeven}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageEight}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageNine}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageTen}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                  </Carousel>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="2">
                <Accordion.Header><img src={TKKLogo} style={{ width: 200 }} /></Accordion.Header>
                <Accordion.Body onEntering={setCarouselResp}>
                <h3 className="product-title">TKK Hoist & Crane</h3>
                 <Carousel responsive={responsive}>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageTwentyThree}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageTwentyFour}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageTwentyFive}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageTwentySix}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                 </Carousel>
                </Accordion.Body>
              </Accordion.Item>
              
              
              <Accordion.Item eventKey="3">
                <Accordion.Header><img src={BartailLogo} style={{ width: 200, height:90 }} /></Accordion.Header>
                <Accordion.Body onEntering={setCarouselResp}>
                  <h3 className="product-title">Bartail</h3>
                  <Carousel responsive={responsive}>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageNineteen}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageTwenty}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageTwentyOne}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-5 mb-5">
                      <img
                        src={ImageTwentyTwo}
                        style={{ width: 300, height: 300, objectFit: "cover" }}
                      />
                    </div>
                  </Carousel>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Products;
