import React, { useEffect, useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

import flowers from "../assets/img/logo/el2.png";
import flowers1 from "../assets/img/logo/logo.png";

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
  {
    text1: "FRONT-END",
    text2: "BACK-END",
    text4: "UI/UX",
    text3: "CANVAS",
    title: "FIGHT GAME",
    id: 6,
  },
];

const ProjectsWeb = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjusted x transformation to avoid the extra space at the end
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <>
      <div>
        <section
          ref={targetRef}
          className="relative h-[500vh] lg:h-[400vh] md:h-[400vh]"
        >
          <div className="sticky top-0 flex items-center overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex p-10 w-[300vw] md:w-[150vw] gap-4"
            >
              {/* Adjusted the width to 100vw to prevent extra space */}
              {cards.map((card) => (
                <Card card={card} key={card.id} />
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

const Card = ({ card }) => {
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

  return (
    <>
      <div
        key={card.id}
        onClick={() => handleNavigation(card.title)}
        className=" relative bg-[#eae6f3] border-dashed border-2 border rounded-lg h-[28.125rem] min-w-[28.125rem] md:h-[20rem] lg:h-[20rem] md:min-w-[20rem] lg:min-w-[20rem] xl:h-[24rem] xl:min-w-[24rem] 2xl:h-[28rem] 2xl:min-w-[28rem] border-black p-4 group transition-all duration-300 ease-in-out cursor-pointer "
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "8px 8px 0px 0px #212121";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0px 0px 0px 0px #212121";
        }}
      >
        {/* Image en haut à droite */}
        <div className="absolute  top-[-10px] right-[-10px] w-24 h-24 transition-all duration-300 ease-in-out group-hover:opacity-0">
          <img src={flowers1} />
        </div>

        {/* Texte de remplacement lors du hover */}
        <div className="absolute top-4 right-4 w-16 h-16 group-hover:w-60 group-hover:h-24 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col text-right">
          <p className="text-[0.75rem] font-sporting-regular">{card.text1}</p>
          <p className="text-[0.75rem] font-sporting-regular">{card.text2}</p>
          <p className="text-[0.75rem] font-sporting-regular">{card.text3}</p>
          <p className="text-[0.75rem] font-sporting-regular">{card.text4}</p>
          <p className="text-[0.75rem] font-sporting-regular">{card.text5}</p>
          <p className="text-[0.75rem] font-sporting-regular">{card.text6}</p>
          <p className="text-[0.75rem] font-sporting-regular">{card.text7}</p>
        </div>

        {/* Numéro en haut à gauche */}
        <span className="absolute top-4 left-4 text-[3.75rem] font-sporting-bold group-hover:text-[5rem] transition-all duration-300 ease-in-out">
          0{card.id}.
        </span>

        {/* Titre en bas à gauche */}
        <div className="absolute bottom-4 left-4">
          <h2 className="text-2xl lg:text-[1.5rem] font-sporting-bold group-hover:text-4xl lg:group-hover:text-3xl md:group-hover:text-3xl  transition-all duration-300 ease-in-out">
            {card.title}
          </h2>
        </div>

        {/* Overlay sur hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>
    </>
  );
};

export default ProjectsWeb;
