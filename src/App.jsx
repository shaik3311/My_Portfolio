import React from 'react'
import Particles from './Components/BackGround/Particles'
import Navbar from './Components/NavBar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import About from './Components/AboutSection/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/ProjectsSection/Projects'
import Contact from './Components/ContactSection/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="h-full w-screen absolute">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={window.devicePixelRatio}
        />
      </div>
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <HeroSection />
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
