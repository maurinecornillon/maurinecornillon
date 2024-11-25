import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import accueil from "../assets/img/anna/5.png";
import menu from "../assets/img/anna/6.png";
import share from "../assets/img/anna/4.png";
import mockup from "../assets/img/anna/MockupAnnaMolly.png";

const Anna = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Force le défilement en haut lors du chargement du composant
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-[90%] mx-auto py-16 font-sporting-regular text-secondary min-h-screen">
      {/* Header Section */}
      <div className="relative flex items-center border border-secondary px-28 py-6 rounded-full justify-between w-full mb-16">
        {/* Left Arrow */}
        <div
          onClick={() => handleNavigation("/estimeo")}
          className="absolute left-0 flex items-center justify-center  p-4 w-[4rem] h-[4rem] cursor-pointer"
        >
          <span className="text-[1.5rem] font-bold">&#8592;</span>
        </div>

        {/* Right Arrow */}
        <div
          onClick={() => handleNavigation("/otome")}
          className="absolute right-0 flex items-center justify-center  p-4 w-[4rem] h-[4rem] cursor-pointer"
        >
          <span className="text-[1.5rem] font-bold">&#8594;</span>
        </div>
      </div>

      {/* Two-Column Section */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        {/* Left Column */}
        <div className="col-span-2">
          <img src={mockup} alt="Large Project View" className="rounded-lg" />
        </div>

        {/* Right Column */}
        <div className="col-span-1 border-l p-6 border-secondary flex flex-col justify-between">
          {/* Title and Subtitle at the Top */}
          <div>
            <h1 className="text-[3rem] lg:text-[4rem] font-bold leading-none">
              ANO <b></b>MUSIC
            </h1>
          </div>
          {/* "Mon Rôle" Section at the Bottom */}
          <div>
            <h2 className="text-[1rem] lg:text-[1.2rem] font-bold uppercase mb-4">
              Mon Rôle
            </h2>
            <p className="text-[0.8rem] lg:text-[1rem] leading-relaxed">
              Ce projet est un side project sur lequel je travaille durant mon
              temps libre, combinant mes deux passions : le code et la musique.
            </p>
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-3 gap-4 mb-16">
        <img
          src={accueil}
          alt="Project Thumbnail"
          className="rounded-lg shadow-lg"
        />
        <img
          src={menu}
          alt="Project Thumbnail"
          className="rounded-lg shadow-lg"
        />
        <img
          src={share}
          alt="Project Thumbnail"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Separator */}
      <hr className="border-secondary mb-16" />

      {/* Bottom Section */}
      <div className="text-center">
        <p className=" relative z-10 text-center w-[90%] mx-auto text-[0.5rem] sm:text-[0.5rem] lg:text-[0.8rem] xl:text-[1.5rem] 2xl:text-[1rem] text-secondary leading-relaxed">
          Anomusic est une plateforme de réseau social dédiée à la musique.
          Inspirée d’Instagram et de Bandcamp, elle permet aux artistes
          indépendants de partager leurs morceaux. Inscrivez-vous, suivez de
          nouveaux artistes et explorez votre fil d’actualité pour découvrir
          votre prochain son préféré. Grâce à des filtres par genre,
          laissez-vous surprendre par des sons que vous n’auriez jamais
          imaginés.
        </p>
      </div>
    </div>
  );
};

export default Anna;
