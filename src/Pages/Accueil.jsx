import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Highlights from "../Components/Highlights";
import Skills from "../Components/Skills";
import Tools from "../Components/Tools";
import Projects from "../Components/Projects";
import Journey from "../Components/Journey";
import Services from "../Components/Services";
import Process from "../Components/Process";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Accueil() {
  return (
    <>
      {" "}
      <Navbar />
    
      <main>
        <section id="accueil">
          <Hero />
        </section>

        <section id="apropos" className="section">
          <About />
        </section>

        <section className="section section--compact">
          <Highlights />
        </section>

        <section id="competences" className="section">
          <Skills />
        </section>

        <section className="section section--compact">
          <Tools />
        </section>

        <section id="projets" className="section">
          <Projects />
        </section>

        <section id="parcours" className="section">
          <Journey />
        </section>

        <section id="services" className="section">
          <Services />
        </section>

        <section className="section">
          <Process />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Accueil;
