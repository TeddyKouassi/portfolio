import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiGithub,
  FiLayers,
  FiMonitor,
  FiServer,
  FiTool,
} from "react-icons/fi";
import "./Tools.css";

const TOOLS = [
  {
    name: "HTML5",
    icon: FiCode,
  },
  {
    name: "CSS3",
    icon: FiMonitor,
  },
  {
    name: "JavaScript",
    icon: FiCode,
  },
  {
    name: "React",
    icon: FiLayers,
  },
  {
    name: "Node.js",
    icon: FiServer,
  },
  {
    name: "Express",
    icon: FiServer,
  },
  {
    name: "Git",
    icon: FiGitBranch,
  },
  {
    name: "GitHub",
    icon: FiGithub,
  },
  {
    name: "Vite",
    icon: FiTool,
  },
  {
    name: "SQLite",
    icon: FiDatabase,
  },
  {
    name: "MySQL",
    icon: FiDatabase,
  },
  {
    name: "Prisma",
    icon: FiDatabase,
  },
];

function Tools() {
  return (
    <div className="container">
      {" "}
      <div className="tools__header">
        {" "}
        <span className="section-eyebrow">Technologies</span>
        
        <h2 className="section-title">
          Les technologies que j’explore et que je mets en pratique.
        </h2>
        <p className="section-subtitle">
          Dans le cadre de ma formation à EIG Bénin et de mes projets
          personnels, j’utilise et j’explore différentes technologies pour
          développer progressivement mes compétences en développement web.
        </p>
      </div>
      <div className="tools__grid">
        {TOOLS.map((tool, index) => {
          const Icon = tool.icon;

          return (
            <motion.div
              key={tool.name}
              className="tools__item card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
              }}
              whileHover={{ y: -4 }}
            >
              <span className="tools__icon">
                <Icon size={24} />
              </span>

              <span className="tools__name">{tool.name}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Tools;
