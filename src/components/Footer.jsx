import React from "react";
import { FaLinkedin, FaGithub, FaCalendar } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="w-full font-sporting-regular flex justify-between items-center px-4 sm:px-10 md:px-20 pt-0 pb-4 sm:pb-6 md:pb-10">
        {/* Left side - Social icons */}
        <div className="flex space-x-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/maurine-cornillon-bourgeois-04629813b"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaLinkedin className="text-[20px] sm:text-[15px] md:text-[20px] lg:text-[20px] xl:text-[30px] text-secondary cursor-pointer" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/maurinecornillon"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaGithub className="text-[20px] sm:text-[15px] md:text-[20px] lg:text-[10px] xl:text-[30px] cursor-pointer" />
          </a>
          <a
            href="https://calendly.com/maurinecornillon/discutons-de-ton-projet"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaCalendar className="text-[20px] sm:text-[15px] md:text-[20px] lg:text-[10px] xl:text-[10px] text-secondary cursor-pointer" />
          </a>
        </div>

        {/* Right side - Copyright text */}
        <div className="text-[10px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[10px] text-secondary font-bold">
          © M.B 2024
        </div>
      </footer>
    </>
  );
};

export default Footer;
