import './About.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import MainInfo from './mainInfo/MainInfo';
gsap.registerPlugin(ScrollTrigger);

export default function About() {
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
  }, []);

  return (
    <div className='about'>
      <div className="container">
        <h2 className="mainTitle">
          <span className='text'>My Works</span>
          <span className='bg'></span>
        </h2>
        <div className="grid">
          <MainInfo cl={'mainInfo'} img={'/Desktop.jpg'} work={'Wordpress dev'} title={"TARX"} />
          <MainInfo cl={'mainInfo'} img={'/Sushi.jpg'} work={'Vanilla code dev'} title={"SUSHI"} />
          <MainInfo cl={'mainInfo'} img={'/Yoga.jpg'} work={'Vanilla code dev'} title={"MEDITATION"} />
        </div>
      </div>

    </div>
  );
}