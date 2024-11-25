import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import accueil from "../../src/assets/img/estimeo/1.png";
import message from "../assets/img/estimeo/2.png";
import dataroom from "../assets/img/estimeo/3.png";
import mockup from "../assets/img/estimeo/MockupEstimeo.png";

const Estimeo = () => {
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
          onClick={() => handleNavigation("/linkera")}
          className="absolute left-0 flex items-center justify-center  p-4 w-[4rem] h-[4rem] cursor-pointer"
        >
          <span className="text-[1.5rem] font-bold">&#8592;</span>
        </div>

        {/* Right Arrow */}
        <div
          onClick={() => handleNavigation("/anomusic")}
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
              ESTIMEO
            </h1>
          </div>
          {/* "Mon Rôle" Section at the Bottom */}
          <div>
            <h2 className="text-[1rem] lg:text-[1.2rem] font-bold uppercase mb-4">
              Mon Rôle
            </h2>
            <p className="text-[0.8rem] lg:text-[1rem] leading-relaxed">
              En tant que développeuse Full-Stack, j'ai travaillé sur la V2 de
              leur application web, en mettant à jour les algorithmes de calcul
              financier et en gérant la maintenance ainsi que la correction des
              bugs.
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
          src={message}
          alt="Project Thumbnail"
          className="rounded-lg shadow-lg"
        />
        <img
          src={dataroom}
          alt="Project Thumbnail"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Separator */}
      <hr className="border-secondary mb-16" />

      {/* Bottom Section */}
      <div className="text-center">
        <p className=" relative z-10 text-center w-[90%] mx-auto text-[0.5rem] sm:text-[0.5rem] lg:text-[0.8rem] xl:text-[1.5rem] 2xl:text-[1rem] text-secondary leading-relaxed">
          Estimeo était une plateforme automatique de notation et de
          valorisation spécialement conçue pour les startups. Elle utilisait des
          algorithmes prédictifs pour évaluer à la fois les données financières
          et extra-financières, tout en fournissant des rapports détaillés de
          pré-analyse. En mettant en relation les startups avec des
          investisseurs, elle contribuait à établir la confiance et à soutenir
          leur croissance. <br />
          Par la suite, Estimeo a été rachetée et intégrée à Linkera.
        </p>
      </div>
    </div>
  );
};

export default Estimeo;
