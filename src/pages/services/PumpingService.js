import {useRef, useEffect} from 'react';
import Header from '../../routeComponents/Header';
import ParticlesBackground from "../../components/Particles/Particles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../../components/Footer";
import PumprepairsVid from "../../assets/services/pumps/pump-repairs.mp4";
import Imageone from "../../assets/services/pumps/pump-repairs-1.jpeg";
import Imagetwo from "../../assets/services/pumps/pump-repairs-2.jpeg";
import Imagethree from "../../assets/services/pumps/pump-repairs-3.jpeg";
import Imagefour from "../../assets/services/pumps/pump-repairs-4.jpeg";
import ImageGallery from "react-image-gallery";
import { useNavigate } from "react-router-dom";
 

const PumpingService=()=>{
	const vidRef=useRef(null);
	const navigate = useNavigate();
	useEffect(()=>{
		if(vidRef)vidRef.current.playbackRate = 0.5;
	},[]);
	
	
	const imagesArrss=[
		
		{
			original: Imageone,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: Imagetwo,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		}, {
			original: Imagethree,
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
		{
			original: Imagefour,
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
				<Row className='my-5 flex-column' >
					<Col style={{paddingRight:"50px"}}>
						<p>
							Looking for reliable pumping and pump repair services? We specialize in providing expert solutions for all your pumping needs, from installation to maintenance and repair. Whether it's for residential, commercial, or industrial applications, our experienced team ensures your pumps run efficiently and minimize downtime.
						</p>
						<p className='my-5'>
							We handle everything from routine inspections to emergency repairs, using top-quality parts and advanced techniques. Trust us to keep your systems flowing smoothly with prompt, professional service every time. Contact us today for fast and affordable pumping services!<br /><br />
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
			<div className='margin-to-footer'>
				fdfd
			</div>
			<Footer />
		</div>
	)
}

export default PumpingService;