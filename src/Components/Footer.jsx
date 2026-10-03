import { FiGithub, FiMail, FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";
import "./Footer.css";

const FOOTER_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Projets", href: "#projets" },
  { label: "Parcours", href: "#parcours" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__identity">
            <a href="#accueil" className="footer__logo">
              Maurel
            </a>

            <p>
              Étudiant en développement web, passionné par la création
              d’expériences numériques modernes.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Navigation du pied de page">
            {FOOTER_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            <a
              href="https://github.com/TeddyKouassi"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub size={19} />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=togbadjamaurel@gmail.com"
              aria-label="Envoyer un email"
              target="_blank"
              rel="noreferrer"
            >
              <FiMail size={19} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Kouassi Maurel</span>

          <span>Développement web</span>

          <motion.button
            type="button"
            className="footer__top-button"
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Retour en haut"
          >
            <FiArrowUp size={17} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
