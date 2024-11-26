import Header from '../../routeComponents/Header';
import ParticlesBackground from "../../components/Particles/Particles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../../components/Footer";
import ImageGallery from "react-image-gallery";
import Imgone from "../../assets/services/construction/const-1.jpeg";
import Imgtwo from "../../assets/services/construction/const-2.jpeg";
import Imgthree from "../../assets/services/construction/const-3.jpeg";
import Imgfour from "../../assets/services/construction/const-4.jpeg";
import Imgfive from "../../assets/services/construction/const-5.jpeg";
import Imgsix from "../../assets/services/construction/const-6.jpeg";
import Imgseven from "../../assets/services/construction/const-7.jpeg";
import { useNavigate } from "react-router-dom";

const ConstructionServices=()=>{
	const navigate = useNavigate();
	
	const imagesArrss=[
		
		{
			original: Imgone,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: Imgtwo,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: Imgthree,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
		{
			original: Imgfour,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
		{
			original: Imgfive,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
		{
			original: Imgsix,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
		{
			original: Imgseven,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
		
	];
	
	const renderThumbInner = () => {
		return <div className="thumb-custom-dot" />;
	  };
	
	
	return(
		<div>
			<Header />
			<ParticlesBackground className='part-component'/>
			<div className="about-main-container main-con-service">
			</div>
			<Container className='mt-5'>
				<Row className='my-5'>
					<Col className='service-heading'>
						<h1>Construction services</h1>
					</Col>
					<Col>
						
					</Col>
				</Row>
				<Row className='my-5 flex-column'>
					<Col style={{paddingRight:"50px"}}>
						<p>
							Mizpah is your trusted partner in comprehensive construction services. We specialize in delivering top-notch contruction works including plumbing, piping and tank installations, ensuring your projects are built to last with safety and efficiency in mind.
						</p>
						<p className='my-5'>
							At Mizpah, we are committed to delivering high-quality construction services that integrate seamlessly with your project’s needs. With our experienced team and dedication to excellence, you can trust us to bring your vision to life. Contact us today to learn more about how we can support your next construction project.<br /><br />
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
			<div className='margin-to-footer'>
				fdfd
			</div>
			<Footer />
		</div>
	)
}

export default ConstructionServices;