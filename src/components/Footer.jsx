import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Ajout de l'icône GitHub

const Footer = () => {
  return (
    <footer className="w-full flex justify-between items-center px-10 pt-20 pb-10">
      {/* Left side - Social icons */}
      <div className="flex space-x-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/maurine-cornillon-bourgeois-04629813b"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaLinkedin className="text-3xl text-black cursor-pointer" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/ton-profil"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaGithub className="text-3xl text-black cursor-pointer" />
        </a>
      </div>

      {/* Right side - Copyright text */}
      <div className="text-lg font-bold">© M.B 2024</div>
    </footer>
  );
};

export default Footer;
