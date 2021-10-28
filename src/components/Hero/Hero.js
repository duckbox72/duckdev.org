import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Avatar, AvatarContainer, LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
        <AvatarContainer>
          <Avatar src='/images/face_stamp.jpg'/>
        </AvatarContainer> <br />
      <SectionTitle main center>
        Luis Felipe Klaus <br />
        <span>Full Stack Developer</span> 
      </SectionTitle>
      <SectionText>
        Hi, i have created this portfolio to  easily showcase and share from a single place my personal information, projects, skills, accomplishments and contact.  
      </SectionText>
      {/* <Button onClick={() => window.location='https://google.com'}>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;