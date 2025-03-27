import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

import ZoomText from "../components/ZoomText";

import Image1 from "../assets/img/logo/Card-and-Envelope-Black-2-1.webp";
import Image2 from "../assets/img/tchintchin/tchintchin.webp";
import Image3 from "../assets/img/sonaura/phonelover.webp";

const Services = () => {
  const images = [Image1, Image2, Image3];
  const floatingImageRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);

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
    <main id="services" className="w-full h-full">
      {/* Titre principal */}
      <div>
        <h2 className="px-6 flex items-center justify-center text-[18.3vw] tracking-wide uppercase leading-none font-bold font-NHAASPRO">
          SERVICES
        </h2>
      </div>

      {/* Tags */}
      <section className="w-full items-center justify-between px-6 flex text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] font-ITC">
        <ZoomText>
          <span className="hover:text-red cursor-pointer">[ branding ]</span>
        </ZoomText>
        <ZoomText>
          <span className="hover:text-red cursor-pointer">[ web design ]</span>
        </ZoomText>
        <ZoomText>
          <span className="hover:text-red cursor-pointer">[ web dev ]</span>
        </ZoomText>
      </section>

      {/* Sections horizontales */}
      <section className=" relative z-10 w-full flex flex-col px-6 pt-16 sm:pt-16 md:pt-16 lg:pt-32 ">
        {[1, 2, 3].map((num, index) => (
          <ZoomText>
            <div
              key={index}
              onMouseEnter={() => setHoveredImage(images[index])}
              onMouseLeave={() => setHoveredImage(null)}
              className={`relative w-full py-4 sm:py-4 md:py-8 lg:py-8 flex justify-between items-center ${
                index !== 0 ? "border-t-2 border-secondary" : ""
              }`}
            >
              {/* Titre + numéro */}

              <div className="flex-1 flex items-end gap-8 ">
                <span className="font-ITC text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] text-secondary block mb-2 ">
                  [ 0{num} ]
                </span>
                <h3 className="font-NHAASDS text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] leading-tight tracking-tight">
                  {index === 0 && (
                    <>
                      WEB DESIGN + <br /> WEB DEV
                    </>
                  )}
                  {index === 1 && (
                    <>
                      BRANDING + <br /> WEB DESIGN
                    </>
                  )}
                  {index === 2 && (
                    <>
                      BRANDING + <br /> WEB DESIGN + <br /> WEB DEV
                    </>
                  )}
                </h3>
              </div>

              {/* Bouton */}
              <div className="flex-1 text-right">
                <a
                  href="https://linktr.ee/maurinemona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ITC  text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] tracking-wide leading-none font-normal hover:text-red"
                >
                  [ prendre rendez-vous → ]
                </a>
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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px]  z-50  transition-all duration-300 ease-in-out pointer-events-none"
          />
        )}
      </section>

      <section className="w-full flex flex-col md:flex-row justify-between gap-16 md:gap-32 px-6 py-16 md:py-32">
        {[
          {
            id: 1,
            label: "branding",
            text: "Avant de concevoir, je prends le temps de comprendre. J’analyse les besoins, les objectifs et la cible pour poser les fondations du projet. Cette étape me permet de définir une direction claire et cohérente, en accord avec l’identité et les ambitions de ton projet.",
          },
          {
            id: 2,
            label: "web design",
            text: "J’imagine une expérience sur-mesure qui te ressemble. À travers des maquettes épurées et intuitives, je façonne une interface à la fois esthétique et fonctionnelle, pensée pour valoriser ton message et captiver tes visiteurs.",
          },
          {
            id: 3,
            label: "web dev",
            text: "Je donne vie au design avec un code propre et performant. Grâce à des technologies modernes, je transforme les maquettes en un site rapide, responsive et durable, optimisé pour une expérience fluide sur tous les supports.",
          },
        ].map(({ id, label, text }, index) => (
          <div key={index} className="w-full md:w-1/3">
            {" "}
            <ZoomText>
              <div className="mb-4 flex gap-2  items-center text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] font-ITC  text-secondary">
                <span>[ 0{id} ]</span>
                <span>[ {label} ]</span>
              </div>
            </ZoomText>
            <p className=" w-[100%] font-NHAASDS  text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] uppercase leading-relaxed tracking-tight text-secondary text-justify font-bold">
              {text}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Services;
