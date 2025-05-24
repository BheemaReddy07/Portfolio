import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const AnimatedCounter = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div id="counter" ref={ref} className="px-5 md:px-20 xl:mt-0 mt-32 mb-5 ">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
        {counterItems.map((item) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div
              key={counterItems.label}
              className="counter-number text-white text-5xl font-bold mb-2 "
            >
              {inView && ( <CountUp suffix={item.suffix}  end={item.value}  />)}
             

            </div>
            <div className="text-white-50 text-lg ">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
