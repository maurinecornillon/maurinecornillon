import React from "react";

const Skills = () => {
  return (
    <>
      <div
        id="profile"
        className="flex flex-col justify-between items-end px-48 py-16 mt-28"
      >
        <div className="max-w-lg">
          <h1 className="text-[32px] mb-6  font-canela-bold">
            Full-Stack Development
          </h1>

          <p className="text-[16px] tracking-wide text-justify font-canela-regular mb-8">
            With expertise in JavaScript (React, Node.js) and databases like
            MongoDB, I create end-to-end web solutions. I’ve worked on building
            and redesigning platforms, handling both front-end and back-end
            development to deliver robust, scalable applications.
          </p>
        </div>

        <div className="max-w-lg">
          <h1 className="text-[32px] font-canela-bold mb-6">Web・UI Design</h1>

          <p className="text-[16px] tracking-wide  text-justify font-canela-regular mb-8">
            I design user-friendly interfaces focused on usability and
            aesthetics. Using tools like Figma, I collaborate closely on UI/UX
            design to create intuitive and engaging web experiences that align
            with business goals.
          </p>
        </div>

        <div className="max-w-lg">
          <h1 className="text-[32px] font-canela-bold mb-6">Tech・Tools</h1>

          <p className="text-[16px] tracking-wide text-justify  font-canela-regular mb-8">
            I am proficient in various development tools such as Docker for
            containerization, Git for version control, and CI/CD tools to ensure
            smooth development processes. I continuously explore new
            technologies to optimize and innovate in my projects.
          </p>
        </div>
      </div>
    </>
  );
};

export default Skills;
