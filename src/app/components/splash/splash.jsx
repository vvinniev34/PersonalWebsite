import React from "react";
import Particles from "./particles";
import Glitch, { LearnMoreScroll } from "./glitch";
import Image from 'next/image';

const scrollToElement = (id) => {
	const element = document.getElementById(id);
	const offsetTop = element ? element.offsetTop : 0;

	window.scrollTo({
		top: offsetTop - 60,
		behavior: 'smooth',
	});
};

const Splash = () => {
	return (
		<section 
			className="flex flex-col items-center justify-center h-screen overflow-hidden w-[100%]" 
			// style={{backgroundImage: 'url("./blue_sky_lightened.jpg")', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundAttachment: "fixed"}}
			// style={{backgroundImage: 'url("./sky_ocean_surface_brightened.webp")', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundAttachment: "fixed"}}
			id='/'
		>	
			<div style={{ position: "fixed", width:"100%", height:"100vh", zIndex:-1 }}>
				<Image 
					src="/sky_ocean_surface_brightened.png" 
					alt="bright sky over ocean surface" 
					width="100vh" 
					height="100vh" 
					layout="fill" 
					objectFit="cover" 
					objectPosition="center"
				/>
			</div>
			<div className="hidden w-screen h-px md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className={"absolute inset-0 z-0 animate-fade-in"}
				quantity={120}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-black text-edge-outline animate-title font-display font-bold sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text">
				Vincent Liu
			</h1>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

			<div 
				className="text-center animate-fade-in flex flex-col items-center"
				style={{marginTop:"2rem", marginBottom:"2rem"}}
			>
				<Glitch></Glitch>
			</div>

			<LearnMoreScroll/>
		</section>
	);
};

export default Splash;