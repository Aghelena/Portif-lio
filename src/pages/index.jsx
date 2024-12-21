import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";


import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import SkillsOneSection from "@components/sections/SkillsOne";
import SkillsTwoSection from "@components/sections/SkillsTwo";
import SkillsThreeSection from "@components/sections/SkillsThree";


const Home1 = (props) => {
  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-1.jpg"}
      rightPanelImg={"/img/person/2.png"}
    >
      <HeroOneSection />
      <AboutSection />
      <ServicesSection />
      <SkillsOneSection />
      <SkillsTwoSection />
      <SkillsThreeSection />
    </Layouts>
  );
};
export default Home1;
