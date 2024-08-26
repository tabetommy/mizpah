import Header from "../../routeComponents/Header";
import Footer from "../../components/Footer";
import ParticlesBackground from "../../components/Particles/Particles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TKKLogo from "../../assets/hoistandcrane.png";

import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';


import AustralianMadeLogo from "../../assets/austalianmade.png";
import ImageTwentyThree from "../../assets/image 23.png";
import ImageTwentyFour from "../../assets/image 24.png";
import ImageTwentyFive from "../../assets/image 25.png";
import ImageTwentySix from "../../assets/image 26.png";






const TKKGearsComponent=()=>{

	
	const imagesArrss=[
		
		{
			original: ImageTwentyThree,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ImageTwentyFour,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ImageTwentyFive,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
		{
			original: ImageTwentySix,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}
	]
	
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
						<img src={TKKLogo} style={{ width: 200 }} />
					</div>
					<h3 className="text-start my-3" >TKK Hoist & Crane</h3>
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
export default  TKKGearsComponent;