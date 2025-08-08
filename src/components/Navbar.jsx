import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])
  return (
    <header className={`fixed w-full left-1/2 py-5 px-5 md:px-20 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out ${scrolled ? " top-0 bg-black" : "md:top-10 top-0 bg-transparent"}`}>
      <div className="mx-auto flex items-center justify-between">
        <a className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB] text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-105" href="#hero">
          Bheema Reddy
        </a>
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-8">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="text-blue-400 relative group">
                <a href={link}>
                  <span className="transition-colors duration-300 hover:text-blue-600">{name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="flex group">
          <div className="px-5 py-2 rounded-lg    bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-black group-hover:from-[#06B6D4] group-hover:to-[#2563EB] transition-colors duration-300">
            <span className="text-white transition-colors duration-300 font-bold">Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
