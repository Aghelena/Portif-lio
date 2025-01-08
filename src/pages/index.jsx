import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import SkillsOneSection from "@components/sections/SkillsOne";
import SkillsTwoSection from "@components/sections/SkillsTwo";
import SkillsThreeSection from "@components/sections/SkillsThree";
import CallToActionSection from "@components/sections/CallToAction";

const Home2 = (props) => {
  return (
    <Layouts fullWidth>
      <HeroOneSection />
      <AboutSection />
      <ServicesSection />
      <SkillsOneSection />
      <SkillsTwoSection />
      <SkillsThreeSection />
      <CallToActionSection />
    </Layouts>
  );
};
export default Home2;
