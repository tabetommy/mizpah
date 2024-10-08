import Header from "../../routeComponents/Header";
import Footer from "../../components/Footer";
import ParticlesBackground from "../../components/Particles/Particles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

import ProductsTwo from "../../assets/products_2.png";
import ProductsThree from "../../assets/products_3.png";
import ProductsFour from "../../assets/products_4.png";
import ProductsFive from "../../assets/products_5.png";
import AustralianMadeLogo from "../../assets/austalianmade.png";
import ImageEleven from "../../assets/image 11.png";
import ImageTwelve from "../../assets/image 12.png";
import ImageThirteen from "../../assets/image 13.png";
import ImageFourteen from "../../assets/image 14.png";
import ImageFifteen from "../../assets/image 15.png";
import ImageSixteen from "../../assets/image 16.png";
import ImageSeventeen from "../../assets/jumbo-pump-1.png";
import ImageSeventeenTwo from "../../assets/jumbo-pump-2.png";
import ImageSeventeenThree from "../../assets/jumbo-pump-3.png";
import ImageEighteen from "../../assets/image 18.png";
import TruFlow from "../../assets/truflow.webp";

import { useNavigate } from "react-router-dom";





const TruflowPumpsComponent=()=>{
   const navigate = useNavigate();
	
	const imagesArrss=[
		
		{
			original: ProductsTwo,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ProductsThree,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ProductsFour,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
		{
			original: ProductsFive,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ImageEleven,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ImageTwelve,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
		{
			original: ImageThirteen,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ImageFourteen,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ImageFifteen,
			thumbnail: "https://picsum.photos/id/1019/250/150/",
		},
		{
			original:ImageSixteen,
			thumbnail: "https://picsum.photos/id/1019/250/150/",
		},
		{
			original: ImageSeventeen,
			thumbnail: "https://picsum.photos/id/1019/250/150/",
		},
		{
			original: ImageSeventeenTwo,
			thumbnail: "https://picsum.photos/id/1019/250/150/",
		},
		{
			original: ImageSeventeenThree,
			thumbnail: "https://picsum.photos/id/1019/250/150/",
		},
		{
			original:ImageEighteen,
			thumbnail: "https://picsum.photos/id/1019/250/150/",
		}
	]
	
	const renderThumbInner = () => {
		return <div className="thumb-custom-dot" />;
	  };
	  
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