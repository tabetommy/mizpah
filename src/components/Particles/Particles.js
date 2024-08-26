import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";

import './particles.css';

const ParticlesBackground = () => {
	const particlesInit = useCallback(async engine => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(engine);
		await loadSlim(engine);
	}, []);
	
	const particlesLoaded = useCallback(async container => {
		await console.log(container);
	}, []);

  return <Particles
	  id="tsparticles"
	  init={particlesInit}
	  loaded={particlesLoaded}
	  options={{
		  background: {
			  color: {
				  value: "hsl(219, 30%, 18%)",
			  },
		  },
		  fpsLimit: 120,
		  interactivity: {
			  events: {
				  onClick: {
					  enable: true,
					  mode: "push",
				  },
				  onHover: {
					  enable: true,
					  mode: "repulse",
				  },
				  resize: true,
			  },
			  modes: {
				  push: {
					  quantity: 1,
				  },
				  repulse: {
					  distance: 500,
					  duration: 0.3,
				  },
			  },
		  },
		 particles: {
			 number: {
				 value: 250,
				 density: {
					 enable: true,
					 value_area: 2000
				 }
			 },
			 line_linked: {
				 enable: true,
				 opacity: 0.02
			 },
			 move: {
				 direction: "right",
				 speed: 0.05
			 },
			 size: {
				 value: 1.3
			 },
			 opacity: {
				 anim: {
					 enable: true,
					 speed: 1,
					 opacity_min: 0.05
				 }
			 }
		 },
		 interactivity: {
			 events: {
				 onclick: {
					 enable: true,
					 mode: "push"
				 }
			 },
			 modes: {
				 push: {
					 "particles_nb": 2
				 }
			 }
		 },
		  detectRetina: true,
	  }}
  />;
};

export default ParticlesBackground;