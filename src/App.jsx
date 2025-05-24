 import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import './App.css'
import FeatureSection from './sections/FeatureSection'
import TechStack from './sections/TechStack'

 const App = () => {
   return (
     <>
     <Navbar />
     <Hero />
     <ShowcaseSection />
     <FeatureSection />
     <TechStack />
      
     </>
   )
 }
 
 export default App