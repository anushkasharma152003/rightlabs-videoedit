import Image from "next/image";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx"; 
import Section2 from "./components/Section2.jsx";
import OurStory from "./components/Ourstory.jsx";
import WorkSection from "./components/Worksection.jsx";

import TeamSection from "./components/TeamSection.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import CTASection from "./components/CtaSection.jsx";





export default function Home() {
  return (
  
    <div>
    <Navbar />
    <Hero/>

    <OurStory/>
   
    <WorkSection/>
    <TeamSection/>
    {/* <Section2/> */}
    <WhyChooseUs/>
    <CTASection/>
  

  
    </div>
  );
}

