import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         Full Stack Developer.
        </SectionTitle>
        <SectionText>
Hey I'm Abdel 👋. Currently a college student I like to craft solid and scalable applications with great user experiences.</SectionText>
<a style={{color: "white"}} href="https://srv-store3.gofile.io/download/df33cd92-3e90-4d37-a424-01d6afdd36e4/Abdellah's%20Resume%20(1).pdf"><Button onClick={props.handleClick}>Get Resume</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;