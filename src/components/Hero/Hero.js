import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         Cybersecurity engineer.
        </SectionTitle>
        <SectionText>
Hey I'm Ayman 👋. Currently a college student I like to craft solid and scalable applications with great user experiences.</SectionText>
<a style={{color: "white"}} href="https://drive.google.com/file/d/1OhDr1pLX3t-Nn62loGV1EZiUwr_G2izp/view?usp=sharing"><Button onClick={props.handleClick}>Get Resume</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;