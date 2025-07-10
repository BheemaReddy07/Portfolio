 import React, { useState } from 'react'
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
import WelcomeScreen from './components/WelcomeScreen'
import Certifications from './sections/Certifications'

 const App = () => {

  const [showWelcome, setShowWelcome] = useState(true);

   return showWelcome ? (
    <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
    ) : (
     <>
     <Navbar />
     <Hero />
     <AboutMe />
     <AnimatedCounter />
     <ShowcaseSection />
     <Certifications />
     <FeatureSection />
     <TechnicalSkills />
     <TechStack />
      <Contact />
      <Footer />
     </>
   )
 }
 
 export default App