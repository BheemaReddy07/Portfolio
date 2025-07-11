import React from "react";
import { techStackIcons } from "../constants";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const TechStack = () => {

  useGSAP(() => {
    gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2.5, stagger: 0.2, ease: "power2.inOut", scrollTrigger: { trigger: "#techstack", start: "top 5%", } })
  })



  return (
    <div id="techstack" className="hidden md:flex  justify-center items-center px-5 md:px-10 md:mt-40 mt-20">
      <div className="w-full h-full md:px-10 px-5">
        <h2 className="text-center font-bold text-5xl">
          My preferred Tech Stack
        </h2>
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full  rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
