import {useRef, useEffect} from 'react';
import Header from '../../routeComponents/Header';
import ParticlesBackground from "../../components/Particles/Particles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../../components/Footer";
import PumprepairsVid from "../../assets/services/pump-repairs.mp4";
 

const PumpingService=()=>{
	const vidRef=useRef(null);
	
	useEffect(()=>{
		if(vidRef)vidRef.current.playbackRate = 0.5;
	},[]);
	
	return(
		<div>
			<Header />
			<ParticlesBackground className='part-component'/>
			<div className='video-con'>
				<video autoPlay muted loop ref={vidRef}>
				  <source src={PumprepairsVid} type="video/mp4" />
				  Your browser does not support the video tag.
				</video>
			</div>
			<Container className='mt-5'>
				<Row className='my-5'>
					<Col className='service-heading'>
						<h1>Pumping services</h1>
					</Col>
					<Col>
						
					</Col>
				</Row>
				<Row className='my-5' >
					<Col style={{paddingRight:"50px"}}>
						<p>
							Looking for reliable pumping and pump repair services? We specialize in providing expert solutions for all your pumping needs, from installation to maintenance and repair. Whether it's for residential, commercial, or industrial applications, our experienced team ensures your pumps run efficiently and minimize downtime.
						</p>
						<p className='my-5'>
							We handle everything from routine inspections to emergency repairs, using top-quality parts and advanced techniques. Trust us to keep your systems flowing smoothly with prompt, professional service every time. Contact us today for fast and affordable pumping services!
						</p>
					</Col>
					<Col  className="services-pump-one">
						
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

export default PumpingService;