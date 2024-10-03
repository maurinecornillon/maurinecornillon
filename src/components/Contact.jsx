import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="flex flex-column justify-start items-center bg-[#212121] text-white h-[40vw] rounded-tl-[100px] rounded-tr-[100px] px-20 sm:px-20 md:px-20">
        <div className="text-left">
          <h2 className=" text-[20px] sm:text-[40px] lg:text-[90px]  font-sporting-regular">
            • LET'S <br />
            COLLABORATE
          </h2>
          {/* Ajout du lien mailto */}
          <a
            href="mailto:maurinecornillon@gmail.com"
            className="text-[20px] sm:text-[22px] lg:text-[44px]  mt-4 tracking-wide font-canela-light-italic "
          >
            maurinecornillon@gmail.com
          </a>
        </div>
      </div>
      <footer className="w-full bg-[#212121] flex justify-between items-center px-20 pt-0 pb-10">
        {/* Left side - Social icons */}
        <div className="flex space-x-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/maurine-cornillon-bourgeois-04629813b"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaLinkedin className=" text-[20px] sm:text-[10px] md:text-[10px] lg:text-[20px] xl:text-[30px]  text-white cursor-pointer" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ton-profil"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaGithub className="text-white text-[20px] sm:text-[10px] md:text-[10px] lg:text-[20px] xl:text-[30px]  cursor-pointer" />
          </a>
        </div>

        {/* Right side - Copyright text */}
        <div className=" text-[10px] sm:text-[10px] md:text-[10px] lg:text-[20px] xl:text-[20px] text-white font-bold">
          © M.B 2024
        </div>
      </footer>
    </>
  );
};

export default Contact;
