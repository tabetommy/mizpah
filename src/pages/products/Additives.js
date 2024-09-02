import Header from "../../routeComponents/Header";
import Footer from "../../components/Footer";
import ParticlesBackground from "../../components/Particles/Particles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MudexLogo from "../../assets/Mudex.png";

import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

import ImageOne from "../../assets/image 1.png";
import ImageTwo from "../../assets/image 2.png";
import ImageThree from "../../assets/image 3.png";
import ImageFour from "../../assets/image 4.png";
import ImageFive from "../../assets/image 5.png";
import ImageSix from "../../assets/image 6.png";
import ImageSeven from "../../assets/image 7.png";
import ImageEight from "../../assets/image 8.png";
import ImageNine from "../../assets/image 9.png";
import ImageTen from "../../assets/image 10.png";




const MudexAdditivesComponent=()=>{

	
	const imagesArrss=[
		{
			original: ImageOne,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ImageTwo,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ImageThree,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
		{
			original: ImageFour,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},	
		{
			original: ImageFive,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ImageSix,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ImageSeven,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
		{
			original: ImageEight,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ImageNine,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ImageTen,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
	];
	
	const renderThumbInner = () => {
		return <div className="thumb-custom-dot" />;
	  };
	  
	return(
		<div>
			<Header/>
			<ParticlesBackground />
			<div style={{margin:'350px'}}>
			</div>
			<Container>
			  <Row>
				<Col>
					<ImageGallery 
					items={imagesArrss} 
					showThumbnails={true}
					renderThumbInner={renderThumbInner}
					thumbnailPosition="bottom"
					autoPlay={true} 
					/>
				</Col>
				<Col>
					<div className="img-background">
						<img src={MudexLogo} style={{ width: 200 }} />
					</div>
					<h3 className="text-start my-3" >Mudex Additives</h3>
					<p>
						We provide truflo pumping systems tailored to meet the most demanding industrial needs. They make use of cutting-edge technology that  ensures efficient and reliable fluid handling across various applications, from mining to water treatment.  
					</p>
				</Col>
			  </Row>
			</Container>
			<div style={{margin:'200px'}}>
			</div>
			<Footer />
		</div>
	)
}
export default  MudexAdditivesComponent;