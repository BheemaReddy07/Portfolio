import React from "react";

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById('counter');

        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: top,
            behavior: "smooth",
          });
        }
      }}
      className={`${className ?? ""} relative z-20 cursor-pointer`}>
      <div className="px-4 py-4 rounded-lg bg-gradient-to-r from-[#06B6D4] to-[#2563EB] flex justify-center items-center relative cursor-pointer overflow-hidden group transition-colors duration-300 group-hover:from-[#2563EB] group-hover:to-[#06B6D4]">
        <div className="absolute -right-10 origin-center top-1/2 -translate-y-1/2 
    w-[120%] h-[120%] group-hover:size-10 group-hover:right-10
    rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] transition-all duration-500" />

        <p className="uppercase md:text-lg text-white transition-all duration-500
    group-hover:text-white group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5">
          {text}
        </p>

        <div className="group-hover:bg-white size-10 rounded-full absolute right-10 top-1/2 
    -translate-y-1/2 flex justify-center items-center overflow-hidden">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>

    </a>
  );
};

export default Button;
