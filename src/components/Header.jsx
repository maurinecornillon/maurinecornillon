import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import ZoomText from "../components/ZoomText";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  // Détecte si on entre ou sort du footer
  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inFooter = entry.isIntersecting;
        setIsFooterVisible(inFooter);
        if (inFooter) setHideHeader(true); // si dans footer, on cache
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  // Gère le scroll vers le haut pour réafficher le header
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Si on sort du footer et on scroll vers le haut → réaffiche
      if (!isFooterVisible && currentY < scrollY) {
        setHideHeader(false);
      }

      setScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, isFooterVisible]);
  return (
    <header
      className={`fixed z-50 top-0 left-0 w-full py-4 px-6 font-ITC bg-primary transition-transform duration-300 ${
        hideHeader ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="w-full flex justify-between items-center text-[8px] sm:text-[8px] md:text-[16px] tracking-wide leading-none">
        <ZoomText>
          <HashLink to="/#accueil" className="hover:text-red">
            [ maurine cornillon bourgeois ]
          </HashLink>
        </ZoomText>
        <ZoomText>
          <HashLink smooth to="/#services" className="hover:text-red">
            [ services ]
          </HashLink>
        </ZoomText>
        <ZoomText>
          <HashLink smooth to="/#projets" className="hover:text-red">
            [ projets ]
          </HashLink>
        </ZoomText>
        <ZoomText>
          <HashLink smooth to="/#faq" className="hover:text-red">
            [ f.a.q ]
          </HashLink>
        </ZoomText>
        <ZoomText>
          <a
            href="https://linktr.ee/maurinemona"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red"
          >
            [ contact ]
          </a>
        </ZoomText>
      </nav>
    </header>
  );
};

export default Header;
