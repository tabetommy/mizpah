import {useRef} from "react";
import Header from '../../routeComponents/Header'
import ScrollComponent from '../scrollcomponent/scroll';

 

const Painting=()=>{
	
	const scrollRef= useRef(null);
	return(
		<div>
			<Header />
			<div className="about-main-container main-painting">
			   <div className="home-contents">
				   <section className="heading-para">
					 <h1>About</h1>
					 <p>Who we are. Our Mission and Vision</p>
				   </section>
			   </div>
			   <ScrollComponent scrollreference={scrollRef}/>
			 </div>
		</div>
	)
}

export default Painting