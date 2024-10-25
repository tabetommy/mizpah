import {useEffect} from 'react';
import Header from "../../routeComponents/Header";
import Footer from "../../components/Footer";
import ParticlesBackground from "../../components/Particles/Particles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

import ProductsTwo from "../../assets/productimages/truflow_1.png";
import ProductsThree from "../../assets/productimages/truflow_2.png";
import ProductsFour from "../../assets/productimages/truflow_3.png";
import ProductsFive from "../../assets/productimages/truflow_4.png";
import ImageEleven from "../../assets/productimages/truflow_5.png";
import ImageTwelve from "../../assets/productimages/truflow_6.png";
import ImageThirteen from "../../assets/productimages/truflow_7.png";
import ImageFourteen from "../../assets/productimages/truflow_8.png";
import ImageFifteen from "../../assets/productimages/truflow_9.png";
import ImageSixteen from "../../assets/productimages/truflow_10.png";
import ImageSeventeen from "../../assets/productimages/truflow_11.png";
import ImageSeventeenTwo from "../../assets/productimages/truflow_12.png";
import ImageSeventeenThree from "../../assets/productimages/truflow_13.png";
import ImageEighteen from "../../assets/productimages/truflow_14.png";
import TruFlow from "../../assets/truflow.webp";

import { useNavigate } from "react-router-dom";





const TruflowPumpsComponent=()=>{
   const navigate = useNavigate();
	
	const imagesArrss=[
		
		{
			original: ProductsTwo,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
			originalClass: 'truflo-imgs'
		}, {
			original: ProductsThree,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
			originalClass: 'truflo-imgs'
		}, {
			original: ProductsFour,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
			originalClass: 'truflo-imgs'
		},
		{
			original: ProductsFive,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
			originalClass: 'truflo-imgs'
		}, {
			original: ImageEleven,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
			originalClass: 'truflo-imgs'
		}, {
			original: ImageTwelve,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
			originalClass: 'truflo-imgs'
		},
		{
			original: ImageThirteen,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
			originalClass: 'truflo-imgs'
		}, {
			original: ImageFourteen,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
			originalClass: 'truflo-imgs'
		}, {
			original: ImageFifteen,
			thumbnail: "https://picsum.photos/id/1019/250/150/",
			originalClass: 'truflo-imgs'
		},
		{
			original:ImageSixteen,
			thumbnail: "https://picsum.photos/id/1019/250/150/",
			originalClass: 'truflo-imgs'
		},
		{
			original: ImageSeventeen,
			thumbnail: "https://picsum.photos/id/1019/250/150/",
			originalClass: 'truflo-imgs'
		},
		{
			original: ImageSeventeenTwo,
			thumbnail: "https://picsum.photos/id/1019/250/150/",
			originalClass: 'truflo-imgs'
		},
		{
			original: ImageSeventeenThree,
			thumbnail: "https://picsum.photos/id/1019/250/150/",
			originalClass: 'truflo-imgs'
		},
		{
			original:ImageEighteen,
			thumbnail: "https://picsum.photos/id/1019/250/150/",
			originalClass: 'truflo-imgs'
		}
	]
	
	const renderThumbInner = () => {
		return <div className="thumb-custom-dot" />;
	  };
	  
	// useEffect(() => {
	// 	const divElement = document.querySelectorAll(".truflo-imgs");
	// 	const itemImg = document.createElement("img");
	// 	itemImg.src=AustralianMadeLogo;
	// 	itemImg.classList.add("australian-logo");
	// 	divElement.forEach(ele=>ele.appendChild(itemImg));
	//   }, []);
	  
	return(
		<div>
			<Header/>
			<ParticlesBackground />
			<Container className="truflo-con" >
			  <Row className="flex-column">
				<Col>
					<div className="img-background">
						<img src={TruFlow} style={{ width: 200 }} />
					</div>
					<h3 className="text-start my-3" >Truflo Pumping Systems</h3>
					<p className="mb-5">
						We provide truflo pumping systems tailored to meet the most demanding industrial needs. They make use of cutting-edge technology that  ensures efficient and reliable fluid handling across various applications, from mining to water treatment. <br/><br/>
						<span 
						className='page-contact-btn'
						onClick={()=>navigate('/contact-us')}
						 >Contact us to find out more</span>
					</p>
				</Col>
				<Col>
					<ImageGallery 
					items={imagesArrss} 
					showThumbnails={true}
					renderThumbInner={renderThumbInner}
					thumbnailPosition="bottom"
					autoPlay={true} 
					/>
				</Col>
			  </Row>
			</Container>
			<Footer />
		</div>
	)
}
export default  TruflowPumpsComponent;