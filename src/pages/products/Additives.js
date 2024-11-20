import Header from "../../routeComponents/Header";
import Footer from "../../components/Footer";
import ParticlesBackground from "../../components/Particles/Particles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
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

	const navigate = useNavigate();
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
			<Container className="truflo-con">
			  <Row className='my-5 flex-column'>
				<Col>
					<div className="img-background">
						<img src={MudexLogo} style={{ width: 200 }} />
					</div>
					<h3 className="text-start my-3" >Mudex Additives</h3>
					<p className="mb-5">
						At MIZPAH, we specialize in providing high-quality Mudex additives designed to enhance the performance and efficiency of drilling fluids. Our products ensure optimal drilling operations, reducing costs and increasing productivity through superior fluid stabilization, viscosity control, and filtration management.
						<br/>
						Our range includes viscosifiers, filtration control agents, lubricants, and lost circulation materials, all engineered to improve performance and reduce downtime.  <br/><br/>
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
export default  MudexAdditivesComponent;