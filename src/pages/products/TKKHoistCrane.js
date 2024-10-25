import Header from "../../routeComponents/Header";
import Footer from "../../components/Footer";
import ParticlesBackground from "../../components/Particles/Particles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TKKLogo from "../../assets/hoistandcrane.png";

import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

import ImageTwentyThree from "../../assets/image 23.png";
import ImageTwentyFour from "../../assets/image 24.png";
import ImageTwentyFive from "../../assets/image 25.png";
import ImageTwentySix from "../../assets/image 26.png";
import { useNavigate } from "react-router-dom";




const TKKGearsComponent=()=>{

	const navigate = useNavigate();
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
			<Container className="truflo-con">
			  <Row className='my-5 flex-column'>
				<Col>
					<div className="img-background">
						<img src={TKKLogo} style={{ width: 200 }} />
					</div>
					<h3 className="text-start my-3" >TKK Hoist & Crane</h3>
					<p className="mb-5">
						We specialize in supplying high-quality TKK lifting gears, renowned for their reliability, safety, durability and efficiency. Our extensive range includes electric chain hoists, wire rope hoists, manual chain hoists, and more, designed to meet the rigorous demands of various industries.  <br/><br/>
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
export default  TKKGearsComponent;