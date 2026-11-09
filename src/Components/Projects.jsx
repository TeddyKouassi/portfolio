import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "./Projects.css";

const PROJECTS = [
  {
    title: "Mello’shops",
    category: "E-commerce Full Stack",
    description:
      "Conception et développement d’une boutique en ligne spécialisée dans la vente de parfums pour hommes et femmes, avec catalogue dynamique, panier et gestion des commandes.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Three.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    link: "https://github.com/TeddyKouassi/melloshops-frontend",
    backendLink: "https://github.com/TeddyKouassi/melloshops-backend",
    demoLink: "https://melloshops-frontend.vercel.app/",
    linkLabel: "Frontend",
    backendLinkLabel: "Backend",
    icon: FiGithub,
  },
  {
    title: "PopCorn",
    category: "E-commerce",
    description:
      "Développement d’un site e-commerce moderne pour présenter des produits, gérer un panier et préparer une commande en ligne.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://github.com/TeddyKouassi/popcorn",
    demoLink: "https://popcorn-tau-eosin.vercel.app/",
    linkLabel: "Voir sur GitHub",
    icon: FiGithub,
  },
  {
    title: "Meal Prep",
    category: "Application web",
    description:
      "Application web dédiée à la préparation et à l’organisation des repas, avec une interface pensée pour faciliter la consultation et la gestion des informations.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://github.com/TeddyKouassi/MEALPREP",
    linkLabel: "Voir sur GitHub",
    icon: FiGithub,
  },
  {
    title: "MANO APPLE",
    category: "E-commerce",
    description:
      "Conception d’une interface e-commerce dédiée à la présentation de produits électroniques avec une expérience utilisateur moderne et responsive.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://github.com/TeddyKouassi/MANO-APPLE",
    linkLabel: "Voir sur GitHub",
    icon: FiGithub,
  },
  {
    title: "Simulateur automobile",
    category: "Application web",
    description:
      "Développement d’une application web permettant d’explorer et de manipuler des données automobiles à travers une interface dynamique.",
    technologies: ["React", "JavaScript", "API REST"],
    link: "https://github.com/TeddyKouassi/simulator",
    demoLink: "https://jolly-palmier-f454fd.netlify.app/",
    linkLabel: "Voir sur GitHub",
    icon: FiGithub,
  },
];

function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Projets</span>

          <h2 className="section-title">
            Des projets pour apprendre en construisant.
          </h2>

          <p className="section-subtitle">
            Une sélection de projets réalisés dans le cadre de ma formation et
            de mon apprentissage personnel. Chaque projet me permet de mettre
            en pratique mes connaissances, d’explorer de nouvelles technologies
            et de progresser dans ma manière de développer.
          </p>
        </motion.div>

        <div className="projects__grid">
          {PROJECTS.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className="projects__card card"
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
              >
                {project.demoLink && (
                  <div className="projects__preview">
                    <iframe
                      src={project.demoLink}
                      title={`Aperçu de ${project.title}`}
                      loading="lazy"
                      className="projects__iframe"
                    />
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__preview-link"
                      aria-label={`Ouvrir ${project.title} dans un nouvel onglet`}
                    >
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                )}

                <div className="projects__top">
                  <span className="projects__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="projects__category">
                    {project.category}
                  </span>
                </div>

                <div className="projects__content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="projects__technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="projects__footer">
                  <div className="projects__links">
                    {project.link && (
                      <a
                        href={project.link}
                        className="projects__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{project.linkLabel}</span>
                        <Icon size={17} />
                      </a>
                    )}

                    {project.backendLink && (
                      <a
                        href={project.backendLink}
                        className="projects__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{project.backendLinkLabel}</span>
                        <Icon size={17} />
                      </a>
                    )}

                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        className="projects__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Voir la démo</span>
                        <FiExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;