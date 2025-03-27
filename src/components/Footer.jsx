import React from "react";
import Logo from "../assets/img/logo/LOGO.svg";
import ZoomText from "../components/ZoomText";

const Footer = () => {
  return (
    <>
      <section
        id="footer"
        className=" w-full px-6 flex items-center justify-center overflow-hidden h-full "
      >
        <img src={Logo} alt="Logo Maurine Cornillon" className="pt-[42px]" />
      </section>
      <footer className=" z-10 top-0 left-0 w-full  py-4 px-6 font-ITC bg-primary">
        <nav className="w-full flex justify-between items-center text-[8px] sm:text-[8px] md:text-[16px] tracking-wide leading-none">
          <ZoomText>
            <span className="hover:text-red">[ © m.c.b. 2025 ]</span>
          </ZoomText>

          <ZoomText>
            <a
              href="mailto:maurinecornillon@gmail.com"
              rel="noopener noreferrer"
              className="hover:text-red"
            >
              [ maurinecornillon@gmail.com ]
            </a>
          </ZoomText>

          <ZoomText>
            <a
              href="https://www.linkedin.com/in/maurine-cornillon-bourgeois-04629813b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red"
            >
              [ linkedin ]
            </a>
          </ZoomText>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
