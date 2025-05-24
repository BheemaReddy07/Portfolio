 import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import './App.css'
import FeatureSection from './sections/FeatureSection'

 const App = () => {
   return (
     <>
     <Navbar />
     <Hero />
     <ShowcaseSection />
     <FeatureSection />
      
     </>
   )
 }
 
 export default App