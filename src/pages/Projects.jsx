import React, { useRef, useEffect } from "react";
import ZoomText from "../components/ZoomText";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

import clouds from "../assets/img/logo/cloud.png";
import clouds2 from "../assets/img/logo/15.png";

gsap.registerPlugin(Draggable, ScrollTrigger);

const cards = [
  {
    text2: "FRONT-END",
    text3: "BACK-END",
    text1: "PROJECT MANAGEMENT",
    text7: "UI/UX",
    text4: "REACTJS",
    text5: "NODEJS",
    text6: "MONGODB",
    title: "LINKERA",
    id: 1,
  },
  {
    text1: "FRONT-END",
    text2: "BACK-END",
    text3: "JS VANILLA",
    text4: "NODEJS",
    text5: "MONGODB",
    text6: "DOCKER",
    title: "ESTIMEO",
    id: 2,
  },
  {
    title: "ANOMUSIC",
    text1: "FRONT-END",
    text2: "BACK-END",
    text6: "UI/UX",
    text4: "REACTJS",
    text5: "NODEJS",
    text3: "MONGODB",
    id: 3,
  },
  {
    title: "SMARTBACK",
    text1: "FRONT-END",
    text4: "PO",
    text3: "UI/UX",
    text2: "REACTJS",
    id: 4,
  },
  {
    text2: "RENPY",
    text1: "LEAD DEV",
    text5: "UI/UX",
    text4: "PYTHON",
    title: "OTOME GAME",
    id: 5,
  },
];

const Projects = () => {
  const navigate = useNavigate(); // Use navigate inside the Card component

  const handleNavigation = (title) => {
    switch (title) {
      case "ANOMUSIC":
        navigate("/anomusic");
        break;
      case "ESTIMEO":
        navigate("/estimeo");
        break;
      case "LINKERA":
        navigate("/linkera");
        break;
      case "SMARTBACK":
        navigate("/smartback");
        break;
      case "OTOME GAME":
        navigate("/otome");
        break;
      case "FIGHT GAME":
        navigate("/game");
        break;
      default:
        break;
    }
  };
  const containerRef = useRef(null); // Référence au conteneur des cartes

  useEffect(() => {
    const cards = Array.from(containerRef.current.querySelectorAll(".card"));

    if (cards.length > 0) {
      // Initialisation de Draggable avec GSAP pour chaque carte
      Draggable.create(cards, {
        type: "x,y", // Déplacement horizontal et vertical
        bounds: containerRef.current, // Limite le déplacement au conteneur
      });

      // Animation de chute avec des variations
      cards.forEach((card, index) => {
        gsap.set(card, {
          y: -300 - Math.random() * 200, // Position initiale au-dessus de l'écran
          opacity: 0, // Initialement invisible
        });

        gsap.to(card, {
          scrollTrigger: {
            trigger: card, // Déclencheur : chaque carte
            start: "top 80%", // Quand la carte entre dans la vue
          },
          y: Math.random() * 50 - 25, // Arrivée à une position aléatoire
          opacity: 1, // Rend visible
          duration: 1.5 + Math.random(), // Durée aléatoire
          delay: Math.random() * 0.5, // Délai aléatoire avant de commencer
          rotation: Math.random() * 20 - 10, // Rotation pendant la chute
          ease: "bounce.out", // Effet de gravité
        });
      });
    }
  }, []);

  return (
    <>
      {/* Section du titre */}
      <div className="">
        <img src={clouds} alt="Flower" className="w-full h-full" />
      </div>

      <section
        id="projets"
        className="w-full z-50 mx-auto bg-secondary flex flex-col text-secondary font-sporting-regular"
      >
        <Marquee>
          <div className="  font-sporting-regular  text-primary text-[150px]">
            <p>
              PROJETS ❊ PROJETS ❊ PROJETS ❊ PROJETS ❊ PROJETS ❊ PROJETS ❊
              PROJETS ❊ PROJETS ❊ PROJETS ❊ PROJETS ❊ PROJETS ❊ PROJETS ❊
              PROJETS ❊ PROJETS ❊ PROJETS ❊ PROJETS ❊ PROJETS ❊ PROJETS ❊
              PROJETS ❊ PROJETS ❊ PROJETS ❊ PROJETS ❊ PROJETS ❊ PROJETS ❊
              PROJETS ❊
            </p>
          </div>
        </Marquee>
        {/* <ZoomText delay={0.2}>
          <div>
            <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold leading-none">
              Mes
              <br /> Projets
            </h2>
          </div>
        </ZoomText> */}

        {/* <div className="">
          <img src={cloud} alt="Flower" className="w-full h-full" />
        </div> */}

        {/* Section contenant les cartes */}
        <section
          ref={containerRef}
          className="relative w-[100%] mx-auto h-[80vh]  flex items-center"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="card bg-primary border-dashed border-2 border-black rounded-lg h-[20rem] w-[20rem] p-4 group cursor-grab user-select-none relative"
            >
              {/* Contenu dynamique */}
              <div className="absolute top-4 left-4 w-16 h-16 group-hover:w-60 group-hover:h-24 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col text-left">
                <p className="text-[0.75rem] font-sporting-regular">
                  {card.text1}
                </p>
                <p className="text-[0.75rem] font-sporting-regular">
                  {card.text2}
                </p>
                <p className="text-[0.75rem] font-sporting-regular">
                  {card.text3}
                </p>
                <p className="text-[0.75rem] font-sporting-regular">
                  {card.text4}
                </p>
                <p className="text-[0.75rem] font-sporting-regular">
                  {card.text5}
                </p>
                <p className="text-[0.75rem] font-sporting-regular">
                  {card.text6}
                </p>
                <p className="text-[0.75rem] font-sporting-regular">
                  {card.text7}
                </p>
              </div>

              {/* Numéro de la carte */}
              <span className="absolute top-4 left-4 text-[2rem] font-sporting-bold transition-all duration-300 ease-in-out group-hover:opacity-0">
                0{card.id}.
              </span>

              {/* Flèche au hover */}
              <span
                onClick={() => handleNavigation(card.title)}
                className="absolute top-2 right-4 cursor-pointer text-[2rem] font-sporting-bold text-black opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                style={{
                  transform: "translate(10px, 10px) rotate(-45deg)", // Position initiale
                  transition: "all 0.3s ease-in-out", // Animation fluide
                }}
              >
                ➔
              </span>

              {/* Titre */}
              <div className="absolute bottom-4 left-4">
                <h2 className="text-2xl lg:text-[1rem] font-sporting-bold group-hover:text-2xl lg:group-hover:text-[1.5rem] md:group-hover:text-[1.5rem] transition-all duration-300 ease-in-out">
                  {card.title}
                </h2>
              </div>
            </div>
          ))}
        </section>
      </section>
      <div className="">
        <img
          src={clouds}
          alt="Flower"
          className="w-full h-full transform scale-y-[-1]"
        />
      </div>
    </>
  );
};

export default Projects;
