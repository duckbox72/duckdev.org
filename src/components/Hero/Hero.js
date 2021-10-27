import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Luis Felipe Klaus <br />
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi, i have created this portfolio to showcase and easily share my personal and contact information, skills, projects and accomplishments from a single place.  
      </SectionText>
      <Button onClick={() => window.location='https://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;