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
        I have over 700+ hours of web devlopment and can help build any kinda of
        site or application. I recently completed an intense bootcamp with Bloom
        Tech formerly known as Lambda School.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.bloomtech.com/hire-from-bloomtech")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
