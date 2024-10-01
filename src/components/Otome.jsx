import React from "react";
import { useNavigate } from "react-router-dom";

import mockup1 from "../assets/img/Mockup4.png";
import mockup2 from "../assets/img/Mockup4.png";
import mockup3 from "../assets/img/Mockup4.png";

const Otome = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/projects");
  };

  const images = [mockup1, mockup2, mockup3];

  return (
    <>
      <div className="flex h-screen">
        {/* Colonne de gauche - Carrousel d'images */}
        <div className="w-1/2 overflow-y-auto scrollbar-none">
          <div className="flex flex-col h-full space-y-4 ">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Mockup ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            ))}
          </div>
        </div>

        {/* Colonne de droite - Titre et texte */}
        <div className="w-1/2 flex flex-col justify-center items-start px-12">
          {/* Flèche pour revenir en arrière */}
          <div className="mb-8">
            <button onClick={handleBack} className="text-lg hover:opacity-75">
              ← Back
            </button>
          </div>

          {/* Titre du projet */}
          <h1 className="text-[6vw] font-sporting-bold leading-tight mb-4">
            OTOME GAME
          </h1>

          {/* Paragraphe explicatif */}
          <p className="text-[14px] leading-relaxed font-sporting-regular mb-6">
            4YESODOT specializes in the planning, marketing, and construction of
            residential and boutique buildings. Known for its expertise in urban
            renewal and high-end real estate projects, the company also handles
            land improvement and property development across the country. Their
            comprehensive approach ensures quality and innovation in every
            project.
          </p>
        </div>
      </div>
    </>
  );
};

export default Otome;
