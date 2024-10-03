// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const Presentation = () => {
//   const controls = useAnimation();
//   const [inView] = useInView({
//     threshold: 0.1,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, inView]);

//   return (
//     <>
//       <div className="flex h-screen justify-between">
//         <main className=" flex flex-col justify-end items-end flex-grow pr-10  px-4 sm:px-10 md:px-10 lg:pl-48 xl:pl-48  leading-none m-0 p-10">
//           <motion.h1
//             className=" max-w-[70%] font-sporting-regular text-[20px] sm:text-[30px] md:text-[30px] lg:text-[50px] xl:text-[50px] text-right tracking-widest m-0 p-0 leading-none"
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             transition={{ type: "spring", stiffness: 60, damping: 20 }}
//           >
//             Welcome to <br /> my portfolio!
//           </motion.h1>
//           <motion.p
//             className="text-[10px] sm:text-[20px] md:text-[20px] lg:text-[30px] xl:text-[30px] max-w-[100%] font-sporting-regular text-right tracking-widest m-0 p-0 leading-tight mt-2"
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             transition={{
//               type: "spring",
//               stiffness: 60,
//               damping: 20,
//               delay: 0.2,
//             }}
//           >
//             I'm thrilled to have you here! This is my personal portfolio
//             website, a space that I've designed and coded entirely by myself.
//             I'm Mona, a Full-Stack JS Developer.
//             <br /> I invite you to explore it, learn more about me and see how
//             my skills and creativity come together. Thank you for visiting, and
//             I hope you enjoy exploring this site as much as I enjoyed creating
//             it!
//           </motion.p>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Presentation;

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
    { word: "WORLDWIDE.", specialFont: false },
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
                  ? "font-canela-light-italic text-[é0px] sm:text-[40px] lg:text-[60px]  tracking-wide"
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
