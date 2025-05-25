import React from "react";

const skills = {
  Frontend: [
    "React.js",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "Redux Toolkit",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "JWT Auth",
    "REST APIs",
  ],
  Databases: [
    "MongoDB",
    "MySQL",
  ],
  Tools: [
    "Git & GitHub",
    "Vercel",
    "Render",
    "Thunder Client",
    "VS Code",
  ],
  APIs: [
    "Stripe",
    "Razorpay",
    "Google Maps API",
    "ClipDrop API",
  ],
  Languages: [
    "JavaScript",
    "Java",
    "C++",
    "SQL",
  ]
};

const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-20 px-5 md:px-20 text-white bg-black">
      <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>

      <div className="space-y-10">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold mb-4 text-white">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, index) => (
                <span
                  key={index}
                  className="bg-black-50 border border-white/20 text-white-50 px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
