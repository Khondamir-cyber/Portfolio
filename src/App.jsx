import { useEffect, useRef } from 'react'
import './App.css'
import Header from './components/header/Header'
import { useStore } from './store'
import AnySize from './components/anySize/AnySize'
import About from './components/about/About'

// import { Merque } from './components/merque/Merque'

import Info from './components/info/Info'
import ParallaxText from './components/merque/Merque'
import Footer from './components/footer/Footer'



function App() {
  const { getBg, variable } = useStore()

  const bg = useRef(null)

  useEffect(() => {
    if (bg.current) {
      getBg(bg.current)
    }
  }, [getBg])



  return (
    <>
      <Header />
      <div className={variable.active ? 'bg active' : 'bg'} ref={bg}>
        <div className="fluid"></div>
      </div>
      <ParallaxText baseVelocity={-1}><span className='dot'>•</span> HTML <span className='dot'>•</span> CSS <span className='dot'>•</span> FIGMA <span className='dot'>•</span> ELEMENTOR <span className='dot'>•</span> PHOTOSHOP <span className='dot'>•</span> DIVI <span className='dot'>•</span> REACT</ParallaxText>
      <ParallaxText baseVelocity={1}><span className='dot'>•</span> HTML <span className='dot'>•</span> CSS <span className='dot'>•</span> FIGMA <span className='dot'>•</span> ELEMENTOR <span className='dot'>•</span> PHOTOSHOP <span className='dot'>•</span> DIVI <span className='dot'>•</span> REACT</ParallaxText>
      <Info />
      <About />

      <AnySize />
      <Footer />
    </>
  )
}

export default App