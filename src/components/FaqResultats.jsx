import React from "react";
import FAQ from "./Faq";

const FaqResultats = () => {
  const faqData = [
    {
      question: "Combien de temps dure un projet ?",
      answer:
        " La durée d'un projet peut varier en fonction de sa complexité, de sa taille et vos besoins spécifiques. Lors de nos échanges, nous établissons un calendrier réaliste adapté à vos objectifs. Pour les packs nécessitant uniquement la création de maquettes, les délais sont généralement de 1 à 2 semaines. Pour des projets incluant développement et intégration, les délais varient entre 2 et 6 semaines, selon les fonctionnalités demandées et le nombre de pages. Ces délais peuvent varier en fonction de la réactivité du client et des ajustements demandés.",
    },
    {
      question: "Quelles sont les technologies utilisées ?",
      answer:
        "J’utilise des technologies adaptées à chaque projet, comme HTML, CSS, JavaScript et des frameworks comme React. Je peux également travailler avec des CMS comme WordPress pour des besoins spécifiques. Tout dépend de ce qui est le mieux pour votre projet.",
    },
    {
      question: "Mon site sera-t-il responsive ?",
      answer:
        "Absolument ! Tous les sites que je développe sont optimisés pour offrir une expérience fluide sur tous les appareils, que ce soit mobile, tablette ou ordinateur.",
    },
    {
      question: "Un support est-il proposé après la livraison ?",
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
