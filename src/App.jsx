import React, { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import WelcomeScreen from "./components/WelcomeScreen";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy load heavy components
const AboutMe = lazy(() => import("./components/AboutMe"));
const AnimatedCounter = lazy(() => import("./components/AnimatedCounter"));
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const Certifications = lazy(() => import("./sections/Certifications"));
const FeatureSection = lazy(() => import("./sections/FeatureSection"));
const TechnicalSkills = lazy(() => import("./components/TechnicalSkills"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: false });
  }, []);

  return (
    <>
      {/* Welcome overlay always mounted instantly */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#030014]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main app content (hidden until welcome screen ends) */}
      <div
        className={`relative transition-opacity duration-500 ${
          showWelcome ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
          <AboutMe />
          <AnimatedCounter />
          <ShowcaseSection />
          <Certifications />
          <FeatureSection />
          <TechnicalSkills />
          <TechStack />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}
export default App;