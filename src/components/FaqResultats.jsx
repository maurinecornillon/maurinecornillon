import React from "react";
import FAQ from "./Faq";

const FaqResultats = () => {
  const faqData = [
    {
      question: "Combien de temps dure un projet ?",
      answer:
        "La durée dépend de la complexité du projet. En moyenne, un site vitrine ou une landing page prend 1 à 2 semaines, tandis qu’un MVP ou un e-commerce plus complexe peut nécessiter 4 à 8 semaines. Lors de notre premier échange, je vous propose un calendrier réaliste adapté à vos besoins.",
    },
    {
      question: "Quelles technologies utilises-tu ?",
      answer:
        "J’utilise des technologies adaptées à chaque projet, comme HTML, CSS, JavaScript et des frameworks comme React. Je peux également travailler avec des CMS comme WordPress pour des besoins spécifiques. Tout dépend de ce qui est le mieux pour votre projet.",
    },
    {
      question: "Mon site sera-t-il responsive ?",
      answer:
        "Absolument ! Tous les sites que je développe sont optimisés pour offrir une expérience fluide sur tous les appareils, que ce soit mobile, tablette ou ordinateur.",
    },
    {
      question: "Proposes-tu un support après la livraison ?",
      answer:
        "Oui, je reste disponible pour répondre à vos questions ou effectuer des ajustements mineurs après la mise en ligne.",
    },
  ];

  return (
    <div className="w-full  mx-auto ">
      <FAQ data={faqData} />
    </div>
  );
};

export default FaqResultats;
