import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Footer.css';
import { IoLogoWhatsapp } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';
import { FaTelegramPlane } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
	const textRefLeft = useRef(null);
	const bgRefLeft = useRef(null);
	const textRefRight = useRef(null);
	const bgRefRight = useRef(null);
	const right = useRef(null);
	const inner = useRef(null);
	const [isRightVisible, setRightVisible] = useState(false);

	const rightSlide = () => {
		setRightVisible(true);
		const innerRef = inner.current;
		const rightRef = right.current;
		rightRef.style.right = '0';
		rightRef.style.transition = '.5s all';
		gsap.to(innerRef, { opacity: 1 });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
	};

	useEffect(() => {
		const textAnim = gsap.fromTo(
			textRefLeft.current,
			{ y: 100, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: textRefLeft.current,
					start: 'top 80%',
					end: 'top 60%',
					markers: true,
					scrub: 1,
				}
			}
		);

		const bgAnim = gsap.to(
			bgRefLeft.current,
			{
				width: '110%',
				scrollTrigger: {
					trigger: textRefLeft.current,
					start: 'top 80%',
					end: 'top 60%',
					markers: true,
					scrub: 1,
					onLeaveBack: () => {
						gsap.to(bgRefLeft.current, { width: 0, duration: 0.5 });
					},
				}
			}
		);

		return () => {
			textAnim.kill();
			bgAnim.kill();
		};
	}, []);

	return (
		<div className='contactMe'>
			<div className="container">
				<div className="leftSide">
					<h2 className="mainTitle">
						<span className='text' ref={textRefLeft}>Contact Me</span>
						<span className='textBg' ref={bgRefLeft}></span>
					</h2>
					<form onClick={rightSlide}>
						<div className="grid-2">
							<input type="text" placeholder='name' />
							<input type="email" placeholder='e-mail' />
						</div>
						<div className='subject'>
							<textarea className="area"></textarea>
							<span>subject</span>
						</div>
						<div className="button">send</div>
					</form>
				</div>
				<div className="rightSide absoluteRight right" ref={right} aria-hidden={!isRightVisible}>
					<div className="inner" ref={inner}>
						<h2 className="mainTitle">
							<span className='text' ref={textRefRight}>Contact Me</span>
							<span className='textBg' ref={bgRefRight}></span>
						</h2>
						<div className="socials">
							<div className="socialCard">
								<div className="icon"><FaTelegramPlane /></div>
								<a href="#">Telegram</a>
							</div>
							<div className="socialCard">
								<div className="icon"><IoLogoWhatsapp /></div>
								<a href="#">WhatsApp</a>
							</div>
							<div className="socialCard">
								<div className="icon"><SiGmail /></div>
								<a href="#">Gmail</a>
							</div>
						</div>
						<p className="joke">*forms are boring</p>
					</div>
				</div>
			</div>
		</div>
	);
}