import React from "react";
import { FaLinkedin, FaGithub, FaCalendar } from "react-icons/fa";
import flower from "../assets/img/logo/9.png";

const Footer = () => {
  return (
    <footer className="w-full mt-24  py-4 flex justify-between items-center px-4 sm:px-10 relative z-10">
      {/* Left side - Social icons */}

      {/* Center - Flower */}
      <div className=" flex items-center">
        <img
          src={flower}
          alt="Flower"
          className="w-[40px] sm:w-[50px] lg:w-[60px]"
        />
      </div>

      {/* Right side - Copyright */}
      <div className="flex items-center justify-end">
        <p className="font-sporting-regular text-[0.8rem] sm:text-[1rem] lg:text-[0.8rem] text-secondary font-bold">
          © M.B 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
