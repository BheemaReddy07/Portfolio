 import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import './App.css'
import FeatureSection from './sections/FeatureSection'
import TechStack from './sections/TechStack' 
import Contact from './sections/Contact'

 const App = () => {
   return (
     <>
     <Navbar />
     <Hero />
     <ShowcaseSection />
     <FeatureSection />
     <TechStack />
      <Contact />
     </>
   )
 }
 
 export default App