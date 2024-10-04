import './AnySize.css'
import { gsap } from "gsap";

import { useLayoutEffect, useRef } from 'react';


export default function AnySize() {
  const displayRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const displayElement = displayRef.current;
      const tabletSize = { width: '600px', height: '400px' }
      const phoneSize = { width: '320px', height: '480px' }
      const computerSize = { width: '800px', height: '600px' }


      const tl = gsap.timeline({ repeat: -1, yoyo: true })
      tl.to(displayElement, { duration: 0.8, ...tabletSize, ease: 'power1.inOut' }, '+=1')
        .to(displayElement, { duration: 0.8, ...phoneSize, ease: 'ower1.inOut' }, '+=1')
        .to(displayElement, { duration: 0.8, ...computerSize, ease: 'ower1.inOut' }, '+=1')
        .to(displayElement, { duration: 0.8, ...computerSize, ease: 'ower1.inOut' }, '+=0.05')
    }, displayRef)

    return () => ctx.revert()



  }, []);

  return (
    <section className='displaySection' >
      <div className="container">
        <h2>Any</h2>
        <div className="display" ref={displayRef}>
          <div className="ball"></div>
        </div>
        <h2>Size</h2>


      </div>
    </section>
  );
}


// useEffect(() => {
//   const displayElement = displayRef.current;
//   const tabletSize = { width: '600px', height: '400px' }
//   const phoneSize = { width: '320px', height: '480px' }
//   const computerSize = { width: '800px', height: '600px' }


//   const tl = new TimelineLite({ repeat: -1 })
//   tl.to(displayElement, 1, { ...tabletSize, ease: 'bounce.out' }, '+=1')
//     .to(displayElement, 1, { ...phoneSize, ease: 'bounce.out' }, '+=1')
//     .to(displayElement, 1, { ...computerSize, ease: 'bounce.out' }, '+=1')
//     .to(displayElement, 1, { ...phoneSize, ease: 'bounce.out' }, '+=1')
//     .to(displayElement, 1, { ...tabletSize, ease: 'bounce.out' }, '+=1')



// }, []);