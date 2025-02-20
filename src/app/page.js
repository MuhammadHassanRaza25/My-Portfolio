import Hero from "../app/components/Hero.jsx";
import Aboutme from "./components/Aboutme.jsx";
import Header from "./components/Header.jsx";
import data from "./lib/data.js";

export default function Home() {
  return (
    <>
      <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <Header />
        <Hero data={data.personalInfo} />
        <Aboutme data={data.personalInfo} />
      </div>
    </>
  );
}
