import React from "react";
import FAQ from "./Faq";

const FaqBesoins = () => {
  const faqData = [
    {
      question: "Pourquoi devrais-je investir dans un site web sur-mesure ?",
      answer:
        "Un site web sur-mesure n’est pas qu’un simple outil, c’est l’extension de votre marque. Il reflète votre identité, capte l’attention de votre audience et offre une expérience unique qui vous démarque de la concurrence. Contrairement aux solutions standardisées, un site sur-mesure est conçu spécifiquement pour répondre à vos objectifs et maximiser l’impact de votre présence en ligne. C’est un investissement stratégique qui transforme vos visiteurs en clients fidèles et soutient votre croissance sur le long terme.",
    },
    {
      question: "Quels types de projets peuvent être réalisés ? ",
      answer:
        "Que vous soyez en phase de lancement ou en pleine évolution, je m’adapte à vos besoins pour créer une solution unique et sur mesure. Cela peut aller du site vitrine pour présenter votre activité, au MVP pour tester une idée rapidement, en passant par des landing pages percutantes, des sites e-commerce, des portfolios, des plateformes pour votre marque ou encore la création de maquettes prêtes à être intégrées.",
    },

    {
      question: "Dois-je fournir quelque chose avant de commencer ?",
      answer:
        "Pour démarrer, il est idéal de fournir : Vos objectifs et vos attentes, une charte graphique ou des éléments visuels existants (si vous en avez), des contenus comme des textes, images ou vidéos. Ne vous inquiétez pas si vous n’avez pas tout, je peux aussi vous accompagner pour structurer ces éléments.",
    },
    {
      question:
        "J’ai déjà une identité visuelle, peux-tu quand même créer ou optimiser mon site ?",
      answer:
        "Absolument ! Je peux m’appuyer sur votre identité visuelle pour concevoir un site qui la reflète parfaitement. Ensemble, nous veillerons à ce que votre site renforce votre image et transmette vos valeurs.",
    },
    {
      question: "Quels sont les tarifs ?",
      answer:
        "Mes tarifs varient en fonction de la complexité et des besoins spécifiques de votre projet. Lors de notre premier échange, je prends le temps de comprendre vos objectifs pour vous proposer une estimation sur-mesure, adaptée à vos priorités et à votre budget.",
    },
  ];

  return (
    <div className="w-full  mx-auto ">
      <FAQ data={faqData} />
    </div>
  );
};

export default FaqBesoins;
