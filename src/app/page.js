import Image from "next/image";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx"; 
import Section2 from "./components/Section2.jsx";
import OurStory from "./components/Ourstory.jsx";
import WorkSection from "./components/Worksection.jsx";



export default function Home() {
  return (
  
    <div>
    <Navbar />
    <Hero/>

    <OurStory/>
   
    <WorkSection/>
    <Section2/>

  
    </div>
  );
}

