import { forwardRef } from 'react'
import './scroll.css';

const ScrollComponent=({scrollreference})=>{
	
	const handleScrollBehaviour = () => {
	scrollreference.current?.scrollIntoView({behavior: 'smooth'});
	};


	return(
		<>
			<div class="scroll-icon" onClick={handleScrollBehaviour} ></div>
			<i class="bi bi-arrow-down" id="arrow-icon" onClick={handleScrollBehaviour} ></i> 
		</>
	)
}

export default ScrollComponent