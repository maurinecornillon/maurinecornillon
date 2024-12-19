import React from "react";
import ZoomText from "../components/ZoomText";

const Optimisation = () => {
  return (
    <section className="w-[90%] mx-auto pb-[8rem] text-secondary font-sporting-regular">
      {/* Titre et description */}
      <ZoomText delay={0.2}>
        <div className="text-center mb-16">
          <ZoomText delay={0.2}>
            <h1 className="text-[2rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold mb-4">
              Optimisation
            </h1>
          </ZoomText>
          <ZoomText delay={0.2}>
            <p className="text-[0.8rem] sm:text-[1rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1rem]">
              Idéal si : <br /> Vous êtes en pleine croissance et vous cherchez
              à vous démarquer.
            </p>
          </ZoomText>
        </div>

        {/* Packs */}
        <div className="flex flex-col md:flex-row justify-center gap-24 mb-16">
          {/* Pack Refonte */}
          <div className="relative md:w-[380px] h-[400px]">
            <ZoomText delay={0.2}>
              <div
                className="absolute rounded-lg inset-0 translate-x-2 translate-y-2 bg-secondary"
                style={{
                  clipPath:
                    "polygon(72px 0%, calc(100% - 72px) 0%, 100% 72px, 100% 100%, calc(100% - 72px) 100%, 72px 100%, 0px 100%, 0px 0px)",
                }}
              ></div>
              <div
                className="relative md:w-[380px] h-[400px] rounded-lg border border-secondary p-6 bg-[#eae6f3]"
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
                <h2 className="text-xl font-bold mb-4">Pack Refonte</h2>
                <p className="mb-4 text-[0.6rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.8rem]">
                  Une refonte complète, <br /> prête à l'emploi.
                </p>
                <div className="mb-16">
                  <a
                    href="https://calendly.com/maurinecornillon/discutons-de-ton-projet"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border-2 border-dashed border-black px-6 py-1 transition-all duration-300 hover:bg-gradient hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-[0.6rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.8rem]"
                  >
                    Prendre rendez-vous
                  </a>
                </div>
                <ul className="list-none space-y-4 mb-16 text-[0.6rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.8rem]">
                  <li>✓ Audit UX/UI et technique.</li>
                  <li>
                    ✓ Création de maquettes UX/UI modernes et impactantes.
                  </li>
                  <li>
                    ✓ Développement front-end intégré pour un site clé en main.
                  </li>
                </ul>
              </div>
            </ZoomText>
          </div>

          {/* Pack Performance */}
          <div className="relative md:w-[380px] h-[400px]">
            <ZoomText delay={0.4}>
              <div
                className="absolute rounded-lg inset-0 translate-x-2 translate-y-2 bg-secondary"
                style={{
                  clipPath:
                    "polygon(72px 0%, calc(100% - 72px) 0%, 100% 72px, 100% 100%, calc(100% - 72px) 100%, 72px 100%, 0px 100%, 0px 0px)",
                }}
              ></div>
              <div
                className="relative md:w-[380px] h-[400px] rounded-lg border border-secondary p-6 bg-[#C4D3EF]"
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
                <h2 className="text-xl font-bold mb-4">Pack Refresh</h2>
                <p className="mb-4 text-[0.6rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.8rem]">
                  Un nouveau design <br /> pour votre plateforme.
                </p>
                <div className="mb-16">
                  <a
                    href="https://calendly.com/maurinecornillon/discutons-de-ton-projet"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border-2 border-dashed border-black px-6 py-1 transition-all duration-300 hover:bg-gradient hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-[0.6rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.8rem]"
                  >
                    Prendre rendez-vous
                  </a>
                </div>
                <ul className="list-none space-y-4 mb-16 text-[0.6rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.8rem]">
                  <li>✓ Audit UX/UI.</li>
                  <li>
                    ✓ Création de maquettes UX/UI modernes et impactantes.
                  </li>
                  <li>✓ Livrables prêts pour une intégration technique.</li>
                </ul>
              </div>
            </ZoomText>
          </div>
        </div>

        {/* Description */}
        <div className="w-[90%] mx-auto text-center mb-16 text-[0.8rem] sm:text-[1rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1rem]">
          <ZoomText delay={0.2}>
            <p className="mb-4">
              Pour découvrir le pack qui correspond le mieux à vos besoin et
              obtenir une première estimation, utiliser le simulateur de projet
              !
            </p>
          </ZoomText>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <ZoomText delay={0.5}>
            <a
              href="https://linktr.ee/maurinemona"
              rel="noreferrer"
              target="_blank"
              className="bg-purple rounded-2xl border-2 border-dashed border-black px-16 py-6 transition-all duration-300 hover:bg-gradient hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-[0.6rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1rem]"
              style={{
                boxShadow: "8px 8px 0px 0px #212121",
              }}
            >
              🌼 Simuler mon projet 🌼
            </a>
          </ZoomText>
        </div>
      </ZoomText>
    </section>
  );
};

export default Optimisation;
