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
        Hi, i have created this portfolio to  easily showcase and share from a single place my personal information, projects, skills, accomplishments and contact.  
      </SectionText>
      <Button onClick={() => window.location='https://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;