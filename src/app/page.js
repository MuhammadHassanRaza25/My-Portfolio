import Hero from "../app/components/Hero.jsx";
import Aboutme from "./components/Aboutme.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skills.jsx";
import Testimonials from "./components/Testimonials.jsx";
import { ModalProvider } from "./components/ui/animated-modal.jsx";
import data from "./lib/data.js";

export default function Home() {
  return (
    <>
      <ModalProvider>
        <Header />
        <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
          <Hero data={data.personalInfo} />
          <Aboutme data={data.personalInfo} />
        </div>
        <div>
          <Education />
          <Skills data={data.skills} />
        </div>
        <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
          <Services />
        </div>
        <div className="dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
          <Projects />
        </div>
        <div className="dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
          <Testimonials />
        </div>
        <div className="dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </ModalProvider>
    </>
  );
}
