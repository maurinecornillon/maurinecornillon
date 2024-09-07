import React from "react";

import pdp2 from "../assets/img/pdp2.jpeg";
import ordi from "../assets/img/ordi2.jpeg";

const Profile = () => {
  return (
    <>
      <div className="relative h-screen flex px-48 justify-center items-center">
        {/* Left Image */}
        <div className="absolute top-[5%] left-48 w-48 h-64">
          <img
            src={ordi}
            alt="Person 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Image */}
        <div className="relative w-80 h-140">
          <img
            src={pdp2}
            alt="Center Person"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        {/* <div className="absolute bottom-[5%] right-48 w-40 h-50">
          <img src={pdp2} alt="Dog" className="w-full h-full object-cover" />
        </div> */}

        <div
          id="profile"
          className="flex justify-between items-start pl-10 mt-36  "
        >
          {/* Texte sur la gauche */}
          <div className="max-w-lg">
            <h1 className="text-[32px] font-canela-bold">
              Maurine Cornillon Bourgeois
            </h1>
            <h2 className="text-[24px] font-canela-light-italic mb-8">
              Web Developer
            </h2>
            <p className="text-[16px] w-[80%] tracking-wide tracking-wide font-canela-regular mb-8">
              I'm a Full-Stack JavaScript Developer with experience in helping
              startups and businesses build scalable web platforms. Whether
              you're looking to develop a Minimum Viable Product (MVP), enhance
              your current system, or create a user-friendly interface, I can
              assist you. Skilled in JavaScript (React, Node.js), Docker,
              MongoDB, and UI/UX design. I handle full project management from
              concept to delivery.
              <p>
                Clear and regular communication is key to my work, so let's
                collaborate closely!
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
