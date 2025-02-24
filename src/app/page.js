import Hero from "../app/components/Hero.jsx";
import Aboutme from "./components/Aboutme.jsx";
import Education from "./components/Education.jsx";
import Header from "./components/Header.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skills.jsx";
import data from "./lib/data.js";

export default function Home() {
  return (
    <>
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
         <Services/>
      </div>
    </>
  );
}
