import React, { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".skills-section");
      const triggerHeight = window.innerHeight / 1.4;

      sections.forEach((section) => {
        const sectionPosition = section.getBoundingClientRect().top;

        if (sectionPosition < triggerHeight) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full m-0 p-4 sm:p-10 mx-auto">
      {/* Section 1 */}
      <div className="skills-section opacity-0 transition-opacity duration-700 ease-out transform translate-y-10">
        <div className="relative pt-20 pb-10 flex items-start mb-16 sm:mb-20">
          <div className="w-full">
            <h2 className="text-[28px] sm:text-[40px] lg:text-[120px] font-sporting-bold mb-2">
              WEB • DEVELOPMENT
            </h2>
            <p className="w-full text-[14px] sm:text-[16px] lg:text-[18px] font-sporting-regular">
              Skilled in JavaScript (React, Node.js) and MongoDB, I develop
              full-stack web solutions, building and redesigning platforms for
              scalable, robust applications.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="skills-section opacity-0 transition-opacity duration-700 ease-out transform translate-y-10">
        <div className="relative pt-20 pb-10 flex items-start mb-16 sm:mb-20">
          <div className="w-full text-right">
            <h2 className="text-[28px] sm:text-[40px] lg:text-[120px] font-sporting-bold mb-2">
              WEB •<br />
              UI DESIGN
            </h2>
            <p className="text-right w-full text-[14px] sm:text-[16px] lg:text-[18px] font-sporting-regular">
              I design user-friendly, aesthetic interfaces, using Figma to
              create intuitive web experiences aligned with business goals
              through close UI/UX collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="skills-section opacity-0 transition-opacity duration-700 ease-out transform translate-y-10">
        <div className="relative pt-20 pb-10 flex items-start sm:mb-20">
          <div className="w-full">
            <h2 className="text-[28px] sm:text-[40px] lg:text-[120px] font-sporting-bold mb-2">
              WEB •<br /> DEVOPS
            </h2>
            <p className="w-full text-[14px] sm:text-[16px] lg:text-[18px] font-sporting-regular">
              Skilled in Docker, Git, and CI/CD tools, I streamline development
              processes and continuously explore new technologies to optimize
              projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
