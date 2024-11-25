import React from "react";

import ZoomText from "../components/ZoomText";
import ProjectsWeb from "../components/ProjectsWeb";
import ProjectsMobile from "../components/ProjectsMobile";

const Projects = () => {
  return (
    <>
      {/* PROJETS */}
      <section
        id="projets"
        className="w-[90%] mx-auto py-16 flex flex-col space-y-16 text-secondary font-sporting-regular"
      >
        {/* Title */}
        <ZoomText delay={0.2}>
          <div>
            <h2 className=" text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold leading-none">
              Mes
              <br /> Projets
            </h2>
          </div>
        </ZoomText>
      </section>
      <section className="w-[100%] mx-auto  flex flex-col space-y-16 text-secondary font-sporting-regular">
        {/* Section Projets Web */}
        <div className="hidden md:block">
          <ProjectsWeb />
        </div>

        {/* Section Projets Mobile */}
        <div className="block md:hidden">
          <ProjectsMobile />
        </div>
      </section>
    </>
  );
};

export default Projects;
