import React from "react";
import FAQ from "./Faq";

const FasProcess = () => {
  const faqData = [
    {
      question: "Comment se déroule la collaboration ?",
      answer:
        "Après un premier échange pour cerner vos besoins, je vous envoie une proposition détaillée avec devis et planning. Une fois validée, nous avançons étape par étape : design, développement, tests et mise en ligne. Tout au long du processus, je reste disponible pour échanger, intégrer vos retours et faire évoluer le projet dans la bonne direction.",
    },
    {
      question: "Quelles sont les étapes d’un projet ?",
      answer:
        "Les étapes d'un projet varient en fonction de sa nature et de sa complexité, mais en général, elles comprennent la phase de découverte et de brief, la recherche et l'analyse, la conception, le développement, les tests et la révision, puis enfin le déploiement et la maintenance. Chaque étape est soigneusement planifiée et exécutée pour assurer la qualité et la réussite du projet.",
    },
    {
      question: "Pourquoi un brief est-il important ?",
      answer:
        "Un brief est essentiel car il permet de poser les bases du projet : vos objectifs, vos attentes, et les contraintes éventuelles. Il m’aide à comprendre vos besoins en profondeur pour créer une solution sur mesure, alignée avec votre vision. Si vous n’avez pas encore de brief, je peux vous guider dans sa création lors d’un appel découverte.",
    },
    {
      question: "Puis-je suivre l’avancement de mon projet ?",
      answer:
        "Bien sûr ! Je partage régulièrement les étapes clés avec vous, afin que vous soyez impliqué(e)s et que chaque décision soit alignée avec votre vision.",
    },
    {
      question: "Quelles sont les conditions de paiement ?",
      answer:
        "Je demande généralement 50 % à l'avance pour lancer le projet, et 50 % à l’achèvement. Cependant, je comprends que les budgets peuvent être serrés, notamment si vous êtes en phase de démarrage. Je peux donc proposer des calendriers de paiement flexibles pour m’adapter à votre situation.",
    },
  ];

  return (
    <div className="w-full mx-auto ">
      <FAQ data={faqData} />
    </div>
  );
};

export default FasProcess;
