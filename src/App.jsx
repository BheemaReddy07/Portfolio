import React, { useState, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';

import WelcomeScreen from './components/WelcomeScreen';
import './App.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css';

// Lazy load heavy components
const AboutMe = lazy(() => import('./components/AboutMe'));
const AnimatedCounter = lazy(() => import('./components/AnimatedCounter'));
const ShowcaseSection = lazy(() => import('./sections/ShowcaseSection'));
const Certifications = lazy(() => import('./sections/Certifications'));
const FeatureSection = lazy(() => import('./sections/FeatureSection'));
const TechnicalSkills = lazy(() => import('./components/TechnicalSkills'));
const TechStack = lazy(() => import('./sections/TechStack'));
TechStack.preload?.()
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  // Initialize AOS once
  
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: false });
  }, []);

  return (
    <div className="relative">
      {/* Home screen */}
      <div className="relative z-0">
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
          <AboutMe />
          <AnimatedCounter />
          <ShowcaseSection />
          <Certifications />
          <FeatureSection />
          <TechnicalSkills />
        </Suspense>
        <TechStack />
          <Contact />
          <Footer />
      </div>

      {/* Welcome overlay */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#030014]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Reduced duration
          >
            <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;