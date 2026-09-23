import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import "./Contact.css";

const CONTACT_INFO = [
  {
    icon: FiMail,
    label: "Email",
    value: "[togbadjamaurel@gmail.com](mailto:togbadjamaurel@gmail.com)",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=togbadjamaurel@gmail.com",
  },

  {
    icon: FiPhone,
    label: "Téléphone",
    value: "+229 01 61 65 54 62",
    href: "tel:+2290161655462",
  },
  {
    icon: FiMapPin,
    label: "Localisation",
    value: "Akpakpa, Avotrou",
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    if (isSent) {
      setIsSent(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailto = `mailto:votre-email@example.com?subject=${encodeURIComponent(
      form.subject || "Prise de contact depuis mon portfolio",
    )}&body=${encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`,
    )}`;

    window.location.href = mailto;
    setIsSent(true);
  };

  return (
    <div className="contact">
      {" "}
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {" "}
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">
            Une opportunité, un projet ou simplement envie d’échanger ?
          </h2>
          <p className="section-subtitle">
            Je suis disponible pour échanger autour du développement web, de mes
            projets ou d’une opportunité de stage académique.
          </p>
        </motion.div>

        <div className="contact__content">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact__intro">
              <span className="contact__label">Prenons contact</span>

              <h3>Échangeons autour de votre projet.</h3>

              <p>
                Vous pouvez me contacter directement ou utiliser le formulaire
                pour m’envoyer votre message. Je serai heureux d’échanger avec
                vous.
              </p>
            </div>

            <div className="contact__details">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;

                return item.href ? (
                  <a
                    href={item.href}
                    className="contact__detail"
                    key={item.label}
                  >
                    <span className="contact__detail-icon">
                      <Icon size={19} />
                    </span>

                    <span>
                      <small>{item.label}</small>
                      <strong>{item.value}</strong>
                    </span>
                  </a>
                ) : (
                  <div className="contact__detail" key={item.label}>
                    <span className="contact__detail-icon">
                      <Icon size={19} />
                    </span>

                    <span>
                      <small>{item.label}</small>
                      <strong>{item.value}</strong>
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            className="contact__form card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact__field">
              <label htmlFor="name">Nom complet</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Votre nom"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Adresse email</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="vous@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Sujet</label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Objet de votre message"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Votre message..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact__submit">
              <span>Envoyer le message</span>
              <FiSend size={18} />
            </button>

            {isSent && (
              <motion.div
                className="contact__success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FiCheckCircle size={17} />

                <span>
                  Votre application email va s’ouvrir pour préparer l’envoi du
                  message.
                </span>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
