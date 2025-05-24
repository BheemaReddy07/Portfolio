import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
 
import GlowWrapper from "./GlowWrapper";
const AnimatedCounter = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div id="counter" ref={ref} className="px-5 md:px-20 xl:mt-0 mt-32 mb-5 ">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
        {counterItems.map((item) => (
          <GlowWrapper key={item} className="p-10">
            <div className="text-white text-5xl font-bold mb-2">
              {inView && <CountUp end={item.value} suffix={item.suffix} />}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </GlowWrapper>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
