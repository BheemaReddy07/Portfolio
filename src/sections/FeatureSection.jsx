import React from "react";
import { abilities } from "../constants";
import GlowWrapper from "../components/GlowWrapper";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from "aos";
const FeatureSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    })
  }, [])

  return (
    <div className="w-full px-5 md:px-20">
      <h2 className="font-bold text-4xl text-center mb-10">My Abilities</h2>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {abilities.map(({ imgPath, title, desc,index }) => {
          const delay = index * 200;
          return <div data-aos="zoom-out"  data-aos-delay={delay} key={title}><GlowWrapper
            
            className="border border-black-50 bg-black-100 rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white text-2xl font-semibold">{title}</h3>
            <p className="text-white-50  text-lg ">{desc}</p>
          </GlowWrapper></div>
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
