import React from "react";
import ZoomText from "../components/ZoomText";

const Collaboration = () => {
  return (
    <section className="w-[90%] mx-auto pb-[8rem] text-secondary font-sporting-regular">
      {/* Titre et description */}
      <ZoomText delay={0.2}>
        <div className="text-center mb-16">
          <ZoomText delay={0.2}>
            <h1 className="text-[2rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold mb-4">
              Collaboration
            </h1>
          </ZoomText>
          <ZoomText delay={0.3}>
            <p className="text-[0.8rem] sm:text-[1rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1rem]">
              Intégrez une développeuse Full-Stack dans vos équipes pour
              accélérer vos projets.
            </p>
          </ZoomText>
        </div>

        {/* Packs */}
        <div className="flex flex-col md:flex-row justify-center gap-24 mb-16">
          {/* Pack Court */}
          <div className="relative md:w-[380px] h-[200px] ">
            <ZoomText delay={0.3}>
              <div
                className="absolute rounded-lg inset-0 translate-x-2 translate-y-2 bg-secondary"
                style={{
                  clipPath:
                    "polygon(72px 0%, calc(100% - 72px) 0%, 100% 72px, 100% 100%, calc(100% - 72px) 100%, 72px 100%, 0px 100%, 0px 0px)",
                }}
              ></div>
              <div
                className="relative md:w-[380px] h-[200px]  rounded-lg border border-secondary p-6 bg-[#eae6f3]"
                style={{
                  clipPath:
                    "polygon(72px 0%, calc(100% - 72px) 0%, 100% 72px, 100% 100%, calc(100% - 72px) 100%, 72px 100%, 0px 100%, 0px 0px)",
                }}
              >
                <span
                  className="absolute block origin-top-right rotate-45 bg-secondary"
                  style={{
                    right: "-2px",
                    top: "70px",
                    width: "101px",
                    height: "2px",
                  }}
                ></span>
                <h2 className="text-xl font-bold mb-4">Mission courte</h2>
                <p
                  style={{
                    height: "40px",
                  }}
                  className="mb-4 text-[0.6rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.8rem]"
                >
                  Tâches spécifiques ou renfort ponctuel
                </p>
                <div className="mb-16" style={{ height: "20px" }}>
                  <a
                    href="https://calendly.com/maurinecornillon/discutons-de-ton-projet"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border-2 border-dashed border-black px-6 py-1 transition-all duration-300 hover:bg-gradient hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-[0.6rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.8rem]"
                  >
                    Prendre rendez-vous
                  </a>
                </div>
              </div>
            </ZoomText>
          </div>

          {/* Pack Consulting */}
          <div className="relative md:w-[380px] h-[200px] ">
            <ZoomText delay={0.4}>
              <div
                className="absolute rounded-lg inset-0 translate-x-2 translate-y-2 bg-secondary"
                style={{
                  clipPath:
                    "polygon(72px 0%, calc(100% - 72px) 0%, 100% 72px, 100% 100%, calc(100% - 72px) 100%, 72px 100%, 0px 100%, 0px 0px)",
                }}
              ></div>
              <div
                className="relative md:w-[380px] h-[200px]  rounded-lg border border-secondary p-6 bg-[#C4D3EF]"
                style={{
                  clipPath:
                    "polygon(72px 0%, calc(100% - 72px) 0%, 100% 72px, 100% 100%, calc(100% - 72px) 100%, 72px 100%, 0px 100%, 0px 0px)",
                }}
              >
                <span
                  className="absolute block origin-top-right rotate-45 bg-secondary"
                  style={{
                    right: "-2px",
                    top: "70px",
                    width: "101px",
                    height: "2px",
                  }}
                ></span>
                <h2 className="text-xl font-bold mb-4">Mission Longue</h2>
                <p
                  style={{
                    height: "40px",
                  }}
                  className="mb-4 text-[0.6rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.8rem]"
                >
                  Collaboration sur des projets techniques complexes
                </p>
                <div className="mb-16" style={{ height: "20px" }}>
                  <a
                    href="https://linktr.ee/maurinemona"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border-2 border-dashed border-black px-6 py-1 transition-all duration-300 hover:bg-gradient hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-[0.6rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.8rem]"
                  >
                    Prendre rendez-vous
                  </a>
                </div>
              </div>
            </ZoomText>
          </div>
        </div>

        {/* Description */}
        <div className="w-[90%] mx-auto text-center mb-16 text-[0.8rem] sm:text-[1rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1rem]">
          <ZoomText delay={0.5}>
            <p className="mb-4">
              Je m’adapte aux besoins de votre équipe, que ce soit pour une
              mission Agile ou une intervention technique spécifique.
            </p>
          </ZoomText>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <ZoomText delay={0.6}>
            <a
              href="https://calendly.com/maurinecornillon/discutons-de-ton-projet"
              target="_blank"
              rel="noreferrer"
              className="bg-purple rounded-2xl border-2 border-dashed border-black px-16 py-6 transition-all duration-300 hover:bg-gradient hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-[0.6rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1rem]"
              style={{
                boxShadow: "8px 8px 0px 0px #212121",
              }}
            >
              Discutons ensemble
            </a>
          </ZoomText>
        </div>
      </ZoomText>
    </section>
  );
};

export default Collaboration;
