import Header from "../../routeComponents/Header";
import Footer from "../../components/Footer";
import ParticlesBackground from "../../components/Particles/Particles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import BartailLogo from "../../assets/bartail-logo.png";
import ImageNineteen from "../../assets/image 19.png";
import ImageTwenty from "../../assets/image 20.png";
import ImageTwentyOne from "../../assets/image 21.png";
import ImageTwentyTwo from "../../assets/image 22.png";

import AustralianMadeLogo from "../../assets/austalianmade.png";






const BartailPumpsComponent=()=>{

	
	const imagesArrss=[
		
		{
			original: ImageNineteen,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ImageTwenty,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: ImageTwentyOne,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
		{
			original: ImageTwentyTwo,
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
						<img src={BartailLogo} style={{ width: 200 }} />
					</div>
					<h3 className="text-start my-3" >Bartail Pumps</h3>
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
export default  BartailPumpsComponent;