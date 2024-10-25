import Header from '../../routeComponents/Header';
import ParticlesBackground from "../../components/Particles/Particles";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const SandblastingServices=()=>{
	const navigate = useNavigate();
	
	return(
		<div>
			<Header />
			<ParticlesBackground className='part-component'/>
			<div className="sand-blast-main">
			    <div className='container'>
					<div className="home-contents blast-paint-cont">
				 	<h1> Sand blasting and Painting services</h1>
				 	<p className='page-para'>
					 	Our expert team provides top-notch sand blasting and painting services to rejuvenate and protect your surfaces. Using advanced techniques and high-quality materials, we ensure thorough cleaning and preparation of surfaces, removing rust, old paint, and contaminants.
				 	</p>
				 	<p className='page-para pb-4'>
					 	Our painting services offer durable and aesthetically pleasing finishes, tailored to meet your specific needs. Whether it’s for industrial, commercial, or residential projects, we deliver exceptional results that enhance the longevity and appearance of your assets.<br /><br />
						 <span 
						 className='page-contact-btn'
						 onClick={()=>navigate('/contact-us')}
						  >Contact us to find out more</span>
				 	</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default SandblastingServices;