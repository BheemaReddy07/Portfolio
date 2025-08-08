import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Github, GraduationCap, Globe } from 'lucide-react';

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = React.useState('');
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 blur-xl animate-pulse" />
  </div>
);

const IconButton = ({ Icon }) => (
  <div className="relative group hover:scale-110 transition-transform duration-300">
    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div className="relative p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    </div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  // Performance & network detection
  const hardwareConcurrency = navigator.hardwareConcurrency ?? 8;
  const deviceMemory = navigator.deviceMemory ?? 8;
  const connection = navigator.connection || {};

  const isLowPerf = hardwareConcurrency < 4 || deviceMemory <= 2;

  const isDownlinkSlow = typeof connection.downlink === 'number' && connection.downlink < 0.7;
  const isEffectiveTypeSlow =
    typeof connection.effectiveType === 'string' &&
    (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' || connection.effectiveType === '3g');

  const isSlowNet = isDownlinkSlow || isEffectiveTypeSlow;

  const useStaticWelcome = isLowPerf || isSlowNet;


 useEffect(() => {
    if (useStaticWelcome) {
      const timer = setTimeout(() => {
        onLoadingComplete?.();
      }, 3000); // 3 seconds for static welcome
      return () => clearTimeout(timer);
    }
  }, [useStaticWelcome, onLoadingComplete]);

  useEffect(() => {
    if (!useStaticWelcome) {
      const timer = setTimeout(() => {
        onLoadingComplete?.();
      }, 4000); // 4 seconds for animated welcome
      return () => clearTimeout(timer);
    }
  }, [useStaticWelcome, onLoadingComplete]);
  
  if (useStaticWelcome) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#030014] text-white px-6 text-center space-y-6">
     
        <div className="flex justify-center gap-6">
          {[Code, GraduationCap, Github].map((Icon, i) => (
            <div
              key={i}
              className="p-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-70 animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>
          ))}
        </div>

      
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent select-text">
          Bheema Reddy
        </h1>

          <p className="text-lg sm:text-xl max-w-md mx-auto text-indigo-300">
          Full Stack Web Developer | MERN Stack | Creative Problem Solver
        </p>
 
        <div className="text-indigo-400 font-mono text-lg select-text">
          <span className="animate-pulse">|</span>
        </div>
      </div>

    );
  }
 
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <BackgroundEffect />
      <div className="w-full max-w-4xl mx-auto">
        <motion.div className="flex justify-center gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-10">
          {[Code, GraduationCap, Github].map((Icon, index) => (
            <div key={index} data-aos="fade-down" data-aos-delay={index * 200}>
              <IconButton Icon={Icon} />
            </div>
          ))}
        </motion.div>
        <motion.div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold space-y-4">
            <div className="mb-2">
              <span
                data-aos="fade-right"
                data-aos-delay="200"
                className="inline-block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
              >
                Welcome
              </span>{' '}
              <span
                data-aos="fade-right"
                data-aos-delay="400"
                className="inline-block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
              >
                To
              </span>{' '}
              <span
                data-aos="fade-right"
                data-aos-delay="600"
                className="inline-block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
              >
                My
              </span>
            </div>
            <div>
              <span
                data-aos="fade-up"
                data-aos-delay="800"
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                Portfolio
              </span>{' '}
              <span
                data-aos="fade-up"
                data-aos-delay="1000"
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                Website
              </span>
            </div>
          </h1>
        </motion.div>
        <motion.div className="text-center" data-aos="fade-up" data-aos-delay="1200">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full relative group hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
            <div className="relative flex items-center gap-2 text-xl">
              <Globe className="w-5 h-5 text-indigo-600" />
              <span className="text-white">
                <TypewriterEffect text="Bheema Subramanyeswar Reddy" />
              </span>
            </div>
          </div>
          <p className="mt-4 text-white-50 text-sm md:text-base">
            Full Stack Web Developer | MERN Stack | Creative Problem Solver
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
