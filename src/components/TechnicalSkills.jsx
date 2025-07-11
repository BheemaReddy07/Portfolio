import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from "aos";
const skills = {
  Frontend: [
    'React.js',
    'Tailwind CSS',
    'Next.js',
    'React Native',
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'Redux Toolkit',
  ],
  Backend: ['Node.js', 'Express.js', 'JWT Auth', 'REST APIs'],
  Databases: ['MongoDB', 'MySQL', 'Appwrite'],
  Tools: ['Git & GitHub', 'Vercel', 'Render', 'Thunder Client', 'VS Code'],
  APIs: ['Stripe', 'Razorpay', 'Google Maps API', 'ClipDrop API', 'OAuth'],
  Languages: ['JavaScript', 'Java', 'C++', 'SQL'],
};

const TechnicalSkills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    })
  }, [])

  return (
    <section className="py-20 px-5 md:px-20 text-white bg-black" id="skills">
      <h2 data-aos="zoom-in" className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>

      <div className="space-y-12">
        {Object.entries(skills).map(([category, items]) => {

          return <div key={category}>
            <h3 data-aos="fade-up" className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, index) => {
                const delay = index * 200;
                return <span
                  data-aos="fade-right"
                  data-aos-delay={delay}
                  key={index}
                  className="bg-black-50 border border-white/20 text-white-50 px-4 py-1 rounded-full text-sm md:hover:bg-white md:hover:text-black transition-colors duration-300 skill-tag"
                >
                  {skill}
                </span>
              })}
            </div>
          </div>
        })}
      </div>
    </section>
  );
};

export default TechnicalSkills;
