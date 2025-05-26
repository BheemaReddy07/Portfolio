import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin (ideally move to app level)
gsap.registerPlugin(ScrollTrigger);

const skills = {
  Frontend: [
    'React.js',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'Redux Toolkit',
  ],
  Backend: [
    'Node.js',
    'Express.js',
    'JWT Auth',
    'REST APIs',
  ],
  Databases: [
    'MongoDB',
    'MySQL',
  ],
  Tools: [
    'Git & GitHub',
    'Vercel',
    'Render',
    'Thunder Client',
    'VS Code',
  ],
  APIs: [
    'Stripe',
    'Razorpay',
    'Google Maps API',
    'ClipDrop API',
  ],
  Languages: [
    'JavaScript',
    'Java',
    'C++',
    'SQL',
  ],
};

// Memoized SkillTag component to prevent unnecessary re-renders
const SkillTag = React.memo(({ skill }) => (
  <span
    className="bg-black-50 border border-white/20 text-white-50 px-4 py-1 rounded-full text-sm md:hover:bg-white md:hover:text-black transition-colors duration-300 skill-tag"
  >
    {skill}
  </span>
));

// Memoized SkillCategory component to render only when in view
const SkillCategory = React.memo(({ category, items }) => {
  const categoryRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={categoryRef}>
      {isVisible && (
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {items.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

const TechnicalSkills = () => {
  const skillsRef = useRef(null);

  // GSAP animation for smooth section appearance
  useGSAP(() => {
    gsap.fromTo(
      skillsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top center',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animate skill tags with a staggered effect
    gsap.fromTo(
      '.skill-tag',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top center',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [skillsRef]);

  return (
    <section
      id="skills"
      className="py-20 px-5 md:px-20 text-white bg-black mb-8"
      ref={skillsRef}
      aria-labelledby="technical-skills-heading"
    >
      <h2
        id="technical-skills-heading"
        className="text-4xl font-bold mb-12 text-center"
      >
        Technical Skills
      </h2>

      <div className="space-y-10">
        {Object.entries(skills).map(([category, items]) => (
          <SkillCategory key={category} category={category} items={items} />
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;