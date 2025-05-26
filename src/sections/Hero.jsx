import React, { useRef } from "react";

import { words } from "../constants";
import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
 


const Hero = () => {
  const heroRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(heroRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top center",
        },
      }
    );
  }, []);
  
  
  return (
    <section id="hero" className="relative overflow-hidden mb-5cd" ref={heroRef}>
      <div className="absolute  top-0 left-0 z-10 ">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="relative z-10 xl:mt-20 mt-32 flex flex-col md:flex-row  xl:items-center items-start justify-between md:h-dvh h-[80vh] md:px-20 px-5">
        {/* LEFT :Hero content */}
        <header className="flex flex-col justify-center flex-1 pr-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
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
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>That deliver results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi , I'm Tatiparthi Bheema Subramanyeswar Reddy ,A Full Stack
              developer{" "}
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
          </div>
        </header>
        {/* RIGHT :3D MODEL */}

        <div className="flex  justify-center flex-1 z-20">
          <img
            src="/images/BSR.png"
            alt="hero"
            className="md:w-[32rem] w-[24rem] md:h-[32rem] h-[24rem] rounded-tl-3xl rounded-br-3xl shadow-2xl border-4 border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-500 ease-in-out mt-6 ld:mt-0"
          />
        </div>
      </div>
     
    </section>
  );
};

export default Hero;
