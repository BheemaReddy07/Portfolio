import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ShowcaseSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once:false
    });
  }, []);


  const projectsInfo = [
    {
      title: "DineNow ",
      description:
        "A food delivery app where users can browse food items, add to cart, place orders, and view order history. Includes admin features for managing products and orders.",
      photo: '/images/DineNow.png',
      techStack: 'React.js,Express.js,MongoDb,node.js,JWT,nodeMailer, Stripe',
      liveLink: 'https://dinenow.vercel.app/',
      gitLink: 'https://github.com/BheemaReddy07/Food_delivery'
    },
    {
      title: "Prescripto",
      description:
        "A doctor appointment booking platform that allows users to register/login, search for doctors, view availability, and book appointments. Admin panel included for managing users and doctors.And also Doctor Login",
      photo: '/images/Prescripto.png',
      techStack: 'MERN Stack, TailwindCSS, JWT, NodeMailer,Stripe',
      liveLink: 'https://prescriptofrontend-puce.vercel.app/',
      gitLink: 'https://github.com/BheemaReddy07/Doctor_Appointment'
    },
    {
      title: "Imagify",
      description:
        "An AI-powered image generation SaaS platform using the ClipDrop API. Users can input prompts to generate images,you can  Download the image, and manage their account can do the payment using the stripe payment.",
      photo: '/images/Imagify.png',
      techStack: 'MERN Stack, TailwindCSS, ClipDrop API, Stripe',
      liveLink: 'https://imagify-teal.vercel.app/',
      gitLink: 'https://github.com/BheemaReddy07/Imagify'
    },
    {
      title: "On-Go Learn",
      description:
        "An online learning management system (LMS) where users can browse and enroll in courses. It includes instructor dashboard, course creation, and session-based access control.and Instructor create courses and upload Videos",
      photo: '/images/On-Go Learn2.png',
      techStack: 'Mern Stack, TailwindCSS, JWT, NodeMailer',
      liveLink: 'https://ongolearn-seven.vercel.app/',
      gitLink: 'https://github.com/BheemaReddy07/Learning_management_system'
    },
    {
      title: "Writely",
      description:
        "A blogging platform where users can sign up, write, edit, and delete articles. OAuth, Access Based Control, Supports Markdown formatting and categorization.User can Share Blog link,it has Og image Feature",
      photo: '/images/writely.png',
      techStack: 'Next.js, TailwindCSS, Prisma,OAuth',
      liveLink: 'https://writely-blush.vercel.app/',
      gitLink: 'https://github.com/BheemaReddy07/Writely'
    },
    {
      title: "MyHomy",
      description:
        "A property rental and booking platform similar to Airbnb. Users can list properties, upload images, select location, and manage bookings. Includes secure authentication with OAuth,User can do reservations and add to Favuourites.",
      photo: '/images/myhomy.png',
      techStack: 'Next.js, TailwindCSS, MongoDB, Prisma, NextAuth.js',
      liveLink: 'https://myhomy.vercel.app/',
      gitLink: 'https://github.com/BheemaReddy07/FullStack-Airbnb'
    },
  ];


  return (
    <section id="work" className="w-full mt-20 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center mb-10">

      <div className="w-full">
        <div>
          <h1 data-aos="zoom-in" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-5 text-center">
            My Work Showcase
          </h1>
          <p  data-aos="fade-in"  className="hidden lg:block text-base md:text-lg lg:text-xl text-white-50 mb-10">
            Explore my projects that blend creativity and technology to solve
            real-world problems. Each project reflects my passion for innovation
            and my commitment to delivering user-friendly solutions.
          </p>
        </div>

        <div className="bg-black-100 border border-black-50 shadow-xl rounded-xl  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {
            projectsInfo.map((project, index) => {
              const delay = index * 200;
              return <div data-aos='fade-up' data-aos-delay={delay} key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  photo={project.photo}
                  techStack={project.techStack}
                  liveLink={project.liveLink}
                  gitLink={project.gitLink}
                />
              </div>
            })
          }


        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, photo, techStack, liveLink, gitLink }) => {
  const handleClick = () => {
    window.open(liveLink, "_blank", "noopener,noreferrer");
  };
  return (
    <div onClick={handleClick} className="bg-black-200 border border-black-50 p-2   rounded-xl m-5 hover:scale-105 transition-all duration-200">
      <img src={photo} className="rounded-lg p-1 h-60" />
      <div className="flex flex-col items-center px-2 p-2  mt-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-md font-medium text-gray-300/60">{description}</p>
      </div>
      <div className="mx-3">
        <p className="italic font-extralight text-gray-400">{techStack}</p>
      </div>
      <div className="mx-3 mt-5">
        <a href={gitLink} target="_blank" rel="noopener noreferrer"> <GithubOutlined className="size-6" /></a>
      </div>
    </div>
  )
}

export default ShowcaseSection;
