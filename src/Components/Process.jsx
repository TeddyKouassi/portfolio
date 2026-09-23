import { motion } from "framer-motion";
import { FiSearch, FiLayout, FiCode, FiCheckCircle } from "react-icons/fi";
import "./Process.css";

const STEPS = [
  {
    number: "01",
    icon: FiSearch,
    title: "Comprendre",
    description:
      "Identifier le besoin, les objectifs du projet et les fonctionnalités nécessaires avant de commencer le développement.",
  },
  {
    number: "02",
    icon: FiLayout,
    title: "Concevoir",
    description:
      "Organiser la structure du projet et réfléchir à une interface claire, responsive et adaptée aux utilisateurs.",
  },
  {
    number: "03",
    icon: FiCode,
    title: "Développer",
    description:
      "Transformer la conception en une interface fonctionnelle en utilisant les technologies adaptées au projet.",
  },
  {
    number: "04",
    icon: FiCheckCircle,
    title: "Tester & améliorer",
    description:
      "Tester les fonctionnalités, identifier les problèmes, corriger les erreurs et améliorer progressivement le résultat.",
  },
];

function Process() {
  return (
    <div className="process">
      {" "}
      <div className="container">
        <motion.div
          className="process__header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {" "}
          <span className="section-eyebrow">Ma façon de travailler</span>
          
          <h2 className="section-title">
            De l’idée à une réalisation concrète.
          </h2>
          <p className="section-subtitle">
            Pour chaque projet, j’essaie de suivre une démarche structurée qui
            me permet de mieux comprendre le besoin, développer progressivement
            la solution et apprendre à chaque étape.
          </p>
        </motion.div>

        <div className="process__steps">
          <div className="process__line" />

          {STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                className="process__step"
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="process__number">{step.number}</div>

                <div className="process__icon">
                  <Icon size={21} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Process;
