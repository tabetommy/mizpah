import Header from '../../routeComponents/Header';
import ParticlesBackground from "../../components/Particles/Particles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../../components/Footer";
 

const ConstructionServices=()=>{
	
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
				<Row className='my-5' >
					<Col style={{paddingRight:"50px"}}>
						<p>
							Mizpah is your trusted partner in comprehensive construction services. We specialize in delivering top-notch contruction works including plumbing, piping and tank installations, ensuring your projects are built to last with safety and efficiency in mind.
						</p>
						<p className='my-5'>
							At Mizpah, we are committed to delivering high-quality construction services that integrate seamlessly with your project’s needs. With our experienced team and dedication to excellence, you can trust us to bring your vision to life. Contact us today to learn more about how we can support your next construction project.
						</p>
					</Col>
					<Col  className="sec-image">
						
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