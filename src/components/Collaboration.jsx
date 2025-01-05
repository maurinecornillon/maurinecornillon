import React from "react";
import ZoomText from "../components/ZoomText";

const Collaboration = () => {
  return (
    <section className="w-[90%] mx-auto text-secondary font-sporting-regular">
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
              Vous recherchez un accompagnement stratégique et flexible sur le
              long terme pour transformer vos idées en solutions performantes et
              vous démarquer durablement dans un univers digital compétitif.
            </p>
          </ZoomText>
        </div>

        {/* Packs */}
        <div className="flex flex-col md:flex-row justify-center gap-24 mb-16">
          {/* Contenu principal */}
          <div className="relative md:w-[380px]">
            {/* Encart "Forfait mensuel" */}
            <div className="absolute top-[-1rem] left-4 bg-[#212121] text-[#eae6f3] rounded-lg text-secondary border border-secondary  px-4 py-1 text-[0.7rem] sm:text-[0.8rem] lg:text-[0.8rem]  shadow-md">
              Forfait mensuel
            </div>

            <ZoomText delay={0.2}>
              <div
                className="absolute rounded-lg inset-0 translate-x-2 translate-y-2 bg-secondary"
                style={{
                  clipPath:
                    "polygon(72px 0%, calc(100% - 72px) 0%, 100% 72px, 100% 100%, calc(100% - 72px) 100%, 72px 100%, 0px 100%, 0px 0px)",
                }}
              ></div>
              <div
                className="relative md:w-[380px] rounded-lg border border-secondary p-6 bg-[#eae6f3]"
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
                <h2 className="text-xl font-bold mb-4">Pack Partenaire</h2>
                <p className="mb-4 text-[0.6rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.8rem]">
                  Un accompagnement global <br />
                  pour vos projets ambitieux.
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
                <ul className="list-none space-y-4 text-[0.6rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.8rem]">
                  <li>
                    ✓ Audit continu pour ajuster vos besoins et priorités.
                  </li>
                  <li>
                    ✓ Création et évolution d’un branding complet et
                    stratégique.
                  </li>
                  <li>✓ Développement full-stack avancé et adaptable.</li>
                  <li>
                    ✓ Recherche approfondie : analyse concurrentielle, tests
                    utilisateurs.
                  </li>
                  <li>
                    ✓ Réunions illimitées pour itérer sur le design et le
                    développement.
                  </li>
                  <li>
                    ✓ Livraison progressive, ajustés à chaque étape du projet.
                  </li>
                </ul>
              </div>
            </ZoomText>
          </div>
        </div>
      </ZoomText>
    </section>
  );
};

export default Collaboration;
