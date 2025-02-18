import Hero from "../app/components/Hero.jsx";
import Aboutme from "./components/Aboutme.jsx";
import Header from "./components/Header.jsx";
import data from "./lib/data.js";

export default function Home() {
  
  return (
    <>
      <Header/>
      <Hero data={data.personalInfo}/>
      <Aboutme data={data.personalInfo}/>
    </>
  );
}
