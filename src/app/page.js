import Hero from "../app/components/Hero.jsx";
import Aboutme from "./components/Aboutme.jsx";
import Experience from "./components/Experience.jsx";
import Certifications from "./components/Certifications.jsx";
import Skills from "./components/Skills.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { ModalProvider } from "./components/ui/animated-modal.jsx";
import data from "./lib/data.js";

export default function Home() {
  return (
    <>
      <ModalProvider>
        <Header />
        <div className="dark:bg-dot-black/[0.2] bg-dot-black/[0.2]">
          <Hero data={data.personalInfo} />
          <Aboutme data={data.personalInfo} />
        </div>
        <Experience />
        <div className="dark:bg-grid-small-black/[0.2] bg-grid-small-black/[0.2]">
          <Certifications />
        </div>
        <Skills data={data.skills} />
        <div className="dark:bg-dot-black/[0.2] bg-dot-black/[0.2]">
          <Services />
        </div>
        <div className="dark:bg-grid-small-black/[0.2] bg-grid-small-black/[0.2]">
          <Projects />
        </div>
        <div className="dark:bg-grid-black/[0.2] bg-grid-black/[0.2]">
          <Testimonials />
        </div>
        <div className="dark:bg-grid-small-black/[0.2] bg-grid-small-black/[0.2]">
          <Contact />
        </div>
        <Footer />
      </ModalProvider>
    </>
  );
}
