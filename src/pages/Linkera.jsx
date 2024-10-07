import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import Contact from "../components/Contact";
import LinkeraWeb from "../components/LinkeraWeb";

import mockup from "../assets/img/linkera/MockupLinkera.png";

const Linkera = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/projects");
  };

  const controls = useAnimation();
  const [inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      console.log(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="relative h-[200vh]">
        {/* Section avec le titre */}
        <div className="h-[100vh] flex items-center justify-center bg-white">
          <div>
            <motion.h1
              className="text-center text-[20px] sm:text-[40px] lg:text-[50px] max-w-[100%] font-sporting-regular tracking-normal m-0 p-0 leading-tight mt-2"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: 0.2,
              }}
            >
              REVOLUTIONIZING THE WAY BUSINESSES BUY, SELL, AND RAISE FUNDS.
            </motion.h1>
          </div>
        </div>

        {/* Section avec l'effet de parallaxe en dessous du titre */}
        <div
          className="bg-fixed bg-cover bg-center h-[100vh]"
          style={{
            backgroundImage: `url(${mockup})`,
            backgroundPosition: " top 50%",
          }}
        >
          <div className="h-full flex items-center justify-center">
            <h2 className="text-white text-[20px] sm:text-[40px] lg:text-[50px] max-w-[100%] font-sporting-regular ">
              LINKERA
            </h2>
          </div>
        </div>

        {/* Section suivante */}
        <div className="h-[100vh] bg-white flex items-center justify-center m-0 p-40 leading-tight mt-2">
          <p className="font-sporting-regular text-center text-[30px]">
            LINKERA SIMPLIFIES BUSINESS SALES, ACQUISITIONS, AND FUNDRAISING. IT
            PROVIDES TOOLS FOR LISTINGS, CONNECTING BUYERS AND SELLERS, MANAGING
            CONFIDENTIALITY, AND CONDUCTING VALUATIONS. FOR STARTUPS, IT HELPS
            RAISE FUNDS BY IDENTIFYING INVESTORS AND PREPARING FOR TRANSACTIONS.
          </p>
        </div>

        <LinkeraWeb />

        <div className="h-[100vh] bg-white flex items-center justify-center m-0 p-40 leading-tight mt-2">
          <p className="font-sporting-regular text-center text-[30px]">
            AS PART OF A TECH TEAM, I CONTRIBUTED TO BUILDING THE FIRST VERSION
            OF LINKERA AS A FULL-STACK DEVELOPER. I FOCUSED ON UI/UX DESIGN AND
            DEVELOPED ALGORITHMS FOR FINANCIAL CALCULATIONS AND AUTOMATED PDF
            GENERATION.
          </p>
        </div>

        <Contact />
      </div>
    </>
  );
};

export default Linkera;
