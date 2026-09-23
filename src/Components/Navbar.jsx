import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Parcours", href: "#parcours" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (event, href) => {
    event.preventDefault();
    setIsMenuOpen(false);

    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
      });

      window.history.pushState(null, "", href);
    }, 260);
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {" "}
      <div className="container navbar__inner">
        <motion.a
          href="#accueil"
          className="navbar__logo"
          whileHover={{ color: "var(--color-orange)" }}
          transition={{ duration: 0.2 }}
        >
          Kouassi Maurel
        </motion.a>

        <ul className="navbar__links">
          {NAV_LINKS.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: 0.15 + index * 0.05,
              }}
            >
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="navbar-mobile-menu"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMenuOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            id="navbar-mobile-menu"
            className="navbar__mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
          >
            {NAV_LINKS.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.04,
                }}
              >
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={(event) => handleLinkClick(event, link.href)}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
