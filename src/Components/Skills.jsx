import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiLayout,
  FiServer,
  FiTool,
} from "react-icons/fi";
import "./Skills.css";

const SKILLS = [
  {
    icon: FiCode,
    category: "Front-end",
    title: "Développement web",
    description:
      "Conception d’interfaces modernes et responsive en mettant en pratique les fondamentaux du développement web.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    icon: FiServer,
    category: "Back-end",
    title: "Développement serveur",
    description:
      "Mise en pratique des bases du développement côté serveur et compréhension du fonctionnement des API.",
    technologies: ["Node.js", "Express.js", "API REST"],
  },
  {
    icon: FiDatabase,
    category: "Données",
    title: "Gestion des données",
    description:
      "Apprentissage des principes de stockage, de manipulation et d’organisation des données dans les applications.",
    technologies: ["SQLite", "MySQL", "Prisma"],
  },
  {
    icon: FiLayout,
    category: "Interface",
    title: "UI & Responsive",
    description:
      "Création d’interfaces claires et adaptées aux différents écrans, avec une attention portée à l’expérience utilisateur.",
    technologies: ["Responsive Design", "UI Design", "Animations"],
  },
  {
    icon: FiGitBranch,
    category: "Versioning",
    title: "Git & GitHub",
    description:
      "Utilisation du versionnement pour organiser mes projets, suivre les évolutions et collaborer autour du code.",
    technologies: ["Git", "GitHub", "Branches"],
  },
  {
    icon: FiTool,
    category: "Outils",
    title: "Environnement de travail",
    description:
      "Utilisation d’outils adaptés à mon apprentissage pour développer, tester et améliorer progressivement mes projets.",
    technologies: ["VS Code", "Vite", "npm"],
  },
];

function Skills() {
  return (
    <div className="skills">
      {" "}
      <div className="container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {" "}
          <span className="section-eyebrow">Compétences</span>
          
          <h2 className="section-title">
            Des compétences que je développe par la pratique.
          </h2>
          <p className="section-subtitle">
            Ma formation à EIG Bénin et mes projets personnels me permettent de
            développer progressivement mes compétences techniques et de mieux
            comprendre les différentes étapes d’un projet web.
          </p>
        </motion.div>

        <div className="skills__grid">
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                className="skills__card card"
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -5 }}
              >
                <div className="skills__top">
                  <div className="skills__icon">
                    <Icon size={21} />
                  </div>

                  <span className="skills__category">{skill.category}</span>
                </div>

                <h3>{skill.title}</h3>

                <p>{skill.description}</p>

                <div className="skills__technologies">
                  {skill.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
