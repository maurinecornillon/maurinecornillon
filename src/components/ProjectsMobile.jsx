import React, { useEffect, useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Contact from "../components/Contact";

import cover1 from "../assets/img/cover1.jpg";

const cards = [
  {
    url: cover1,
    text2: "FRONT-END",
    text3: "BACK-END",
    text1: "PROJECT MANAGEMENT",
    text7: "UI/UX",
    text4: "REACTJS",
    text5: "NODEJS",
    text6: "MONGODB",
    title: "LINKERA",
    id: 2,
  },
  {
    url: cover1,
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
    url: cover1,
    title: "ANNAMOLLY",
    text1: "FRONT-END",
    text2: "BACK-END",
    text6: "UI/UX",
    text4: "REACTJS",
    text5: "NODEJS",
    text3: "MONGODB",
    id: 3,
  },
  {
    url: cover1,
    title: "SMARTBACK",
    text1: "FRONT-END",
    text4: "PO",
    text3: "UI/UX",
    text2: "REACTJS",
    id: 4,
  },

  {
    url: cover1,
    text2: "RENPY",
    text1: "LEAD DEV",
    text5: "UI/UX",
    text4: "PYTHON",
    title: "OTOME GAME",
    id: 5,
  },
  {
    url: cover1,
    text1: "FRONT-END",
    text2: "BACK-END",
    text4: "UI/UX",
    text3: "CANVAS",
    title: "FIGHT GAME",
    id: 6,
  },
];

const ProjectsMobile = () => {
  return (
    <>
      <section className="flex flex-col gap-4 p-4">
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </section>
      <Contact />
    </>
  );
};

const Card = ({ card }) => {
  const navigate = useNavigate(); // Use navigate inside the Card component

  const handleNavigation = (title) => {
    switch (title) {
      case "ANNAMOLLY":
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
    <div
      onClick={() => handleNavigation(card.title)}
      className="relative h-[350px] w-full border-4 border-black bg-white p-4 group transition-all duration-300 ease-in-out cursor-pointer"
    >
      {/* Titre */}
      <h2 className="text-2xl font-bold group-hover:text-4xl transition-all duration-300 ease-in-out">
        {card.title}
      </h2>

      {/* Description simplifiée */}
      <div className="mt-4 text-lg">
        <p>{card.text1}</p>
        <p>{card.text2}</p>
        <p>{card.text3}</p>
        {/* Affiche plus de détails si nécessaire */}
      </div>
    </div>
  );
};

export default ProjectsMobile;
