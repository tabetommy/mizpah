import Header from "../../routeComponents/Header";
import Footer from "../../components/Footer";
import ParticlesBackground from "../../components/Particles/Particles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Carousel
import Carousel from 'react-bootstrap/Carousel';

import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

import ProductsTwo from "../../assets/products_2.png";
import ProductTwoThumb from "../../assets/products_2_thumbnail.jpg";
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

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
	0: { items: 1 },
	568: { items: 2 },
	1024: { items: 3 },
};

const items = [
	<div className="item" data-value="1">1</div>,
	<div className="item" data-value="2">2</div>,
	<div className="item" data-value="3">3</div>,
	<div className="item" data-value="4">4</div>,
	<div className="item" data-value="5">5</div>,
];




const TruflowPumpsComponent=()=>{
	const responsive={
	  superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 3
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
	}
	const imagesArr=[
		ProductsTwo,
		ProductsThree,
		ProductsFour,
		ProductsFive,
		ImageEleven,
		ImageTwelve,
		ImageThirteen,
		ImageFourteen,
		ImageFifteen,
		ImageSixteen,
		ImageSeventeen,
		ImageSeventeenTwo,
		ImageSeventeenThree,
		ImageEighteen
	]
	
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
			<Container className='products-main-container'>
			  <Row className="align-items-center">
				<Col>
					<ImageGallery 
					items={imagesArrss} 
					showThumbnails={true}
					renderThumbInner={renderThumbInner}
					thumbnailPosition="bottom"
					/>
				</Col>
				<Col>
					<div className="img-background">
						<img src={TruFlow} style={{ width: 200 }} />
					</div>
					<h3 className="text-start my-3" >Truflo Pumping Systems</h3>
					<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
					</p>
				</Col>
			  </Row>
			</Container>
			<Footer />
		</div>
	)
}
export default  TruflowPumpsComponent;