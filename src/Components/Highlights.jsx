import { motion } from "framer-motion";
import { FiBriefcase, FiCode, FiLayers, FiTrendingUp } from "react-icons/fi";
import "./Highlights.css";

const HIGHLIGHTS = [
  {
    value: "04+",
    label: "Projets pratiques réalisés",
    icon: FiBriefcase,
  },
  {
    value: "10+",
    label: "Technologies explorées",
    icon: FiCode,
  },
  {
    value: "01",
    label: "Formation en développement web",
    icon: FiLayers,
  },
  {
    value: "100%",
    label: "Engagement dans mon apprentissage",
    icon: FiTrendingUp,
  },
];

function Highlights() {
  return (
    <div className="highlights">
      {" "}
      <div className="container">
        {" "}
        <div className="highlights__grid">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.label}
                className="highlights__item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -3 }}
              >
                <div className="highlights__icon">
                  <Icon size={18} />
                </div>

                <div className="highlights__content">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Highlights;
