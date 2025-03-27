import React from "react";
import FAQ from "./Faq";

const FaqResultats = () => {
  const faqData = [
    {
      question: "Combien de temps dure un projet ?",
      answer:
        " La durée d'un projet peut varier en fonction de sa complexité, de sa taille et vos besoins spécifiques. Lors de nos échanges, nous établissons un calendrier réaliste adapté à vos objectifs. Les délais peuvent varier en fonction de la réactivité du client et des ajustements demandés.",
    },
    {
      question: "Quelles sont les technologies utilisées ?",
      answer:
        "Je développe principalement des sites en full-stack avec des technologies comme React, Next.js, Node.js ou MongoDB, mais je peux aussi utiliser des solutions CMS comme WordPress ou Webflow lorsque c’est plus adapté. Chaque projet est unique : je choisis les outils en fonction de vos besoins, de vos objectifs et de votre budget.",
    },
    {
      question: "Mon site sera-t-il responsive ?",
      answer:
        "Absolument ! Tous les sites que je développe sont optimisés pour offrir une expérience fluide sur tous les appareils, que ce soit mobile, tablette ou ordinateur.",
    },
    {
      question: "Un support est-il proposé après la livraison ?",
      answer:
        "Oui, je reste disponible après la mise en ligne pour répondre à vos questions ou effectuer des ajustements mineurs. Une documentation complète vous est également remise, avec toutes les informations nécessaires pour comprendre et gérer votre site. Si besoin, un accompagnement plus poussé ou un forfait de maintenance peut être envisagé.",
    },
  ];

  return (
    <div className="w-full  mx-auto ">
      <FAQ data={faqData} />
    </div>
  );
};

export default FaqResultats;
