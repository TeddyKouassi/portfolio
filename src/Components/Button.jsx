// Button.jsx — composant de bouton unique et réutilisable (cahier des charges §11).
// Il gère 3 comportements différents selon les props reçues, pour éviter de
// créer plusieurs composants de boutons similaires :
//   1) lien interne (prop "to")       -> ancre vers une section de la page
//   2) lien de fichier (prop "href")  -> téléchargement ou ouverture du CV
//   3) bouton classique (par défaut)  -> déclenche "onClick" (ex: formulaire)
import { motion } from 'framer-motion'

function Button({
  text,                 // texte affiché dans le bouton
  to,                   // ancre interne, ex: "#projets"
  href,                 // chemin vers un fichier (ex: le CV en PDF)
  download = false,     // si vrai, le clic télécharge le fichier au lieu de l'ouvrir
  onClick,              // fonction appelée pour un bouton "action personnalisée"
  type = 'button',      // type HTML natif du bouton ("button" ou "submit")
  variant = 'primary',  // variante visuelle : "primary" (orange) ou "secondary" (contour)
  icon: Icon,           // composant d'icône React Icons, optionnel
}) {
  // Classe CSS commune, combinée à la variante choisie (voir index.css)
  const className = `btn btn-${variant}`

  // Petite animation de survol/clic partagée par toutes les variantes du bouton,
  // cohérente avec la consigne "animations modernes mais maîtrisées" (§2 et §20)
  const motionProps = {
    whileHover: { y: -2 }, // le bouton se soulève légèrement au survol
    whileTap: { scale: 0.96 }, // léger effet d'enfoncement au clic
    transition: { duration: 0.15 },
  }

  // Cas 1 : navigation interne par ancre (ex: CTA "Voir mes projets")
  if (to) {
    return (
      <motion.a href={to} className={className} {...motionProps}>
        <span>{text}</span>
        {Icon && <Icon aria-hidden="true" />}
      </motion.a>
    )
  }

  // Cas 2 : lien vers un fichier (téléchargement du CV ou consultation dans un nouvel onglet)
  if (href) {
    return (
      <motion.a
        href={href}
        // "download" déclenche le téléchargement direct du fichier (§16)
        download={download}
        // sans téléchargement, on ouvre le PDF dans un nouvel onglet en sécurité
        target={download ? undefined : '_blank'}
        rel={download ? undefined : 'noopener noreferrer'}
        className={className}
        {...motionProps}
      >
        <span>{text}</span>
        {Icon && <Icon aria-hidden="true" />}
      </motion.a>
    )
  }

  // Cas 3 (par défaut) : bouton classique, utile pour le formulaire de contact
  return (
    <motion.button type={type} onClick={onClick} className={className} {...motionProps}>
      <span>{text}</span>
      {Icon && <Icon aria-hidden="true" />}
    </motion.button>
  )
}

export default Button
