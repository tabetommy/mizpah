import Header from "../../routeComponents/Header";
import Footer from "../../components/Footer";
import ParticlesBackground from "../../components/Particles/Particles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import BartailLogo from "../../assets/bartail-logo.png";
import ImageNineteen from "../../assets/image 19.png";
import ImageTwenty from "../../assets/image 20.png";
import ImageTwentyOne from "../../assets/image 21.png";
import ImageTwentyTwo from "../../assets/image 22.png";

import AustralianMadeLogo from "../../assets/austalianmade.png";






const BartailPumpsComponent=()=>{
   const navigate = useNavigate();
	
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
			<Container className="truflo-con">
			  <Row className='my-5 flex-column'>
				<Col>
					<div className="img-background">
						<img src={BartailLogo} style={{ width: 200 }} />
					</div>
					<h3 className="text-start my-3" >Bartail Pumps</h3>
					<p>
						MIZPAH is your trusted partner for high-quality bartail pumps. We specialize in providing high-quality bartail pumps designed to meet the demands of industries and businesses that require efficient fluid handling solutions.
					</p>
					<p className="mb-5">
						Our Bartail Pumps are efficient, durable, and cost-effective pumping solutions designed to meet your unique needs. Whether you're in construction, agriculture, or industrial sectors, our Pumps performs reliably everytime. <br/><br/>
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
export default  BartailPumpsComponent;