import Hero from "../app/components/Hero.jsx";
import data from "./lib/data.js";

export default function Home() {
  
  return (
    <>
      <Hero data={data.personalInfo}/>
    </>
  );
}
