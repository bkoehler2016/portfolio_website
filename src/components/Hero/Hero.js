import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I have over 900+ hours of web devlopment and can help build any kinda of site or application. 
        I recently completed an intense bootcamp with Lambda school. 
      </SectionText>
      <Button onClick={() => (window.location = "https://lambdaschool.com/courses/full-stack-web-development")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
