import Header from "../../routeComponents/Header";
import Footer from "../../components/Footer";
import ParticlesBackground from "../../components/Particles/Particles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";


import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

import HS_one from "../../assets/productimages/hs_jaw_crusher.png";
import HS_two from "../../assets/productimages/hs_cone_crusher_HF.png";
import HS_three from "../../assets/productimages/hs_cone_crusher_EC.png";
import HS_four from "../../assets/productimages/hs_vsi_crusher.png";
import HS_five from "../../assets/productimages/hs_vibrating_screen.png";
import HS_six from "../../assets/productimages/hs_bw_classifier.png";
import HS_seven from "../../assets/productimages/hs_add_washer.png";
import HS_eight from "../../assets/productimages/hs_pan-feeder.png";
import HS_nine from "../../assets/productimages/hs_grizzly_feeder.png";
import HS_ten from "../../assets/productimages/hs_h_s-impactor.png";
// import HS_eleven from "../../assets/productimages/hs_clarifier.png";







const CrusherComponent=()=>{

	const navigate = useNavigate();
	const imagesArrss=[
		{
			original: HS_one,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: HS_two,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: HS_three,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
		{
			original: HS_four,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},	
		{
			original: HS_ten,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, 
		{
			original: HS_five,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, 
		{
			original: HS_six,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: HS_seven,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
		{
			original: HS_eight,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: HS_nine,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}
	];
	
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
						<img src="https://hailstonein.com/Backend/Upload/Image/Default/logo.png" style={{ width: 200,height:80 }} />
					</div>
					<h3 className="text-start my-3" > Crushing & Screening Equipments </h3>
					<p className="mb-5">
						MIZPAH specialises in providing safe, secure, low operating cost and highly efficient Hailstone crushing and screening equipments. 
						<br/>
						Our range includes Jaw and cone crushers, vertical and Horizontal Shaft Impactors, Vibrating Screens, Buscket Wheel Classifiers, add Wash and Clarifiers all engineered to improve performance. <br/><br/>
						<span 
						className='transparent-btn'
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
export default  CrusherComponent;