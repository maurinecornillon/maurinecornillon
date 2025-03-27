import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import ZoomText from "../components/ZoomText";

import Image1 from "../assets/img/sonaura/phonesonaura.png";
import Image2 from "../assets/img/lineup/LOGO LINE UP 2.png";
import Image3 from "../assets/img/tchintchin/tchintchin.png";
import Image4 from "../assets/img/anna/5.png";
import Image5 from "../assets/img/linkera/Accueil.png";
import Image7 from "../assets/img/otome/MockUpOtome-min.png";
import Image6 from "../assets/img/pimente/54b2476d659865ae8c5c851ad3728744.jpg";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("2024");

  const navigate = useNavigate();

  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
  const floatingImageRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  // const projectRoutes = [
  //   "/sonaura", // index 0
  //   "/lineup", // index 1
  //   "/tchintchin", // index 2
  //   "/anomusic", // index 3
  //   "/linkera", // index 4
  //   "/pimentee", // index 5
  //   "/otome", // index 6
  // ];

  const projectRoutes = [
      "/incoming", // index 0
      "/incoming", // index 1
      "/incoming", // index 2
      "/anomusic", // index 3
      "/linkera", // index 4
      "/incoming", // index 5
      "/otome", // index 6
    ];
  useEffect(() => {
    if (!hoveredImage || !floatingImageRef.current) return;

    // Set initial state
    gsap.set(floatingImageRef.current, {
      opacity: 0.9,
      y: 0,
      scale: 0.95,
    });

    // Animate in
    gsap.to(floatingImageRef.current, {
      opacity: 1,
      y: -10,
      rotate: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    // Floating effect
    const float = gsap.to(floatingImageRef.current, {
      y: "-=20",
      x: "-=30",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      float.kill();
    };
  }, [hoveredImage]);

  return (
    <>
      <main id="projets" className=" w-full h-full ">
        <div className="">
          <h2 className=" px-6 flex items-center justify-center  text-[21.8vw] tracking-wide uppercase leading-none font-bold font-NHAASDPRO">
            PROJETS
          </h2>
        </div>
        <section className="w-full items-center justify-between  px-6 flex  text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] font-ITC   ">
          <ZoomText>
            <span
              className={`hover:text-red cursor-pointer ${
                activeTab === "2024" ? "" : ""
              }`}
              onClick={() => setActiveTab("2024")}
            >
              [ 2024 ]
            </span>
          </ZoomText>
          <ZoomText>
            <span
              className={`hover:text-red cursor-pointer ${
                activeTab === "2024" ? "" : ""
              }`}
              onClick={() => setActiveTab("2024")}
            >
              [ 2025 ]
            </span>
          </ZoomText>
          <ZoomText>
            <span
              className={`hover:text-red cursor-pointer ${
                activeTab === "archives" ? "" : ""
              }`}
              onClick={() => setActiveTab("archives")}
            >
              [ archives ]
            </span>
          </ZoomText>
        </section>
      </main>

      {activeTab === "archives" ? (
        <section className="w-full flex justify-center items-center px-6 py-32">
          <p className="font-ITC text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] text-secondary  tracking-wide text-center">
            [ en construction ]
          </p>
        </section>
      ) : (
        <section className="relative z-10 w-full flex flex-col px-6 py-16 sm:py-16 md:py-16 lg:py-32">
          {[1, 2, 3, 4, 5, 6, 7].map((num, index) => (
            <ZoomText key={index}>
              <div
                onMouseEnter={() => setHoveredImage(images[index])}
                onMouseLeave={() => setHoveredImage(null)}
                className={`relative w-full py-4 sm:py-4 md:py-8 lg:py-8 flex justify-between items-center ${
                  index !== 0 ? "border-t border-black" : ""
                }`}
              >
                {/* Titre + numéro */}
                <div className="flex-1 flex items-end gap-8 ">
                  <span className="font-ITC text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] text-secondary block mb-2 ">
                    [ 0{num} ]
                  </span>
                  <h3 className="font-NHAASDS text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[2rem]  leading-tight tracking-tight">
                    {index === 0 && <>SONAURA.FM</>}
                    {index === 1 && <>LINE UP.</>}
                    {index === 2 && <>TCHINTCHIN</>}
                    {index === 3 && <>ANOMUSIC</>}
                    {index === 4 && <>LINKERA</>}
                    {index === 5 && <>PIMENTEE</>}
                    {index === 6 && <>OTOME GAME</>}
                  </h3>
                </div>

                <div className="hidden sm:block flex-1 text-center sm:text-center md:text-left lg:text-left xl:text-left">
                  <p className="font-ITC  text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] tracking-wide leading-none font-normal ">
                    {index === 0 && <>[ services ] [ playlist ]</>}
                    {index === 1 && <>[ services ] [ web app ]</>}
                    {index === 2 && <>[ services ] [ e-commerce ]</>}
                    {index === 3 && <>[ services ] [ réseau social ]</>}
                    {index === 4 && <>[ services ] [ web app ]</>}
                    {index === 5 && <>[ services ] [ e-commerce ]</>}
                    {index === 6 && <>[ services ] [ jeu vidéo ]</>}
                  </p>
                  <p className="font-NHAASDS text-secondary text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px]">
                    {index === 0 && <>branding + web design + web dev</>}
                    {index === 1 && <>branding + web design + web dev</>}
                    {index === 2 && <>branding + web design</>}
                    {index === 3 && <>branding + web design + web dev</>}
                    {index === 4 && <>web design + web dev</>}
                    {index === 5 && <>web design + web dev</>}
                    {index === 6 && <>web dev</>}
                  </p>
                </div>

                {/* Bouton */}
                <div className="flex-1 text-right">
                  <button
                    onClick={() => navigate(projectRoutes[index])}
                    className="font-ITC underline text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] tracking-wide leading-none font-normal hover:text-red"
                  >
                    [ voir + ]
                  </button>
                </div>
              </div>
            </ZoomText>
          ))}

          {/* Image flottante */}
          {hoveredImage && (
            <img
              ref={floatingImageRef}
              src={hoveredImage}
              alt="Floating preview"
              className="fixed left-3/4 top-2/3 -translate-x-1/2 -translate-y-1/2 w-[420px] z-50 pointer-events-none transition-all duration-300 ease-in-out"
            />
          )}
        </section>
      )}
    </>
  );
};

export default Projects;
