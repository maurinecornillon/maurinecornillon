import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import mockup from "../assets/img/game/MockUpOnePiece.png";

const Game = () => {
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
          onClick={() => handleNavigation("/otome")}
          className="absolute left-0 flex items-center justify-center  p-4 w-[4rem] h-[4rem] cursor-pointer"
        >
          <span className="text-[1.5rem] font-bold">&#8592;</span>
        </div>

        {/* Right Arrow */}
        <div
          onClick={() => handleNavigation("/linkera")}
          className="absolute right-0 flex items-center justify-center  p-4 w-[4rem] h-[4rem] cursor-pointer"
        >
          <span className="text-[1.5rem] font-bold">&#8594;</span>
        </div>
      </div>

      {/* Two-Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Left Column */}
        <div className="md:col-span-2">
          <img src={mockup} alt="Large Project View" className="rounded-lg" />
        </div>

        {/* Right Column */}
        <div className="border-t md:border-t-0 md:border-l p-6 border-secondary flex flex-col justify-between">
          {/* Title and Subtitle at the Top */}
          <div>
            <h1 className="text-[1rem] sm:text-[2rem] md:text-[2rem] lg:text-[4rem] font-bold leading-none">
              FIGHT <b></b> GAME
            </h1>
          </div>
          {/* "Mon Rôle" Section at the Bottom */}
          <div className="mt-4 sm:mt-8">
            <h2 className="text-[0.5rem] sm:text-[0.5rem] md:text-[0.8rem] lg:text-[1.2rem] font-bold uppercase mb-4">
              Mon Rôle
            </h2>
            <p className="text-[0.8rem] lg:text-[1rem] leading-relaxed">
              Il s'agit de mon tout premier projet : un jeu de combat rétro en
              1v1 inspiré de l'univers de One Piece. Ce fut une expérience
              passionnante à réaliser durant ma formation de développeuse, et je
              suis toujours ravie de le présenter. C'était un véritable plaisir
              de lui donner vie tout en apprenant à le concevoir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
