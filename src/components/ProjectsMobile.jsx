import React from "react";
import { useNavigate } from "react-router-dom";

import ZoomText from "../components/ZoomText";

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

const ProjectsMobile = () => {
  return (
    <>
      <section className="flex flex-col gap-14 p-10 ">
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
        <a
          href="https://linktr.ee/maurinemona"
          rel="noreferrer"
          target="_blank"
          className="bg-purple text-center rounded-2xl border-2 border-dashed border-black px-16 py-6 transition-all duration-300 hover:bg-gradient hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-[0.6rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1rem]"
          style={{
            boxShadow: "8px 8px 0px 0px #212121",
          }}
        >
          Réservez votre audit grauit !
        </a>
      </section>
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
      <ZoomText delay={0.2}>
        <div
          onClick={() => handleNavigation(card.title)}
          className="relative border-dashed border-2 border rounded-lg h-[350px] bg-[#eae6f3] w-full border-black p-4 "
        >
          {/* Titre */}
          <div className="absolute bottom-4 left-4">
            <h2 className="text-2xl font-sporting-bold">{card.title}</h2>
          </div>

          <div className="absolute top-[-10px] right-[-10px] w-24 h-24  ">
            <img src={flowers1} at="logo" />
          </div>

          {/* Description simplifiée */}
          <div className="mt-14 text-lg">
            <p>{card.text1}</p>
            <p>{card.text2}</p>
            <p>{card.text3}</p>
            <p>{card.text4}</p>
            <p>{card.text5}</p>
            <p>{card.text6}</p>
            <p>{card.text7}</p>
          </div>
          <span className="absolute top-4 left-4 text-[40px] font-sporting-bold ">
            {card.id}.
          </span>
        </div>
      </ZoomText>
    </>
  );
};

export default ProjectsMobile;
