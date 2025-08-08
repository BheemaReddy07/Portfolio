import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaDownload } from 'react-icons/fa';
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from "aos";


const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    })
  }, [])

  return (
    <section id="about" className="py-20 px-5 md:px-20 text-white bg-black mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <img
          data-aos="fade-right"
          src="/images/BSR2.jpg"
          alt="Tatiparthi Bheema Subramanyeswar Reddy"
          className="flex rounded-full w-full md:w-[420px] mx-auto 
  p-1 bg-gradient-to-r from-[#06B6D4] to-[#2563EB]
  shadow-[0_0_20px_5px_rgba(37,99,235,0.5)]
  transition-transform duration-500 ease-in-out hover:scale-105"

        />



        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB]">About Me</h2>
          <p className="text-white-50 text-lg leading-8 mb-6">
            Hi, I'm <span className="text-white font-semibold">Tatiparthi Bheema Subramanyeswar Reddy</span> — a dedicated Full Stack Web Developer and B.Tech CSE student with a passion for building scalable, responsive web apps using the MERN stack.
            <br /><br />
            I specialize in frontend and backend development, UI animations, authentication flows. My work spans real-world projects including <strong>DineNow</strong>, <strong>Prescripto</strong>, and <strong>LMS systems</strong>, <strong>On-Go Learn</strong> which are buiilt using the Mern stack .<strong>Writely</strong>, <strong>MyHomy</strong> are Built using Next.js. <strong>FastFoods</strong> which is a mobile app built with React Native.
            <br /><br />
            I’m enthusiastic about learning, problem-solving (50+ LeetCode challenges), and creating impactful digital experiences.
          </p>

          {/* Contact Info */}
          <div className="space-y-2 mb-6 text-white-50">
            <p className="flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB]">
              <FaEnvelope className="text-blue-400" /><a href='mailto: bheemareddy2910@gmail.com'> bheemareddy2910@gmail.com</a>
            </p>
            <p className="flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB]">
              <FaPhoneAlt className="text-blue-400" /> <a href='tel:+917799447698'> +91 7799447698</a>
            </p>
          </div>

          {/* Resume Button */}
          <a
            href="/Tatiparthi_Bheema_Subramanyeswar_Reddy_Resume.pdf"
            download
            className="inline-flex items-center gap-3  font-semibold px-6 py-3 rounded-lg  bg-gradient-to-r from-[#06B6D4] to-[#2563EB] text-black hover:from-[#2563EB] hover:to-[#06B6D4] hover:transition-colors duration-300"
          >
            <span className='text-white transition-colors duration-300 inline-flex items-center gap-2'>  <FaDownload />Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
