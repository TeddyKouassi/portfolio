import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiTrendingUp, FiTarget } from "react-icons/fi";
import "./About.css";

const ABOUT_ITEMS = [
  {
    icon: FiCode,
    title: "Développement web",
    text: "Je développe progressivement mes compétences en création de sites et d'applications web modernes, avec une attention particulière portée à la structure, l'interface et l'expérience utilisateur.",
  },
  {
    icon: FiBookOpen,
    title: "Formation à EIG Bénin",
    text: "Ma formation me permet d'acquérir des bases solides en développement web et de mettre régulièrement mes connaissances en pratique à travers différents projets.",
  },
  {
    icon: FiTrendingUp,
    title: "Progression",
    text: "Chaque projet représente une nouvelle occasion d'apprendre, de résoudre des problèmes et d'améliorer progressivement mes compétences techniques.",
  },
  {
    icon: FiTarget,
    title: "Objectif professionnel",
    text: "Je recherche un stage académique afin de découvrir davantage le milieu professionnel, mettre mes compétences en pratique et acquérir une première expérience concrète.",
  },
];

function About() {
  return (
    <div className="about">
      {" "}
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {" "}
          <span className="section-eyebrow">À propos</span>
          
          <h2 className="section-title">
            Un étudiant en formation, orienté vers la pratique.
          </h2>
          <p className="section-subtitle">
            Mon parcours a commencé dans le domaine de l'économie et de la
            gestion, avant de m'orienter progressivement vers le développement
            web. Actuellement en formation à EIG Bénin, je développe mes
            compétences dans la conception de sites et d'applications web
            modernes. À travers ma formation et mes projets personnels, je
            cherche à transformer mes connaissances en compétences concrètes et
            à progresser continuellement.
          </p>
        </motion.div>

        <div className="about__content">
          <motion.div
            className="about__text card"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Mon parcours</h3>

            <p>
              Titulaire d'une Licence en Économie et Gestion des Exploitations
              Agricoles, j'ai progressivement orienté mon parcours vers le
              développement web, un domaine qui m'intéresse pour sa dimension
              technique, créative et concrète.
            </p>

            <p>
              Je suis actuellement en formation en développement web à EIG
              Bénin, où je développe mes connaissances en conception
              d'interfaces, développement d'applications web, gestion des
              données et création de fonctionnalités dynamiques.
            </p>

            <p>
              Mes projets personnels me permettent de mettre en pratique ce que
              j'apprends, d'expérimenter différentes technologies et de
              développer progressivement mon autonomie.
            </p>

            <p>
              Mon objectif actuel est de trouver un stage académique afin de
              rejoindre un environnement professionnel, apprendre auprès de
              personnes expérimentées et contribuer à des projets concrets.
            </p>

            <div className="about__signature">
              <span>Kouassi Maurel </span>
              <small>Étudiant en développement web · EIG Bénin</small>
            </div>
          </motion.div>

          <div className="about__grid">
            {ABOUT_ITEMS.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="about__item card"
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                >
                  <div className="about__item-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
