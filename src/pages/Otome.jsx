import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import ZoomText from "../components/ZoomText";


import mockup from "../assets/img/otome/MockUpOtome-min.png";

const Otome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Force le défilement en haut lors du chargement du composant
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="px-6 relative z-10">
        <div className="w-[100%] mx-auto py-16 font-sporting-regular text-secondary min-h-screen">
          {/* Header Section */}
          <ZoomText delay={0.2}>
            <div className="relative flex items-center border border-secondary  py-6  justify-between w-full mb-16">
              {/* Left Arrow */}
              <div
                onClick={() => handleNavigation("/anomusic")}
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
          </ZoomText>
          {/* Two-Column Section */}
          <ZoomText delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Left Column */}
              <div className="md:col-span-2">
                <LazyLoadImage
                  effect="blur"
                  src={mockup}
                  alt="Large Project View"
                  className="rounded-lg w-full"
                ></LazyLoadImage>{" "}
              </div>

              {/* Right Column */}
              <div className="border-t md:border-t-0 md:border-l p-6 border-secondary flex flex-col justify-between">
                {/* Title and Subtitle at the Top */}
                <div>
                  <h1 className="font-NHAASDS text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] leading-tight tracking-tight">
                    OTOME <b></b>GAME
                  </h1>
                </div>
                {/* "Mon Rôle" Section at the Bottom */}
                <div className="mt-4 sm:mt-8">
                  <h2 className="font-NHAASDS uppercase text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] leading-tight tracking-tightmb-4">
                    Mon Rôle
                  </h2>
                  <p className="font-NHAASDS  text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] uppercase leading-relaxed tracking-tight text-secondary ">
                    Beachday est un otome game actuellement en développement par
                    notre studio de jeux indépendant. En tant que lead dev sur
                    ce projet, je suis ravie d’élargir mon expertise à de
                    nouveaux langages de programmation, comme Python, tout en
                    contribuant aux aspects créatifs et techniques du jeu.
                  </p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <hr className="border-secondary mb-16" />
          </ZoomText>
          {/* Bottom Section */}
          <ZoomText delay={0.2}>
            <div className="text-center">
              <p className=" relative z-10 text-center w-[90%] mx-auto font-NHAASDS  text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] uppercase leading-relaxed tracking-tight text-secondary ">
                Beachday est un otome game actuellement en développement par
                notre studio de jeux indépendant.
              </p>
            </div>
            <hr className="border-secondary mt-16" />
          </ZoomText>
        </div>
      </div>
    </>
  );
};

export default Otome;
