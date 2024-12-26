import React from "react";
import Marquee from "react-fast-marquee";

import ZoomText from "../components/ZoomText";

import clouds from "../assets/img/logo/12.png";

const Contact = () => {
  return (
    <>
      <main className="  w-[100%]">
        <div className="bg-violet">
          <Marquee speed={50}>
            <div className=" font-sporting-regular text-secondary text-[100px]">
              <p>
                CONTACTS ❊ CONTACTS ❊ CONTACTS ❊ CONTACTS ❊ CONTACTS ❊ CONTACTS
                ❊ CONTACTS ❊ CONTACTS ❊ CONTACTS ❊ CONTACTS ❊ CONTACTS ❊
                CONTACTS ❊ CONTACTS ❊ CONTACTS ❊ CONTACTS ❊ CONTACTS ❊ CONTACTS
                ❊ CONTACTS ❊ CONTACTS ❊ CONTACTS ❊ CONTACTS ❊ CONTACTS ❊
                CONTACTS ❊ CONTACTS ❊ CONTACTS ❊
              </p>
            </div>
          </Marquee>
        </div>
        <div className="overflow-hidden">
          <img src={clouds} alt="Flower" className="w-full max-w-full h-full" />
        </div>
        <section className=" w-[90%] z-50 mx-auto flex flex-col space-y-16 text-secondary font-sporting-regular">
          <div className="space-y-8 flex flex-col w-[60%] ml-auto relative">
            {/* Service 1 */}
            <ZoomText delay={0.2}>
              <div className="flex items-center justify-between border-b border-secondary pb-4 relative">
                <span className="text-[rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold ">
                  01.
                </span>

                <h3
                  id="creation"
                  className="text-[1rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold "
                >
                  Création
                </h3>
              </div>
            </ZoomText>

            {/* Service 2 */}
            <ZoomText delay={0.2}>
              <div className="flex items-center justify-between border-b border-secondary pb-4">
                <span className="text-[1rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold ">
                  02.
                </span>
                <h3
                  id="optimisation"
                  className="text-[1rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold"
                >
                  Optimisation
                </h3>
              </div>
            </ZoomText>

            {/* Service 3 */}
            <ZoomText delay={0.2}>
              <div
                className="relative flex items-center justify-between pb-4
              "
              >
                <span className="text-[1rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold ">
                  03.
                </span>
                <h3
                  id="collaboration"
                  className="text-[1rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold"
                >
                  Collaboration
                </h3>
              </div>
            </ZoomText>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
