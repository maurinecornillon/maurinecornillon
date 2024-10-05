import React, { useEffect, useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import Header from "../components/Header";
import Contact from "../components/Contact";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

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

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjusted x transformation to avoid the extra space at the end
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const controlsContact = useAnimation();
  const [refContact, inViewContact] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inViewContact) {
      controlsContact.start("visible");
    } else {
      controlsContact.start("hidden");
    }
  }, [controlsContact, inViewContact]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main className="flex justify-center items-center flex-grow px-10 leading-none m-0 p-0">
          <div>
            <motion.h1
              className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[150px] xl:text-[150px] font-respira tracking-widest m-0 p-0 leading-none"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
            >
              Projects_
            </motion.h1>
          </div>

          <div className="mt-60">
            <motion.h2
              className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[150px] xl:text-[150px]  text-gray-300 font-canela-light-italic tracking-widest m-0 p-0 leading-none"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: 0.2,
              }}
            >
              work
            </motion.h2>
          </div>
        </main>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        <section ref={targetRef} className="relative h-[300vh]">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex p-10 gap-4 w-full">
              {/* Adjusted the width to 100vw to prevent extra space */}
              {cards.map((card) => (
                <Card card={card} key={card.id} />
              ))}
            </motion.div>
          </div>
        </section>
      </motion.div>

      <motion.div
        ref={refContact}
        initial="hidden"
        animate={controlsContact}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        <Contact />
      </motion.div>
    </>
  );
};

const Card = ({ card }) => {
  const navigate = useNavigate(); // Use navigate inside the Card component

  const handleNavigation = (title) => {
    switch (title) {
      case "ANNAMOLLY":
        navigate("/anna");
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
      key={card.id}
      onClick={() => handleNavigation(card.title)}
      className="relative h-[450px] min-w-[450px] border-4 border-black bg-white p-4 group transition-all duration-300 ease-in-out cursor-pointer"
    >
      {/* Image en haut à droite */}
      <div className="absolute top-4 right-4 w-16 h-16 transition-all duration-300 ease-in-out group-hover:opacity-0">
        <span className="text-[100px] font-sporting-bold">•</span>
      </div>

      {/* Texte de remplacement lors du hover */}
      <div className="absolute top-4 right-4 w-16 h-16 group-hover:w-60 group-hover:h-24 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col text-right">
        <p className="text-[12px] font-sporting-regular">{card.text1}</p>
        <p className="text-[12px] font-sporting-regular">{card.text2}</p>
        <p className="text-[12px] font-sporting-regular">{card.text3}</p>
        <p className="text-[12px] font-sporting-regular">{card.text4}</p>
        <p className="text-[12px] font-sporting-regular">{card.text5}</p>
        <p className="text-[12px] font-sporting-regular">{card.text6}</p>
        <p className="text-[12px] font-sporting-regular">{card.text7}</p>
      </div>

      {/* Numéro en haut à gauche */}
      <span className="absolute top-4 left-4 text-[60px] font-sporting-bold group-hover:text-[80px] transition-all duration-300 ease-in-out">
        {card.id}.
      </span>

      {/* Titre en bas à gauche */}
      <div className="absolute bottom-4 left-4">
        <h2 className="text-2xl font-sporting-bold group-hover:text-4xl transition-all duration-300 ease-in-out">
          {card.title}
        </h2>
      </div>

      {/* Overlay sur hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </div>
  );
};

export default Projects;