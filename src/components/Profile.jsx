import React, { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    const handleScroll = () => {
      const words = document.querySelectorAll(".word");
      const triggerHeight = window.innerHeight / 1.4;

      words.forEach((word) => {
        const wordPosition = word.getBoundingClientRect().top;

        if (wordPosition < triggerHeight) {
          word.classList.add("active");
        } else {
          word.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const wordsArray1 = [
    { word: "I", specialFont: false },
    { word: "am", specialFont: false },
    { word: "Mona", specialFont: false },
    { word: "-", specialFont: false },
    { word: "a", specialFont: false },
    { word: "French", specialFont: false },
    { word: "web", specialFont: true },
    { word: "developer", specialFont: true },
    { word: "with", specialFont: false },
    { word: "experience", specialFont: false },
    { word: "in", specialFont: false },
    { word: "supporting", specialFont: false },
    { word: "startups", specialFont: false },
    { word: "and", specialFont: false },
    { word: "companies", specialFont: false },
    { word: "to", specialFont: false },
    { word: "create", specialFont: false },
    { word: "scalable", specialFont: false },
    { word: "web", specialFont: false },
    { word: "platforms.", specialFont: false },
  ];

  const wordsArray2 = [
    { word: "Whether", specialFont: false },
    { word: "you", specialFont: false },
    { word: "need", specialFont: false },
    { word: "to", specialFont: false },
    { word: "develop", specialFont: false },
    { word: "an", specialFont: false },
    { word: "MVP,", specialFont: false },
    { word: "upgrade", specialFont: false },
    { word: "your", specialFont: false },
    { word: "system,", specialFont: false },
    { word: "or", specialFont: false },
    { word: "build", specialFont: false },
    { word: "a", specialFont: false },
    { word: "user-friendly", specialFont: false },
    { word: "interface,", specialFont: false },
    { word: "I", specialFont: false },
    { word: "can", specialFont: false },
    { word: "assist", specialFont: true },
    { word: "you", specialFont: true },
    { word: "at", specialFont: false },
    { word: "every", specialFont: false },
    { word: "stage.", specialFont: false },
  ];

  const wordsArray3 = [
    { word: "I'm", specialFont: false },
    { word: "committed", specialFont: false },
    { word: "to", specialFont: false },
    { word: "clear", specialFont: true },
    { word: "and", specialFont: false },
    { word: "regular", specialFont: false },
    { word: "communication", specialFont: true },
    { word: "throughout", specialFont: false },
    { word: "the", specialFont: false },
    { word: "project", specialFont: false },
    { word: "to", specialFont: false },
    { word: "ensure", specialFont: false },
    { word: "your", specialFont: false },
    { word: "satisfaction.", specialFont: false },
  ];

  return (
    <div className="flex">
      <main className="max-w-[90%] flex flex-col items-start gap-10 sm:gap-20 flex-grow leading-none m-0 p-5 sm:p-10">
        {/* Premier paragraphe */}
        <div className="paragraph tracking-tightest leading-[2] sm:leading-[4.2]">
          {wordsArray1.map((item, index) => (
            <span
              key={index}
              className={`word ${
                item.specialFont
                  ? "font-canela-light-italic text-[30px] sm:text-[50px] tracking-wide"
                  : "font-sporting-regular tracking-normal text-[25px] sm:text-[40px]"
              }`}
            >
              {item.word}&nbsp;
            </span>
          ))}
        </div>

        {/* Deuxième paragraphe */}
        <div className="paragraph tracking-tightest leading-[2] sm:leading-[4.2]">
          {wordsArray2.map((item, index) => (
            <span
              key={index}
              className={`word ${
                item.specialFont
                  ? "font-canela-light-italic tracking-wide text-[30px] sm:text-[50px]"
                  : "font-sporting-regular tracking-normal text-[25px] sm:text-[40px]"
              }`}
            >
              {item.word}&nbsp;
            </span>
          ))}
        </div>

        {/* Troisième paragraphe */}
        <div className="paragraph tracking-tightest leading-[2] sm:leading-[4.2]">
          {wordsArray3.map((item, index) => (
            <span
              key={index}
              className={`word ${
                item.specialFont
                  ? "font-canela-light-italic tracking-wide text-[30px] sm:text-[50px]"
                  : "font-sporting-regular tracking-normal text-[25px] sm:text-[40px]"
              }`}
            >
              {item.word}&nbsp;
            </span>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Profile;
