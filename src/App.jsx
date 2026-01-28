import React from 'react'
import { motion } from "framer-motion"

import Particles from './Components/BackGround/Particles'
import Navbar from './Components/NavBar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import About from './Components/AboutSection/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/ProjectsSection/Projects'
import Contact from './Components/ContactSection/Contact'
import Footer from './Components/Footer/Footer'

const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const App = () => {
  return (
    <div className="relative min-h-screen bg-black ">

      {/* 🔥 Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={2000}
          particleSpread={8}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={window.devicePixelRatio}
        />
      </div>

      {/* 🔥 Foreground Content */}
      <div className="relative z-10 min-h-screen">

        {/* Navbar MUST be here */}
        <Navbar />

        <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
          <HeroSection />
        </motion.div>

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <About />
        </motion.div>

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Skills />
        </motion.div>

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Projects />
        </motion.div>

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Contact />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Footer />
        </motion.div>

      </div>
    </div>
  )
}

export default App
