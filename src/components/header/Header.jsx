import Spline from '@splinetool/react-spline';
import Nav from '../nav/Nav';
import './Header.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { useStore } from '../../store';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Header() {

	const mainRef = useRef(null)

	const colors = ['#16C7E7', '#B548C6']

	useEffect(() => {
		const letters = mainRef.current.children
		gsap.fromTo(
			letters,
			{
				opacity: 0,
				scale: () => 1 + Math.random() * 0.5,
				color: (i) => colors[Math.floor(Math.random() * colors.length)]
			},
			{
				opacity: 1,
				duration: 0.7,
				color: '#ffffff',
				scale: 1,

				stagger: {
					amount: 0.6,
					from: 'random'
				},

				ease: 'power4.out'
			}
		)
	}, [])

	const splitText = (text) => {
		return text.split('').map((letter, index) => (
			<span key={index} className='letter'>
				{letter}
			</span>
		))
	}
	const { hoverBgActive, hoverBgInactive } = useStore()


	return (
		<header>
			<Nav />
			<div className="container">
				<div className="leftSide">
					<h1 className="title">
						<span className='main' ref={mainRef}>{splitText('Khondamir')}</span>
						<span className='dynamicText'>Developer</span>
					</h1>
					<p>Ready to change your perception of high-quality web-developing? Want to get ahead of your rivals? Willing to get the best deal in price/quality ratio? Then let's discuss it with me!</p>
					<a href="#" onMouseEnter={hoverBgActive} onMouseLeave={hoverBgInactive}>How I Work <span><FaArrowRightLong /></span></a>
				</div>
				<div className="rightSide">
					<div className="layer"></div>
					<Spline
						scene="https://prod.spline.design/R26b8V6dSuaD99j2/scene.splinecode"
					/>
				</div>
			</div>
		</header>
	);
}