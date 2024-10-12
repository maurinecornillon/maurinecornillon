import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Presentation = () => {
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

  const wordsArray1 = [
    { word: "PARIS", specialFont: false },
    { word: "BASED", specialFont: false },
    { word: "FULL", specialFont: false },
    { word: "STACK", specialFont: false },
    { word: "JS", specialFont: false },
    { word: "developer,", specialFont: true },
    { word: "CREATING", specialFont: false },
    { word: "unique", specialFont: true },
    { word: "AND", specialFont: false },
    { word: "FULLY", specialFont: false },
    { word: "CUSTOM", specialFont: false },
    { word: "WEBSITES", specialFont: false },
    { word: "FOR", specialFont: false },
    { word: "clients", specialFont: true },
    { word: "WORLDWIDE", specialFont: false },
  ];

  return (
    <div className="flex h-screen justify-center items-center ">
      <main className="flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
        <motion.p
          className="text-[10px] sm:text-[20px] md:text-[20px] lg:text-[30px] xl:text-[30px] max-w-[100%] font-sporting-regular tracking-widest m-0 p-0 leading-tight mt-2"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
            delay: 0.2,
          }}
        >
          {wordsArray1.map((item, index) => (
            <span
              key={index}
              className={`word1 ${
                item.specialFont
                  ? "font-canela-light-italic text-[20px] sm:text-[40px] lg:text-[60px]  tracking-wide"
                  : "font-sporting-regular text-[20px] sm:text-[40px] lg:text-[50px]  tracking-normal"
              }`}
            >
              {item.word}&nbsp;
            </span>
          ))}
        </motion.p>
      </main>
    </div>
  );
};

export default Presentation;
