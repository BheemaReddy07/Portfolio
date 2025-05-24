 import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import './App.css'
import FeatureSection from './sections/FeatureSection'
import TechStack from './sections/TechStack' 
import Contact from './sections/Contact'
import Footer from './sections/Footer'

 const App = () => {
   return (
     <>
     <Navbar />
     <Hero />
     <ShowcaseSection />
     <FeatureSection />
     <TechStack />
      <Contact />
      <Footer />
     </>
   )
 }
 
 export default App