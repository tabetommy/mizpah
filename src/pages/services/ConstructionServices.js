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
				<Row className='my-5'>
					<Col>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
						</p>
					</Col>
					<Col  className="sec-image">
						
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	)
}

export default ConstructionServices;