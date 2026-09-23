import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiBriefcase, FiMapPin } from "react-icons/fi";
import "./Journey.css";

const JOURNEY = [
  {
    period: "2021 — 2022",
    title: "Licence en Économie et Gestion des Exploitations Agricoles",
    place: "Université d’Abomey-Calavi",
    description:
      "Formation universitaire ayant développé mes capacités d’analyse, de réflexion et de gestion, avec une mention bien obtenue à l’issue du parcours.",
    icon: FiBookOpen,
  },
  {
    period: "Formation actuelle",
    title: "Développement web",
    place: "EIG Bénin",
    description:
      "Formation en développement web à travers laquelle je développe progressivement mes compétences en HTML, CSS, JavaScript, React, Node.js, API REST et bases de données.",
    icon: FiCode,
  },
  {
    period: "Projets pratiques",
    title: "Mise en pratique des compétences",
    place: "Projets personnels",
    description:
      "Réalisation de projets web pour mettre en pratique les connaissances acquises, expérimenter différentes technologies et développer progressivement mon autonomie.",
    icon: FiBriefcase,
  },
  {
    period: "Objectif actuel",
    title: "Recherche d’un stage académique",
    place: "Bénin",
    description:
      "Je souhaite intégrer une structure professionnelle afin de mettre mes compétences en pratique, apprendre auprès d’une équipe et acquérir une première expérience concrète dans le développement web.",
    icon: FiMapPin,
  },
];

function Journey() {
  return (
    <div className="journey">
      {" "}
      <div className="container">
        <motion.div
          className="journey__header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {" "}
          <span className="section-eyebrow">Parcours</span>
          
          <h2 className="section-title">
            Un parcours qui évolue vers le développement web.
          </h2>
          <p className="section-subtitle">
            De mon parcours universitaire à ma formation actuelle à EIG Bénin,
            je construis progressivement mon orientation vers le développement
            web à travers l’apprentissage et la pratique.
          </p>
        </motion.div>

        <div className="journey__timeline">
          <div className="journey__line" />

          {JOURNEY.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="journey__item"
                key={item.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >
                <div className="journey__marker">
                  <Icon size={18} />
                </div>

                <div className="journey__card card">
                  <span className="journey__period">{item.period}</span>

                  <h3>{item.title}</h3>

                  <div className="journey__place">
                    <FiMapPin size={14} />
                    <span>{item.place}</span>
                  </div>

                  <p>{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Journey;
