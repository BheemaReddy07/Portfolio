 import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import './App.css'
import FeatureSection from './sections/FeatureSection'
import TechStack from './sections/TechStack' 
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import AboutMe from './components/AboutMe'
import TechnicalSkills from './components/TechnicalSkills'
import AnimatedCounter from './components/AnimatedCounter'

 const App = () => {
   return (
     <>
     <Navbar />
     <Hero />
     <AboutMe />
     <AnimatedCounter />
     <ShowcaseSection />
     <FeatureSection />
     <TechnicalSkills />
     <TechStack />
      <Contact />
      <Footer />
     </>
   )
 }
 
 export default App