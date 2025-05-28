import React, { useRef } from 'react';
import { FaEnvelope, FaPhoneAlt, FaDownload } from 'react-icons/fa';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
 
const AboutMe = () => {
  const AboutmeRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(AboutmeRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: AboutmeRef.current,
          start: "top center",
        },
      }
    );
  }, []);
  return (
    <section id="about" className="py-20 px-5 md:px-20 text-white bg-black mb-8" ref={AboutmeRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Profile Image  rounded-tl-3xl rounded-br-3xl */}
        <img
          src="/images/BSR2.jpg"
          alt="Tatiparthi Bheema Subramanyeswar Reddy"
          className="hidden lg:block rounded-full shadow-2xl w-full md:w-[420px] mx-auto hover:transform hover:scale-105 transition-transform duration-300 ease-in-out  "
        />

        {/* Right: About Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-white-50 text-lg leading-8 mb-6">
            Hi, I'm <span className="text-white font-semibold">Tatiparthi Bheema Subramanyeswar Reddy</span> — a dedicated Full Stack Web Developer and B.Tech CSE student with a passion for building scalable, responsive web apps using the MERN stack.
            <br /><br />
            I specialize in frontend and backend development, UI animations, authentication flows, and integrations like Stripe and ClipDrop API. My work spans real-world projects including <strong>DineNow</strong>, <strong>Prescripto</strong>, and <strong>LMS systems</strong>.
            <br /><br />
            I’m enthusiastic about learning, problem-solving (50+ LeetCode challenges), and creating impactful digital experiences.
          </p>

          {/* Contact Info */}
          <div className="space-y-2 mb-6 text-white-50">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-white" /><a href='mailto: bheemareddy2910@gmail.com'> bheemareddy2910@gmail.com</a>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-white" /> +91 7799447698
            </p>
          </div>

          {/* Resume Button */}
          <a
            href="/Tatiparthi_Bheema_Subramanyeswar_Reddy_Resume.pdf"
            download
            className="inline-flex items-center gap-3 bg-white text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-black hover:text-white border border-white"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
