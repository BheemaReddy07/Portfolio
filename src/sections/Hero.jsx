import React, { useEffect } from "react";
import { words } from "../constants";
import Button from "../components/Button";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactExperience from "../components/Models/Contact/ContactExperience";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <section
      data-aos="zoom-in"
      id="hero"
      className="relative overflow-hidden mb-5"
    >
      {/* Background image */}
      <div className="absolute top-0 left-0 z-0">
        <img src="/images/bg.png" alt="background" />
      </div>

      {/* Main container */}
      <div className="relative z-10 xl:mt-20 mt-32 flex flex-col md:flex-row xl:items-center items-start justify-between md:h-dvh h-[80vh] md:px-20 px-5">
        {/* LEFT: Hero content */}
        <header className="flex flex-col justify-center flex-1 pr-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB]">
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-blue-300"
                        />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB]">
                          {word.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB]">
                into Real Projects
              </h1>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB]">
                That deliver results
              </h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10">
              Hi, I'm Tatiparthi Bheema Subramanyeswar Reddy, a Full Stack
              developer
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
          </div>
        </header>

        {/* RIGHT: 3D Computer */}
        <div className="flex justify-center flex-1 z-20 w-full h-[350px] md:h-[500px] 
  rounded-3xl p-[3px] bg-gradient-to-r from-[#06B6D4] via-[#2563EB] to-[#06B6D4] 
  shadow-[0_0_25px_rgba(37,99,235,0.6)]">

          {/* Inner container to keep background dark inside */}
          <div className="w-full h-full rounded-3xl bg-[#0f172a] overflow-hidden">
            <ContactExperience />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
