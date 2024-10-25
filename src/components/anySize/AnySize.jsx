import './AnySize.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



import { useLayoutEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger)
export default function AnySize() {


  const displayRef = useRef(null);
  const textRef = useRef(null)
  const textRef2 = useRef(null)
  const bgRef = useRef(null)
  const [isSmallScreen, setSmallScreen] = useState()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const displayElement = displayRef.current;
      const screenWidth = window.innerWidth;
      const smallScreen = screenWidth < 600
      if (screenWidth < 600) {
        setSmallScreen(true)
      }
      else {
        setSmallScreen(false)
      }

      const tabletSize = smallScreen ? { width: '300px', height: '200px' } : { width: '600px', height: '400px' };
      const phoneSize = smallScreen ? { width: '160px', height: '240px' } : { width: '320px', height: '480px' };
      const computerSize = smallScreen ? { width: '400px', height: '300px' } : { width: '800px', height: '600px' };


      const tl = gsap.timeline({ repeat: -1, yoyo: true })
      tl.to(displayElement, { duration: 0.8, ...tabletSize, ease: 'power1.inOut' }, '+=1')
        .to(displayElement, { duration: 0.8, ...phoneSize, ease: 'ower1.inOut' }, '+=1')
        .to(displayElement, { duration: 0.8, ...computerSize, ease: 'ower1.inOut' }, '+=1')
        .to(displayElement, { duration: 0.8, ...computerSize, ease: 'ower1.inOut' }, '+=0.05');



    }, displayRef);
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
    gsap.fromTo(
      textRef2.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: textRef2.current,
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
        width: '105%',
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








    return () => ctx.revert()



  }, []);

  return (
    <section className='displaySection' >
      <h2 className="mainTitle">
        <span className='text' ref={textRef}>Create Websites</span>
        <span className='bg' ref={bgRef}></span>
      </h2>
      <h2 className='mainTitle2'>
        <span className='text2' ref={textRef2}>For</span>
      </h2>

      <div className={isSmallScreen ? 'container smallContainer' : 'container'}>
        <h2>Any</h2>
        <div className="display" ref={displayRef}>
          <div className="ball"></div>
        </div>
        <h2>Size</h2>


      </div>
    </section>
  );
}

