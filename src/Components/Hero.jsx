import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiGithub } from "react-icons/fi";
import "./Hero.css";
import cv from "../assets/CV de Maurel TOGBADJA.pdf";

function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projets")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      {" "}
      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Étudiant en développement web — EIG Bénin
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Je transforme des idées en <span>expériences web modernes.</span>
          </motion.h1>
          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Je suis Maurel TOGBADJA, étudiant en formation en développement web
            à EIG Bénin. Je développe progressivement mes compétences dans la
            création de sites et d'applications web modernes, avec une approche
            orientée vers la pratique et la résolution de problèmes. À travers
            mes projets personnels et ma formation, je cherche à transformer mes
            connaissances en compétences concrètes et à améliorer
            continuellement ma manière de travailler. Actuellement à la
            recherche d'un stage académique, je souhaite mettre mes compétences
            en pratique, découvrir davantage le fonctionnement d'une équipe
            professionnelle et continuer à apprendre au contact de projets
            concrets.
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <button
              type="button"
              className="hero__button hero__button--primary"
              onClick={scrollToProjects}
            >
              <span>Voir mes projets</span>
              <FiArrowDown size={18} />
            </button>

            <a
              href={cv}
              download="CV de Maurel TOGBADJA.pdf"
              className="hero__button hero__button--secondary"
            >
              <span>Télécharger mon CV</span>
              <FiDownload size={18} />
            </a>
          </motion.div>
          <motion.div
            className="hero__github"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <FiGithub size={18} />
            <span>
              En formation à EIG Bénin · Recherche de stage académique
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="hero__visual-glow" />

          <motion.div
            className="hero__profile-card"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="hero__profile-placeholder">
              <span>KM</span>
            </div>

            <div className="hero__profile-info">
              <strong>Kouassi Maurel</strong>
              <span>Étudiant en développement web</span>
            </div>
          </motion.div>

          <div className="hero__code-card">
            <span className="hero__code-line">
              <i>const</i> developer = {"{"}
            </span>
            <span className="hero__code-line hero__code-line--indent">
              passion: <b>"web"</b>,
            </span>
            <span className="hero__code-line hero__code-line--indent">
              creativity: <b>true</b>,
            </span>
            <span className="hero__code-line hero__code-line--indent">
              learning: <b>"always"</b>
            </span>
            <span className="hero__code-line">{"}"}</span>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <span>Découvrir mes projets</span>
        <FiArrowDown size={16} />
      </motion.div>
    </section>
  );
}

export default Hero;
