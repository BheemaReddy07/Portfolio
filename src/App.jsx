import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './sections/Hero';
import ShowcaseSection from './sections/ShowcaseSection';
import Navbar from './components/Navbar';
import './App.css';
import FeatureSection from './sections/FeatureSection';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import AboutMe from './components/AboutMe';
import TechnicalSkills from './components/TechnicalSkills';
import AnimatedCounter from './components/AnimatedCounter';
import WelcomeScreen from './components/WelcomeScreen';
import Certifications from './sections/Certifications';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="relative">
      {/* Home screen always rendered */}
      <div className="relative z-0">
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
      </div>

      {/* Welcome overlay */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#030014]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
