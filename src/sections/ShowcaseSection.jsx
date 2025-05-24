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
          duration: 2,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 ,y: 50},
      { opacity: 1,y:0, duration: 2 }
    );
  }, []);

  return (
    <section ref={sectionRef} id="work" className="w-full mt-20 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center">

      <div className="w-full">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-5 text-center">
            My Work Showcase
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white-50 mb-10">
            Explore my projects that blend creativity and technology to solve
            real-world problems. Each project reflects my passion for innovation
            and my commitment to delivering user-friendly solutions.
          </p>
        </div>
         
        <div className="flex xl:flex-row flex-col gap-10 justify-between">
          {/* LEFT */}
          <div className="h-full flex flex-col justify-between xl:w-[60%]" ref={project1Ref}>
            <div className="xl:h-[75vh] md:h-[50vh] h-96 relative">
              <img src="/images/On-Go Learn2.png" alt="project1" className="w-full h-full object-cover rounded-xl absolute inset-0" />
            </div>
            <div className="text-content">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Learn anytime, anywhere with On-Go Learn – your personalized
                online learning platform
              </h2>
              <p className="text-base text-white-50 md:text-lg lg:text-lg font-medium">
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
