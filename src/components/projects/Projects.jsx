import './Projects.css'
import fanSvg from '../../../public/rotate.svg'
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhiteBlock from './whiteBlock/WhiteBlock';
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
	const windmillRef = useRef(null);
	const projectsRef = useRef(null)
	useEffect(() => {
		const windmill = windmillRef.current;
		const projects = projectsRef.current


		gsap.fromTo(windmill, {
			rotate: 0,
		},
			{
				rotate: 900,
				scrollTrigger: {
					trigger: projects,
					start: 'top 50%',
					end: 'bottom 50%',
					toggleActions: 'play pause none none',
					scrub: 1,
					pin: windmill,
					markers: true,
				}
			}
		)


	}, []);

	return (
		<div className='projectsBlock'>
			<div className="container">
				<div className="projects" ref={projectsRef}>
					<WhiteBlock />
					<WhiteBlock />
					<WhiteBlock />
					<WhiteBlock />
				</div>
				<div id="pin-windmill-wrap">
					<div id="pin-windmill" ref={windmillRef}>
						<div id="pin-windmill-svg">
							<img src={fanSvg} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}