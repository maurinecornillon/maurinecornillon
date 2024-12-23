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
      question: "Sur quels types de projets peux-tu nous accompagner ?",
      answer:
        "Que vous soyez en phase de lancement ou en pleine croissance, je m’adapte à vos besoins pour créer une solution unique et sur mesure. Qu'il s'agisse de sites vitrines pour donner de la visibilité à votre activité, de MVP pour tester et valider une idée rapidement, de landing pages percutantes pour capter l’attention et générer des conversions, de sites e-commerce pour booster vos ventes en ligne, ou encore de la création de maquettes prêtes à être intégrées.",
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
      question: "Quels sont mes tarifs ?",
      answer:
        "Mes tarifs varient en fonction de la complexité et des besoins spécifiques de votre projet. Pour vous donner une idée, vous pouvez utiliser mon simulateur de projet pour obtenir une première estimation. Ensemble, nous ajusterons la solution en fonction de vos objectifs et de votre budget.",
    },
  ];

  return (
    <div className="w-full  mx-auto ">
      <FAQ data={faqData} />
    </div>
  );
};

export default FaqBesoins;
