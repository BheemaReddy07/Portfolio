import React from "react";
import { abilities } from "../constants";
import GlowWrapper from "../components/GlowWrapper";

const FeatureSection = () => {
  return (
    <div className="w-full px-5 md:px-20">
      <h2 className="font-bold text-4xl text-center mb-10">My Abilities</h2>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {abilities.map(({ imgPath, title, desc }) => (
          <GlowWrapper
            key={title}
            className="border border-black-50 bg-black-100 rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 items-center justify-center rounded-full">
                <img src={imgPath} alt={title}   />
            </div>
            <h3 className="text-white text-2xl font-semibold">{title}</h3>
            <p className="text-white-50  text-lg ">{desc}</p>
          </GlowWrapper>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
