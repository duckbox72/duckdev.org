import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Luis Felipe Klaus <br />
        Full Stack Developer 
      </SectionTitle>
      <SectionText>
        Hi, i have created this portfolio to showcase and easily share my personal and contact information, skills, projects and accomplishments from a single place.  
      </SectionText>
      
    </LeftSection>
  </Section>
);

export default Hero;