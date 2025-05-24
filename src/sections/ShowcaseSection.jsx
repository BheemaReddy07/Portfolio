import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
    ];
    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/On-Go Learn2.png" alt="project1" />
            </div>
            <div className="text-content">
              <h2>
                Learn anytime, anywhere with On-Go Learn – your personalized
                online learning platform
              </h2>
              <p className="text-base text-white-50 md:text-lg lg:text-xl font-semibold">
                On-Go Learn empowers students and professionals with easy access
                to high-quality courses across various domains. Track your
                progress, engage with interactive content, and enhance your
                skills at your own pace – all in one user-friendly platform.
              </p>
            </div>
          </div>
          {/* RIGHT */}

          <div className="flex md:flex-row flex-col xl:flex-col gap-10 xl:w-[40%] overflow-hidden">
            <div className="project " ref={project2Ref}>
              <div className="xl:h-[37vh]  md:h-52 lg:h-72 h-64 relative rounded-xl  ">
                <img
                  src="/images/DineNow.png"
                  alt="project2"
                  className="w-full h-full  object-contain rounded-3xl"
                />
              </div>
              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                  DineNow:<span className="text-base md:text-lg lg:text-3xl text-white-50 font-semibold">
                  Your Ultimate Food Delivery App
                </span>
                </h2>
                
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="project" ref={project3Ref}>
                <div className="xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl   ">
                  <img
                    src="/images/Prescripto.png"
                    alt="project2"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">
                  Prescripto: <span className="text-base md:text-lg lg:text-xl text-white-50 font-semibold">  Your Smart Solution for Hassle-Free Doctor
                  Appointments</span>
                </h2>
              </div>

              <div className="project" ref={project4Ref}>
                <div className="xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl   ">
                  <img
                    src="/images/Imagify.png"
                    alt="project2"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">
                  Imagify: <span className="text-base md:text-lg lg:text-xl text-white-50 font-semibold">Your Ultimate Text to Image Generation Tool</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
