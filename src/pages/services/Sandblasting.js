import Header from '../../routeComponents/Header';
import ParticlesBackground from "../../components/Particles/Particles";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SandblastingServices=()=>{
	const navigate = useNavigate();
	
	return(
		<div>
			<Header />
			<ParticlesBackground className='part-component'/>
			<div className="sand-blast-main">
			</div>
			<Container className='mt-5'>
				<Row className='my-5'>
					<Col className='service-heading'>
						<h1>Sand blasting and Painting services</h1>
					</Col>
					<Col>
						
					</Col>
				</Row>
				<Row className='my-5 flex-column' >
					<Col style={{paddingRight:"50px"}}>
					<p>
					 	Our expert team provides top-notch sand blasting and painting services to rejuvenate and protect your surfaces. Using advanced techniques and high-quality materials, we ensure thorough cleaning and preparation of surfaces, removing rust, old paint, and contaminants.
				 	</p>
				 	<p className='my-5'>
					 	Our painting services offer durable and aesthetically pleasing finishes, tailored to meet your specific needs. Whether it’s for industrial, commercial, or residential projects, we deliver exceptional results that enhance the longevity and appearance of your assets.<br /><br />
						 <span 
						 className='transparent-btn'
						 onClick={()=>navigate('/contact-us')}
						  >Contact us to find out more</span>
				 	</p>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	)
}

export default SandblastingServices;