import './About.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import MainInfo from './mainInfo/MainInfo';
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef(null)
  const bgRef = useRef(null)
  useEffect(() => {
    const infos = gsap.utils.toArray(".mainInfo");


    infos.forEach(block => {
      gsap.fromTo(
        block,
        { scale: 0.5, opacity: 0.4 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: block,
            start: 'top 60%',
            end: 'bottom 60%',
            markers: true,
            scrub: 1,
          }
        }
      );
    });
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 60%',
          markers: true,
          scrub: 1,
        }
      }
    );
    gsap.to(
      bgRef.current,
      {
        width: '110%',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 60%',
          markers: true,
          scrub: 1,
          onLeaveBack: () => {
            gsap.to(bgRef.current, { width: 0, duration: 0.5 });
          },
        }
      }
    );
  }, []);

  return (
    <div className='about'>
      <div className="container">
        <h2 className="mainTitle">
          <span className='text' ref={textRef}>My Works</span>
          <span className='bg' ref={bgRef}></span>
        </h2>
        <div className="grid">
          <MainInfo cl={'mainInfo'} img={'https://Khondamir-cyber.github.io/Portfolio/Desktop.jpg'} work={'Wordpress dev'} title={"TARX"} />
          <MainInfo cl={'mainInfo'} img={'https://Khondamir-cyber.github.io/Portfolio/Sushi.jpg'} work={'Vanilla code dev'} title={"SUSHI"} />
          <MainInfo cl={'mainInfo'} img={'https://Khondamir-cyber.github.io/Portfolio/Yoga.jpg'} work={'Vanilla code dev'} title={"MEDITATION"} />
        </div>
      </div>

    </div>
  );
}