import { motion } from "framer-motion";
import { FiMonitor, FiSmartphone, FiCode, FiDatabase } from "react-icons/fi";
import "./Services.css";

const SERVICES = [
  {
    icon: FiMonitor,
    title: "Création de sites web",
    description:
      "Conception de sites modernes et structurés pour présenter une activité, un service, un projet ou un profil professionnel.",
  },
  {
    icon: FiSmartphone,
    title: "Interfaces responsive",
    description:
      "Création d’interfaces adaptées aux ordinateurs, tablettes et smartphones, avec une attention portée à la lisibilité et à l’expérience utilisateur.",
  },
  {
    icon: FiCode,
    title: "Applications React",
    description:
      "Développement d’interfaces interactives avec React et JavaScript pour transformer une idée ou un besoin en application web fonctionnelle.",
  },
  {
    icon: FiDatabase,
    title: "Fonctionnalités web",
    description:
      "Mise en pratique de fonctionnalités comme les formulaires, les paniers, les API REST, la gestion des données et les interactions dynamiques.",
  },
];

function Services() {
  return (
    <div className="services">
      {" "}
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {" "}
          <span className="section-eyebrow">Ce que je peux réaliser</span>
          
          <h2 className="section-title">
            Des compétences que je peux mettre en pratique.
          </h2>
          <p className="section-subtitle">
            À travers ma formation et mes projets personnels, je développe
            progressivement ma capacité à concevoir des interfaces et des
            fonctionnalités web répondant à différents besoins.
          </p>
        </motion.div>

        <div className="services__grid">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="services__card card"
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
              >
                <div className="services__icon">
                  <Icon size={22} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className="services__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
