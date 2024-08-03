import React, { useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SupavacImage from "../assets/supavac.jpeg";
import TKKLogo from "../assets/tkk_hoist&crane.png";
import TruFlow from "../assets/truflow.webp";
import BartailLogo from "../assets/bartail-logo.png";

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
import ImageSeventeen from "../assets/image 17.png";
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

import { useMediaQuery } from "react-responsive";

const Services = () => {
  const services = [
    "pump repairs",
    "Machinery Hiring ",
    "Tanks and pipe Works",
    "sandblasting and painting",
    "corrosion protection",
    "plumbing works",
    "electrical works",
    "construction works",
  ];
  return (
    <div>
      <div className="custom-tree">
        <ul>
          {services.map((item) => (
            <li>
              <div className="li-l2 mb-3 text-capitalize">{item}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
