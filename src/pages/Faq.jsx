import React, { useState } from "react";

import FaqBesoins from "../components/FaqBesoins";
import FaqProcess from "../components/FaqProcess";
import FaqResultats from "../components/FaqResultats";
import ZoomText from "../components/ZoomText";

const Faq = () => {
  const [activeSection, setActiveSection] = useState("creation");
  // Gère le contenu dynamique en fonction de la section active
  const renderContent = () => {
    switch (activeSection) {
      case "creation":
        return <FaqBesoins />;
      case "optimisation":
        return <FaqProcess />;
      case "collaboration":
        return <FaqResultats />;
      default:
        return null;
    }
  };

  return (
    <>
      <main id="faq" className=" w-full h-full ">
        <div className="">
          <h2 className=" px-6 flex items-center justify-center text-[16.8vw] tracking-wide uppercase leading-none font-bold font-NHAASDPRO">
            QUESTIONS
          </h2>
        </div>
        <section className="w-full items-center justify-between px-6 flex text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] font-ITC ">
          <ZoomText>
            <span
              className="hover:text-red cursor-pointer"
              onClick={() => setActiveSection("creation")}
            >
              [ besoins ]
            </span>
          </ZoomText>
          <ZoomText>
            <span
              className="hover:text-red cursor-pointer"
              onClick={() => setActiveSection("optimisation")}
            >
              [ process ]
            </span>
          </ZoomText>
          <ZoomText>
            <span
              className="hover:text-red cursor-pointer"
              onClick={() => setActiveSection("collaboration")}
            >
              [ résultats ]
            </span>
          </ZoomText>
        </section>
      </main>
      <section className="  px-6 py-16 sm:py-16 md:py-16 lg:py-32  w-[100%] z-50 mx-auto flex flex-col space-y-16 text-secondary font-NHAASDS">
        {/* CONTENU DYNAMIQUE */}

        <div className="">{renderContent()}</div>
      </section>
    </>
  );
};

export default Faq;
