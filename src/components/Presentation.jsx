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
          className=" max-w-[100%] font-sporting-regular tracking-widest m-0 p-0 leading-tight mt-2"
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
                  ? "font-canela-light-italic text-[1.25rem] sm:text-[2.5rem] lg:text-[2.7rem]  xl:text-[3.75rem] 2xl:text-[3.75rem] tracking-wide"
                  : "font-sporting-regular text-[1.25rem] sm:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.125rem] 2xl:text-[3.125rem]  tracking-normal"
              }`}
            >
              {item.word}&nbsp;
            </span>
          ))}
        </motion.p>
      </main>
    </div>
  );
}  

export default Presentation;
