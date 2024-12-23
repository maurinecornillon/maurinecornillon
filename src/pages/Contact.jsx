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
      </main>
    </>
  );
};

export default Contact;
